'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/common/Button';

interface Slide {
  id: string;
  eyebrow: string;
  title: string;
  italicAccent: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  image: string;
  tagline: string;
}

const slides: Slide[] = [
  {
    id: '01',
    eyebrow: 'PHARMACEUTICAL MARKETING & DISTRIBUTION',
    title: 'Precision Formulations for a',
    italicAccent: 'Healthier Tomorrow.',
    description:
      'Connecting verified WHO-GMP certified manufacturing facilities with healthcare practitioners, chemists, and regional distributors across India through ethical marketing and dependable supply.',
    primaryCtaText: 'Explore Formulations',
    primaryCtaHref: '/products',
    secondaryCtaText: 'Partner With Us',
    secondaryCtaHref: '/contact',
    image: '/images/hero/hero-scientist-microscope-01.jpg',
    tagline: 'Quality Today. Healthier Tomorrow.',
  },
  {
    id: '02',
    eyebrow: 'WHO-GMP SOURCED MEDICINES',
    title: 'Uncompromising Standards in Every',
    italicAccent: 'Formulation.',
    description:
      'Every batch is sourced exclusively through accredited WHO-GMP partner cleanrooms, backed by full Certificate of Analysis (CoA) testing and strict pharmacopoeial compliance.',
    primaryCtaText: 'Our Quality Standards',
    primaryCtaHref: '/quality',
    secondaryCtaText: 'Therapeutic Areas',
    secondaryCtaHref: '/therapeutic-areas',
    image: '/images/hero/hero-capsules-macro-02.jpg',
    tagline: 'Science. Purity. Integrity.',
  },
  {
    id: '03',
    eyebrow: 'REGIONAL DISTRIBUTION & MONOPOLY RIGHTS',
    title: 'Partner for Growth. Deliver Better',
    italicAccent: 'Outcomes.',
    description:
      'Extensive distribution network across 15+ states. Benefit from ethical monopoly rights, comprehensive promotional visual aids, and predictable commercial terms.',
    primaryCtaText: 'Explore Franchise Model',
    primaryCtaHref: '/pcd-franchise',
    secondaryCtaText: 'Contact Our Team',
    secondaryCtaHref: '/contact',
    image: '/images/hero/hero-logistics-03.jpg',
    tagline: 'Reliable Pan-India Supply.',
  },
];

export const HomeHeroCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const current = slides[activeSlide];

  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] bg-[#0A1B33] text-white overflow-hidden flex flex-col justify-between border-b border-[#1F385C]">
      {/* 1. Full-Bleed Background Images with Smooth Cross-Fade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={idx === 0}
            className="object-cover object-right-top md:object-center scale-105 transition-transform duration-10000 ease-linear"
            sizes="100vw"
          />
          {/* Theme Brand Navy Vignettes (#0A1B33) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B33]/95 via-[#0A1B33]/80 to-[#0A1B33]/30 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33] via-transparent to-[#0A1B33]/40" />
        </div>
      ))}

      {/* 2. Top Header Status Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#0F2545]/80 backdrop-blur-md border border-[#1F385C] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C9A15E] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E7CFA1] font-semibold">
            ESTABLISHED 2010 • PAN-INDIA PHARMACEUTICAL ENTERPRISE
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-serif italic text-xs sm:text-sm text-[#E7CFA1]/90">
          <span>&ldquo;{current.tagline}&rdquo;</span>
        </div>
      </div>

      {/* 3. Main Minimal Editorial Content Stack */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-24 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] rounded-full bg-gradient-to-r from-[#E7CFA1] to-[#C9A15E]" />
            <span className="eyebrow-text text-[#E7CFA1] tracking-[0.25em] font-semibold text-xs sm:text-sm">
              {current.eyebrow}
            </span>
          </div>

          {/* Large Serif Headline with Luminous Gold Accent */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal leading-[1.12] tracking-tight text-white mb-6">
            {current.title}{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#FCECD0] via-[#E2B96A] to-[#C9A15E] bg-clip-text text-transparent">
              {current.italicAccent}
            </span>
          </h1>

          {/* Clean Supporting Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-light max-w-2xl mb-8 sm:mb-10">
            {current.description}
          </p>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <Button
              href={current.primaryCtaHref}
              variant="gold"
              size="lg"
              showArrow
              className="shadow-2xl shadow-[#C9A15E]/20 hover:brightness-110 px-7 sm:px-9 text-sm sm:text-base font-bold"
            >
              {current.primaryCtaText}
            </Button>

            <Link
              href={current.secondaryCtaHref}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white/95 hover:text-[#E7CFA1] px-5 py-3 rounded-full bg-[#0F2545]/70 backdrop-blur-md border border-[#1F385C] hover:border-[#C9A15E]/60 transition-all duration-300 group"
            >
              <span>{current.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-[#C9A15E] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Minimal 3-Item Quick Trust Metrics */}
          <div className="pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">100%</div>
              <div className="text-[11px] sm:text-xs font-medium text-[#E7CFA1]">WHO-GMP Sourced</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">27+</div>
              <div className="text-[11px] sm:text-xs font-medium text-[#E7CFA1]">Verified Medicines</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold text-white">15+</div>
              <div className="text-[11px] sm:text-xs font-medium text-[#E7CFA1]">States Presence</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Sleek Control Strip & Slide Progress */}
      <div className="relative z-10 w-full border-t border-[#1F385C] bg-[#0A1B33]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quality Assurance Strip */}
          <div className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase text-center sm:text-left flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>SCIENCE <span className="text-[#C9A15E] mx-1">|</span> QUALITY <span className="text-[#C9A15E] mx-1">|</span> PEOPLE <span className="text-[#C9A15E] mx-1">|</span> A HEALTHIER TOMORROW.</span>
          </div>

          {/* Carousel Navigator: 01 — 03 + Minimal Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm font-bold text-[#E7CFA1]">
                {String(activeSlide + 1).padStart(2, '0')}
              </span>
              <span className="w-5 h-[1.5px] bg-white/30" />
              <span className="font-serif text-xs text-slate-400">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/15 hover:border-white transition-colors cursor-pointer"
                aria-label="Previous Hero Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/15 hover:border-white transition-colors cursor-pointer"
                aria-label="Next Hero Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
