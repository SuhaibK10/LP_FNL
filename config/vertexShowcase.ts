// ─────────────────────────────────────────────────────────────────────────────
// config/vertexShowcase.ts
// Content for the homepage ScrollShowcase section — a lifestyle showcase
// spanning several different backpacks (not a single-product spotlight).
//
// productSlug is intentionally left unset on every stop: each photo is a
// different bag and the product mapping hasn't been confirmed yet, so
// "View Product" won't render until a slug is added per stop. Add
// `productSlug: '...'` (matching config/products.ts) once confirmed.
// ─────────────────────────────────────────────────────────────────────────────

import type { ShowcaseStop } from '@/components/home/sections/ScrollShowcase'

// Homepage switch — flip to false to pull this showcase off the homepage.
export const VERTEX_SHOWCASE_HOME_ENABLED = false

export const VERTEX_SHOWCASE_HEADER = {
  eyebrow: 'The Collection',
  heading: 'Our Flagship Backpacks',
}

export const VERTEX_SHOWCASE_STOPS: ShowcaseStop[] = [
  {
    image: 'WhatsApp_Image_2026-07-29_at_21.42.33_zftkxo.jpg',
    heading: 'Everyday, elevated',
    body: 'A clean silhouette that moves from the office to everywhere after it, without ever looking like it\'s trying.',
    // TODO: add productSlug once confirmed
  },
  {
    image: 'WhatsApp_Image_2026-07-29_at_21.42.33_2_dcnw8w.jpg',
    heading: 'Ready when you are',
    body: 'Set it down, pick it up, keep moving. Built for the in-between moments of a real day.',
    // TODO: add productSlug once confirmed
  },
  {
    image: 'WhatsApp_Image_2026-07-29_at_21.42.33_3_ymlk7x.jpg',
    heading: 'Structured, not stiff',
    body: 'A tailored shape that holds itself together — sharp enough for a boardroom, easy enough for a Sunday.',
    // TODO: add productSlug once confirmed
  },
  {
    image: 'WhatsApp_Image_2026-07-29_at_21.42.33_1_zn9j38.jpg',
    heading: 'Made for the commute',
    body: 'Platform to platform, meeting to meeting — a pack that keeps pace without slowing you down.',
    // TODO: add productSlug once confirmed
  },
  {
    image: 'WhatsApp_Image_2026-07-29_at_21.42.33_4_rkmtnw.jpg',
    heading: 'Quiet confidence',
    body: 'No loud branding, no unnecessary detail. Just a bag that does its job and looks good doing it.',
    // TODO: add productSlug once confirmed
  },
  {
    image: 'WhatsApp_Image_2026-07-29_at_21.42.33_5_qjkcuu.jpg',
    heading: 'Held, not just carried',
    body: 'Designed to look as considered in hand as it does on your back.',
    // TODO: add productSlug once confirmed
  },
]
