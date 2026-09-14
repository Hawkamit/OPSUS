import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Award, CheckCircle2, ArrowRight, Play, 
  Layers, FlaskConical, Factory, ClipboardCheck, Truck, Globe2
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CtaBand } from '@/components/common/CtaBand';
import { qualityProcessSteps, certifications } from '@/data/company';

export const metadata = {
  title: 'Quality & Regulatory Compliance | WHO-GMP Partner Standards',
  description:
    'Discover Opsus Pharmaceuticals rigorous 5-step quality framework. 100% sourcing through WHO-GMP certified manufacturing partners with strict batch testing and cold chain logistics.',
};

export default function QualityPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="QUALITY & COMPLIANCE SYSTEM"
                title="Quality In Every"
                italicAccent="Step."
                description="At Opsus Pharmaceuticals, quality is not a static endpoint—it is the governing philosophy that drives our partner qualification, analytical batch reviews, and pan-India temperature-controlled distribution."
                headingTag="h1"
              />

              <p className="mt-4 text-sm sm:text-base text-[#5B6B7D] leading-relaxed">
                As a pharmaceutical marketing and distribution company, we shoulder the solemn responsibility of ensuring that every tablet, capsule, and syrup bearing our brand complies strictly with national and international pharmacopoeial monographs. We achieve this by sourcing exclusively from accredited WHO-GMP certified manufacturing partners subject to periodic quality audits.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="#process" variant="primary" size="md" showArrow>
                  Our Quality Approach
                </Button>
                <a
                  href="#certifications"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1B33] hover:text-[#2F6FA8] py-2 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>View Certifications</span>
                </a>
              </div>
            </div>

            {/* Right Photo Column: Lab Photo with Vertical Tagline + Floating Quote Chip */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/quality/quality-scientist.jpg"
                  alt="Scientist in Quality Assurance Laboratory"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/85 via-transparent to-transparent" />

                {/* Vertical Tagline Overlay (Reference §6.5 item 1) */}
                <div className="absolute top-4 right-4 bottom-4 flex items-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-white/90 uppercase [writing-mode:vertical-rl] rotate-180 drop-shadow">
                    SCIENCE / SAFETY / CONSISTENCY / A HEALTHIER TOMORROW.
                  </span>
                </div>

                {/* Floating Quote Chip (§6.5 item 1) */}
                <div className="absolute bottom-4 left-4 right-16 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E4E0D8]">
                  <p className="font-serif italic text-xs sm:text-sm text-[#0A1B33] font-semibold">
                    &ldquo;Quality is a commitment, not a checkpoint.&rdquo;
                  </p>
                  <span className="text-[10px] text-[#2F6FA8] uppercase font-bold tracking-wider">
                    Opsus Governance Principle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 5-STEP PROCESS ROW (§6.5 item 2) */}
      <section id="process" className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] rounded-full bg-[#2F6FA8]" />
              <span className="eyebrow-text text-[#2F6FA8]">
                METHODICAL GOVERNANCE
              </span>
              <span className="w-6 h-[2px] rounded-full bg-[#2F6FA8]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#0A1B33]">
              The 5-Step <span className="italic font-serif text-[#C9A15E]">Quality Pathway.</span>
            </h2>
            <p className="text-sm text-[#5B6B7D] mt-3">
              Every pharmaceutical product distributed by Opsus traverses five rigorous stages of validation before reaching a dispensing healthcare provider.
            </p>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {qualityProcessSteps.map((step, idx) => {
              const icons = [FlaskConical, ClipboardCheck, Factory, ShieldCheck, Truck];
              const IconComp = icons[idx];

              return (
                <div
                  key={step.step}
                  className="relative group bg-white rounded-2xl p-6 border border-[#E4E0D8] shadow-sm hover:shadow-lg hover:border-[#C9A15E] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Roundel */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-full bg-[#0A1B33] text-[#C9A15E] flex items-center justify-center font-serif text-lg font-bold shadow-md">
                        {step.step}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#2F6FA8] px-2.5 py-1 rounded-full bg-[#2F6FA8]/10">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0A1B33] mb-2 group-hover:text-[#2F6FA8] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#5B6B7D] leading-relaxed">
                      {step.caption}
                    </p>
                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {idx < 4 && (
                    <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#0A1B33] text-white flex items-center justify-center shadow-md">
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A15E]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DARK "CERTIFIED FOR A BETTER TOMORROW" BAND (§6.5 item 3) */}
      <section id="certifications" className="py-20 md:py-28 bg-[#0A1B33] text-white border-y border-[#1F385C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column with 4 Certification Badges */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 mb-3.5">
                <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
                <span className="eyebrow-text text-[#E7CFA1]">
                  STANDARDS & AUDITS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal mb-4 leading-tight">
                Certified for a <span className="italic font-serif text-[#C9A15E]">Better Tomorrow.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                We attribute all manufacturing to WHO-GMP certified partner facilities equipped with validated cleanroom air-handling (HEPA filtration), automated blister lines, and GLP-compliant analytical testing laboratories. Opsus conducts independent audits of batch manufacturing records (BMR) and Certificate of Analysis (CoA) documentation.
              </p>

              {/* 4 Certification Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.code}
                    className="p-4 rounded-xl bg-[#0F2545] border border-[#1F385C] hover:border-[#C9A15E]/60 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Award className="w-5 h-5 text-[#C9A15E] shrink-0" />
                      <span className="font-serif font-bold text-base text-white">
                        {cert.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="font-serif italic text-base text-[#E7CFA1]">
                &ldquo;Global Standards. Stronger Communities.&rdquo;
              </div>
            </div>

            {/* Right Photo Column: Vial Tray Inspection */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/quality/quality-lab-vials.jpg"
                  alt="Sterile Injection Vials on Inspection Surface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1B33]/90 backdrop-blur-md border border-white/10 text-xs">
                  <div className="font-serif italic text-sm text-[#E7CFA1] mb-1">
                    WHO-GMP Partner Packaging Verification
                  </div>
                  <div className="text-slate-300">
                    High-barrier moisture protection, laser-etched batch coding, and tamper-evident seals.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPLIT BAND: CAPSULE PHOTO + COMMITMENT IN NUMBERS (§6.5 item 4) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E4E0D8]">
                <Image
                  src="/images/products/products-capsules-macro.jpg"
                  alt="Opsus Capsule Macro and Quality Assurance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E4E0D8]">
                  <p className="font-serif italic text-xl text-[#0A1B33] mb-1">
                    &ldquo;Better Quality. Healthier Lives.&rdquo;
                  </p>
                  <p className="text-xs text-[#5B6B7D]">
                    Our guiding standard across every product release and supply corridor.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: "Our Commitment in Numbers" */}
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="VERIFIED IMPACT"
                title="Our Commitment in"
                italicAccent="Numbers."
                description="Quantifiable metrics reflect our zero-tolerance approach toward substandard pharmaceuticals and our dedication to partner trust."
              />

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1B33] mb-1">
                    100%
                  </div>
                  <div className="text-xs font-bold text-[#2F6FA8] uppercase tracking-wider mb-1">
                    Quality Checked
                  </div>
                  <p className="text-xs text-[#5B6B7D]">
                    Every batch backed by certified independent laboratory assay.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C9A15E] mb-1">
                    0
                  </div>
                  <div className="text-xs font-bold text-[#0A1B33] uppercase tracking-wider mb-1">
                    Compromise on Safety
                  </div>
                  <p className="text-xs text-[#5B6B7D]">
                    Uncompromising adherence to pharmacopoeial specifications.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#2F6FA8] mb-1">
                    500+
                  </div>
                  <div className="text-xs font-bold text-[#0A1B33] uppercase tracking-wider mb-1">
                    Trusted Partners
                  </div>
                  <p className="text-xs text-[#5B6B7D]">
                    Long-term stockists and franchise associates across 28+ states.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#A6317D] mb-1">
                    Millions
                  </div>
                  <div className="text-xs font-bold text-[#0A1B33] uppercase tracking-wider mb-1">
                    Lives Impacted
                  </div>
                  <p className="text-xs text-[#5B6B7D]">
                    Restoring health, mobility, and well-being every single day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK GLOBE/NETWORK CTA BAND (§6.5 item 5) */}
      <CtaBand
        eyebrow="GLOBAL STANDARDS"
        title="Partnering for a"
        italicAccent="Healthier World."
        description="Whether you are an established pharmaceutical distributor or an aspiring PCD franchise entrepreneur, partner with an organization that puts quality above all else."
        primaryCtaText="Partner With Us"
        primaryCtaHref="/pcd-franchise"
        secondaryCtaText="Contact Quality Desk"
        secondaryCtaHref="/contact"
        theme="dark"
      />
    </div>
  );
}
