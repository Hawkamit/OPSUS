import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Tag, BookOpen, ShieldCheck } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { NewsletterForm } from '@/components/common/NewsletterForm';
import { Button } from '@/components/common/Button';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Opsus Healthcare Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.featured))
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3]">
      {/* Top Breadcrumbs */}
      <div className="bg-white border-b border-[#E4E0D8] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      {/* Article Header & Main Content */}
      <article className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Metadata */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#E4E0D8] text-[#2F6FA8] mb-4">
              <span>{post.category}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1B33] tracking-tight leading-[1.18] mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E4E0D8] text-xs sm:text-sm text-[#5B6B7D]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A1B33] text-[#C9A15E] flex items-center justify-center font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#0A1B33]">{post.author.name}</div>
                  <div className="text-xs text-[#5B6B7D]">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#5B6B7D]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#2F6FA8]" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#C9A15E]" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-[#E4E0D8] mb-12">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          {/* Lead Paragraph Excerpt */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E0D8] shadow-sm mb-10">
            <p className="font-serif text-lg sm:text-xl text-[#0A1B33] italic leading-relaxed">
              &ldquo;{post.excerpt}&rdquo;
            </p>
          </div>

          {/* Rich Article Body */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E4E0D8] shadow-sm space-y-6 text-sm sm:text-base text-[#5B6B7D] leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="first-of-type:text-base sm:first-of-type:text-lg first-of-type:text-[#0A1B33] first-of-type:font-medium">
                {paragraph}
              </p>
            ))}

            {/* In-Article Editorial Highlight */}
            <div className="my-8 p-6 rounded-2xl bg-[#FAF8F3] border-l-4 border-[#C9A15E] text-xs sm:text-sm text-[#0A1B33]">
              <div className="flex items-center gap-2 font-bold mb-1.5 text-[#16345F]">
                <ShieldCheck className="w-4 h-4 text-[#C9A15E]" />
                <span>Editorial Commitment & Quality Context</span>
              </div>
              <p className="text-[#5B6B7D] leading-relaxed">
                Opsus Pharmaceuticals publishes clinical reviews and supply chain perspectives to foster rational medicine usage and transparent distributor education. All mentioned products are manufactured through accredited WHO-GMP certified partner facilities.
              </p>
            </div>
          </div>

          {/* Article Tags */}
          <div className="mt-8 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-[#0A1B33] flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5 text-[#2F6FA8]" />
              Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white border border-[#E4E0D8] text-[#5B6B7D]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Back to Blog */}
          <div className="mt-10 pt-6 border-t border-[#E4E0D8] flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A1B33] hover:text-[#2F6FA8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </Link>
            <Button href="/pcd-franchise" variant="primary" size="sm" showArrow>
              Partner With Us
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-[#E4E0D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-2xl font-bold text-[#0A1B33]">
                Related Insights & News
              </h3>
              <Link
                href="/blog"
                className="text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] inline-flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="group bg-[#FAF8F3] rounded-2xl border border-[#E4E0D8] overflow-hidden hover:border-[#C9A15E] transition-all flex flex-col justify-between"
                >
                  <div className="p-6">
                    <span className="text-[11px] font-semibold text-[#2F6FA8] uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#0A1B33] group-hover:text-[#2F6FA8] transition-colors mb-2 line-clamp-2">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-[#5B6B7D] line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="px-6 py-3 border-t border-[#E4E0D8] text-xs font-semibold text-[#0A1B33] group-hover:text-[#C9A15E] flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Repeat Newsletter Section (§6.7) */}
      <section className="py-16 bg-[#0A1B33] text-white border-t border-[#1F385C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Enjoyed this analysis?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-md mx-auto">
            Subscribe to receive our latest pharmaceutical marketing and healthcare perspectives once every month.
          </p>
          <div className="flex justify-center">
            <NewsletterForm theme="dark" />
          </div>
        </div>
      </section>
    </div>
  );
}
