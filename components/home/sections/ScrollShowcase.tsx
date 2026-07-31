'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ScrollShowcase.tsx
// Stacked-card scrollytelling — the sheryians.com / wntrtravel.com mechanic:
// every card wrapper is `sticky top-0 h-screen`, so the current card pins to
// the viewport while the NEXT card (later in normal flow) scrolls up from the
// bottom edge and covers it. The covering is scrubbed 1:1 by scroll — no
// triggered animations, no scroll listeners, no GSAP; pure CSS stacking.
// After the last card the section ends and the page releases naturally.
//
// Content-agnostic — pass any `stops` array in. The eyebrow/heading render
// once, above the pinned stack (not repeated per card); per-stop captions
// are intentionally not rendered (photos only). A stop with `productSlug`
// gets a View Product link under its card and a click-through overlay on
// the photo.
// ─────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cld, PLACEHOLDER_URL } from '@/lib/cloudinary'
import { ROUTES } from '@/lib/constants'

export interface ShowcaseStop {
  image:   string   // Cloudinary public_id
  heading?: string
  body?:    string
  productSlug?: string   // links "View Product" to /shop/{slug} when set
}

function ViewProductLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`${ROUTES.shop}/${slug}`}
      className="group/link inline-flex items-center gap-2 mt-5"
    >
      <span className="font-body text-[0.7rem] tracking-[0.12em] uppercase text-lp-ink">
        View Product
      </span>
      <ArrowRight
        size={13}
        strokeWidth={1.5}
        className="text-lp-gold group-hover/link:translate-x-1 transition-transform duration-200"
      />
    </Link>
  )
}

interface ScrollShowcaseProps {
  eyebrow: string
  heading: string
  stops:   ShowcaseStop[]
}

export function ScrollShowcase({ eyebrow, heading, stops }: ScrollShowcaseProps) {
  if (!stops.length) return null

  return (
    <>
      {/* Soft stage for this section only — a warm greige a step deeper than
          the porcelain page, so the cards separate cleanly while the theme
          stays light. */}
      <div className="bg-[#E7E2D8]">

        {/* Scroll indicator — flush at the extreme top of the section,
            ahead of section-pad's own top padding. */}
        <div className="flex flex-col items-center gap-1 pt-2 md:pt-3 pb-6 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-1"
          >
            <div
              className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
              style={{ border: '1.5px solid var(--color-lp-ink)' }}
            >
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-lp-ink"
              />
            </div>
            <span className="font-body text-[0.6rem] tracking-[0.16em] uppercase text-lp-ink">
              Swipe down to Begin the Journey
            </span>
          </motion.div>
        </div>

        {/* Heading — shown once here, not repeated per card below */}
        <div className="container-lp text-center" style={{ paddingBottom: '0.5rem' }}>
          <span className="lp-eyebrow">{eyebrow}</span>
          <h2 className="lp-heading-lg" style={{ paddingBottom: '0.15em' }}>{heading}</h2>
        </div>
      </div>

      {/* Stacked cards — each wrapper pins at top-0 while the next one in
          flow scrolls up over it. Wrapper height is 92vh, not a full
          h-screen: that leftover 8vh is deliberate — it's what lets the next
          card's top edge peek up into view before the current one releases,
          instead of just exposing empty background. The card inside fills
          essentially all of that wrapper (minus the header-clearance
          padding), so there's no dead gap of its own. */}
      <section className="relative bg-[#E7E2D8]">
        {stops.map((stop, i) => (
          <div key={i} className="sticky top-0 h-[92vh] flex flex-col items-center justify-start pt-24 md:pt-32">
            <div className="relative w-[92vw] aspect-[3/4] max-h-[calc(92vh-6rem)] md:w-auto md:h-[calc(92vh-8rem)] md:max-h-none rounded-xl md:rounded-2xl overflow-hidden bg-[var(--color-lp-cream)] ring-1 ring-black/5 shadow-[0_24px_60px_-28px_rgba(26,23,20,0.45)]">
              <img
                src={cld(stop.image, 'f_auto,q_auto,w_1200,h_1600,c_fill,g_auto:face') || PLACEHOLDER_URL}
                alt=""
                className="absolute inset-0 w-full h-full object-cover brightness-[1.07]"
              />
              {stop.productSlug && (
                <Link
                  href={`${ROUTES.shop}/${stop.productSlug}`}
                  aria-label="View Product"
                  className="absolute inset-0"
                />
              )}
            </div>
            {stop.productSlug && <ViewProductLink slug={stop.productSlug} />}
          </div>
        ))}
        {/* Tail — minimal buffer so the last card releases almost
            immediately once its own pinned screen has passed. */}
        <div className="h-[5vh]" aria-hidden="true" />
      </section>
    </>
  )
}
