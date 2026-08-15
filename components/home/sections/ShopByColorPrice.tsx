'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ShopByColorPrice.tsx
// "Shop by Color / Under ₹2,999" — a parallel-tab section styled like
// CategoryGrid (grid tab) and the Best Sellers / Sale carousels (price tab).
// Toggle: SHOP_BY_COLOR_PRICE_HOME_ENABLED in config/shopByColorPrice.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react'
import Image                           from 'next/image'
import Link                            from 'next/link'
import { motion }                      from 'framer-motion'
import { ArrowUpRight, Palette }       from 'lucide-react'
import { ROUTES }                      from '@/lib/constants'
import { UNDER_2999_PRODUCTS }         from '@/config/products'
import { COLOR_FAMILIES }              from '@/config/shopByColorPrice'
import { categoryUrl, PLACEHOLDER_URL } from '@/lib/cloudflareImages'
import { staggerChildren, scaleUp, VIEWPORT } from '@/lib/animations'
import { ProductCard }                 from '@/components/shop/ProductCard'

type Tab = 'color' | 'price'

export function ShopByColorPrice() {
  const [tab, setTab] = useState<Tab>('color')

  const priceTrackRef     = useRef<HTMLDivElement>(null)
  const priceContainerRef = useRef<HTMLDivElement>(null)
  const [priceDragWidth, setPriceDragWidth] = useState(0)

  useEffect(() => {
    if (tab !== 'price' || !priceTrackRef.current || !priceContainerRef.current) return
    const calculate = () => {
      if (priceTrackRef.current && priceContainerRef.current) {
        setPriceDragWidth(priceTrackRef.current.scrollWidth - priceContainerRef.current.offsetWidth)
      }
    }
    calculate()
    const ro = new ResizeObserver(calculate)
    ro.observe(priceTrackRef.current)
    return () => ro.disconnect()
  }, [tab])

  return (
    <section className="section-pad bg-[var(--color-lp-cream)]" style={{ paddingTop: '2.5rem' }}>
      <div className="container-lp">

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-5 mb-6 md:mb-8"
        >
          <button
            type="button"
            onClick={() => setTab('color')}
            className={
              tab === 'color'
                ? 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-ink border-b-2 border-lp-ink pb-1.5 transition-colors duration-200'
                : 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-muted border-b-2 border-transparent pb-1.5 transition-colors duration-200 hover:text-lp-ink'
            }
          >
            <Palette size={13} strokeWidth={1.5} />
            Shop by Color
          </button>
          <span className="text-lp-border">|</span>
          <button
            type="button"
            onClick={() => setTab('price')}
            className={
              tab === 'price'
                ? 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-ink border-b-2 border-lp-ink pb-1.5 transition-colors duration-200'
                : 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-muted border-b-2 border-transparent pb-1.5 transition-colors duration-200 hover:text-lp-ink'
            }
          >
            Under ₹2,999
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          key={`header-${tab}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <span className="lp-eyebrow">{tab === 'price' ? 'Easy on the wallet' : 'Pick your shade'}</span>
          <h2 className="lp-heading-lg whitespace-nowrap text-[1.6rem] md:text-[2.25rem]">
            {tab === 'price' ? 'Great Bags, Better Prices' : 'Shop by Color'}
          </h2>
        </motion.div>

        {tab === 'color' && (
          /* Color family grid — same tile treatment as Shop by Category */
          <motion.div
            key="grid-color"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {COLOR_FAMILIES.map(({ label, image, swatch, matches }) => (
              <motion.div key={label} variants={scaleUp}>
                <Link
                  href={`${ROUTES.shop}?color=${encodeURIComponent(matches.join(','))}`}
                  className="group relative block aspect-[4/5] md:aspect-square overflow-hidden bg-lp-border rounded-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-lp-ink/15 active:scale-[0.985]"
                >
                  {/* Hover frame — ink border draws in */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-10 rounded-xl border-[1.5px] border-lp-ink opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none"
                  />
                  {/* Image */}
                  <Image
                    src={categoryUrl(image) || PLACEHOLDER_URL}
                    alt={label}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width:768px) 50vw, (max-width:1280px) 25vw, 22rem"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-lp-ink/90 via-lp-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <div className="flex items-end justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="w-3 h-3 rounded-full shrink-0 ring-1 ring-[var(--color-lp-porcelain)]/40"
                          style={{ background: swatch }}
                        />
                        <h3 className="font-display text-[1.25rem] md:text-[1.5rem] text-[var(--color-lp-porcelain)] leading-none">
                          {label}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="text-[var(--color-lp-porcelain)]/50 group-hover:text-[var(--color-lp-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {tab === 'price' && (
        /* Under ₹2,999 — full-bleed drag-to-scroll carousel, same as Sale */
        <div ref={priceContainerRef} className="overflow-hidden w-full">
          <motion.div
            key="grid-price"
            ref={priceTrackRef}
            drag="x"
            dragConstraints={{ left: -priceDragWidth, right: 0 }}
            dragElastic={0.05}
            dragMomentum={true}
            className="flex gap-4 md:gap-6 pl-[max(1.25rem,calc((100vw-88rem)/2+4rem))] pr-6 cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitUserSelect: 'none' }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {UNDER_2999_PRODUCTS.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[68vw] sm:w-[40vw] md:w-[30vw] lg:w-[22rem]">
                <ProductCard product={product} />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  )
}
