/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.5','192.168.1.15','192.168.1.4','192.168.1.2','192.168.18.191'],
  images: {
    // Cloudinary URLs (lib/cloudinary.ts) already carry their own resize/format/
    // quality transforms — Vercel re-optimizing them on top via /_next/image is
    // redundant and burns its (metered) Image Optimization quota. That quota
    // being exhausted is what was causing the site-wide 402s / broken photos.
    unoptimized: true,
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
