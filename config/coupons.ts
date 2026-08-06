// ─────────────────────────────────────────────────────────────────────────────
// config/coupons.ts
// One-off promo codes, scoped to a single product + size. Unlike SALE_CONFIG
// (a flat, site-wide percentage), a coupon only discounts matching line
// items — everything else in the cart still charges full price.
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
  productSlug:     string        // only this product qualifies
  size:            ProductSize   // only this size qualifies
  enabled:         boolean
}

export const COUPONS: Coupon[] = [
  {
    code:            'DIAMOND40',
    label:           '40% off DiamondLux Set of 3',
    discountPercent: 0.4,
    productSlug:     'diamondlux',
    size:            'Set of 3',
    enabled:         true,
  },
]

export function getCoupon(code: string): Coupon | undefined {
  const normalized = code.trim().toUpperCase()
  if (!normalized) return undefined
  return COUPONS.find(c => c.enabled && c.code === normalized)
}
