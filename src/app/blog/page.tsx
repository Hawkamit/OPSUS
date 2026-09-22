import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, HeartHandshake, Users, Sparkles, 
  ArrowRight, Mail, Calendar, Clock, BookOpen 
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { NewsletterForm } from '@/components/common/NewsletterForm';
import { BlogCatalog } from '@/components/blog/BlogCatalog';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Healthcare Insights & Pharmaceutical News',
  description:
    'Read authoritative articles on pharmaceutical quality assurance, antimicrobial stewardship, PCD franchise best practices, and clinical innovations from Opsus Pharmaceuticals.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION (§6.7 item 1) */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="CLINICAL & INDUSTRY INSIGHTS"
                title="Latest Insights from the World of"
                italicAccent="Healthcare."
                description="Explore evidence-guided medical literature, WHO-GMP quality governance analyses, and strategic growth guidance for pharmaceutical distributors and franchise partners."
                headingTag="h1"
              />

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="#articles" variant="primary" size="md" showArrow>
                  Explore All Articles
                </Button>
                <a
                  href="#newsletter"
                  className="text-sm font-semibold text-[#2F6FA8] hover:text-[#0A1B33] inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Subscribe to Newsletter</span>
                </a>
              </div>
            </div>

            {/* Right Photo Column: Lab Photo with Vertical Tagline */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/blog/blog-hero.jpg"
                  alt="Medical Knowledge and Scientific Research"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent" />

                {/* Vertical Tagline Overlay (Reference §6.7 item 1) */}
                <div className="absolute top-4 right-4 bottom-4 flex items-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/90 uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow">
                    SCIENCE INFORMS. KNOWLEDGE EMPOWERS.
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-16 p-3.5 rounded-xl bg-[#0A1B33]/85 backdrop-blur-md text-xs text-white border border-white/10">
                  <div className="font-serif italic text-sm text-[#E7CFA1] mb-0.5">
                    Scientific Advisory Column
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    Written and curated by pharmacologists, regulatory heads, and franchise leaders.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BLOG CATALOG (Categories, Search, Cards & Pagination) */}
      <section id="articles" className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogCatalog initialPosts={blogPosts} />
        </div>
      </section>

      {/* 3. DARK NEWSLETTER BAND (§6.7 item 4) */}
      <section id="newsletter" className="py-20 bg-[#0A1B33] text-white border-y border-[#1F385C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
              <span className="eyebrow-text text-[#E7CFA1]">
                STAY INFORMED
              </span>
              <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4">
              Get the Latest Insights Directly to Your <span className="italic font-serif text-[#C9A15E]">Inbox.</span>
            </h2>

            <p className="text-sm text-slate-300 mb-8 leading-relaxed">
              Join over 500+ doctors, healthcare practitioners, and distribution associates receiving our monthly dispatch on new formulations, DCGI updates, and distribution insights.
            </p>

            <div className="flex justify-center">
              <NewsletterForm theme="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ICON TRUST ROW (§6.7 item 5) */}
      <section className="py-14 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            <div className="pt-4 sm:pt-0 sm:px-4 flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-11 h-11 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0A1B33]">Trusted Quality</h4>
                <p className="text-xs text-[#5B6B7D]">WHO-GMP Sourced</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-11 h-11 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0A1B33]">Partner Support</h4>
                <p className="text-xs text-[#5B6B7D]">Promotional Aids</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-11 h-11 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0A1B33]">Long-Term Growth</h4>
                <p className="text-xs text-[#5B6B7D]">Monopoly Security</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-4 flex items-center gap-3.5 justify-center sm:justify-start">
              <div className="w-11 h-11 rounded-full bg-[#A6317D]/10 text-[#A6317D] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0A1B33]">Better Healthcare</h4>
                <p className="text-xs text-[#5B6B7D]">Across Generations</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <span className="font-serif italic text-sm sm:text-base text-[#16345F]">
              &ldquo;Together for a <span className="text-[#C9A15E]">Healthier</span> Tomorrow.&rdquo;
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
