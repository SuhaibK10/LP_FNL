'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/product/ProductReviewsCarousel.tsx
// Horizontal review carousel on the PDP, rendered just above the "In Detail"
// editorial section. Renders nothing when the product has no reviews yet.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import Image         from 'next/image'
import { Star, Play, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Review } from '@/config/reviews'
import { thumbUrl, pdpUrl } from '@/lib/cloudflareImages'
import { cfVideoPoster } from '@/lib/cloudflareStream'
import { ReviewsModal }   from '@/components/ui/ReviewsModal'
import { DemoVideoModal } from '@/components/product/DemoVideoModal'

interface Props {
  productName: string
  reviews:     Review[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          strokeWidth={0}
          className={i < rating ? 'fill-lp-gold' : 'fill-lp-border'}
        />
      ))}
    </div>
  )
}

export function ProductReviewsCarousel({ productName, reviews }: Props) {
  const [modalOpen, setModalOpen] = useState(false)
  const [expanded, setExpanded] = useState<Set<number>>(new Set())
  const [videoLightbox, setVideoLightbox] = useState<string | null>(null)
  const [imageLightbox, setImageLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (!imageLightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setImageLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [imageLightbox])

  if (reviews.length === 0) return null

  function toggleExpanded(i: number) {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <>
      <section className="pb-10 md:pb-14">
        <div className="flex items-end justify-between gap-4 mb-5 md:mb-6">
          <div>
            <p className="lp-eyebrow">Customer Reviews</p>
            <h2 className="lp-heading-md">
              {average.toFixed(1)}{' '}
              <span className="font-body text-[0.85rem] font-normal text-lp-muted">
                ({reviews.length} review{reviews.length === 1 ? '' : 's'})
              </span>
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="font-body text-[0.75rem] tracking-[0.06em] uppercase text-lp-ink underline underline-offset-2 hover:text-lp-gold transition-colors shrink-0"
          >
            View all
          </button>
        </div>

        <div className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-thin-x pb-3 -mx-1 px-1">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="flex flex-col gap-3 bg-lp-cream rounded-xl p-5 shrink-0 w-[78vw] sm:w-88"
            >
              <StarRating rating={r.rating} />
              <div>
                <p
                  className={`font-body text-[0.85rem] text-lp-ink leading-relaxed ${
                    expanded.has(i) ? '' : 'line-clamp-4'
                  }`}
                >
                  {r.text}
                </p>
                {r.text.length > 140 && (
                  <button
                    type="button"
                    onClick={() => toggleExpanded(i)}
                    className="font-body text-[0.78rem] text-lp-gold hover:underline mt-1"
                  >
                    {expanded.has(i) ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>
              {((r.images && r.images.length > 0) || r.video) && (
                <div className="flex gap-2">
                  {r.video && (
                    <button
                      type="button"
                      onClick={() => setVideoLightbox(r.video!)}
                      className="relative w-22 h-22 rounded-md overflow-hidden bg-lp-image-bg border border-lp-border shrink-0"
                    >
                      <Image src={cfVideoPoster(r.video)} alt={`${r.name}'s video`} fill className="object-cover" />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                        <Play size={20} strokeWidth={0} fill="white" className="ml-0.5" />
                      </span>
                    </button>
                  )}
                  {r.images?.slice(0, 3).map((img, k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setImageLightbox(img)}
                      className="relative w-22 h-22 rounded-md overflow-hidden bg-lp-image-bg border border-lp-border shrink-0 cursor-zoom-in"
                    >
                      <Image src={thumbUrl(img)} alt={`${r.name}'s photo`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between pt-1">
                <p className="font-body text-[0.78rem] font-medium text-lp-ink">{r.name}</p>
                <p className="font-body text-[0.7rem] text-lp-faint">{r.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReviewsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={productName}
        reviews={reviews}
      />

      <DemoVideoModal
        open={!!videoLightbox}
        onClose={() => setVideoLightbox(null)}
        videoId={videoLightbox ?? undefined}
      />

      <AnimatePresence>
        {imageLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-70 bg-black/85 flex items-center justify-center p-4 md:p-10"
            onClick={() => setImageLightbox(null)}
          >
            <button
              onClick={() => setImageLightbox(null)}
              className="fixed z-10 text-white/80 hover:text-white transition-colors"
              style={{ top: 'max(1rem, env(safe-area-inset-top))', right: 'max(1rem, env(safe-area-inset-right))' }}
              aria-label="Close"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="relative w-full h-full max-w-2xl">
              <Image
                src={pdpUrl(imageLightbox)}
                alt="Review photo"
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
