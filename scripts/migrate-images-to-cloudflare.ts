// ─────────────────────────────────────────────────────────────────────────────
// scripts/migrate-images-to-cloudflare.ts
// One-time migration: pushes every product/hero image into Cloudflare Images
// via "upload via URL" (Cloudflare fetches the file server-side, nothing
// downloaded locally), and writes a mapping file (old Cloudinary id/URL ->
// new Cloudflare image ID) for the next step to rewrite config/products.ts.
//
// Resumable — safe to re-run if it's interrupted, already-mapped ids are
// skipped and the map file is written after every single upload.
//
// Usage: npx tsx scripts/migrate-images-to-cloudflare.ts
// ─────────────────────────────────────────────────────────────────────────────

import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'fs'
import { PRODUCTS, HERO_SLIDES } from '../config/products'

const ACCOUNT_ID        = process.env.CLOUDFLARE_ACCOUNT_ID
const API_TOKEN         = process.env.CLOUDFLARE_IMAGES_API_TOKEN
const CLOUDINARY_CLOUD  = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'dpepctqdj'
const MAP_PATH          = 'scripts/cloudflare-image-map.json'

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_IMAGES_API_TOKEN in .env.local')
  process.exit(1)
}

function toSourceUrl(id: string): string {
  if (id.startsWith('http')) return id
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/${id}`
}

// Collect every unique image identifier referenced anywhere in the catalog.
const ids = new Set<string>()

for (const slide of HERO_SLIDES) {
  if (slide.image) ids.add(slide.image)
  if (slide.desktopImage) ids.add(slide.desktopImage)
}

for (const p of PRODUCTS) {
  for (const img of p.images ?? []) if (img) ids.add(img)
  for (const v of p.variants) {
    for (const img of v.images ?? []) if (img) ids.add(img)
  }
}

console.log(`Found ${ids.size} unique image references to migrate.`)

mkdirSync('scripts', { recursive: true })
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
    if (existing[id]) { done++; continue } // already migrated in a prior run
    const newId = await uploadOne(id)
    if (newId) {
      existing[id] = newId
      done++
      console.log(`✓ (${done}/${ids.size}) ${id} → ${newId}`)
    } else {
      failed++
    }
    writeFileSync(MAP_PATH, JSON.stringify(existing, null, 2))
    await new Promise((r) => setTimeout(r, 150)) // gentle rate limiting
  }
  console.log(`\nDone. ${Object.keys(existing).length}/${ids.size} images mapped, ${failed} failed.`)
  console.log(`Mapping saved to ${MAP_PATH}`)
}

main()
