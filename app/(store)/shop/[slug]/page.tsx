// ─────────────────────────────────────────────────────────────────────────────
// app/(store)/shop/slug/page.tsx
// Product Detail Page (PDP).
// Reads slug from URL, finds product in config/products.ts, renders.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata }       from 'next'
import { notFound }            from 'next/navigation'
import Link                    from 'next/link'
import { getProductBySlug, PRODUCTS } from '@/config/products'
import { ProductPageClient }   from '@/components/product/ProductPageClient'
import { ProductStory }        from '@/components/product/ProductDetails'
import { ProductReviewsCarousel } from '@/components/product/ProductReviewsCarousel'
import { getReviewsForProduct } from '@/config/reviews'
import { ROUTES }              from '@/lib/constants'
import { ogUrl, pdpUrl }       from '@/lib/cloudflareImages'

interface Props {
  params:      Promise<{ slug: string }>
  searchParams: Promise<{ color?: string }>
}

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug }  = await params
  const { color } = await searchParams
  const product   = getProductBySlug(slug)
  if (!product) return { title: 'Product not found' }

  // Match the ?color= the link was shared with, so a link shared from a
  // specific colorway unfurls with that colorway's photo, not always the
  // first variant's.
  const variant = (color ? product.variants.find(v => v.color.toLowerCase() === color.toLowerCase()) : undefined)
    ?? product.variants[0]
  const imageId = variant.images?.[0] ?? product.images[0]

  const title       = product.metaTitle ?? product.name
  const description = product.metaDescription ?? product.description

  return {
    title,
    description,
    keywords:    product.keywords,
    alternates:  { canonical: `/shop/${slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: ogUrl(imageId), width: 1200, height: 630 }],
    },
    twitter: {
      card:        'summary_large_image',
      title,
      description,
      images:      [ogUrl(imageId)],
    },
  }
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { slug }  = await params
  const { color } = await searchParams
  const product   = getProductBySlug(slug)

  if (!product) notFound()

  // Preload every color's first photo as a real <link rel="preload"> —
  // rendered server-side so the browser starts fetching while the HTML is
  // still parsing, well before hydration. ProductInfo's own client-side
  // preload effect covers the same ground as a fallback (e.g. for a client
  // navigation that doesn't re-run this server render), but this is what
  // actually closes the ~1.5s cold-load gap on a fresh page load, since it
  // doesn't wait for JS to download and run first.
  const preloadHrefs = product.variants.map((v, i) =>
    pdpUrl(v.images?.[0] ?? product.images[i] ?? product.images[0], product.imageFit)
  )

  return (
    <div className="pt-12.5 md:pt-18" style={{ backgroundColor: '#FFFFFF' }}>
      {preloadHrefs.map((href) => (
        <link key={href} rel="preload" as="image" href={href} />
      ))}
      <div className="container-lp section-pad pt-2! md:pt-2!">

        {/* Breadcrumb — Home | All Products | [product], Assembly-style */}
        <div className="flex items-center gap-1.5 mb-0.5 md:mb-2 min-w-0">
          <Link
            href={ROUTES.home}
            scroll={false}
            className="shrink-0 font-body text-[0.7rem] tracking-[0.1em] uppercase text-[var(--color-lp-muted)] hover:text-[var(--color-lp-gold)] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-[var(--color-lp-border)] shrink-0">|</span>
          <Link
            href={ROUTES.shop}
            scroll={false}
            className="shrink-0 font-body text-[0.7rem] tracking-[0.1em] uppercase text-[var(--color-lp-muted)] hover:text-[var(--color-lp-gold)] transition-colors duration-200"
          >
            All Products
          </Link>
          <span className="text-[var(--color-lp-border)] shrink-0">|</span>
          <span className="font-body text-[0.7rem] tracking-[0.1em] uppercase text-[var(--color-lp-ink)] truncate min-w-0">
            {product.name}
          </span>
        </div>

        {/* PDP grid — keyed by slug so navigating PDP-to-PDP (no full page
            reload) remounts the whole client tree instead of reusing the
            instance. Without this, ImageGallery's `isFirstLoad` ref (which
            gates the hero image's `priority`/preload fast-path) and
            ProductPageClient's `colorIndex` state would carry over from
            whichever product was viewed first, silently losing the fast
            image load and the correct starting color on every product after
            the first one in a session. */}
        <ProductPageClient key={product.slug} product={product} defaultColor={color} />

        {/* Reviews carousel — only renders when the product has reviews */}
        <ProductReviewsCarousel productName={product.name} reviews={getReviewsForProduct(product.slug)} />

        {/* Long-form editorial detail */}
        <ProductStory product={product} />

      </div>
    </div>
  )
}
