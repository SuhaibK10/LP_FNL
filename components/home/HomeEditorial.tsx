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

export function HomeEditorial() {
  return (
    <main>
      <HeroSection />
      <CategoryGrid />
      <PromoBanner />
      <BestSellersCarousel />
      <ProductSpotlight />
      {EXHIBITION_GALLERY_HOME_ENABLED && <ExhibitionGallery />}
      <ReviewsSection />
    </main>
  )
}
