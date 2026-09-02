'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/home/sections/ScrollHint.tsx
// "Swipe down to Begin the Journey" — the scroll-indicator prompt lifted out
// of ScrollShowcase.tsx so it can run standalone (that section's own 6
// images are gone — dead Cloudinary account — so the stacked-card gallery
// stays off until new photos are picked; this prompt needs none).
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'

export function ScrollHint() {
  return (
    <div className="flex flex-col items-center gap-1 pt-8 pb-8 md:pt-10 md:pb-10">
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
        <span className="font-body text-[0.6rem] tracking-[0.1em] uppercase text-lp-ink">
          Swipe down to Begin the Journey
        </span>
      </motion.div>
    </div>
  )
}
