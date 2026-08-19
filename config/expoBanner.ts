// ─────────────────────────────────────────────────────────────────────────────
// config/expoBanner.ts
// Time-boxed homepage banner for an upcoming trade show. Flip
// EXPO_BANNER_ENABLED off once the show is over — everything else here
// (copy, image, catalogue link) can just be left in place for next time.
//
// IMAGE: a Cloudflare Images ID, same as product photos (see
// lib/cloudflareImages.ts). Leave blank to show the placeholder monogram.
//
// CATALOGUE_URL: wherever the PDF catalogue is hosted — a public URL, or a
// local file dropped in /public (e.g. '/catalogue.pdf').
// ─────────────────────────────────────────────────────────────────────────────

export const EXPO_BANNER_ENABLED = true

export const EXPO_BANNER = {
  eyebrow:      'Gifts World Expo · Bengaluru 2026',
  heading:      'Meet Us at Stall D24',
  dateLine:     '20–22 August',
  locationLine: 'Tripura Vasini, Palace Grounds, Bengaluru',
  ctaLabel:     'Explore Catalogue',
  image:        '61638f2e-84f7-4d33-1c08-96961cf8e800',
  // TODO: paste the catalogue PDF's URL (or a /public path once uploaded).
  catalogueUrl: '',
}
