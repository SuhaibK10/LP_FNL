// ─────────────────────────────────────────────────────────────────────────────
// components/ui/TickingClock.tsx
// Small animated clock — a fixed minute hand plus a second hand that sweeps
// around the face, both pivoting from the exact center like a real clock's
// hands on a spindle. The sweep uses native SVG <animateTransform> (SMIL)
// rather than a CSS transform, because CSS transform-origin on an SVG
// element resolves against the whole SVG viewport by default, not a parent
// <g>'s local coordinate space — that mismatch was the actual cause of every
// previous "wrong pivot" attempt. animateTransform's rotate(angle, cx, cy)
// form has no such ambiguity: cx/cy are always in the shape's own
// coordinate system.
// Used as a lightweight urgency cue (e.g. next to a Sale tab/label).
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  size?: number
  className?: string
}

export function TickingClock({ size = 13, className = '' }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.75" stroke="currentColor" strokeWidth="1.5" />
      {/* Static minute hand — points to 12 */}
      <line x1="12" y1="12" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Second hand — the only moving part */}
      <line x1="12" y1="12" x2="12" y2="4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="5s"
          repeatCount="indefinite"
        />
      </line>
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}
