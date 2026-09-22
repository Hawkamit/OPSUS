import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Award, Play, ArrowRight, Layers, HeartPulse } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { StatBar } from '@/components/common/StatBar';
import { CtaBand } from '@/components/common/CtaBand';
import { ProductCatalog } from '@/components/products/ProductCatalog';
import { products } from '@/data/products';

export const metadata = {
  title: 'Pharmaceutical Formulations & Products',
  description:
    'Explore Opsus Pharmaceuticals verified catalogue of high-demand formulations across Orthopaedics, Anti-Infectives, Gastroenterology, Respiratory, and Gynaecology. WHO-GMP partner sourced.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="OUR PRODUCTS"
                title="Trusted Formulations for a"
                italicAccent="Healthier Tomorrow."
                description="Our comprehensive pharmaceutical portfolio is curated to address prevalent therapeutic requirements across India. Sourced exclusively through accredited WHO-GMP certified manufacturing partners, our formulations offer consistent bioavailability, strict pharmacopoeial purity, and modern ALU-ALU packaging."
                headingTag="h1"
              />

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="#catalog" variant="primary" size="md" showArrow>
                  Explore All Products
                </Button>
                <Link
                  href="/quality"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1B33] hover:text-[#2F6FA8] py-2 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>Our Sourcing & Quality Standards</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Column: Capsule Macro Photo with Vertical Tagline */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/products/products-capsules-macro.jpg"
                  alt="Opsus Quality Formulations & Capsule Macro"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent" />

                {/* Vertical Tagline Overlay (Reference §6.3 item 1) */}
                <div className="absolute top-4 right-4 bottom-4 flex items-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/90 uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow">
                    SCIENCE FOR A HEALTHIER TOMORROW.
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-16 p-3 rounded-xl bg-[#0A1B33]/85 backdrop-blur-md text-xs text-white border border-white/10">
                  <div className="font-semibold text-[#E7CFA1]">
                    High-Potency Oral Solid Dosage
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    Tablets, softgel capsules, enteric pellets & syrups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STAT BAR */}
      <StatBar
        stats={[
          { value: '27+', label: 'Formulations', sublabel: 'Solid & Liquid Dosages', icon: 'Package' },
          { value: '9', label: 'Therapeutic Areas', sublabel: 'Specialist Medical Fields', icon: 'Award' },
          { value: '150+', label: 'Healthcare Partners', sublabel: 'Doctors & Distributors', icon: 'Users' },
          { value: '15+', label: 'States Presence', sublabel: 'Regional Distribution', icon: 'MapPin' },
        ]}
        theme="light"
      />

      {/* 3. PRODUCT CATALOG WITH FILTERS & SEARCH */}
      <section id="catalog" className="py-16 md:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCatalog initialProducts={products} />
        </div>
      </section>

      {/* 4. DARK "QUALITY & MANUFACTURING" BAND (§6.3 item 5) */}
      <section className="py-20 md:py-28 bg-[#0A1B33] text-white border-y border-[#1F385C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 mb-3.5">
                <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
                <span className="eyebrow-text text-[#E7CFA1]">
                  SOURCING & ACCREDITATION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight mb-4">
                A Stronger Future Built on <span className="italic font-serif text-[#C9A15E]">Quality.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Opsus Pharmaceuticals operates as an ethical pharmaceutical marketing and distribution enterprise. We deliberately select and partner with WHO-GMP certified manufacturing facilities equipped with automated cleanroom technologies, validated analytical laboratories, and high-speed packaging lines.
              </p>

              {/* 4-Item Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F2545] border border-[#1F385C]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A15E] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    WHO-GMP Certified Partners
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F2545] border border-[#1F385C]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A15E] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    Strict Quality Standards
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F2545] border border-[#1F385C]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A15E] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    Consistent Product Excellence
                  </span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F2545] border border-[#1F385C]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A15E] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    Regular Quality Audits
                  </span>
                </div>
              </div>

              <Button href="/quality" variant="gold" size="md" showArrow>
                Our Quality Approach
              </Button>
            </div>

            {/* Right Photo Column: QC Floor Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/products/products-quality-qc.jpg"
                  alt="Quality Assurance at WHO-GMP Partner Facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1B33]/90 backdrop-blur-md text-xs border border-white/10">
                  <div className="font-serif italic text-sm text-[#E7CFA1] mb-1">
                    WHO-GMP Certified Partner Cleanrooms
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    Computerized batch validation and automated sterile liquid and solid lines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIP CTA BAND WITH SEEDLING IMAGE (§6.3 item 6) */}
      <CtaBand
        eyebrow="DISTRIBUTION PARTNERSHIP"
        title="Let's Build a Healthier Tomorrow."
        italicAccent="Together."
        description="Partner with Opsus to distribute our catalogue of 33+ high-demand formulations in your territory, supported by marketing visual aids and ethical trade margins."
        primaryCtaText="Product & Franchise Inquiry"
        primaryCtaHref="/contact"
        secondaryCtaText="Franchise Details"
        secondaryCtaHref="/pcd-franchise"
        theme="dark"
        sideImage="/images/products/products-seedling-hands.jpg"
      />
    </div>
  );
}
