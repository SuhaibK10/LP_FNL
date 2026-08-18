'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/dev/ImageBgTestButton.tsx
// TEMPORARY — shop-page-local entry point for the product-photo A/B test
// (see imageBgTestConfig.ts + store/imageTestStore.ts). A compact dropdown
// next to Filters/Sort, only rendered in local dev (see the NODE_ENV check
// where it's used in ProductGrid.tsx) so it never ships to production.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { Palette } from 'lucide-react'
import { IMAGE_TEST_OPTIONS } from './imageBgTestConfig'
import { useImageTestStore } from '@/store/imageTestStore'

export function ImageBgTestButton() {
  const active    = useImageTestStore((s) => s.option)
  const setOption = useImageTestStore((s) => s.setOption)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="h-full flex items-center justify-center gap-2 font-body text-[0.7rem] max-md:text-[0.62rem] uppercase tracking-widest text-lp-ink border border-lp-muted rounded-md px-3 py-3 max-md:px-2.5 max-md:py-2 hover:border-lp-ink transition-colors duration-200"
        title="Test SkyTrail/AeroX/AeroSmart product photos (dev only)"
      >
        <Palette size={14} strokeWidth={1.5} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 w-[220px] rounded-lg border border-black/10 bg-white shadow-xl p-3">
          <p className="text-[0.65rem] font-bold uppercase tracking-wide text-black/60 mb-2">
            Image test
          </p>
          <div className="flex flex-wrap gap-1.5">
            {IMAGE_TEST_OPTIONS.map((o) => (
              <button
                key={o.n}
                type="button"
                onClick={() => setOption(o.n)}
                title={`Option ${o.n} — #${o.hex} — ${o.label}`}
                className="w-9 h-9 rounded flex items-center justify-center text-[0.65rem] font-bold text-black/70"
                style={{
                  background: `#${o.hex}`,
                  border: active === o.n || (active === null && o.n === 1)
                    ? '2px solid #B99A62'
                    : '2px solid rgba(0,0,0,0.12)',
                }}
              >
                {o.n}
              </button>
            ))}
          </div>
          {active !== null && (
            <p className="mt-2 text-[0.62rem] text-black/50">Active: option {active}</p>
          )}
          <button
            onClick={() => setOption(null)}
            className="mt-2 text-[0.65rem] underline text-black/50 hover:text-black/80"
          >
            Reset to default
          </button>
        </div>
      )}
    </div>
  )
}
