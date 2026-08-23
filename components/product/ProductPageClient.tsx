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

  // Hovering a swatch in ProductInfo previews that color's gallery without
  // actually selecting it — cart/price/URL all stay tied to colorIndex.
  const [hoveredColorIndex, setHoveredColorIndex] = useState<number | null>(null)
  const previewColorIndex = hoveredColorIndex ?? colorIndex

  // Which photo (within the current color) the main gallery shows — lifted
  // up from ImageGallery so the desktop thumbnail strip, which now renders
  // inside ProductInfo instead (a sibling component), can drive the exact
  // same gallery state a click in either location.
  const [activeAngle, setActiveAngle] = useState(0)

  // Warm the cache for every OTHER color's first photo as soon as the page
  // loads — not just the one currently shown. So by the time someone clicks
  // a color swatch, that swap is a cache hit instead of a cold fetch.
  useEffect(() => {
    product.variants.forEach((v, i) => {
      if (i === colorIndex) return
      const firstImage = v.images?.[0] ?? product.images[i] ?? product.images[0]
      if (!firstImage) return
      const preload = new window.Image()
      preload.src = pdpUrl(firstImage, product.imageFit) || PLACEHOLDER_URL
    })
    // Only needs to run once per product page load — re-running on every
    // color change would keep re-fetching the color just switched away from.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product])

  // A variant with its own `images` gallery gets a fresh, color-scoped
  // thumbnail strip (reset to the first shot of that color). Variants
  // without one fall back to the legacy flat `product.images` array,
  // indexed by color — unchanged behavior for every existing product.
  const variantImages = product.variants[previewColorIndex]?.images
  const galleryImages       = variantImages && variantImages.length > 0 ? variantImages : product.images
  const galleryActiveIndex  = variantImages && variantImages.length > 0 ? 0 : previewColorIndex

  // Keep `activeAngle` in sync with `galleryActiveIndex` exactly the way
  // ImageGallery used to do internally: for a product with its own
  // per-variant images, this is a constant 0, so it only fires on mount —
  // switching color does NOT reset which angle is showing. For a legacy
  // product sharing one flat `product.images` array indexed by color, this
  // fires on every hover/click, since colour and photo are the same index
  // there. Reproducing this exactly (rather than always resetting to 0)
  // avoids changing gallery behavior as a side effect of this split.
  useEffect(() => { setActiveAngle(galleryActiveIndex) }, [galleryActiveIndex])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
      <div className="md:sticky md:top-24 md:self-start">
        <ImageGallery
          images={galleryImages}
          productName={product.name}
          active={activeAngle}
          onActiveChange={setActiveAngle}
          recentPurchases={product.recentPurchases}
          imageFit={product.imageFit}
        />
      </div>
      <div>
        <ProductInfo
          product={product}
          defaultColor={defaultColor}
          onColorChange={setColorIndex}
          onColorHover={setHoveredColorIndex}
          galleryActiveAngle={activeAngle}
          onGalleryAngleChange={setActiveAngle}
        />
      </div>
    </div>
  )
}
