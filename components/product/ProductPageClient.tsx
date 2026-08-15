'use client'

import { useState, useEffect } from 'react'
import { ImageGallery } from './ImageGallery'
import { ProductInfo }  from './ProductInfo'
import { pdpUrl, PLACEHOLDER_URL } from '@/lib/cloudflareImages'
import type { Product } from '@/types'

interface Props {
  product:       Product
  defaultColor?: string
}

export function ProductPageClient({ product, defaultColor }: Props) {
  const defaultIndex = defaultColor
    ? Math.max(0, product.variants.findIndex(
        v => v.color.toLowerCase() === defaultColor.toLowerCase()
      ))
    : 0

  const [colorIndex, setColorIndex] = useState(defaultIndex)

  // Warm the cache for every OTHER color's first photo as soon as the page
  // loads — not just the one currently shown. So by the time someone clicks
  // a color swatch, that swap is a cache hit instead of a cold fetch.
  useEffect(() => {
    product.variants.forEach((v, i) => {
      if (i === colorIndex) return
      const firstImage = v.images?.[0] ?? product.images[i] ?? product.images[0]
      if (!firstImage) return
      const preload = new window.Image()
      preload.src = pdpUrl(firstImage) || PLACEHOLDER_URL
    })
    // Only needs to run once per product page load — re-running on every
    // color change would keep re-fetching the color just switched away from.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  // A variant with its own `images` gallery gets a fresh, color-scoped
  // thumbnail strip (reset to the first shot of that color). Variants
  // without one fall back to the legacy flat `product.images` array,
  // indexed by color — unchanged behavior for every existing product.
  const variantImages = product.variants[colorIndex]?.images
  const galleryImages       = variantImages && variantImages.length > 0 ? variantImages : product.images
  const galleryActiveIndex  = variantImages && variantImages.length > 0 ? 0 : colorIndex

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
      <div className="md:sticky md:top-24 md:self-start">
        <ImageGallery
          images={galleryImages}
          productName={product.name}
          activeColorIndex={galleryActiveIndex}
          recentPurchases={product.recentPurchases}
        />
      </div>
      <div>
        <ProductInfo
          product={product}
          defaultColor={defaultColor}
          onColorChange={setColorIndex}
        />
      </div>
    </div>
  )
}
