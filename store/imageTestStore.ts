// ─────────────────────────────────────────────────────────────────────────────
// store/imageTestStore.ts
// TEMPORARY — reactive state for the product-photo A/B test (see
// components/dev/imageBgTestConfig.ts). Persisted so the choice survives
// navigation/reload, but plain Zustand state (not localStorage + a manual
// page reload) so every mounted ProductCard re-renders with the new image
// the instant an option is picked.
// Delete alongside the rest of components/dev/* once a winner is picked.
// ─────────────────────────────────────────────────────────────────────────────

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ImageTestState {
  option: number | null
  setOption: (n: number | null) => void
}

export const useImageTestStore = create<ImageTestState>()(
  persist(
    (set) => ({
      option: null,
      setOption: (n) => set({ option: n }),
    }),
    { name: 'lp_img_test_option' }
  )
)
