'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { TherapeuticArea } from '@/types';
import { TherapeuticCard } from '@/components/common/TherapeuticCard';

interface TherapeuticAutoSliderProps {
  areas: TherapeuticArea[];
}

export const TherapeuticAutoSlider: React.FC<TherapeuticAutoSliderProps> = ({ areas }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Smoothly scrolls to target slide
  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 300;

    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  }, []);

  // Advances to the next slide, looping back to 0
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % areas.length;
      scrollToSlide(next);
      return next;
    });
  }, [areas.length, scrollToSlide]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => {
      const prevIdx = (prev - 1 + areas.length) % areas.length;
      scrollToSlide(prevIdx);
      return prevIdx;
    });
  }, [areas.length, scrollToSlide]);

  // Handle user activity (touch, swipe, click): pause and resume after 2s without activity
  const recordUserActivity = useCallback(() => {
    setIsInteracting(true);

    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }

    // After 2 seconds without any activity, resume auto sliding
    inactivityTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  }, []);

  // Auto-slide effect every 2 seconds without activity
  useEffect(() => {
    if (isInteracting) return;

    autoSlideIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [isInteracting, nextSlide]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
      if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  // Update activeIndex based on manual scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 300;
    const newIndex = Math.round(scrollLeft / itemWidth);
    const clamped = Math.min(Math.max(0, newIndex), areas.length - 1);
    setActiveIndex(clamped);
  };

  return (
    <div className="w-full">
      {/* MOBILE VIEW: AUTO-SLIDING CAROUSEL (md:hidden) */}
      <div
        className="md:hidden"
        onTouchStart={recordUserActivity}
        onTouchMove={recordUserActivity}
        onPointerDown={recordUserActivity}
      >
        {/* Slider Navigation & Status Header */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[#0A1B33]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="w-4 h-[1.5px] bg-[#E4E0D8]" />
            <span className="font-serif text-xs text-[#5B6B7D]">
              {String(areas.length).padStart(2, '0')}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-[#2F6FA8] font-semibold tracking-wider uppercase ml-1 bg-[#2F6FA8]/10 px-2.5 py-0.5 rounded-full">
              <Zap className="w-2.5 h-2.5 text-[#C9A15E]" />
              Auto-Slide 2s
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                recordUserActivity();
                prevSlide();
              }}
              className="w-8 h-8 rounded-full border border-[#E4E0D8] text-[#0A1B33] flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              aria-label="Previous domain"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                recordUserActivity();
                nextSlide();
              }}
              className="w-8 h-8 rounded-full border border-[#E4E0D8] text-[#0A1B33] flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
              aria-label="Next domain"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sliding Snap Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 scroll-smooth"
        >
          {areas.map((area) => (
            <div
              key={area.id}
              className="w-[84vw] max-w-[320px] shrink-0 snap-center"
            >
              <TherapeuticCard area={area} variant="dark" className="h-[360px]" />
            </div>
          ))}
        </div>

        {/* Progress & Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {areas.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                recordUserActivity();
                scrollToSlide(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-[#C9A15E]'
                  : 'w-1.5 bg-[#E4E0D8]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP / TABLET VIEW: FULL 8-CARD GRID (hidden md:grid) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area) => (
          <TherapeuticCard key={area.id} area={area} variant="dark" />
        ))}
      </div>
    </div>
  );
};
