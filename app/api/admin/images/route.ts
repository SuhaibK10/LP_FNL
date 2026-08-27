// ─────────────────────────────────────────────────────────────────────────────
// app/api/admin/images/route.ts
// Lists every image in the Cloudflare Images account, cross-referenced
// against config/products.ts so the media library knows which product/color
// each one belongs to. Server-side only — the Images API token never
// reaches the browser. Gated by proxy.ts (shared-password admin session).
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { buildImageIndex } from '@/lib/adminImageIndex'

interface CloudflareImage {
  id:       string
  filename: string
  uploaded: string
}

export async function GET() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const token     = process.env.CLOUDFLARE_IMAGES_API_TOKEN
  if (!accountId || !token) {
    return NextResponse.json({ error: 'Cloudflare Images not configured' }, { status: 500 })
  }

  const images: CloudflareImage[] = []
  let page = 1
  // Cloudflare's v1 list endpoint paginates at up to 100 per page — keep
  // requesting pages until one comes back with fewer than the max, which
  // means it was the last page.
  while (true) {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1?page=${page}&per_page=100`,
      { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' }
    )
    const json = await res.json()
    if (!json.success) {
      return NextResponse.json({ error: 'Cloudflare Images request failed', details: json.errors }, { status: 502 })
    }
    const batch: CloudflareImage[] = json.result.images
    images.push(...batch)
    if (batch.length < 100) break
    page += 1
  }

  const index = buildImageIndex()
  const enriched = images.map((img) => ({
    id:        img.id,
    filename:  img.filename,
    uploaded:  img.uploaded,
    usedBy:    index.get(img.id) ?? [],
  }))

  return NextResponse.json({ images: enriched })
}
