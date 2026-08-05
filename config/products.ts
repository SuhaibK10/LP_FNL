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
    image:     'fnl_zlkyo5.png',
    headline:  '',
    desktopImage: 'desktopfnl_nxmol9.png',
    textStyle: 'shadow',
    textSize:  'lg',
  },
  {
    image:     'heroLast_dkzwim.jpg',
    headline:  'Made for the Long Haul.',
    desktopImage: 'desk1_Large_yhjrpo.jpg',
    textStyle: 'shadow',
    textSize:  'lg',
  },
  {
    image:     'hero12_h3ptde.jpg',
    headline:  'Every Trip, Covered',
    desktopImage: 'desk5_w5zevy.jpg',
    textStyle: 'shadow',
  },
  {
    image:       'hero123_qezgc2.jpg',
    headline:    'Bold in Every Color',
    desktopImage: 'deskt_hpz4fe.jpg',
    textStyle:   'shadow',
    textOffset:  1,
  },
  {
    image:        'duffle_kgw8qx.jpg',
    headline:     'Pack Light. Go Far.',
    desktopImage: 'desk2_cu4kp5.jpg',
    textStyle:    'shadow',
    textPosition: 'top',
  },
  {
    image:        'Generated_Image_June_19_2026_-_2_36AM_r9titc.jpg',
    headline:     'The Showstopper: AeroSmart 3in1',
    desktopImage: 'Generated_Image_June_22_2026_-_8_19PM_infm85.jpg',
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
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785876268/d_Background_Removed_e6r3q6.png',
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
          { size: 'One Size', price: 1299, stock: 50 },
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
      '1C6A9455_Large_Background_Removed_xydl9r',
      '1C6A9495_Background_Removed_czmfug',
      'IMG_2420_Large_Background_Removed_ed2pt3.png',
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
          '1C6A9455_Large_Background_Removed_xydl9r',
          'louis-polo-aerosmart-grey-01-1782298690605-1782298690605_Background_Removed_e9vnew.png',
          'louis-polo-aerosmart-grey-02-1782298691894-1782298691894_Background_Removed_pyx3pk.png',
          'louis-polo-aerosmart-grey-04-1782298694121-1782298694121_Background_Removed_svihmw.png',
          'louis-polo-aerosmart-grey-03-1782298692939-1782298692939_Background_Removed_lzdcwx.png',
        ],
        sizes: [
          { size: 'Cabin', price: 4490, stock: 25, sku: '8906206840001-Y-20' },
        ],
      },
      {
        color: 'Black',
        colorHex: '#C0392B',
        bodyHex: '#3E3E3E',
        images: [
          '1C6A9495_Background_Removed_czmfug',
          'louis-polo-aerosmart-metallic-black-01-1782296233192-1782296233192_Background_Removed_czuh6q.png',
          'louis-polo-aerosmart-metallic-black-02-1782296234066-1782296234066_Background_Removed_lgeuvl.png',
          'louis-polo-aerosmart-metallic-black-04-1782296235914-1782296235914_Background_Removed_ikb6py.png',
          'louis-polo-aerosmart-metallic-black-03-1782296235017-1782296235017_Background_Removed_gqhd4h.png',
        ],
        sizes: [
          { size: 'Cabin', price: 4490, stock: 40, sku: '8906206840001-R-20' },
        ],
      },
      {
        color: 'Silver',
        colorHex: '#3A5F97',
        bodyHex: '#BDBDB6',
        lowStock: true,
        images: [
          'IMG_2420_Large_Background_Removed_ed2pt3.png',
          'louis-polo-aerosmart-silver-grey-10-1782298610328-1782298610328_Background_Removed_i7catb.png',
          'louis-polo-aerosmart-silver-grey-01-1782298602289-1782298602289-2_Background_Removed_egycpu.png',
          'louis-polo-aerosmart-silver-grey-04-1782298607083-1782298607083_Background_Removed_hgybgk.png',
          'louis-polo-aerosmart-silver-grey-08-1782298609272-1782298609272-2_Background_Removed_tyjqzw.png',
        ],
        sizes: [
          { size: 'Cabin', price: 4490, stock: 35, sku: '8906206840001-T-20' },
        ],
      },
      {
        color: 'White',
        colorHex: '#6F4E37', // brown zippers/accent
        bodyHex: '#F7F5F0',  // white shell
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773619/WhatsApp_Image_2026-07-31_at_21.52_Background_Removed.06_pnabuc.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773619/WhatsApp_Image_2026-07-31_at_21.52.04_2_Background_Removed_s1cq71.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773619/WhatsApp_Image_2026-07-31_at_21.52.05_1_Background_Removed_uwxy8f.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773619/WhatsApp_Image_2026-07-31_at_21.52.06_1_Background_Removed_ko1ou6.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773618/WhatsApp_Image_2026-07-31_at_21.52_Background_Removed.05_eh2fc9.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773618/WhatsApp_Image_2026-07-31_at_21.52_Background_Removed.04_fddkl9.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785773619/WhatsApp_Image_2026-07-31_at_21.52.04_1_Background_Removed_qbni1l.png',
        ],
        sizes: [
          { size: 'Cabin', price: 4490, stock: 30 },
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
      'IMG_2853_Background_Removed_bezyzs',
      '1C6A9363_Large_Background_Removed_ajflwe.png',
      '1-9_Background_Removed_q3kvwv.png',
      
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
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946089/1_Large_Background_Removed_sy58d8.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946089/3_Large_Background_Removed_ocznxp.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946089/2_Large_Background_Removed_aysf8s.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946089/4_Large_Background_Removed_fvsul3.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946091/5_Large_Background_Removed_hsbqkc.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946090/8_Large_Background_Removed_s6pqdo.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946091/6_Large_Background_Removed_f0whfj.png',
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
      'VeeZoom__Yellow_lpokls',
      '01-2_Background_Removed_3_guh9oa.png',
      
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
      '1-8_Large_Background_Removed_zodwmf',
      'IMG_3179_Background_Removed_Large_Background_Removed_wolj9y.png',
      'IMG_3140_Background_Removed_Large_Background_Removed_juszdy.png',
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
      '2-5_2_Background_Removed_o4wue3',
      '9_Background_Removed_2_rlmt2x',
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
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785773538/louis-polo-prostripe-cyber-hard-shell-tr-1785368341730-1785368341730_Background_Removed_hihz8r.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785773538/louis-polo-prostripe-cyber-hard-shell-tr-1785368342460-1785368342460_Background_Removed_edavfa.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785773538/louis-polo-prostripe-cyber-hard-shell-tr-1785368340931-1785368340931_Background_Removed_tuqmkk.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785773538/louis-polo-prostripe-cyber-hard-shell-tr-1785368340109-1785368340109_Background_Removed_vjjeih.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785773537/louis-polo-prostripe-cyber-hard-shell-tr-1785368339482-1785368339482_Background_Removed_a2jwhb.png',
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
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785785785/louis-polo-diamondlux-luggage-20-28-main-1785229823622-1785229823622_Background_Removed_ku4tay.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785786121/louis-polo-diamondlux-luggage-20-main-02-1785229833484-1785229833484_Background_Removed_wolwuk.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785785785/louis-polo-diamondlux-luggage-20-main-01-1785229832613-1785229832613_Background_Removed_trrtxr.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785785785/louis-polo-diamondlux-luggage-20-28-main-1785229830501-1785229830501_Background_Removed_oiopcp.png',
        ],
        sizes: [
          { size: 'Cabin',    price: 2990,  stock: 25 },
          { size: 'Medium',   price: 3499,  stock: 20 },
          { size: 'Large',    price: 4299,  stock: 20 },
          { size: 'Set of 3', price: 11499, stock: 15 },
        ],
      },
      {
        color: 'Zen Gray',
        colorHex: '#8A8D91',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785786123/louis-polo-diamondlux-luggage-20-main-06-1785229837184-1785229837184-2_Background_Removed_l4r2i6.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785786123/louis-polo-diamondlux-luggage-20-main-05-1785229836315-1785229836315-2_Background_Removed_xxxv4u.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785785785/louis-polo-diamondlux-luggage-20-28-main-1785229831425-1785229831425_Background_Removed_lwxv5v.png',
        ],
        sizes: [
          { size: 'Cabin',    price: 2990,  stock: 25 },
          { size: 'Medium',   price: 3499,  stock: 20 },
          { size: 'Large',    price: 4299,  stock: 20 },
          { size: 'Set of 3', price: 11499, stock: 15 },
        ],
      },
      {
        color: 'Olive',
        colorHex: '#6B6E4A',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785785784/DiamondLux_qxfzs5.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785785785/DiomondLux_bksggh.png',
        ],
        sizes: [
          { size: 'Cabin',    price: 2990,  stock: 25 },
          { size: 'Medium',   price: 3499,  stock: 20 },
          { size: 'Large',    price: 4299,  stock: 20 },
          { size: 'Set of 3', price: 11499, stock: 15 },
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
    images: ['https://res.cloudinary.com/dpepctqdj/image/upload/c_fill,w_600,h_600,g_auto/louis-polo-champ-08-1781602537072-1781602537072_Background_Removed_ywa111.png','https://res.cloudinary.com/dpepctqdj/image/upload/c_fill,w_600,h_600,g_auto/louis-polo-champ-black-08-1781603000214-1781603000214_Background_Removed_dg0xa2'],
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
    images: ['https://res.cloudinary.com/dpepctqdj/image/upload/c_fill,w_600,h_600,g_auto/louis-polo-magma-blue-08-1781604249533-1781604249533_Background_Removed_i6ef93','https://res.cloudinary.com/dpepctqdj/image/upload/c_fill,w_600,h_600,g_auto/louis-polo-magma-black-08-1781604029524-1781604029524_Background_Removed_gn6fjh'],
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
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785948579/13_Large_Background_Removed_uzujdf.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785776263/1_Large_Background_Removed_usrmty.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785776263/3_Large_Background_Removed_o2xtoz.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785776264/4_Large_Background_Removed_ugrxhn.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785776264/9_Large_Background_Removed_zwhmvt.png',
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785776265/7_Large_Background_Removed_x05rdu.png',
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
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785948234/07_Large_Background_Removed_euyjwa.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785948234/05_Large_Background_Removed_mfw23v.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785948234/01_Large_Background_Removed_fv4rw8.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785948235/06_Large_Background_Removed_fcxeyk.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785948235/02_Large_Background_Removed_ldtepg.png',
        ],
        sizes: [
          { size: 'Cabin',   price: 2999,  stock: 25 },
          { size: 'Medium',  price: 3599,  stock: 20 },
          { size: 'Large',   price: 4299,  stock: 20 },
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
      'https://res.cloudinary.com/deh394y0h/image/upload/v1785948235/04_Large_Background_Removed_pk6vbu.png',
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
      '1-2_Large_Background_Removed_xialtl',
      '1-2_Large_2_Background_Removed_dnpjfv.png',
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
          { size: 'One Size', price: 3009, stock: 30, sku: '8906206840193' },
        ],
      },
      {
        color: 'Carbon Fiber',
        colorHex: '#2C2C2C',
        sizes: [
          { size: 'One Size', price: 3009, stock: 30, sku: '8906206840209' },
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
      'hexcore_vhfwcc.png',
      'hexcore_vhfwcc.png',
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
      '02-3_Background_Removed_cucfkt',
      '01-2_Background_Removed_2_blmmcl',
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
      '1_Background_Removed_aukpfh.png'
      
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
      '01-2_Background_Removed_o0b5il.png',
      '01-3_Background_Removed_cut3ue.png',
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
      'Generated_Image_June_18_2026_-_1_53AM_Background_Removed_cblbni.png',
      
      '1C6A9677_Large_Background_Removed_w6duba.png',
      '1C6A9697_Background_Removed_Large_Background_Removed_fc0j9n.png',
      '1C6A9716_Background_Removed_r9rkn4.png',
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
          'Generated_Image_June_18_2026_-_1_53AM_Background_Removed_cblbni.png',
        ],
        sizes: [
          { size: 'One Size', price: 4000, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#9E9E9E',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          '1C6A9677_Large_Background_Removed_w6duba.png',
        ],
        sizes: [
          { size: 'One Size', price: 4000, stock: 30 },
        ],
      },
      {
        color: 'Pink',
        colorHex: '#EC407A',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          '1C6A9697_Background_Removed_Large_Background_Removed_fc0j9n.png',
        ],
        sizes: [
          { size: 'One Size', price: 4000, stock: 30 },
        ],
      },
      {
        color: 'Green',
        colorHex: '#43A047',
        // First pic is the current shared image; append real per-color shots after it
        images: [
          '1C6A9716_Background_Removed_r9rkn4.png',
        ],
        sizes: [
          { size: 'One Size', price: 4000, stock: 30 },
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
      '01---flexbag---black-1781383670118-1781383670118_Background_Removed_n03tnr',
      'untitled-1-1-1781414351367-1781414351367_Background_Removed_nr2vnl',
      'untitled-1-1-1781414384834-1781414384834_Background_Removed_zchjbk',
      'untitled-1-1-1781414421642-1781414421642_Background_Removed_jh0xjj',
      'untitled-1-1-1781414459774-1781414459774_Background_Removed_c8gvms'


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
      'louis-polo-grid-pod-vanity-silver-08-1781757213777-1781757213777_Background_Removed_nf3usc',
      'louis-polo-grid-pod-vanity-grey-08-1781757256978-1781757256978_Background_Removed_fcbi2f',
      'louis-polo-grid-pod-vanity-blue-01-1781757330010-1781757330010_Background_Removed_qtb4xf.png',
      'louis-polo-grid-pod-vanity-black-08-1781757362906-1781757362906_Background_Removed_ynroed'
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
        sizes: [{ size: '9 Inch', price: 999, stock: 50 }],
      },
      {
        color:    'Green',
        colorHex: '#2E7D32',
        sizes: [{ size: '9 Inch', price: 999, stock: 50 }],
      },
      {
        color:    'Blue',
        colorHex: '#1565C0',
        sizes: [{ size: '9 Inch', price: 999, stock: 50 }],
      },
      {
        color:    'Red',
        colorHex: '#C62828',
        sizes: [{ size: '9 Inch', price: 999, stock: 50 }],
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
      'louis-polo-attache-red-08-1781606815844-1781606815844_Background_Removed_vug5zj',
      'louis-polo-attache-black-hero-10-1781606578945-1781606578945_Background_Removed_v0prue'
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
      'swiftgate---blue01-1781498983947-1781498983947_Background_Removed_lanodd','swiftgate---red09-1781498866690-1781498866690_Background_Removed_zdqhyi',],
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
        sizes: [{ size: '17 Inch', price: 9899, stock: 30 }],
      },
      {
        color:    'Red',
        colorHex: '#C62828',
        sizes: [{ size: '17 Inch', price: 9899, stock: 30 }],
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
      '1-1781427971087-1781427971087_Background_Removed_f1vctd',
      '1-1781427934381-1781427934381_Background_Removed_iw2ctm',
      '1-1781427886031-1781427886031_Background_Removed_syzs8q',
      '8-1781428020176-1781428020176_Background_Removed_v6a0uj'
      
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
      'louis-polo-orbit-pod-vanity-metallic-gre-1781766231871-1781766231871_Background_Removed_l5lzhb',
      'louis-polo-orbit-pod-vanity-turquoise-bl-1781766125876-1781766125876_Background_Removed_g39dpv',
      
      'louis-polo-orbit-pod-vanity-metallic-sil-1781766417179-1781766417179_Background_Removed_db00pk',
      
      
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
      'louis-polo-voyage-pod-silver-09-1781689965483-1781689965483_Background_Removed_ysfewb',
      'louis-polo-voyage-pod-grey-09-1781690030424-1781690030424_Background_Removed_s63370','louis-polo-voyage-pod-blue-09-1781690104205-1781690104205_Background_Removed_eoz5ph',
      'louis-polo-voyage-pod-black01-1781690181273-1781690181273_Background_Removed_k1um9u'
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

  // ── Vertex Ergonomic BackPack ────────────────────────────────────────────
  {
    id: 'vertex-ergonomic-backpack',
    metaTitle: 'Louis Polo Vertex Ergonomic BackPack with Laptop Compartment & USB Port',
    metaDescription: 'Stay organized wherever life takes you with the Louis Polo Vertex Ergonomic BackPack. Featuring a dedicated laptop compartment, USB charging port, trolley sleeve, ergonomic padded straps, hidden security pocket, and spacious multi-compartment storage, it\'s the perfect backpack for office, college, business travel, and everyday commuting.',
    keywords: ['business travel backpack', 'laptop backpack with usb charging port', 'backpack with trolley sleeve', 'water resistant laptop backpack', 'office commute backpack'],
    name: 'Vertex Ergonomic BackPack',
    slug: 'vertex-ergonomic-backpack',
    category: 'backpack',
    isFeatured: true,
    hideSizeSelector: true,
    saleExclusive: true,
    mrp: 4999,
    description:
      'Louis Polo Vertex Ergonomic BackPack is a premium business and travel backpack featuring a dedicated laptop compartment, USB charging port, trolley sleeve, multiple organizer pockets, ergonomic comfort, and spacious storage for everyday professionals and travelers.',
    story: [
      'Designed with intelligently organized compartments, a dedicated padded laptop sleeve, spacious storage, and quick-access pockets, Vertex Ergonomic keeps your essentials secure and within reach. Premium water-resistant fabric, ergonomic padded shoulder straps, breathable back support, USB charging port, luggage trolley sleeve, and durable branded hardware make it the perfect companion for work, travel, college, and daily commuting.',
      'Whether you\'re heading to the office, boarding a flight, or navigating your daily routine, the Vertex Ergonomic delivers comfort, organization, and timeless Louis Polo style.',
    ],
    highlights: [
      {
        heading: 'Smart organization, premium comfort',
        body: 'Every compartment has a purpose, from the dedicated laptop bay to the hidden security pocket, so the pack works as hard as you do.',
      },
      {
        heading: 'Built for every journey',
        body: 'A padded 15.6" laptop sleeve, USB charging port, and trolley sleeve mean it moves as easily through an airport as it does a daily commute.',
      },
      {
        heading: 'All-day comfort',
        body: 'Ergonomic padded straps, a breathable air-mesh back panel, and an adjustable chest strap keep the load comfortable from front door to desk.',
      },
    ],
    specs: [
      { label: 'Laptop Bay',     value: 'Fits up to 15.6" laptop' },
      { label: 'Material',       value: 'Premium water-resistant polyester' },
      { label: 'Compartments',   value: 'Multi-compartment organizer design' },
      { label: 'USB Port',       value: 'Built-in charging port' },
      { label: 'Back Panel',     value: 'Breathable air-mesh' },
      { label: 'Straps',         value: 'Ergonomic padded · adjustable chest strap' },
      { label: 'Trolley Sleeve', value: 'Yes — suitcase attachment' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, straps, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [
      'WhatsApp_Image_2026-07-18_at_13.18.30_6_rhjdsf.jpg',
    ],
    features: [
      { label: 'Dedicated 15.6" laptop compartment' },
      { label: 'Built-in USB charging port' },
      { label: 'Ergonomic padded shoulder straps' },
      { label: 'Breathable air-mesh back panel' },
      { label: 'Adjustable chest support strap' },
      { label: 'Hidden security pocket' },
      { label: 'Trolley sleeve for suitcase attachment' },
      { label: 'Premium branded zippers' },
    ],
    variants: [
      {
        color: 'Graphite Black',
        colorHex: '#484848',
        images: [
          'WhatsApp_Image_2026-07-18_at_13.18.30_6_rhjdsf.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.31_1_sfafua.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.31_2_m6rmb4.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.32_1_vp2spx.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.35_1_nmpuwv.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.36_wz5ij5.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.36_1_bo22vq.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.34_2_ezi0zm.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.37_1_qwgwdb.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.34_1_mkbvjv.jpg',
        ],
        sizes: [
          { size: 'One Size', price: 3599, stock: 30 },
        ],
      },
      {
        color: 'Midnight Navy',
        colorHex: '#2E4765',
        images: [
          'WhatsApp_Image_2026-07-18_at_13.18.29_4_lj8iil.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.30_3_nzcbx4.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.30_4_svceuk.jpg',
          'WhatsApp_Image_2026-07-18_at_13.18.30_5_duagv7.jpg',
        ],
        sizes: [
          { size: 'One Size', price: 3599, stock: 30 },
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
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875221/FR2A5611_Large_Background_Removed_r3gorn.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875221/FR2A5612_Large_Background_Removed_tb7xrq.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875224/FR2A5613_Large_Background_Removed_hr3487.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875222/FR2A5615_Large_Background_Removed_l2fzfd.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875227/FR2A5633_Large_Background_Removed_ualnav.png',
        ],
        sizes: [
          { size: 'One Size', price: 2999, stock: 30 },
        ],
      },
      {
        color: 'Blue',
        colorHex: '#1E4B8C',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875220/FR2A5602_Large_Background_Removed_hwkqns.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875220/FR2A5603_Large_Background_Removed_te4qv9.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875220/FR2A5604_Large_Background_Removed_ng99a1.png',
        ],
        sizes: [
          { size: 'One Size', price: 2999, stock: 30 },
        ],
      },
      {
        color: 'Grey',
        colorHex: '#6B6B6B',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted. Intentionally the same shots
        // as the Black variant.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875220/FR2A5606_Large_Background_Removed_i20p9y.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875221/FR2A5607_Large_Background_Removed_r5blae.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785875221/FR2A5608_Large_Background_Removed_jtxbqm.png',
        ],
        sizes: [
          { size: 'One Size', price: 2999, stock: 30 },
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
        color: 'Black',
        colorHex: '#212121',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950211/FR2A5528_Large_Background_Removed_xjpttn.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950212/FR2A5530_Large_Background_Removed_oazd9o.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950213/FR2A5531_Large_Background_Removed_x2uopi.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950212/FR2A5529_Large_Background_Removed_fkh93s.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950224/FR2A5551_Large_Background_Removed_bucrst.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950248/FR2A5552_Large_Background_Removed_tr8jsz.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950252/FR2A5558_Large_Background_Removed_fmmj4x.png',
        ],
        sizes: [
          { size: 'One Size', price: 3599, stock: 30 },
        ],
      },
      {
        color: 'Gray',
        colorHex: '#9E9E9E',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950128/FR2A5521_Large_Background_Removed_elmyaq.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950129/FR2A5524_Large_Background_Removed_fq7zhm.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785950129/FR2A5525_Large_Background_Removed_gsk8x0.png',
        ],
        sizes: [
          { size: 'One Size', price: 3599, stock: 30 },
        ],
      },
    ],
  },

  // Temporarily disabled per request.
  /*
  // ── TitaniumEdge ─────────────────────────────────────────────────────────
  {
    id: 'titaniumedge',
    metaTitle: 'TitaniumEdge 14" Hard Shell Executive Briefcase',
    metaDescription: 'TitaniumEdge is a lightweight hard-shell executive briefcase with a diagonal ribbed shell, premium metallic finish, and detachable shoulder strap.',
    keywords: ['hard shell briefcase', 'executive briefcase india', '14 inch laptop briefcase', 'business travel bag', 'professional briefcase for men'],
    name: 'TitaniumEdge',
    slug: 'titaniumedge',
    category: 'office-bag',
    hideSizeSelector: true,
    description:
      'A lightweight hard-shell exterior with the aesthetics of a boardroom. TitaniumEdge protects laptops, documents, and business essentials behind a diagonal ribbed shell and premium metallic finish, with a detachable shoulder strap for the commute.',
    story: [
      'TitaniumEdge trades soft-sided fabric for a rigid hard shell, so documents arrive flat and a laptop arrives intact, whatever the cab boot or overhead rack throws at it on the way there. The diagonal ribbed shell and metallic finish are built to read as considered, not corporate.',
      'Inside, a comfortable fabric lining and a concealed pocket keep essentials organised and out of sight, while smooth zippers close over all of it. Two handles carry it through the corridor; a detachable shoulder strap takes over for the commute.',
    ],
    highlights: [
      {
        heading: 'Hard shell, boardroom finish',
        body: 'A durable hard-shell exterior with a diagonal ribbed design and premium metallic finish, built to protect and still look the part in a meeting.',
      },
      {
        heading: 'Everything has its place',
        body: 'A concealed pocket and comfortable fabric lining keep documents, a laptop, and the small essentials organised and easy to find.',
      },
      {
        heading: 'Carried your way',
        body: 'A detachable shoulder strap turns a hand-carried briefcase into a cross-body one for the walk between meetings.',
      },
    ],
    specs: [
      { label: 'Shell',    value: 'Hard shell, diagonal ribbed design' },
      { label: 'Size',     value: '14″' },
      { label: 'Interior', value: 'Fabric lining, concealed pocket' },
      { label: 'Carry',    value: 'Top handle + detachable shoulder strap' },
      { label: 'Zippers',  value: 'Smooth, impact-resistant closure' },
    ],
    warranty:
      '1-year warranty covering manufacturing defects in the shell, handles, and zippers. Keep your invoice. A mail to support@louispolo.in is all a claim takes.',
    images: [''],
    features: [
      { label: 'Hard shell protection' },
      { label: 'Premium metallic finish' },
      { label: 'Concealed pocket' },
      { label: 'Detachable shoulder strap' },
      { label: 'Smooth zippers' },
      { label: 'Impact resistant' },
      { label: 'Lightweight build' },
      { label: 'Strong bearing capacity' },
    ],
    variants: [
      {
        color: 'Silver',
        colorHex: '#BDBDBD',
        // Hosted on a separate Cloudinary account (deh394y0h) — the primary
        // account's credit limit is exhausted.
        images: [
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946668/Screenshot_2026-08-05_at_9.39_Background_Removed.38_PM_ukfnoj.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946669/Screenshot_2026-08-05_at_9.39_Background_Removed.53_PM_qewyda.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946669/Screenshot_2026-08-05_at_9.39_Background_Removed.46_PM_ywogga.png',
          'https://res.cloudinary.com/deh394y0h/image/upload/v1785946669/Screenshot_2026-08-05_at_9.40_Background_Removed.00_PM_f0xnir.png',
        ],
        sizes: [
          { size: 'One Size', price: 9999, stock: 10 },
        ],
      },
    ],
  },

  */

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
