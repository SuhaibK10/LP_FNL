// ─────────────────────────────────────────────────────────────────────────────
// lib/adminImageIndex.ts
// Reverse-index: Cloudflare image ID → which product/variant it belongs to.
// Built by walking config/products.ts rather than tagging images with
// Cloudflare metadata, so it can never drift out of sync with the catalog —
// there's nothing to backfill, and it updates itself the moment a product's
// images change.
// ─────────────────────────────────────────────────────────────────────────────

import { PRODUCTS } from '@/config/products'

export interface ImageRef {
  productName: string
  productSlug: string
  category:    string
  color?:      string
}

export function buildImageIndex(): Map<string, ImageRef[]> {
  const index = new Map<string, ImageRef[]>()

  function add(imageId: string, ref: ImageRef) {
    const existing = index.get(imageId)
    if (existing) existing.push(ref)
    else index.set(imageId, [ref])
  }

  for (const product of PRODUCTS) {
    for (const imageId of product.images ?? []) {
      add(imageId, { productName: product.name, productSlug: product.slug, category: product.category })
    }
    for (const variant of product.variants) {
      for (const imageId of variant.images ?? []) {
        add(imageId, {
          productName: product.name,
          productSlug: product.slug,
          category:    product.category,
          color:       variant.color,
        })
      }
    }
  }

  return index
}
