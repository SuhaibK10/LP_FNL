// ─────────────────────────────────────────────────────────────────────────────
// lib/animations.ts
// All Framer Motion variants. Import from here — never define inline.
// ─────────────────────────────────────────────────────────────────────────────

import type { Variants } from 'framer-motion'

// The LP premium easing curve
const LP_EASE = [0.25, 0.1, 0.25, 1] as const

// ─── Base variants ────────────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: LP_EASE },
  },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const slideFromLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: LP_EASE },
  },
}

export const slideFromRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: LP_EASE },
  },
}

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: LP_EASE },
  },
}

// ─── Stagger containers ───────────────────────────────────────────────────────

export const staggerChildren: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}

// ─── Special ──────────────────────────────────────────────────────────────────

// Gold line expands from left — used under headings
export const expandLine: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, delay: 0.2, ease: LP_EASE },
  },
}

// Hero text — each word clips up from below
export const clipUp: Variants = {
  hidden:  { opacity: 0, y: 48, clipPath: 'inset(100% 0 0 0)' },
  visible: {
    opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

// ─── Viewport config ──────────────────────────────────────────────────────────

export const VIEWPORT = {
  once:   true,
  margin: '-80px',
} as const

// ─── Confident spring tier ──────────────────────────────────────────────────
// Supplements (never replaces) the LP_EASE tier above. Use only for things
// the user *did* (taps, add-to-cart, selections) or discrete arrivals (a
// card landing, a CTA appearing) — never for ambient/looping content, never
// more than one overshooting element on screen at once, never on text
// longer than ~3 words. Scroll-triggered section reveals stay on
// fadeUp/scaleUp/expo-out — that's what still reads "in control."
// prefers-reduced-motion is already handled globally via the
// <MotionConfig reducedMotion="user"> wrapper in
// components/providers/SmoothScrollProvider.tsx — no extra handling needed
// here, Framer Motion strips the transform on its own when set.

// Spring arrival — cards/CTAs settling into view with a slight overshoot.
export const popIn: Variants = {
  hidden:  { opacity: 0, y: 20, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

// Tap/click feedback — a named, reusable whileTap spring, replacing bare
// whileTap={{ scale: 0.97 }} calls scattered across cards.
export const tapPunch = {
  scale: 0.94,
  transition: { type: 'spring', stiffness: 400, damping: 17 } as const,
}

// Faster, more present stagger than staggerChildren — for grids that want
// more visible sequencing (e.g. CategoryGrid).
export const staggerPunch: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
