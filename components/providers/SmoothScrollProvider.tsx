'use client'

import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Lenis         from 'lenis'

// Exposed so other client components (see lib/scrollRestore.ts) can drive
// scroll through Lenis instead of fighting its rAF loop with window.scrollTo.
declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isTouch || prefersReducedMotion) return

    const lenis = new Lenis({
      duration:    1.2,
      easing:      (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Modals (see ReviewsModal etc.) mark their own scrollable area with
      // data-lenis-prevent so Lenis leaves wheel events over it alone —
      // otherwise it globally intercepts and smooths every wheel event
      // regardless of what's under the cursor, which either scrolls the
      // page behind an open modal or, if Lenis is fully stopped instead,
      // blocks the modal's own native scroll too.
      prevent: (node) => node.closest('[data-lenis-prevent]') !== null,
    })

    window.__lenis = lenis

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
