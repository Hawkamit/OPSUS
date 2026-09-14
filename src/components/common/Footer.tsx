import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { FooterRegulatoryDrawer } from '@/components/common/FooterRegulatoryDrawer';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1B33] text-white border-t border-[#1F385C] relative overflow-hidden">
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F6FA8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A15E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#1F385C]">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4">
            <Logo variant="dark" size="md" className="mb-5" />
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Opsus™ Pharmaceuticals is a premier marketing and distribution company founded in 2010. We deliver high-standard therapeutic solutions manufactured exclusively through accredited WHO-GMP certified partner facilities across India.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2545] border border-[#1F385C] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C9A15E] hover:bg-[#16345F] transition-all"
                aria-label="Opsus Pharmaceuticals on LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://wa.me/[Placeholder]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2545] border border-[#1F385C] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C9A15E] hover:bg-[#16345F] transition-all"
                aria-label="Opsus Pharmaceuticals WhatsApp Helpline"
              >
                <span className="text-xs font-bold">WA</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2545] border border-[#1F385C] flex items-center justify-center text-slate-300 hover:text-white hover:border-[#C9A15E] hover:bg-[#16345F] transition-all"
                aria-label="Opsus Pharmaceuticals Video Updates"
              >
                <span className="text-xs font-bold">YT</span>
              </a>
            </div>
          </div>

          {/* Col 2: Company Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15E]" />
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  About Opsus
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Quality Approach
                </Link>
              </li>
              <li>
                <Link href="/pcd-franchise" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  PCD Franchise
                </Link>
              </li>
              <li>
                <Link href="/therapeutic-areas" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Therapeutic Areas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Segments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15E]" />
              Key Segments
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/therapeutic-areas/orthopaedics-pain-management" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Orthopaedics & Pain Care
                </Link>
              </li>
              <li>
                <Link href="/therapeutic-areas/antibiotics-anti-infectives" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Antibiotics & Anti-Infectives
                </Link>
              </li>
              <li>
                <Link href="/therapeutic-areas/cardiology-diabetes" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Cardiology & Diabetes
                </Link>
              </li>
              <li>
                <Link href="/therapeutic-areas/gynaecology-womens-health" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Gynaecology & Women Health
                </Link>
              </li>
              <li>
                <Link href="/therapeutic-areas/gastroenterology" className="text-slate-300 hover:text-[#C9A15E] transition-colors">
                  Gastroenterology
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#C9A15E] font-medium inline-flex items-center gap-1 hover:underline pt-1">
                  Browse All Formulations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Regulatory (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A15E]" />
              Corporate Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A15E] shrink-0 mt-1" />
                <span>
                  Opsus™ Corporate Tower, Plot No. 42-B, Sector 18, Commercial Hub, [Placeholder — City, State, PIN]
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A15E] shrink-0" />
                <span>+91 98XXX XXXXX (Toll Free: 1800-XXX-XXXX)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C9A15E] shrink-0" />
                <span>contact@opsuspharma.com</span>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-[#0F2545] border border-[#1F385C] text-xs">
              <div className="font-semibold text-[#E7CFA1] mb-1">Regulatory Status:</div>
              <p className="text-slate-300 leading-relaxed">
                Wholesale Drug Licences Form 20B & 21B issued under Drugs and Cosmetics Act. Products formulated through WHO-GMP approved partners.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Statutory Regulatory & Drug Licensing Accordion */}
        <FooterRegulatoryDrawer />

        {/* Legal Disclaimer & Mandatory Context */}
        <div className="py-6 border-b border-[#1F385C] text-xs text-slate-400 leading-relaxed">
          <p>
            <strong>Important Regulatory Disclaimer:</strong> Opsus Pharmaceuticals is a registered pharmaceutical marketing and distribution company. Opsus Pharmaceuticals does not own or operate a manufacturing plant. All medicines and therapeutic products are manufactured on a contract/loan licence basis exclusively by accredited WHO-GMP certified manufacturing partners under stringent quality control specifications. Information on this website is intended solely for registered medical practitioners, healthcare professionals, and authorized distributors, and is not a substitute for clinical diagnosis or prescription guidance.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2010–{new Date().getFullYear()} Opsus™ Pharmaceuticals. All rights reserved.
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Distribution
            </Link>
            <Link href="/quality" className="hover:text-white transition-colors">
              Quality Compliance
            </Link>
            <Link href="/pcd-franchise" className="text-[#C9A15E] hover:underline">
              PCD Monopoly Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
