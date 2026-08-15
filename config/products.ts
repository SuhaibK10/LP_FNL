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

  // ── ShirtVault ──────────────────────────────────────────────────────────
  {
    id: 'shirtvault',
    metaTitle: 'Louis Polo ShirtVault Hard Shell Shirt Organizer',
    metaDescription: 'Hard-shell shirt organizer that carries 4 to 5 formal shirts wrinkle-free. Slim polycarbonate case for business trips, weddings, and wardrobe storage.',
    keywords: ['shirt organizer for travel', 'wrinkle free shirt case', 'formal shirt travel organizer', 'hard shell shirt holder', 'shirt storage case india'],
    name: 'ShirtVault',
    slug: 'shirtvault',
    category: 'organizer',
    isFeatured: true,
    saleExclusive: true,
    hideSizeSelector: true,
    hideSizeGuide: true,
    mrp: 1699,
    recentPurchases: 131,
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
      '71bcef0c-eaf5-4466-fec4-4f5fdc357900',
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
  // ── AeroSmart 3-in-1 ────────────────────────────────────────────────────
  {
    id: 'aerosmart-3in1',
    metaTitle: 'AeroSmart 3-in-1 Cabin Trolley with Front Laptop Pocket',
    metaDescription: 'Smart cabin trolley with front laptop access, side quick-access pocket, combination lock, and 360° spinner wheels. Hard-shell protection for business travel.',
    keywords: ['cabin trolley with laptop compartment', 'front opening cabin luggage', 'hard shell carry-on suitcase', 'combination lock trolley bag', '360 spinner wheel cabin bag'],
    name: 'AeroSmart 3-in-1',
    slug: 'aerosmart-3in1',
    category: 'trolley',
    isFeatured: true,
    hideSizeSelector: true,
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
      'cce20161-5cb9-44aa-8c29-3a1251e92d00',
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
        color: 'Charcoal Grey',
        colorHex: '#A6B21A',
        bodyHex: '#4A4945',
        lowStock: true,
        images: [
          'cce20161-5cb9-44aa-8c29-3a1251e92d00',
          'b68fe362-f1e5-4d94-8e75-c3fe3c208800',
          'dab5cd11-d80c-498a-f842-0f58fa656d00',
          'c3350c15-2dab-46ca-047a-1912fd6df800',
          'ca620cb0-e1ef-48b0-1ddd-f37d55dccb00',
        ],
        sizes: [
          { size: 'Cabin', price: 5999, stock: 25, sku: '8906206840001-Y-20' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#C0392B',
        bodyHex: '#3E3E3E',
        images: [
          '5dec047a-a87f-48d3-5ea4-29abd19cab00',
          'b9dc5c11-9997-4ed1-8cbf-156fc8b8cf00',
          'b8b0c4f9-6b7f-457f-3b62-49fd4001c200',
          '2fb08478-b2b5-465a-9735-9105604e5f00',
          '0283bd8e-a5b2-411d-d370-a43838629500',
        ],
        sizes: [
          { size: 'Cabin', price: 5999, stock: 40, sku: '8906206840001-R-20' },
        ],
      },
      {
        color: 'Silver',
        colorHex: '#3A5F97',
        bodyHex: '#BDBDB6',
        lowStock: true,
        images: [
          'f5e08ff5-f9ff-4315-ccf0-0957d5437500',
          '2cdb284d-9af8-4d6c-f0ea-73bf4bf9e500',
          '797a8d85-c2a9-49a8-15c8-4a633d2aa700',
          '54d5dd26-87a5-4ebe-3792-95af17bf2800',
          'a5f3728c-0a8d-472e-3141-02b571377c00',
        ],
        sizes: [
          { size: 'Cabin', price: 5999, stock: 35, sku: '8906206840001-T-20' },
        ],
      },
      {
        color: 'White',
        colorHex: '#6F4E37', // brown zippers/accent
        bodyHex: '#F7F5F0',  // white shell
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          '9bac92e3-74a8-42ef-d579-d01830e80a00',
          '9eff1fe4-2561-496d-5734-2546f9ceb200',
          '9aac96ca-d8a7-4f2c-6653-9a2d88ce4a00',
          '3ad12034-30af-463a-a13f-8a9b0cf02800',
          '7da251d0-330a-481b-5eda-f0638dc4e400',
          'abe43a32-a61c-4970-4294-7d344888fe00',
          'afc1d4d5-338a-42b5-890b-aff8e3c3bd00',
        ],
        sizes: [
          { size: 'Cabin', price: 5999, stock: 30 },
        ],
      },

    ],
  },

  // ── SkyTrail ────────────────────────────────────────────────────────────
  {
    id: 'skytrail',
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
      'f3a7cf1c-9113-4853-4d2d-5a2096b9fd00',
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

  // ── AeroX ────────────────────────────────────────────────────────────────
  {
    id: 'aerox',
    metaTitle: 'AeroX 20" Cabin Trolley with TSA Lock & Cup Holder',
    metaDescription: 'AeroX pairs a lightweight hard-shell 20" cabin trolley with a TSA-approved combination lock, 360° silent spinner wheels, and a built-in cup holder.',
    keywords: ['cabin trolley bag', 'tsa lock suitcase', 'carry on luggage with cup holder', '20 inch trolley bag', 'hard shell cabin bag india'],
    name: 'AeroX',
    slug: 'aerox',
    category: 'trolley',
    hideSizeSelector: true,
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
    images: [''],
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
          '8b09e66c-ff43-4536-ca92-aeabf1c48600',
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
    ],
  },

  // ── AeroVault ────────────────────────────────────────────────────────────
  {
    id: 'aerovault',
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
    // TODO: no product photos yet — Suhaib will upload to Cloudinary later.
    // Add the public_id(s) or full URL(s) here once ready. Left as [''] and
    // not [] — an empty array resolves to `undefined` in ProductCard's image
    // lookup, which throws at render; '' resolves safely to a broken-image
    // placeholder instead of crashing the card.
    images: [''],
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
          '51fd24f1-7e9b-47ad-bb8c-4f7aa6c17000',
          'ffb6ea27-cb53-4a4d-9d1a-df63f83e2800',
          '17cc8ba4-8012-4f87-3fe8-5b2d218cf800',
        ],
        sizes: [
          { size: 'One Size', price: 4500, stock: 30 },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          '6ea33c4f-b82e-4894-f322-7f5b49d41700',
          '9ec1ded8-7a3d-4a31-5189-83a00ad8d900',
          '63d690dc-7fce-4b89-0510-73d6252b0f00',
          '76246c0d-eb87-4c93-85de-e8e725980300',
          '4db9fcc9-fcff-47c0-e5e2-2287ca8e6a00',
        ],
        sizes: [
          { size: 'One Size', price: 4500, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#6B6B6B',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted. Intentionally the same shots
        // as the Black variant.
        images: [
          '8b7c927d-4e8d-4bf6-51c4-ed7a7e9f0100',
          'e1484125-65e4-4dcd-b103-67cfd1c8ed00',
          '293576b6-5990-4a58-6a18-db70626a5e00',
        ],
        sizes: [
          { size: 'One Size', price: 4500, stock: 30 },
        ],
      },
    ],
  },

  // ── Apex ─────────────────────────────────────────────────────────────────
  {
    id: 'apex',
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
    // TODO: no product photos yet — Suhaib will upload to Cloudinary later.
    // Add the public_id(s) or full URL(s) here once ready. Left as [''] and
    // not [] — an empty array resolves to `undefined` in ProductCard's image
    // lookup, which throws at render; '' resolves safely to a broken-image
    // placeholder instead of crashing the card.
    images: [''],
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
          '8280bee0-71a1-407a-803a-6d38c780a000',
          'd83fd9d1-372c-43ee-a94c-544215083c00',
          '5b59d0b7-8d25-459c-666d-a3956a3f3000',
        ],
        sizes: [
          { size: 'One Size', price: 4599, stock: 30 },
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
          { size: 'One Size', price: 4599, stock: 30 },
        ],
      },
    ],
  },

  // ── MetroGrid ────────────────────────────────────────────────────────────
  {
    id: 'metrogrid',
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
    // TODO: no product photos yet — Suhaib will share Cloudinary links later.
    // Add the public_id(s) or full URL(s) here once ready. Left as [''] and
    // not [] — an empty array resolves to `undefined` in ProductCard's image
    // lookup, which throws at render; '' resolves safely to a broken-image
    // placeholder instead of crashing the card.
    images: [''],
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
          '17041633-e200-49d9-1d86-2f1f6f6ba800',
          'd9b76467-0e4e-44a3-6eef-18eb74d2cf00',
          '8321af3d-25d7-4863-d287-f0ae6a74f300',
        ],
        sizes: [
          { size: 'One Size', price: 4599, stock: 30 },
        ],
      },
      {
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'd9bce061-5b02-46e9-7270-78a105f69100',
          '9bf9de59-d569-47bf-c5fb-16d1a16df000',
          '47a8c3dd-c89b-4d1c-075b-234ed9f8af00',
          'a6ef3e72-fbef-47ba-80ec-aeca8218e200',
          'c8eabe58-0641-4e9d-f291-b4175c215300',
          'fb84a8df-4295-4018-f286-a97a3ae64f00',
        ],
        sizes: [
          { size: 'One Size', price: 4599, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          '1d9902f8-0210-4b00-890b-16833dd5fa00',
          '5c2adad1-1fc9-4e2b-445f-9f47434bb700',
          '238bc6ee-f531-4a9e-37ac-0355f9fdb100',
        ],
        sizes: [
          { size: 'One Size', price: 4599, stock: 30 },
        ],
      },
    ],
  },
  // ── WorkGrid ─────────────────────────────────────────────────────────────
  {
    id: 'workgrid',
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
    // TODO: no product photos yet — Suhaib will share Cloudinary links later.
    // Add the public_id(s) or full URL(s) here once ready. Left as [''] and
    // not [] — an empty array resolves to `undefined` in ProductCard's image
    // lookup, which throws at render; '' resolves safely to a broken-image
    // placeholder instead of crashing the card.
    images: [''],
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
          'baba58d2-0b7f-4314-4b23-b37c50e5b500',
          'fe3c06aa-c31d-42c4-5797-64bafde42500',
          'd8ec8e63-c3e9-423b-4e91-2b00a930ad00',
        ],
        sizes: [
          { size: 'One Size', price: 9490, stock: 30 },
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
          { size: 'One Size', price: 9490, stock: 30 },
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
          { size: 'One Size', price: 9490, stock: 30 },
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
    // TODO: no product photos yet — Suhaib will share Cloudinary links later.
    // Add the public_id(s) or full URL(s) here once ready. Left as [''] and
    // not [] — an empty array resolves to `undefined` in ProductCard's image
    // lookup, which throws at render; '' resolves safely to a broken-image
    // placeholder instead of crashing the card.
    images: [''],
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
          '9e6f593b-a719-4c1a-4f1b-cb0c845ac500',
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
  // ── VeeZoom ─────────────────────────────────────────────────────────────
  {
    id: 'veezoom',
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
      'acbb1811-cbd1-4496-9e85-cad771ad4d00',
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
      'c9d701b2-8947-4f3b-8877-d745394d0300',
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
      '532c64d2-a645-483a-c4c6-4c8355ee3900',
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
    images: ['f14c65cb-42c9-4a16-f53e-72b9d334d000','36351ce5-e009-4f94-0847-b4cd6ed3fd00'],
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
      'da2d28a6-1033-4ae4-5eb8-2d6d6a702500',
      'ca2fbe2c-2dee-4a1b-5370-2fad114ff000',
      'dbc3eca9-b03a-4e06-0377-6ee35558cb00',
      'e46d161f-862f-4698-924c-1fcc9bd09200',
      '17bf0573-ca70-43e6-5392-1986cb23d000',
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
          { size: 'Cabin', price: 4490, stock: 25 },
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
    // Hosted on a separate Cloudinary account (deh394y0h) — the primary
    // account's credit limit is exhausted. No photos yet: left as [''] and
    // not [] — an empty array resolves to `undefined` in ProductCard's image
    // lookup, which throws at render; '' resolves safely to a broken-image
    // placeholder instead of crashing the card.
    images: [''],
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
          'c319e66f-b873-43f4-182b-e42f28195100',
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
    images: [''],
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
          '0269dd46-6db0-4865-1cd2-d2a28bea9800',
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

  // ── StrataLux ────────────────────────────────────────────────────────────
  {
    id: 'stratalux',
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
    images: [''],
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
          '0cd7a434-6f5e-4109-9e4f-68c6cb868a00',
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
          'c3d07c68-babc-421d-4e51-6e905f91c100',
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
          'c0677602-1f28-464c-9227-6984065a1800',
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
    images: [''],
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
          '488989e4-42af-412a-df1d-7d8d69d15c00',
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
    images: ['ff1a4f4b-fbe0-4992-ac42-d9aac1218800','3051c79d-1359-4f89-66d2-e446d95a4b00'],
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
      '543255a6-680c-415c-4362-50cd1864d900',
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
          { size: 'One Size', price: 4009, stock: 30, sku: '8906206840193' },
        ],
      },
      {
        color: 'Carbon Fiber',
        colorHex: '#2C2C2C',
        sizes: [
          { size: 'One Size', price: 4009, stock: 30, sku: '8906206840209' },
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
      '97c1e757-4391-4b32-9741-527e449e8300',
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
      '0c421c25-1388-4c8a-53b2-31cd936eae00',
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
    mrp: 8000,
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
      '0958137c-54cd-499d-d45d-ab87f2b07c00',
      
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
          '0958137c-54cd-499d-d45d-ab87f2b07c00',
        ],
        sizes: [
          { size: 'One Size', price: 1999, stock: 30 },
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
          { size: 'One Size', price: 1999, stock: 30 },
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
          { size: 'One Size', price: 1999, stock: 30 },
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
          { size: 'One Size', price: 1999, stock: 30 },
        ],
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
      'e3e83d93-83b2-4825-1403-b58ad741cc00',
      'e3e83d93-83b2-4825-1403-b58ad741cc00',
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
          { size: 'One Size', price: 2324, stock: 30, sku: '8906206840216' },
        ],
      },
      {
        color: 'Silver Brush',
        colorHex: '#C0C0C0',
        sizes: [
          { size: 'One Size', price: 2324, stock: 30, sku: '8906206840223' },
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
      '10980eca-8d23-488a-70d9-0fa3f1797100',
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
      '6c725469-47bb-469c-a9d3-293921ff6400'
      
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
      '69f2e18a-3e6f-49cc-a4d8-603445faf800',
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
    mrp: 11000,
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
      'e41e9ccf-2de0-4ae9-0f2f-85359636c400',
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
          { size: 'Set of 3', price: 11000, stock: 15 },
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
      '0caedf5f-e860-40a0-815d-948cb8b39200',
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
    images:      [
      'a5ccbbef-2417-4573-e888-c182e7d53d00',
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
        sizes: [{ size: '9 Inch', price: 1199, stock: 50 }],
      },
      {
        color:    'Green',
        colorHex: '#2E7D32',
        sizes: [{ size: '9 Inch', price: 1199, stock: 50 }],
      },
      {
        color:    'Blue',
        colorHex: '#1565C0',
        sizes: [{ size: '9 Inch', price: 1199, stock: 50 }],
      },
      {
        color:    'Red',
        colorHex: '#C62828',
        sizes: [{ size: '9 Inch', price: 1199, stock: 50 }],
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
      '55a02349-ecaa-4128-be29-4d6c23fa5300','7cc12e6c-b3a5-4f40-304b-11b86b5b4900',],
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
    images:      [
      '27ef456d-7db1-4739-f5e8-37d041ba2b00',
      '59c762ab-3279-42b4-06f2-3da24c835000',
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
        color:    'Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '9 Inch', price: 2999, stock: 50 }],
      },
      {
        color:    'Rose Gold',
        colorHex: '#B76E79',
        sizes: [{ size: '9 Inch', price: 2999, stock: 50 }],
      },
      {
        color:    'Black',
        colorHex: '#212121',
        sizes: [{ size: '9 Inch', price: 2999, stock: 50 }],
      },
      {
        color:    'Sky Blue',
        colorHex: '#4FC3F7',
        sizes: [{ size: '9 Inch', price: 2999, stock: 50 }],
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
    images:      [
      '35fd5fe2-b859-47e7-7fb6-8eb9514fe200',
      '29b5c294-a115-4003-aed6-c7e218c1ed00',
      
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
        color:    'Metallic Grey',
        colorHex: '#757575',
        sizes: [{ size: '12 Inch', price: 1999, stock: 50 }],
      },
      {
        color:    'Turquoise Blue',
        colorHex: '#00B0C8',
        sizes: [{ size: '12 Inch', price: 1999, stock: 50 }],
      },
      {
        color:    'Metallic Silver',
        colorHex: '#BDBDBD',
        sizes: [{ size: '12 Inch', price: 1999, stock: 50 }],
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
    images:      [
      '7565b2dc-b8da-4ce3-c7ae-ad78f2676200',
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
        sizes: [{ size: '9 Inch', price: 1999, stock: 50 }],
      },
      {
        color:    'Grey',
        colorHex: '#757575',
        sizes: [{ size: '9 Inch', price: 1999, stock: 50 }],
      },
      {
        color:    'Blue',
        colorHex: '#1565C0',
        sizes: [{ size: '9 Inch', price: 1999, stock: 50 }],
      },
      {
        color:    'Black',
        colorHex: '#212121',
        sizes: [{ size: '9 Inch', price: 1999, stock: 50 }],
      },
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
