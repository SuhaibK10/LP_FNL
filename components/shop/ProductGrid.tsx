'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/shop/ProductGrid.tsx
// Client component — handles category/price/size/colour filtering, sorting,
// and grid/list view. UI pattern modelled on puma.in's mobile filter bar:
// FILTERS + SORT buttons, a result count row, then the product grid.
// Reads from config/products.ts — swap to Supabase later without touching this.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useMemo, useRef } from 'react'
import { useSearchParams }         from 'next/navigation'
import Image                       from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, LayoutGrid, Rows3 } from 'lucide-react'
import { PRODUCTS, CATEGORIES }    from '@/config/products'
import { categoryUrl, PLACEHOLDER_URL } from '@/lib/cloudflareImages'
import { getMyntraListing, MYNTRA_EXCLUSIVES_ENABLED } from '@/config/myntra'
import { SIZE_ORDER }              from '@/lib/constants'
import { useShopFilterStore }      from '@/store/shopFilterStore'
import { consumeShopScroll, restoreScroll } from '@/lib/scrollRestore'
import { ProductCard }             from './ProductCard'
import { SortDropdown }            from './SortDropdown'
import { FilterDrawer, type PriceRange } from './FilterDrawer'
import { cn }                      from '@/lib/utils'

type SortKey = 'default' | 'price-asc' | 'price-desc' | 'best-sellers' | 'new-arrivals' | 'myntra-exclusives'
type ViewMode = 'grid' | 'list'

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: 'Recommended',        value: 'default'            },
  { label: 'Price: Low to High', value: 'price-asc'          },
  { label: 'Price: High to Low', value: 'price-desc'         },
  { label: 'Best Sellers',       value: 'best-sellers'       },
  { label: 'New Arrivals',       value: 'new-arrivals'       },
  ...(MYNTRA_EXCLUSIVES_ENABLED ? [{ label: 'Myntra Exclusives', value: 'myntra-exclusives' as const }] : []),
]

// Same photos as the homepage CategoryGrid — only categories with a shot
// get a thumbnail in the strip below; the rest stay filterable via Filters.
const CATEGORY_IMAGES: Partial<Record<string, string>> = {
  trolley:      'dfe7f28d-50e2-4a8a-7faa-467641a17700',
  set:          'a3258fb4-0ba7-4f7b-e27c-d20ba9f8ae00',
  backpack:     '04fcc97f-08b5-4279-f2fc-753aed03be00',
  'office-bag': '0baab19f-10cd-4c53-2c53-2041976f6c00',
  duffle:       'ae436b7a-1f40-440f-fa9b-233399dfa000',
  vanity:       '9d7374c7-5e18-4d0c-61a5-3ce33a642000',
}

const PRICE_RANGES: PriceRange[] = [
  { label: 'Under ₹3,000',        min: 0,     max: 3000  },
  { label: '₹3,000 – ₹6,000',     min: 3000,  max: 6000  },
  { label: '₹6,000 – ₹10,000',    min: 6000,  max: 10000 },
  { label: '₹10,000 – ₹15,000',   min: 10000, max: 15000 },
  { label: 'Above ₹15,000',       min: 15000, max: null  },
]

function lowestPrice(product: typeof PRODUCTS[0]) {
  return Math.min(...product.variants.flatMap(v => v.sizes.map(s => s.price)))
}

function sortProducts(products: typeof PRODUCTS, sort: SortKey) {
  if (sort === 'default') return products

  // No "added on" date on Product — catalogue order is the closest signal
  // we have for recency, so newest-added (last in the array) surfaces first.
  if (sort === 'new-arrivals') return [...products].reverse()

  return [...products].sort((a, b) => {
    if (sort === 'price-asc')         return lowestPrice(a) - lowestPrice(b)
    if (sort === 'price-desc')        return lowestPrice(b) - lowestPrice(a)
    if (sort === 'best-sellers')      return Number(!!b.isFeatured) - Number(!!a.isFeatured)
    if (sort === 'myntra-exclusives') return Number(!!getMyntraListing(b.slug)) - Number(!!getMyntraListing(a.slug))
    return 0
  })
}

