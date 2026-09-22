import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Award, CheckCircle2, 
  Sparkles, Layers, Truck, Users2, ChevronRight,
  TrendingUp, FileCheck
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { StatBar } from '@/components/common/StatBar';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CtaBand } from '@/components/common/CtaBand';
import { HomeHeroCarousel } from '@/components/home/HomeHeroCarousel';
import { TherapeuticSlider } from '@/components/home/TherapeuticSlider';
import { therapeuticAreas } from '@/data/therapeutic-areas';
import { products } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO CAROUSEL SECTION */}
      <HomeHeroCarousel />

      {/* 2. STAT BAR (Directly Beneath Hero) */}
      <StatBar
        stats={[
          { value: '2010', label: 'Established', sublabel: 'Over 14+ Years of Trust', icon: 'Calendar' },
          { value: '27+', label: 'Products', sublabel: 'Quality Formulations', icon: 'Package' },
          { value: '15+', label: 'States Presence', sublabel: 'Regional Distribution', icon: 'MapPin' },
          { value: '150+', label: 'Healthcare Partners', sublabel: 'Doctors & Distributors', icon: 'Users' },
        ]}
        sideNote="TRUSTED BY HEALTHCARE PARTNERS ACROSS INDIA"
      />

      {/* 3. THERAPEUTIC SEGMENTS SLIDER / GRID SECTION (Sliding View on Mobile) */}
      <section className="py-16 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
            <SectionHeading
              eyebrow="OUR THERAPEUTIC SEGMENTS"
              title="Targeted Therapies."
              italicAccent="Better Outcomes."
              description="Explore our specialized portfolio spanning primary healthcare, chronic therapy, acute intervention, and wellness formulations sourced through WHO-GMP certified partners."
            />
            <Link
              href="/therapeutic-areas"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0A1B33] hover:text-[#C9A15E] transition-colors self-start md:self-auto shrink-0 pb-2"
            >
              <span>View All Segments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sliding View on Mobile, 2x4 Grid on Desktop */}
          <TherapeuticSlider areas={therapeuticAreas} />
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS PREVIEW (2 in a row, 2 in column = 2x2 grid on mobile) */}
      <section className="py-16 md:py-28 bg-white border-y border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
            <SectionHeading
              eyebrow="PORTFOLIO HIGHLIGHTS"
              title="Trusted Formulations for a"
              italicAccent="Healthier Tomorrow."
              description="High-demand pharmaceutical formulations formulated under stringent pharmacopoeial parameters by WHO-GMP certified manufacturing partners."
            />
            <Button href="/products" variant="secondary" size="md" showArrow>
              Explore All 27+ Products
            </Button>
          </div>

          {/* 2 in a row, 2 in column on Mobile View (2x2 grid) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Sourcing Attribution Notice */}
          <div className="mt-8 sm:mt-12 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6B7D]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2F6FA8] shrink-0" />
              <span>
                <strong>Sourcing Assurance:</strong> Opsus distributes formulations manufactured exclusively in WHO-GMP certified facilities with batch-tested Certificate of Analysis (CoA).
              </span>
            </div>
            <Link href="/quality" className="text-[#2F6FA8] font-semibold hover:underline shrink-0">
              Read Our Quality Standards →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ABOUT TEASER SPLIT SECTION (With Single Line Strip Trust Bar) */}
      <section className="py-16 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="ABOUT OPSUS"
                title="Driven by Quality."
                italicAccent="Built on Trust."
                description="Founded in 2010, Opsus Pharmaceuticals is an ethical pharmaceutical marketing and distribution enterprise dedicated to improving healthcare delivery across India. Rather than operating factories, we focus on rigorous supplier selection, pharmaceutical marketing excellence, and robust temperature-controlled distribution."
              />

              {/* Trust Features Grid */}
              <div className="mt-8 py-5 border-y border-[#E4E0D8]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Item 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#9A7332] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A1B33] block">Quality-Focused</span>
                      <span className="text-[11px] text-[#5B6B7D] block">WHO-GMP Sourced</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#9A7332] flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A1B33] block">Wide Product Range</span>
                      <span className="text-[11px] text-[#5B6B7D] block">27+ Formulations</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#9A7332] flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A1B33] block">Reliable Supply</span>
                      <span className="text-[11px] text-[#5B6B7D] block">Pan-India Logistics</span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#9A7332] flex items-center justify-center shrink-0">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#0A1B33] block">Long-Term Partners</span>
                      <span className="text-[11px] text-[#5B6B7D] block">150+ Healthcare Ties</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="/about" variant="primary" size="md" showArrow>
                  Our Story
                </Button>
                <Button href="/quality" variant="secondary" size="md">
                  Quality Standards
                </Button>
              </div>
            </div>

            {/* Right Visual Column (5 cols) with Stacked Blocks & Pull-Quote */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/about/about-stacked-blocks.jpg"
                  alt="Opsus Quality Principles and Long-term Trust"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/85 via-transparent to-transparent" />

                {/* Overlapping Frosted Quote Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E4E0D8]">
                  <p className="font-serif italic text-base sm:text-lg text-[#0A1B33] leading-relaxed mb-3">
                    &ldquo;Partnering for Better Health Across Generations.&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                    <span className="font-semibold text-[#16345F]">
                      Opsus Quality Commitment
                    </span>
                    <span className="text-[#C9A15E] font-medium">Est. 2010</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERSHIP CTA BAND */}
      <CtaBand
        eyebrow="GROW WITH OPSUS"
        title="Let's Build a Healthier Tomorrow."
        italicAccent="Together."
        description="Collaborate with Opsus Pharmaceuticals to bring WHO-GMP sourced medicines to your territory. Transparent commercial terms, reliable supply, and marketing support across 15+ states."
        primaryCtaText="Partner With Us"
        primaryCtaHref="/contact"
        secondaryCtaText="Franchise Information"
        secondaryCtaHref="/pcd-franchise"
        theme="dark"
        sideImage="/images/about/about-seedling-hands.jpg"
      />
    </div>
  );
}
