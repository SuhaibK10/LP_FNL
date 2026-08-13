'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/CategoryGrid.tsx
// Visual category cards with product imagery. Not text links.
// Each card is a destination mood that makes you want to travel.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect }       from 'react'
import Image                                 from 'next/image'
import Link                                  from 'next/link'
import { motion }                            from 'framer-motion'
import { ArrowUpRight, LayoutGrid }          from 'lucide-react'
import { ROUTES }                            from '@/lib/constants'
import { SALE_PRODUCTS }                     from '@/config/products'
import { categoryUrl, PLACEHOLDER_URL }      from '@/lib/cloudinary'
import { staggerChildren, scaleUp } from '@/lib/animations'
import { ProductCard }                       from '@/components/shop/ProductCard'
import { SaleCountdown }                     from '@/components/ui/SaleCountdown'

// The shared VIEWPORT config (lib/animations.ts) shrinks the trigger zone by
// 80px, which is right for sections deep in the page but wrong here: this
// section sits directly under a ~90vh hero, so almost none of it is visible
// on load, and the -80px margin meant it stayed invisible until scrolled
// further, reading as a blank gap. Fires as soon as any part is visible instead.
const EAGER_VIEWPORT = { once: true, amount: 0 } as const
// Category card data — images are Cloudinary public_ids
// Replace with real product images once uploaded
const CATEGORY_CARDS = [
  {
    label:    'Trolley Bags',
    value:    'trolley',
    image:    'https://res.cloudinary.com/dpepctqdj/image/upload/v1786653687/WhatsApp_Image_2026-08-09_at_23.20.47_1_yok8au.jpg',
    span:     '',
    textPos:  'bottom',
    imgClass: 'scale-125',
  },
  {
    label:    'Sets',
    value:    'set',
    image:    'Generated_Image_June_21_2026_-_3_01AM_no4abz.jpg',
    span:     '',
    textPos:  'bottom',
    imgClass: 'scale-125',
  },
  {
    label:    'Backpacks',
    value:    'backpack',
    image:    'https://res.cloudinary.com/dpepctqdj/image/upload/v1786653687/WhatsApp_Image_2026-08-09_at_23.20.47_2_v5eiuw.jpg',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
  {
    label:    'Office Bags',
    value:    'office-bag',
    image:    'Generated_Image_June_18_2026_-_2_56AM_fubmpz.jpg',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
  {
    label:    'Duffle Bags',
    value:    'duffle',
    image:    'https://res.cloudinary.com/dpepctqdj/image/upload/v1786653687/WhatsApp_Image_2026-08-09_at_23.20.48_3_xg3v8j.jpg',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
  {
    label:    'Vanity Cases',
    value:    'vanity',
    image:    'Screenshot_2026-06-18_at_3.35.17_AM_cu1ffy.png',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
] as const

type Tab = 'category' | 'sale'

export function CategoryGrid() {
  const [tab, setTab] = useState<Tab>('category')

  const saleTrackRef     = useRef<HTMLDivElement>(null)
  const saleContainerRef = useRef<HTMLDivElement>(null)
  const [saleDragWidth, setSaleDragWidth] = useState(0)

  useEffect(() => {
    if (tab !== 'sale' || !saleTrackRef.current || !saleContainerRef.current) return
    const calculate = () => {
      if (saleTrackRef.current && saleContainerRef.current) {
        setSaleDragWidth(saleTrackRef.current.scrollWidth - saleContainerRef.current.offsetWidth)
      }
    }
    calculate()
    const ro = new ResizeObserver(calculate)
    ro.observe(saleTrackRef.current)
    return () => ro.disconnect()
  }, [tab])

  return (
    <section
      className={tab === 'sale' ? 'section-pad bg-[var(--color-lp-porcelain)]' : 'section-pad bg-[var(--color-lp-cream)]'}
      style={{ paddingTop: '2.5rem' }}
    >
      <div className="container-lp">

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={EAGER_VIEWPORT}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-5 mb-6 md:mb-8"
        >
          <button
            type="button"
            onClick={() => setTab('category')}
            className={
              tab === 'category'
                ? 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-ink border-b-2 border-lp-ink pb-1.5 transition-colors duration-200'
                : 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-muted border-b-2 border-transparent pb-1.5 transition-colors duration-200 hover:text-lp-ink'
            }
          >
            <LayoutGrid size={13} strokeWidth={1.5} />
            Shop by Category
          </button>
          <span className="text-lp-border">|</span>
          <button
            type="button"
            onClick={() => setTab('sale')}
            className={
              tab === 'sale'
                ? 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-ink border-b-2 border-lp-ink pb-1.5 transition-colors duration-200'
                : 'flex items-center gap-1.5 font-body text-[0.75rem] tracking-widest uppercase text-lp-muted border-b-2 border-transparent pb-1.5 transition-colors duration-200 hover:text-lp-ink'
            }
          >
            Sale
            <motion.span
              animate={{ scale: [1, 1.04, 1], opacity: [1, 0.92, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex rounded-md p-[3px] shadow-sm"
              style={{ background: 'linear-gradient(90deg, #FF9933 0 33%, #FFFFFF 33% 66%, #138808 66% 100%)' }}
            >
              <span className="inline-flex items-center rounded-[5px] bg-lp-ink px-1.25 py-[3px]">
                <SaleCountdown className="text-[0.62rem] text-[var(--color-lp-porcelain)] normal-case tracking-normal" />
              </span>
            </motion.span>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          key={`header-${tab}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={EAGER_VIEWPORT}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 text-center"
        >
          <span className="lp-eyebrow">{tab === 'sale' ? 'Limited time only' : 'Find your bag'}</span>
          <h2 className="lp-heading-lg whitespace-nowrap text-[1.6rem] md:text-[2.25rem]">{tab === 'sale' ? 'Lowest Price Ever' : 'Something for Everyone'}</h2>
        </motion.div>

        {tab === 'category' && (
          /* Category grid */
          <motion.div
            key="grid-category"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={EAGER_VIEWPORT}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {CATEGORY_CARDS.map(({ label, value, image, span, imgClass }) => (
              <motion.div
                key={value}
                variants={scaleUp}
                className={span}
              >
                <Link
                  href={`${ROUTES.shop}?category=${value}`}
                  className="group relative block aspect-[4/5] md:aspect-square overflow-hidden bg-lp-border rounded-xl border-[3px] border-lp-border-strong transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-lp-ink/15 active:scale-[0.985]"
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
                    className={`object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${imgClass}`}
                    sizes="(max-width:768px) 50vw, (max-width:1280px) 25vw, 22rem"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-lp-ink/90 via-lp-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 md:px-5 pt-4 md:pt-5 pb-2 md:pb-2.5">
                    <h3 className="w-full text-center font-display text-[1.1rem] md:text-[1.3rem] text-[var(--color-lp-porcelain)]/80 leading-none">
                      {label}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      className="absolute right-4 md:right-5 bottom-2 md:bottom-2.5 text-[var(--color-lp-porcelain)]/50 group-hover:text-[var(--color-lp-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {tab === 'sale' && (
        /* Sale-exclusive products — full-bleed drag-to-scroll carousel, same as Best Sellers */
        <div ref={saleContainerRef} className="overflow-hidden w-full">
          <motion.div
            key="grid-sale"
            ref={saleTrackRef}
            drag="x"
            dragConstraints={{ left: -saleDragWidth, right: 0 }}
            dragElastic={0.05}
            dragMomentum={true}
            className="flex gap-4 md:gap-6 pl-[max(1.25rem,calc((100vw-88rem)/2+4rem))] pr-6 cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitUserSelect: 'none' }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {SALE_PRODUCTS.map((product) => (
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
