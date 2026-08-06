'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/product/ImageGallery.tsx
// Product detail image gallery — main image + thumbnail strip.
// Swipe-friendly on mobile (drag between images).
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'
import Image                        from 'next/image'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { pdpUrl, thumbUrl, PLACEHOLDER_URL } from '@/lib/cloudinary'

const LONG_PRESS_MS      = 350  // hold duration before zoom kicks in
const LONG_PRESS_SLOP_PX = 8    // movement past this before the timer fires reads as a swipe, not a hold

interface Props {
  images: string[]
  productName: string
  activeColorIndex?: number
}

export function ImageGallery({ images, productName, activeColorIndex }: Props) {
  const [active, setActive]     = useState(activeColorIndex ?? 0)
  // What's actually on screen. Kept a step behind `active` so the current
  // photo never disappears behind a blank frame while the next one is
  // still downloading — see the preload effect below.
  const [displayed, setDisplayed] = useState(active)

  useEffect(() => {
    if (activeColorIndex !== undefined) setActive(activeColorIndex)
  }, [activeColorIndex])

  useEffect(() => {
    if (active === displayed) return
    let cancelled = false
    const preload = new window.Image()
    const swap = () => { if (!cancelled) setDisplayed(active) }
    preload.onload  = swap
    preload.onerror = swap
    preload.src = pdpUrl(images[active]) || PLACEHOLDER_URL
    if (preload.complete) swap()
    return () => { cancelled = true }
  }, [active, displayed, images])

  function handleDragEnd(_: unknown, info: PanInfo) {
    const { offset, velocity } = info
    if (offset.x < -50 || velocity.x < -400) {
      setActive((a) => Math.min(a + 1, images.length - 1))
    } else if (offset.x > 50 || velocity.x > 400) {
      setActive((a) => Math.max(a - 1, 0))
    }
  }

  // ── Long-press to zoom ──────────────────────────────────────────────────
  const [zoomed, setZoomed]         = useState(false)
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 })
  const pressStart   = useRef<{ x: number; y: number } | null>(null)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearLongPress() {
    if (longPressTimer.current) clearTimeout(longPressTimer.current)
    longPressTimer.current = null
    pressStart.current = null
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const originX = ((e.clientX - rect.left) / rect.width) * 100
    const originY = ((e.clientY - rect.top) / rect.height) * 100
    pressStart.current = { x: e.clientX, y: e.clientY }
    longPressTimer.current = setTimeout(() => {
      setZoomOrigin({ x: originX, y: originY })
      setZoomed(true)
    }, LONG_PRESS_MS)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!pressStart.current || zoomed) return
    const dx = e.clientX - pressStart.current.x
    const dy = e.clientY - pressStart.current.y
    // Moved too far before the hold completed — this is a swipe, not a
    // zoom request, so back off and let the drag gesture handle it.
    if (Math.hypot(dx, dy) > LONG_PRESS_SLOP_PX) clearLongPress()
  }

  function handlePointerUp() {
    clearLongPress()
    setZoomed(false)
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Main image — drag left/right to slide between images, press and hold to zoom */}
      <motion.div
        className="relative aspect-3/4 bg-lp-porcelain overflow-hidden touch-pan-y select-none"
        style={{ WebkitTouchCallout: 'none', cursor: zoomed ? 'zoom-out' : undefined }}
        drag={images.length > 1 && !zoomed ? 'x' : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.6}
        onDragEnd={handleDragEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onContextMenu={(e) => e.preventDefault()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={displayed}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{    opacity: 0, x: -8 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={pdpUrl(images[displayed]) || PLACEHOLDER_URL}
              alt={`${productName}, view ${displayed + 1}`}
              fill
              priority
              draggable={false}
              className="object-cover object-center"
              style={{
                transform:       zoomed ? 'scale(2)' : 'scale(1)',
                transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                transition:      zoomed ? 'transform 0.2s ease-out' : 'transform 0.25s ease-in',
              }}
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative shrink-0 w-16 h-21.25 overflow-hidden bg-lp-porcelain border transition-colors duration-200 ${
                i === active
                  ? 'border-lp-gold shadow-[inset_0_0_0_1px_var(--color-lp-gold)]'
                  : 'border-lp-border hover:border-lp-border-strong'
              }`}
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === active}
            >
              <Image
                src={thumbUrl(img) || PLACEHOLDER_URL}
                alt={`${productName} thumbnail ${i + 1}`}
                fill
                className="object-cover object-center"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
