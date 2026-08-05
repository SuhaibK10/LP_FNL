// ─────────────────────────────────────────────────────────────────────────────
// lib/scrollRestore.ts
// Remembers the shop grid's scroll position across a PDP visit, so navigating
// back (breadcrumb or browser back) returns to the same card instead of the
// top of the page. sessionStorage, not state — survives a full navigation.
// ─────────────────────────────────────────────────────────────────────────────

const KEY = 'lp:shop-scroll-y'

export function saveShopScroll() {
  sessionStorage.setItem(KEY, String(window.scrollY))
}

// Read + clear in one step — a saved position is only good for the very next
// visit to the shop grid, not for every future visit in the session.
export function consumeShopScroll(): number | null {
  const raw = sessionStorage.getItem(KEY)
  if (raw === null) return null
  sessionStorage.removeItem(KEY)
  const y = Number(raw)
  return Number.isFinite(y) ? y : null
}

// Lenis (see SmoothScrollProvider) animates the native scroll position itself,
// so a plain window.scrollTo() gets fought/overridden on its next rAF tick.
// Route through the live Lenis instance when one is mounted (desktop only —
// SmoothScrollProvider skips touch/reduced-motion), plain scrollTo otherwise.
export function restoreScroll(y: number) {
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(y, { immediate: true })
  } else {
    window.scrollTo(0, y)
  }
}
