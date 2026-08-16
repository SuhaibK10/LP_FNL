// ─────────────────────────────────────────────────────────────────────────────
// scripts/migrate-video-to-cloudflare-stream.ts
// One-time (and repeatable) migration: uploads a video from an existing URL
// into Cloudflare Stream, waits for encoding, enables a downloadable direct
// MP4, waits for that to finish too, then prints the finished cfVideo() URL
// and the customer subdomain code needed for NEXT_PUBLIC_CLOUDFLARE_STREAM_CODE.
//
// Usage: npx tsx scripts/migrate-video-to-cloudflare-stream.ts <source-video-url>
// ─────────────────────────────────────────────────────────────────────────────

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const API_TOKEN  = process.env.CLOUDFLARE_IMAGES_API_TOKEN // same token — Stream + Images permission

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_IMAGES_API_TOKEN in .env.local')
  process.exit(1)
}

const sourceUrl = process.argv[2]
if (!sourceUrl) {
  console.error('Usage: npx tsx scripts/migrate-video-to-cloudflare-stream.ts <source-video-url>')
  process.exit(1)
}

const API_BASE = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/stream`

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function uploadFromUrl(url: string) {
  const res = await fetch(`${API_BASE}/copy`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  })
  const json = await res.json()
  if (!json.success) throw new Error(`Upload failed: ${JSON.stringify(json.errors)}`)
  return json.result.uid as string
}

async function waitForEncoding(uid: string) {
  console.log('Waiting for Stream to finish encoding...')
  while (true) {
    const res = await fetch(`${API_BASE}/${uid}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
    const json = await res.json()
    const state = json.result?.status?.state
    if (state === 'ready') return
    if (state === 'error') throw new Error(`Encoding failed: ${JSON.stringify(json.result.status)}`)
    console.log(`  ...still encoding (${state ?? 'pending'})`)
    await sleep(4000)
  }
}

async function enableDownload(uid: string) {
  const res = await fetch(`${API_BASE}/${uid}/downloads`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  })
  const json = await res.json()
  if (!json.success) throw new Error(`Enable download failed: ${JSON.stringify(json.errors)}`)
  return json.result.default.url as string
}

async function waitForDownloadReady(uid: string) {
  console.log('Waiting for the downloadable MP4 to be generated...')
  while (true) {
    const res = await fetch(`${API_BASE}/${uid}/downloads`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
    const json = await res.json()
    const status = json.result?.default?.status
    if (status === 'ready') return json.result.default.url as string
    console.log(`  ...still preparing (${status ?? 'pending'})`)
    await sleep(4000)
  }
}

async function main() {
  console.log(`Uploading from: ${sourceUrl}`)
  const uid = await uploadFromUrl(sourceUrl)
  console.log(`Video UID: ${uid}`)

  await waitForEncoding(uid)
  console.log('Encoding done. Enabling downloadable MP4...')

  await enableDownload(uid)
  const finalUrl = await waitForDownloadReady(uid)

  console.log('\nDone.')
  console.log(`Video UID:        ${uid}`)
  console.log(`Direct MP4 URL:   ${finalUrl}`)

  const match = finalUrl.match(/customer-([a-z0-9]+)\.cloudflarestream\.com/)
  if (match) {
    console.log(`Customer code:    ${match[1]}`)
    console.log(`\nAdd to .env.local (if not already set):`)
    console.log(`NEXT_PUBLIC_CLOUDFLARE_STREAM_CODE=${match[1]}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
