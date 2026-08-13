/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.5','192.168.1.15','192.168.1.4','192.168.1.19','192.168.1.18'],
  images: {
    // Custom loader rewrites each Cloudinary URL's own w_/h_ transform to the
    // width Next requests (see lib/cloudinaryLoader.ts), restoring real
    // srcset generation without proxying through Vercel's metered Image
    // Optimization API — that API's quota being exhausted is what caused the
    // site-wide 402s / broken photos this session (images.unoptimized was
    // the stopgap; this is the proper fix).
    loader:     'custom',
    loaderFile: './lib/cloudinaryLoader.ts',
    // Next's default 16-entry width table (8 deviceSizes + 8 imageSizes) was
    // fanning every product photo out into far more Cloudinary-derived
    // variants than any layout on the site actually uses — each one billed
    // as a separate transformation. Trimmed to the widths that match real
    // breakpoints/crop presets in use (see lib/cloudinary.ts).
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes:  [96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.zyrosite.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.louispoloworld.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  // Pages used to live under /store/* — permanent redirects keep old
  // bookmarks and already-indexed Google results working.
  async redirects() {
    return [
      {
        source: '/store',
        destination: '/',
        permanent: true,
      },
      {
        source: '/store/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
