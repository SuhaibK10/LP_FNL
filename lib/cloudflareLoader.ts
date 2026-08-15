// ─────────────────────────────────────────────────────────────────────────────
// lib/cloudflareLoader.ts
// Custom Next.js Image loader for Cloudflare Images. Every helper in
// lib/cloudflareImages.ts already bakes a `w=` param into its URL via the
// shared cfImg() builder — this loader rewrites it to the width Next
// actually requests, so <Image sizes="..."> produces a real srcset.
// ─────────────────────────────────────────────────────────────────────────────

interface LoaderParams {
  src: string
  width: number
  quality?: number
}

export default function cloudflareLoader({ src, width }: LoaderParams): string {
  // Local static assets (public/) don't go through imagedelivery.net —
  // pass them through untouched.
  if (!src.includes('imagedelivery.net')) return src

  const widthMatch  = src.match(/w=(\d+)/)
  const heightMatch = src.match(/h=(\d+)/)
  if (!widthMatch) return src

  let newSrc = src.replace(/w=\d+/, `w=${width}`)

  // If a fixed h= is baked in (card/pdp/thumb/category presets all pin an
  // exact aspect ratio), it must scale proportionally with the new width —
  // otherwise every non-baseline breakpoint requests a distorted box (e.g.
  // a 1:1 square preset asking for w=1920,h=800), which fit=cover then has
  // to crop far more aggressively than intended.
  if (heightMatch) {
    const originalWidth  = parseInt(widthMatch[1], 10)
    const originalHeight = parseInt(heightMatch[1], 10)
    const newHeight = Math.round((originalHeight / originalWidth) * width)
    newSrc = newSrc.replace(/h=\d+/, `h=${newHeight}`)
  }

  return newSrc
}
