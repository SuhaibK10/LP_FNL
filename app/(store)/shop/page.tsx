// ─────────────────────────────────────────────────────────────────────────────
// app/(store)/shop/page.tsx
// Shop page — server component. ProductGrid is client for filtering.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata }        from 'next'
import { Suspense }             from 'react'
import { ProductGrid }          from '@/components/shop/ProductGrid'
import { ShopSizeGuideButton }  from '@/components/shop/ShopSizeGuideButton'

export const metadata: Metadata = {
  title:       'Shop',
  description: 'Browse the complete Louis Polo collection - trolley bags, sets, backpacks and more.',
  alternates:  { canonical: '/shop' },
}

export default function ShopPage() {
  return (
    <div className="pt-12.5 md:pt-18">
      {/* Page header */}
      <div className="section-pad" style={{ paddingTop: '0.5rem', paddingBottom: 0 }}>
        <div className="container-lp">
          <span className="lp-eyebrow mb-2!">Our collection</span>
          <div className="flex items-end justify-between gap-4">
            <h1 className="lp-heading-lg text-[1.75rem]! md:text-[2.5rem]! mb-3">All Products</h1>
            <div className="mb-3 shrink-0">
              <ShopSizeGuideButton />
            </div>
          </div>
          <p className="font-body text-[var(--color-lp-muted)] text-base mb-4">
            Built for every kind of traveller.
          </p>
        </div>
      </div>

      <div className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container-lp">
          {/* Suspense required: ProductGrid reads ?category= via useSearchParams */}
          <Suspense fallback={null}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
