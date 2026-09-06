'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/blog/BlogGrid.tsx
// Category filter + post grid for /blog. Renders a "coming soon" state when
// BLOG_POSTS is empty (current state — see config/blog.ts) and a normal
// filterable grid once posts exist.
// ─────────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { categoryUrl } from '@/lib/cloudflareImages'
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from '@/config/blog'
import { fadeUp, staggerChildren, VIEWPORT } from '@/lib/animations'

const ALL = 'All' as const

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <motion.article variants={fadeUp}>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-lp-cream">
          <img
            src={categoryUrl(post.image)}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.08em] uppercase text-lp-gold font-medium">
            <span>{post.category}</span>
            <span className="text-lp-border-strong">&middot;</span>
            <span className="text-lp-faint normal-case tracking-normal">{post.readTime}</span>
          </div>
          <h3 className="font-display text-[1.05rem] text-lp-ink mt-2 leading-snug group-hover:text-lp-gold transition-colors duration-200">
            {post.title}
          </h3>
          <p className="font-body text-[0.85rem] text-lp-muted leading-relaxed mt-1.5 line-clamp-2">
            {post.excerpt}
          </p>
          <p className="font-body text-[0.72rem] text-lp-faint mt-2">
            {formatDate(post.publishedAt)}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<BlogCategory | typeof ALL>(ALL)

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  )

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10 md:mb-12">
        {[ALL, ...BLOG_CATEGORIES].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`font-body text-[0.75rem] tracking-[0.04em] rounded-full px-4 py-2 border transition-colors duration-200 ${
              active === cat
                ? 'bg-lp-ink text-lp-porcelain border-lp-ink'
                : 'bg-transparent text-lp-ink border-lp-border hover:border-lp-gold hover:text-lp-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center text-center py-20 md:py-28 border-t border-lp-border">
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-lp-cream mb-5">
            <BookOpen size={22} strokeWidth={1.5} className="text-lp-ink" />
          </div>
          <h2 className="font-display text-[1.3rem] text-lp-ink mb-2">
            {posts.length === 0 ? 'Our first stories are on their way.' : 'Nothing here yet.'}
          </h2>
          <p className="font-body text-[0.9rem] text-lp-muted max-w-sm leading-relaxed">
            {posts.length === 0
              ? 'Packing tips, gifting guides, and travel essentials from the Louis Polo team, coming soon.'
              : 'No stories in this category yet — check back soon.'}
          </p>
        </div>
      ) : (
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </motion.div>
      )}
    </div>
  )
}
