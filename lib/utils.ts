// ─────────────────────────────────────────────────────────────────────────────
// lib/utils.ts
// ─────────────────────────────────────────────────────────────────────────────

import { clsx, type ClassValue } from 'clsx'
import { twMerge }               from 'tailwind-merge'
import type { ProductSize, SizeOption } from '@/types'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

// Format price in Indian Rupees: 8500 → '₹8,500'
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style:                 'currency',
    currency:              'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Capitalise first letter of each word
export function titleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase())
}

// A color swatch's "selected" ring is normally drawn in the swatch's own
// hex — a nice touch for saturated colors, but a near-white hex (e.g. "Bold
// White") makes the ring blend into the page and disappear. Pale colors get
// a neutral dark ring instead so the selected state stays visible.
export function swatchRingColor(hex: string): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.85 ? 'var(--color-lp-ink)' : hex
}

// Product cards/PDP default to a concrete size (and thus a concrete price)
// instead of leaving the size unpicked and showing a "From ₹X" range —
// Cabin when the variant has one, otherwise its first listed size.
export function defaultSize(sizes: SizeOption[]): ProductSize | null {
  return sizes.find((s) => s.size === 'Cabin')?.size ?? sizes[0]?.size ?? null
}

// Convert category slug to display label
export function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    trolley:     'Trolley Bags',
    set:         'Sets',
    backpack:    'Backpacks',
    'office-bag':'Office Bags',
    vanity:      'Vanity Cases',
    kids:        'Kids',
    duffle:      'Duffle Bags',
    all:         'All Products',
  }
  return map[cat] ?? titleCase(cat)
}
