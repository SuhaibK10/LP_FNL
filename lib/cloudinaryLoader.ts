// ─────────────────────────────────────────────────────────────────────────────
// lib/cloudinaryLoader.ts
// Custom Next.js Image loader for Cloudinary. Every helper in lib/cloudinary.ts
// already bakes a `w_`/`h_` transform into its URL via the shared `cld()`
// builder — this loader just rewrites those to the width Next actually
// requests, so <Image sizes="..."> produces a real srcset again.
//
// Deliberately bypasses /_next/image (Vercel's metered Image Optimization
// API): images go straight browser → Cloudinary. That API's quota being
// exhausted is what caused the July 2026 402 outage (images.unoptimized was
// the stopgap fix); this restores responsive sizing without going anywhere
// near that mechanism again.
// ─────────────────────────────────────────────────────────────────────────────

interface LoaderParams {
  src: string
  width: number
  quality?: number
}

export default function cloudinaryLoader({ src, width }: LoaderParams): string {
  // Match everything up to the last "/" before the public_id as the
  // transform chain, in case a URL ever carries more than one segment.
  const match = src.match(/\/upload\/(.+)\/([^/]+)$/)
  if (!match) return src

  const transforms  = match[1]
  const publicId    = match[2]
  const widthMatch  = transforms.match(/w_(\d+)/)
  const heightMatch = transforms.match(/h_(\d+)/)
  if (!widthMatch) return src

  let newTransforms = transforms.replace(/w_\d+/, `w_${width}`)

  if (heightMatch) {
    const originalWidth  = parseInt(widthMatch[1], 10)
    const originalHeight = parseInt(heightMatch[1], 10)
    const newHeight = Math.round((originalHeight / originalWidth) * width)
    newTransforms = newTransforms.replace(/h_\d+/, `h_${newHeight}`)
  }

  return src.replace(`/upload/${transforms}/${publicId}`, `/upload/${newTransforms}/${publicId}`)
}
