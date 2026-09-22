import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, ShieldCheck, MapPin, TrendingUp, Users, 
  Clock, Package, FileText, Gift, Sparkles, CheckCircle2,
  ArrowRight, Play, PhoneCall, HelpCircle
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PcdEnquiryForm } from '@/components/common/PcdEnquiryForm';
import { CtaBand } from '@/components/common/CtaBand';

export const metadata = {
  title: 'PCD Pharma Franchise | Monopoly Rights & Partnership Opportunities',
  description:
    'Partner with Opsus Pharmaceuticals for profitable PCD pharma franchise opportunities with exclusive monopoly marketing rights across 15+ Indian states. Full promotional visual aid support and WHO-GMP partner sourced medicines.',
};

export default function PcdFranchisePage() {
  const whyPartnerCards = [
    {
      title: 'Wide Product Range',
      description: '33+ formulations covering Orthopaedics, Anti-Infectives, Cardiology, Gastroenterology, Gynaecology, and Nutraceuticals.',
      icon: Package,
    },
    {
      title: 'Promotional Support',
      description: 'Comprehensive marketing visual aids, product glossaries, MR bags, visiting cards, catch covers, and physician sample catch-packs.',
      icon: Gift,
    },
    {
      title: 'Competitive Pricing',
      description: 'Attractive trade margins and realistic net rates designed to foster viable, profitable, and durable distributor equity.',
      icon: TrendingUp,
    },
    {
      title: 'Regular Product Updates',
      description: 'Continual addition of newly approved DCGI molecules and innovative dual-action combinations to keep you competitive.',
      icon: Sparkles,
    },
    {
      title: 'Dedicated Support Desk',
      description: 'Assigned regional business coordinators ensuring swift dispatch, invoice processing, and priority resolution of partner queries.',
      icon: PhoneCall,
    },
    {
      title: 'Long-Term Partnership',
      description: 'Transparent business terms, ethical dealings, and perpetual territory rights protection for performing franchise associates.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="PCD FRANCHISE & MONOPOLY DISTRIBUTION"
                title="Partner for"
                italicAccent="Growth. Deliver Better Health."
                description="Join India's reputable pharmaceutical marketing and distribution network. Opsus Pharmaceuticals offers monopoly-rights PCD franchise partnerships backed by WHO-GMP partner sourced medicines, high-margin commercial structures, and complete marketing collateral."
                headingTag="h1"
              />

              <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8] text-xs sm:text-sm text-[#5B6B7D] space-y-1.5">
                <div className="font-semibold text-[#0A1B33] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6FA8]" />
                  <span>Monopoly Territory Guarantee</span>
                </div>
                <p>
                  We grant strictly enforced geographic exclusivity for your nominated district, ensuring that your local medical marketing efforts reap long-term commercial returns without internal competition.
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Button href="#pcd-form" variant="primary" size="md" showArrow>
                  Start Your Franchise
                </Button>
                <a
                  href="#why-partner"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A1B33] hover:text-[#2F6FA8] py-2 transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span>How It Works</span>
                </a>
              </div>
            </div>

            {/* Right Photo Column: Handshake Photo with Italic Tagline */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/pcd/pcd-business-handshake.jpg"
                  alt="Business Handshake and Pharmaceutical Partnership"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E4E0D8]">
                  <p className="font-serif italic text-base text-[#0A1B33] font-semibold mb-1">
                    &ldquo;Stronger Partnerships. Healthier Tomorrow.&rdquo;
                  </p>
                  <p className="text-xs text-[#5B6B7D]">
                    Over 150+ successful franchise associations built over a decade of trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DARK 5-ICON BENEFIT STRIP (§6.6 item 2) */}
      <section className="py-12 bg-[#0A1B33] text-white border-y border-[#1F385C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Quality Products</h4>
              <p className="text-xs text-slate-300 mt-1">WHO-GMP Partner Sourced</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#2F6FA8]/20 text-[#2F6FA8] flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Monopoly Rights</h4>
              <p className="text-xs text-slate-300 mt-1">Exclusive District Allotment</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-3">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Marketing Support</h4>
              <p className="text-xs text-slate-300 mt-1">Visual Aids, Bags, LBLs</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#2F6FA8]/20 text-[#2F6FA8] flex items-center justify-center mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Timely Supply</h4>
              <p className="text-xs text-slate-300 mt-1">Dispatched in 24–48 Hours</p>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-white">Business Growth</h4>
              <p className="text-xs text-slate-300 mt-1">High Margins & Low Risk</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STAT ROW (§6.6 item 3) */}
      <section className="py-12 bg-[#FAF8F3] border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-300/60">
            <div className="pt-3 sm:pt-0 sm:px-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1B33]">150+</div>
              <div className="text-xs font-semibold text-[#16345F] mt-1">Franchise Partners</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:px-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1B33]">15+</div>
              <div className="text-xs font-semibold text-[#16345F] mt-1">States Presence</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:px-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1B33]">33+</div>
              <div className="text-xs font-semibold text-[#16345F] mt-1">Quality Formulations</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:px-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1B33]">10+</div>
              <div className="text-xs font-semibold text-[#16345F] mt-1">Years of Trust</div>
            </div>
            <div className="pt-3 sm:pt-0 sm:px-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C9A15E]">24×7</div>
              <div className="text-xs font-semibold text-[#16345F] mt-1">Partner Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "WHY PARTNER WITH US" 6-CARD GRID (§6.6 item 4) */}
      <section id="why-partner" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="DISTRIBUTION ADVANTAGES"
                title="Why Partner With"
                italicAccent="Opsus Pharmaceuticals?"
                description="We have engineered our franchise ecosystem to provide medical representatives, distributors, and entrepreneurial chemists with the operational and promotional firepower necessary to thrive locally."
              />
            </div>

            {/* Side Image of Stacked Growth Blocks (§6.6 item 4) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#E4E0D8]">
                <Image
                  src="/images/pcd/pcd-stacked-blocks.jpg"
                  alt="Quality and Long-term Growth Blocks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-serif italic text-sm text-[#E7CFA1]">
                    Ethical Commercial Growth
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="group bg-[#FAF8F3] rounded-2xl border border-[#E4E0D8] p-7 transition-all duration-300 hover:shadow-xl hover:border-[#C9A15E] hover:bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E0D8] text-[#2F6FA8] flex items-center justify-center mb-5 group-hover:bg-[#0A1B33] group-hover:text-[#C9A15E] group-hover:border-transparent transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#0A1B33] mb-2.5">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PCD ENQUIRY APPLICATION FORM (§6.6 item 6) */}
      <section className="py-20 md:py-28 bg-[#FAF8F3] border-t border-[#E4E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PcdEnquiryForm />
        </div>
      </section>

      {/* 6. DARK FINAL CTA BAND (§6.6 item 5) */}
      <CtaBand
        eyebrow="TAKE THE NEXT STEP"
        title="Let's Build a Healthier Tomorrow."
        italicAccent="Together."
        description="Check district availability right now. Gain exclusive monopoly marketing rights, marketing materials, and high-margin quality medicines."
        primaryCtaText="Become a Partner"
        primaryCtaHref="#pcd-form"
        secondaryCtaText="Talk to Our Team"
        secondaryCtaHref="/contact"
        theme="dark"
      />
    </div>
  );
}
