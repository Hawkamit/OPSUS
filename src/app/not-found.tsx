import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Package, Mail } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const metadata = {
  title: 'Page Not Found',
  description: 'The requested pharmaceutical page or formulation could not be located.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#0A1B33] text-white flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2F6FA8]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[#C9A15E] font-bold block mb-3">
          404 ERROR • RESOURCE NOT FOUND
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-4 leading-tight">
          Looking for a Specific <span className="italic font-serif text-[#C9A15E]">Formulation?</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
          The page or pharmaceutical record you are looking for has been moved, re-indexed, or is currently undergoing regulatory update.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button href="/" variant="gold" size="md" showArrow>
            Return to Homepage
          </Button>
          <Button href="/products" variant="outline-white" size="md">
            Browse All Products
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-400">
          <Link href="/therapeutic-areas" className="hover:text-white transition-colors">
            Therapeutic Areas
          </Link>
          <Link href="/pcd-franchise" className="hover:text-white transition-colors">
            PCD Franchise
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
