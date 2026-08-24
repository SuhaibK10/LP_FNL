// ─────────────────────────────────────────────────────────────────────────────
// config/reviews.ts
// Manually curated customer reviews, shown per product from the shop grid
// card. Add entries here as reviews come in — a slug with no entry just
// shows an empty state in the modal, nothing breaks.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:    string
  rating:  number   // 1–5
  date:    string   // e.g. '12 Aug 2026'
  text:    string
  /** Cloudflare Images IDs — same pipeline as product photos */
  images?: string[]
  /** Cloudflare Stream UID — same pipeline as product demo videos */
  video?:  string
}

export const PRODUCT_REVIEWS: Record<string, Review[]> = {
  'aerosmart-3in1': [
    {
      name:   'Naveen',
      rating: 5,
      date:   '20 Aug 2026',
      text:   "The wheels glides so smoothly with barely a push, doesn't catch or wobble even fully loaded. Makes the whole thing feel way lighter than it is.",
      images: ['ae0a150f-dba0-4c81-2b99-03306e475300'],
    },
    {
      name:   'Meera ',
      rating: 5,
      date:   '22 Aug 2026',
      text:   "It's basically two bags in one,the small case pops off for toiletries,Packed for a 3-day trip in half the time I usually take. Higly Organizable ",
      images: ['a40494d5-2b7a-40c9-2d4b-e46821d74500'],
    },
    {
      name:   'Arjun R.',
      rating: 5,
      date:   '23 Aug 2026',
      text:   "The finish is stunning in person looks elegant, highly premium.",
      video:  '0efce2ec96bce0c80eca870babf6a851',
    },
  ],
}

export function getReviewsForProduct(slug: string): Review[] {
  return PRODUCT_REVIEWS[slug] ?? []
}

// ── Manual rating badge ─────────────────────────────────────────────────────
// A manually-set aggregate rating shown as the same star-pill badge Myntra
// listings get near the product name — for non-Myntra products where a
// rating is known but there's no Myntra data to source it from. Independent
// of the individual reviews above.
export const MANUAL_RATINGS: Record<string, { rating: number; count: number }> = {
  'aerosmart-3in1': { rating: 4.6, count: 386 },
}

export function getManualRating(slug: string) {
  return MANUAL_RATINGS[slug]
}
