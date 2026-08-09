// ─────────────────────────────────────────────────────────────────────────────
// lib/imagePlaceholder.ts
// Shared "shimmer" blur-up placeholder for <Image placeholder="blur">.
// Renders instantly from an inline SVG (no network request), so the layout
// never sits fully blank while the real photo streams in from Cloudinary.
// ─────────────────────────────────────────────────────────────────────────────

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F2F2F2" offset="20%" />
      <stop stop-color="#E7E7E7" offset="50%" />
      <stop stop-color="#F2F2F2" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#F2F2F2" />
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export const shimmerPlaceholder = (w: number, h: number) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`
