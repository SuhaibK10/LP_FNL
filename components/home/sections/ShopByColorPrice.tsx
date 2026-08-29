'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ShopByColorPrice.tsx
// "Take What You Need" — a parallel-tab section styled like the Best
// Sellers / Sale carousels. Both tabs work the same way: a row of clickable
// options (color swatches or size pills) above a horizontal drag-scroll
// carousel of matching products.
// Toggle: SHOP_BY_COLOR_PRICE_HOME_ENABLED in config/shopByColorPrice.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue }      from 'framer-motion'
import { Palette, Ruler }              from 'lucide-react'
import { PRODUCTS }                    from '@/config/products'
import { COLOR_SWATCHES }              from '@/config/shopByColorPrice'
import { VIEWPORT }                    from '@/lib/animations'
import { swatchRingColor }             from '@/lib/utils'
import { ProductCard }                 from '@/components/shop/ProductCard'
import type { Product }                from '@/types'

type Tab = 'color' | 'size'

const SIZE_OPTIONS = ['Cabin', 'Medium', 'Large', 'Sets'] as const
type SizeOption = (typeof SIZE_OPTIONS)[number]

interface CarouselItem {
  product: Product
  // The literal variant.color to open the card on — set when a carousel
  // was filtered by color, so the card shows the color the shopper
  // actually picked rather than the product's default (variants[0]).
  initialColor?: string
}

function productsForColor(matches: string[]): CarouselItem[] {
  return PRODUCTS.flatMap((p) => {
    const matched = p.variants.find((v) => matches.includes(v.color))
    return matched ? [{ product: p, initialColor: matched.color }] : []
  })
}

function productsForSize(size: SizeOption): CarouselItem[] {
  const products = size === 'Sets'
    ? PRODUCTS.filter((p) => p.category === 'set')
    : PRODUCTS.filter((p) => p.variants.some((v) => v.sizes.some((s) => s.size === size)))
  return products.map((product) => ({ product }))
}

