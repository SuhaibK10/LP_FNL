'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/ui/SaleCountdown.tsx
// Live countdown to SALE_CONFIG.endDate (lib/constants.ts) — a real deadline,
// not a fake/rolling one. Ticks every second; renders nothing once expired.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { SALE_CONFIG } from '@/lib/constants'

interface Props {
  className?: string
}

function getRemaining() {
  const diff = new Date(SALE_CONFIG.endDate).getTime() - Date.now()
  if (diff <= 0) return null
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function SaleCountdown({ className = '' }: Props) {
  // Starts null so server and first client render match (no real time on
  // the server) — the real value fills in a tick after mount.
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining>>(null)

  useEffect(() => {
    setRemaining(getRemaining())
    const id = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!remaining) return null

  return (
    <span className={`font-mono tabular-nums tracking-tight ${className}`}>
      {remaining.days > 0 && `${remaining.days}d `}
      {pad(remaining.hours)}:{pad(remaining.minutes)}:{pad(remaining.seconds)}
    </span>
  )
}
