import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, CheckCircle2, ArrowRight, Pill, Layers, HeartPulse } from 'lucide-react';
import { therapeuticAreas } from '@/data/therapeutic-areas';
import { products } from '@/data/products';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { Button } from '@/components/common/Button';
import { ProductCard } from '@/components/common/ProductCard';
import { CtaBand } from '@/components/common/CtaBand';

interface AreaDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return therapeuticAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaDetailPageProps) {
  const { slug } = await params;
  const area = therapeuticAreas.find((a) => a.slug === slug);
  if (!area) return { title: 'Segment Not Found' };

  return {
    title: `${area.title} | Therapeutic Portfolios`,
    description: `${area.title}: ${area.shortDescription}. Sourced through WHO-GMP certified partners by Opsus Pharmaceuticals.`,
  };
}

export default async function TherapeuticAreaDetailPage({ params }: AreaDetailPageProps) {
  const { slug } = await params;
  const area = therapeuticAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  // Get products belonging to this therapeutic area
  const areaProducts = products.filter((p) => p.categorySlug === area.slug);

  // Other related therapeutic areas
  const otherAreas = therapeuticAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-[#FAF8F3]">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-[#E4E0D8] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Therapeutic Areas', href: '/therapeutic-areas' },
              { label: area.title },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#0A1B33] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={area.heroImage}
            alt={area.title}
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B33] via-[#0A1B33]/90 to-[#0A1B33]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
              <span className="eyebrow-text text-[#E7CFA1]">
                THERAPEUTIC SEGMENT
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              {area.title}
            </h1>
            <p className="font-serif italic text-lg sm:text-xl text-[#E7CFA1] mb-6">
              &ldquo;{area.tagline}&rdquo;
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
              {area.fullDescription}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Button href="#products" variant="gold" size="md" showArrow>
                View Available Formulations ({areaProducts.length})
              </Button>
              <Button href="/pcd-franchise" variant="outline-white" size="md">
                Enquire for Territory Rights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Clinical Focus Conditions */}
      <section className="py-12 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <span className="text-xs uppercase tracking-wider font-bold text-[#2F6FA8]">
                Clinical Indications
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0A1B33] mt-1">
                Target Health Areas
              </h3>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {area.keyConditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C9A15E] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#0A1B33]">
                    {cond}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulations Grid */}
      <section id="products" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#2F6FA8]">
                Available Portfolio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1B33]">
                {area.title} Formulations
              </h2>
            </div>
            <span className="text-xs text-[#5B6B7D]">
              All items supplied in tamper-evident packaging with full CoA verification.
            </span>
          </div>

          {areaProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {areaProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#E4E0D8]">
              <p className="text-sm text-[#5B6B7D] mb-4">
                Additional pipeline formulations in this segment are currently undergoing batch stability testing with our WHO-GMP partners.
              </p>
              <Button href="/products" variant="primary" size="sm">
                Explore Full Catalogue
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Other Related Segments */}
      <section className="py-16 bg-white border-t border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#0A1B33]">
              Other Therapeutic Areas
            </h3>
            <Link
              href="/therapeutic-areas"
              className="text-xs font-semibold text-[#2F6FA8] hover:text-[#0A1B33] inline-flex items-center gap-1"
            >
              <span>View All 8 Segments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherAreas.map((oa) => (
              <div
                key={oa.id}
                className="group bg-[#FAF8F3] rounded-2xl p-6 border border-[#E4E0D8] hover:border-[#C9A15E] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1B33] mb-2 group-hover:text-[#2F6FA8] transition-colors">
                    {oa.title}
                  </h4>
                  <p className="text-xs text-[#5B6B7D] line-clamp-2 mb-4">
                    {oa.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/therapeutic-areas/${oa.slug}`}
                  className="text-xs font-semibold text-[#0A1B33] group-hover:text-[#C9A15E] inline-flex items-center gap-1"
                >
                  <span>Explore Segment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Territory Rights CTA */}
      <CtaBand
        eyebrow="TERRITORY MONOPOLY"
        title="Distribute This Segment in Your"
        italicAccent="District."
        description="Launch an exclusive PCD franchise for our orthopaedic, antibiotic, or cardio-metabolic range with comprehensive promotional visual aids and marketing materials."
        primaryCtaText="Apply for PCD Franchise"
        primaryCtaHref="/pcd-franchise"
        secondaryCtaText="Contact Sales Team"
        secondaryCtaHref="/contact"
        theme="dark"
      />
    </div>
  );
}
