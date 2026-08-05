// ─────────────────────────────────────────────────────────────────────────────
// config/shopByColorPrice.ts
// Content for the homepage "Shop by Color / Under ₹2,999" section — a
// parallel-tab section styled like CategoryGrid + BestSellersCarousel.
//
// Homepage switch — flip to false to pull this section off the homepage.
// ─────────────────────────────────────────────────────────────────────────────

// Products carry ~28 distinct literal color names (Grey, Charcoal Grey,
// Metallic Grey, Zen Gray, ...) — far too granular for a 6-tile grid, and a
// lot of them are the same color in spirit. Grouped into broad families
// instead; each family's `matches` list is every literal `variant.color`
// string on the shop page that should count as "in" this family. Add new
// colors to the matching family's list as new products/colors are added.
export const SHOP_BY_COLOR_PRICE_HOME_ENABLED = false

export interface ColorFamily {
  label:   string
  image:   string   // Cloudinary public_id or full URL
  swatch:  string   // representative hex for the tile's accent dot
  matches: string[] // every literal variant.color value in this family
}

export const COLOR_FAMILIES: ColorFamily[] = [
  {
    label:  'Black',
    image:  '1C6A9495_Background_Removed_czmfug',
    swatch: '#212121',
    matches: ['Black', 'Carbon Fiber', 'Graphite Black'],
  },
  {
    label:  'Blue',
    image:  'https://res.cloudinary.com/deh394y0h/image/upload/v1785875220/FR2A5602_Large_Background_Removed_hwkqns.png',
    swatch: '#1E4B8C',
    matches: ['Blue', 'Sky Blue', 'Turquoise Blue', 'Midnight Blue', 'Navy', 'Midnight Navy', 'Turquoise'],
  },
  {
    label:  'Grey & Silver',
    image:  'https://res.cloudinary.com/deh394y0h/image/upload/v1785773538/louis-polo-prostripe-cyber-hard-shell-tr-1785368341730-1785368341730_Background_Removed_hihz8r.png',
    swatch: '#9E9E9E',
    matches: ['Silver', 'Metallic Silver', 'Silver Brush', 'Grey', 'Charcoal Grey', 'Metallic Grey', 'Zen Gray', 'Charcoal'],
  },
  {
    label:  'White',
    image:  'https://res.cloudinary.com/deh394y0h/image/upload/v1785785785/louis-polo-diamondlux-luggage-20-28-main-1785229823622-1785229823622_Background_Removed_ku4tay.png',
    swatch: '#F5F3EC',
    matches: ['White', 'Bold White'],
  },
  {
    label:  'Olive & Green',
    image:  'https://res.cloudinary.com/deh394y0h/image/upload/v1785785784/DiamondLux_qxfzs5.png',
    swatch: '#6B6E4A',
    matches: ['Olive', 'Green'],
  },
  {
    label:  'Warm Tones',
    image:  'https://res.cloudinary.com/deh394y0h/image/upload/v1785776263/3_Large_Background_Removed_o2xtoz.png',
    swatch: '#FF7900',
    matches: ['Blaze Orange', 'Red', 'Pink', 'Rosegold', 'Rose Gold', 'Yellow'],
  },
]
