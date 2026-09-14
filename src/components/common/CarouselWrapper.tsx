'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselWrapperProps {
  children: React.ReactNode[];
  itemsPerPageDesktop?: number;
  itemsPerPageTablet?: number;
  itemsPerPageMobile?: number;
  showIndicators?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  itemsPerPageDesktop = 3,
  itemsPerPageTablet = 2,
  itemsPerPageMobile = 1,
  showIndicators = true,
  theme = 'light',
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;
  // Calculate total pages based on items
  const maxIndex = Math.max(0, totalItems - 1);

  const isDark = theme === 'dark';

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Format progress indicator e.g. "01 — 03"
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalItems).padStart(2, '0');

  return (
    <div className={`relative ${className}`}>
      {/* Top / Right Controls Header Bar */}
      <div className="flex items-center justify-between mb-6">
        {/* Numeric progress indicator */}
        <div className="flex items-center gap-2">
          <span
            className={`font-serif text-sm font-bold tracking-widest ${
              isDark ? 'text-[#E7CFA1]' : 'text-[#0A1B33]'
            }`}
          >
            {currentFormatted}
          </span>
          <span
            className={`w-6 h-[1.5px] ${
              isDark ? 'bg-white/30' : 'bg-[#E4E0D8]'
            }`}
          />
          <span
            className={`font-serif text-sm font-medium ${
              isDark ? 'text-slate-400' : 'text-[#5B6B7D]'
            }`}
          >
            {totalFormatted}
          </span>
        </div>

        {/* Circular outline arrow buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'border-white/25 text-white hover:bg-white/10 hover:border-white'
                : 'border-[#E4E0D8] text-[#0A1B33] hover:bg-[#FAF8F3] hover:border-[#0A1B33]'
            }`}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'border-white/25 text-white hover:bg-white/10 hover:border-white'
                : 'border-[#E4E0D8] text-[#0A1B33] hover:bg-[#FAF8F3] hover:border-[#0A1B33]'
            }`}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Overflow Container for Slides / Cards */}
      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar scroll-smooth flex gap-6 snap-x snap-mandatory py-2"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="shrink-0 snap-start transition-all duration-300 w-[85%] sm:w-[48%] lg:w-[31.5%]"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Mobile Dot Indicators */}
      {showIndicators && (
        <div className="flex sm:hidden items-center justify-center gap-1.5 mt-6">
          {children.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setCurrentIndex(dotIdx);
                if (containerRef.current) {
                  const cardWidth = containerRef.current.clientWidth * 0.85 + 24;
                  containerRef.current.scrollTo({
                    left: dotIdx * cardWidth,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'w-6 bg-[#C9A15E]'
                  : 'w-2 bg-slate-300 dark:bg-white/20'
              }`}
              aria-label={`Go to item ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