export function ProductGrid() {
  // ?category= deep links (footer, home category cards) select the filter
  const searchParams  = useSearchParams()
  const categoryParam = searchParams.get('category') ?? 'all'
  const validCategory = CATEGORIES.some(c => c.value === categoryParam) ? categoryParam : 'all'

  // ?color= deep links (home "Shop by Color" tiles) — comma-separated, since
  // a color family (e.g. "Grey & Silver") maps to several literal variant
  // color names at once, not just one.
  const colorParam  = searchParams.get('color') ?? ''
  const validColors = colorParam
    ? colorParam.split(',').map(c => c.trim()).filter(Boolean)
    : []

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    validCategory === 'all' ? [] : [validCategory]
  )
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)
  const [selectedSizes, setSelectedSizes]           = useState<string[]>([])
  const [selectedColors, setSelectedColors]         = useState<string[]>(validColors)
  const [sortKey, setSortKey]     = useState<SortKey>('default')
  const [viewMode, setViewMode]   = useState<ViewMode>('grid')

  // Mobile defaults to list view (desktop stays grid) — checked once on
  // mount rather than in the initializer to avoid an SSR/client hydration
  // mismatch, since window isn't available on the server.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      setViewMode('list')
    }
  }, [])

  // Drawer open state lives in a shared store, not local state — the
  // Navbar's docked filter icon (shown once this button scrolls out of
  // view) needs to open the exact same drawer.
  const drawerOpen           = useShopFilterStore(s => s.drawerOpen)
  const setDrawerOpen        = useShopFilterStore(s => s.setDrawerOpen)
  const setInPageButtonVisible = useShopFilterStore(s => s.setInPageButtonVisible)

  const filterButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setSelectedCategories(validCategory === 'all' ? [] : [validCategory])
  }, [validCategory])

  useEffect(() => {
    setSelectedColors(validColors)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorParam])

  // Returning from a PDP (breadcrumb or browser back) lands on the same card
  // that was clicked, instead of resetting to the top of the grid. The
  // breadcrumb Link uses scroll={false} so Next's own scroll-to-top doesn't
  // race this and win — which means the no-saved-position branch has to
  // scroll to top itself, or a fresh /shop visit could inherit whatever
  // scroll position the PDP was left at.
  useEffect(() => {
    const y = consumeShopScroll()
    restoreScroll(y ?? 0)
  }, [])

  // Track whether the in-page Filters button is visible below the sticky
  // navbar. rootMargin's negative top roughly matches the navbar's own
  // height, so the button counts as "gone" once it's scrolled under it,
  // not just once it's off the raw viewport.
  useEffect(() => {
    const el = filterButtonRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInPageButtonVisible(entry.isIntersecting),
      { rootMargin: '-90px 0px 0px 0px', threshold: 0 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      // Reset on unmount (route change) so neither state leaks into the next
      // visit: other pages shouldn't inherit "hidden", and revisiting /shop
      // shouldn't have the drawer auto-open from a previous session.
      setInPageButtonVisible(true)
      setDrawerOpen(false)
    }
  }, [setInPageButtonVisible, setDrawerOpen])

  // ── Derived filter option lists ─────────────────────────────────────────
  const availableSizes = useMemo(() => {
    const present = new Set<string>()
    PRODUCTS.forEach(p => p.variants.forEach(v => v.sizes.forEach(s => present.add(s.size))))
    return SIZE_ORDER.filter(s => present.has(s))
  }, [])

  const availableColors = useMemo(() => {
    const map = new Map<string, string>()
    PRODUCTS.forEach(p => p.variants.forEach(v => {
      if (!map.has(v.color)) map.set(v.color, v.colorHex)
    }))
    return Array.from(map, ([name, hex]) => ({ name, hex })).sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  const categoryOptions = CATEGORIES.filter(c => c.value !== 'all')

  // ── Filtering ────────────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find(r => r.label === selectedPriceRange)

    return PRODUCTS.filter(product => {
      if (
        selectedCategories.length &&
        !selectedCategories.includes(product.category) &&
        !product.additionalCategories?.some(c => selectedCategories.includes(c))
      ) return false

      if (range) {
        const price = lowestPrice(product)
        if (price < range.min || (range.max !== null && price > range.max)) return false
      }

      if (selectedSizes.length) {
        const hasSize = product.variants.some(v => v.sizes.some(s => selectedSizes.includes(s.size)))
        if (!hasSize) return false
      }

      if (selectedColors.length) {
        const hasColor = product.variants.some(v => selectedColors.includes(v.color))
        if (!hasColor) return false
      }

      return true
    })
  }, [selectedCategories, selectedPriceRange, selectedSizes, selectedColors])

  const sorted = sortProducts(filtered, sortKey)

  const activeFilterCount =
    selectedCategories.length + selectedSizes.length + selectedColors.length + (selectedPriceRange ? 1 : 0)

  function toggleInList(list: string[], value: string, setList: (v: string[]) => void) {
    setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value])
  }

  function clearAll() {
    setSelectedCategories([])
    setSelectedPriceRange(null)
    setSelectedSizes([])
    setSelectedColors([])
  }

  return (
    <div>
      {/* ── Filters + Sort row ────────────────────────────────────────── */}
      <div className="flex items-stretch gap-3 mb-4">
        <button
          ref={filterButtonRef}
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="relative flex-1 flex items-center justify-center gap-2 font-body text-[0.7rem] max-md:text-[0.62rem] tracking-widest uppercase text-lp-ink border border-lp-muted rounded-md px-4 py-3 max-md:px-3 max-md:py-2 hover:border-lp-ink transition-colors duration-200"
        >
          <SlidersHorizontal size={14} strokeWidth={1.5} />
          Filters
          {activeFilterCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lp-gold text-lp-ink text-[0.62rem] font-medium flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        <SortDropdown options={SORT_OPTIONS} value={sortKey} onChange={setSortKey} />
      </div>

      {/* ── Category strip — tap a thumbnail to filter, tap again for All.
          Mirrors the mobile category-thumbnail pattern (e.g. TUMI's shop
          page) rather than only living inside the Filters drawer. ────── */}
      <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide mb-6 md:mb-8">
        {categoryOptions.filter(c => CATEGORY_IMAGES[c.value]).map((c) => {
          const active = selectedCategories.length === 1 && selectedCategories[0] === c.value
          return (
            <button
              key={c.value}
              type="button"
              onClick={() => setSelectedCategories(active ? [] : [c.value])}
              className="group flex flex-col items-center gap-1.5 md:gap-2.5 shrink-0 w-16 md:w-24"
              aria-pressed={active}
            >
              <span
                className={cn(
                  'relative block w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden bg-lp-porcelain border-[1.5px] md:border-2 transition-colors duration-200',
                  active ? 'border-lp-gold' : 'border-[#4B5563]'
                )}
              >
                <Image
                  src={categoryUrl(CATEGORY_IMAGES[c.value]!) || PLACEHOLDER_URL}
                  alt={c.label}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:768px) 64px, 96px"
                />
              </span>
              <span
                className={cn(
                  'font-body font-bold text-[0.65rem] md:text-[0.75rem] tracking-[0.05em] uppercase text-center leading-tight transition-colors duration-200',
                  active ? 'text-lp-ink' : 'text-lp-muted group-hover:text-lp-ink'
                )}
              >
                {c.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Count + view toggle row ───────────────────────────────────── */}
      <div className="flex items-center justify-between mb-8 md:mb-10 border-b border-lp-border pb-3">
        <div className="flex items-center gap-3">
          <span className="font-body font-bold text-[0.8rem] tracking-[0.08em] uppercase text-lp-ink">
            {sorted.length} {sorted.length === 1 ? 'Product' : 'Products'}
          </span>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="font-body font-semibold text-[0.8rem] text-lp-ink hover:text-lp-gold underline underline-offset-2 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setViewMode('list')}
            aria-pressed={viewMode === 'list'}
            aria-label="List view"
            className={cn('p-1.5 border transition-colors duration-150', viewMode === 'list' ? 'border-lp-ink text-lp-ink' : 'border-lp-border text-lp-faint hover:text-lp-ink')}
          >
            <Rows3 size={15} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            aria-pressed={viewMode === 'grid'}
            aria-label="Grid view"
            className={cn('p-1.5 border transition-colors duration-150', viewMode === 'grid' ? 'border-lp-ink text-lp-ink' : 'border-lp-border text-lp-faint hover:text-lp-ink')}
          >
            <LayoutGrid size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Product grid ──────────────────────────────────────────────── */}
      <motion.div
        layout
        className={cn(
          'grid gap-x-2 gap-y-10 md:gap-x-6 md:gap-y-14',
          viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'
        )}
      >
        <AnimatePresence mode="popLayout">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {sorted.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-2xl text-lp-muted mb-2">
            No products found
          </p>
          <p className="font-body text-sm text-lp-faint">
            Try adjusting or clearing your filters
          </p>
        </div>
      )}

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        resultCount={sorted.length}
        categories={categoryOptions}
        selectedCategories={selectedCategories}
        onToggleCategory={(value) => toggleInList(selectedCategories, value, setSelectedCategories)}
        priceRanges={PRICE_RANGES}
        selectedPriceRange={selectedPriceRange}
        onSelectPriceRange={setSelectedPriceRange}
        sizes={availableSizes}
        selectedSizes={selectedSizes}
        onToggleSize={(size) => toggleInList(selectedSizes, size, setSelectedSizes)}
        colors={availableColors}
        selectedColors={selectedColors}
        onToggleColor={(name) => toggleInList(selectedColors, name, setSelectedColors)}
        onClearAll={clearAll}
      />
    </div>
  )
}
