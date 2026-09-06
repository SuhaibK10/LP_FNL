// ─────────────────────────────────────────────────────────────────────────────
// config/blog.ts
// Blog/journal content. Add a post by appending a BlogPost object to
// BLOG_POSTS; the listing and [slug] page pick it up automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type BlogCategory = 'Gift Guide' | 'Packing Tips' | 'Travel Essential' | 'Work Essential'

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Gift Guide',
  'Packing Tips',
  'Travel Essential',
  'Work Essential',
]

export type BlogBlock =
  | { type: 'p';  text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export interface BlogPost {
  slug:        string
  title:       string
  excerpt:     string
  category:    BlogCategory
  readTime:    string   // e.g. "4 min read"
  publishedAt: string   // ISO date, e.g. "2026-09-05"
  image:       string   // Cloudflare Images id
  author?:     string   // defaults to "Louis Polo" when omitted
  body:        BlogBlock[]
  metaTitle?:       string
  metaDescription?: string
}

const p  = (text: string): BlogBlock => ({ type: 'p', text })
const h2 = (text: string): BlogBlock => ({ type: 'h2', text })
const ul = (items: string[]): BlogBlock => ({ type: 'ul', items })

export const BLOG_POSTS: BlogPost[] = [
  {
    slug:        'cabin-luggage-rules-for-domestic-and-international-flights',
    title:       'Cabin Luggage Rules for Domestic and International Flights',
    excerpt:     'Airline carry-on size and weight limits, liquid restrictions, and what actually gets confiscated at security, explained so you clear the gate without surprises.',
    category:    'Travel Essential',
    readTime:    '4 min read',
    publishedAt: '2026-06-21',
    image:       '046d049c-1027-4188-e014-c7580d6b8400',
    body: [
      p("Whether you're traveling for business, a family vacation, or an international adventure, understanding cabin luggage rules is essential for a smooth airport experience. Every year, thousands of travelers face delays, extra fees, or baggage issues simply because they are unaware of airline carry-on restrictions."),
      p('This guide explains everything you need to know about cabin luggage rules for both domestic and international flights, helping you pack smarter and travel with confidence.'),

      h2('What is cabin luggage?'),
      p('Cabin luggage, also known as carry-on baggage, is the bag you bring with you into the aircraft cabin. Unlike checked baggage, cabin luggage remains under your supervision throughout the journey. Most travelers use it for essential documents, electronics, valuables, medications, travel accessories, and a change of clothes. A well-designed cabin trolley can often accommodate everything needed for short business trips or weekend getaways.'),

      h2('Standard cabin luggage size guidelines'),
      p('Although baggage policies vary by airline, most domestic and international carriers follow similar cabin baggage dimensions, generally fitting within overhead storage while complying with airline regulations.'),
      ul([
        'Height: up to 55 cm',
        'Width: up to 40 cm',
        'Depth: up to 20–25 cm',
      ]),
      p("Before traveling, always check your airline's official baggage policy, as size restrictions may vary."),

      h2('Cabin baggage weight limits'),
      p('Weight allowances differ between airlines, ticket classes, and destinations.'),
      ul([
        'Domestic flights: 7–10 kg',
        'International flights: 7–12 kg',
        'Premium classes: higher allowances may apply',
      ]),
      p('Exceeding weight limits can result in additional fees or require your bag to be checked in. Choose lightweight cabin luggage to maximize packing capacity without exceeding weight restrictions.'),

      h2('Items allowed in cabin luggage'),
      ul([
        'Travel essentials: passport, ID documents, boarding passes, wallet',
        'Electronics: laptops, tablets, smartphones, cameras, power banks (usually cabin baggage only)',
        'Personal care: toothbrush, small cosmetics, prescription medications',
        'Clothing: jackets, spare outfits, travel accessories',
      ]),
      p('Keeping valuable and essential items in your cabin luggage is always recommended.'),

      h2('Restricted and prohibited items'),
      p('Security regulations prohibit certain items from being carried onboard, including sharp objects, large scissors, knives, flammable materials, fireworks, certain tools, and hazardous chemicals. Airport security may confiscate prohibited items, causing delays and inconvenience.'),

      h2('Liquid restrictions for international flights'),
      p('Many international airports enforce liquid restrictions: containers up to 100 ml each, all liquids placed inside a transparent resealable bag, and total liquid volume within approved limits. This commonly covers perfumes, lotions, shampoos, creams, and gels. Packing these correctly helps speed up security screening.'),

      h2('Power banks and electronic devices'),
      p('Many travelers are unaware that power banks are often prohibited in checked baggage. Carry them in cabin luggage, protect the terminals from damage, follow your airline’s battery capacity limits, and keep electronics easily accessible during security checks.'),

      h2('Domestic vs. international differences'),
      p('While domestic travel rules are generally simpler, international flights often involve additional procedures. International travelers should pay special attention to visa documentation, customs regulations, duty-free allowances, liquid restrictions, and transit-country regulations. Checking destination-specific requirements before departure can prevent unnecessary complications.'),

      h2('Smart packing tips for cabin luggage'),
      ul([
        'Pack strategically — place frequently used items near the top',
        'Use packing organizers to maximize space and improve organization',
        'Protect valuables — keep electronics and documents secure and accessible',
        'Wear bulky clothing instead of packing it, to free up luggage space',
        'Leave room for souvenirs — avoid overpacking on departure',
      ]),

      h2('Choosing the right cabin luggage'),
      p('The ideal cabin suitcase offers lightweight construction, durable hard-shell protection, smooth spinner wheels, organized compartments, and airline-compliant dimensions. A premium cabin trolley simplifies travel while ensuring you stay within the rules.'),

      h2('Final thoughts'),
      p('Understanding cabin luggage rules before your journey can save time, prevent unexpected fees, and make airport travel significantly less stressful. The right cabin luggage isn’t just about storage, it’s about traveling smarter, moving efficiently, and enjoying every journey with confidence.'),
    ],
  },

  {
    slug:        'travel-smarter-10-essential-accessories-every-frequent-traveler-should-own',
    title:       'Travel Smarter: 10 Essential Accessories Every Frequent Traveler Should Own',
    excerpt:     'From packing cubes to a premium cabin trolley, the ten accessories worth keeping in every frequent traveller’s kit.',
    category:    'Travel Essential',
    readTime:    '4 min read',
    publishedAt: '2026-06-15',
    image:       '99bafc34-cbe3-4ceb-93a7-469145c25100',
    body: [
      p('Frequent travel becomes easier, more organized, and more comfortable with the right accessories. Whether you’re flying for business, planning weekend getaways, or embarking on international adventures, the right travel accessories can make every journey smoother and more enjoyable. Here are the 10 must-have travel accessories that deserve a place in every traveler’s bag.'),

      h2('1. Packing cubes'),
      p('One of the simplest ways to stay organized while traveling. They separate clothing, accessories, and essentials into neat compartments, making it easy to find what you need without unpacking your entire suitcase — maximizing luggage space and making packing and unpacking easier.'),

      h2('2. Passport holder & travel wallet'),
      p('A premium passport holder keeps important travel documents secure and accessible. Many travel wallets also provide dedicated compartments for boarding passes, cards, cash, and IDs — better organization, enhanced document protection, easy airport access.'),

      h2('3. Portable power bank'),
      p('Running out of battery during travel is frustrating. A high-capacity power bank keeps your phone, tablet, or other devices charged throughout the journey — essential for long flights, layovers, navigation, and communication.'),

      h2('4. Luggage tags'),
      p('Quality luggage tags help identify your suitcase quickly while reducing the risk of misplaced baggage. Durable tags with secure attachment systems mean faster retrieval and added peace of mind.'),

      h2('5. Neck pillow'),
      p('Comfort matters, especially on long flights or road trips. An ergonomic neck pillow provides support and reduces neck strain while sleeping, for better rest during transit.'),

      h2('6. Insulated travel case'),
      p('Travelers carrying temperature-sensitive items such as medications, cosmetics, or snacks benefit greatly from an insulated case — temperature protection and convenient organization on long journeys.'),

      h2('7. Travel toiletry organizer'),
      p('A dedicated toiletry organizer prevents leaks and keeps grooming essentials neatly arranged, for easy access and less mess inside your main luggage.'),

      h2('8. TSA-approved lock'),
      p('Security is a top priority when traveling. TSA-approved locks let airport security inspect your luggage when necessary without damaging the lock — enhanced security with international travel compatibility.'),

      h2('9. Foldable duffel bag'),
      p('A lightweight foldable duffel is perfect for carrying extra items, shopping purchases, or souvenirs on the return journey — compact, versatile, additional storage exactly when you need it.'),

      h2('10. Premium cabin trolley'),
      p('A reliable cabin trolley remains one of the most important travel investments. Modern cabin luggage offers smooth spinner wheels, durable construction, organized interiors, and lightweight mobility, ideal for short business and leisure trips alike.'),

      h2('How to choose the right travel accessories'),
      p('When selecting travel accessories, focus on durability, lightweight construction, practical functionality, security features, and ease of organization. Quality accessories not only enhance convenience but also improve the overall travel experience.'),

      h2('Final thoughts'),
      p('Frequent travelers understand that successful journeys begin with smart preparation. From packing cubes and travel wallets to insulated cases and premium cabin trolleys, these essentials ensure you’re ready for every adventure, comfortably, efficiently, and with less stress.'),
    ],
  },

  {
    slug:        'the-ultimate-wedding-gifting-guide-for-indian-marriages',
    title:       'The Ultimate Wedding Gifting Guide for Indian Marriages',
    excerpt:     'Why premium luggage and travel accessories are becoming India’s favourite wedding gift, and how to choose one the couple will actually use.',
    category:    'Gift Guide',
    readTime:    '4 min read',
    publishedAt: '2026-06-15',
    image:       'b0353a53-8db3-4957-49e3-612029c56c00',
    body: [
      p('Indian weddings are among the most vibrant and meaningful celebrations in the world. They bring together families, traditions, emotions, and unforgettable memories. While attending these grand occasions is exciting, finding the perfect wedding gift can often feel overwhelming.'),
      p('A great wedding gift should be thoughtful, useful, and memorable, reflecting your blessings for the couple’s new journey while offering something they can genuinely use in everyday life. This guide will help you choose a wedding gift that stands out.'),

      h2('Why thoughtful wedding gifts matter'),
      p('In Indian culture, wedding gifts symbolize good wishes, prosperity, and happiness for the newly married couple. While traditional gifts such as cash envelopes remain popular, modern couples increasingly value gifts that create experiences, solve everyday needs, or add luxury to their new life together. The best gifts combine practicality with emotional value.'),

      h2('1. Premium luggage sets — the gift of new adventures'),
      p('Today’s couples often plan their honeymoon shortly after the wedding and continue exploring the world together throughout their marriage. A premium luggage set is one of the most practical and luxurious wedding gifts you can give: useful immediately for honeymoon travel, long-lasting, suitable for domestic and international trips, and a lasting reminder of the couple’s journey together. A matching collection featuring cabin, medium, and large suitcases offers both style and functionality.'),

      h2('2. Travel accessories for modern couples'),
      p('For couples who love to travel, premium travel accessories make excellent gifts and are often used for years — passport holders, travel organizers, packing cubes, insulated travel cases, duffel bags, and laptop backpacks.'),

      h2('3. Personalized gifts with emotional value'),
      p('Personalized gifts add a unique touch that couples treasure forever — customized photo albums, engraved keepsake boxes, monogrammed luggage tags, personalized travel journals, and custom artwork featuring the wedding date.'),

      h2('4. Luxury home essentials'),
      p('Many newlyweds begin setting up their new home after marriage. Consider gifting premium dinnerware sets, designer serving trays, luxury bedding, decorative lamps, or smart home gadgets, items that elevate everyday living and become part of the couple’s shared lifestyle.'),

      h2('5. Experience-based gifts'),
      p('Modern couples increasingly value experiences over possessions: honeymoon travel vouchers, spa packages, fine dining experiences, weekend getaway packages, and adventure activities that help create memories that last a lifetime.'),

      h2('6. Premium utility gifts'),
      p('Utility gifts strike the perfect balance between luxury and functionality — business travel bags, weekender duffels, laptop luggage, travel-ready backpacks, and multi-purpose storage organizers, especially appreciated by working professionals and frequent travelers.'),

      h2('Wedding gift etiquette in India'),
      ul([
        'Consider the couple’s lifestyle, interests, careers, and future plans',
        'Focus on quality — a well-made gift often creates a stronger impression than an expensive but less useful item',
        'Avoid duplicate household items — check for a gift registry or ask close family for suggestions',
        'Presentation matters — elegant packaging enhances the gifting experience',
      ]),

      h2('Why travel gifts are becoming popular wedding choices'),
      p('Travel symbolizes new beginnings, exploration, and shared experiences, making travel-related gifts particularly meaningful for newlyweds. Premium luggage and travel accessories offer long-term utility, support memorable experiences, combine luxury and practicality, and suit couples of all ages. Every journey the couple takes becomes a reminder of the thoughtful gift they received on their wedding day.'),

      h2('Final thoughts'),
      p('The perfect wedding gift doesn’t have to be extravagant, it simply needs to be meaningful. Whether you choose a premium luggage set, personalized keepsake, luxury home essential, or unforgettable experience, the best gifts celebrate the couple’s new chapter together.'),
    ],
  },

  {
    slug:        'how-to-choose-right-suitcase-trip',
    title:       'How to Choose the Right Suitcase for Your Trip',
    excerpt:     'Cabin, medium, or large; hard shell or soft; two wheels or four — a practical guide to matching your suitcase to how you actually travel.',
    category:    'Travel Essential',
    readTime:    '4 min read',
    publishedAt: '2026-06-15',
    image:       '1e192aef-1838-4763-a4a7-25b7f4fab100',
    body: [
      p('Standing in front of a wall of suitcases can be overwhelming. They all look similar, but the differences in quality, size, and features are enormous. Get this decision right and your suitcase will be a faithful travel companion for a decade.'),

      h2('Understanding suitcase sizes'),
      p('Suitcase sizes are standardised around carry-on and check-in categories, but actual dimensions vary by brand.'),

      h2('Cabin / carry-on (18 to 22 inches)'),
      p('Cabin bags are designed to fit in overhead compartments. The universal sweet spot is 55cm x 40cm x 20cm, fitting the most restrictive airlines while also working on full-service carriers. Use a cabin bag for trips up to 4 days, business travel where you need quick access to belongings, or any trip where you want to avoid checked baggage fees and collection waits.'),

      h2('Medium check-in (24 to 26 inches)'),
      p('This is the most popular size category for good reason. A medium check-in bag holds enough for a 2-week holiday while remaining manageable to lift and manoeuvre. The 24-inch size is the sweet spot, large enough for most holidays but not so heavy that you strain yourself lifting it into a taxi boot or onto a train rack.'),

      h2('Large check-in (28 to 32 inches)'),
      p('Large bags are for extended trips, family travel, or travellers who simply need to bring more, and are also popular with students moving internationally. A fair warning: large bags encourage overpacking. If you regularly return home with half your bag empty, you probably don’t need a large case.'),

      h2('Hard shell vs. soft shell'),
      p('This is one of the most common questions we receive. Hard shell suitcases offer superior protection for fragile items and are generally more water-resistant, ideal for checked baggage since they protect contents from mishandling; the downside is they don’t flex for one last item. Modern hard shells use polycarbonate or ABS plastic that is surprisingly impact-resistant.'),
      p('Soft shell suitcases offer flexibility, they can expand to accommodate extra packing and often have external pockets for items you need quick access to, and are lighter than comparable hard shells. The downside is lower protection for fragile items and vulnerability to water damage.'),
      p('Our recommendation: hard shell for checked baggage, soft shell for cabin bags where you need that extra flexibility and quick-access pockets.'),

      h2('Wheels: 2-wheel vs. 4-wheel spinners'),
      p('2-wheel rollaboards are pulled behind you at an angle. They’re more stable on rough terrain, cobblestones, gravel, uneven surfaces, and slightly more secure on slopes since they won’t roll away when you let go. 4-wheel spinners roll in all directions beside you, far more comfortable over long distances on smooth surfaces like airport terminals, though trickier on rough terrain and slopes.'),
      p('Our recommendation: 4-wheel spinners for primarily airport and hotel travel, 2-wheel for adventures involving rougher surfaces.'),

      h2('Key features worth paying for'),
      ul([
        'TSA-approved locks — essential for US travel, since agents can open and re-lock these without destroying your lock',
        'Spinner wheels with covers — look for double-spinner wheels (two small wheels per corner) for smoother rolling and greater durability',
        'Expandable panels — the ability to expand by 2–4cm is invaluable for packing souvenirs on the return journey',
        'Compression straps — internal straps that hold belongings in place, reducing shifting and wrinkling in transit',
      ]),

      h2('Making your decision'),
      p('For most travellers, a two-bag system works best: a carry-on for short trips and business travel, plus a medium check-in for longer holidays. You don’t need to own every size, strategic flexibility matters more than having every option available.'),
      p('The right suitcase is not the most expensive or the most feature-rich, it’s the one that fits your travel lifestyle perfectly and serves you reliably for years to come.'),
    ],
  },

  {
    slug:        'best-travel-bags-business-professionals',
    title:       'Best Travel Bags for Business Professionals',
    excerpt:     'Laptop backpack, rolling cabin bag, or hybrid briefcase — what actually holds up to weekly flights and still looks right in a boardroom.',
    category:    'Work Essential',
    readTime:    '4 min read',
    publishedAt: '2026-06-08',
    image:       'e55cd5d9-a4a1-470b-0758-42f3eb8ecf00',
    body: [
      h2('What makes a great business travel bag?'),
      p('Business travel differs significantly from leisure travel. Your bag must serve multiple purposes beyond simple storage, it needs to project professionalism in corporate settings, endure rigorous airport handling, and maintain a polished appearance after international flights. An effective bag balances aesthetics with practicality: it should look professional in corporate environments while being practically designed for the realities of frequent travel.'),
      ul([
        'Durability — reinforced stitching, premium zippers (YKK is the industry standard), water-resistant fabrics',
        'Organisation — compartmentalized designs prevent laptops, chargers, documents, and cards from piling up at the bottom',
        'Carry-on compliance — sized to fit overhead bins across most airlines, eliminating checked baggage expenses and retrieval delays',
      ]),

      h2('Laptop backpacks: the modern choice'),
      p('Contemporary business professionals increasingly choose well-designed backpacks over conventional briefcases. Quality laptop backpacks distribute weight uniformly across both shoulders, reducing fatigue during extended airport navigation. Superior designs incorporate pass-through luggage sleeves that slip over trolley handles, a padded laptop compartment (look for at least 15-inch capacity), and easy-access security pockets for boarding passes and passport.'),

      h2('Rolling cabin bags: the classic choice'),
      p('Trips exceeding three days benefit from rolling cabin bags, which provide greater capacity than backpacks allow. The 4-wheel spinner format is superior to 2-wheel designs, the ability to walk beside your bag rather than drag it behind you is a significant comfort advantage on long terminal walks. Look for expansion panels that let you pack flat on the way out and bring back more on the return, and TSA-approved locks for sensitive equipment.'),

      h2('Hybrid laptop briefcases: the elegant choice'),
      p('Short trips and single-night stays pair well with quality laptop briefcases that provide both style and organization, performing particularly well in formal corporate contexts where backpacks might appear too casual. The best designs include convertible straps that switch from single shoulder to crossbody to briefcase handle, adapting to different contexts throughout the day.'),

      h2('Key features to look for'),
      ul([
        'Laptop protection — rigid-backed compartments with memory foam padding, not basic fabric sleeves',
        'USB charging ports — external ports wired to internal power bank storage, useful during long layovers',
        'RFID-blocking pockets — valuable security for digital passports and contactless cards in crowded travel environments',
        'Water bottle pocket — external storage that keeps hydration accessible without opening your main compartment at security',
      ]),

      h2('Investing in the right bag'),
      p('A quality business travel bag is an investment rather than an expense. Calculating cost per use reveals the value: a bag used 50 times annually over five years yields negligible per-trip expenses, while budget alternatives failing within two years ultimately cost more. Select manufacturers offering comprehensive warranties extending beyond minimal timeframes.'),
      p('The right business travel bag doesn’t just carry your things, it carries your reputation.'),
    ],
  },

  {
    slug:        'ultimate-packing-guide-weekend-getaways',
    title:       'Ultimate Packing Guide for Weekend Getaways',
    excerpt:     'The 1-2-3 packing rule and five golden rules that make a 30-litre duffle enough for any weekend trip.',
    category:    'Packing Tips',
    readTime:    '4 min read',
    publishedAt: '2026-06-01',
    image:       '2d1f4a34-6d12-4d78-4bfe-27ae471df600',
    body: [
      p('Planning a weekend getaway is exciting, but packing for it can feel overwhelming. Whether you’re heading to a beach resort, a mountain retreat, or a city break, the secret to a stress-free trip starts with smart packing.'),

      h2('The 1-2-3 packing rule'),
      p('One of the simplest frameworks for weekend packing: bring 1 outfit per day, 2 pairs of shoes (casual and one occasion-specific), and 3 accessories that mix and match. This simple formula prevents overpacking while ensuring you’re never caught underdressed. Applied consistently, a standard 30-litre duffle bag is more than sufficient for a 2-3 day trip.'),

      h2('Clothing strategy: pack smart, not hard'),
      p('The key to efficient clothing packing lies in choosing versatile pieces that can be worn multiple ways. Opt for neutral colours like navy, grey, and white that coordinate with everything, a single pair of dark jeans can be dressed up with a blazer for dinner or down with a t-shirt for sightseeing.'),
      ul([
        '2–3 t-shirts or tops that mix and match',
        '1 pair of versatile trousers or jeans',
        '1 lightweight jacket or cardigan',
        'Underwear and socks, one per day plus one spare',
        'Comfortable walking shoes',
        'One pair of dressier shoes for evenings',
      ]),

      h2('Electronics and essentials'),
      p('Your electronics kit should be compact but complete. A portable charger is non-negotiable, nobody wants a dead phone mid-adventure. Pack only the cables you’ll actually use, and consider a multi-port USB adapter instead of multiple chargers.'),
      ul([
        'Phone and its charging cable',
        'Portable battery bank (10,000mAh or higher)',
        'Earphones or headphones',
        'Universal adapter for international trips',
        'Camera, only if your phone camera isn’t sufficient',
      ]),

      h2('Toiletries: the 100ml rule'),
      p('For weekend trips, full-size toiletries are unnecessary and take up valuable space. Invest in travel-sized containers filled with your favourite products, most destinations will have pharmacies or hotel shops if you forget something small. Use hotel toiletries when available, pack dry shampoo to extend hair-wash days, carry a multi-purpose balm for moisturiser, lip balm, and cuticle care, and pack a small microfibre towel, lighter and faster-drying than a regular one.'),

      h2('The roll vs. fold debate'),
      p('Rolling your clothes rather than folding them saves significant space and reduces wrinkles on delicate fabrics. Heavier items like jeans should go at the bottom of your bag near the wheels, with lighter items on top. Use the bundle packing method for dress shirts and formal wear, wrapping items around a central bundle core minimises creasing without requiring a garment bag.'),

      h2('The five golden rules'),
      ul([
        'Pack the night before, not the morning of — rushing causes forgotten items',
        'Wear your bulkiest items on travel day to save space in your bag',
        'The 48-hour rule: if you haven’t needed it in the last 48 hours at home, leave it',
        'Leave 20% of bag space empty for souvenirs and spontaneous purchases',
        'Use packing cubes to organise and compress your clothing effectively',
      ]),

      h2('Choosing the right bag'),
      p('For most weekend trips, a 30–40 litre duffle or backpack hits the sweet spot, large enough for 2-3 nights of essentials but small enough to fit in overhead compartments and under seats.'),
      p('The best packing strategy is one you’ll actually use consistently. Start with these principles on your next trip and adjust based on what works for your personal travel style.'),
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}
