'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image                       from 'next/image'
import { X, Star, Play }           from 'lucide-react'
import { useEffect, useState }     from 'react'
import type { Review }             from '@/config/reviews'
import { thumbUrl, pdpUrl }        from '@/lib/cloudflareImages'
import { cfVideo, cfVideoPoster }  from '@/lib/cloudflareStream'

interface Props {
  open:        boolean
  onClose:     () => void
  productName: string
  reviews:     Review[]
}

export function ReviewsModal({ open, onClose, productName, reviews }: Props) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (lightboxImage) setLightboxImage(null)
      else if (lightboxVideo) setLightboxVideo(null)
      else onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, lightboxImage, lightboxVideo])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const average = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0

  const allVideos = reviews.filter((r): r is Review & { video: string } => !!r.video)
  const allImages = reviews.flatMap((r) => r.images ?? [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6 overscroll-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:max-w-xl bg-[var(--color-lp-porcelain)] max-h-[92dvh] overflow-y-auto overscroll-contain"
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[var(--color-lp-porcelain)] z-10 flex items-center justify-between px-6 py-4 border-b border-[var(--color-lp-border)]">
              <div>
                <h2 className="font-display text-[1.25rem] text-[var(--color-lp-ink)]">Reviews</h2>
                <p className="font-body text-[0.65rem] tracking-[0.1em] uppercase text-[var(--color-lp-muted)]">
                  {productName}
                  {reviews.length > 0 && (
                    <> · {average.toFixed(1)} ({reviews.length})</>
                  )}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-[var(--color-lp-muted)] hover:text-[var(--color-lp-ink)] transition-colors"
                aria-label="Close"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="px-6 py-6">
              {reviews.length === 0 ? (
                <p className="font-body text-[0.85rem] text-[var(--color-lp-muted)] text-center py-8">
                  No reviews yet for this product.
                </p>
              ) : (
                <>
                  {allVideos.length > 0 && (
                    <div className="mb-6 pb-6 border-b border-[var(--color-lp-border)]">
                      <p className="font-body font-medium text-[0.8rem] text-[var(--color-lp-ink)] mb-3">
                        Customer Videos ({allVideos.length})
                      </p>
                      <div className="flex gap-2 overflow-x-auto">
                        {allVideos.map((r, k) => (
                          <button
                            key={k}
                            type="button"
                            onClick={() => setLightboxVideo(r.video)}
                            className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden bg-[var(--color-lp-image-bg)] border border-[var(--color-lp-border)]"
                          >
                            <Image src={cfVideoPoster(r.video)} alt={`${r.name}'s video`} fill className="object-cover" />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                              <Play size={18} strokeWidth={1.5} className="text-white ml-0.5" fill="white" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {allImages.length > 0 && (
                    <div className="mb-6 pb-6 border-b border-[var(--color-lp-border)]">
                      <p className="font-body font-medium text-[0.8rem] text-[var(--color-lp-ink)] mb-3">
                        Customer Photos ({allImages.length})
                      </p>
                      <div className="flex gap-2 overflow-x-auto">
                        {allImages.map((img, k) => (
                          <button
                            key={k}
                            type="button"
                            onClick={() => setLightboxImage(img)}
                            className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden bg-[var(--color-lp-image-bg)] border border-[var(--color-lp-border)]"
                          >
                            <Image src={thumbUrl(img)} alt="Customer photo" fill className="object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="font-body font-medium text-[0.8rem] text-[var(--color-lp-ink)] mb-4">
                    Customer Reviews ({reviews.length})
                  </p>
                  <div className="space-y-6 divide-y divide-[var(--color-lp-border)]">
                    {reviews.map((r, i) => (
                      <div key={i} className={i > 0 ? 'pt-6' : ''}>
                        {((r.images && r.images.length > 0) || r.video) && (
                          <div className="flex gap-2 mb-2">
                            {r.video && (
                              <button
                                type="button"
                                onClick={() => setLightboxVideo(r.video!)}
                                className="relative w-16 h-16 rounded-md overflow-hidden bg-[var(--color-lp-image-bg)] border border-[var(--color-lp-border)]"
                              >
                                <Image src={cfVideoPoster(r.video)} alt={`${r.name}'s video`} fill className="object-cover" />
                                <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                                  <Play size={16} strokeWidth={1.5} className="text-white ml-0.5" fill="white" />
                                </span>
                              </button>
                            )}
                            {r.images?.map((img, k) => (
                              <button
                                key={k}
                                type="button"
                                onClick={() => setLightboxImage(img)}
                                className="relative w-16 h-16 rounded-md overflow-hidden bg-[var(--color-lp-image-bg)] border border-[var(--color-lp-border)]"
                              >
                                <Image src={thumbUrl(img)} alt={`${r.name}'s photo`} fill className="object-cover" />
                              </button>
                            ))}
                          </div>
                        )}
                        <p className="font-body font-medium text-[0.85rem] text-[var(--color-lp-ink)]">{r.name}</p>
                        <div className="flex items-center gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              size={13}
                              strokeWidth={0}
                              className={j < r.rating ? 'fill-lp-gold' : 'fill-[var(--color-lp-border)]'}
                            />
                          ))}
                        </div>
                        <p className="font-body text-[0.85rem] text-[var(--color-lp-body)] leading-relaxed mt-2">
                          {r.text}
                        </p>
                        <p className="font-body text-[0.7rem] text-[var(--color-lp-faint)] mt-3">{r.date}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src={pdpUrl(lightboxImage)}
              alt="Review photo"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </motion.div>
      )}

      {lightboxVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightboxVideo(null)}
        >
          <button
            onClick={() => setLightboxVideo(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <video
            src={cfVideo(lightboxVideo)}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
