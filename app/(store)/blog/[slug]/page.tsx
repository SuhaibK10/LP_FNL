// ─────────────────────────────────────────────────────────────────────────────
// app/(store)/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata }    from 'next'
import { notFound }         from 'next/navigation'
import Link                 from 'next/link'
import { ArrowLeft }        from 'lucide-react'
import { BLOG_POSTS, getBlogPostBySlug } from '@/config/blog'
import { categoryUrl, ogUrl } from '@/lib/cloudflareImages'
import { ROUTES }           from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Story not found' }

  const title       = post.metaTitle ?? post.title
  const description = post.metaDescription ?? post.excerpt

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: ogUrl(post.image), width: 1200, height: 630 }],
    },
    twitter: {
      card:  'summary_large_image',
      title,
      description,
      images: [ogUrl(post.image)],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="pt-16 md:pt-18">
      <div className="container-lp section-pad" style={{ paddingTop: '1.5rem', maxWidth: '48rem', marginInline: 'auto' }}>
        <Link
          href={ROUTES.blog}
          className="inline-flex items-center gap-1.5 font-body text-[0.78rem] text-lp-muted hover:text-lp-gold transition-colors mb-8"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to Explore
        </Link>

        <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.08em] uppercase text-lp-gold font-medium mb-3">
          <span>{post.category}</span>
          <span className="text-lp-border-strong">&middot;</span>
          <span className="text-lp-faint normal-case tracking-normal">{post.readTime}</span>
        </div>

        <h1 className="lp-heading-lg mb-4">{post.title}</h1>
        <p className="font-body text-[0.8rem] text-lp-faint mb-8">
          {post.author ?? 'Louis Polo'} &middot; {formatDate(post.publishedAt)}
        </p>

        <div className="relative aspect-video rounded-xl overflow-hidden bg-lp-cream mb-10">
          <img src={categoryUrl(post.image)} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-5">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="font-display text-[1.2rem] text-lp-ink pt-4">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="space-y-2">
                  {block.items.map((item, j) => (
                    <li
                      key={j}
                      className="font-body text-[0.95rem] text-lp-ink leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-lp-gold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="font-body text-[0.95rem] text-lp-ink leading-relaxed">
                {block.text}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}
