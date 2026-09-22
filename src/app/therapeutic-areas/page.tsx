import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  HeartPulse, ShieldAlert, Activity, HeartHandshake, 
  Flame, Wind, Sparkles, ShieldCheck, ArrowRight, CheckCircle2,
  Globe2, Users, Building, Award
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CtaBand } from '@/components/common/CtaBand';
import { TherapeuticCard } from '@/components/common/TherapeuticCard';
import { TherapeuticAutoSlider } from '@/components/therapeutic/TherapeuticAutoSlider';
import { therapeuticAreas } from '@/data/therapeutic-areas';

export const metadata = {
  title: 'Therapeutic Areas & Medical Segments',
  description:
    'Explore Opsus Pharmaceuticals 8 core therapeutic segments including Orthopaedics, Anti-Infectives, Cardiology, Gastroenterology, and Gynaecology.',
};

export default function TherapeuticAreasPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="THERAPEUTIC SPECIALIZATION"
                title="Focused Therapies."
                italicAccent="Healthier Lives."
                description="Opsus Pharmaceuticals maintains specialized portfolios aligned with prevalent healthcare needs across India. Through deep partnerships with WHO-GMP certified manufacturing facilities, we distribute targeted formulations engineered for efficacy, patient compliance, and clinical safety."
                headingTag="h1"
              />

              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="/products" variant="primary" size="md" showArrow>
                  Explore Our Products
                </Button>
                <Button href="/contact" variant="secondary" size="md">
                  Distribution Inquiries
                </Button>
              </div>
            </div>

            {/* Right Photo Column: Capsule Macro Photo with Vertical Tagline */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/therapeutic-areas/therapeutic-hero.jpg"
                  alt="Therapeutic Areas and Targeted Formulations"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/85 via-transparent to-transparent" />

                {/* Vertical Tagline Overlay (Reference §6.4 item 1) */}
                <div className="absolute top-4 right-4 bottom-4 flex items-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white/90 uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow">
                    TRUSTED THERAPIES FOR BRIGHTER TOMORROWS.
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-16 p-3.5 rounded-xl bg-[#0A1B33]/90 backdrop-blur-md text-xs text-white border border-white/10">
                  <div className="font-serif italic text-sm text-[#E7CFA1] mb-0.5">
                    Multi-Speciality Reach
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    From acute critical infections to long-term chronic cardiovascular stabilization.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 8-CARD GRID (2 rows x 4 desktop) */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] rounded-full bg-[#2F6FA8]" />
              <span className="eyebrow-text text-[#2F6FA8]">
                CLINICAL PORTFOLIO
              </span>
              <span className="w-6 h-[2px] rounded-full bg-[#2F6FA8]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0A1B33]">
              Specialized Care Across <span className="italic font-serif text-[#C9A15E]">8 Core Domains.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5B6B7D] mt-4 leading-relaxed">
              Every therapeutic segment is supported by evidence-based combinations, rigorous stability data, and specialized visual promotion materials for healthcare professionals.
            </p>
          </div>

          <TherapeuticAutoSlider areas={therapeuticAreas} />
        </div>
      </section>

      {/* 3. "COMPREHENSIVE CARE FOR HEALTHIER COMMUNITIES" SPLIT SECTION (§6.4 item 3) */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E4E0D8]">
                <Image
                  src="/images/therapeutic-areas/therapeutic-clinical-care.jpg"
                  alt="Doctor and Medical Specialist Consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E4E0D8]">
                  <p className="font-serif italic text-base sm:text-lg text-[#0A1B33] mb-1">
                    &ldquo;Evidence-guided formulations that physicians trust day after day.&rdquo;
                  </p>
                  <div className="text-xs text-[#2F6FA8] font-semibold">
                    Clinical Research & Distribution Synergy
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column with 4-Item Icon List */}
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="COMMUNITY HEALTH INITIATIVE"
                title="Comprehensive Care for"
                italicAccent="Healthier Communities."
                description="We believe therapeutic innovation is only as powerful as its accessibility. Our distribution model connects advanced medical solutions with healthcare providers even in underserved regions."
              />

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A1B33]">Expanding Access</h4>
                    <p className="text-xs text-[#5B6B7D] mt-0.5">
                      Ensuring consistent medicine supplies reach Tier-2 and Tier-3 urban and rural clinics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A1B33]">Improving Lives</h4>
                    <p className="text-xs text-[#5B6B7D] mt-0.5">
                      Formulations that alleviate chronic pain, resolve acute bacterial infections, and protect vascular vitality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A1B33]">Supporting Healthcare Partners</h4>
                    <p className="text-xs text-[#5B6B7D] mt-0.5">
                      Empowering medical professionals with validated literature, visual aids, and steady stock.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="w-10 h-10 rounded-full bg-[#A6317D]/10 text-[#A6317D] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A1B33]">Building a Healthier Tomorrow</h4>
                    <p className="text-xs text-[#5B6B7D] mt-0.5">
                      Long-term investment in ethical relationships, strict regulatory obedience, and transparent business ethics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button href="/quality" variant="primary" size="md" showArrow>
                  Our Approach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARK PURPOSE CTA BAND (§6.4 item 4) */}
      <CtaBand
        eyebrow="DISTRIBUTION OPPORTUNITIES"
        title="Better Therapies for a"
        italicAccent="Healthier Tomorrow."
        description="Collaborate with Opsus Pharmaceuticals to distribute premier therapeutic formulations in your district with dedicated regional support and robust product supply."
        primaryCtaText="Partner With Us"
        primaryCtaHref="/contact"
        secondaryCtaText="Franchise Model"
        secondaryCtaHref="/pcd-franchise"
        theme="dark"
      />
    </div>
  );
}
