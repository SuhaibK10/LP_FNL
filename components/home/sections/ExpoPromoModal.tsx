'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ExpoPromoModal.tsx
// Time-boxed trade-show popup — opens itself shortly after landing on the
// homepage, mobile only (the expo audience scanning in from a phone at the
// booth is the actual target, not desktop browsers). Shows once per browser
// session so it doesn't nag a visitor who's already dismissed it.
// Copy/image/catalogue link and the on/off switch all live in
// config/expoBanner.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import Image                    from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { EXPO_BANNER, EXPO_BANNER_ENABLED } from '@/config/expoBanner'
import { heroUrlMobile, PLACEHOLDER_URL } from '@/lib/cloudflareImages'

const SESSION_KEY  = 'lp-expo-promo-seen'
const OPEN_DELAY_MS = 1200

export function ExpoPromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!EXPO_BANNER_ENABLED) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(max-width: 767px)').matches) return
    if (sessionStorage.getItem(SESSION_KEY)) return

    const t = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(SESSION_KEY, '1')
    }, OPEN_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!EXPO_BANNER_ENABLED) return null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 z-70 bg-black/60 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm bg-lp-porcelain overflow-hidden rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white"
              aria-label="Close"
            >
              <X size={16} strokeWidth={1.75} />
            </button>

            {/* Image — full photo visible, no aggressive crop */}
            <div className="relative w-full aspect-4/5 bg-lp-ink">
              <Image
                src={heroUrlMobile(EXPO_BANNER.image) || PLACEHOLDER_URL}
                alt={EXPO_BANNER.heading}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-3 left-4 font-body text-[0.65rem] tracking-[0.14em] uppercase text-lp-gold">
                {EXPO_BANNER.eyebrow}
              </span>
            </div>

            {/* Content */}
            <div className="px-5 pt-4 pb-5 text-center">
              <h2 className="font-display text-[1.4rem] leading-tight text-lp-ink mb-3">
                {EXPO_BANNER.heading}
              </h2>

              <div className="flex flex-col items-center gap-1.5 mb-5 font-body text-[0.8rem] text-lp-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} strokeWidth={1.5} className="text-lp-gold" />
                  {EXPO_BANNER.dateLine}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} strokeWidth={1.5} className="text-lp-gold" />
                  {EXPO_BANNER.locationLine}
                </span>
              </div>

              <a
                href={EXPO_BANNER.catalogueUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center"
                onClick={() => setOpen(false)}
              >
                {EXPO_BANNER.ctaLabel}
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
