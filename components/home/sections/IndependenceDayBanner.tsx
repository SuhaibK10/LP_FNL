'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/IndependenceDayBanner.tsx
// Slim celebratory strip — 80th Independence Day. Sits above
// Shop by Category / Sale. Toggle lives in HomeEditorial.tsx.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { VIEWPORT } from '@/lib/animations'

const TRICOLOR = 'linear-gradient(90deg, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)'

// Small, flag-accurate emblem — three bands + a 24-spoke Ashoka Chakra,
// used instead of a generic icon so it reads as the actual Indian flag.
function MiniFlag() {
  return (
    <svg width="40" height="27" viewBox="0 0 76 51" className="shrink-0 rounded-[1px] shadow-sm">
      <defs>
        <linearGradient id="flag-bands" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"          stopColor="#FF9933" />
          <stop offset="33.333%"     stopColor="#FF9933" />
          <stop offset="33.333%"     stopColor="#FFFFFF" />
          <stop offset="66.666%"     stopColor="#FFFFFF" />
          <stop offset="66.666%"     stopColor="#138808" />
          <stop offset="100%"        stopColor="#138808" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="76" height="51" fill="url(#flag-bands)" />
      <g transform="translate(38 25.5)">
        <circle r="7.4" fill="none" stroke="#0B3D91" strokeWidth="1" />
        <circle r="1.1" fill="#0B3D91" />
        {Array.from({ length: 24 }, (_, i) => (i * 360) / 24).map((deg) => {
          const rad = (deg * Math.PI) / 180
          return (
            <line
              key={deg}
              x1={1.1 * Math.cos(rad)}
              y1={1.1 * Math.sin(rad)}
              x2={7 * Math.cos(rad)}
              y2={7 * Math.sin(rad)}
              stroke="#0B3D91"
              strokeWidth="0.55"
            />
          )
        })}
      </g>
    </svg>
  )
}

export function IndependenceDayBanner() {
  return (
    <section className="relative bg-lp-cream">
      <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: TRICOLOR }} />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5 }}
        className="container-lp py-4 md:py-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left"
      >
        <MiniFlag />
        <div className="flex flex-col gap-0.5">
          <p className="font-display text-[1rem] md:text-[1.1rem] text-lp-ink leading-snug">
            Happy 80<sup className="text-[0.6em] relative -top-[0.5em]">th</sup> Independence Day
          </p>
          <p className="font-body text-[0.85rem] md:text-[0.9rem] text-lp-muted leading-snug">
            Proudly built for every Indian&apos;s journey ahead
          </p>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-[2px]" style={{ background: TRICOLOR }} />
    </section>
  )
}