// Shared carousel — used for both tabs so the drag-scroll behavior and
// styling stay identical, only the item list changes.
function ProductCarousel({ items, emptyMessage }: { items: CarouselItem[]; emptyMessage: string }) {
  const trackRef     = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragWidth, setDragWidth] = useState(0)
  const x = useMotionValue(0)

  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return
    const calculate = () => {
      if (trackRef.current && containerRef.current) {
        setDragWidth(trackRef.current.scrollWidth - containerRef.current.offsetWidth)
      }
    }
    calculate()
    const ro = new ResizeObserver(calculate)
    ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [items])

  useEffect(() => { x.set(0) }, [items, x])

  // Trackpad two-finger horizontal swipe fires wheel events with deltaX —
  // Framer's drag="x" only listens for pointer drag, so we translate wheel
  // panning into the same motion value by hand. Native listener (not React's
  // onWheel) so preventDefault actually stops the page from scrolling.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return
      e.preventDefault()
      const next = x.get() - e.deltaX
      x.set(Math.min(0, Math.max(-dragWidth, next)))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [dragWidth, x])

  if (items.length === 0) {
    return <p className="font-body text-[0.9rem] text-lp-muted text-center py-6">{emptyMessage}</p>
  }

  return (
    <div ref={containerRef} className="overflow-hidden w-full mt-8">
      <motion.div
        key={items.map((i) => `${i.product.id}-${i.initialColor ?? ''}`).join('-')}
        ref={trackRef}
        drag="x"
        style={{ x, WebkitUserSelect: 'none' }}
        dragConstraints={{ left: -dragWidth, right: 0 }}
        dragElastic={0.05}
        dragMomentum={true}
        className="flex gap-4 md:gap-6 pl-[max(1.25rem,calc((100vw-88rem)/2+4rem))] pr-6 cursor-grab active:cursor-grabbing select-none"
        whileTap={{ cursor: 'grabbing' }}
      >
        {items.map(({ product, initialColor }) => (
          <div key={product.id} className="shrink-0 w-[68vw] sm:w-[40vw] md:w-[30vw] lg:w-88">
            <ProductCard product={product} initialColor={initialColor} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function ShopByColorPrice() {
  const [tab, setTab]     = useState<Tab>('color')
  const [size, setSize]   = useState<SizeOption>('Cabin')
  const [colorLabel, setColorLabel] = useState<string>(COLOR_SWATCHES[0].label)

  const activeColor  = COLOR_SWATCHES.find((c) => c.label === colorLabel) ?? COLOR_SWATCHES[0]
  const colorProducts = productsForColor(activeColor.matches)
  const sizeProducts   = productsForSize(size)

  return (
    <section className="section-pad bg-lp-cream" style={{ paddingTop: '2.5rem' }}>
      <div className="container-lp">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="lp-eyebrow">Find your fit</span>
          <h2 className="lp-heading-lg text-[1.6rem] md:text-[2.25rem]">Take What You Need</h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-5 mb-8 md:mb-10"
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
            Color
          </button>
          <span className="text-lp-border">|</span>
          <button
            type="button"
            onClick={() => setTab('size')}
            className={
              tab === 'size'
                ? 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-ink border-b-2 border-lp-ink pb-1.5 transition-colors duration-200'
                : 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-muted border-b-2 border-transparent pb-1.5 transition-colors duration-200 hover:text-lp-ink'
            }
          >
            <Ruler size={13} strokeWidth={1.5} />
            Size
          </button>
        </motion.div>

        {tab === 'color' && (
          /* Color swatches — one row, scrolls if it overflows rather than
              wrapping to a second line. Clicking one filters the carousel below. */
          <div className="flex justify-center">
            <div className="scrollbar-thin-x flex items-center gap-3.5 max-w-96 sm:max-w-120 overflow-x-auto px-1 pt-2 pb-7">
              {COLOR_SWATCHES.map(({ label, hex }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setColorLabel(label)}
                  title={label}
                  aria-label={label}
                  aria-pressed={colorLabel === label}
                  className="w-6 h-6 rounded-md shrink-0 transition-transform duration-200 hover:scale-110"
                  style={{
                    background: hex,
                    boxShadow: colorLabel === label
                      ? `0 0 0 2px var(--color-lp-cream), 0 0 0 4px ${swatchRingColor(hex)}`
                      : '0 0 0 1px var(--color-lp-border-strong)',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {tab === 'color' && (
          <div className="flex justify-center -mt-3 mb-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-[0.75rem] font-bold tracking-widest uppercase text-lp-ink border transition-colors duration-200"
              style={{
                background: `color-mix(in srgb, ${activeColor.hex} 16%, var(--color-lp-cream))`,
                borderColor: `color-mix(in srgb, ${activeColor.hex} 45%, transparent)`,
              }}
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: activeColor.hex, boxShadow: `0 0 0 1px ${swatchRingColor(activeColor.hex)}30` }}
              />
              {activeColor.label}
            </span>
          </div>
        )}

        {tab === 'size' && (
          /* Size pills — four parallel options, all on one row */
          <motion.div
            key="size-pills"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 md:gap-3 flex-wrap"
          >
            {SIZE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSize(opt)}
                className={
                  size === opt
                    ? 'font-body text-[0.8rem] font-medium px-5 py-2 rounded-full bg-lp-ink text-lp-porcelain transition-colors duration-200'
                    : 'font-body text-[0.8rem] font-medium px-5 py-2 rounded-full bg-transparent text-lp-ink border border-lp-border-strong hover:border-lp-ink transition-colors duration-200'
                }
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {tab === 'color' && (
        <ProductCarousel items={colorProducts} emptyMessage="No products in this color yet." />
      )}
      {tab === 'size' && (
        <ProductCarousel items={sizeProducts} emptyMessage="No products in this size yet." />
      )}
    </section>
  )
}
