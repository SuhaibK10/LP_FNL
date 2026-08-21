// ─────────────────────────────────────────────────────────────────────────────
// config/products.ts
// THE single place to add, edit, or remove products.
//
// IMAGES: Use Cloudinary public_ids (not full URLs).
// The cld() helper in lib/cloudinary.ts builds the URL with transforms.
// Upload images to Cloudinary folder: louispolo/products/{slug}/
// Example public_id: "louispolo/products/aerosmart/aerosmart-red-1"
//
// TO ADD A PRODUCT:  add an object to PRODUCTS array below.
// TO REMOVE:         delete the object.
// TO ADD A COLOR:    add to the variants array inside the product.
// TO ADD A SIZE:     add to the sizes array inside the color variant.
// ─────────────────────────────────────────────────────────────────────────────

import type { Product, HeroSlide } from '@/types'

// ─── Hero Slides ─────────────────────────────────────────────────────────────
// 3-4 images that auto-slide in the hero section.
// Replace public_ids with your Cloudinary uploads.
export const HERO_SLIDES: HeroSlide[] = [
  {
    // Hosted on a separate Cloudinary account (deh394y0h) — the primary
    // account's credit limit is exhausted.
    image:        '92de1fa2-6ccf-413c-5391-3e14caee1a00',
    desktopImage: '6eec31b5-83e8-4397-4f60-71c6d181a100',
    headline:  '',
    textStyle: 'shadow',
    textSize:  'lg',
  },
  // Temporarily disabled — first hero slide (mobile + desktop) turned off.
  // {
  //   // Hosted on a separate Cloudinary account (deh394y0h) — the primary
  //   // account's credit limit is exhausted.
  //   image:        'https://res.cloudinary.com/deh394y0h/image/upload/v1785876730/ChatGPT_Image_Aug_5_2026_at_02_21_13_AM_uy8dkj.png',
  //   desktopImage: 'https://res.cloudinary.com/deh394y0h/image/upload/v1785875011/ChatGPT_Image_Aug_5_2026_at_01_52_56_AM_cqlsmb.png',
  //   headline:  '',
  //   textStyle: 'shadow',
  //   textSize:  'lg',
  // },
  {
    image:     '0faae779-3755-43f5-147d-cd2b52ecc600',
    headline:  '',
    desktopImage: '75865faa-c138-437c-ab26-8093e8267f00',
    textStyle: 'shadow',
    textSize:  'lg',
  },
  {
    image:     '71160506-0661-4fdd-b227-57c6347fa800',
    headline:  'Made for the Long Haul.',
    desktopImage: '12b84a26-92c8-45c1-cc9b-29737322cf00',
    textStyle: 'shadow',
    textSize:  'lg',
  },
  {
    image:     '9ee3e065-ec2f-4ff8-e461-36ea187a7100',
    headline:  'Every Trip, Covered',
    desktopImage: 'e28adb2e-8627-4f6a-8b8f-f86d869b1600',
    textStyle: 'shadow',
  },
  {
    image:       '01837740-df32-4baf-e893-0927ee69a600',
    headline:    'Bold in Every Color',
    desktopImage: 'f6690616-23fe-4e36-47a5-a0e343b03700',
    textStyle:   'shadow',
    textOffset:  1,
  },
  {
    image:        '706ce5b3-c944-4a83-db0d-74f78dac5e00',
    headline:     'Pack Light. Go Far.',
    desktopImage: 'c23a9462-1d40-45d0-7e4a-0e9e6b1afd00',
    textStyle:    'shadow',
    textPosition: 'top',
  },
  {
    image:        '2c72a121-2b97-41dc-eae9-c6734b695200',
    headline:     'The Showstopper: AeroSmart 3in1',
    desktopImage: '4ec6a2be-c5d3-4ac1-983d-00d3958fff00',
    textStyle:    'light',
    textSize:     'lg',
    textPosition: 'top',
  },
]

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [

  // ── SkyTrail ────────────────────────────────────────────────────────────
  {
    id: 'skytrail',
    imageFit: 'cover',
    metaTitle: 'SkyTrail Hard Shell Trolley Bag in 20″, 24″ & 28″',
    metaDescription: 'Premium polycarbonate hard-shell luggage with combination lock, 360° spinner wheels, and organised interior. Three sizes, 3-year warranty.',
    keywords: ['premium hard shell luggage', 'combination lock suitcase', '360 spinner wheel trolley', 'lightweight travel luggage', 'check-in luggage india'],
    name: 'SkyTrail',
    slug: 'skytrail',
    category: 'trolley',
    isFeatured: true,
    mrp: 9099,
    description:
      'Built for the frequent flyer. SkyTrail combines a sleek hard shell ABS body with 360° spinner wheels and combination lock. Smooth, secure, and ready for boarding.',
    story: [
      'SkyTrail is the suitcase we build for people who fly often enough to stop counting. The brief was simple: quiet looks, hard protection, and wheels that make an airport feel shorter.',
      'Each of the three sizes is moulded from polycarbonate and ABS with reinforced corners. Inside, compression straps and zipped dividers keep a week of packing exactly where it started, and a three-dial combination lock closes over all of it.',
    ],
    highlights: [
      {
        heading: 'Quiet on the outside',
        body: 'Clean lines, a low-sheen finish, and no loud branding. SkyTrail is designed to look as at home in a hotel lobby as it does on a carousel, on day one and on day five hundred.',
      },
      {
        heading: 'Serious underneath',
        body: 'Reinforced corners absorb the knocks that travel deals out, while the hard shell holds its shape and finish through years of overhead bins and baggage holds.',
      },
      {
        heading: 'Four wheels, no drag',
        body: '360° spinner wheels roll silently in any direction, and the telescopic handle is tuned for one-handed steering through crowded terminals.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Polycarbonate + ABS' },
      { label: 'Cabin (20″)',  value: '55.9 × 38.1 × 22.9 cm · approx. 2.5 kg · 48.6 L' },
      { label: 'Medium (24″)', value: '66 × 44.5 × 26.7 cm · approx. 3.6 kg · 78.2 L' },
      { label: 'Large (28″)',  value: '76.2 × 50.8 × 30.5 cm · approx. 4.3 kg · 117.9 L' },
      { label: 'Lock',         value: '3-digit combination lock' },
      { label: 'Wheels',       value: '360° spinner wheels' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Which size do I need?',
        a: 'The cabin handles two to four days, the 24″ covers a week, and the 28″ is built for a fortnight, or for one person packing for two.',
      },
      {
        q: 'Will the cabin size be accepted on board?',
        a: 'It is sized for standard cabin allowances on most domestic and international carriers. If your airline enforces strict gauge checks, compare the dimensions above with its published limits before you fly.',
      },
    ],
    images: [
      // 'af0b6d0c-556b-4de2-12ff-dafb614c5600',
      // 'f3a7cf1c-9113-4853-4d2d-5a2096b9fd00',
      'b2abf2d8-e1d1-4503-b822-98df82a87c00',
      'f1babd8d-7612-4504-d53f-8fec0cdb9900',
      '08e57a49-abcf-4615-4fdd-78b15cd72a00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Anti-theft zipper' },
      { label: 'Cross packing straps' },
      { label: 'Impact resistant' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Charcoal',
        colorHex: '#3D3D3D',
        sizes: [
          { size: 'Cabin', price: 2749, stock: 50, sku: '8906206840292' },
          { size: 'Medium', price: 3099, stock: 40, sku: '8906206840308' },
          { size: 'Large', price: 3449, stock: 30, sku: '8906206840315' },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        sizes: [
          { size: 'Cabin', price: 2749, stock: 50, sku: '8906206840346' },
          { size: 'Medium', price: 3099, stock: 40, sku: '8906206840339' },
          { size: 'Large', price: 3449, stock: 30, sku: '8906206840322' },
        ],
      },
      {
        color: 'Midnight Blue',
        colorHex: '#586483',
        sizes: [
          { size: 'Cabin', price: 2749, stock: 50 },
          { size: 'Medium', price: 3099, stock: 40 },
          { size: 'Large', price: 3449, stock: 30 },
        ],
      },
    ],
  },

  // ── AeroSmart 3-in-1 ────────────────────────────────────────────────────
  {
    id: 'aerosmart-3in1',
    imageFit: 'cover',
    metaTitle: 'AeroSmart 3-in-1 Cabin Trolley with Front Laptop Pocket',
    metaDescription: 'Smart cabin trolley with front laptop access, side quick-access pocket, combination lock, and 360° spinner wheels. Hard-shell protection for business travel.',
    keywords: ['cabin trolley with laptop compartment', 'front opening cabin luggage', 'hard shell carry-on suitcase', 'combination lock trolley bag', '360 spinner wheel cabin bag'],
    name: 'AeroSmart 3-in-1',
    slug: 'aerosmart-3in1',
    category: 'trolley',
    tag: 'Flagship',
    isFeatured: true,
    saleExclusive: true,
    mrp: 9990,
    description:
      'Our most innovative design, front laptop pocket, side multipurpose pocket, and main cabin. Three-way access so you never dig through your bag at security again.',
    story: [
      'The AeroSmart began as an observation from our own trips: travellers do not unpack at security. They excavate. So we gave this cabin bag three separate doors. A front pocket holds your laptop and documents, a side pocket takes the things you reach for mid-journey, and the main compartment stays packed, zipped, and untouched until you arrive.',
      'The shell is moulded from polycarbonate and ABS: light enough to lift into an overhead bin one-handed, rigid enough to shrug off a season of conveyor belts. Inside, cross-compression straps and zipped dividers hold everything exactly where you packed it.',
    ],
    highlights: [
      {
        heading: 'Three doors, one bag',
        body: 'Laptop through the front, essentials through the side, clothes through the main compartment. Each opens independently, so a security check or a boarding-gate coffee never means opening your whole suitcase on the floor.',
      },
      {
        heading: 'Built to be handled badly',
        body: 'A polycarbonate and ABS shell with reinforced corners takes the impacts so your things don’t have to. A combination lock keeps the main cabin sealed between check-ins.',
      },
      {
        heading: 'Moves the way you do',
        body: '360° spinner wheels and a multi-stage telescopic handle keep the AeroSmart gliding beside you through airports, railway platforms, and hotel corridors.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Polycarbonate + ABS' },
      { label: 'Cabin (20″)',  value: '57.5 × 38 × 26 cm · approx. 3.5 kg' },
      { label: 'Access',       value: 'Front laptop pocket · side pocket · main compartment' },
      { label: 'Lock',         value: '3-digit combination lock' },
      { label: 'Wheels',       value: '360° spinner wheels' },
      { label: 'Handle',       value: 'Multi-stage telescopic' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Will the cabin size be accepted on board?',
        a: 'It is sized for standard cabin allowances on most domestic and international carriers. If your airline enforces strict gauge checks, compare the dimensions above with its published limits before you fly.',
      },
      {
        q: 'How do I set the combination lock?',
        a: 'The lock ships set to 0-0-0. Press the reset pin, dial in your own code, and release. Full instructions are in the box. If you ever forget the code, our support team can walk you through recovery.',
      },
    ],
    images: [
      // '91562a63-93b2-4c22-7aab-51d0d8fae000',
      // 'cce20161-5cb9-44aa-8c29-3a1251e92d00',
      // '970f581f-8413-4d14-fc3a-def99eff9e00',
      'd1ce7992-2e80-4459-6dea-c96c82a36800',
      '5dec047a-a87f-48d3-5ea4-29abd19cab00',
      'f5e08ff5-f9ff-4315-ccf0-0957d5437500',
    ],
    features: [
      { label: '3-in-1 compartments' },
      { label: '360° spinner wheels' },
      { label: 'Hard shell ABS' },
      { label: 'Telescopic handle' },
      { label: 'Combination lock' },
      { label: 'Carry-on approved' },
      { label: 'Cross packing straps' },
    ],
    variants: [
      {
        color: 'White',
        colorHex: '#6F4E37', // brown zippers/accent
        bodyHex: '#F7F5F0',  // white shell
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // '0f4b7b11-dd2d-4d8f-c502-58ea01177400',
          // '9bac92e3-74a8-42ef-d579-d01830e80a00',
          'd1ce7992-2e80-4459-6dea-c96c82a36800',
          '9eff1fe4-2561-496d-5734-2546f9ceb200',
          '9aac96ca-d8a7-4f2c-6653-9a2d88ce4a00',
          '3ad12034-30af-463a-a13f-8a9b0cf02800',
          '7da251d0-330a-481b-5eda-f0638dc4e400',
          'abe43a32-a61c-4970-4294-7d344888fe00',
          'afc1d4d5-338a-42b5-890b-aff8e3c3bd00',
        ],
        sizes: [
          { size: 'Cabin', price: 4450, stock: 30 },
        ],
      },
      {
        color: 'Charcoal Grey',
        colorHex: '#A6B21A',
        bodyHex: '#4A4945',
        lowStock: true,
        images: [
          // '91562a63-93b2-4c22-7aab-51d0d8fae000',
          // 'cce20161-5cb9-44aa-8c29-3a1251e92d00',
          '970f581f-8413-4d14-fc3a-def99eff9e00',
          'b68fe362-f1e5-4d94-8e75-c3fe3c208800',
          'dab5cd11-d80c-498a-f842-0f58fa656d00',
          'c3350c15-2dab-46ca-047a-1912fd6df800',
          'ca620cb0-e1ef-48b0-1ddd-f37d55dccb00',
        ],
        sizes: [
          { size: 'Cabin', price: 4450, stock: 25, sku: '8906206840001-Y-20' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#C0392B',
        bodyHex: '#3E3E3E',
        images: [
          // '70440d78-95e1-4475-c1a4-cdcbfc291000',
          '5dec047a-a87f-48d3-5ea4-29abd19cab00',
          'b9dc5c11-9997-4ed1-8cbf-156fc8b8cf00',
          'b8b0c4f9-6b7f-457f-3b62-49fd4001c200',
          '2fb08478-b2b5-465a-9735-9105604e5f00',
          '0283bd8e-a5b2-411d-d370-a43838629500',
        ],
        sizes: [
          { size: 'Cabin', price: 4450, stock: 40, sku: '8906206840001-R-20' },
        ],
      },
      {
        color: 'Silver',
        colorHex: '#3A5F97',
        bodyHex: '#BDBDB6',
        lowStock: true,
        images: [
          // 'f5e08ff5-f9ff-4315-ccf0-0957d5437500',
          '2cdb284d-9af8-4d6c-f0ea-73bf4bf9e500',
          '797a8d85-c2a9-49a8-15c8-4a633d2aa700',
          '54d5dd26-87a5-4ebe-3792-95af17bf2800',
          'a5f3728c-0a8d-472e-3141-02b571377c00',
        ],
        sizes: [
          { size: 'Cabin', price: 4450, stock: 35, sku: '8906206840001-T-20' },
        ],
      },

    ],
  },

  // ── Edge16 ───────────────────────────────────────────────────────────────
  {
    id: 'edge16',
    metaTitle: 'Louis Polo Edge16 Hard-Shell Spinner Suitcase — 16-inch',
    metaDescription: 'A compact 16-inch hard-shell spinner suitcase with a staggered ribbed shell, 360° wheels, and a combination lock, built for quick trips.',
    keywords: ['16 inch cabin suitcase', 'compact hard shell suitcase', 'small spinner suitcase', 'combination lock trolley bag', 'lightweight travel case'],
    name: 'Edge16',
    slug: 'edge16',
    category: 'trolley',
    isFeatured: true,
    hideSizeGuide: true,
    description:
      'A compact hard-shell spinner suitcase with a staggered ribbed shell, sized for quick overnight trips. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice whenever you are packing light.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, staggered ribbed finish' },
      { label: 'Size (16″)', value: 'Compact cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '74345c2c-f998-4a4b-7340-c166a761bb00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight, compact build' },
    ],
    variants: [
      {
        color: 'Silver',
        colorHex: '#E08423',
        bodyHex: '#B0B4B8',
        accentColor: 'Orange zip',
        sizes: [
          { size: '16 Inch', price: 2599, stock: 30 },
        ],
      },
    ],
  },

  // ── GripTrunk ────────────────────────────────────────────────────────────
  {
    id: 'griptrunk',
    metaTitle: 'Louis Polo GripTrunk Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a reinforced side grip handle, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'hard shell spinner suitcase', 'side grip handle luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'GripTrunk',
    slug: 'griptrunk',
    category: 'trolley',
    isFeatured: true,
    mrp: 7549,
    description:
      'A hard-shell spinner suitcase sized for the cabin, with a reinforced side grip handle for lifting into overhead bins. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, ribbed finish' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle + reinforced side grip' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '5418ffdf-afa1-456e-690a-aaeb1f147b00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Reinforced side grip handle' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Crimson Red',
        colorHex: '#C62828',
        sizes: [
          { size: 'Cabin', price: 3460, stock: 30 },
        ],
      },
    ],
  },

  // ── Ridge20 ──────────────────────────────────────────────────────────────
  {
    id: 'ridge20',
    metaTitle: 'Louis Polo Ridge20 Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a ribbed shell, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'hard shell spinner suitcase', 'ribbed shell luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'Ridge20',
    slug: 'ridge20',
    category: 'trolley',
    isFeatured: true,
    description:
      'A ribbed hard-shell spinner suitcase sized for the cabin. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, ribbed finish' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '3358f3b8-1304-4617-c99c-23bc85a8e800',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Amber Orange',
        colorHex: '#E08423',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── AeroPop ──────────────────────────────────────────────────────────────
  {
    id: 'aeropop',
    metaTitle: 'AeroPop Hard-Shell Spinner Trolley — 20-inch Cabin Luggage',
    metaDescription: 'A colour-blocked 20-inch hard-shell spinner trolley with 360° wheels and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin trolley', 'hard shell spinner suitcase', 'colour block luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'AeroPop',
    slug: 'aeropop',
    category: 'trolley',
    isFeatured: true,
    description:
      'A colour-blocked hard-shell spinner trolley sized for the cabin. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'c60a22e0-ca0b-434a-05db-42e14b160e00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Citrine Blue',
        colorHex: '#F2C230',
        bodyHex: '#1B39B4',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── Pulse ────────────────────────────────────────────────────────────────
  {
    id: 'pulse',
    imageFit: 'cover',
    metaTitle: 'Pulse 20" Hard-Shell Spinner Suitcase with TSA Lock',
    metaDescription: 'Pulse pairs a ribbed hard-shell 20" cabin suitcase in electric lime with a TSA-approved combination lock, 360° eight-wheel spinners, and a telescopic handle.',
    keywords: ['hard shell spinner suitcase', 'tsa lock cabin trolley', '20 inch spinner suitcase', 'lime green suitcase', 'carry on hard shell luggage'],
    name: 'Pulse',
    slug: 'pulse',
    category: 'trolley',
    description:
      'Pulse is a hard-shell 20" cabin suitcase built to be spotted at baggage claim before it hits the belt. A ribbed, concentric-embossed shell in electric lime carries a TSA-approved combination lock and eight silent spinner wheels that glide instead of drag.',
    story: [
      'Pulse takes its name from the shell: a ribbed, concentric pattern radiating outward, moulded into a hard case built for the actual job of a cabin trolley — the overhead bin, the jet bridge, the gate agent’s trolley scale.',
      'Eight double-spinner wheels roll 360° in every direction, so Pulse tracks straight through a terminal instead of pulling to one side. A TSA-approved combination lock and telescopic handle round out a case sized to clear carry-on limits without giving up room.',
    ],
    highlights: [
      {
        heading: 'A shell that stands out',
        body: 'The ribbed, concentric-embossed hard shell in electric lime is built to spot across a terminal, and tough enough for the sprint to the gate.',
      },
      {
        heading: 'Eight wheels, one straight line',
        body: 'Double spinner wheels at each corner roll 360°, so Pulse tracks wherever you point it instead of dragging to one side.',
      },
      {
        heading: 'Security-ready, always',
        body: 'A TSA-approved combination lock keeps the case closed through checkpoints without slowing down a security check.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Ribbed hard shell (ABS/PC)' },
      { label: 'Cabin (20″)', value: 'Carry-on approved' },
      { label: 'Lock',       value: 'TSA-approved 3-digit combination lock' },
      { label: 'Wheels',     value: '360° eight-wheel silent spinners' },
      { label: 'Handle',     value: 'Telescopic pull handle + side carry handle' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['20f08b86-4e0f-446b-95bc-c7f9fc98ac00'],
    features: [
      { label: '360° eight-wheel silent spinners' },
      { label: 'TSA combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Ribbed hard-shell construction' },
      { label: 'Side carry handle' },
      { label: 'Carry-on approved' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Lime Green',
        colorHex: '#A6CE39',
        images: ['20f08b86-4e0f-446b-95bc-c7f9fc98ac00'],
        sizes: [
          { size: 'Cabin', price: 2990, stock: 30 },
        ],
      },
    ],
  },

  // ── AeroSmart Pro ────────────────────────────────────────────────────────
  {
    id: 'aerosmart-pro',
    imageFit: 'cover',
    metaTitle: 'AeroSmart Pro Cabin Trolley with Attached Companion Case',
    metaDescription: 'The premium AeroSmart, a ribbed metal-finish shell with leather-trimmed accents and a detachable companion case, combination lock, and 360° spinner wheels.',
    keywords: ['premium cabin trolley', 'leather trim hard shell suitcase', 'trolley with detachable case', 'combination lock trolley bag', '360 spinner wheel cabin bag'],
    name: 'AeroSmart Pro',
    slug: 'aerosmart-pro',
    category: 'trolley',
    tag: 'Flagship',
    isFeatured: true,
    mrp: 12990,
    description:
      'The most premium case in the AeroSmart line. A ribbed metal-finish shell with leather-trimmed edges, paired with a detachable companion case for the things you want closest at hand.',
    story: [
      'AeroSmart Pro takes the line\'s three-way access idea and finishes it in materials built for the front of the queue: a brushed metallic shell with genuine leather trim at every edge, and a detachable companion case that clips on for the walk through the terminal and off again at the hotel.',
      'Underneath the finish it runs on the same fundamentals as every AeroSmart: a polycarbonate and ABS shell, cross-compression straps, an integrated combination lock, and 360° spinner wheels.',
    ],
    highlights: [
      {
        heading: 'A companion case, not an afterthought',
        body: 'The detachable case clips to the main shell for transit and comes free for the plane, the meeting, or the hotel gym.',
      },
      {
        heading: 'Leather where it is felt',
        body: 'Leather-trimmed edges and a leather top handle bring a tactile finish to a hard-shell case, without giving up any of the protection.',
      },
      {
        heading: 'Built to be handled badly',
        body: 'A polycarbonate and ABS shell with reinforced corners takes the impacts so your things don\'t have to. A combination lock keeps the main cabin sealed between check-ins.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Polycarbonate + ABS, ribbed metallic finish' },
      { label: 'Cabin (20″)',  value: '57.5 × 38 × 26 cm · approx. 3.6 kg' },
      { label: 'Trim',         value: 'Leather-trimmed edges and top handle' },
      { label: 'Companion',    value: 'Detachable companion case' },
      { label: 'Lock',         value: '3-digit combination lock' },
      { label: 'Wheels',       value: '360° spinner wheels' },
      { label: 'Handle',       value: 'Multi-stage telescopic' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'd886cfeb-32a7-4449-9c6c-f3c6072b4e00',
    ],
    features: [
      { label: 'Detachable companion case' },
      { label: 'Leather-trimmed edges' },
      { label: '360° spinner wheels' },
      { label: 'Hard shell ABS' },
      { label: 'Multi-stage telescopic handle' },
      { label: 'Combination lock' },
      { label: 'Cross packing straps' },
    ],
    variants: [
      {
        color: 'Silver',
        colorHex: '#B0B4B8',
        accentColor: 'Tan leather trim',
        sizes: [
          { size: 'Cabin', price: 8990, stock: 25 },
        ],
      },
    ],
  },

  // ── AeroSmart Gloss ──────────────────────────────────────────────────────
  {
    id: 'aerosmart-gloss',
    imageFit: 'cover',
    metaTitle: 'AeroSmart Gloss Cabin Trolley with Attached Companion Case',
    metaDescription: 'A glossy polycarbonate ribbed shell trolley with a detachable companion case, combination lock, and 360° spinner wheels.',
    keywords: ['glossy hard shell suitcase', 'polycarbonate cabin trolley', 'trolley with detachable case', 'combination lock trolley bag', '360 spinner wheel cabin bag'],
    name: 'AeroSmart Gloss',
    slug: 'aerosmart-gloss',
    category: 'trolley',
    isFeatured: true,
    mrp: 10990,
    description:
      'A high-shine polycarbonate finish on the AeroSmart\'s ribbed shell, paired with a detachable companion case for the things you want closest at hand.',
    story: [
      'AeroSmart Gloss keeps the line\'s three-way access idea and finishes the shell in a mirror-polished polycarbonate that catches the light across any terminal. A detachable companion case clips on for transit and comes free wherever it is needed next.',
      'Underneath the finish it runs on the same fundamentals as every AeroSmart: a polycarbonate and ABS shell, cross-compression straps, an integrated combination lock, and 360° spinner wheels.',
    ],
    highlights: [
      {
        heading: 'A companion case, not an afterthought',
        body: 'The detachable case clips to the main shell for transit and comes free for the plane, the meeting, or the hotel gym.',
      },
      {
        heading: 'A finish that catches the light',
        body: 'The high-gloss polycarbonate shell reads sharp and modern, a clean alternative to the brand\'s matte-finish cases.',
      },
      {
        heading: 'Built to be handled badly',
        body: 'A polycarbonate and ABS shell with reinforced corners takes the impacts so your things don\'t have to. A combination lock keeps the main cabin sealed between check-ins.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Polycarbonate + ABS, high-gloss ribbed finish' },
      { label: 'Cabin (20″)',  value: '57.5 × 38 × 26 cm · approx. 3.5 kg' },
      { label: 'Companion',    value: 'Detachable companion case' },
      { label: 'Lock',         value: '3-digit combination lock' },
      { label: 'Wheels',       value: '360° spinner wheels' },
      { label: 'Handle',       value: 'Multi-stage telescopic' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      // 'ff8154e9-293a-4064-23a6-63e82aad3700',
      'efa83da4-fd4f-457f-1322-6f316dbcd900',
    ],
    features: [
      { label: 'Detachable companion case' },
      { label: 'High-gloss polycarbonate shell' },
      { label: '360° spinner wheels' },
      { label: 'Hard shell ABS' },
      { label: 'Multi-stage telescopic handle' },
      { label: 'Combination lock' },
      { label: 'Cross packing straps' },
    ],
    variants: [
      {
        color: 'Silver',
        colorHex: '#B0B4B8',
        sizes: [
          { size: 'Cabin', price: 6990, stock: 25 },
        ],
      },
    ],
  },

  // ── AeroX ────────────────────────────────────────────────────────────────
  {
    id: 'aerox',
    imageFit: 'cover',
    metaTitle: 'AeroX 20" Cabin Trolley with TSA Lock & Cup Holder',
    metaDescription: 'AeroX pairs a lightweight hard-shell 20" cabin trolley with a TSA-approved combination lock, 360° silent spinner wheels, and a built-in cup holder.',
    keywords: ['cabin trolley bag', 'tsa lock suitcase', 'carry on luggage with cup holder', '20 inch trolley bag', 'hard shell cabin bag india'],
    name: 'AeroX',
    slug: 'aerox',
    category: 'trolley',
    description:
      'Built for the walk from check-in to gate. AeroX is a lightweight hard-shell cabin trolley with a TSA-approved combination lock, silent 360° spinner wheels, and a built-in cup holder for the coffee you didn’t have time to finish.',
    story: [
      'AeroX is sized for the overhead bin and built for the sprint to get there. A lightweight hard shell keeps it light enough to lift without a second thought, while reinforced corners take the knocks a cabin trolley collects between check-in and the jet bridge.',
      'The small details are the point: a TSA-approved combination lock that clears security without a second look, a telescopic handle tuned for one-handed steering, and a cup holder built into the frame, so there’s one less thing to juggle at the gate.',
    ],
    highlights: [
      {
        heading: 'One hand, no hassle',
        body: 'A telescopic handle and 360° silent spinner wheels mean AeroX steers itself through crowded terminals, no wrestling required.',
      },
      {
        heading: 'A cup holder that actually works',
        body: 'Built into the frame, it keeps a coffee or water bottle upright and within reach, so it doesn’t have to ride in your hand through the airport.',
      },
      {
        heading: 'Security-ready, always',
        body: 'A TSA-approved combination lock and anti-theft zippers keep the cabin secure without slowing down a security check.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Lightweight hard shell' },
      { label: 'Cabin (20″)', value: 'Carry-on approved' },
      { label: 'Lock',     value: 'TSA-approved 3-digit combination lock' },
      { label: 'Wheels',   value: '360° silent spinner wheels' },
      { label: 'Extras',   value: 'Integrated cup holder, cross packing straps' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['c37ae5dd-9ab2-4ae3-6748-056327e9b400'],
    features: [
      { label: '360° silent spinner wheels' },
      { label: 'TSA combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Integrated cup holder' },
      { label: 'Anti-theft zipper' },
      { label: 'Cross packing straps' },
      { label: 'Carry-on approved' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Silver',
        colorHex: '#BDBDBD',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'c37ae5dd-9ab2-4ae3-6748-056327e9b400',
          // '8b09e66c-ff43-4536-ca92-aeabf1c48600',
          '94f40aee-bce8-419c-ee78-387e86fd9900',
          '67ed6fe5-32cc-4d7d-bd29-b196ed533100',
          '4f727a22-c567-48b0-24be-de395e71df00',
          '7b1f1555-66b3-49af-1504-6803a549e800',
          '28ab74e0-06b3-4c43-53e6-757518696f00',
          'd1fc39cb-cc88-459c-4749-9fc091c7bc00',
          '54fb6c01-fdd4-442b-6ba3-3d381794c700',
        ],
        sizes: [
          { size: 'Cabin', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#6B6B6B',
        images: [
          '39b848c4-877d-40a6-e34e-6c583a956c00',
        ],
        sizes: [
          { size: 'Cabin', price: 2990, stock: 30 },
        ],
      },
    ],
  },

  // ── VeeZoom ─────────────────────────────────────────────────────────────
  {
    id: 'veezoom',
    imageFit: 'cover',
    metaTitle: 'VeeZoom Bold V-Pattern Hard Shell Spinner Luggage',
    metaDescription: 'Lightweight hard-shell spinner luggage with a moulded V-pattern shell, combination lock, and 360° wheels. Cabin, medium, and large sizes.',
    keywords: ['lightweight cabin spinner luggage', 'hard shell suitcase 20 inch', '360 spinner wheel luggage', 'airline cabin size carry-on', 'abs spinner suitcase'],
    name: 'VeeZoom',
    slug: 'veezoom',
    category: 'trolley',
    isFeatured: true,
    mrp: 9099,
    description:
      'Bold V-pattern design that stands out on every conveyor belt. Hard shell ABS with ultra-smooth spinner wheels, because your luggage should be as ambitious as you are.',
    story: [
      'Most luggage is designed to disappear. VeeZoom is not. The V-pattern is moulded into the shell itself, not printed on it, so it catches the light, identifies your bag from across a carousel, and adds structural stiffness where flat panels flex.',
      'Underneath the geometry it is a serious travel case: a lightweight hard shell over an interior of compression straps and zipped mesh pockets, rolling on 360° spinner wheels that need one finger to steer.',
    ],
    highlights: [
      {
        heading: 'A shell you can spot',
        body: 'The raised V-ribs do double duty: a signature you will never mistake for someone else’s bag, and reinforcement that helps the shell shrug off pressure and impacts.',
      },
      {
        heading: 'Light where it counts',
        body: 'The cabin size weighs roughly 2.7 kg empty, which means more of your airline allowance goes to what you pack, not what you pack it in.',
      },
      {
        heading: 'Smooth through the terminal',
        body: '360° spinner wheels and a telescopic handle carry the load so your arm doesn’t. Airports, platforms, the last stretch of pavement to the hotel.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Hard shell ABS composite' },
      { label: 'Cabin (20″)',  value: '54.6 × 36.8 × 23.5 cm · approx. 2.7 kg · 47.2 L' },
      { label: 'Medium (24″)', value: '65.4 × 45.7 × 27.3 cm · approx. 3.7 kg · 81.6 L' },
      { label: 'Large (28″)',  value: '76.8 × 50.8 × 31.8 cm · approx. 4.2 kg · 123.9 L' },
      { label: 'Lock',         value: '3-digit combination lock' },
      { label: 'Wheels',       value: '360° spinner wheels' },
      { label: 'Handle',       value: 'Telescopic, multi-stage' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Which size do I need?',
        a: 'The cabin handles two to four days, the 24″ covers a week, and the 28″ is built for a fortnight, or for one person packing for two.',
      },
    ],
    images: [
      // 'a546bc30-7f2f-4b64-2c60-afe7c18cd500',
      // 'acbb1811-cbd1-4496-9e85-cad771ad4d00',
      // '2746633d-7f90-44eb-961f-aecc37f59e00',
      '3d8c2c89-dcfc-44ec-b258-5c05a6801900',
      '45538b81-1170-40a2-cbc5-8f0cee2c3200',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
      { label: 'Combination lock' },
      { label: 'Anti-theft zipper' },
      { label: 'Cross packing straps' },
    ],
    variants: [
      {
        color: 'Yellow',
        colorHex: '#FDD835',
        lowStock: true,
        sizes: [
          { size: 'Cabin', price: 2799, stock: 50, sku: '8906206840230' },
          { size: 'Medium', price: 3149, stock: 40, sku: '8906206840247' },
          { size: 'Large', price: 7099, stock: 30, sku: '8906206840254' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        sizes: [
          { size: 'Cabin', price: 2799, stock: 50, sku: '8906206840285' },
          { size: 'Medium', price: 3149, stock: 40, sku: '8906206840278' },
          { size: 'Large', price: 7099, stock: 30, sku: '8906206840261' },
        ],
      },
    ],
  },

  // ── SoftSquare ──────────────────────────────────────────────────────────
  {
    id: 'softsquare',
    imageFit: 'cover',
    metaTitle: 'SoftSquare Hard Shell Trunk Luggage with Combination Lock',
    metaDescription: 'Trunk-style hard-shell luggage with dual-compartment interior, combination lock, and 360° spinner wheels. Cabin to 28″ check-in sizes.',
    keywords: ['hard shell trunk luggage', 'combination lock suitcase', 'trunk style suitcase india', '360 spinner wheel luggage', 'cabin and check-in luggage'],
    name: 'SoftSquare',
    slug: 'softsquare',
    category: 'trolley',
    isFeatured: true,
    mrp: 9490,
    description:
      'Clean geometric lines meet premium ABS protection. SoftSquare is the one for people who travel often and want luggage that looks good on day 50 as it did on day 1.',
    story: [
      'SoftSquare borrows its silhouette from the steamer trunk: squared shoulders, a flat face, and a wide mouth that opens like a wardrobe rather than a clamshell you dig through. It is the shape luggage had before luggage became disposable.',
      'The trunk profile is more than styling. Squared corners pack flatter shirts and stack cleaner in a car boot; the dual-compartment interior, with compression straps on one side and a zipped divider on the other, keeps outbound and return packing from ever meeting.',
    ],
    highlights: [
      {
        heading: 'Trunk-style packing',
        body: 'Two full compartments instead of one deep well. Clothes stay pressed under compression straps; shoes, cables, and toiletries live behind the zipped divider panel.',
      },
      {
        heading: 'Locked as standard',
        body: 'A built-in combination lock closes both compartments at once. No padlock to lose, nothing dangling from a zip.',
      },
      {
        heading: 'Corners that keep their edge',
        body: 'The squared profile is reinforced exactly where trunks take their hits, so the silhouette that looked sharp in the store still looks sharp after fifty flights.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Polycarbonate + ABS' },
      { label: 'Cabin (20″)',  value: '55.9 × 35.6 × 24.1 cm · approx. 2.7 kg · 47.9 L' },
      { label: 'Medium (24″)', value: '64.8 × 40 × 32.4 cm · approx. 3.3 kg · 83.9 L' },
      { label: 'Large (28″)',  value: '76.2 × 46.4 × 35.6 cm · approx. 4 kg · 125.6 L' },
      { label: 'Interior',     value: 'Dual compartment · compression straps · zipped divider' },
      { label: 'Lock',         value: '3-digit combination lock' },
      { label: 'Wheels',       value: '360° spinner wheels' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Will the cabin size be accepted on board?',
        a: 'It is sized for standard cabin allowances on most domestic and international carriers. If your airline enforces strict gauge checks, compare the dimensions above with its published limits before you fly.',
      },
      {
        q: 'How do I set the combination lock?',
        a: 'The lock ships set to 0-0-0. Press the reset pin, dial in your own code, and release. Full instructions are in the box. If you ever forget the code, our support team can walk you through recovery.',
      },
    ],
    images: [
      // '89b97949-0415-4659-15c9-64ab4156a400',
      // 'c9d701b2-8947-4f3b-8877-d745394d0300',
      'd0be3c23-3ba1-4408-bc59-cc34bbd65c00',
      '56b911b3-1fb1-45f6-196c-27e3cf0dc900',
      '3c7f26af-0a00-4469-105e-d5e590b46500',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Anti-theft zipper' },
      { label: 'Impact resistant' },
      { label: 'Dual-compartment interior' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Rosegold',
        colorHex: '#B76E79',
        sizes: [
          { size: 'Cabin', price: 2799, stock: 40, sku: '8906206840353' },
          { size: 'Medium', price: 3149, stock: 30, sku: '8906206840360' },
          { size: 'Large', price: 3449, stock: 25, sku: '8906206840377' },
        ],
      },
      {
        color: 'Blue',
        colorHex: '#1E88E5',
        sizes: [
          { size: 'Cabin', price: 2799, stock: 40, sku: '8906206840407' },
          { size: 'Medium', price: 3149, stock: 30, sku: '8906206840384' },
          { size: 'Large', price: 3449, stock: 25, sku: '8906206840391' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        sizes: [
          { size: 'Cabin', price: 2799, stock: 40, sku: '8906206840414' },
          { size: 'Medium', price: 3149, stock: 30, sku: '8906206840438' },
          { size: 'Large', price: 3449, stock: 25, sku: '8906206840421' },
        ],
      },
    ],
  },

  // ── ProStripe ───────────────────────────────────────────────────────────
  {
    id: 'prostripe',
    metaTitle: 'ProStripe Front-Access Cabin Trolley for Business Travel',
    metaDescription: 'Front-opening 20″ cabin trolley with a dedicated work compartment, combination lock, and 360° spinner wheels. Built for business travel.',
    keywords: ['front access laptop compartment trolley', 'business travel cabin luggage', 'front opening suitcase', 'combination lock cabin trolley', 'carry-on for business travel'],
    name: 'ProStripe',
    slug: 'prostripe',
    category: 'trolley',
    isFeatured: true,
    description:
      'Front-open design for the business traveller who moves fast. Instant access to your laptop, documents, and essentials without opening the main compartment.',
    story: [
      'ProStripe is built around one door most suitcases don’t have. The front panel opens on its own, holding your laptop, documents, and chargers upright and reachable through security, at the gate, and in the taxi, while the main compartment behind it stays packed and locked.',
      'The rest is quietly conventional in the best way: a hard shell with a fine stripe finish, compression straps inside, a combination lock, and 360° spinner wheels that treat a terminal floor like ice.',
    ],
    highlights: [
      {
        heading: 'Work from the front pocket',
        body: 'Laptop out and back in without laying the case flat. Security trays, boarding-gate emails, and hotel check-ins all happen from the front door, standing up.',
      },
      {
        heading: 'Dressed for the meeting',
        body: 'The pinstripe texture reads more tailoring than travel gear, a case that can follow you from the carousel straight into a client’s office.',
      },
      {
        heading: 'Locked, both doors',
        body: 'The combination lock secures the case so a hotel-lobby minute or a train luggage rack never feels like a gamble.',
      },
    ],
    specs: [
      { label: 'Shell',       value: 'Polycarbonate + ABS' },
      { label: 'Cabin (20″)', value: '55.9 × 36.8 × 27.3 cm · approx. 3.8 kg · 56.2 L' },
      { label: 'Access',      value: 'Front-opening work compartment + main compartment' },
      { label: 'Lock',        value: '3-digit combination lock' },
      { label: 'Wheels',      value: '360° spinner wheels' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'What fits in the front compartment?',
        a: 'A laptop, a tablet or notebook, documents, and chargers: the things you reach for between departure and arrival. Clothing and everything else travels in the main compartment behind it.',
      },
    ],
    images: [
      // '532c64d2-a645-483a-c4c6-4c8355ee3900',
      // 'beab3f89-3f3a-45f0-39c8-28bad5f52500',
      'edbf88ca-e887-4b1d-fff9-d4a20653f300',
      '5503751e-09f3-4712-6ab6-ef7981273600',
    ],
    features: [
      { label: 'Front open design' },
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Anti-theft zipper' },
      { label: 'Carry-on approved' },
      { label: 'Cross packing straps' },
    ],
    variants: [
      {
        color: 'Black',
        colorHex: '#212121',
        sizes: [
          { size: 'Cabin', price: 3749, stock: 20, sku: '8906206840117' },
        ],
      },
    ],
  },

  // ── Champ ────────────────────────────────────────────────────────────────
  {
    id: 'champ',
    metaTitle: 'Champ 20″ Lightweight Cabin Trolley',
    metaDescription: 'A light polypropylene 20″ cabin trolley with 360° spinner wheels and organised packing. The dependable everyday carry-on.',
    keywords: ['lightweight cabin trolley', 'polypropylene suitcase', 'airline approved cabin size trolley', 'everyday carry-on luggage', 'hard shell cabin bag'],
    name: 'Champ',
    slug: 'champ',
    category: 'trolley',
    isFeatured: true,
    description:
      'A no-nonsense cabin trolley: hard polypropylene shell, smooth spinner wheels, honest weight. Champ covers the short trips that make up most of real travel, reliably and without fuss.',
    story: [
      'Not every trip needs a statement. Champ is the cabin bag for the Friday-evening flight, the overnight train, the two-day work trip: a tough polypropylene shell at an honest weight, with nothing on it that can break off or wear out.',
      'Inside there are zipped dividers and compression straps; underneath, four 360° spinner wheels. It does the job, keeps doing it, and asks nothing in return.',
    ],
    highlights: [
      {
        heading: 'The workhorse weight',
        body: 'At roughly 2.6 kg empty, Champ leaves nearly all of a 7 kg cabin allowance for what you actually pack.',
      },
      {
        heading: 'Polypropylene, deliberately',
        body: 'PP shells flex on impact and spring back rather than crack, the right material for a bag that will be thrown into more boots and racks than bins.',
      },
    ],
    specs: [
      { label: 'Shell',       value: 'Polypropylene' },
      { label: 'Cabin (20″)', value: '57.5 × 37 × 22 cm · approx. 2.6 kg' },
      { label: 'Lock',        value: '3-digit combination lock' },
      { label: 'Wheels',      value: '360° spinner wheels' },
      { label: 'Handle',      value: 'Telescopic, multi-stage' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      // 'f14c65cb-42c9-4a16-f53e-72b9d334d000',
      'daa285c7-588a-4af9-bb72-6a6a39656c00',
      '36351ce5-e009-4f94-0847-b4cd6ed3fd00',
    ],
    features: [
      { label: 'Hard shell construction' },
      { label: '360° spinner wheels' },
      { label: 'Telescopic handle' },
      { label: 'Lightweight polypropylene' },
      { label: 'Combination lock' },
      { label: 'Carry-on approved' },
    ],
    variants: [
      {
        color: 'Turquoise',
        colorHex: '#40E0D0',
        sizes: [
          { size: 'Cabin', price: 2200, stock: 1000, sku: 'PLACEHOLDER_SKU' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#1A1714',
        sizes: [
          { size: 'Cabin', price: 2200, stock: 1000, sku: 'PLACEHOLDER_SKU' },
        ],
      },
    ],
  },

  // ── ProStripe Cyber ──────────────────────────────────────────────────────
  {
    id: 'prostripe-cyber',
    metaTitle: 'ProStripe Cyber 20″ Geometric Hard Shell Trolley',
    metaDescription: 'A 20″ hard-shell trolley with a geometric front panel and striped lower detailing, 360° spinner wheels, combination lock, and a front utility compartment.',
    keywords: ['geometric hard shell suitcase', '20 inch trolley bag', 'front utility pocket trolley', 'combination lock cabin luggage', 'futuristic design suitcase'],
    name: 'ProStripe Cyber',
    slug: 'prostripe-cyber',
    category: 'trolley',
    isFeatured: true,
    mrp: 11279,
    description:
      'A geometric front panel and striped lower detailing give ProStripe Cyber a clean, futuristic edge, built on the same hard-shell protection and 360° spinner wheels as the rest of the range.',
    story: [
      'ProStripe Cyber starts from the shell outward: a geometric panel across the front face and a striped lower band, a silhouette that reads modern from across a terminal without shouting for attention. It carries the same fundamentals as every case in the line underneath the finish.',
      'A front utility compartment keeps small essentials within reach without opening the main case, while a combination lock and 360° spinner wheels handle the rest of the trip.',
    ],
    highlights: [
      {
        heading: 'A shell with a silhouette',
        body: 'The geometric front panel and striped lower band are moulded into the shell itself, a finish that stays sharp through years of overhead bins, not a print that wears off.',
      },
      {
        heading: 'One more pocket, up front',
        body: 'The front utility compartment holds the small things, a boarding pass, a phone, a passport, without needing to open the main case at security or the gate.',
      },
    ],
    specs: [
      { label: 'Shell',   value: 'Polycarbonate + ABS' },
      { label: 'Size',    value: '20″ · front utility compartment' },
      { label: 'Lock',    value: '3-digit combination lock' },
      { label: 'Wheels',  value: '360° spinner wheels' },
      { label: 'Handle',  value: 'Telescopic' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    // Hosted on a separate Cloudinary account (deh394y0h) — the primary
    // account's credit limit is exhausted. Full URLs work here exactly like
    // bare public_ids elsewhere; cld() in lib/cloudinary.ts already handles
    // any cloud name via its full-URL transform-injection path.
    images: [
      // Kept as the lead shot — the shop grid card crops to 3:4, and this is
      // the only one of the set actually cropped tight to fill that frame;
      // the rest below are square and would show letterboxed as a thumbnail.
      '1ec02d48-3239-402d-33d1-1a401476b100',
      '94dd4f3e-e3af-47fe-e4e6-402af94dc600',
      '04c2d274-849f-4203-324d-5cb2a02d5200',
      '19e53c9b-80be-4776-f434-e873d3ad2a00',
      '1c47ad60-2c1a-4c09-80be-6aa0b0670f00',
      '5aa06941-5299-4a48-09c2-1d8f42b08c00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Front utility compartment' },
      { label: 'Geometric hard shell design' },
      { label: 'Wear resistant' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Silver',
        colorHex: '#B0B4B8',
        sizes: [
          { size: 'Cabin', price: 5190, stock: 25 },
        ],
      },
    ],
  },

  // ── DiamondLux ───────────────────────────────────────────────────────────
  {
    id: 'diamondlux',
    metaTitle: 'DiamondLux Quilted Hard Shell Spinner Suitcase',
    metaDescription: 'DiamondLux pairs a quilted diamond-pattern hard shell with metallic accents, 360° spinner wheels, and a combination lock. Cabin, Medium, and Large, sold individually or as a set.',
    keywords: ['quilted hard shell suitcase', 'diamond pattern luggage', 'premium spinner suitcase', 'luggage set of 3', 'combination lock trolley bag'],
    name: 'DiamondLux',
    slug: 'diamondlux',
    category: 'trolley',
    isFeatured: true,
    description:
      'Luxury-inspired styling with dependable travel performance. DiamondLux pairs a quilted diamond shell and metallic accents with 360° spinner wheels and a combination lock, for business travellers and modern explorers who want sophistication and durability in one case.',
    story: [
      'DiamondLux starts with the shell: a diamond-quilted surface finished with metallic accents, a silhouette built for travellers who notice detail. Cabin, Medium, and Large are each sold on their own, or together as a matched set, so a business trip, a weekend away, and a fortnight abroad all draw from the same wardrobe of luggage.',
      'Underneath the finish, it works like every case in the range: four dual-spinner wheels, a precision telescopic handle, reinforced corners, an integrated combination lock, and an anti-theft zipper, so the polish never comes at the cost of protection.',
    ],
    highlights: [
      {
        heading: 'Luxury-inspired design',
        body: 'A diamond-quilted shell, premium metallic accents, and refined proportions give DiamondLux a finish that reads considered rather than loud.',
      },
      {
        heading: 'Effortless, every journey',
        body: 'Four dual-spinner wheels and a precision telescopic handle keep the case gliding through terminals no matter which size is doing the travelling.',
      },
      {
        heading: 'Travel, protected',
        body: 'A durable hard shell, reinforced corners, and an integrated combination lock take the knocks of the belt and the boot, so the quilting stays sharp trip after trip.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS, quilted diamond finish' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″), sold individually or as a set' },
      { label: 'Lock',     value: 'Combination lock' },
      { label: 'Wheels',   value: '4 dual-spinner 360° wheels' },
      { label: 'Handle',   value: 'Telescopic handle' },
      { label: 'Interior', value: 'Fabric lining' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['81dfb62c-c97a-4318-5225-9a8348f8a000'],
    features: [
      { label: 'Smooth rolling spinner wheels' },
      { label: 'Strong bearing capacity' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Comfortable fabric lining' },
      { label: 'Lightweight build' },
      { label: 'Impact resistant' },
      { label: 'Anti-theft zipper' },
    ],
    variants: [
      {
        color: 'Bold White',
        colorHex: '#F5F3EC',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'c319e66f-b873-43f4-182b-e42f28195100',
          // 'd8c8d4ca-72d4-4e8e-5472-69750f93ae00',
          '81dfb62c-c97a-4318-5225-9a8348f8a000',
          '75d1a61d-78a9-49da-94a3-37eeb31da400',
          '8ab788d9-c71b-41b9-fc57-8e4b95559a00',
          'a2c0f7e8-56ff-4508-d581-7331f5110d00',
        ],
        sizes: [
          { size: 'Cabin',    price: 2990,  stock: 25 },
          { size: 'Medium',   price: 3499,  stock: 20 },
          { size: 'Large',    price: 4299,  stock: 20 },
        ],
      },
      {
        color: 'Zen Gray',
        colorHex: '#8A8D91',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          '047466f3-0a38-45a0-a35b-bb2306684100',
          'd67b261f-dbf9-4165-e732-644a61ae8400',
          '9277da41-9455-40e6-4492-21fcd1a4f900',
        ],
        sizes: [
          { size: 'Cabin',    price: 2990,  stock: 25 },
          { size: 'Medium',   price: 3499,  stock: 20 },
          { size: 'Large',    price: 4299,  stock: 20 },
        ],
      },
    ],
  },

  // ── StrataLux ────────────────────────────────────────────────────────────
  {
    id: 'stratalux',
    imageFit: 'cover',
    metaTitle: 'StrataLux Hard Shell Spinner Luggage',
    metaDescription: 'StrataLux pairs a vertically ribbed hard shell with leather-look accents and metallic corner details, on 360° silent spinner wheels. Cabin, Medium, and Large, sold individually or as a set.',
    keywords: ['hard shell spinner luggage', 'ribbed shell suitcase', 'premium luggage india', 'luggage set of 3', 'combination lock trolley bag'],
    name: 'StrataLux',
    slug: 'stratalux',
    category: 'trolley',
    isFeatured: true,
    description:
      'Refined structure, built for the whole trip. StrataLux pairs a vertically ribbed hard shell with leather-look accent bands and metallic corner details, on 360° silent spinner wheels and a combination lock, for travellers who want their luggage to look as considered as the trip itself.',
    story: [
      'StrataLux starts with the shell: clean vertical ribbing finished with leather-look accent bands and metallic corner details, a silhouette built for travellers who notice the details. Cabin, Medium, and Large are each sold on their own, or together as a matched set, so a business trip, a weekend away, and a fortnight abroad all draw from the same wardrobe of luggage.',
      'Underneath the finish, it works like every case in the range: four dual-spinner wheels, a precision telescopic handle, reinforced corners, an integrated combination lock, and an anti-theft zipper, so the polish never comes at the cost of protection.',
    ],
    highlights: [
      {
        heading: 'Structured, considered design',
        body: 'Vertical ribbing, leather-look accent bands, and metallic corner details give StrataLux a finish that reads deliberate rather than loud.',
      },
      {
        heading: 'Effortless, every journey',
        body: 'Four dual-spinner wheels and a precision telescopic handle keep the case gliding through terminals no matter which size is doing the travelling.',
      },
      {
        heading: 'Travel, protected',
        body: 'A durable hard shell, reinforced corners, and an integrated combination lock take the knocks of the belt and the boot, so the finish stays sharp trip after trip.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Hard shell, vertical ribbing with leather-look accents' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″), sold individually or as a set' },
      { label: 'Lock',     value: 'Combination lock' },
      { label: 'Wheels',   value: '4 dual-spinner 360° silent wheels' },
      { label: 'Handle',   value: 'Telescopic handle' },
      { label: 'Interior', value: 'Comfortable fabric lining' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['b3231914-8363-41d9-bf8b-a126a7e40800'],
    features: [
      { label: '360° silent spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Comfortable fabric lining' },
      { label: 'Lightweight build' },
      { label: 'Impact resistant' },
      { label: 'Anti-theft zipper' },
      { label: 'Metallic corner accents' },
    ],
    variants: [
      {
        color: 'Royal Teal',
        colorHex: '#0E6B6B',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'c2cb6254-efef-4044-4848-636e2adaeb00',
          // '0cd7a434-6f5e-4109-9e4f-68c6cb868a00',
          'b3231914-8363-41d9-bf8b-a126a7e40800',
          '11656b9a-b790-43e6-fa42-ca6d7142bf00',
        ],
        sizes: [
          { size: 'Cabin',    price: 3500, stock: 25 },
          { size: 'Medium',   price: 4500, stock: 20 },
          { size: 'Large',    price: 7500, stock: 20 },
        ],
      },
      {
        color: 'Ivory',
        colorHex: '#F0EAD6',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'c3d07c68-babc-421d-4e51-6e905f91c100',
          'f3ddc941-cb1b-4073-0cf6-0e1055317900',
        ],
        sizes: [
          { size: 'Cabin',    price: 3500, stock: 25 },
          { size: 'Medium',   price: 4500, stock: 20 },
          { size: 'Large',    price: 7500, stock: 20 },
        ],
      },
      {
        color: 'Rose Gold',
        colorHex: '#B76E79',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'c0677602-1f28-464c-9227-6984065a1800',
          'e6d1d605-3c9e-4b90-7be9-6a05bd8ba100',
        ],
        sizes: [
          { size: 'Cabin',    price: 3500, stock: 25 },
          { size: 'Medium',   price: 4500, stock: 20 },
          { size: 'Large',    price: 7500, stock: 20 },
        ],
      },
    ],
  },

  // ── Magma ────────────────────────────────────────────────────────────────
  {
    id: 'magma',
    metaTitle: 'Magma 20″ Cabin Trolley with Secure Combination Lock',
    metaDescription: 'Ripple-textured polypropylene cabin trolley with a built-in combination lock, 360° double-spinner wheels, and a light, easy-lift build.',
    keywords: ['secure lock cabin luggage', 'polypropylene hard shell suitcase', '360 spinner wheel trolley', 'lightweight carry-on luggage', 'textured shell suitcase'],
    name: 'Magma',
    slug: 'magma',
    category: 'trolley',
    isFeatured: true,
    description:
      'A ripple-textured hard shell cabin trolley with a combination lock as standard. Light to lift, easy to steer, and secure enough to leave your eyes off it for a minute.',
    story: [
      'Magma’s shell carries a moulded ripple across its face, a pattern borrowed from flowing rock that stiffens the panel the way corrugation stiffens steel. It looks sculptural; it works structural.',
      'The case itself is a light polypropylene build with a combination lock fitted as standard, organised inside with zipped sections and compression straps, and rolling on 360° double-spinner wheels.',
    ],
    highlights: [
      {
        heading: 'Texture with a job',
        body: 'The ripple isn’t printed, it’s moulded into the shell, adding rigidity against pressure and hiding the scuffs that flat glossy cases collect on their first trip.',
      },
      {
        heading: 'Locked by default',
        body: 'The built-in combination lock means a minute at a café counter or a night on a train rack never has to feel like a risk.',
      },
    ],
    specs: [
      { label: 'Shell',       value: 'Polypropylene, moulded ripple texture' },
      { label: 'Cabin (20″)', value: '57.5 × 37 × 22 cm · approx. 2.6 kg' },
      { label: 'Lock',        value: '3-digit combination lock' },
      { label: 'Wheels',      value: '360° double-spinner wheels' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['8f00eedc-747a-4f86-37ce-caa373873200','3051c79d-1359-4f89-66d2-e446d95a4b00'],
    features: [
      { label: 'Secure combination lock' },
      { label: 'Hard shell construction' },
      { label: '360° spinner wheels' },
      { label: 'Telescopic handle' },
      { label: 'Carry-on approved' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Turquoise',
        colorHex: '#40E0D0',
        sizes: [
          { size: 'Cabin', price: 2200, stock: 10000, sku: 'PLACEHOLDER_SKU' },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#808080',
        sizes: [
          { size: 'Cabin', price: 2200, stock: 10000, sku: 'PLACEHOLDER_SKU' },
        ],
      },
    ],
  },

  // ── ArmorRite ────────────────────────────────────────────────────────────
  {
    id: 'armorrite',
    metaTitle: 'ArmorRite Hard Shell Luggage | TSA Lock | 360° Spinner Travel Suitcase',
    metaDescription: 'Shop the ArmorRite Hard Shell Luggage featuring an armor-inspired design, TSA lock, 360° spinner wheels, lightweight construction, and premium durability for every journey.',
    keywords: ['ArmorRite luggage', 'hard shell suitcase', 'orange trolley bag', 'TSA luggage', 'premium travel luggage', '360 spinner suitcase', 'durable luggage', 'lightweight trolley', 'travel suitcase', 'hard case luggage'],
    name: 'ArmorRite',
    slug: 'armorrite',
    category: 'trolley',
    isFeatured: true,
    description:
      'Built like armor, designed for every journey. ArmorRite is a rugged hard-shell trolley engineered for travellers who want durability without giving up style, in a bold geometric shell with 360° spinner wheels, TSA-approved security, and an ergonomic telescopic handle.',
    story: [
      'ArmorRite takes its cue from tactical armor: a reinforced geometric shell built to take the demands of modern travel while keeping a sleek, premium look. Cabin, Medium, and Large are each sold on their own, or together as a matched set, so every trip from a weekend away to a fortnight abroad is already covered.',
      'Underneath the finish sit the fundamentals done properly: ultra-smooth 360° spinner wheels, a precision telescopic aluminium handle, an integrated TSA combination lock, and premium zip closure, for effortless mobility and reliable security wherever the destination.',
    ],
    highlights: [
      {
        heading: 'Armor-inspired, travel-ready',
        body: 'A reinforced geometric hard shell in a scratch-resistant matte finish takes the knocks of modern travel while still looking sharp off the carousel.',
      },
      {
        heading: 'TSA lock, on every case',
        body: 'An integrated TSA combination lock secures all three sizes, so airport security and hotel storage never feel like a gamble.',
      },
      {
        heading: 'Built to move, not just look tough',
        body: 'Silent 360° spinner wheels and a smooth telescopic aluminium handle keep the set effortless through terminals, not just durable in the hold.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'ABS hard shell, matte textured finish' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″), sold individually or as a set' },
      { label: 'Lock',     value: 'TSA-approved combination lock' },
      { label: 'Wheels',   value: '4 double 360° spinner wheels' },
      { label: 'Handle',   value: 'Telescopic aluminium handle' },
      { label: 'Closure',  value: 'Heavy-duty zip closure' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    // Hosted on a separate Cloudinary account (deh394y0h) — the primary
    // account's credit limit is exhausted.
    images: [
      // '97c1e757-4391-4b32-9741-527e449e8300',
      'db472c90-8b0f-4066-b4d3-2c80ca653900',
      'bf5245a9-9816-4d9c-434c-87b7307bb300',
      '221575ce-07d4-47d1-20cf-70c5df26d300',
      '65e0463f-3965-484a-1414-0708842ef200',
      'c34be8ea-8839-4f3b-b46b-59bc63261100',
      'dbdc3369-d1a8-4983-d01f-50b301711400',
    ],
    features: [
      { label: 'Rugged armor-inspired hard shell' },
      { label: 'Integrated TSA combination lock' },
      { label: '360° silent spinner wheels' },
      { label: 'Scratch-resistant exterior' },
      { label: 'Lightweight yet durable construction' },
      { label: 'Ergonomic carry handles' },
      { label: 'Spacious, organised interior' },
      { label: 'Smooth telescopic aluminium handle' },
      { label: 'Water-resistant hard shell' },
    ],
    variants: [
      {
        color: 'Blaze Orange',
        colorHex: '#FF7900',
        sizes: [
          { size: 'Cabin',   price: 2999,  stock: 25 },
          { size: 'Medium',  price: 3599,  stock: 20 },
          { size: 'Large',   price: 4299,  stock: 20 },
        ],
      },
      {
        color: 'Red',
        colorHex: '#C62828',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'f7d367ba-83d3-4225-7f38-d5ddadad6900',
          '84c2db89-8851-4197-01bc-7ec9b11ef500',
          'b44c42fe-3172-4a44-4591-71085fa4c200',
          '98db5ced-2da8-42e4-6e1d-ea1bba9cee00',
          'f1192e9d-39ba-4462-8152-513ae1580b00',
        ],
        sizes: [
          { size: 'Cabin',   price: 2999,  stock: 25 },
          { size: 'Medium',  price: 3599,  stock: 20 },
          { size: 'Large',   price: 4299,  stock: 20 },
        ],
      },
    ],
  },

  // ── Matrix ───────────────────────────────────────────────────────────────
  {
    id: 'matrix',
    metaTitle: 'Louis Polo Matrix Hard-Shell Spinner Suitcase',
    metaDescription: 'Matrix pairs a moulded quilted-grid hard shell with silent double-spinner wheels and a combination lock. Cabin, Medium, and Large sizes.',
    keywords: ['quilted hard shell suitcase', 'geometric pattern luggage', 'hard shell spinner suitcase', 'luggage set of 3', 'combination lock trolley bag'],
    name: 'Matrix',
    slug: 'matrix',
    category: 'trolley',
    isFeatured: true,
    description:
      'A moulded quilted-grid hard shell built for durability and easy identification on any carousel. Cabin, Medium, and Large are each sold on their own, or together as a matched set.',
    story: [
      'Matrix is built around a moulded geometric grid that does two jobs: it gives the case a recognisable identity, and it stiffens every panel against the pressure of a full baggage hold.',
      'Underneath the finish it runs the full hardware set: silent double-spinner wheels, a combination lock, and an anti-theft zipper whose interlocking teeth resist being forced with a pen.',
    ],
    highlights: [
      {
        heading: 'A grid with a purpose',
        body: 'The geometric surface is moulded, not printed. Every ridge adds rigidity, so the pattern that makes the case recognisable is also what keeps it from flexing under load.',
      },
      {
        heading: 'Security, twice over',
        body: 'A combination lock closes the case; the anti-theft zipper construction resists the puncture trick used on ordinary coils.',
      },
      {
        heading: 'Silent through the terminal',
        body: 'Double-spinner wheels roll quietly and turn in place, so even the largest size steers with two fingers.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS, moulded quilted-grid finish' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″), sold individually or as a set' },
      { label: 'Lock',     value: 'Combination lock + anti-theft zipper' },
      { label: 'Wheels',   value: '360° silent double-spinner wheels' },
      { label: 'Handle',   value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'ed6653a8-7095-4543-7800-cc59cc135200',
    ],
    features: [
      { label: '360° silent spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Impact-resistant hard shell' },
      { label: 'Anti-theft zipper' },
      { label: 'Telescopic handle' },
      { label: 'Moulded quilted-grid finish' },
    ],
    variants: [
      {
        color: 'Amber Orange',
        colorHex: '#E08423',
        sizes: [
          { size: 'Cabin',  price: 2990, stock: 25 },
          { size: 'Medium', price: 3499, stock: 20 },
          { size: 'Large',  price: 4299, stock: 20 },
        ],
      },
    ],
  },

  // ── POPShell ─────────────────────────────────────────────────────────────
  {
    id: 'popshell',
    metaTitle: 'Louis Polo POPShell Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a bold printed graphic front panel, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'printed hard shell suitcase', 'graphic print luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'POPShell',
    slug: 'popshell',
    category: 'trolley',
    isFeatured: true,
    description:
      'A hard-shell spinner suitcase sized for the cabin, finished with a bold printed graphic front panel that stands out on any carousel. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, printed graphic panel' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '3c0ed2b3-53d5-470b-9f6a-2752ad26d800',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Bold printed graphic panel' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Pop Red',
        colorHex: '#D8342A',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── AeroWeave ────────────────────────────────────────────────────────────
  {
    id: 'aeroweave',
    metaTitle: 'Louis Polo AeroWeave Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a ribbed woven-texture shell, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'hard shell spinner suitcase', 'ribbed shell luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'AeroWeave',
    slug: 'aeroweave',
    category: 'trolley',
    isFeatured: true,
    description:
      'A ribbed hard-shell spinner suitcase sized for the cabin. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, ribbed finish' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'd9be184e-613e-4435-87fb-2f6a534f5a00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Blossom Pink',
        colorHex: '#E0568C',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── NexusSpinner ─────────────────────────────────────────────────────────
  {
    id: 'nexusspinner',
    metaTitle: 'Louis Polo NexusSpinner Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a fluted vertical panel shell, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'hard shell spinner suitcase', 'fluted shell luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'NexusSpinner',
    slug: 'nexusspinner',
    category: 'trolley',
    isFeatured: true,
    description:
      'A fluted hard-shell spinner suitcase sized for the cabin. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, fluted panel finish' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'e399155a-496b-4865-81f4-13664c8acd00',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Wine Burgundy',
        colorHex: '#8E1C3E',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── Zephyr ───────────────────────────────────────────────────────────────
  {
    id: 'zephyr',
    metaTitle: 'Louis Polo Zephyr Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a diagonal-line embossed shell, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'hard shell spinner suitcase', 'embossed shell luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'Zephyr',
    slug: 'zephyr',
    category: 'trolley',
    isFeatured: true,
    description:
      'A diagonally embossed hard-shell spinner suitcase sized for the cabin. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, diagonal embossed finish' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '6497fd67-f44a-487f-30cf-07073e36d400',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Mint Green',
        colorHex: '#8FD9C4',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── Aero-V ───────────────────────────────────────────────────────────────
  {
    id: 'aero-v',
    metaTitle: 'Louis Polo Aero-V Hard-Shell Spinner Suitcase — 20-inch',
    metaDescription: 'A 20-inch hard-shell spinner suitcase with a moulded V-pattern shell, 360° wheels, and a combination lock, built for cabin travel.',
    keywords: ['20 inch cabin suitcase', 'hard shell spinner suitcase', 'v pattern shell luggage', 'combination lock trolley bag', 'lightweight cabin luggage'],
    name: 'Aero-V',
    slug: 'aero-v',
    category: 'trolley',
    isFeatured: true,
    description:
      'A hard-shell spinner suitcase sized for the cabin, with a moulded V-pattern shell that catches the light and stiffens every panel. Lightweight ABS construction, 360° spinner wheels, and a combination lock make it an easy, dependable choice for short trips.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, moulded V-pattern finish' },
      { label: 'Size (20″)', value: 'Cabin-friendly dimensions · lightweight build' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '3355307b-7ec0-4a76-ece8-0b0eab114100',
    ],
    features: [
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Rose Gold',
        colorHex: '#D89AA0',
        sizes: [
          { size: 'Cabin', price: 2999, stock: 30 },
        ],
      },
    ],
  },

  // ── The Attaché Overnighter ──────────────────────────────────────────────
  {
    id:          'attache-overnighter',
    metaTitle: 'The Attaché 17″ Overnighter Cabin Trolley',
    metaDescription: 'A 17″ hard-shell overnighter with laptop storage, combination lock, and 360° spinner wheels, sized exactly for one-night business trips.',
    keywords: ['17 inch overnighter trolley', 'business travel carry-on', 'overnighter with laptop storage', 'compact cabin trolley', 'hard shell overnighter'],
    name:        'Attache',
    slug:        'attache-overnighter',
    category:    'overnighter',
    cardZoom:    1.3,
    isFeatured:  true,
    description: 'Built for professionals on the move. Cabin-friendly dimensions with smart organisation: dedicated laptop storage, hard-shell protection, and 360° spinner wheels for effortless overnight business travel.',
    story: [
      'The Attaché is sized for the trip that is really a meeting with a flight around it. Seventeen inches of hard shell holds a laptop, a change of clothes, chargers, and documents, and nothing that would tempt you to pack more than one night needs.',
      'Cross straps keep the shirt pressed, dedicated pockets keep the tech sorted, and a combination lock keeps it all closed. On 360° spinner wheels, it follows you from the taxi to the boardroom without asking to be carried.',
    ],
    highlights: [
      {
        heading: 'The one-night format',
        body: 'Bigger than a briefcase, smaller than a cabin trolley, the Attaché is exactly the size of an overnight business trip, so packing takes five minutes because there is no room to overthink it.',
      },
      {
        heading: 'Office half, wardrobe half',
        body: 'Laptop, documents, and chargers keep their own storage away from the clothing side, so pulling out your notes at the gate never means airing your packing.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Hard shell polypropylene' },
      { label: 'Size (17″)', value: '41 × 41 × 24 cm · approx. 2.4 kg' },
      { label: 'Lock',       value: '3-digit combination lock' },
      { label: 'Wheels',     value: '360° silent spinner wheels' },
      { label: 'Handle',     value: 'Telescopic' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images:      [
      // '0c421c25-1388-4c8a-53b2-31cd936eae00',
      // 'c9c1474d-8c7c-4bfd-84a0-9e2beb99b300',
      '2f030631-195c-4803-a297-c6f157b07000',
      '6b6b0465-9b1a-4817-baa6-a859f69f2800'
    ],
    features: [
      { label: '360° silent spinner wheels' },
      { label: 'Dedicated laptop compartment' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
      { label: 'Carry-on approved' },
    ],
    variants: [
       {
        color:    'Red',
        colorHex: '#C62828',
        sizes: [{ size: '17 Inch', price: 6999, stock: 30 }],
      },
      {
        color:    'Black',
        colorHex: '#212121',
        sizes: [{ size: '17 Inch', price: 6999, stock: 30 }],
      },
     
    ],
  },

  // ── SwiftGate 17" Overnighter Trolley ────────────────────────────────────
  {
    id:          'swiftgate',
    metaTitle: 'SwiftGate 17″ Front-Access Overnighter Trolley',
    metaDescription: 'Front-opening work compartment, anti-theft zipper, combination lock, and silent spinner wheels in a 17″ overnighter for short business trips.',
    keywords: ['front access laptop trolley', '17 inch overnighter', 'business travel trolley', 'anti theft zipper luggage', 'overnight business bag'],
    name:        'SwiftGate',
    slug:        'swiftgate',
    category:    'overnighter',
    description: 'Professional styling meets practical organisation. The SwiftGate features a front-opening compartment for instant access to your laptop, tablet, documents, and chargers, without touching the main compartment. Built for overnight trips and short business travel.',
    story: [
      'SwiftGate is named for the way it opens: a front gate for the working half of your trip (laptop, tablet, documents, chargers) that swings open without touching the packed main compartment behind it. Security lines, gate delays, and hotel lobbies all become places you can work from.',
      'The main compartment behind the gate is a proper overnighter: compression straps, mesh pockets, and room for a night or two of clothes. A combination lock and anti-theft zipper close the case; silent 360° spinners move it.',
    ],
    highlights: [
      {
        heading: 'The front gate',
        body: 'Everything you reach for mid-journey lives in the front-opening compartment, upright and ordered. The suitcase part of the bag stays sealed until the hotel.',
      },
      {
        heading: 'Two locks deep',
        body: 'A combination lock plus anti-theft zipper construction means quick stops and luggage racks don’t require keeping one eye on your bag.',
      },
      {
        heading: 'Sized for the short haul',
        body: 'Seventeen inches covers one to two nights, compact enough for any cabin, complete enough that nothing gets left behind.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Lightweight hard shell' },
      { label: 'Size (17″)', value: '55 × 39 × 22 cm · approx. 3.1 kg' },
      { label: 'Access',     value: 'Front-opening work compartment + main compartment' },
      { label: 'Lock',       value: 'Combination lock + anti-theft zipper' },
      { label: 'Wheels',     value: '360° silent spinner wheels' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    isFeatured:  false,
    images:      [
      // '55a02349-ecaa-4128-be29-4d6c23fa5300',
      '55d2b221-09fb-49e5-2b19-849358b13100','7cc12e6c-b3a5-4f40-304b-11b86b5b4900',],
    features: [
      { label: 'Front-access laptop compartment' },
      { label: '360° silent spinner wheels' },
      { label: 'Combination security lock' },
      { label: 'Anti-theft zipper' },
      { label: 'Telescopic handle' },
      { label: 'Lightweight hard-shell construction' },
      { label: 'Carry-on approved dimensions' },
    ],
    variants: [
      {
        color:    'Blue',
        colorHex: '#1565C0',
        sizes: [{ size: '17 Inch', price: 3490, stock: 30 }],
      },
      {
        color:    'Red',
        colorHex: '#C62828',
        sizes: [{ size: '17 Inch', price: 3490, stock: 30 }],
      },
    ],
  },

  // ── AeroVault ────────────────────────────────────────────────────────────
  {
    id: 'aerovault',
    imageFit: 'cover',
    mrp: 5399,
    demoVideoId: '48b8f7686d12130e84b9de78f34723ab',
    metaTitle: 'AeroVault USB Laptop Travel Backpack',
    metaDescription: 'AeroVault pairs a padded laptop compartment with an external USB charging port, breathable back panel, and luggage mounting sleeve. Built for work, commuting, and travel.',
    keywords: ['usb laptop backpack', 'travel backpack with charging port', 'padded laptop compartment backpack', 'commuter backpack india', 'business travel backpack'],
    name: 'AeroVault Ergonomic Backpack',
    slug: 'aerovault',
    category: 'backpack',
    isFeatured: true,
    hideSizeSelector: true,
    description:
      'Structured design with practical storage for work, commuting, and travel. AeroVault carries a padded laptop section, a spacious main compartment, quick-access pockets, and an external USB charging port, on breathable straps built for the whole day.',
    story: [
      'AeroVault is built around the two things a working day actually needs: a laptop that arrives safe, and a charge that lasts. A dedicated padded rear compartment keeps the laptop separate from everything else in the bag, while an external USB port lets a power bank top up the backpack contents without ever opening it.',
      'The rest is comfort engineering: padded shoulder straps, a breathable mesh back panel, and a sternum strap keep the load stable on a commute or a terminal walk, and a luggage mounting sleeve lets it ride a trolley handle on the days it is not the only bag.',
    ],
    highlights: [
      {
        heading: 'Separate protection for your technology',
        body: 'A dedicated padded rear compartment keeps the laptop away from the knocks and clutter of the main compartment, opening flat for security trays without disturbing the rest of the pack.',
      },
      {
        heading: 'Stay connected while travelling',
        body: 'An external USB port wired to the interior lets a power bank charge a phone on the move, no digging through the main compartment for a cable.',
      },
      {
        heading: 'Stable and comfortable carrying',
        body: 'Padded straps, mesh back cushioning, and a sternum strap keep the weight settled and even, from a morning commute to a full day at the airport.',
      },
    ],
    specs: [
      { label: 'Material',  value: 'Premium water-resistant polyester' },
      { label: 'Laptop bay', value: 'Padded, dedicated compartment' },
      { label: 'Charging',  value: 'External USB port' },
      { label: 'Back panel', value: 'Breathable mesh cushioning' },
      { label: 'Straps',    value: 'Padded, adjustable, with sternum strap' },
      { label: 'Extras',    value: 'Luggage mounting sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['91c5f518-d1ee-4757-f4c3-a27c02d7a600'],
    features: [
      { label: 'Lightweight build' },
      { label: 'Smooth zippers' },
      { label: 'Luggage mounting sleeve' },
      { label: 'Impact resistant' },
      { label: 'External USB charging port' },
      { label: 'Spacious compartments' },
      { label: 'Ergonomic shoulder straps' },
    ],
    variants: [
      {
        color: 'Blue',
        colorHex: '#1E4B8C',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'ca24fd22-9f74-48a8-0746-303b00b57200',
          // '51fd24f1-7e9b-47ad-bb8c-4f7aa6c17000',
          '91c5f518-d1ee-4757-f4c3-a27c02d7a600',
          'ffb6ea27-cb53-4a4d-9d1a-df63f83e2800',
          '17cc8ba4-8012-4f87-3fe8-5b2d218cf800',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // '6ea33c4f-b82e-4894-f322-7f5b49d41700',
          '9ec1ded8-7a3d-4a31-5189-83a00ad8d900',
          '63d690dc-7fce-4b89-0510-73d6252b0f00',
          '76246c0d-eb87-4c93-85de-e8e725980300',
          '4db9fcc9-fcff-47c0-e5e2-2287ca8e6a00',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#6B6B6B',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted. Intentionally the same shots
        // as the Black variant.
        images: [
          // '8b7c927d-4e8d-4bf6-51c4-ed7a7e9f0100',
          'e1484125-65e4-4dcd-b103-67cfd1c8ed00',
          '293576b6-5990-4a58-6a18-db70626a5e00',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
    ],
  },

  // ── Apex ─────────────────────────────────────────────────────────────────
  {
    id: 'apex',
    mrp: 5250,
    demoVideoId: 'ac2c3cbed74ec63cd72630b8b4c9bf62',
    metaTitle: 'Apex Executive Backpack with USB Charging Port',
    metaDescription: 'Apex pairs a padded laptop compartment with an external USB charging port, a rear luggage trolley sleeve, and premium water-resistant fabric. Built for office, travel, and daily commute.',
    keywords: ['executive backpack', 'usb laptop backpack', 'water resistant backpack', 'business travel backpack', 'college backpack india'],
    name: 'Apex Ergonomic BackPack',
    slug: 'apex',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'Designed for professionals who move with purpose. Apex blends modern aesthetics with everyday functionality, a spacious multi-compartment build in premium water-resistant fabric, with a padded laptop sleeve, intelligent organisation pockets, and ergonomic shoulder straps for all-day comfort.',
    story: [
      'Apex is built for the version of a day that moves between an office, an airport, and everywhere in between. A dedicated padded laptop compartment keeps a 15.6″ machine safe, while a built-in USB charging port lets a power bank top up a phone without ever opening the main bag.',
      'A rear luggage trolley sleeve lets Apex ride a suitcase handle on travel days, and ergonomic padded straps with a breathable back panel carry the load in comfort on every other day. Minimalist on the outside, deliberately organised on the inside.',
    ],
    highlights: [
      {
        heading: 'Laptop, protected',
        body: 'A dedicated padded compartment fits most laptops up to 15.6″, kept separate from the rest of the load.',
      },
      {
        heading: 'Stay connected while travelling',
        body: 'A built-in external USB port lets a power bank charge a phone on the move, no digging through the main compartment for a cable.',
      },
      {
        heading: 'Travel-ready',
        body: 'A rear luggage trolley sleeve slides onto a suitcase handle, and dual side pockets hold a bottle or umbrella within reach.',
      },
    ],
    specs: [
      { label: 'Dimensions', value: '43 × 30 × 13 cm' },
      { label: 'Material',   value: 'Premium water-resistant fabric' },
      { label: 'Laptop',     value: 'Fits most laptops up to 15.6″' },
      { label: 'Charging',   value: 'External USB port (power bank not included)' },
      { label: 'Carry',      value: 'Padded shoulder straps, breathable back panel, reinforced handle' },
      { label: 'Ideal for',  value: 'Office, business, college, travel & daily commute' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['af6ae9d4-085c-4fc0-ad33-0979311c1900'],
    features: [
      { label: 'Water-resistant exterior' },
      { label: 'Padded laptop compartment' },
      { label: 'External USB charging port' },
      { label: 'Quick-access organiser pockets' },
      { label: 'Rear luggage trolley sleeve' },
      { label: 'Dual side pockets' },
      { label: 'Smooth-glide zippers' },
      { label: 'Breathable back panel' },
      { label: 'Ergonomic shoulder straps' },
    ],
    variants: [
      {
        color: 'Gray',
        colorHex: '#9E9E9E',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // '8280bee0-71a1-407a-803a-6d38c780a000',
          'af6ae9d4-085c-4fc0-ad33-0979311c1900',
          'd83fd9d1-372c-43ee-a94c-544215083c00',
          '5b59d0b7-8d25-459c-666d-a3956a3f3000',
        ],
        sizes: [
          { size: 'One Size', price: 2890, stock: 30 },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'e8c4e84b-ad13-466d-12a5-847fe9e94300',
          'a9ec0e95-709d-4787-0d71-a11f1c1a3700',
          '83946098-ce94-4974-21e3-45439fee7d00',
          '91447336-fb91-4874-8724-b9a0974d6100',
          '3891c5f8-7d21-498f-2fb8-91b77bdbf700',
          'df74da92-c4cd-461d-808a-ae5e6dba5000',
          'f9f91d77-07ed-4398-efa5-25da511c7a00',
        ],
        sizes: [
          { size: 'One Size', price: 2890, stock: 30 },
        ],
      },
    ],
  },

  // ── MetroGrid ────────────────────────────────────────────────────────────
  {
    id: 'metrogrid',
    mrp: 4390,
    imageFit: 'cover',
    demoVideoId: '1eb99e106f005a52d9972949e527de8b',
    metaTitle: 'MetroGrid Executive Laptop Backpack',
    metaDescription: 'MetroGrid pairs professional styling with practical organisation: dedicated laptop and tablet compartments, quick-access storage, and a rear trolley sleeve for business travel.',
    keywords: ['executive laptop backpack', 'business travel backpack', 'organizer backpack for laptop', 'professional backpack india', 'commuter backpack with trolley sleeve'],
    name: 'MetroGrid Ergonomic BackPack',
    slug: 'metrogrid',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'Professional styling with practical everyday organisation. MetroGrid carries dedicated compartments for a laptop, tablet, documents, and accessories, with quick-access storage, breathable back cushioning, and a rear trolley sleeve for business travel.',
    story: [
      'MetroGrid is built around the two things a working day actually needs: everything in its place, and a laptop that arrives safe. Separate compartments keep a laptop, tablet, notebooks, chargers, and documents from ending up in one tangled pile, while a front organiser and vertical zip pocket hold whatever needs to come out fastest.',
      'Padded shoulder straps, breathable mesh back cushioning, a soft top handle, and a rear trolley sleeve carry it through the rest of the day, from the commute to the boarding gate.',
    ],
    highlights: [
      {
        heading: 'Separate storage for work essentials',
        body: 'Multiple compartments keep a laptop, tablet, documents, notebooks, chargers, and accessories organised and easy to find.',
      },
      {
        heading: 'Quick access, on the move',
        body: 'A front organiser, vertical zip pocket, and side storage hold the things reached for most, without opening the main compartment.',
      },
      {
        heading: 'Built for the commute and the gate',
        body: 'Padded straps, breathable mesh cushioning, a soft top handle, and a rear trolley sleeve make MetroGrid as comfortable on a platform as it is at a boarding gate.',
      },
    ],
    specs: [
      { label: 'Size',     value: '19″' },
      { label: 'Interior', value: 'Dedicated laptop and tablet compartments, document sleeves' },
      { label: 'Storage',  value: 'Front organiser, vertical zip pocket, side storage' },
      { label: 'Carry',    value: 'Padded shoulder straps, soft top handle, rear trolley sleeve' },
      { label: 'Back panel', value: 'Breathable mesh cushioning' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['eddcd71d-dec7-4f81-7399-e56885c68b00'],
    features: [
      { label: 'Concealed pocket' },
      { label: 'Comfortable fabric lining' },
      { label: 'Lightweight build' },
      { label: 'Smooth zipper' },
      { label: 'Luggage mounting sleeve' },
      { label: 'Spacious compartments' },
    ],
    variants: [
      {
        color: 'Olive Green',
        colorHex: '#464B38',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'cb41fa93-7cc6-46da-ed54-309226c4d200',
          // '17041633-e200-49d9-1d86-2f1f6f6ba800',
          // '15a84116-72ad-4efc-ef8a-7e6c51573e00',
          'eddcd71d-dec7-4f81-7399-e56885c68b00',
          'd9b76467-0e4e-44a3-6eef-18eb74d2cf00',
          '8321af3d-25d7-4863-d287-f0ae6a74f300',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // 'd9bce061-5b02-46e9-7270-78a105f69100',
          '9bf9de59-d569-47bf-c5fb-16d1a16df000',
          '47a8c3dd-c89b-4d1c-075b-234ed9f8af00',
          'a6ef3e72-fbef-47ba-80ec-aeca8218e200',
          'c8eabe58-0641-4e9d-f291-b4175c215300',
          'fb84a8df-4295-4018-f286-a97a3ae64f00',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // '1d9902f8-0210-4b00-890b-16833dd5fa00',
          '5c2adad1-1fc9-4e2b-445f-9f47434bb700',
          '238bc6ee-f531-4a9e-37ac-0355f9fdb100',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
    ],
  },

  // ── WorkGrid ─────────────────────────────────────────────────────────────
  {
    id: 'workgrid',
    mrp: 4590,
    demoVideoId: '8f322ddea596b20c6d9b5028f768988f',
    metaTitle: 'WorkGrid Executive Laptop Backpack',
    metaDescription: 'WorkGrid is a structured laptop backpack for the commute and business travel: dedicated laptop and tablet compartments, quick-access storage, and a rear trolley sleeve.',
    keywords: ['laptop backpack for men', 'business travel backpack', 'office commute backpack', 'executive laptop bag', 'backpack with trolley sleeve'],
    name: 'WorkGrid Ergonomic BackPack',
    slug: 'workgrid',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A structured laptop backpack built for the commute, client meetings, and everything between. Dedicated compartments keep a laptop, tablet, and documents organised, with quick-access pockets and padded comfort for the long days.',
    story: [
      'WorkGrid is built around a working day that rarely stays in one place — the desk, the train, the client meeting, and back again. Structured compartments hold a laptop and tablet apart from documents and chargers, so nothing shifts or scratches on the move.',
      'A front pocket and side storage keep transit cards, a phone, and a water bottle within reach, while padded adjustable straps, a breathable back panel, and a rear trolley sleeve carry it comfortably from the office to the airport gate.',
    ],
    highlights: [
      {
        heading: 'Structured for the workday',
        body: 'Separate compartments keep a laptop, tablet, documents, and chargers organised and protected from each other.',
      },
      {
        heading: 'Quick access on the move',
        body: 'A front pocket and side storage hold what gets reached for most, without digging through the main compartment.',
      },
      {
        heading: 'Comfortable, mile after mile',
        body: 'Padded adjustable straps, a breathable back panel, and a rear trolley sleeve make WorkGrid as easy to wear on a platform as at a boarding gate.',
      },
    ],
    specs: [
      { label: 'Size',       value: '19″' },
      { label: 'Interior',   value: 'Dedicated laptop and tablet compartments, document sleeves' },
      { label: 'Storage',    value: 'Front pocket, side storage' },
      { label: 'Carry',      value: 'Padded adjustable straps, soft top handle, rear trolley sleeve' },
      { label: 'Back panel', value: 'Breathable cushioning' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['721b796a-c31a-4d0e-9423-d3b18966de00'],
    features: [
      { label: 'Concealed pocket' },
      { label: 'Comfortable fabric lining' },
      { label: 'Wear resistant' },
      { label: 'Lightweight build' },
      { label: 'Smooth zipper' },
      { label: 'Luggage mounting sleeve' },
      { label: 'Impact resistant' },
    ],
    variants: [
      {
        color: 'Blue',
        colorHex: '#1565C0',
        images: [
          // 'baba58d2-0b7f-4314-4b23-b37c50e5b500',
          '721b796a-c31a-4d0e-9423-d3b18966de00',
          'fe3c06aa-c31d-42c4-5797-64bafde42500',
          'd8ec8e63-c3e9-423b-4e91-2b00a930ad00',
        ],
        sizes: [
          { size: 'One Size', price: 2490, stock: 30 },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        images: [
          'e3666668-e7ff-4b77-c710-1c860d50b300',
          'e70fb8e8-ceb5-4412-fdf9-3b64aa064800',
          '433ef9ac-6978-4c26-d751-3b0d03630c00',
          '56e9929f-4eaf-4fe0-28b2-9438458c5500',
          '3ae21e8e-ae05-477c-2880-899307c60400',
          '9424feb2-718f-41b9-8bd3-eb795801f500',
          '97c185cb-367b-4f78-9d3e-8ae571b87500',
          '143e4fbf-afac-42de-bb29-dedd80e06900',
          '0ebc520a-c013-4d92-becf-bf6ac9e1b600',
          '90cda76f-8f92-43cb-61bb-6195c85dc400',
        ],
        sizes: [
          { size: 'One Size', price: 2490, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        images: [
          '45250acb-75bf-4652-2337-2b51e964dd00',
          '3b2af7b1-cabc-477f-cb33-b3b93139c600',
          'ab63abc9-1e70-4183-90d4-715e48e75500',
        ],
        sizes: [
          { size: 'One Size', price: 2490, stock: 30 },
        ],
      },
    ],
  },

  // ── VelocityPro ──────────────────────────────────────────────────────────
  {
    id: 'velocitypro',
    demoVideoId: '5ab8e342df61ced6a63ddf057acd832f',
    metaTitle: 'VelocityPro USB Laptop Travel Backpack',
    metaDescription: 'VelocityPro pairs a padded laptop compartment with an external USB charging port, a concealed valuables pocket, and a rear luggage trolley sleeve. Built for commuting, business travel, and college.',
    keywords: ['usb laptop backpack', 'travel backpack with charging port', 'padded laptop compartment backpack', 'commuter backpack india', 'anti-theft backpack'],
    name: 'VelocityPro Ergonomic Backpack',
    slug: 'velocitypro',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'Built for a day that never really stops moving. VelocityPro carries a padded laptop and tablet compartment, an external USB charging port, a concealed pocket for valuables, and a rear trolley sleeve, on breathable straps tuned for the whole commute.',
    story: [
      'VelocityPro is named for the pace it is built to keep up with: platform to platform, meeting to meeting, gate to gate. Independent compartments for a laptop, a tablet, documents, and accessories mean nothing has to come out just to find one thing, and a concealed back pocket keeps a wallet or passport against your back instead of in a side pocket someone else could reach.',
      'An external USB port lets a power bank charge a phone without ever opening the main compartment, and a rear luggage trolley sleeve lets VelocityPro ride a suitcase handle on travel days. Padded straps, breathable mesh cushioning, and an adjustable sternum strap carry the rest.',
    ],
    highlights: [
      {
        heading: 'Everything has its compartment',
        body: 'Separate storage for a laptop, tablet, documents, and accessories keeps a rushed morning from turning into a search through one deep pocket.',
      },
      {
        heading: 'A pocket only you can reach',
        body: 'A concealed back-panel pocket keeps a wallet, passport, or phone against your back, out of reach in a crowded platform or queue.',
      },
      {
        heading: 'Charged and travel-ready',
        body: 'An external USB port keeps a power bank within reach for on-the-go charging, and a rear trolley sleeve lets VelocityPro ride a suitcase handle on travel days.',
      },
    ],
    specs: [
      { label: 'Size',       value: '19″' },
      { label: 'Interior',   value: 'Dedicated laptop and tablet compartments, document sleeves' },
      { label: 'Charging',   value: 'External USB port (power bank not included)' },
      { label: 'Security',   value: 'Concealed back-panel pocket for valuables' },
      { label: 'Carry',      value: 'Padded shoulder straps, adjustable sternum strap, rear trolley sleeve' },
      { label: 'Back panel', value: 'Breathable mesh cushioning' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['75fb21d6-0bb3-43d8-d8ac-1847058e1000'],
    features: [
      { label: 'Comfortable fabric lining' },
      { label: 'Lightweight build' },
      { label: 'Smooth zipper' },
      { label: 'Luggage mounting sleeve' },
      { label: 'External USB charging port' },
      { label: 'Concealed valuables pocket' },
      { label: 'Spacious compartments' },
    ],
    variants: [
      {
        color: 'Black',
        colorHex: '#212121',
        images: [
          // 'ad7729f3-7113-4021-9c36-07633a90a000',
          '75fb21d6-0bb3-43d8-d8ac-1847058e1000',
          '2c808313-bfe2-44f3-2f34-2a9534dd2b00',
          '721e5319-7f6c-4790-ccf6-e9bc88e3a500',
          '50f8c1d8-4baf-42fa-e194-124c91c74300',
          'cdf0c59f-992e-4309-6c86-8e5f0b0c3400',
          'bda27ae1-34a9-4437-76cf-bf2d4debc000',
          'ed23e7b5-6e33-4e6d-e2c9-61a91d7d4200',
          'a72e0ef1-c87d-46dc-7702-50f4d78f0300',
        ],
        sizes: [
          { size: 'One Size', price: 9490, stock: 30 },
        ],
      },
      {
        color: 'Blue',
        colorHex: '#1E4B8C',
        images: [
          // '7896cdf8-9b36-4af9-088e-c97acd76b600',
          '03d62f8a-8f3b-4b5f-6a2a-eae6ed99a300',
          '73a05ac5-cbce-4d2d-d558-58a5c7e1d300',
        ],
        sizes: [
          { size: 'One Size', price: 9490, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        images: [
          '09f76b12-b10f-4c05-c7f1-1ce4a44c9f00',
          '1501db58-f8bd-43c8-dfd3-41b3709dd600',
          '5f470c22-9f88-4c7a-36c3-5f78dc2bcf00',
          'dd7691b4-6208-46f8-e160-823ae6697c00',
        ],
        sizes: [
          { size: 'One Size', price: 9490, stock: 30 },
        ],
      },
    ],
  },

  // ── TechTrek ─────────────────────────────────────────────────────────────
  {
    id: 'techtrek',
    imageFit: 'cover',
    metaTitle: 'TechTrek Business Laptop & Travel Backpack',
    metaDescription: 'A professional multi-compartment laptop and travel backpack for work, commuting, study, and short trips, with organised tech storage, padded straps, and a rear trolley sleeve.',
    keywords: ['business laptop backpack', 'travel backpack for work', 'organizer backpack for laptop', 'commuter backpack india', 'backpack with trolley sleeve'],
    name: 'TechTrek',
    slug: 'techtrek',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A professional multi-compartment laptop and travel backpack designed for work, commuting, study, and short trips. TechTrek carries dedicated rear laptop storage, a spacious clamshell main compartment, and multiple organiser pockets, on padded straps built for the whole day.',
    story: [
      'TechTrek opens like a suitcase, not a sack. The clamshell main compartment lays flat and securing straps hold packing in place, whether that is a change of clothes for an overnight or the notebooks and cables a working day collects.',
      'A dedicated rear compartment keeps a laptop separate from the rest, and organiser pockets throughout hold chargers, pens, and documents exactly where they were left. Padded straps, a breathable mesh back panel, and a cushioned top handle carry it the rest of the way, from a morning commute to a short trip away.',
    ],
    highlights: [
      {
        heading: 'Opens flat, packs clean',
        body: 'A clamshell-style main compartment with securing straps lays fully open for packing or a security tray, and holds everything in place once it is zipped shut again.',
      },
      {
        heading: 'A place for every cable',
        body: 'Organised compartments keep a laptop and its accessories, from chargers to cables to documents, out of the single deep pocket where they usually get lost.',
      },
      {
        heading: 'Built for a full day',
        body: 'Padded adjustable shoulder straps, a breathable mesh back panel, and a cushioned top handle keep TechTrek comfortable from the commute to the boarding gate.',
      },
    ],
    specs: [
      { label: 'Size',       value: '19″ · 40 × 20 × 25 cm · approx. 1.2 kg' },
      { label: 'Interior',   value: 'Clamshell main compartment with securing straps, dedicated laptop storage' },
      { label: 'Storage',    value: 'Multiple organiser pockets, side compartments' },
      { label: 'Carry',      value: 'Padded adjustable shoulder straps, cushioned top handle, rear trolley sleeve' },
      { label: 'Back panel', value: 'Breathable mesh cushioning' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['458f7bad-80e0-4ded-a15b-5ea506985900', '500e1951-3e77-47aa-e5d8-c30cb539fe00'],
    features: [
      { label: 'Comfortable fabric lining' },
      { label: 'Wear resistant' },
      { label: 'Lightweight build' },
      { label: 'Smooth zipper' },
      { label: 'Luggage mounting sleeve' },
      { label: 'Clamshell main compartment' },
      { label: 'Spacious compartments' },
    ],
    variants: [
      {
        color: 'Black',
        colorHex: '#212121',
        images: ['458f7bad-80e0-4ded-a15b-5ea506985900', '500e1951-3e77-47aa-e5d8-c30cb539fe00', 'f0ce9e38-1ed9-46cc-15fb-2c183c347f00', '66beb05d-4f24-4d5e-05f5-ba7628fe5000'],
        sizes: [
          { size: 'One Size', price: 9490, stock: 25 },
        ],
      },
      {
        color: 'Blue',
        colorHex: '#1E4B8C',
        images: ['46ccb82f-750a-4469-44a1-f3d4dcce8200', '371eedb9-c131-4216-e3d7-5fb97b0e6300', 'd7d5a39e-c989-4640-618c-9d436c697a00'],
        sizes: [
          { size: 'One Size', price: 9490, stock: 25 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        images: ['04a9b8de-4e92-400a-e90e-10fff4587500', '010bd106-46d9-463c-d538-3f904abc0a00', 'a8b67ad2-df49-4c39-e604-68fec869b900'],
        sizes: [
          { size: 'One Size', price: 9490, stock: 25 },
        ],
      },
    ],
  },

  // ── Urban Pro Backpack ───────────────────────────────────────────────────
  {
    id: 'urban-pro-backpack',
    metaTitle: 'Urban Pro Backpack — Minimal Design, Maximum Utility',
    metaDescription: 'A sleek, structured backpack for modern workdays, travel, and everyday carry — dedicated laptop storage, front quick-access pocket, side pockets, and padded ergonomic straps.',
    keywords: ['minimalist backpack for men', 'laptop backpack for daily use', 'travel backpack for work', 'unisex urban backpack', 'backpack for college and office'],
    name: 'Urban Pro Ergonomic BackPack',
    slug: 'urban-pro-backpack',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A sleek, structured backpack designed for modern workdays, travel, and everyday carry. The Urban Pro Backpack combines a clean minimalist profile with practical organization, featuring a spacious main compartment, dedicated laptop storage, front quick-access pocket, side pockets, and padded ergonomic shoulder straps.',
    story: [
      'Built for the way you move. The Louis Polo Urban Pro Backpack brings together understated style and everyday functionality. Its streamlined silhouette keeps things refined, while the thoughtfully organized interior gives you room for your laptop, essentials, accessories, and daily carry.',
      'The spacious main compartment opens wide for easy packing, while the dedicated laptop section keeps your device securely separated. A front zip pocket provides quick access to smaller essentials, and the side pockets are ideal for a bottle or items you need within reach.',
      'Finished with padded shoulder straps, breathable back cushioning, a structured top handle, and durable zippers, the Urban Pro is designed for commutes, campus, business travel, and everyday city life.',
    ],
    highlights: [
      {
        heading: 'A laptop section that stays separate',
        body: 'The dedicated laptop compartment keeps your device secure and away from everything else you are carrying.',
      },
      {
        heading: 'Everything within reach',
        body: 'A front zip pocket and dual side pockets hold small essentials and a bottle without opening the main compartment.',
      },
      {
        heading: 'Comfortable for the whole day',
        body: 'Padded ergonomic shoulder straps, a breathable back panel, and a reinforced top handle carry it from the commute to campus to the boarding gate.',
      },
    ],
    specs: [
      { label: 'Interior',   value: 'Dedicated laptop compartment, spacious main compartment' },
      { label: 'Storage',    value: 'Front quick-access zip pocket, dual side pockets' },
      { label: 'Carry',      value: 'Padded ergonomic shoulder straps, reinforced top handle' },
      { label: 'Back panel', value: 'Padded, breathable cushioning' },
      { label: 'Fit',        value: 'Unisex everyday styling' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['345f35b6-e5e0-4daf-f198-be669a233d00'],
    features: [
      { label: 'Dedicated laptop compartment' },
      { label: 'Spacious main compartment' },
      { label: 'Front quick-access zip pocket' },
      { label: 'Dual side pockets' },
      { label: 'Padded, breathable back panel' },
      { label: 'Ergonomic padded shoulder straps' },
      { label: 'Reinforced top carry handle' },
      { label: 'Premium minimalist design' },
      { label: 'Unisex everyday styling' },
      { label: 'Suitable for work, college & travel' },
    ],
    variants: [
      {
        color: 'Sage Mist',
        colorHex: '#B4BCAC',
        images: [
          // '9e6f593b-a719-4c1a-4f1b-cb0c845ac500',
          // 'fdda0c0f-00f4-4fc6-b658-febca194d000',
          '345f35b6-e5e0-4daf-f198-be669a233d00',
          '0c71e008-67e4-446b-6c99-a789ec0e0d00',
          '16a52c46-dfac-4afd-3848-626cc29c0f00',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Midnight Navy',
        colorHex: '#363C4A',
        images: [
          '930faf10-9ed3-4967-0f36-e959d5fe0900',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Ice Blue',
        colorHex: '#B7C4D1',
        images: [
          'f98a40ca-7119-4569-8f4a-fe5e63a45500',
          'b763447d-9ff4-4463-79ab-cadb2d365500',
          'd147656b-61bf-4af2-56ca-c8b28adc4a00',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
      {
        color: 'Stone Grey',
        colorHex: '#C7C7C7',
        images: [
          'b202c4b8-73cb-4c30-3864-e9b6e8eb0000',
          'd7b1c67c-0fb4-412a-06e2-b674aec4dd00',
          '15687b51-37a0-418e-af35-42af06c73d00',
        ],
        sizes: [
          { size: 'One Size', price: 2990, stock: 30 },
        ],
      },
    ],
  },

  // ── ArmorPack (Backpack) ─────────────────────────────────────────────────
  {
    id: 'armorpack',
    metaTitle: 'ArmorPack Hard Shell Laptop Backpack',
    metaDescription: 'A rigid polycarbonate-shell backpack with a dedicated laptop bay, organised compartments, and padded straps. Protection a fabric pack can’t match.',
    keywords: ['hard shell laptop backpack', 'business travel backpack', 'impact resistant backpack', 'professional work backpack', 'laptop backpack with organizer'],
    name: 'ArmorPack',
    slug: 'armorpack',
    category: 'backpack',
    isFeatured: true,
    hideSizeSelector: true,
    description:
      'Hard shell protection in a backpack form. ArmorPack keeps your laptop, camera, and essentials safe without adding bulk. Adjustable straps, rigid outer shell, secure zip.',
    story: [
      'Backpacks are soft because that is how backpacks have always been made, not because soft is what a laptop wants. ArmorPack applies suitcase logic to the commute: a rigid polycarbonate-and-ABS shell that keeps its shape in a crowded metro, under an airline seat, or at the bottom of a pile of bags.',
      'Inside, the structure works for you: a dedicated laptop bay, ordered compartments for chargers, notebooks, and cables, and retention straps that stop everything sliding to the bottom. Padded shoulder straps and a supportive back panel carry the load for a full day.',
    ],
    highlights: [
      {
        heading: 'A shell, not a sack',
        body: 'The moulded exterior resists impacts and pressure that would transfer straight through a fabric pack. That is the difference between a bag that carries a laptop and one that protects it.',
      },
      {
        heading: 'Ordered like a workspace',
        body: 'Laptop, tablet, chargers, documents: each gets its own place, so the pack opens like a drawer instead of a lucky dip.',
      },
      {
        heading: 'Comfortable at commuter distance',
        body: 'Padded, adjustable shoulder straps and a breathable back panel keep 2 kg of armour comfortable from front door to desk.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS' },
      { label: 'Dimensions', value: '48.3 × 32.4 × 20.3 cm · approx. 2 kg' },
      { label: 'Laptop bay', value: 'Dedicated padded compartment' },
      { label: 'Straps',     value: 'Padded, adjustable · breathable back panel' },
      { label: 'Closure',    value: 'Secure zip' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Does it fit under an airline seat?',
        a: 'Yes. At 48 × 32 × 20 cm it works as a personal item on most carriers, and the rigid shell means it comes out the same shape it went in.',
      },
    ],
    images: [
      // '543255a6-680c-415c-4362-50cd1864d900',
      '16e56d78-9af6-4679-951c-6df9bd6f4900',
      '5abd5975-806b-41d5-7d24-9e02251e0300',
    ],
    features: [
      { label: 'Hard shell protection' },
      { label: 'Adjustable shoulder straps' },
      { label: 'Laptop compartment' },
      { label: 'Secure zip closure' },
      { label: 'Comfortable fabric lining' },
      { label: 'Concealed pocket' },
      { label: 'Fits under airline seats' },
    ],
    variants: [
      {
        color: 'Silver Brush',
        colorHex: '#C0C0C0',
        sizes: [
          { size: 'One Size', price: 2990, stock: 30, sku: '8906206840193' },
        ],
      },
      {
        color: 'Carbon Fiber',
        colorHex: '#2C2C2C',
        sizes: [
          { size: 'One Size', price: 2990, stock: 30, sku: '8906206840209' },
        ],
      },
      
    ],
  },

  // ── GridPod 8" Travel Utility Case ───────────────────────────────────────
  {
    id:            'gridpod',
    metaTitle: 'GridPod Hard Shell Travel Utility Case & Organizer',
    metaDescription: 'A 260 g hard-shell pod for chargers, cables, cosmetics, and medicines, with a mesh pocket, elastic dividers, and a trolley mounting sleeve.',
    keywords: ['hard shell travel utility case', 'travel organizer pouch', 'gadget organizer case', 'cosmetic storage case', 'cable organizer travel'],
    name:          'GridPod ',
    slug:          'gridpod',
    category:      'vanity',
    description:   'A compact hard-shell organizer built to protect cosmetics, toiletries, electronics, cables, chargers, medicines, and all your travel essentials. Impact-resistant shell, comfortable fabric lining, and a luggage mounting sleeve so it stays with your bag.',
    story: [
      'GridPod is the answer to the loose-ends problem: the chargers, cables, medicines, and small valuables that otherwise migrate to the bottom of a suitcase. A quarter-kilogram grid-textured shell gives them a crush-proof home that slips into any bag, or rides your trolley handle on its mounting sleeve.',
    ],
    highlights: [
      {
        heading: 'A shell for the small stuff',
        body: 'Earbuds, power banks, jewellery, and medication get the same hard-shell treatment as a laptop, protected from the weight of everything packed on top.',
      },
      {
        heading: 'Everything in its slot',
        body: 'A main compartment, zipped mesh pocket, and elastic dividers keep contents sorted, so you unzip and see rather than unzip and search.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS, grid texture' },
      { label: 'Size',       value: '24 × 14 × 8.5 cm · approx. 0.26 kg' },
      { label: 'Interior',   value: 'Mesh pocket · elastic dividers · concealed pocket' },
      { label: 'Attachment', value: 'Luggage mounting sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    isFeatured:    false,
    hideSizeGuide: true,
    mrp: 1549,
    images:      [
      // 'a5ccbbef-2417-4573-e888-c182e7d53d00',
      'bca81ad1-f91d-4b18-44ef-792158c64000',
      'd16b5604-3187-4f10-cfb3-bd1c421de100',
      '25ff7296-3e45-40e0-ddd3-42d389b01700',
      'c1a221a5-6704-4f3d-6f56-03edec8fde00'
    ],
    features: [
      { label: 'Impact & compression resistant hard shell' },
      { label: 'Concealed pocket inside' },
      { label: 'Comfortable fabric lining' },
      { label: 'Smooth zipper' },
      { label: 'Luggage mounting sleeve' },
      { label: 'Lightweight & wear resistant' },
    ],
    variants: [
      {
        color:    'Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '9 Inch', price: 850, stock: 50 }],
      },
      {
        color:    'Green',
        colorHex: '#2E7D32',
        sizes: [{ size: '9 Inch', price: 850, stock: 50 }],
      },
      {
        color:    'Blue',
        colorHex: '#1565C0',
        sizes: [{ size: '9 Inch', price: 850, stock: 50 }],
      },
      {
        color:    'Red',
        colorHex: '#C62828',
        sizes: [{ size: '9 Inch', price: 850, stock: 50 }],
      },
    ],
  },

  // ── V-Glide Beauty Case ──────────────────────────────────────────────────
  {
    id:            'v-glide',
    metaTitle: 'V-Glide Hard Shell Beauty & Vanity Case',
    metaDescription: 'A V-patterned hard-shell beauty case with dedicated compartments, mesh pockets, and a trolley sleeve for hands-free travel.',
    keywords: ['travel vanity case', 'hard shell beauty case', 'cosmetic organizer travel', 'vanity case with trolley sleeve', 'makeup travel case'],
    name:          'V-Glide',
    slug:          'v-glide',
    category:      'vanity',
    description:   'A stylish hard-shell travel beauty organizer with a signature V-pattern finish. Dedicated compartments, mesh pockets, and an integrated trolley sleeve keep your cosmetics, skincare, and accessories perfectly organised and secure on every trip.',
    story: [
      'V-Glide gives a beauty kit the case it deserves: a hard V-patterned shell that keeps compacts unshattered and bottles upright, over an interior of dedicated compartments and mesh pockets that lays skincare, cosmetics, and tools out like a counter.',
      'The rear trolley sleeve slides over your suitcase handle for hands-free airport miles, and at under a kilogram it earns a permanent place in the packing routine.',
    ],
    highlights: [
      {
        heading: 'Protection for fragile things',
        body: 'Pressed powders, glass bottles, and brushes travel inside a rigid shell instead of a soft pouch, arriving in the state you packed them.',
      },
      {
        heading: 'Rides the trolley',
        body: 'The integrated rear sleeve fixes V-Glide over any telescopic handle, so your beauty case never becomes a third thing to carry.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS, V-pattern finish' },
      { label: 'Size (9″)',  value: '32 × 27 × 15 cm · approx. 0.8 kg' },
      { label: 'Interior',   value: 'Dedicated compartments · mesh pockets · concealed pocket' },
      { label: 'Attachment', value: 'Integrated trolley sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    isFeatured:    false,
    hideSizeGuide: true,
    mrp: 2249,
    images:      [
      // '59c762ab-3279-42b4-06f2-3da24c835000',
      // '71f6c275-b8dc-4bfa-e029-a02d7526df00',
      '1b6dbfbf-7c30-4541-d3d0-d1a89096c700',
      '27ef456d-7db1-4739-f5e8-37d041ba2b00',
      'af2eb3af-bcd8-4c1a-17fd-9a39ccbf9d00',
      '0565729b-6d35-471d-d477-bad92a1a6200'

    ],
    features: [
      { label: 'Hard-shell V-pattern finish' },
      { label: 'Dedicated compartments & mesh pockets' },
      { label: 'Concealed pocket inside' },
      { label: 'Comfortable fabric lining' },
      { label: 'Smooth zipper' },
      { label: 'Integrated trolley sleeve' },
      { label: 'Lightweight & wear resistant' },
    ],
    variants: [
      {
        color:    'Rose Gold',
        colorHex: '#B76E79',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
      {
        color:    'Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
      {
        color:    'Black',
        colorHex: '#212121',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
      {
        color:    'Sky Blue',
        colorHex: '#4FC3F7',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
    ],
  },

  // ── OrbitPod 12" Vanity Case ─────────────────────────────────────────────
  {
    id:            'orbitpod',
    metaTitle: 'OrbitPod 12″ Dual-Compartment Vanity Case',
    metaDescription: 'A 12″ hard-shell organizer split by a zipped centre divider: cosmetics one side, tech and essentials the other. Shoulder strap included.',
    keywords: ['hard shell vanity case', 'multi purpose utility organizer', 'travel accessories organizer', 'portable cosmetic case', 'dual compartment travel case'],
    name:          'OrbitPod',
    slug:          'orbitpod',
    category:      'vanity',
    description:   'A stylish hard-shell travel organizer for modern travellers. The dual-compartment interior with zippered centre section keeps cosmetics, gadgets, chargers, toiletries, medicines, and daily essentials neatly separated. Comes with a shoulder strap for hands-free carry.',
    story: [
      'OrbitPod is a twelve-inch hard-shell case with a split personality by design: the zipped centre divider creates two independent compartments, so cosmetics never meet chargers and medicines never meet makeup brushes. One case, cleanly halved.',
      'The rounded shell protects on all sides, the fabric lining is kind to delicate finishes, and the detachable shoulder strap turns it into a carry-along for day trips, commutes, and overnight stays.',
    ],
    highlights: [
      {
        heading: 'Two cases in one shell',
        body: 'The zippered centre divider splits the interior fully in two: beauty kit on one side, tech and daily essentials on the other, nothing mingling in transit.',
      },
      {
        heading: 'Carried, not clutched',
        body: 'The included shoulder strap makes OrbitPod hands-free, a small case that works as hard on a commute as it does in a suitcase.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS' },
      { label: 'Size',     value: '12″ · approx. 0.8 kg' },
      { label: 'Interior', value: 'Dual compartments · zipped centre divider · concealed pocket' },
      { label: 'Carry',    value: 'Detachable shoulder strap' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, strap, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    isFeatured:    false,
    hideSizeGuide: true,
    mrp: 2449,
    images:      [
      // '29b5c294-a115-4003-aed6-c7e218c1ed00',
      'e516c9ca-e168-4959-fd02-2a1557f2c800',
      '35fd5fe2-b859-47e7-7fb6-8eb9514fe200',
      '2b00a5a4-6dfc-42ae-d442-38b109f42300',


    ],
    features: [
      { label: '360° hard-shell protection' },
      { label: 'Smart dual-compartment interior' },
      { label: 'Zippered centre divider' },
      { label: 'Shoulder strap included' },
      { label: 'Concealed pocket' },
      { label: 'Comfortable fabric lining' },
      { label: 'Smooth zipper & wear resistant' },
    ],
    variants: [

      {
        color:    'Turquoise Blue',
        colorHex: '#00B0C8',
        sizes: [{ size: '12 Inch', price: 1350, stock: 50 }],
      },
      {
        color:    'Metallic Grey',
        colorHex: '#757575',
        sizes: [{ size: '12 Inch', price: 1350, stock: 50 }],
      },
      {
        color:    'Metallic Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '12 Inch', price: 1350, stock: 50 }],
      },
    ],
  },

  // ── Voyage Pod  ───────────────────────────────
  {
    id:            'voyage-pod',
    metaTitle: 'Voyage Pod 9″ Multipurpose Vanity & Utility Case',
    metaDescription: 'A 9″ hard-shell pod for toiletries, tech, or medicines, with a zipped mesh pocket and a luggage mounting sleeve.',
    keywords: ['multipurpose vanity case', 'travel cosmetic organizer', 'hard shell beauty case', 'luggage mount vanity case', 'travel utility pod'],
    name:          'Voyage Pod ',
    slug:          'voyage-pod',
    category:      'vanity',
    description:   'A compact hard-shell travel organizer for cosmetics, toiletries, grooming essentials, electronics, medicines, and personal accessories. Features a spacious interior with zippered mesh pocket and an integrated luggage mounting sleeve that attaches to your trolley handle.',
    story: [
      'Voyage Pod is the case that ends up holding a different thing every trip: toiletries this week, camera kit the next, the family medicine bag after that. A nine-inch hard shell with a zipped mesh pocket inside and a mounting sleeve behind, it adapts to whatever needs protecting.',
    ],
    highlights: [
      {
        heading: 'Whatever needs a shell',
        body: 'Grooming kit, electronics, medicines, jewellery. The compression-resistant shell gives small valuables the protection a wash bag can’t.',
      },
      {
        heading: 'Attaches and forgets',
        body: 'The rear mounting sleeve fixes the pod to your trolley handle, so it travels with your luggage instead of on your shoulder.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS' },
      { label: 'Size',       value: '9″ · approx. 0.8 kg' },
      { label: 'Interior',   value: 'Zipped mesh pocket · fabric lining' },
      { label: 'Attachment', value: 'Luggage mounting sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    isFeatured:    false,
    hideSizeGuide: true,
    mrp: 2249,
    images:      [
      // '7565b2dc-b8da-4ce3-c7ae-ad78f2676200',
      '10440239-3b1f-4614-2866-4fa0bd9e5c00',
      '758aabe0-e3d2-4516-eaa7-582ba635f400','73f15220-c48d-4940-ed6c-172c8b0fbf00',
      '7553169b-0eae-4014-9ce3-5cbb8871d700'
    ],
    features: [
      { label: 'Impact & compression resistant hard shell' },
      { label: 'Zippered mesh organizer pocket inside' },
      { label: 'Comfortable fabric lining' },
      { label: 'Smooth zipper' },
      { label: 'Luggage mounting sleeve' },
      { label: 'Lightweight & wear resistant' },
    ],
    variants: [
      {
        color:    'Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
      {
        color:    'Grey',
        colorHex: '#757575',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
      {
        color:    'Blue',
        colorHex: '#1565C0',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
      {
        color:    'Black',
        colorHex: '#212121',
        sizes: [{ size: '9 Inch', price: 1230, stock: 50 }],
      },
    ],
  },

  // ── Élan Luxe Cosmetic Travel Case ───────────────────────────────────────
  {
    id:            'elan-luxe',
    imageFit:      'cover',
    metaTitle: 'Élan Luxe Hard-Shell Cosmetic Travel Case',
    metaDescription: 'A 14″ hard-shell cosmetic case with luxury woven carry handles, gold-tone hardware, and an integrated rear trolley sleeve.',
    keywords: ['hard shell cosmetic case', 'luxury travel makeup bag', 'premium vanity case', 'beauty organizer travel case', 'lightweight cosmetic bag', 'trolley sleeve cosmetic case'],
    name:          'Élan Luxe',
    slug:          'elan-luxe',
    category:      'vanity',
    isFeatured:    true,
    mrp: 4500,
    description:   'The Élan Luxe Cosmetic Case blends elegant craftsmanship with modern travel convenience. A premium hard-shell body, luxury woven handles, spacious interior, and a rear trolley sleeve keep beauty essentials stylishly organised wherever the journey goes.',
    story: [
      'Élan Luxe starts with the shell: a lightweight, impact-resistant hard case finished with a premium textured surface, woven dual carry handles, and gold-tone hardware, a silhouette built to look as considered on a vanity table as it does on a luggage cart.',
      'Inside, a wide-opening zip lays out cosmetics, skincare, toiletries, jewellery, and chargers for quick packing and quicker access, while the rear trolley sleeve slides over a suitcase handle for the walk through the terminal.',
    ],
    highlights: [
      {
        heading: 'Luxury meets protection',
        body: 'A premium hard-shell exterior paired with elegant woven handles and refined gold-tone hardware delivers sophisticated style while protecting your beauty essentials throughout every journey.',
      },
      {
        heading: 'Beautifully organised',
        body: 'Generous storage keeps cosmetics, skincare, toiletries, jewellery, and travel accessories neatly arranged with quick, convenient access whenever you need them.',
      },
      {
        heading: 'Travel smarter',
        body: 'An integrated rear trolley sleeve, protective base feet, and comfortable luxury carry handles make Élan Luxe effortless from airport to hotel.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS' },
      { label: 'Size',       value: '31 × 19.5 × 29 cm · approx. 2 kg' },
      { label: 'Interior',   value: 'Wide-opening zip · easy-clean fabric lining' },
      { label: 'Handles',    value: 'Luxury woven dual carry handles · gold-tone hardware' },
      { label: 'Attachment', value: 'Integrated rear trolley sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    hideSizeGuide: true,
    images: [
      '4b528852-1350-4734-37b3-78530cbbe500',
      '8fd39775-ad44-4608-b63f-8e779c4c2800',
      'ddbe89ba-edb3-4ada-0f1d-675cb5ac3200',
      '7e5d269e-4914-45bd-8dd6-881d004b3200',
      '79306c0c-58f9-44c1-abe7-5b2514c51300',
      '7dc21c37-adfa-458a-25b2-f5e377820400',
    ],
    features: [
      { label: 'Impact & scratch resistant hard shell' },
      { label: 'Luxury woven dual carry handles' },
      { label: 'Premium gold-tone hardware' },
      { label: 'Smooth dual-zip closure' },
      { label: 'Integrated rear trolley sleeve' },
      { label: 'Protective bottom feet' },
      { label: 'Easy-clean interior lining' },
    ],
    variants: [
      {
        color: 'Black',
        colorHex: '#1C1B19',
        images: [
          '4b528852-1350-4734-37b3-78530cbbe500',
          '8fd39775-ad44-4608-b63f-8e779c4c2800',
          'ddbe89ba-edb3-4ada-0f1d-675cb5ac3200',
          '7e5d269e-4914-45bd-8dd6-881d004b3200',
          '79306c0c-58f9-44c1-abe7-5b2514c51300',
          '7dc21c37-adfa-458a-25b2-f5e377820400',
        ],
        sizes: [{ size: '14 Inch', price: 2500, stock: 10 }],
      },
      {
        color: 'White',
        colorHex: '#6F4E37',
        bodyHex: '#F7F5F0',
        images: [
          'e385e52f-bc72-4c99-862d-104d8e9b3800',
          'e75d4417-be35-4565-4117-a155a1f27c00',
          'e932dd2e-a1b9-4d01-2ab0-ad2e697a5800',
          'dfbad9cf-d1bf-4cd7-4f63-1e7a98743b00',
          '929b2103-b36a-451e-f2f2-7ba8df475300',
        ],
        sizes: [{ size: '14 Inch', price: 2500, stock: 10 }],
      },
      {
        color: 'Emerald Green',
        colorHex: '#424A33',
        images: [
          '4ae03fb9-9595-4ff6-fd89-98790588a600',
          '2446941a-5334-4a26-575b-d87bd44c5b00',
          '36d33015-c08e-476f-3245-6581737f7500',
          'a510cb5b-1369-46f7-5653-ed55fa5b9800',
        ],
        sizes: [{ size: '14 Inch', price: 2500, stock: 10 }],
      },
    ],
  },

  // ── HexCore (Office Bag) ─────────────────────────────────────────────────
  {
    id: 'hexcore',
    metaTitle: 'HexCore 17″ Executive Hard Shell Briefcase',
    metaDescription: 'A 1.1 kg hard-shell briefcase with brushed-metal finish, organised interior, dual handles, and detachable shoulder strap. Fits most 15–16″ laptops.',
    keywords: ['hard shell laptop briefcase', 'executive briefcase india', '17 inch laptop case', 'business travel briefcase', 'lightweight professional briefcase'],
    name: 'HexCore',
    slug: 'hexcore',
    category: 'office-bag',
    isFeatured: true,
    mrp: 3799,
    description:
      'Rigid hard shell office bag built for daily professional use. Documents stay flat, tech stays safe, and you arrive looking sharp. The briefcase for people who hate briefcases.',
    story: [
      'HexCore is what happens when a briefcase is engineered rather than stitched. The geometric hard shell holds documents flat and laptops safe through the daily compression test of commutes, cab boots, and crowded overhead racks, and at just over a kilogram, it never announces itself on your shoulder.',
      'The brushed-metal finish and hexagonal detailing do the talking in a meeting room; inside, elastic retention straps and ordered pockets keep laptop, tablet, chargers, and paperwork exactly where you filed them. Dual carry handles and a detachable shoulder strap cover every leg of the day.',
    ],
    highlights: [
      {
        heading: 'Documents arrive flat',
        body: 'The rigid shell is the point: no folded contracts, no cracked screens, no bag slumping into itself on the office floor.',
      },
      {
        heading: 'Executive on the outside',
        body: 'Brushed-metal texture and geometric detailing give HexCore a finish that holds its own beside a tailored jacket.',
      },
      {
        heading: 'Carried three ways',
        body: 'Top handles for the corridor, a side grip for the stairs, and a detachable shoulder strap for the commute.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS' },
      { label: 'Size (17″)', value: '38.7 × 27.3 × 8.9 cm · approx. 1.1 kg · 9.4 L' },
      { label: 'Fits',       value: 'Most laptops up to 15.6″, plus tablet and documents' },
      { label: 'Interior',   value: 'Elastic retention straps · organiser pockets' },
      { label: 'Carry',      value: 'Dual handles + detachable shoulder strap' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '6042b663-f22f-483e-61fb-ed9d250b0400',
      '6042b663-f22f-483e-61fb-ed9d250b0400',
    ],
    features: [
      { label: 'Hard shell protection' },
      { label: 'Professional design' },
      { label: 'Document friendly' },
      { label: 'Secure zip closure' },
      { label: 'Detachable shoulder strap' },
      { label: 'Concealed pocket' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Carbon Fiber',
        colorHex: '#2C2C2C',
        sizes: [
          { size: 'One Size', price: 2100, stock: 30, sku: '8906206840216' },
        ],
      },
      {
        color: 'Silver Brush',
        colorHex: '#C0C0C0',
        sizes: [
          { size: 'One Size', price: 2100, stock: 30, sku: '8906206840223' },
        ],
      },
    ],
  },

  // ── Regent Luxury ────────────────────────────────────────────────────────
  {
    id: 'regent-luxury',
    metaTitle: 'Regent Luxury Executive Travel Bag',
    metaDescription: 'Regent Luxury pairs a structured hard-shell silhouette with premium leather-finish handles and polished metal hardware, for business travel and weekend getaways.',
    keywords: ['executive travel bag', 'premium briefcase', 'leather handle travel bag', 'business travel bag', 'structured hard shell bag'],
    name: 'Regent Luxury',
    slug: 'regent-luxury',
    category: 'office-bag',
    isFeatured: true,
    mrp: 6999,
    description:
      'Experience refined travel with the Regent Luxury, a sophisticated travel bag designed for the modern professional. Its structured silhouette, premium finish, and elegant leather detailing create a timeless look that transitions effortlessly from business meetings to weekend journeys.',
    story: [
      'Designed with practicality in mind, the Regent Luxury offers generous storage with dedicated compartments for organized packing. The spacious front compartment provides convenient access to essentials, while the sturdy construction helps keep your belongings protected throughout your journey.',
      'With its polished metal hardware, premium leather-finish handles, and sleek contemporary design, the Regent Luxury brings together functionality and executive elegance, making it an ideal companion for business travel, short getaways, and everyday premium carrying.',
    ],
    specs: [
      { label: 'Shell',    value: 'Structured hard shell + fabric front panel' },
      { label: 'Interior', value: 'Dedicated compartments · large front-access pocket' },
      { label: 'Hardware', value: 'Durable metal hardware and zippers' },
      { label: 'Carry',    value: 'Premium leather-finish handles + shoulder strap' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'c22c80b5-1add-44c6-0ea8-c94b0d32e600',
    ],
    features: [
      { label: 'Premium, sophisticated design' },
      { label: 'Structured construction for a refined appearance' },
      { label: 'Spacious interior for travel essentials' },
      { label: 'Large front-access compartment' },
      { label: 'Premium leather-finish carry handles' },
      { label: 'Durable metal hardware and zippers' },
      { label: 'Ideal for business travel and weekend getaways' },
      { label: 'Designed for the modern executive' },
    ],
    variants: [
      {
        color: 'Onyx Silver',
        colorHex: '#1C1C1C',
        bodyHex: '#C7C7C7',
        accentColor: 'Brown leather trim',
        sizes: [
          { size: 'One Size', price: 4499, stock: 25 },
        ],
      },
    ],
  },

  // ── Valmont ──────────────────────────────────────────────────────────────
  {
    id: 'valmont',
    metaTitle: 'Valmont Signature Travel Bag',
    metaDescription: 'Valmont pairs a hard-shell silhouette with the Louis Polo signature monogram pattern, brown leather-finish handles, and a detachable shoulder strap.',
    keywords: ['signature pattern travel bag', 'monogram travel bag', 'premium briefcase', 'leather handle travel bag', 'business travel bag'],
    name: 'Valmont',
    slug: 'valmont',
    category: 'office-bag',
    isFeatured: true,
    mrp: 6999,
    description:
      'Elevate your travel style with the Valmont, a refined travel bag that blends distinctive luxury with everyday practicality. Featuring an elegant signature pattern, rich brown accents, and polished leather-finish handles, the Valmont brings a sophisticated European-inspired aesthetic to modern travel.',
    story: [
      'Designed to complement your luggage while standing confidently on its own, the Valmont offers ample space for your travel essentials. Its structured silhouette provides a polished appearance, while the detachable shoulder strap gives you the flexibility to carry it by hand or over the shoulder.',
      'From business trips to weekend escapes, the Valmont is designed for those who appreciate refined details, effortless organization, and timeless luxury.',
    ],
    specs: [
      { label: 'Shell',    value: 'Structured hard shell + signature pattern panel' },
      { label: 'Interior', value: 'Spacious main compartment' },
      { label: 'Hardware', value: 'Durable zippers and hardware' },
      { label: 'Carry',    value: 'Leather-finish handles + detachable, adjustable shoulder strap' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'b728cfda-0845-4ff4-2a7e-723413c3c600',
    ],
    features: [
      { label: 'Premium luxury-inspired design' },
      { label: 'Distinctive Louis Polo signature pattern' },
      { label: 'Structured silhouette for a refined look' },
      { label: 'Spacious main compartment' },
      { label: 'Detachable and adjustable shoulder strap' },
      { label: 'Elegant leather-finish carry handles' },
      { label: 'Durable zippers and hardware' },
      { label: 'Ideal for business travel, short trips, and weekend getaways' },
    ],
    variants: [
      {
        color: 'Signature Cream',
        colorHex: '#5C4230',
        bodyHex: '#EFE6D8',
        accentColor: 'Brown leather trim',
        sizes: [
          { size: 'One Size', price: 4499, stock: 25 },
        ],
      },
    ],
  },

  // ── Gemtote Duffle Bag ──────────────────────────────────────────────────
  {
    id: 'gemtote-duffle-bag',
    metaTitle: 'GemTote 15.5″ Hard Shell Duffle & Vanity Bag',
    metaDescription: 'A structured hard-shell duffle with dual compartments and mesh pockets: overnighter, vanity case, and organised second bag in one.',
    keywords: ['hard shell duffle bag', 'multipurpose vanity organizer', 'weekend travel bag', 'structured duffle india', 'travel organizer bag'],
    name: 'Gemtote Duffle Bag',
    slug: 'gemtote-duffle-bag',
    category: 'duffle',
    isFeatured: true,
    saleExclusive: true,
    mrp: 3249,
    hideSizeSelector: true,
    description:
      'A hard-shell duffle built for short trips and quick getaways, structured enough to hold its shape, light enough to grab and go. Available in five colors.',
    story: [
      'GemTote is a duffle that behaves like a case. The rigid shell holds its faceted shape whether it is full or empty. Nothing crushed at the bottom of a soft bag, nothing slumping in the back seat. At just over a kilogram, it is the bag you grab without thinking for one night away.',
      'Inside, a dual-compartment layout with zipped mesh pockets sorts cosmetics, chargers, grooming kit, and a change of clothes, and the wide opening shows you everything at once. It works as an overnighter, a vanity case, or the organised half of a bigger trip.',
    ],
    highlights: [
      {
        heading: 'Structure in a soft-bag shape',
        body: 'The gem-cut hard shell protects what duffles usually crush, like glasses, bottles, and electronics, while keeping the one-hand, one-bag convenience.',
      },
      {
        heading: 'Opens like a countertop',
        body: 'The wide mouth and dual compartments lay everything out in view. No rummaging past three days of clothes for a charger.',
      },
    ],
    specs: [
      { label: 'Shell',       value: 'Polycarbonate + ABS rigid shell' },
      { label: 'Size (15.5″)', value: '40 × 20 × 26.5 cm · approx. 1.1 kg' },
      { label: 'Interior',    value: 'Dual compartment · zipped mesh pockets' },
      { label: 'Carry',       value: 'Twin handles + adjustable shoulder strap' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      // '0958137c-54cd-499d-d45d-ab87f2b07c00',
      // '92a462b9-9f70-478a-9665-9ac7dae1d200',
      'e22ab8d1-dd65-4960-0c14-ba9d76bc7e00',

      '47e4411d-b608-4680-d934-dbd07a2dce00',
      'ef16d565-78ca-4df9-3bb8-0698584cb400',
      '663e305a-3796-4f98-6d96-9e602d487100',
    ],
    features: [
      { label: 'Hard shell protection' },
      { label: 'Adjustable shoulder strap' },
      { label: 'Spacious main compartment' },
      { label: 'Lightweight build' },
      { label: 'Concealed pocket' },
      { label: 'Comfortable fabric lining' },
    ],
    variants: [
      {
        color: 'White',
        colorHex: '#FAFAFA',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          // '0958137c-54cd-499d-d45d-ab87f2b07c00',
          // '92a462b9-9f70-478a-9665-9ac7dae1d200',
          'e22ab8d1-dd65-4960-0c14-ba9d76bc7e00',
        ],
        sizes: [
          { size: 'One Size', price: 1800, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          '47e4411d-b608-4680-d934-dbd07a2dce00',
        ],
        sizes: [
          { size: 'One Size', price: 1800, stock: 30 },
        ],
      },
      {
        color: 'Pink',
        colorHex: '#EC407A',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          'ef16d565-78ca-4df9-3bb8-0698584cb400',
        ],
        sizes: [
          { size: 'One Size', price: 1800, stock: 30 },
        ],
      },
      {
        color: 'Green',
        colorHex: '#43A047',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          '663e305a-3796-4f98-6d96-9e602d487100',
        ],
        sizes: [
          { size: 'One Size', price: 1800, stock: 30 },
        ],
      },

    ],
  },

  // ── FlexBag Hybrid Duffel ────────────────────────────────────────────────
  {
    id:            'flexbag-hybrid-duffel',
    metaTitle: 'FlexBag Hybrid Duffel with Hard Shell Front & Soft Body',
    metaDescription: 'A hybrid duffel with a protective hard-shell front panel, spacious fabric body, trolley sleeve, and shoulder strap. Cabin, gym, and weekend ready.',
    keywords: ['hybrid duffel bag', 'duffel with trolley sleeve', 'weekend getaway bag', 'cabin duffel bag', 'lightweight travel duffel'],
    name:          'FlexBag Hybrid Duffel',
    slug:          'flexbag-hybrid-duffel',
    category:      'duffle',
    cardZoom:      1.3,
    isFeatured:    true,
    hideSizeGuide: true,
    description: 'A hybrid travel bag combining hard-shell protection with the flexibility of a duffel. Perfect for weekend getaways, business trips, and cabin travel, lightweight, durable, and spacious.',
    story: [
      'FlexBag splits the difference the industry usually forces you to choose: a structured hard-shell front panel guards your valuables, while the soft-sided body behind it swallows the clothes, shoes, and last-minute additions a rigid case would refuse.',
      'A trolley sleeve on the back slides over any suitcase handle, turning it into the perfect second bag, and at about a kilogram, it earns its place on gym days and weekend runs when no suitcase is coming along.',
    ],
    highlights: [
      {
        heading: 'Hard where it matters, soft where it helps',
        body: 'The shell panel takes the knocks for your glasses, tablet, and toiletries; the fabric body flexes around everything else and forgives overpacking.',
      },
      {
        heading: 'Rides on your suitcase',
        body: 'The integrated trolley sleeve locks FlexBag onto a telescopic handle, so the airport walk stays one-handed.',
      },
      {
        heading: 'One bag, three lives',
        body: 'Cabin bag on Friday, gym bag on Monday, overnighter in between. Dual handles and an adjustable shoulder strap cover all of them.',
      },
    ],
    specs: [
      { label: 'Build',      value: 'Hard-shell front panel + soft fabric body' },
      { label: 'Size (20″)', value: '50 × 34.5 cm · slim 8 cm profile that expands as you pack' },
      { label: 'Weight',     value: 'approx. 1.1 kg' },
      { label: 'Carry',      value: 'Dual handles · shoulder strap · trolley sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell panel, fabric, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images:      [
      // '0caedf5f-e860-40a0-815d-948cb8b39200',
      // '84b25074-a05f-4498-c0bd-d4d058ed7500',
      'e5b94864-6080-40d7-6503-42955e4e6400',
      'ff0b7372-c6a8-468f-9529-6619cf26cb00',
      'c51b7c0b-34d5-415c-e0b4-0cc22aac3d00',
      '2ef2f8b2-ed27-4506-c42f-baf0cc755a00',
      'ff00399d-672a-4d47-1218-415935f7ad00'


    ],
    features: [
      { label: 'Hard shell protection panel' },
      { label: 'Trolley attachment sleeve' },
      { label: 'Spacious main compartment' },
      { label: 'Lightweight build' },
      { label: 'Versatile: gym, cabin & weekend use' },
      { label: 'Comfortable fabric lining' },
    ],
    variants: [
      {
        color:    'Black',
        colorHex: '#212121',
        sizes: [{ size: '20 Inch', price: 2999, stock: 30 }],
      },
      {
        color:    'Navy',
        colorHex: '#1A237E',
        sizes: [{ size: '20 Inch', price: 2999, stock: 30 }],
      },
      {
        color:    'Green',
        colorHex: '#2E7D32',
        sizes: [{ size: '20 Inch', price: 2999, stock: 30 }],
      },
      {
        color:    'Grey',
        colorHex: '#757575',
        sizes: [{ size: '20 Inch', price: 2999, stock: 30 }],
      },
      {
        color:    'Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '20 Inch', price: 2999, stock: 30 }],
      },
    ],
  },

  // ── DiamondLux Set of 3 ──────────────────────────────────────────────────
  {
    id: 'diamondlux-set',
    metaTitle: 'DiamondLux Luggage Set of 3 (20″, 24″ & 28″)',
    metaDescription: 'The full DiamondLux line in one matched set: cabin, 24″, and 28″ quilted hard-shell spinners with combination locks and metallic accents.',
    keywords: ['luggage set of 3 india', 'quilted hard shell suitcase set', 'combination lock luggage set', 'matched luggage set', 'family travel luggage set'],
    name: 'DiamondLux Set of 3',
    slug: 'diamondlux-set',
    category: 'set',
    isFeatured: true,
    description:
      '20", 24", and 28" DiamondLux bags in a matched set, the quilted diamond shell and metallic accents carried across all three sizes. The complete setup for every kind of trip.',
    story: [
      'One decision instead of three. The DiamondLux set puts the cabin, 24″, and 28″ in the same quilted finish, so the weekend bag, the week bag, and the long-haul bag all draw from the same wardrobe of luggage.',
      'Each case in the set carries the same diamond-quilted shell, metallic accents, and combination lock as the individual DiamondLux, so the only decision left is which one to grab on the way out.',
    ],
    highlights: [
      {
        heading: 'Every trip, pre-decided',
        body: 'Two nights takes the cabin, a week takes the 24″, and the long haul takes the 28″. No more forcing a fortnight into the wrong bag.',
      },
      {
        heading: 'Matched to the millimetre',
        body: 'Same shell, same finish, same hardware across all three sizes. On a trolley at arrivals, the set reads as one deliberate choice.',
      },
      {
        heading: 'Luxury-inspired, every size',
        body: 'A diamond-quilted shell and premium metallic accents give the whole set a finish that reads considered rather than loud.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS, quilted diamond finish' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″)' },
      { label: 'Lock',     value: 'Combination lock on each case' },
      { label: 'Wheels',   value: '4 dual-spinner 360° wheels' },
      { label: 'Handle',   value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Can I buy the sizes separately?',
        a: 'Yes. Each DiamondLux size is available on its own. The set simply prices the three together and guarantees a matched batch and finish.',
      },
    ],
    images: ['31497826-4729-4374-769c-679b65837d00'],
    features: [
      { label: 'Smooth rolling spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Comfortable fabric lining' },
      { label: 'Lightweight build' },
      { label: 'Impact resistant' },
      { label: 'Anti-theft zipper' },
    ],
    variants: [
      {
        color: 'Bold White',
        colorHex: '#F5F3EC',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // '0269dd46-6db0-4865-1cd2-d2a28bea9800',
          '31497826-4729-4374-769c-679b65837d00',
        ],
        sizes: [
          { size: 'Set of 3', price: 11499, stock: 15 },
        ],
      },
      {
        color: 'Zen Gray',
        colorHex: '#8A8D91',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'c55faf06-8cd6-47a8-ecf3-d1fd70240b00',
        ],
        sizes: [
          { size: 'Set of 3', price: 11499, stock: 15 },
        ],
      },
    ],
  },

  // ── StrataLux Set of 3 ───────────────────────────────────────────────────
  {
    id: 'stratalux-set',
    metaTitle: 'StrataLux Luggage Set of 3 (20″, 24″ & 28″)',
    metaDescription: 'The full StrataLux line in one matched set: cabin, 24″, and 28″ ribbed hard-shell spinners with combination locks and metallic corner accents.',
    keywords: ['luggage set of 3 india', 'ribbed hard shell suitcase set', 'combination lock luggage set', 'matched luggage set', 'family travel luggage set'],
    name: 'StrataLux Set of 3',
    slug: 'stratalux-set',
    category: 'set',
    isFeatured: true,
    description:
      '20", 24", and 28" StrataLux bags in a matched set, the ribbed shell and leather-look accents carried across all three sizes. The complete setup for every kind of trip.',
    story: [
      'One decision instead of three. The StrataLux set puts the cabin, 24″, and 28″ in the same considered finish, so the weekend bag, the week bag, and the long-haul bag all draw from the same wardrobe of luggage.',
      'Each case in the set carries the same ribbed hard shell, leather-look accent bands, and combination lock as the individual StrataLux, so the only decision left is which one to grab on the way out.',
    ],
    highlights: [
      {
        heading: 'Every trip, pre-decided',
        body: 'Two nights takes the cabin, a week takes the 24″, and the long haul takes the 28″. No more forcing a fortnight into the wrong bag.',
      },
      {
        heading: 'Matched to the millimetre',
        body: 'Same shell, same finish, same hardware across all three sizes. On a trolley at arrivals, the set reads as one deliberate choice.',
      },
      {
        heading: 'Structured, considered design',
        body: 'Vertical ribbing, leather-look accent bands, and metallic corner details give the whole set a finish that reads deliberate rather than loud.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Hard shell, vertical ribbing with leather-look accents' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″)' },
      { label: 'Lock',     value: 'Combination lock on each case' },
      { label: 'Wheels',   value: '4 dual-spinner 360° silent wheels' },
      { label: 'Handle',   value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Can I buy the sizes separately?',
        a: 'Yes. Each StrataLux size is available on its own. The set simply prices the three together and guarantees a matched batch and finish.',
      },
    ],
    images: ['de5e9525-f884-4848-a188-267d47786a00'],
    features: [
      { label: '20", 24" & 28" included' },
      { label: '360° silent spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Telescopic handle' },
      { label: 'Impact resistant' },
      { label: 'Metallic corner accents' },
    ],
    variants: [
      {
        color: 'Ivory',
        colorHex: '#F0EAD6',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          // '488989e4-42af-412a-df1d-7d8d69d15c00',
          'de5e9525-f884-4848-a188-267d47786a00',
        ],
        sizes: [
          { size: 'Set of 3', price: 11500, stock: 15 },
        ],
      },
      {
        color: 'Royal Teal',
        colorHex: '#0E6B6B',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          '988403ab-413b-4e04-16c1-d55478bdfb00',
        ],
        sizes: [
          { size: 'Set of 3', price: 11500, stock: 15 },
        ],
      },
      {
        color: 'Rose Gold',
        colorHex: '#B76E79',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'd67e5140-53e3-4c22-9287-fd5a0849ef00',
        ],
        sizes: [
          { size: 'Set of 3', price: 11500, stock: 15 },
        ],
      },
    ],
  },

  // ── SkyTrail Set of 3 ────────────────────────────────────────────────────
  {
    id: 'skytrail-set',
    metaTitle: 'SkyTrail Luggage Set of 3 (20″, 24″ & 28″)',
    metaDescription: 'The full SkyTrail line in one matched set: cabin, 24″, and 28″ hard-shell spinners with combination locks. Nests into a single footprint at home.',
    keywords: ['luggage set of 3 india', 'hard shell spinner suitcase set', 'nesting luggage set', 'combination lock luggage set', 'family travel luggage set'],
    name: 'SkyTrail Set of 3',
    slug: 'skytrail-set',
    category: 'set',
    isFeatured: true,
    mrp: 31699,
    description:
      '20", 24", and 28" SkyTrail bags in a nesting set, one fits inside another for compact storage at home. The complete setup for every kind of trip.',
    story: [
      'One decision instead of three. The SkyTrail set puts the cabin, 24″, and 28″ in a single matched finish, so the weekend bag, the week bag, and the family bag all speak the same language.',
      'Between trips they nest like Russian dolls: the 20″ inside the 24″ inside the 28″, storing three suitcases in the cupboard space of one. Each carries the same polycarbonate-and-ABS shell, combination lock, and 360° spinner wheels as the individual SkyTrail.',
    ],
    highlights: [
      {
        heading: 'Every trip, pre-decided',
        body: 'Two nights takes the cabin, a week takes the 24″, and the long haul takes the 28″. No more forcing a fortnight into the wrong bag.',
      },
      {
        heading: 'Stores as one suitcase',
        body: 'The nesting design means the set occupies a single 28″ footprint at home. That is the difference between owning three suitcases and storing three suitcases.',
      },
      {
        heading: 'Matched to the millimetre',
        body: 'Same shell, same finish, same hardware across all three sizes. On a trolley at arrivals, the set reads as one deliberate choice.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Polycarbonate + ABS' },
      { label: 'Cabin (20″)',  value: '55.9 × 38.1 × 22.9 cm · approx. 2.5 kg · 48.6 L' },
      { label: 'Medium (24″)', value: '66 × 44.5 × 26.7 cm · approx. 3.6 kg · 78.2 L' },
      { label: 'Large (28″)',  value: '76.2 × 50.8 × 30.5 cm · approx. 4.3 kg · 117.9 L' },
      { label: 'Set weight',   value: 'approx. 10.4 kg combined' },
      { label: 'Lock',         value: '3-digit combination lock on each case' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Do the three sizes really nest?',
        a: 'Yes. The 20″ fits inside the 24″, which fits inside the 28″, so the whole set stores in the footprint of one large suitcase.',
      },
      {
        q: 'Can I buy the sizes separately?',
        a: 'You can. Each SkyTrail size is available on its own. The set simply prices the three together and guarantees a matched batch and finish.',
      },
    ],
    images: [
      // '10980eca-8d23-488a-70d9-0fa3f1797100',
      // 'f57afb4d-bba5-481b-2da1-a204b5924600',
      'afc002bb-bb5c-468f-9ea6-8858cbfc2300',
      'dac9006e-f906-4e5f-c5a7-1a4658002a00',
    ],
    features: [
      { label: '20", 24" & 28" included' },
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Nesting storage design' },
      { label: 'Anti-theft zipper' },
      { label: 'Impact resistant' },
    ],
    variants: [
      {
        color: 'Blue',
        colorHex: '#1E88E5',
        sizes: [
          { size: 'Set of 3', price: 7749, stock: 15, sku: '8906206840087' },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        sizes: [
          { size: 'Set of 3', price: 7749, stock: 15, sku: '8906206840100' },
        ],
      },
    ],
  },

  // ── Matrix Set of 3 ──────────────────────────────────────────────────────
  {
    id: 'matrix-set',
    metaTitle: 'Matrix Hard Shell Spinner Luggage Set (20″, 24″ & 28″)',
    metaDescription: 'Moulded-grid hard-shell luggage set with silent double-spinner wheels, combination locks, and anti-theft zippers across all three sizes.',
    keywords: ['hard shell spinner luggage set', 'anti theft zipper suitcase', 'silent wheel luggage', '3 piece luggage set', 'impact resistant travel case'],
    name: 'Matrix- Set of 3',
    slug: 'matrix-set',
    category: 'set',
    isFeatured: true,
    description:
      'Premium hard-shell spinner luggage in three nesting sizes: 20", 24", and 28". Engineered for business travellers, vacationers, and frequent flyers who demand lightweight durability, secure locking, and smooth mobility in one complete collection.',
    story: [
      'The Matrix set is built around a moulded geometric grid that does two jobs: it gives all three cases a shared identity, and it stiffens every panel against the pressure of a full baggage hold. One pattern, three sizes, zero guesswork about which bag to take.',
      'Each case runs the full hardware set: silent double-spinner wheels, a combination lock, and an anti-theft zipper whose interlocking teeth resist being forced with a pen. Between trips, the three nest into the footprint of the largest.',
    ],
    highlights: [
      {
        heading: 'A grid with a purpose',
        body: 'The geometric surface is moulded, not printed. Every ridge adds rigidity, so the pattern that makes the set recognisable is also what keeps it from flexing under load.',
      },
      {
        heading: 'Security, twice over',
        body: 'A combination lock closes the case; the anti-theft zipper construction resists the puncture trick used on ordinary coils. Two layers between your packing and a bad actor.',
      },
      {
        heading: 'Silent through the terminal',
        body: 'Double-spinner wheels on all three sizes roll quietly and turn in place. Even the 28″ steers with two fingers.',
      },
    ],
    specs: [
      { label: 'Shell',       value: 'Polycarbonate + ABS, moulded grid' },
      { label: 'Sizes',       value: '20″ / 24″ / 28″ nesting set' },
      { label: 'Cabin (20″)', value: '54 × 37 × 24 cm · approx. 2.4 kg' },
      { label: 'Lock',        value: 'Combination lock + anti-theft zipper' },
      { label: 'Wheels',      value: '360° silent double-spinner wheels' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Do the three sizes nest for storage?',
        a: 'Yes. The 20″ fits inside the 24″, which fits inside the 28″, so the whole set stores in the footprint of one large suitcase.',
      },
    ],
    images: [
      // '6c725469-47bb-469c-a9d3-293921ff6400',
      // '3c187840-325d-4076-8168-cf87c926f400',
      '9bc58c00-4e4f-46c4-d656-e41a00dad400'

    ],
    features: [
      { label: '20", 24" & 28" included' },
      { label: '360° silent spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Impact-resistant hard shell' },
      { label: 'Anti-theft zipper' },
      { label: 'Nesting storage design' },
      { label: 'Telescopic handle' },
    ],
    variants: [
      {
        color: 'Black',
        colorHex: '#212121',
        sizes: [
          { size: 'Set of 3', price: 31699, stock: 15, sku: 'LP-TM-SET-BLK' },
        ],
      },
    ],
  },

  // ── VeeZoom Set of 3 ─────────────────────────────────────────────────────
  {
    id: 'veezoom-set',
    metaTitle: 'VeeZoom Matching Spinner Luggage Set of 3',
    metaDescription: 'Three VeeZoom spinners in 20″, 24″, and 28″, one matched V-pattern set with nesting storage and 360° wheels.',
    keywords: ['3 piece luggage set', 'hard shell spinner suitcase set', 'nesting luggage set', 'abs suitcase set', 'matching luggage set india'],
    name: 'VeeZoom Set of 3',
    slug: 'veezoom-set',
    category: 'set',
    isFeatured: true,
    description:
      'The full VeeZoom family: 20", 24", and 28" in matching bold design. Nesting format for home storage. Everything you need for a week, a month, or forever.',
    story: [
      'Three VeeZooms, one carousel moment: the moulded V-pattern in matching colour across cabin, 24″, and 28″ makes your luggage the easiest thing to spot in any airport. Buy the set once and every future trip already has its bag.',
      'The sizes nest inside one another for storage, and each carries the same light ABS shell, mesh-pocketed interior, and 360° spinner wheels as the individual VeeZoom.',
    ],
    highlights: [
      {
        heading: 'One look, three sizes',
        body: 'The V-ribs that stiffen the shell also brand the whole set: a matched trio that reads as one deliberate purchase, not three compromises.',
      },
      {
        heading: 'A cupboard-friendly fleet',
        body: 'Nested, the three suitcases store in the space of the 28″ alone. Owning proper luggage stops costing you a wardrobe.',
      },
    ],
    specs: [
      { label: 'Shell',        value: 'Hard shell ABS composite' },
      { label: 'Cabin (20″)',  value: '54.6 × 36.8 × 23.5 cm · approx. 2.7 kg · 47.2 L' },
      { label: 'Medium (24″)', value: '65.4 × 45.7 × 27.3 cm · approx. 3.7 kg · 81.6 L' },
      { label: 'Large (28″)',  value: '76.8 × 50.8 × 31.8 cm · approx. 4.2 kg · 123.9 L' },
      { label: 'Set weight',   value: 'approx. 10.6 kg combined' },
      { label: 'Wheels',       value: '360° spinner wheels' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Do the three sizes nest for storage?',
        a: 'Yes. The 20″ fits inside the 24″, which fits inside the 28″, so the whole set stores in the footprint of one large suitcase.',
      },
    ],
    images: [
      // '69f2e18a-3e6f-49cc-a4d8-603445faf800',
      // '15eeffee-0747-4449-9479-658e51bc8e00',
      'ce748139-00e8-4338-c685-87ba23cd8100',
      'f18adae4-1c3e-46d4-dfb2-66c1c31aad00',
    ],
    features: [
      { label: '20", 24" & 28" included' },
      { label: '360° spinner wheels' },
      { label: 'Hard shell ABS' },
      { label: 'Nesting storage design' },
      { label: 'Combination lock' },
      { label: 'Anti-theft zipper' },
      { label: 'Cross packing straps' },
    ],
    variants: [
      {
        color: 'Yellow',
        colorHex: '#FDD835',
        sizes: [
          { size: 'Set of 3', price: 7749, stock: 15, sku: '8906206840094' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        sizes: [
          { size: 'Set of 3', price: 7749, stock: 15, sku: '8906206840070' },
        ],
      },
    ],
  },

  // ── ArmorRite Set of 3 ──────────────────────────────────────────────────
  {
    id: 'armorrite-set',
    metaTitle: 'ArmorRite Luggage Set of 3 (20″, 24″ & 28″)',
    metaDescription: 'The full ArmorRite line in one matched set: cabin, 24″, and 28″ armor-inspired hard-shell spinners with TSA locks.',
    keywords: ['luggage set of 3 india', 'hard shell spinner suitcase set', 'tsa lock luggage set', 'matched luggage set', 'family travel luggage set'],
    name: 'ArmorRite Set of 3',
    slug: 'armorrite-set',
    category: 'set',
    isFeatured: true,
    mrp: 24392,
    description:
      '20", 24", and 28" ArmorRite bags in a matched set, the reinforced geometric shell and TSA lock carried across all three sizes. The complete setup for every kind of trip.',
    story: [
      'One decision instead of three. The ArmorRite set puts the cabin, 24″, and 28″ in the same armor-inspired finish, so the weekend bag, the week bag, and the long-haul bag all speak the same language.',
      'Each case in the set carries the same reinforced geometric hard shell, TSA-approved combination lock, and 360° spinner wheels as the individual ArmorRite, so the only decision left is which one to grab on the way out.',
    ],
    highlights: [
      {
        heading: 'Every trip, pre-decided',
        body: 'Two nights takes the cabin, a week takes the 24″, and the long haul takes the 28″. No more forcing a fortnight into the wrong bag.',
      },
      {
        heading: 'Matched to the millimetre',
        body: 'Same shell, same finish, same hardware across all three sizes. On a trolley at arrivals, the set reads as one deliberate choice.',
      },
      {
        heading: 'TSA lock, on every case',
        body: 'An integrated TSA combination lock secures all three sizes, so airport security and hotel storage never feel like a gamble.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'ABS hard shell, matte textured finish' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″)' },
      { label: 'Lock',     value: 'TSA-approved combination lock on each case' },
      { label: 'Wheels',   value: '4 double 360° spinner wheels' },
      { label: 'Handle',   value: 'Telescopic aluminium handle' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'Can I buy the sizes separately?',
        a: 'Yes. Each ArmorRite size is available on its own. The set simply prices the three together and guarantees a matched batch and finish.',
      },
    ],
    images: [
      // 'e41e9ccf-2de0-4ae9-0f2f-85359636c400',
      // '578abe9b-91f6-4a83-e684-bdd4cdc54100',
      '3a57ef31-7bff-4e6d-480a-35c45acd8800',
    ],
    features: [
      { label: '20", 24" & 28" included' },
      { label: 'Rugged armor-inspired hard shell' },
      { label: 'Integrated TSA combination lock' },
      { label: '360° silent spinner wheels' },
      { label: 'Scratch-resistant exterior' },
      { label: 'Smooth telescopic aluminium handle' },
    ],
    variants: [
      {
        color: 'Red',
        colorHex: '#C62828',
        sizes: [
          { size: 'Set of 3', price: 11220, stock: 15 },
        ],
      },
    ],
  },

  // ── POPShell Set of 3 ────────────────────────────────────────────────────
  {
    id: 'popshell-set',
    metaTitle: 'Louis Polo POPShell Hard-Shell Spinner Luggage Set of 3',
    metaDescription: 'The full POPShell line in one matched set: cabin, 24″, and 28″ hard-shell spinners with a bold printed graphic front panel, 360° wheels, and combination locks.',
    keywords: ['luggage set of 3 india', 'printed hard shell suitcase set', 'graphic print luggage set', 'combination lock luggage set', 'matched luggage set'],
    name: 'POPShell Set of 3',
    slug: 'popshell-set',
    category: 'set',
    isFeatured: true,
    description:
      '20", 24", and 28" POPShell cases in a matched set, the bold printed graphic panel carried across all three sizes. The complete setup for every kind of trip.',
    specs: [
      { label: 'Shell',      value: 'Hard shell ABS, printed graphic panel' },
      { label: 'Sizes',      value: 'Cabin (20″) · Medium (24″) · Large (28″)' },
      { label: 'Lock',       value: '3-digit combination lock on each case' },
      { label: 'Wheels',     value: '360° spinner wheels' },
      { label: 'Handle',     value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty on all three cases, covering manufacturing defects in the shell, wheels, telescopic handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '96da18fe-8ba7-4bb5-15ec-efc5e5275500',
    ],
    features: [
      { label: '20", 24" & 28" included' },
      { label: '360° spinner wheels' },
      { label: 'Combination lock' },
      { label: 'Bold printed graphic panel' },
      { label: 'Telescopic handle' },
      { label: 'Hard shell ABS' },
    ],
    variants: [
      {
        color: 'Pop Red',
        colorHex: '#D8342A',
        sizes: [
          { size: 'Set of 3', price: 7999, stock: 15 },
        ],
      },
    ],
  },

  // ── ShirtVault ──────────────────────────────────────────────────────────
  {
    id: 'shirtvault',
    imageFit: 'cover',
    metaTitle: 'Louis Polo ShirtVault Hard Shell Shirt Organizer',
    metaDescription: 'Hard-shell shirt organizer that carries 4 to 5 formal shirts wrinkle-free. Slim polycarbonate case for business trips, weddings, and wardrobe storage.',
    keywords: ['shirt organizer for travel', 'wrinkle free shirt case', 'formal shirt travel organizer', 'hard shell shirt holder', 'shirt storage case india'],
    name: 'ShirtVault',
    slug: 'shirtvault',
    category: 'organizer',
    tag: 'Selling Fast',
    isFeatured: true,
    saleExclusive: true,
    hideSizeSelector: true,
    hideSizeGuide: true,
    mrp: 1699,
    recentPurchases: 174,
    description:
      'Pack shirts, not wrinkles. ShirtVault carries 4 to 5 formal shirts in a slim hard shell that keeps collars sharp and folds crisp, in a suitcase or on a wardrobe shelf.',
    story: [
      'Every frequent traveler knows the ritual: shirts folded with care at home, pulled out crushed at the hotel. ShirtVault ends it. The structured polycarbonate shell takes the pressure your luggage deals out, so the shirts inside never do. Collars hold their shape, folds stay where you set them, and the iron stays in the cupboard.',
      'It earns its place between trips too. On a wardrobe shelf, ShirtVault keeps 4 to 5 shirts stacked, dust-free, and ready to lift out for the next early flight or big occasion.',
    ],
    highlights: [
      {
        heading: 'Shirts arrive as they left',
        body: 'The rigid shell absorbs the crush of packed luggage, so collars, cuffs, and folds come out exactly as you packed them. No hotel ironing board required.',
      },
      {
        heading: 'Slim enough for any suitcase',
        body: 'ShirtVault slips flat into most cabin and check-in luggage, holding 4 to 5 formal shirts in the space careless folding would waste.',
      },
      {
        heading: 'A wardrobe upgrade at home',
        body: 'Between trips it works as shirt storage: organized, protected from dust, and stacked neatly instead of slumping on a shelf.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate (PC)' },
      { label: 'Capacity', value: '4 to 5 formal shirts' },
      { label: 'Finish',   value: 'Metallic silver gloss' },
      { label: 'Closure',  value: 'Full-perimeter zip' },
      { label: 'Use',      value: 'Travel packing and wardrobe storage' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    faqs: [
      {
        q: 'How many shirts does it hold?',
        a: 'Four comfortably, five with a slimmer fold. Enough for a working week away, or a wedding weekend with backups.',
      },
      {
        q: 'Will it fit inside a cabin suitcase?',
        a: 'Yes. The case is deliberately slim so it lies flat inside most cabin and check-in luggage, with room around it for everything else.',
      },
    ],
    images: [
      // '584aba3f-66ed-4084-df03-ba0e5e625100',
      // '71bcef0c-eaf5-4466-fec4-4f5fdc357900',
      // '365d5259-4bd3-4533-57d7-2182ee625e00',
      'e3c8bc97-9a5e-4481-e094-d3ae7d1a2200',
    ],
    features: [
      { label: 'Holds 4 to 5 formal shirts' },
      { label: 'Prevents wrinkles and creases' },
      { label: 'Protects collars and structure' },
      { label: 'Slim, suitcase-friendly profile' },
      { label: 'Hard shell construction' },
      { label: 'Dust-free wardrobe storage' },
      { label: 'Lightweight build' },
    ],
    variants: [
      {
        color: 'Metallic Silver',
        colorHex: '#C9CBD1',
        sizes: [
          { size: 'One Size', price: 1499, stock: 50 },
        ],
      },
    ],
  },

  // ── AeroDual ─────────────────────────────────────────────────────────────
  {
    id: 'aerodual',
    metaTitle: 'AeroDual Dual-Texture Hard Shell Cabin Trolley',
    metaDescription: 'A 20-inch dual-texture hard-shell cabin trolley with 360° spinner wheels, a telescopic handle, and a compression-strap interior.',
    keywords: ['dual texture hard shell suitcase', '20 inch cabin trolley', '360 spinner wheel luggage', 'lightweight carry-on suitcase', 'telescopic handle trolley bag'],
    name: 'AeroDual',
    slug: 'aerodual',
    category: 'trolley',
    isFeatured: true,
    description:
      'A cabin trolley split down the middle: one half a fine ribbed texture, the other a smooth painted panel, meeting at a single seam that runs the height of the case. 360° spinner wheels and a telescopic handle carry it the rest of the way.',
    story: [
      'Most textured shells commit to one finish across the whole case. AeroDual runs two, a ribbed half and a smooth half, sharing one seam down the centre front, so the surface reads as a deliberate contrast rather than a single pattern stamped on.',
      'Underneath, it works like every cabin case in the range: a rigid polycarbonate and ABS shell, four dual-spinner wheels for 360° movement, and an interior of compression straps and zipped dividers that keeps a week of packing in place through the belt and the boot.',
    ],
    highlights: [
      {
        heading: 'Two textures, one shell',
        body: 'A ribbed panel and a smooth panel meet at a single centre seam, breaking up the surface enough that everyday scuffs have nowhere obvious to show.',
      },
      {
        heading: 'Steady in a crowd',
        body: 'Four dual-spinner wheels roll in any direction, so AeroDual tracks straight beside you through a packed terminal instead of dragging at an angle.',
      },
    ],
    specs: [
      { label: 'Shell',   value: 'Polycarbonate + ABS, dual-texture finish' },
      { label: 'Size (20″)', value: '37 × 22 × 55 cm · approx. 2.6 kg' },
      { label: 'Interior', value: 'Compression straps · zipped dividers' },
      { label: 'Wheels',  value: '360° dual-spinner wheels' },
      { label: 'Handle',  value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      '239063f4-670d-4aeb-fe83-12706dc4d900',
      '087746cc-d46c-44b2-5295-703b1b38d700',
    ],
    features: [
      { label: 'Dual-texture hard shell' },
      { label: '360° spinner wheels' },
      { label: 'Telescopic handle' },
      { label: 'Compression straps inside' },
      { label: 'Zipped dividers' },
      { label: 'Cabin-friendly 20″ size' },
    ],
    variants: [
      { color: 'Grey',   colorHex: '#757575', images: ['239063f4-670d-4aeb-fe83-12706dc4d900', '087746cc-d46c-44b2-5295-703b1b38d700', 'eeec2f57-a7cd-4bf5-0d49-ff46cc15aa00'],   sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Silver', colorHex: '#BDBDBD', images: ['d0188be4-5f18-4d24-82cd-2f3f39b1b100', 'e62b4d59-68cb-4775-e350-0b21500dfc00', 'a368d05a-b2bf-4209-1533-d4f7b65f3900'], sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Black',  colorHex: '#212121', images: ['3152b806-d87f-4c67-7ce3-6bfa38f21f00', '6ec05fdd-6c43-4c8f-7ddd-d590ba80cd00', 'eab26875-f791-47d9-0b47-4767d886b800', 'fde31ce8-1492-4e70-6b8e-1c0a7e728100'],  sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Blue',   colorHex: '#1565C0', images: ['ef953353-42e2-4b24-e628-7996b543b200', 'c034b6ed-291c-49ec-10e3-2c7f3c24d900', '7f49dd09-6fae-4dff-42d9-b9c4dd252100'],   sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
    ],
  },

  // ── WeaveLux ─────────────────────────────────────────────────────────────
  {
    id: 'weavelux',
    metaTitle: 'WeaveLux Woven-Effect Hard Shell Spinner Luggage',
    metaDescription: 'A hard-shell spinner suitcase with a raised woven-effect shell and tan accent trims, in Cabin, Medium, and Large sizes.',
    keywords: ['woven effect hard shell suitcase', 'premium spinner luggage', 'tan accent luggage', '360 degree spinner suitcase', 'textured hard shell trolley'],
    name: 'WeaveLux',
    slug: 'weavelux',
    category: 'trolley',
    isFeatured: true,
    mrp: 14499,
    description:
      'A raised, interlaced pattern moulded into the shell itself gives WeaveLux the look of a woven material, without the fraying a real weave would risk on a baggage belt. Tan vertical trims and four dual-spinner wheels finish the case.',
    story: [
      'WeaveLux takes a texture usually reserved for handbags, a tight interlaced weave, and moulds it straight into a polycarbonate shell. The pattern catches light differently panel to panel, and does the practical work of hiding the fine scratches a shell picks up over a year of travel.',
      'Contrasting tan trims run the vertical edges, four dual-spinner wheels handle the movement, and a telescopic handle retracts flush when it is not needed. Cabin, Medium, and Large are sold on their own, so a weekend bag and a fortnight case can be built up one piece at a time.',
    ],
    highlights: [
      {
        heading: 'Woven into the shell, not printed on it',
        body: 'The interlaced pattern is moulded structure, not a surface print, so it stays sharp through the knocks a printed finish would eventually wear through.',
      },
      {
        heading: 'Built as a family',
        body: 'Cabin, Medium, and Large share the same finish and trim, so pieces bought a size at a time still travel as a matched set.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate, woven-effect finish' },
      { label: 'Sizes',    value: 'Cabin (20″) · Medium (24″) · Large (28″), sold individually' },
      { label: 'Wheels',   value: '4 dual-spinner 360° wheels' },
      { label: 'Handle',   value: 'Telescopic handle' },
      { label: 'Trim',     value: 'Contrasting tan vertical accents' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['51282f17-d034-4161-cf63-f45024a4f800'],
    features: [
      { label: 'Woven-effect hard shell' },
      { label: 'Contrasting tan trim' },
      { label: '360° dual-spinner wheels' },
      { label: 'Telescopic trolley handle' },
      { label: 'Reinforced corner guards' },
      { label: 'Full-perimeter zip closure' },
    ],
    variants: [
      {
        color: 'Warm Sand', colorHex: '#C9A66B',
        images: ['51282f17-d034-4161-cf63-f45024a4f800', '6ba827d5-4575-453f-7bcf-ee51d62f7d00', 'a9d6753d-7cad-44e4-b910-589c81d7c100'],
        sizes: [
          { size: 'Cabin',  price: 10099, stock: 1 },
          { size: 'Medium', price: 11649, stock: 1 },
          { size: 'Large',  price: 13550, stock: 3 },
        ],
      },
      {
        color: 'Midnight Blue', colorHex: '#1A2744',
        images: ['cdb97124-d55b-4111-134f-8e0a70d29e00', '9e368257-bda2-4fae-4a28-a59647a88e00', 'b4a547e5-fecd-45c0-fac0-eed98e552d00', '532bb80c-ca68-49e6-9e68-3b884b47f900'],
        sizes: [
          { size: 'Cabin',  price: 10099, stock: 1 },
          { size: 'Medium', price: 11649, stock: 1 },
          { size: 'Large',  price: 13550, stock: 3 },
        ],
      },
      {
        color: 'Tangy Black', colorHex: '#1C1B19',
        images: ['999a4b8a-1761-43ba-82f1-80839d784200', '1b0f392d-1c65-4852-83f1-242d3d7a4900', 'a8be38f9-aaf4-4eef-f250-9bca74c42100'],
        sizes: [
          { size: 'Cabin',  price: 10099, stock: 1 },
          { size: 'Medium', price: 11649, stock: 1 },
          { size: 'Large',  price: 13550, stock: 3 },
        ],
      },
    ],
  },

  // ── WeaveLux Set of 3 ────────────────────────────────────────────────────
  {
    id: 'weavelux-set',
    metaTitle: 'WeaveLux Set of 3 Woven-Effect Hard Shell Luggage',
    metaDescription: 'The WeaveLux Cabin, Medium, and Large suitcases bundled as a matched set, with a woven-effect shell and tan accent trims.',
    keywords: ['luggage set of 3', 'woven effect hard shell suitcase', 'matched luggage set', 'premium spinner luggage', 'family travel luggage set'],
    name: 'WeaveLux Set of 3',
    slug: 'weavelux-set',
    category: 'set',
    description:
      'Cabin, Medium, and Large WeaveLux cases, bundled as one matched set so a solo trip, a two-person holiday, and a family departure all draw from the same woven-effect shell and tan trim.',
    story: [
      'Buying WeaveLux as a set is the same case in three sizes, priced and packed together, so the cabin bag that carries a laptop through security matches the check-in piece that follows it into the hold.',
    ],
    highlights: [
      {
        heading: 'One finish, three sizes',
        body: 'Cabin, Medium, and Large arrive with identical woven-effect shells and tan trim, so nothing in the set looks like an afterthought purchase.',
      },
      {
        heading: 'Built as a family',
        body: 'Four dual-spinner wheels and a telescopic handle on every piece keep the set moving the same way regardless of which one is doing the travelling.',
      },
    ],
    specs: [
      { label: 'Shell',  value: 'Polycarbonate, woven-effect finish' },
      { label: 'Set',    value: 'Cabin (20″) · Medium (24″) · Large (28″)' },
      { label: 'Wheels', value: '4 dual-spinner 360° wheels per case' },
      { label: 'Handle', value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['51282f17-d034-4161-cf63-f45024a4f800'],
    features: [
      { label: 'Complete 3-piece luggage set' },
      { label: 'Woven-effect hard shell' },
      { label: 'Contrasting tan trim' },
      { label: '360° dual-spinner wheels' },
      { label: 'Telescopic trolley handle' },
    ],
    variants: [
      { color: 'Warm Sand',     colorHex: '#C9A66B', images: ['51282f17-d034-4161-cf63-f45024a4f800', '6ba827d5-4575-453f-7bcf-ee51d62f7d00', 'a9d6753d-7cad-44e4-b910-589c81d7c100'],     sizes: [{ size: 'Set of 3', price: 33699, stock: 1 }] },
      { color: 'Midnight Blue', colorHex: '#1A2744', images: ['cdb97124-d55b-4111-134f-8e0a70d29e00', '9e368257-bda2-4fae-4a28-a59647a88e00', 'b4a547e5-fecd-45c0-fac0-eed98e552d00', '532bb80c-ca68-49e6-9e68-3b884b47f900'], sizes: [{ size: 'Set of 3', price: 33699, stock: 1 }] },
      { color: 'Tangy Black',   colorHex: '#1C1B19', images: ['999a4b8a-1761-43ba-82f1-80839d784200', '1b0f392d-1c65-4852-83f1-242d3d7a4900', 'a8be38f9-aaf4-4eef-f250-9bca74c42100'],   sizes: [{ size: 'Set of 3', price: 33699, stock: 1 }] },
    ],
  },

  // ── AeroShield Backpack ──────────────────────────────────────────────────
  {
    id: 'aeroshield-backpack',
    metaTitle: 'AeroShield Hard Shell Business Backpack',
    metaDescription: 'A structured hard-shell backpack with a padded laptop compartment, breathable back panel, and reinforced top handle.',
    keywords: ['hard shell backpack', 'protective laptop backpack', 'business travel backpack', 'structured office backpack', 'premium hard case backpack'],
    name: 'AeroShield',
    slug: 'aeroshield-backpack',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A firm, moulded front shell over a padded laptop compartment, so the backpack holds its shape on a hook or a train floor the way a soft one never does.',
    story: [
      'Most backpacks go soft the moment they are unpacked. AeroShield keeps its structure from a moulded front panel that shrugs off the press of a crowded overhead bin, while the padded interior compartment does the gentler work of keeping a laptop away from everything stacked around it.',
    ],
    highlights: [
      {
        heading: 'A shell that holds its shape',
        body: 'The moulded front panel keeps AeroShield looking the same empty or full, standing upright on a desk or wedged into a train shelf.',
      },
      {
        heading: 'Built for a full workday',
        body: 'A padded back panel and adjustable straps carry the weight of a laptop and a full workday without digging in by the afternoon commute.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate, structured front panel' },
      { label: 'Size (12″)', value: '38.7 × 8.9 × 27.3 cm · approx. 1.1 kg' },
      { label: 'Interior', value: 'Padded laptop compartment · organiser pockets' },
      { label: 'Carry',    value: 'Padded adjustable straps · reinforced top handle' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['c2101a36-983b-44bf-9e97-9e3270d5bf00', '5438f6fc-1ce9-462b-91bd-02cb545b8900'],
    features: [
      { label: 'Structured hard-shell front' },
      { label: 'Padded laptop compartment' },
      { label: 'Breathable back panel' },
      { label: 'Adjustable padded straps' },
      { label: 'Reinforced top handle' },
    ],
    variants: [
      {
        color: 'Tech White', colorHex: '#F5F3EC',
        images: ['c2101a36-983b-44bf-9e97-9e3270d5bf00', '5438f6fc-1ce9-462b-91bd-02cb545b8900', '7ce4fd31-4c1c-4921-7ad8-1a1c60328d00', 'f1afc58b-670d-4f3e-f0bf-9fe2983b9600'],
        sizes: [{ size: 'One Size', price: 9999, stock: 10 }],
      },
    ],
  },

  // ── TitanVault ───────────────────────────────────────────────────────────
  {
    id: 'titanvault',
    metaTitle: 'TitanVault Industrial Hard Shell Spinner Suitcase',
    metaDescription: 'An industrial-styled hard-shell spinner suitcase with reinforced corner guards, a TSA-style combination lock, and 360° wheels.',
    keywords: ['industrial hard shell suitcase', 'TSA lock luggage', 'reinforced corner suitcase', '360 spinner suitcase', 'premium hard shell luggage'],
    name: 'TitanVault',
    slug: 'titanvault',
    category: 'trolley',
    isFeatured: true,
    mrp: 17999,
    description:
      'A geometric shell borrowed from industrial equipment rather than other luggage: a structured front panel, reinforced corner guards, and a TSA-style combination lock underneath a bold, matte finish.',
    story: [
      'TitanVault looks like it was designed by someone thinking about shipping containers rather than suitcases, and that is closer to the truth than most travel cases will admit. The structured front panel and squared-off corner guards read as protection first, styling second, in a way a rounded shell can never quite manage.',
      'A TSA-style combination lock stands up to inspection without needing to be cut open, and four dual-spinner wheels bring the same smooth movement as the rest of the range to a case built to look like it can take a harder hit.',
    ],
    highlights: [
      {
        heading: 'Protection that looks like protection',
        body: 'The reinforced corner guards and structured front panel are sized and shaped to actually take an impact, not just suggest one.',
      },
      {
        heading: 'Opens for inspection, not for anyone else',
        body: 'The TSA-style combination lock is built for airport screening without needing to be forced, so a security check never means a broken lock on arrival.',
      },
    ],
    specs: [
      { label: 'Shell',  value: 'Polycarbonate, industrial-ribbed finish' },
      { label: 'Size',   value: '47 × 29 × 69 cm · approx. 6.1 kg' },
      { label: 'Lock',   value: 'TSA-style combination lock' },
      { label: 'Wheels', value: '360° dual-spinner wheels' },
      { label: 'Handle', value: 'Multi-stage telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['c65b2584-9f0e-41d3-438e-48ff791fba00'],
    features: [
      { label: 'Industrial-inspired hard shell' },
      { label: 'Reinforced corner guards' },
      { label: 'TSA-style combination lock' },
      { label: '360° dual-spinner wheels' },
      { label: 'Multi-stage telescopic handle' },
      { label: 'Compression straps inside' },
    ],
    variants: [
      { color: 'Patriot Red',   colorHex: '#C62828', images: ['c65b2584-9f0e-41d3-438e-48ff791fba00', 'eac1e53c-b7e7-42ad-ff4c-4dc3d4257900', '85011261-da46-45f7-9d74-49862749fa00'],   sizes: [{ size: 'Set of 2', price: 12999, stock: 10 }] },
      { color: 'Moon Yellow',   colorHex: '#F2C14E', images: ['57c3c625-476f-46a0-7ab9-e4a9e78f3400', 'e505ac12-5129-4cc8-b6e3-6cbe2e981700', '52d6f4e5-9263-4545-be3e-f15031421600'],   sizes: [{ size: 'Set of 2', price: 12999, stock: 10 }] },
      { color: 'Emerald Green', colorHex: '#2E7D32', images: ['269df6e5-2f49-4976-d1bf-bc4d11a89f00', '73eb8f08-ee25-4f24-eb39-8a1ab10e1200', '0d5d3305-9cc0-49dd-dfdc-127a3d728700', '4e525147-8d50-4dc6-b813-01ffd8ebe900'], sizes: [{ size: 'Set of 2', price: 12999, stock: 10 }] },
    ],
  },

  // ── Alpha ────────────────────────────────────────────────────────────────
  {
    id: 'alpha',
    metaTitle: 'Alpha 20″ Lightweight Cabin Trolley',
    metaDescription: 'A minimalist 20-inch hard-shell cabin trolley with a matte finish, combination lock, and 360° spinner wheels.',
    keywords: ['lightweight cabin trolley', 'minimalist hard shell suitcase', 'matte finish luggage', '20 inch carry-on suitcase', 'combination lock trolley bag'],
    name: 'Alpha',
    slug: 'alpha',
    category: 'trolley',
    description:
      'A cabin trolley stripped back to a plain geometric shell and a matte finish, for anyone whose idea of a good travel case is one that does not ask to be noticed.',
    story: [
      'Alpha is the case for a traveller who has already decided what they think about decorated luggage. A flat matte finish and a simple geometric shell keep the design out of the way, while a combination lock and 360° spinner wheels handle everything a case is actually for.',
    ],
    highlights: [
      {
        heading: 'Deliberately plain',
        body: 'A flat matte shell with no applied texture or pattern, built for travellers who want their case quiet rather than decorated.',
      },
      {
        heading: 'Light enough to forget',
        body: 'A polypropylene shell keeps Alpha under 2.6 kg empty, so the case barely counts against your own carry-on allowance.',
      },
    ],
    specs: [
      { label: 'Shell',  value: 'Polypropylene, matte finish' },
      { label: 'Size (20″)', value: '37 × 22 × 57.5 cm · approx. 2.6 kg' },
      { label: 'Lock',   value: '3-digit combination lock' },
      { label: 'Wheels', value: '360° spinner wheels' },
      { label: 'Handle', value: 'Telescopic handle' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['c4f2881f-6061-45ec-001c-acc4cc29e800', 'cc710a2e-a586-41a9-95e0-2f9845c3eb00'],
    features: [
      { label: 'Lightweight polypropylene shell' },
      { label: 'Matte finish' },
      { label: 'Combination lock' },
      { label: '360° spinner wheels' },
      { label: 'Telescopic handle' },
    ],
    variants: [
      {
        color: 'Grey', colorHex: '#757575',
        images: ['c4f2881f-6061-45ec-001c-acc4cc29e800', 'cc710a2e-a586-41a9-95e0-2f9845c3eb00', '7eefb6c1-aaa1-4717-9336-6d88b803cd00', 'd3f7781f-4d8a-49a4-e42f-f5cc5c69fe00', 'e0f322cc-c6e1-49e1-f294-0b10c47c0d00', 'd9ec84fc-7c46-43e7-5be2-3c2aeddc0b00'],
        sizes: [{ size: 'Cabin', price: 7999, stock: 50 }],
      },
    ],
  },

  // ── RidgeLine ────────────────────────────────────────────────────────────
  {
    id: 'ridgeline',
    metaTitle: 'RidgeLine Ridged Hard Shell Spinner Suitcase',
    metaDescription: 'A hard-shell spinner suitcase with a ridged shell, combination lock, and 360° wheels, in Cabin, Medium, and Large sizes.',
    keywords: ['ridged hard shell suitcase', 'combination lock luggage', '360 spinner suitcase', 'lightweight trolley bag', 'coordinated luggage collection'],
    name: 'RidgeLine',
    slug: 'ridgeline',
    category: 'trolley',
    description:
      'Horizontal ridges run the width of the shell, reinforcing the surface as much as decorating it, over a combination lock and 360° spinner wheels built into every size.',
    story: [
      'RidgeLine keeps its ridges functional first: the flowing horizontal lines add grip to the surface and stiffness to the panel, with the styling arriving as a side effect rather than the point. Cabin, Medium, and Large are sold individually, so the case can grow with however far the trip goes.',
    ],
    highlights: [
      {
        heading: 'Ridges that do double duty',
        body: 'The horizontal ridge pattern reinforces the shell against flex as much as it defines the look, function and finish from the same mould.',
      },
      {
        heading: 'Sized to the trip',
        body: 'Cabin, Medium, and Large are each sold on their own, so a single weekend case can grow into a full set exactly when it is needed.',
      },
    ],
    specs: [
      { label: 'Shell',  value: 'ABS + Polycarbonate, ridged finish' },
      { label: 'Sizes',  value: 'Cabin (20″) · Medium (24″) · Large (28″), sold individually' },
      { label: 'Lock',   value: 'Built-in combination lock' },
      { label: 'Wheels', value: '360° dual-spinner wheels' },
      { label: 'Handle', value: 'Telescopic handle' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['c6c976ed-5861-4fd9-c404-a898c1152b00', '4d56df27-f2c9-4eca-5348-808cf5b47600'],
    features: [
      { label: 'Ridged hard shell' },
      { label: 'Built-in combination lock' },
      { label: '360° dual-spinner wheels' },
      { label: 'Telescopic trolley handle' },
      { label: 'Reinforced corner protection' },
    ],
    variants: [
      {
        color: 'Blue', colorHex: '#1565C0',
        images: ['c6c976ed-5861-4fd9-c404-a898c1152b00', '4d56df27-f2c9-4eca-5348-808cf5b47600', '001c2c97-f3cc-4be6-a6c7-20205d9df900', 'd1b169d9-6aa0-4ad1-fbf1-f96f1cc34900', '9bcf3777-f8e5-4e3a-9bc4-bd3729e51700', '713936be-551d-4ccf-cd97-a23a5b1ffd00'],
        sizes: [
          { size: 'Cabin',  price: 8016,  stock: 25 },
          { size: 'Medium', price: 10298, stock: 25 },
          { size: 'Large',  price: 12242, stock: 25 },
        ],
      },
    ],
  },

  // ── RidgeLine Set of 3 ───────────────────────────────────────────────────
  {
    id: 'ridgeline-set',
    metaTitle: 'RidgeLine Set of 3 Hard Shell Spinner Luggage',
    metaDescription: 'The RidgeLine Cabin, Medium, and Large suitcases bundled as a matched set, with a ridged shell and combination lock.',
    keywords: ['luggage set of 3', 'ridged hard shell suitcase', 'matched luggage set', 'combination lock luggage set', 'family travel luggage'],
    name: 'RidgeLine Set of 3',
    slug: 'ridgeline-set',
    category: 'set',
    description:
      'Cabin, Medium, and Large RidgeLine cases, bundled together so a short trip and a long one both travel under the same ridged shell.',
    story: [
      'The RidgeLine set is the same case bought once in three sizes rather than three separate decisions, each carrying an identical combination lock and 360° spinner wheels underneath its ridged shell.',
    ],
    highlights: [
      {
        heading: 'One shell, three sizes',
        body: 'Cabin, Medium, and Large share the same ridged finish and hardware, so the set reads as one line rather than three mismatched purchases.',
      },
      {
        heading: 'Locked and steady',
        body: 'Every case in the set carries its own combination lock and 360° dual-spinner wheels, so nothing in the family travels differently from the rest.',
      },
    ],
    specs: [
      { label: 'Shell',  value: 'ABS + Polycarbonate, ridged finish' },
      { label: 'Set',    value: 'Cabin (20″) · Medium (24″) · Large (28″)' },
      { label: 'Lock',   value: 'Built-in combination lock per case' },
      { label: 'Wheels', value: '360° dual-spinner wheels per case' },
    ],
    warranty:
      '3-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['c6c976ed-5861-4fd9-c404-a898c1152b00', '4d56df27-f2c9-4eca-5348-808cf5b47600'],
    features: [
      { label: 'Complete 3-piece luggage set' },
      { label: 'Ridged hard shell' },
      { label: 'Built-in combination lock' },
      { label: '360° dual-spinner wheels' },
      { label: 'Telescopic trolley handle' },
    ],
    variants: [
      {
        color: 'Blue', colorHex: '#1565C0',
        images: ['c6c976ed-5861-4fd9-c404-a898c1152b00', '4d56df27-f2c9-4eca-5348-808cf5b47600', '001c2c97-f3cc-4be6-a6c7-20205d9df900', 'd1b169d9-6aa0-4ad1-fbf1-f96f1cc34900', '9bcf3777-f8e5-4e3a-9bc4-bd3729e51700', '713936be-551d-4ccf-cd97-a23a5b1ffd00'],
        sizes: [{ size: 'Set of 3', price: 29655, stock: 25 }],
      },
    ],
  },

  // ── TraveX ───────────────────────────────────────────────────────────────
  {
    id: 'travex',
    metaTitle: 'TraveX Multi-Compartment Travel Backpack',
    metaDescription: 'A ripstop travel backpack with multiple compartments, adjustable compression straps, and a breathable back panel.',
    keywords: ['multi compartment travel backpack', 'compression strap backpack', 'lightweight outdoor backpack', 'breathable back panel backpack', 'everyday travel backpack'],
    name: 'TraveX',
    slug: 'travex',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A ripstop backpack built around the days that do not fit a laptop bag: side compression straps pull it in for a short trip, and a diagonal quick-access pocket keeps a phone or a boarding pass out of the main compartment.',
    story: [
      'TraveX is sized for the trip between a commute and a proper holiday, the overnight, the weekend, the day hike that turns into a night away. Side compression straps with quick-release buckles pull the pack in when it is half empty, so it never rides loose just because it is not fully packed.',
    ],
    highlights: [
      {
        heading: 'Shrinks with the trip',
        body: 'Quick-release compression straps pull the pack in when it is not fully loaded, keeping a half-packed bag from swinging loose on your back.',
      },
      {
        heading: 'The diagonal pocket does the work',
        body: 'A quick-access diagonal zip keeps keys, cards, and earphones reachable without opening the main compartment at a platform or a gate.',
      },
    ],
    specs: [
      { label: 'Material', value: 'Ripstop-style woven fabric' },
      { label: 'Size (19″)', value: '32 × 20 × 47 cm · approx. 0.5 kg' },
      { label: 'Interior',   value: 'Multiple zippered compartments · diagonal quick-access pocket' },
      { label: 'Carry',      value: 'Adjustable padded straps · compression straps' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the straps and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['58780ab8-b788-433c-b14a-5b627376c100', '638a5401-8349-4c6f-d29e-5cf68a6b9500'],
    features: [
      { label: 'Ripstop-style woven exterior' },
      { label: 'Multiple zippered compartments' },
      { label: 'Diagonal quick-access pocket' },
      { label: 'Adjustable compression straps' },
      { label: 'Breathable padded back panel' },
      { label: 'Reflective strap detailing' },
    ],
    variants: [
      { color: 'Black',  colorHex: '#212121', images: ['58780ab8-b788-433c-b14a-5b627376c100', '638a5401-8349-4c6f-d29e-5cf68a6b9500', 'b1f162f8-448f-4cca-339c-210b11eec600', '95f28829-5654-4ffa-42d3-aeb4c29ef100'], sizes: [{ size: 'One Size', price: 4999, stock: 25 }] },
      { color: 'Blue',   colorHex: '#1565C0', images: ['2d059c40-0098-4cf7-ec4b-2f8fdf3d3200', '7b0672f4-f6b0-483e-7d82-ec52a1731500', 'cba779a4-e70a-466a-06f0-1412ef18eb00'],  sizes: [{ size: 'One Size', price: 4999, stock: 25 }] },
      { color: 'Maroon', colorHex: '#800000', images: ['285f7fc2-2ed6-4270-2586-ab61ee394c00', '779e4952-b2c2-46e4-a026-66031fe25900', 'c2accb39-ba42-4c03-c692-224783e92600'], sizes: [{ size: 'One Size', price: 4999, stock: 25 }] },
    ],
  },

  // ── TitaniumEdge Briefcase ───────────────────────────────────────────────
  {
    id: 'titaniumedge-briefcase',
    metaTitle: 'TitaniumEdge Hard Shell Executive Briefcase',
    metaDescription: 'A hard-shell briefcase with a diagonal ribbed metallic finish, detachable shoulder strap, and reinforced carry handle.',
    keywords: ['hard shell executive briefcase', 'metallic finish briefcase', 'detachable strap briefcase', 'lightweight office briefcase', 'premium document case'],
    name: 'TitaniumEdge Briefcase',
    slug: 'titaniumedge-briefcase',
    category: 'office-bag',
    hideSizeSelector: true,
    description:
      'A diagonal ribbed shell in metallic silver, built to carry a laptop and a day of documents with a detachable strap for the walk between meetings.',
    story: [
      'TitaniumEdge takes its diagonal ribbing at an angle rather than the usual horizontal or vertical, which is a small change that keeps a metallic-finish briefcase from reading as one more grey box among identical ones. A detachable shoulder strap turns it crossbody the moment both hands are needed elsewhere.',
    ],
    highlights: [
      {
        heading: 'An angle instead of a grid',
        body: 'The diagonal ribbing across the metallic shell breaks up the surface at a slant, distinct at a glance from the horizontal-ribbed briefcases around it.',
      },
      {
        heading: 'Two ways to carry it',
        body: 'The reinforced top handle works for a quick hand-carry; the detachable strap takes over for the longer walk through a terminal.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS, diagonal ribbed metallic finish' },
      { label: 'Size (14″)', value: '39 × 9 × 30 cm · approx. 1.2 kg' },
      { label: 'Interior', value: 'Laptop and tablet compartment · document sleeves' },
      { label: 'Carry',    value: 'Reinforced top handle · detachable shoulder strap' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['6cf3ba78-e6d8-4183-dc8c-f8a0d255f000', '2325ea79-53e1-4df1-b066-a9c9b08a3a00'],
    features: [
      { label: 'Diagonal ribbed metallic finish' },
      { label: 'Impact-resistant hard shell' },
      { label: 'Laptop and tablet compartment' },
      { label: 'Reinforced carry handle' },
      { label: 'Detachable shoulder strap' },
    ],
    variants: [
      {
        color: 'Silver', colorHex: '#BDBDBD',
        images: ['6cf3ba78-e6d8-4183-dc8c-f8a0d255f000', '2325ea79-53e1-4df1-b066-a9c9b08a3a00', 'b306ec65-0681-4e40-5666-87a14a71ca00', '3a4caf97-0829-4c66-ffdd-41ad25c3a700', '8bf6d2fe-9619-4513-8938-68afd661e200', 'cbb79ef0-9c6c-422a-c1d7-e4b21a3e3500'],
        sizes: [{ size: 'One Size', price: 9999, stock: 10 }],
      },
    ],
  },

  // ── TitaniumEdge Backpack ────────────────────────────────────────────────
  {
    id: 'titaniumedge-backpack',
    metaTitle: 'TitaniumEdge Hard Shell Executive Backpack',
    metaDescription: 'A hard-shell backpack with a diagonal ribbed metallic finish, breathable back panel, and dedicated laptop compartment.',
    keywords: ['hard shell executive backpack', 'metallic finish backpack', 'diagonal ribbed backpack', 'business travel backpack', 'premium laptop backpack'],
    name: 'TitaniumEdge Backpack',
    slug: 'titaniumedge-backpack',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'The TitaniumEdge finish on a backpack frame: diagonal ribbed metallic silver, a dedicated laptop compartment, and straps built for a full workday rather than a short walk.',
    story: [
      'Where the TitaniumEdge briefcase carries by hand, this one carries on both shoulders, same diagonal ribbed shell, same protective instinct, redistributed across padded straps and a breathable back panel built for a longer commute.',
    ],
    highlights: [
      {
        heading: 'Same shell, different carry',
        body: 'The diagonal ribbed metallic finish that defines the TitaniumEdge briefcase carries over here, structured for two shoulders instead of one hand.',
      },
      {
        heading: 'Built for the whole commute',
        body: 'Padded adjustable straps and a breathable back panel are sized for a full day, not just the walk from the car to the office door.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS, diagonal ribbed metallic finish' },
      { label: 'Size (18″)', value: '32.4 × 20.3 × 48.3 cm · approx. 2 kg' },
      { label: 'Interior', value: 'Dedicated laptop compartment · organiser pockets' },
      { label: 'Carry',    value: 'Padded adjustable shoulder straps' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['d47f241e-70b1-4c65-b29b-ae93be1c2500', '3d0c2378-d111-45d9-7fe9-47fda2df0b00'],
    features: [
      { label: 'Diagonal ribbed metallic finish' },
      { label: 'Impact-resistant hard shell' },
      { label: 'Dedicated laptop compartment' },
      { label: 'Padded adjustable shoulder straps' },
      { label: 'Breathable back panel' },
    ],
    variants: [
      {
        color: 'Silver', colorHex: '#BDBDBD',
        images: ['d47f241e-70b1-4c65-b29b-ae93be1c2500', '3d0c2378-d111-45d9-7fe9-47fda2df0b00', '7abfefa2-818e-4a8c-72b6-2c8ffb572f00', 'f1c7f7e1-f931-4054-de4f-c30e92a6c100', 'f0303fb0-bda6-4c9c-2895-926a24fd1a00', '0b0f78f4-3fa8-4bad-7909-e93acb10cc00', 'a83518f8-1147-483c-bc69-fae193493f00'],
        sizes: [{ size: 'One Size', price: 9999, stock: 10 }],
      },
    ],
  },

  // ── AeroFrame ────────────────────────────────────────────────────────────
  {
    id: 'aeroframe',
    metaTitle: 'AeroFrame Hard Shell Laptop Backpack',
    metaDescription: 'A structured metallic hard-shell backpack with vertical rib detailing, padded straps, and a zip-around main compartment.',
    keywords: ['hard shell laptop backpack', 'metallic silver backpack', 'structured office backpack', 'zip around backpack', 'padded shoulder strap backpack'],
    name: 'AeroFrame',
    slug: 'aeroframe',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A clean rectangular shell in metallic silver, with a vertically ribbed lower panel that reinforces the front against the everyday press of a full bag.',
    story: [
      'AeroFrame keeps its detailing low, a ribbed lower panel under a plain metallic upper shell, so the backpack reads as considered rather than busy. A full zip-around closure opens the main compartment flat for the days that need it, and folds back into a clean rectangle for the days that do not.',
    ],
    highlights: [
      {
        heading: 'Detail kept to one panel',
        body: 'The vertical ribbing sits only on the lower front panel, leaving the rest of the metallic shell plain and letting the one detail actually read as a detail.',
      },
      {
        heading: 'Opens all the way round',
        body: 'A full zip-around closure gives complete access to the main compartment, rather than the narrow top-loading gap most backpacks settle for.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Polycarbonate + ABS, metallic silver finish' },
      { label: 'Size (19″)', value: '32.4 × 20.3 × 48.3 cm · approx. 2 kg' },
      { label: 'Closure',  value: 'Full zip-around opening' },
      { label: 'Carry',    value: 'Padded adjustable straps · top grab handle' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['45dac148-397f-4e0b-583b-029371ac9f00', 'c13c42ca-6431-427f-a092-43171750fb00'],
    features: [
      { label: 'Structured hard-shell body' },
      { label: 'Vertical rib detailing' },
      { label: 'Full zip-around closure' },
      { label: 'Padded adjustable straps' },
      { label: 'Top grab handle' },
    ],
    variants: [
      {
        color: 'Silver', colorHex: '#BDBDBD',
        images: ['45dac148-397f-4e0b-583b-029371ac9f00', 'c13c42ca-6431-427f-a092-43171750fb00', '47687b74-6a30-4524-59d0-03a7f1f66600', '7debe021-dd88-48f1-5e93-3b84d4a3f600', 'd3ef9cf7-f1d7-40c8-3522-cba88014dc00', '64351003-1376-410c-a59e-5f6156151d00'],
        sizes: [{ size: 'One Size', price: 9999, stock: 15 }],
      },
    ],
  },

  // ── MotoStripe ───────────────────────────────────────────────────────────
  {
    id: 'motostripe',
    metaTitle: 'MotoStripe 20″ Sporty Cabin Trolley',
    metaDescription: 'A sporty 20-inch hard-shell cabin trolley with diagonal racing-inspired striping, 360° wheels, and a lightweight build.',
    keywords: ['sporty hard shell suitcase', 'diagonal stripe luggage', '20 inch cabin trolley', '360 spinner suitcase', 'lightweight carry-on'],
    name: 'MotoStripe',
    slug: 'motostripe',
    category: 'trolley',
    isFeatured: true,
    description:
      'A diagonal stripe across the shell, borrowed from racing liveries rather than other luggage, on a cabin case built to move as fast as it looks.',
    story: [
      'MotoStripe commits to its diagonal the way a racing livery does, one confident line across the shell instead of a symmetrical pattern trying to please everyone. Underneath, it is still built like every cabin case in the range: 360° spinner wheels, a lightweight shell, and an interior organised for a quick pack.',
    ],
    highlights: [
      {
        heading: 'A stripe with a direction',
        body: 'The diagonal accent runs the same way across every colourway, giving MotoStripe a consistent visual identity instead of a pattern that changes meaning by colour.',
      },
      {
        heading: 'Light enough to match the look',
        body: 'A lightweight hard shell keeps the case as quick to lift into an overhead bin as its styling suggests it should be.',
      },
    ],
    specs: [
      { label: 'Shell',   value: 'Polycarbonate + ABS' },
      { label: 'Size (20″)', value: '37.5 × 23.5 × 55.9 cm · approx. 3.5 kg' },
      { label: 'Interior', value: 'Compression straps · zipped mesh pockets' },
      { label: 'Wheels',  value: '360° spinner wheels' },
      { label: 'Handle',  value: 'Telescopic handle' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, wheels, telescopic handle, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['768fef10-1a64-4df7-a500-6be63e2b4a00', 'b327cf2d-b09b-4cfe-9d8b-77c2e1eab600'],
    features: [
      { label: 'Diagonal racing-inspired stripe' },
      { label: '360° spinner wheels' },
      { label: 'Telescopic handle' },
      { label: 'Compression straps inside' },
      { label: 'Zipped mesh pockets' },
      { label: 'Lightweight cabin-friendly build' },
    ],
    variants: [
      { color: 'Blue',          colorHex: '#1565C0', images: ['717758d8-2ad4-4103-d569-071915e04e00', '8647e007-4bfb-424a-6f04-fa5425aac500'],          sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Navy Blue',     colorHex: '#1A2744', images: ['18a8e8e0-91d1-4a8c-c581-0fd562560500', '5c1eb182-4766-4bcb-b192-9e4d466e7b00'],      sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Grey',          colorHex: '#757575', images: ['f4931a8c-aef4-4624-3339-1eac118ddf00', '1c4bb8dd-4c23-435f-663d-4cb3453d5900'],          sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Silver',        colorHex: '#BDBDBD', images: ['e3135db9-dc52-4459-d071-1c2ec506b800', '50d9e5e5-fe2d-42b8-b2a3-7d3bfc55a500'],        sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Green',         colorHex: '#2E7D32', images: ['4c86a538-4499-4c16-4e16-bf963b162000', '77ef410c-2753-49f8-0366-dc487ac3c500'],         sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Military Green',colorHex: '#4B5320', images: ['524e7146-f093-40a7-e74a-45006c4bb400', '880e6d3d-6b0a-4603-5b5f-98ee6f517b00'], sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
      { color: 'Black',         colorHex: '#212121', images: ['768fef10-1a64-4df7-a500-6be63e2b4a00', 'b327cf2d-b09b-4cfe-9d8b-77c2e1eab600', '5f3f8b75-3682-4ac8-ace4-6edeb7641a00'], sizes: [{ size: 'Cabin', price: 8899, stock: 50 }] },
    ],
  },

  // ── AuraShell ────────────────────────────────────────────────────────────
  {
    id: 'aurashell',
    metaTitle: 'AuraShell Hard Shell Vanity Case',
    metaDescription: 'A handbag-inspired hard-shell vanity case with dual padded handles, a rear trolley sleeve, and a zip-around closure.',
    keywords: ['hard shell vanity case', 'handbag inspired cosmetic case', 'trolley sleeve vanity case', 'travel cosmetic organiser', 'structured toiletry bag'],
    name: 'AuraShell',
    slug: 'aurashell',
    category: 'vanity',
    isFeatured: true,
    hideSizeGuide: true,
    description:
      'A vanity case shaped like a handbag rather than a box: gently recessed contours, rounded corners, and dual padded handles over the same hard-shell protection as the rest of the range.',
    story: [
      'AuraShell starts from a handbag silhouette rather than a utility case, sculpted contours and rounded corners where most vanity cases just shrink a suitcase down. It still does the same job underneath: a rigid shell over makeup, skincare, and toiletries, with a rear trolley sleeve for the walk through the airport.',
      'Two padded top handles with visible contrast stitching carry it by hand when it is not riding the trolley, and protective feet at the base keep it stable set down on a counter or a train floor.',
    ],
    highlights: [
      {
        heading: 'Built like a handbag, not a box',
        body: 'Recessed contours and rounded corners give AuraShell a fashion silhouette that happens to also be a hard-shell case.',
      },
      {
        heading: 'Stitched, not just moulded',
        body: 'Visible contrast stitching around the handle attachments adds a tailored detail a plain moulded case would skip.',
      },
      {
        heading: 'Stands on its own',
        body: 'Protective feet at the base keep AuraShell upright and stable wherever it is set down, counter, floor, or overhead bin.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS' },
      { label: 'Size (14″)', value: '31 × 19.5 × 29 cm · approx. 2 kg' },
      { label: 'Closure',    value: 'Zip-around closure' },
      { label: 'Carry',      value: 'Dual padded top handles' },
      { label: 'Attachment', value: 'Rear trolley sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['1298d867-50cf-46fe-3999-d26a5db25c00', '50274325-8a3c-40d0-10d8-c743561cba00'],
    features: [
      { label: 'Handbag-inspired hard shell' },
      { label: 'Zip-around closure' },
      { label: 'Dual padded top handles' },
      { label: 'Rear trolley sleeve' },
      { label: 'Protective base feet' },
      { label: 'Contrast stitching detail' },
    ],
    variants: [
      { color: 'Purple',     colorHex: '#7B5EA7', images: ['1298d867-50cf-46fe-3999-d26a5db25c00', '50274325-8a3c-40d0-10d8-c743561cba00'], sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
      { color: 'Rose Gold',  colorHex: '#B76E79', images: ['6a9386c8-b371-469a-461c-1d01d2475900', '530d5e4a-2b54-46a4-9ca2-146253d86300'],  sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
      { color: 'Tender Blue',colorHex: '#89CFF0', images: ['8486cde8-f996-4176-2334-b6d89e51df00', '007e284e-9e98-449f-214d-4140d5b51100'], sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
      { color: 'Red',        colorHex: '#C62828', images: ['50501b7d-a529-4d2f-8905-270b671d7a00', 'e44b6ed3-fceb-4428-eaeb-280b063d0100'],        sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
      { color: 'Navy Blue',  colorHex: '#1A2744', images: ['9f9308a9-d29c-4803-3abd-9604d029f700', '183e39e2-f17f-4df6-c695-a5b52d3a9a00'],  sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
      { color: 'Grey',       colorHex: '#757575', images: ['baad860a-7951-491c-74cf-9619f7c72100', 'f06c500d-899f-404a-4cd4-fc554fc51500'],       sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
      { color: 'Black',      colorHex: '#212121', images: ['54a3cf1a-c9c0-439f-6d63-78bdbf725400', 'ec43d86a-e1eb-4370-1d8a-d0715186fa00', '9fbc6381-c01d-4ec8-47c7-4634751b0600'],      sizes: [{ size: '14 Inch', price: 3799, stock: 15 }] },
    ],
  },

  // ── CoreBrief ────────────────────────────────────────────────────────────
  {
    id: 'corebrief',
    metaTitle: 'CoreBrief Hard Shell Briefcase',
    metaDescription: 'A hard-shell briefcase with an aluminium carry handle, detachable shoulder strap, and dedicated laptop storage.',
    keywords: ['hard shell briefcase', 'aluminium handle briefcase', 'laptop briefcase organizer', 'business travel case', 'lightweight executive briefcase'],
    name: 'CoreBrief',
    slug: 'corebrief',
    category: 'office-bag',
    hideSizeSelector: true,
    description:
      'A brushed-silver hard-shell briefcase with an aluminium carry handle, built around a laptop compartment and enough organiser pockets to keep a workday out of a tangle.',
    story: [
      'CoreBrief keeps its one indulgence visible: an aluminium carry handle instead of the usual moulded plastic grip, cool and solid in the hand the way the rest of a hard-shell briefcase rarely is. Everything underneath stays practical, a dedicated laptop compartment and organiser pockets sized for chargers, notebooks, and the small things a workday accumulates.',
    ],
    highlights: [
      {
        heading: 'One deliberate upgrade',
        body: 'The aluminium carry handle stands in for the moulded plastic grip most hard-shell briefcases use, a small material change that changes how the whole case feels in hand.',
      },
      {
        heading: 'Everything has a pocket',
        body: 'Dedicated compartments for a laptop, tablet, chargers, and documents keep a full workday from turning into a single loose pile.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS, brushed finish' },
      { label: 'Size (12″)', value: '39 × 9 × 30 cm · approx. 1.1 kg' },
      { label: 'Interior',   value: 'Laptop and tablet compartment · organiser pockets' },
      { label: 'Carry',      value: 'Aluminium carry handle · detachable shoulder strap' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['1b338747-dcc1-4636-a742-9ead924b2900', '7e79abab-bc03-4929-bad2-689bf1406e00'],
    features: [
      { label: 'Hard-shell protection' },
      { label: 'Aluminium carry handle' },
      { label: 'Dedicated laptop storage' },
      { label: 'Multiple organiser pockets' },
      { label: 'Detachable shoulder strap' },
    ],
    variants: [
      {
        color: 'Brushed Silver', colorHex: '#B0B4B8',
        images: ['1b338747-dcc1-4636-a742-9ead924b2900', '7e79abab-bc03-4929-bad2-689bf1406e00', '49c5cda7-78bb-4898-7118-24b1487e3400', '9d108f30-85da-4ccf-37f4-7916be1b0100', '57b20b07-ce45-49b4-2314-fcf135d5d100', '8514aa95-461a-4d71-8ef7-6551c6c55200'],
        sizes: [{ size: 'One Size', price: 6099, stock: 50 }],
      },
    ],
  },

  // ── GlidePod ─────────────────────────────────────────────────────────────
  {
    id: 'glidepod',
    metaTitle: 'GlidePod Compact Beauty Vanity Case',
    metaDescription: 'A compact hard-shell vanity case with a diagonal-texture finish, zippered mesh organiser, and a trolley sleeve.',
    keywords: ['compact vanity case', 'diagonal texture hard shell', 'trolley sleeve cosmetic case', 'travel beauty organizer', 'lightweight vanity case'],
    name: 'GlidePod',
    slug: 'glidepod',
    category: 'vanity',
    description:
      'A compact vanity case with a diagonal-texture shell, sized to hold cosmetics and skincare without adding real bulk to a suitcase already doing the heavy lifting.',
    story: [
      'GlidePod stays deliberately small, a compact hard shell rather than a scaled-down suitcase, so it slots into whatever space a case has left rather than demanding its own. A zippered mesh organiser and the integrated trolley sleeve carry over from the rest of the vanity range underneath its diagonal-texture finish.',
    ],
    highlights: [
      {
        heading: 'Sized to fit in, not stand out',
        body: 'A genuinely compact footprint means GlidePod slots into the gap left in a packed suitcase rather than needing its own dedicated space.',
      },
      {
        heading: 'Rides the trolley',
        body: 'The integrated trolley sleeve slides over a suitcase handle, so GlidePod moves through the airport without needing its own free hand.',
      },
    ],
    specs: [
      { label: 'Shell',      value: 'Polycarbonate + ABS, diagonal-texture finish' },
      { label: 'Size (11″)', value: '30 × 30 cm · approx. 0.76 kg' },
      { label: 'Interior',   value: 'Zippered mesh organiser' },
      { label: 'Attachment', value: 'Integrated trolley sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    isFeatured: false,
    hideSizeGuide: true,
    images: ['1aeb9ffc-25ee-4c1b-ece6-3f5e12b6a000'],
    features: [
      { label: 'Diagonal-texture hard shell' },
      { label: 'Zippered mesh organiser' },
      { label: 'Integrated trolley sleeve' },
      { label: 'Compact lightweight build' },
      { label: 'Scratch-resistant finish' },
    ],
    variants: [
      { color: 'Blue',   colorHex: '#1565C0', images: ['1aeb9ffc-25ee-4c1b-ece6-3f5e12b6a000', '28791354-7663-4ec2-a5c5-bbd833536000', '30c35d6e-fb57-4cff-7d34-7ce05ac8d300', '8a25c57e-4ebd-46a2-211e-b4eef9784600'],   sizes: [{ size: '11 Inch', price: 3999, stock: 50 }] },
      { color: 'Green',  colorHex: '#2E7D32', images: ['5403ef43-6529-4bcd-af2f-f75980974800', 'b42d8191-c2b3-4983-3730-eacce3978300', '5d652d47-9303-4bfa-5bd0-50344edcd300'],  sizes: [{ size: '11 Inch', price: 3999, stock: 50 }] },
      { color: 'Red',    colorHex: '#C62828', images: ['fab7459c-1186-4b48-4985-d1d28e7d2d00', '1525db33-8ade-459a-b18e-e96f3e07b000', '39398f33-4ea4-4357-064e-3acce95fe000'],    sizes: [{ size: '11 Inch', price: 3999, stock: 50 }] },
      { color: 'Yellow', colorHex: '#F2C14E', images: ['3c954f7e-6dc9-4c28-515e-3904c96daa00', '0c7fcd0a-e04e-45ff-4572-3aa9a3b1fc00', 'e24084cc-3540-428d-49a1-9f16f7a57400'], sizes: [{ size: '11 Inch', price: 3999, stock: 50 }] },
    ],
  },

  // ── AeroEdge ─────────────────────────────────────────────────────────────
  {
    id: 'aeroedge',
    metaTitle: 'AeroEdge USB Laptop Business Backpack',
    metaDescription: 'A textured business backpack with a padded laptop compartment, external USB charging access, and a rear trolley sleeve.',
    keywords: ['USB charging laptop backpack', 'business travel backpack', 'trolley sleeve backpack', 'water resistant office backpack', 'multi compartment work backpack'],
    name: 'AeroEdge',
    slug: 'aeroedge',
    category: 'backpack',
    hideSizeSelector: true,
    description:
      'A rectangular business backpack with contrasting textured edge panels, a padded laptop compartment, and an external USB port that keeps a power bank cable within reach without opening the bag.',
    story: [
      'AeroEdge treats a charging cable as a design problem worth solving: the external USB port routes to a power bank stored inside, so a phone can charge on a platform without the backpack ever coming off your back. Around that one detail sits the usual business-backpack arrangement, a padded laptop section, a front organiser, and a trolley sleeve for the flights that need it.',
    ],
    highlights: [
      {
        heading: 'Charges without opening',
        body: 'The external USB port connects to a power bank stored inside the main compartment, so a phone charges on the move without the backpack ever being unzipped.',
      },
      {
        heading: 'A commute and a carry-on, both covered',
        body: 'The rear trolley sleeve slides over a cabin case handle, turning a daily backpack into hands-free carry the moment a trip needs it.',
      },
    ],
    specs: [
      { label: 'Material', value: 'Polyester fabric' },
      { label: 'Size (19″)', value: '30 × 13 × 43 cm · approx. 1.2 kg' },
      { label: 'Interior',   value: 'Padded laptop compartment · front organiser pockets' },
      { label: 'Attachment', value: 'External USB port · rear trolley sleeve' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the straps and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: ['208d91d5-9611-47d2-7b28-845793361c00', '57f64508-df34-485c-145b-f5bfd7ad5000'],
    features: [
      { label: 'Padded laptop compartment' },
      { label: 'External USB charging access' },
      { label: 'Breathable padded back panel' },
      { label: 'Rear trolley sleeve' },
      { label: 'Water-resistant exterior' },
      { label: 'Dual side utility pockets' },
    ],
    variants: [
      { color: 'Black', colorHex: '#212121', images: ['208d91d5-9611-47d2-7b28-845793361c00', '57f64508-df34-485c-145b-f5bfd7ad5000', '385cd20d-4e34-43b3-3b2f-e1351a1e5900', '1db43705-b3b4-4074-1b45-392e2ff1fa00'], sizes: [{ size: 'One Size', price: 9490, stock: 25 }] },
      { color: 'Grey',  colorHex: '#757575', images: ['b9622be5-69da-429e-7d21-40840275ef00', '3cc8c72f-a776-4e10-495c-8e82bbbf3600', 'cb1db420-0981-4121-e019-349862f1db00'], sizes: [{ size: 'One Size', price: 9490, stock: 25 }] },
    ],
  },

]

// ─── Helper: get all featured products ───────────────────────────────────────
export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.isFeatured)

// ─── Helper: get all sale-exclusive products ─────────────────────────────────
export const SALE_PRODUCTS = PRODUCTS.filter((p) => p.saleExclusive)

// ─── Helper: any product with at least one size under ₹2,999 ─────────────────
export const UNDER_2999_PRODUCTS = PRODUCTS.filter((p) =>
  p.variants.some((v) => v.sizes.some((s) => s.price < 2999))
)

// ─── Helper: get product by slug ─────────────────────────────────────────────
export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug)

// ─── Helper: get products by category ────────────────────────────────────────
export const getProductsByCategory = (category: string): Product[] =>
  category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === category)

// ─── Stats for TrustBar ───────────────────────────────────────────────────────
export const BRAND_STATS = [
  { value: 9,   suffix: '+', label: 'Years of Craft' },
  { value: 50,  suffix: '+', label: 'Products Designed' },
  { value: 13,  suffix: '',  label: 'Product Lines' },
  { value: 100, suffix: '%', label: 'Made in India' },
]

// ─── Category display config ──────────────────────────────────────────────────
export const CATEGORIES = [
  { label: 'All',         value: 'all',        count: PRODUCTS.length },
  { label: 'Trolley Bags',value: 'trolley',    count: PRODUCTS.filter(p => p.category === 'trolley').length },
  { label: 'Sets',        value: 'set',        count: PRODUCTS.filter(p => p.category === 'set').length },
  { label: 'Backpacks',   value: 'backpack',   count: PRODUCTS.filter(p => p.category === 'backpack').length },
  { label: 'Office Bags', value: 'office-bag', count: PRODUCTS.filter(p => p.category === 'office-bag').length },
  { label: 'Duffle Bags', value: 'duffle',       count: PRODUCTS.filter(p => p.category === 'duffle').length },
  { label: 'Vanity Cases',value: 'vanity',       count: PRODUCTS.filter(p => p.category === 'vanity').length },
  { label: 'OverNighters', value: 'overnighter', count: PRODUCTS.filter(p => p.category === 'overnighter').length },
  { label: 'Organizers',  value: 'organizer',    count: PRODUCTS.filter(p => p.category === 'organizer').length },
] as const
