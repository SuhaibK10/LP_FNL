'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ExpoPromoModal.tsx
// Time-boxed trade-show popup — opens itself shortly after landing on the
// homepage, mobile only (the expo audience scanning in from a phone at the
// booth is the actual target, not desktop browsers). Shows once per browser
// session so it doesn't nag a visitor who's already dismissed it.
//
// Styled deliberately louder/warmer than the rest of the site (a vivid
// orange "event pass" look pulled from the booth photo itself, not the
// site's muted gold) — Suhaib's call, this is a short-lived promo, not
// part of the permanent brand system.
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
          className="lg:hidden fixed inset-0 z-70 bg-black/70 flex items-center justify-center p-5"
          onClick={() => setOpen(false)}
        >
          {/* Warm glow behind the card */}
          <div
            className="absolute w-104 h-104 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #8B4226 0%, transparent 70%)' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.94 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm overflow-hidden rounded-[1.75rem] shadow-[0_30px_80px_-20px_rgba(139,66,38,0.45)]"
            style={{ background: 'linear-gradient(180deg, #1A1512 0%, #100D0B 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient ring border */}
            <div
              className="absolute inset-0 rounded-[1.75rem] pointer-events-none"
              style={{
                padding: 1,
                background: 'linear-gradient(135deg, rgba(166,85,46,0.55), rgba(255,255,255,0.08) 40%, rgba(110,48,24,0.4))',
                WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/45 backdrop-blur-md border border-white/20 shadow-[0_4px_14px_rgba(0,0,0,0.35)] flex items-center justify-center text-white/90 transition-all duration-200 hover:bg-black/60 hover:border-white/30 active:scale-90"
              aria-label="Close"
            >
              <X size={15} strokeWidth={2.25} />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-4/5">
              <Image
                src={heroUrlMobile(EXPO_BANNER.image) || PLACEHOLDER_URL}
                alt={EXPO_BANNER.heading}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#100D0B] via-[#100D0B]/10 to-transparent" />

              <span
                className="absolute bottom-3 left-4 right-4 font-body text-[0.68rem] font-semibold tracking-[0.16em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #C97A4A, #8B4226)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {EXPO_BANNER.eyebrow}
              </span>
            </div>

            {/* Content */}
            <div className="relative px-6 pt-5 pb-6 text-center">
              <h2 className="font-display text-[1.65rem] leading-[1.1] text-white mb-4">
                {EXPO_BANNER.heading}
              </h2>

              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="flex items-center gap-2 rounded-full bg-white/6 border border-white/10 px-3.5 py-1.5 font-body text-[0.78rem] text-white/85">
                  <Calendar size={13} strokeWidth={1.75} className="text-[#C97A4A]" />
                  {EXPO_BANNER.dateLine}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/6 border border-white/10 px-3.5 py-1.5 font-body text-[0.78rem] text-white/85">
                  <MapPin size={13} strokeWidth={1.75} className="text-[#C97A4A]" />
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
