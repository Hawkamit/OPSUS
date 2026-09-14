'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TherapeuticArea } from '@/types';
import { TherapeuticCard } from '@/components/common/TherapeuticCard';

interface TherapeuticSliderProps {
  areas: TherapeuticArea[];
}

export const TherapeuticSlider: React.FC<TherapeuticSliderProps> = ({ areas }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).clientWidth + 16 : 280;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(0, newIndex), areas.length - 1));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).clientWidth + 16 : 280;
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    scrollToSlide(Math.max(0, activeIndex - 1));
  };

  const handleNext = () => {
    scrollToSlide(Math.min(areas.length - 1, activeIndex + 1));
  };

  return (
    <div className="w-full">
      {/* MOBILE SLIDING VIEW (md:hidden) */}
      <div className="md:hidden">
        {/* Slider Controls Bar on Mobile */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[#0A1B33]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="w-5 h-[1.5px] bg-[#E4E0D8]" />
            <span className="font-serif text-xs text-[#5B6B7D]">
              {String(areas.length).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-[#2F6FA8] font-semibold uppercase tracking-wider ml-1 bg-[#2F6FA8]/10 px-2 py-0.5 rounded-full">
              Swipe to Explore
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-8 h-8 rounded-full border border-[#E4E0D8] text-[#0A1B33] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors"
              aria-label="Previous therapeutic segment"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === areas.length - 1}
              className="w-8 h-8 rounded-full border border-[#E4E0D8] text-[#0A1B33] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors"
              aria-label="Next therapeutic segment"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container (Smooth Snap) */}
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

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {areas.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-6 bg-[#C9A15E]'
                  : 'w-1.5 bg-[#E4E0D8]'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP & TABLET GRID VIEW (hidden md:block) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.slice(0, 4).map((area) => (
            <TherapeuticCard key={area.id} area={area} variant="dark" />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.slice(4, 8).map((area) => (
            <TherapeuticCard key={area.id} area={area} variant="dark" />
          ))}
        </div>
      </div>
    </div>
  );
};
