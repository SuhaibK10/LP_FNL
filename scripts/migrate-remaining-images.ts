// ─────────────────────────────────────────────────────────────────────────────
// scripts/migrate-remaining-images.ts
// Follow-up to migrate-images-to-cloudflare.ts — that script only scanned
// config/products.ts (PRODUCTS + HERO_SLIDES). It missed two component-local
// image lists: CategoryGrid.tsx's CATEGORY_CARDS and ReviewsSection.tsx's
// REVIEWS[].photos. This picks those up, appending to the same map file.
//
// Usage: npx tsx scripts/migrate-remaining-images.ts
// ─────────────────────────────────────────────────────────────────────────────

import { writeFileSync, existsSync, readFileSync } from 'fs'

const ACCOUNT_ID       = process.env.CLOUDFLARE_ACCOUNT_ID
const API_TOKEN        = process.env.CLOUDFLARE_IMAGES_API_TOKEN
const CLOUDINARY_CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'dpepctqdj'
const MAP_PATH         = 'scripts/cloudflare-image-map.json'

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_IMAGES_API_TOKEN in .env.local')
  process.exit(1)
}

function toSourceUrl(id: string): string {
  if (id.startsWith('http')) return id
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/${id}`
}

const categoryContent = readFileSync('components/home/sections/CategoryGrid.tsx', 'utf-8')
const reviewsContent  = readFileSync('components/home/sections/ReviewsSection.tsx', 'utf-8')

const ids = new Set<string>()

for (const m of categoryContent.matchAll(/image:\s*'([^']+)'/g)) ids.add(m[1])

for (const block of reviewsContent.matchAll(/photos:\s*\[([\s\S]*?)\]/g)) {
  for (const m of block[1].matchAll(/'([^']+)'/g)) ids.add(m[1])
}

console.log(`Found ${ids.size} unique image references to migrate.`)

const existing: Record<string, string> = existsSync(MAP_PATH)
  ? JSON.parse(readFileSync(MAP_PATH, 'utf-8'))
  : {}

async function uploadOne(id: string): Promise<string | null> {
  const sourceUrl = toSourceUrl(id)
  const form = new FormData()
  form.set('url', sourceUrl)
  form.set('requireSignedURLs', 'false')

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
    { method: 'POST', headers: { Authorization: `Bearer ${API_TOKEN}` }, body: form }
  )
  const json = await res.json()
  if (!json.success) {
    console.error(`✗ ${id} — ${JSON.stringify(json.errors)}`)
    return null
  }
  return json.result.id as string
}

async function main() {
  let done = 0
  let failed = 0
  for (const id of ids) {
    if (existing[id]) { done++; continue }
    const newId = await uploadOne(id)
    if (newId) {
      existing[id] = newId
      done++
      console.log(`✓ (${done}/${ids.size}) ${id} → ${newId}`)
    } else {
      failed++
    }
    writeFileSync(MAP_PATH, JSON.stringify(existing, null, 2))
    await new Promise((r) => setTimeout(r, 150))
  }
  console.log(`\nDone. ${done}/${ids.size} mapped, ${failed} failed.`)
}

main()
