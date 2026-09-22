import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake, 
  Globe2, CheckCircle2, MessageSquare, ExternalLink, Headphones,
  Users2, ArrowRight
} from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/common/ContactForm';
import { Button } from '@/components/common/Button';

export const metadata = {
  title: 'Contact Us | Corporate Headquarters & Distribution Desks',
  description:
    'Get in touch with Opsus Pharmaceuticals for wholesale distribution inquiries, PCD pharma franchise applications, product details, and partnership support.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SPLIT SECTION (§6.8 item 1) */}
      <section className="relative py-16 md:py-24 bg-white border-b border-[#E4E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="REACH OUT TO OPSUS"
                title="Let's Build a Healthier Tomorrow."
                italicAccent="Together."
                description="Whether you are an established wholesale distributor, a doctor seeking product information, or an entrepreneur exploring monopoly PCD franchise rights, our commercial and medical desks are ready to assist."
                headingTag="h1"
              />

              {/* 4-Icon Row (§6.8 item 1) */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#E4E0D8]">
                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0A1B33]">Quick Response</span>
                  <span className="text-[11px] text-[#5B6B7D]">Within 24 Hours</span>
                </div>

                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center mb-2">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0A1B33]">Dedicated Support</span>
                  <span className="text-[11px] text-[#5B6B7D]">Assigned Manager</span>
                </div>

                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center mb-2">
                    <Users2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0A1B33]">Partnership</span>
                  <span className="text-[11px] text-[#5B6B7D]">Monopoly Rights</span>
                </div>

                <div className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-[#A6317D]/10 text-[#A6317D] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-[#0A1B33]">Verified Data</span>
                  <span className="text-[11px] text-[#5B6B7D]">CoA & Licences</span>
                </div>
              </div>
            </div>

            {/* Right Photo Column: Reception Desk Photo with Tagline */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#E4E0D8]">
                <Image
                  src="/images/contact/contact-reception.jpg"
                  alt="Opsus Pharmaceuticals Executive Reception & Consultation Center"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E4E0D8]">
                  <p className="font-serif italic text-base text-[#0A1B33] font-semibold mb-1">
                    &ldquo;Better Health Through Stronger Partnerships.&rdquo;
                  </p>
                  <p className="text-xs text-[#5B6B7D]">
                    Welcoming distributors, clinicians, and partners nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN INTERACTIVE FORM & CONTACT DETAILS (§6.8 item 2) */}
      <section className="py-20 md:py-28 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Information Panel + Embedded Map (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Information Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E4E0D8] shadow-sm space-y-6">
                <h3 className="font-serif text-2xl font-bold text-[#0A1B33]">
                  Our Contact Information
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                    <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0A1B33]">Phone & Helpline</div>
                      <div className="text-[#2F6FA8] font-semibold text-sm mt-0.5">+91 98XXX XXXXX</div>
                      <div className="text-[11px] text-[#5B6B7D] mt-1">
                        Operational Hours: Monday – Saturday, 9:30 AM to 6:30 PM IST
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                    <div className="w-10 h-10 rounded-full bg-[#C9A15E]/15 text-[#C9A15E] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0A1B33]">Electronic Mail</div>
                      <div className="text-[#0A1B33] font-semibold text-sm mt-0.5">contact@opsuspharma.com</div>
                      <div className="text-[11px] text-[#5B6B7D] mt-1">
                        Average response turnaround: Under 24 business hours
                      </div>
                    </div>
                  </div>

                  {/* Registered Office */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF8F3] border border-[#E4E0D8]">
                    <div className="w-10 h-10 rounded-full bg-[#2F6FA8]/10 text-[#2F6FA8] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0A1B33]">Registered Corporate Office</div>
                      <p className="text-xs text-[#5B6B7D] mt-1 leading-relaxed">
                        Opsus Corporate Tower, Plot No. 42-B, Sector 18, Commercial Hub, [Placeholder — City, State, PIN - 110001]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Statutory Regulatory Notice */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-[#2F6FA8] leading-relaxed">
                  <strong>Regulatory Note:</strong> Opsus Pharmaceuticals is an ethical marketing and distribution entity with Drug Licences Form 20B & 21B issued under the Drugs and Cosmetics Act.
                </div>
              </div>

              {/* Embedded Map Representation */}
              <div className="bg-white rounded-3xl p-6 border border-[#E4E0D8] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A15E]" />
                    <span className="font-serif font-bold text-sm text-[#0A1B33]">
                      Corporate Location
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#2F6FA8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Map Graphic Container */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0A1B33] border border-[#E4E0D8] flex items-center justify-center text-center p-6">
                  {/* Subtle Grid Lines Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F385C_1px,transparent_1px),linear-gradient(to_bottom,#1F385C_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#C9A15E] text-[#0A1B33] flex items-center justify-center mx-auto mb-2 shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6 fill-current" />
                    </div>
                    <div className="font-serif font-bold text-white text-sm">
                      Opsus Corporate Hub
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Sector 18 Commercial District
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DARK COMMITMENT CTA BAND (§6.8 item 3) */}
      <section className="py-20 md:py-28 bg-[#0A1B33] text-white border-t border-[#1F385C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
              <span className="eyebrow-text text-[#E7CFA1]">
                PARTNER FOCUS
              </span>
              <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
              Your Success <span className="italic font-serif text-[#C9A15E]">Matters to Us.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              We grow only when our healthcare partners and franchise associates grow. Experience transparent commercial policies and prompt logistics.
            </p>

            {/* 4-Icon Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <div className="p-4 rounded-xl bg-[#0F2545] border border-[#1F385C] text-center">
                <ShieldCheck className="w-6 h-6 text-[#C9A15E] mx-auto mb-2" />
                <span className="text-xs font-bold text-white block">Quality Products</span>
                <span className="text-[11px] text-slate-300">WHO-GMP Sourced</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0F2545] border border-[#1F385C] text-center">
                <HeartHandshake className="w-6 h-6 text-[#2F6FA8] mx-auto mb-2" />
                <span className="text-xs font-bold text-white block">Trusted Partnerships</span>
                <span className="text-[11px] text-slate-300">150+ Active Ties</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0F2545] border border-[#1F385C] text-center">
                <Globe2 className="w-6 h-6 text-[#C9A15E] mx-auto mb-2" />
                <span className="text-xs font-bold text-white block">Regional Reach</span>
                <span className="text-[11px] text-slate-300">15+ Indian States</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0F2545] border border-[#1F385C] text-center">
                <CheckCircle2 className="w-6 h-6 text-[#2F6FA8] mx-auto mb-2" />
                <span className="text-xs font-bold text-white block">Healthier Communities</span>
                <span className="text-[11px] text-slate-300">Sustainable Care</span>
              </div>
            </div>

            <Button href="#contact-form" variant="gold" size="lg" showArrow>
              Send an Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
