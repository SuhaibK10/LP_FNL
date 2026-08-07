// ─────────────────────────────────────────────────────────────────────────────
// config/coupons.ts
// One-off promo codes. Most are scoped to a single product + size (only those
// line items get discounted, everything else in the cart stays full price);
// a coupon with no productSlug/size applies to the whole cart subtotal
// instead — the only difference from SALE_CONFIG is that this one needs a
// code typed in rather than being automatic.
//
// Not persisted anywhere — a code stays live until you flip `enabled` to
// false or delete its entry. There's no redemption cap; it's a "special
// code you hand out," not a single-use-ever code (that would need a DB
// table to track redemptions, which this intentionally skips).
// ─────────────────────────────────────────────────────────────────────────────

import type { ProductSize } from '@/types'

export interface Coupon {
  code:            string        // entered by the customer, case-insensitive
  label:           string        // shown next to the discount line at checkout
  discountPercent: number        // 0.4 = 40% off
  productSlug?:    string        // omit for a site-wide coupon (whole cart)
  size?:           ProductSize   // only used when productSlug is set
  enabled:         boolean
}

export const COUPONS: Coupon[] = [
  {
    code:            'DIAMOND40',
    label:           '40% off DiamondLux Set of 3',
    discountPercent: 0.4,
    productSlug:     'diamondlux-set',
    size:            'Set of 3',
    enabled:         true,
  },
  {
    code:            'VISHVA30',
    label:           '30% off your order',
    discountPercent: 0.3,
    enabled:         true,
  },
  {
    code:            'EXCEPTION',
    label:           'DiamondLux Set of 3 at ₹8,990',
    // (11499 - 8990) / 11499 — computed precisely so the discount rounds to
    // exactly ₹2,509 off, landing on ₹8,990 at the current price. If the
    // set's price ever changes, recompute this so it still lands on 8990.
    discountPercent: 0.21819288633794243,
    productSlug:     'diamondlux-set',
    size:            'Set of 3',
    enabled:         true,
  },
]

export function getCoupon(code: string): Coupon | undefined {
  const normalized = code.trim().toUpperCase()
  if (!normalized) return undefined
  return COUPONS.find(c => c.enabled && c.code === normalized)
}
