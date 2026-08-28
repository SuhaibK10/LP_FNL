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
    code:            'NITIN15',
    label:           '15% off your order',
    discountPercent: 0.15,
    enabled:         true,
  },
  {
    code:            'HERITAGE2099',
    label:           'Heritage for ₹2,099',
    discountPercent: 0.157028,
    productSlug:     'heritage-briefcase',
    size:            'One Size',
    enabled:         true,
  },
  {
    code:            'HERITAGE1499',
    label:           'Heritage for ₹1,499',
    discountPercent: 0.397992,
    productSlug:     'heritage-briefcase',
    size:            'One Size',
    enabled:         true,
  },
  {
    code:            'HERITAGE1799',
    label:           'Heritage for ₹1,799',
    discountPercent: 0.27751,
    productSlug:     'heritage-briefcase',
    size:            'One Size',
    enabled:         true,
  },
  {
    code:            'AEROSMART3990',
    label:           'AeroSmart 3-in-1 for ₹3,990',
    discountPercent: 0.10337078651685393,
    productSlug:     'aerosmart-3in1',
    size:            'Cabin',
    enabled:         true,
  },
  {
    code:            'AEROSMARTPRO4290',
    label:           'AeroSmart Pro for ₹4,290',
    discountPercent: 0.1402805611222445,
    productSlug:     'aerosmart-pro',
    size:            'Cabin',
    enabled:         true,
  },
]

export function getCoupon(code: string): Coupon | undefined {
  const normalized = code.trim().toUpperCase()
  if (!normalized) return undefined
  return COUPONS.find(c => c.enabled && c.code === normalized)
}
