'use client'

import { useState }        from 'react'
import { Ruler }           from 'lucide-react'
import { SizeGuideModal }  from '@/components/ui/SizeGuideModal'

export function ShopSizeGuideButton() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 font-body font-semibold text-[0.75rem] max-md:text-[0.68rem] tracking-[0.1em] uppercase text-lp-ink hover:text-lp-gold border border-[var(--color-lp-border)] hover:border-[var(--color-lp-gold)] rounded-md px-3 py-2 max-md:px-2 max-md:py-1.5 transition-colors duration-200"
      >
        <Ruler size={13} strokeWidth={1.5} />
        Size Guide
      </button>
      <SizeGuideModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
