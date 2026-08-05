// ─────────────────────────────────────────────────────────────────────────────
// components/home/HomeEditorial.tsx
// Homepage orchestrator — imports sections, no logic here.
// Add, remove, or reorder sections by editing this file only.
// ─────────────────────────────────────────────────────────────────────────────

import { HeroSection }         from './sections/HeroSection'
import { BestSellersCarousel } from './sections/BestSellersCarousel'
import { PromoBanner }         from './sections/PromoBanner'
import { CategoryGrid }        from './sections/CategoryGrid'
import { ProductSpotlight }    from './sections/ProductSpotlight'
import { ReviewsSection }      from './sections/ReviewsSection'
import { ExhibitionGallery }   from './sections/ExhibitionGallery'
import { EXHIBITION_GALLERY_HOME_ENABLED } from '@/config/exhibitions'
import { ScrollShowcase }      from './sections/ScrollShowcase'
import { VERTEX_SHOWCASE_HOME_ENABLED, VERTEX_SHOWCASE_HEADER, VERTEX_SHOWCASE_STOPS } from '@/config/vertexShowcase'
import { ShopByColorPrice }    from './sections/ShopByColorPrice'
import { SHOP_BY_COLOR_PRICE_HOME_ENABLED } from '@/config/shopByColorPrice'

export function HomeEditorial() {
  return (
    <main>
      <HeroSection />
      {VERTEX_SHOWCASE_HOME_ENABLED && (
        <ScrollShowcase
          eyebrow={VERTEX_SHOWCASE_HEADER.eyebrow}
          heading={VERTEX_SHOWCASE_HEADER.heading}
          stops={VERTEX_SHOWCASE_STOPS}
        />
      )}
      <CategoryGrid />
      {/* Temporarily disabled — "First-Time Buyers" promo turned off. */}
      {false && <PromoBanner />}
      <BestSellersCarousel />
      {SHOP_BY_COLOR_PRICE_HOME_ENABLED && <ShopByColorPrice />}
      <ProductSpotlight />
      {EXHIBITION_GALLERY_HOME_ENABLED && <ExhibitionGallery />}
      <ReviewsSection />
    </main>
  )
}
