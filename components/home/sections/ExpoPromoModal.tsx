'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ExpoPromoModal.tsx
// Time-boxed trade-show popup — opens itself shortly after landing on the
// homepage, mobile only (the expo audience scanning in from a phone at the
// booth is the actual target, not desktop browsers). Shows once per browser
// session so it doesn't nag a visitor who's already dismissed it.
//
// Styled deliberately warmer than the rest of the site (a deep burnt-
// terracotta "event pass" look pulled from the booth photo, not the site's
// muted gold) — Suhaib's call, this is a short-lived promo, not part of the
// permanent brand system.
//
// Copy/image/catalogue link and the on/off switch all live in
// config/expoBanner.ts.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'
import Image                    from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, MapPin, ArrowRight } from 'lucide-react'
import { EXPO_BANNER, EXPO_BANNER_ENABLED } from '@/config/expoBanner'
import { heroUrlMobile, PLACEHOLDER_URL } from '@/lib/cloudflareImages'

const OPEN_DELAY_MS = 1200

export function ExpoPromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!EXPO_BANNER_ENABLED) return
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(max-width: 1023px)').matches) return

    const t = setTimeout(() => setOpen(true), OPEN_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Body overflow:hidden alone doesn't reliably block background scroll on
  // iOS Safari (it still rubber-bands via touch) — locking documentElement
  // too matches the pattern already used for the mobile nav menu.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
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
          className="lg:hidden fixed inset-0 z-70 bg-black/75 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          {/* Warm glow behind the card */}
          <div
            className="absolute w-88 h-88 rounded-full blur-3xl opacity-35 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #8B4226 0%, transparent 70%)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.94 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-[#3A2418] shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
            style={{ background: 'linear-gradient(165deg, #1D1712 0%, #12100D 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#12100D]/90 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center justify-center text-white transition-all duration-200 hover:bg-[#12100D] hover:border-white/25 active:scale-90"
              aria-label="Close"
            >
              <X size={16} strokeWidth={2.5} />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-4/5">
              <Image
                src={heroUrlMobile(EXPO_BANNER.image) || PLACEHOLDER_URL}
                alt={EXPO_BANNER.heading}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#12100D] via-transparent to-black/10" />
              <div className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative px-6 pt-5 pb-6 text-center">
              <span
                className="inline-block font-body text-[0.65rem] font-semibold tracking-[0.14em] uppercase rounded-full border px-3 py-1 mb-3.5"
                style={{
                  color: '#D08856',
                  borderColor: 'rgba(208,136,86,0.35)',
                  backgroundColor: 'rgba(139,66,38,0.12)',
                }}
              >
                {EXPO_BANNER.eyebrow}
              </span>

              <h2 className="font-display text-[1.55rem] leading-[1.15] text-white mb-4">
                {EXPO_BANNER.heading}
              </h2>

              <div className="flex flex-col items-center gap-2 mb-5">
                <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 font-body text-[0.78rem] text-white/80">
                  <Calendar size={13} strokeWidth={1.75} className="text-[#D08856]" />
                  {EXPO_BANNER.dateLine}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 font-body text-[0.78rem] text-white/80">
                  <MapPin size={13} strokeWidth={1.75} className="text-[#D08856]" />
                  {EXPO_BANNER.locationLine}
                </span>
              </div>

              <motion.a
                href={EXPO_BANNER.catalogueUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center justify-center gap-2 w-full rounded-xl py-3.5 font-body text-[0.85rem] font-semibold tracking-[0.03em] uppercase text-white border border-white/10"
                style={{
                  background: 'linear-gradient(180deg, #9C4E28 0%, #6E3018 100%)',
                  boxShadow: '0 10px 20px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
                onClick={() => setOpen(false)}
              >
                {EXPO_BANNER.ctaLabel}
                <ArrowRight size={16} strokeWidth={2} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
