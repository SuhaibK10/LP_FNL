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
import { cfVideo } from '@/lib/cloudflareStream'

interface Props {
  open:        boolean
  onClose:     () => void
  videoId?:    string  // Cloudflare Stream UID
  youtubeId?:  string  // trial alternative — renders an iframe embed instead
}

export function DemoVideoModal({ open, onClose, videoId, youtubeId }: Props) {
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
          className="fixed inset-0 z-70 bg-black/85 flex items-center justify-center sm:p-4"
          onClick={onClose}
        >
          {/* Fixed to the viewport (not the shrink-wrapped video box below)
              so it stays put whether the video is edge-to-edge full-screen
              (mobile) or floating mid-screen (desktop). */}
          <button
            onClick={onClose}
            className="fixed z-10 text-white/80 hover:text-white transition-colors"
            style={{ top: 'max(1rem, env(safe-area-inset-top))', right: 'max(1rem, env(safe-area-inset-right))' }}
            aria-label="Close video"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile: true full-bleed player, no frame — matches the
                native fullscreen-video feel. Desktop (sm+): shrink-wraps
                to the video's own aspect ratio (capped by viewport) so
                portrait clips don't get stretched wide and pillarboxed. */}
            {youtubeId ? (
              // Trial YouTube embed — sized for portrait (Shorts) clips,
              // same shrink-wrap-on-desktop behavior as the Stream player.
              <div className="w-screen h-dvh sm:w-auto sm:h-[85dvh] sm:aspect-9/16 bg-black rounded-none sm:rounded-2xl overflow-hidden">
                <iframe
                  key={youtubeId}
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1`}
                  title="Product demo video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : (
              <video
                key={videoId}
                src={cfVideo(videoId!)}
                controls
                autoPlay
                muted
                playsInline
                className="w-screen h-dvh sm:w-auto sm:h-auto sm:max-w-[90vw] sm:max-h-[85dvh] bg-black object-contain rounded-none sm:rounded-2xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
