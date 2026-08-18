// ─────────────────────────────────────────────────────────────────────────────
// components/dev/imageBgTestConfig.ts
// TEMPORARY — shared config for A/B testing candidate product photos (each
// shot against a different studio backdrop) for SkyTrail, AeroX, and
// AeroSmart 3-in-1. Used by both the floating ImageBgTester (every page)
// and the shop page's inline "Test Image BG" button.
//
// Picking an option swaps the actual display image for these three products
// on the shop grid (see the override in components/shop/ProductCard.tsx).
// The chosen option lives in store/imageTestStore.ts (plain reactive Zustand
// state, persisted) rather than localStorage + a manual page reload, so
// every mounted card updates instantly.
//
// Delete this file + its mounts + the override in ProductCard.tsx once a
// winner is picked and baked into config/products.ts for real.
// ─────────────────────────────────────────────────────────────────────────────

export interface ImageTestOption {
  n:      number
  hex:    string   // the backdrop color this photo set was shot against — swatch preview only
  label:  string
  // Cloudflare image IDs, one per product this option covers. `null` (option 1)
  // means "use whatever's already in config/products.ts" — the original.
  images: Record<'skytrail' | 'aerox' | 'aerosmart-3in1', string> | null
}

export const IMAGE_TEST_OPTIONS: ImageTestOption[] = [
  { n: 1, hex: 'E8E8E6', label: 'Original', images: null },
  {
    n: 2, hex: 'F3F2EF', label: 'Warm off-white',
    images: {
      skytrail:          'bda9ecbb-dcaa-42b3-bb55-5baf6de5de00',
      aerox:             '6e43b5e2-2dc0-453a-314a-1685335b5800',
      'aerosmart-3in1':  '97fc31a8-5540-4003-e287-6b86ff875200',
    },
  },
  {
    n: 3, hex: 'E8E6E1', label: 'Warm light grey',
    images: {
      skytrail:          '9d3968aa-38d7-45b9-737f-5d60bcc7f900',
      aerox:             'a3ecae6a-929d-4d16-058c-b77ed7533700',
      'aerosmart-3in1':  '7d73e52b-875a-4c0c-b59f-1479b0068e00',
    },
  },
  {
    n: 4, hex: 'C4A488', label: 'Warm tan/caramel',
    images: {
      skytrail:          '4de5be57-6ace-4919-13bf-8bee10f46e00',
      aerox:             '405f909f-57f4-4175-b4f4-fe72a2487a00',
      'aerosmart-3in1':  '622b7aab-828d-46e7-ed36-0a5ed3d5e600',
    },
  },
  {
    n: 5, hex: 'E4E4E4', label: 'Neutral light grey',
    images: {
      skytrail:          '38fc6de7-8e78-420c-a9fa-e146d9288500',
      aerox:             '35b17cee-d8c7-40b6-e51b-02d1d02f6700',
      'aerosmart-3in1':  '3571701c-fc6c-4ec6-b820-79a9d21bc800',
    },
  },
  {
    n: 6, hex: 'CCBCA8', label: 'Warm sand/khaki',
    images: {
      skytrail:          '4a904df4-9200-4771-298c-86856ca01f00',
      aerox:             'f3604380-1433-491e-8dcc-63b087bc3100',
      'aerosmart-3in1':  '3e8b76e3-7d0c-4e0c-b358-d3615f777900',
    },
  },
  {
    n: 7, hex: 'D4D4CC', label: 'Muted sage grey',
    images: {
      skytrail:          'b2abf2d8-e1d1-4503-b822-98df82a87c00',
      aerox:             '94f40aee-bce8-419c-ee78-387e86fd9900',
      'aerosmart-3in1':  '970f581f-8413-4d14-fc3a-def99eff9e00',
    },
  },
  {
    n: 8, hex: 'F2F2F0', label: 'Near-white warm grey',
    images: {
      skytrail:          '5411f0e2-cdcd-416c-c0a3-e87410a4e500',
      aerox:             '44b87d38-f606-4a22-43b8-0293bd7a3d00',
      'aerosmart-3in1':  'afb25f17-3c93-4508-4ff5-af5570a17100',
    },
  },
]

// Returns the overridden image ID for a product under the given option
// number, or null if no override applies (option 1 / nothing picked yet /
// this product isn't part of the test set). Pure function — the option
// number itself comes from useImageTestStore so callers stay reactive.
export function resolveTestImage(productId: string, option: number | null): string | null {
  if (option === null) return null
  const opt = IMAGE_TEST_OPTIONS.find((o) => o.n === option)
  if (!opt?.images) return null
  return opt.images[productId as keyof typeof opt.images] ?? null
}
