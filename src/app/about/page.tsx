import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, Layers, Truck, Users2, FileCheck2, 
  CheckCircle2, ArrowRight, HeartPulse, Building2, Play, Award
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CtaBand } from '@/components/common/CtaBand';
import { StrengthsSlider } from '@/components/about/StrengthsSlider';

export const metadata = {
  title: 'About Us | Driven by Quality, Built on Trust',
  description:
    'Learn about Opsus Pharmaceuticals, an ethical pharmaceutical marketing and distribution enterprise founded in 2010. Pan-India reach and WHO-GMP partner sourcing.',
};

export default function AboutPage() {
  const strengths = [
    {
      title: 'Quality Assurance',
      description: 'Continuous batch testing, Certificate of Analysis verification, and WHO-GMP partner compliance audits.',
      iconName: "ShieldCheck",
      image: '/images/quality/quality-lab-vials.jpg',
    },
    {
      title: 'Therapeutic Expertise',
      description: 'In-depth portfolio covering Orthopaedics, Anti-Infectives, Cardiology, Gastroenterology, and Gynaecology.',
      iconName: "HeartPulse",
      image: '/images/therapeutic-areas/therapeutic-clinical-care.jpg',
    },
    {
      title: 'Partner Success',
      description: 'Dedicated regional support, attractive trade margins, monopoly territory rights, and marketing visual aids.',
      iconName: "Users2",
      image: '/images/pcd/pcd-business-handshake.jpg',
    },
    {
      title: 'Sustainable Growth',
      description: 'Over a decade of consistent expansion across 15+ states with expanding regional distribution.',
      iconName: "Truck",
      image: '/images/hero/hero-logistics-03.jpg',
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="ABOUT OPSUS"
                title="Driven by"
                italicAccent="Quality. Built on Trust."
                description="Established in 2010, Opsus Pharmaceuticals is a trusted pharmaceutical marketing and distribution enterprise. We are dedicated to bridging high-standard pharmaceutical manufacturing with healthcare practitioners across India."
                headingTag="h1"
              />

              <div className="mt-6 space-y-4 text-sm text-[#5B6B7D] leading-relaxed">
                <p>
                  As an ethical marketing and distribution organization, Opsus does not own or operate manufacturing plants. Instead, our scientific board collaborates exclusively with accredited, WHO-GMP certified manufacturing partners who adhere to the highest global cGMP standards.
                </p>
                <p>
                  Our core mission is delivering accessible, high-efficacy medications backed by relentless quality audits, temperature-monitored supply chains, and transparent distributor relationships.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="/quality" variant="primary" size="md" showArrow>
                  Our Quality Approach
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1B33] hover:text-[#2F6FA8] py-2 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Column: Building Exterior with Opsus Signage */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#E4E0D8]">
                <Image
                  src="/images/about/about-building-exterior.jpg"
                  alt="Opsus Pharmaceuticals Corporate Center"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1B33]/85 backdrop-blur-md text-xs text-white border border-white/10">
                  <div className="font-serif italic text-sm text-[#E7CFA1]">
                    Corporate Headquarters & Distribution Operations
                  </div>
                  <div className="text-slate-300 mt-0.5">
                    Coordinating supply logistics across 15+ Indian states and healthcare partners.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DARK NAVY 5-ICON FEATURE STRIP */}
      <section className="py-12 bg-[#0A1B33] text-white border-y border-[#1F385C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Quality-Focused</h4>
              <p className="text-xs text-slate-300 mt-1">WHO-GMP Partner Formulations</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#2F6FA8]/20 text-[#2F6FA8] flex items-center justify-center mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Wide Range</h4>
              <p className="text-xs text-slate-300 mt-1">33+ Proven Formulations</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Reliable Supply</h4>
              <p className="text-xs text-slate-300 mt-1">Cold Chain Logistics</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#2F6FA8]/20 text-[#2F6FA8] flex items-center justify-center mb-3">
                <Users2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Partnerships</h4>
              <p className="text-xs text-slate-300 mt-1">150+ Healthcare Partners</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-3">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Ethical & Compliant</h4>
              <p className="text-xs text-slate-300 mt-1">Drugs & Cosmetics Act</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "OUR STRENGTHS" SECTION */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="CORE ADVANTAGES"
              title="The Strength Behind Every"
              italicAccent="Partnership."
              description="A decade of distributor loyalty has been forged on operational consistency, scientific responsibility, and collaborative growth."
            />
            <Button href="/contact" variant="primary" size="md" showArrow>
              Partner With Us
            </Button>
          </div>

          {/* Core Strengths: Mobile Sliding View & Desktop Grid */}
          <StrengthsSlider strengths={strengths} />
        </div>
      </section>

      {/* 4. COMMITMENT BAND (With Seedling Image) */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/about/about-seedling-hands.jpg"
                  alt="Commitment to Better Health for Every Community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-[#E4E0D8]">
                  <p className="font-serif italic text-base sm:text-lg text-[#0A1B33]">
                    &ldquo;Growth rooted in trust, patient health, and sustainable commercial partnerships.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <SectionHeading
                eyebrow="OUR COMMITMENT"
                title="Better Health for Every"
                italicAccent="Community."
                description="We envision a healthcare ecosystem where quality medicines are consistently available to doctors and patients regardless of geography."
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0 mt-1">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0A1B33]">Better Health</h4>
                    <p className="text-xs sm:text-sm text-[#5B6B7D] mt-0.5 leading-relaxed">
                      Rigorous supplier verification guarantees therapeutic consistency and high clinical efficacy for acute and chronic ailments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center shrink-0 mt-1">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0A1B33]">Strong Partnerships</h4>
                    <p className="text-xs sm:text-sm text-[#5B6B7D] mt-0.5 leading-relaxed">
                      Empowering medical representatives and distributors with ethical trade terms, dependable logistics, and marketing visual aids.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#0A1B33]">Shared Growth</h4>
                    <p className="text-xs sm:text-sm text-[#5B6B7D] mt-0.5 leading-relaxed">
                      Transparent pricing structures, regular new product additions, and long-term business security for our partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA BAND */}
      <CtaBand
        eyebrow="DISTRIBUTION PARTNERSHIP"
        title="Ready to Partner for"
        italicAccent="Growth?"
        description="Join over 150+ successful healthcare partners across 15+ states. Explore distribution and monopoly rights in your territory."
        primaryCtaText="Contact Us"
        primaryCtaHref="/contact"
        secondaryCtaText="Franchise Details"
        secondaryCtaHref="/pcd-franchise"
        theme="dark"
      />
    </div>
  );
}
