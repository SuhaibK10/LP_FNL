'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/ui/SwipeHint.tsx
// Bouncing "Swipe to explore" hint below a drag-to-scroll gallery. Shared by
// FactoryGallery and ExhibitionGallery (previously two near-identical copies).
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

interface Props {
  tone?: 'faint' | 'porcelain'
  marginTop?: string
}

export function SwipeHint({ tone = 'faint', marginTop = '0.75rem' }: Props) {
  const toneClass = tone === 'porcelain' ? 'text-[var(--color-lp-porcelain)]/40' : 'text-lp-faint'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="container-lp flex items-center justify-center gap-2"
      style={{ marginTop }}
    >
      <motion.div
        animate={{ x: [0, -6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowLeft size={13} strokeWidth={1.5} className={toneClass} />
      </motion.div>
      <span className={`font-body text-[0.6rem] tracking-[0.16em] uppercase ${toneClass}`}>
        Swipe to explore
      </span>
    </motion.div>
  )
}
