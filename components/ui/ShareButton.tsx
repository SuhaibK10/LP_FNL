'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/ui/ShareButton.tsx
// Share icon — native OS share sheet on mobile (WhatsApp included there
// automatically); a small WhatsApp + copy-link menu on desktop, where
// navigator.share usually isn't available.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence }     from 'framer-motion'
import { Share2, Check, Link2 }        from 'lucide-react'

interface ShareButtonProps {
  title: string
  url:   string
  className?: string
}

// Simple inline WhatsApp glyph — lucide has no brand icons.
function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.92 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67c2.2 0 4.26.86 5.82 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.55-3.7 8.25-8.24 8.25a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.24-8.25M8.53 6.98c-.17 0-.45.06-.68.32-.24.25-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.76 4.42 3.76 2.19.84 2.63.67 3.11.63.47-.04 1.53-.62 1.75-1.23s.22-1.11.15-1.23c-.07-.11-.24-.17-.5-.3s-1.53-.75-1.77-.84-.4-.13-.58.13c-.17.26-.66.84-.81 1-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.25-.02-.39.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.44-.15 0-.32-.02-.5-.02" />
    </svg>
  )
}

export function ShareButton({ title, url, className }: ShareButtonProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied,   setCopied]   = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [menuOpen])

  async function handleShareClick() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled the share sheet — not an error worth surfacing.
      }
      return
    }
    setMenuOpen((o) => !o)
  }

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={handleShareClick}
        aria-label="Share this product"
        className={className ?? 'text-[var(--color-lp-muted)] hover:text-[var(--color-lp-gold)] transition-colors duration-200'}
      >
        <Share2 size={18} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-20 w-44 bg-[var(--color-lp-porcelain)] border border-[var(--color-lp-border)] shadow-lg rounded-md overflow-hidden"
          >
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2.5 px-4 py-3 font-body text-[0.8rem] text-[var(--color-lp-ink)] hover:bg-[var(--color-lp-cream)] transition-colors duration-150"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={copyLink}
              className="w-full flex items-center gap-2.5 px-4 py-3 font-body text-[0.8rem] text-[var(--color-lp-ink)] hover:bg-[var(--color-lp-cream)] transition-colors duration-150 border-t border-[var(--color-lp-border)]"
            >
              {copied ? (
                <>
                  <Check size={15} strokeWidth={1.5} className="text-[var(--color-lp-success)]" />
                  Copied
                </>
              ) : (
                <>
                  <Link2 size={15} strokeWidth={1.5} />
                  Copy link
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
