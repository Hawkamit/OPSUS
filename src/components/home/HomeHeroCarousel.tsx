'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
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
    title: 'Better Healthcare Through Stronger',
    italicAccent: 'Partnerships.',
    description:
      'Connecting verified WHO-GMP certified manufacturing partners with doctors, chemists, and patients nationwide through dependable distribution, ethical standards, and scientific consistency.',
    primaryCtaText: 'Explore Our Products',
    primaryCtaHref: '/products',
    secondaryCtaText: 'Become a Partner',
    secondaryCtaHref: '/pcd-franchise',
    image: '/images/hero/hero-scientist-microscope-01.jpg',
    tagline: 'Quality Today. Healthier Tomorrow.',
  },
  {
    id: '02',
    eyebrow: 'WHO-GMP SOURCED FORMULATIONS',
    title: 'Uncompromising Standards in Every',
    italicAccent: 'Formulation.',
    description:
      'Strict partner qualification, batch-tested Certificate of Analysis (CoA) verification, and climate-controlled cold chain logistics ensuring clinical therapeutic integrity.',
    primaryCtaText: 'Our Quality Approach',
    primaryCtaHref: '/quality',
    secondaryCtaText: 'View Certifications',
    secondaryCtaHref: '/quality',
    image: '/images/hero/hero-capsules-macro-02.jpg',
    tagline: 'Science. Safety. Integrity.',
  },
  {
    id: '03',
    eyebrow: 'PCD FRANCHISE & MONOPOLY RIGHTS',
    title: 'Partner for Growth. Deliver Better',
    italicAccent: 'Health.',
    description:
      'Lucrative monopoly distribution opportunities across 28+ states. Receive full marketing support, dedicated regional assistance, and attractive commercial margins.',
    primaryCtaText: 'Start Your Franchise',
    primaryCtaHref: '/pcd-franchise',
    secondaryCtaText: 'Contact Our Desk',
    secondaryCtaHref: '/contact',
    image: '/images/hero/hero-logistics-03.jpg',
    tagline: 'Pan-India Distribution Network.',
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
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] bg-[#0A1B33] text-white overflow-hidden flex flex-col justify-between">
      {/* Background Slides with Cross-Fade */}
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
            className="object-cover object-right-top md:object-center scale-105 transition-transform duration-10000"
            sizes="100vw"
          />
          {/* Deep Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B33] via-[#0A1B33]/85 to-[#0A1B33]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33] via-transparent to-[#0A1B33]/60" />
        </div>
      ))}

      {/* Top Bar inside Hero with Italic Tagline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A15E] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#E7CFA1] font-semibold">
            ESTABLISHED 2010 • PAN-INDIA PHARMA
          </span>
        </div>
        <div className="hidden sm:block font-serif italic text-sm text-[#C9A15E]">
          &ldquo;{current.tagline}&rdquo;
        </div>
      </div>

      {/* Main Hero Content Stack */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label + Horizontal Rule */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] rounded-full bg-[#C9A15E]" />
            <span className="eyebrow-text text-[#E7CFA1]">
              {current.eyebrow}
            </span>
          </div>

          {/* Large Serif Headline with Italic Accent */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal leading-[1.12] tracking-tight text-white mb-6">
            {current.title}{' '}
            <span className="italic font-serif text-[#C9A15E] font-normal">
              {current.italicAccent}
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mb-8 font-light">
            {current.description}
          </p>

          {/* Primary Pill CTA + Secondary Link */}
          <div className="flex items-center gap-5 flex-wrap">
            <Button
              href={current.primaryCtaHref}
              variant="gold"
              size="lg"
              showArrow
              className="shadow-xl"
            >
              {current.primaryCtaText}
            </Button>

            <Link
              href={current.secondaryCtaHref}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-[#C9A15E] transition-colors py-2"
            >
              <span>{current.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-[#C9A15E]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Hero Control Strip & Tagline */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0A1B33]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Tagline Strip */}
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase text-center sm:text-left">
            SCIENCE <span className="text-[#C9A15E] mx-1">|</span> QUALITY <span className="text-[#C9A15E] mx-1">|</span> PEOPLE <span className="text-[#C9A15E] mx-1">|</span> A HEALTHIER TOMORROW.
          </div>

          {/* Carousel Navigator: 01 — 03 + Prev/Next Arrows */}
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
                className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors cursor-pointer"
                aria-label="Previous Hero Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 hover:border-white transition-colors cursor-pointer"
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
