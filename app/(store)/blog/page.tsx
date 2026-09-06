// ─────────────────────────────────────────────────────────────────────────────
// app/(store)/blog/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from 'next'
import { BLOG_POSTS }    from '@/config/blog'
import { BlogGrid }      from '@/components/blog/BlogGrid'

export const metadata: Metadata = {
  title:       'Explore',
  description: 'Expert guides, packing tips, and travel inspiration from Louis Polo.',
  alternates:  { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <div className="pt-16 md:pt-18">
      <div className="container-lp section-pad" style={{ paddingTop: '1.5rem' }}>
        <span className="lp-eyebrow">Explore</span>
        <h1 className="lp-heading-lg mb-4 max-w-2xl">Guides, gifting, and going places.</h1>
        <p className="font-body text-[0.9rem] text-lp-ink leading-relaxed max-w-xl mb-14 md:mb-16">
          Expert guides, packing tips, and travel inspiration for the modern traveller.
        </p>

        <BlogGrid posts={BLOG_POSTS} />
      </div>
    </div>
  )
}
