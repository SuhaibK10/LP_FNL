'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/product/DemoVideoModal.tsx
// Product demonstration video — opened from the play button next to
// Wishlist on the PDP. Video plays at its natural aspect ratio, no forced
// crop, since demo clips vary between portrait and landscape.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cldVideo } from '@/lib/cloudflareImages'

interface Props {
  open:    boolean
  onClose: () => void
  videoId: string
}

export function DemoVideoModal({ open, onClose, videoId }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-70 bg-black/85 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
              aria-label="Close video"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <video
              key={videoId}
              src={cldVideo(videoId)}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[85dvh] bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
