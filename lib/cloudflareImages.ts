// ─────────────────────────────────────────────────────────────────────────────
// lib/cloudflareImages.ts
// Cloudflare Images URL helpers. Same function names/signatures as the old
// lib/cloudinary.ts so every call site (ProductCard, ImageGallery, etc.)
// swaps over without changes.
// Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH in .env.local
// ─────────────────────────────────────────────────────────────────────────────

const HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH
const BASE = `https://imagedelivery.net/${HASH}`

// Build a Cloudflare Images delivery URL from an image ID + flexible-variant
// param string (e.g. "w=600,h=800,fit=pad").
export function cfImg(imageId: string, params = ''): string {
  if (imageId.startsWith('/')) {
    // Local static asset (public/) — served as-is, no transform.
    return imageId
  }
  return `${BASE}/${imageId}/${params}`
}

// Alias — old call sites used `cld(id, transforms)` directly for one-off
// crops instead of a named preset. Same function, kept under both names so
// only the transform-string syntax at each call site needed converting.
export const cld = cfImg

// ─── Preset transforms ────────────────────────────────────────────────────────

// Quality tiers — mirrors the eco/good split the old Cloudinary presets used:
// small, repeated-everywhere images get squeezed harder; large/detail-critical
// ones stay higher quality. Format (AVIF/WebP/etc.) is negotiated automatically
// per browser regardless of this setting, same as f_auto did on Cloudinary.
const Q_ECO  = 'quality=70'  // cards, thumbnails — small, shown dozens of times per page
const Q_GOOD = 'quality=85'  // PDP, hero — large, detail matters

// Hero slide — desktop, 16:9 landscape
export const heroUrl = (id: string) =>
  cfImg(id, `w=1600,fit=cover,${Q_GOOD}`)

// Hero slide — mobile, full natural portrait (no forced crop — CSS handles fit)
export const heroUrlMobile = (id: string) =>
  cfImg(id, `w=900,fit=scale-down,${Q_GOOD}`)

// Product card thumbnail — 3:4 portrait
export const cardUrl = (id: string) =>
  cfImg(id, `w=600,h=800,fit=pad,background=%23F2F2F2,${Q_ECO}`)

// Product detail hero — large, high quality
export const pdpUrl = (id: string) =>
  cfImg(id, `w=900,h=1200,fit=pad,background=%23F2F2F2,${Q_GOOD}`)

// Cart / order thumbnail — square
export const thumbUrl = (id: string) =>
  cfImg(id, `w=200,h=200,fit=pad,background=%23F2F2F2,${Q_ECO}`)

// Category/mood tile — full lifestyle photo, fills the frame.
// gravity=auto — saliency-based smart crop, so cropping favours the actual
// subject instead of a plain center-crop (equivalent to Cloudinary's g_auto).
export const categoryUrl = (id: string) =>
  cfImg(id, `w=800,h=800,fit=cover,gravity=auto,${Q_GOOD}`)

// Exhibition / trade show gallery — wide enough for retina desktop
export const expoUrl = (id: string) =>
  cfImg(id, `w=1600,h=2133,fit=cover,gravity=auto,${Q_GOOD}`)

// ─── Video helpers ────────────────────────────────────────────────────────────
// Video stays on Cloudinary for now — Cloudflare Images doesn't handle video
// (that's Cloudflare Stream, a separate product not part of this migration).
export { cldVideo, videoPosterUrl } from './cloudinary'

// Placeholder for when no image is uploaded yet
export const PLACEHOLDER_URL = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' fill='%23F0EDE6'%3E%3Crect width='600' height='800'/%3E%3Ctext x='50%25' y='50%25' font-family='serif' font-size='48' fill='%23C9A96E' text-anchor='middle' dominant-baseline='middle'%3ELP%3C/text%3E%3C/svg%3E`
