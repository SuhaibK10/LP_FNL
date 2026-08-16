'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/CategoryGrid.tsx
// Visual category cards with product imagery. Not text links.
// Each card is a destination mood that makes you want to travel.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect }       from 'react'
import Image                                 from 'next/image'
import Link                                  from 'next/link'
import { useRouter }                         from 'next/navigation'
import { motion }                            from 'framer-motion'
import { ArrowUpRight, LayoutGrid }          from 'lucide-react'
import { ROUTES }                            from '@/lib/constants'
import { SALE_PRODUCTS }                     from '@/config/products'
import { categoryUrl, PLACEHOLDER_URL }      from '@/lib/cloudflareImages'
import { staggerPunch, popIn } from '@/lib/animations'
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
    image:    'dfe7f28d-50e2-4a8a-7faa-467641a17700',
    span:     '',
    textPos:  'bottom',
    imgClass: 'scale-125',
  },
  {
    label:    'Sets',
    value:    'set',
    image:    'a3258fb4-0ba7-4f7b-e27c-d20ba9f8ae00',
    span:     '',
    textPos:  'bottom',
    imgClass: 'scale-125',
  },
  {
    label:    'Backpacks',
    value:    'backpack',
    image:    '04fcc97f-08b5-4279-f2fc-753aed03be00',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
  {
    label:    'Office Bags',
    value:    'office-bag',
    image:    '0baab19f-10cd-4c53-2c53-2041976f6c00',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
  {
    label:    'Duffle Bags',
    value:    'duffle',
    image:    'ae436b7a-1f40-440f-fa9b-233399dfa000',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
  {
    label:    'Vanity Cases',
    value:    'vanity',
    image:    '9d7374c7-5e18-4d0c-61a5-3ce33a642000',
    span:     '',
    textPos:  'bottom',
    imgClass: '',
  },
] as const

type Tab = 'category' | 'sale'

export function CategoryGrid() {
  const [tab, setTab] = useState<Tab>('category')
  const router = useRouter()

  // Hover isn't a real gesture on touch devices — a tap fires straight
  // through to navigation before the CSS transition ever gets a frame to
  // paint. On touch, play the same reveal on tap instead: hold navigation
  // for one transition length so the morph/text-swap is actually seen,
  // then follow through to the category page.
  const [tappedCard, setTappedCard] = useState<string | null>(null)
  function handleCardClick(e: React.MouseEvent<HTMLAnchorElement>, href: string, value: string) {
    if (typeof window === 'undefined' || !window.matchMedia('(hover: none)').matches) return
    e.preventDefault()
    setTappedCard(value)
    setTimeout(() => router.push(href), 450)
  }

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
          <span className="lp-eyebrow">{tab === 'sale' ? 'Limited time only' : 'Every trip, covered'}</span>
          <h2 className="lp-heading-lg whitespace-nowrap text-[1.6rem] md:text-[2.25rem]">{tab === 'sale' ? 'Lowest Price Ever' : 'Find Your Fit'}</h2>
        </motion.div>

        {tab === 'category' && (
          /* Category grid */
          <motion.div
            key="grid-category"
            variants={staggerPunch}
            initial="hidden"
            whileInView="visible"
            viewport={EAGER_VIEWPORT}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {CATEGORY_CARDS.map(({ label, value, image, span, imgClass }) => {
              const href = `${ROUTES.shop}?category=${value}`
              const tapped = tappedCard === value
              return (
                <motion.div
                  key={value}
                  variants={popIn}
                  className={span}
                >
                  <Link
                    href={href}
                    onClick={(e) => handleCardClick(e, href, value)}
                    className={`group relative block aspect-[4/5] md:aspect-square overflow-hidden bg-lp-border rounded-xl border-[3px] border-lp-border-strong active:scale-[0.985] transition-[border-radius,transform] duration-500 ease-out hover:rounded-[40%] ${tapped ? 'rounded-[40%]' : ''}`}
                  >
                    {/* Image */}
                    <Image
                      src={categoryUrl(image) || PLACEHOLDER_URL}
                      alt={label}
                      fill
                      className={`object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 ${tapped ? 'scale-110' : ''} ${imgClass}`}
                      sizes="(max-width:768px) 50vw, (max-width:1280px) 25vw, 22rem"
                    />

                    {/* Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-lp-ink/90 via-lp-ink/30 to-transparent transition-opacity duration-300 group-hover:opacity-100 ${tapped ? 'opacity-100' : ''}`} />

                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 md:px-5 pt-4 md:pt-5 pb-2 md:pb-2.5">
                      <div className="relative h-5 md:h-6 overflow-hidden">
                        {/* Resting label — slides up and out on hover/tap */}
                        <h3 className={`absolute inset-0 flex items-center justify-center text-center font-display text-[1.1rem] md:text-[1.3rem] text-[var(--color-lp-porcelain)]/80 leading-none transition-transform duration-500 ease-out group-hover:-translate-y-full ${tapped ? '-translate-y-full' : ''}`}>
                          {label}
                        </h3>
                        {/* Duplicate — waits just below, slides in to replace it */}
                        <h3 aria-hidden="true" className={`absolute inset-0 flex items-center justify-center text-center font-display text-[1.1rem] md:text-[1.3rem] text-[var(--color-lp-porcelain)] leading-none translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 ${tapped ? 'translate-y-0' : ''}`}>
                          {label}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className={`absolute right-4 md:right-5 bottom-2 md:bottom-2.5 text-[var(--color-lp-porcelain)]/50 group-hover:text-[var(--color-lp-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ${tapped ? 'text-[var(--color-lp-gold)] translate-x-0.5 -translate-y-0.5' : ''}`}
                      />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
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
