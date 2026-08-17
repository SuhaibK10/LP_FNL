'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/dev/ImageBgTester.tsx
// TEMPORARY — internal tool for A/B testing the product-image backdrop color.
// Picking an option writes its hex to localStorage (read by
// lib/cloudflareImages.ts's fitParams) and reloads so every product image
// across the site refetches from Cloudflare Images with the new background.
// Delete this file + its mount in app/layout.tsx + the override block in
// lib/cloudflareImages.ts once a color is locked in.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'lp_imgbg_test_hex'

// Fill in each option's hex as it's shared. `label` is just for the tooltip.
const OPTIONS: { n: number; hex: string; label: string }[] = [
  { n: 1, hex: 'E8E8E6', label: 'Current (default)' },
]

export function ImageBgTester() {
  const [active, setActive] = useState<string | null>(null)
  const [open,   setOpen]   = useState(true)

  useEffect(() => {
    setActive(window.localStorage.getItem(STORAGE_KEY))
  }, [])

  function choose(hex: string) {
    window.localStorage.setItem(STORAGE_KEY, hex)
    window.location.reload()
  }

  function reset() {
    window.localStorage.removeItem(STORAGE_KEY)
    window.location.reload()
  }

  return (
    <div className="fixed bottom-4 left-4 z-[999] font-sans">
      {open ? (
        <div className="w-[220px] rounded-lg border border-black/10 bg-white shadow-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-black/60">
              Image BG test
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-[0.7rem] text-black/40 hover:text-black/70"
              aria-label="Collapse"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {OPTIONS.map((o) => (
              <button
                key={o.n}
                type="button"
                onClick={() => choose(o.hex)}
                title={`Option ${o.n} — #${o.hex} — ${o.label}`}
                className="w-9 h-9 rounded flex items-center justify-center text-[0.65rem] font-bold text-black/70"
                style={{
                  background: `#${o.hex}`,
                  border: active === o.hex || (!active && o.hex === 'E8E8E6')
                    ? '2px solid #B99A62'
                    : '2px solid rgba(0,0,0,0.12)',
                }}
              >
                {o.n}
              </button>
            ))}
          </div>
          {active && (
            <p className="mt-2 text-[0.62rem] text-black/50">Active: #{active}</p>
          )}
          <button
            onClick={reset}
            className="mt-2 text-[0.65rem] underline text-black/50 hover:text-black/80"
          >
            Reset to default
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-black/80 text-white text-[0.65rem] font-bold px-3 py-2 shadow-lg"
        >
          BG test
        </button>
      )}
    </div>
  )
}
