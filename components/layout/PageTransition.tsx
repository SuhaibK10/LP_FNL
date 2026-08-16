'use client'

import { useEffect }     from 'react'
import { motion }        from 'framer-motion'
import { usePathname }   from 'next/navigation'
import { restoreScroll } from '@/lib/scrollRestore'
import { ROUTES }        from '@/lib/constants'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Skip the shop grid — ProductGrid owns its own scroll position there
    // (restoring the saved card position, or 0 if none), and since its effect
    // runs after this one (child effects fire before parent effects), doing
    // our own restoreScroll(0) here would win and stomp that restoration.
    if (pathname === ROUTES.shop) return
    // Plain window.scrollTo fights Lenis's own rAF loop (see scrollRestore.ts)
    // — it snaps to 0 for a frame, then Lenis resyncs the native scroll back
    // toward its still-cached target from the previous page, so a PDP opened
    // from partway down the shop grid would briefly show near the bottom.
    restoreScroll(0)
  }, [pathname])

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
