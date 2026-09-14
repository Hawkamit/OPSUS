'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, HeartPulse, Users2, Truck } from 'lucide-react';

export interface StrengthItem {
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'HeartPulse' | 'Users2' | 'Truck' | string;
  image: string;
}

interface StrengthsSliderProps {
  strengths: StrengthItem[];
}

export const StrengthsSlider: React.FC<StrengthsSliderProps> = ({ strengths }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderIcon = (name: string) => {
    const props = { className: 'w-4 h-4 md:w-5 md:h-5' };
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'Users2':
        return <Users2 {...props} />;
      case 'Truck':
        return <Truck {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 280;
    const newIdx = Math.round(container.scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(0, newIdx), strengths.length - 1));
  };

  const scrollToSlide = (idx: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).clientWidth + 16
      : 280;
    container.scrollTo({
      left: idx * itemWidth,
      behavior: 'smooth',
    });
    setActiveIndex(idx);
  };

  const prev = () => scrollToSlide(Math.max(0, activeIndex - 1));
  const next = () => scrollToSlide(Math.min(strengths.length - 1, activeIndex + 1));

  return (
    <div className="w-full">
      {/* MOBILE SLIDING VIEW (md:hidden) */}
      <div className="md:hidden">
        {/* Navigation & Progress Header */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[#0A1B33]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="w-5 h-[1.5px] bg-[#E4E0D8]" />
            <span className="font-serif text-xs text-[#5B6B7D]">
              {String(strengths.length).padStart(2, '0')}
            </span>
            <span className="text-[10px] text-[#2F6FA8] font-semibold uppercase tracking-wider ml-1 bg-[#2F6FA8]/10 px-2 py-0.5 rounded-full">
              Swipe Advantages
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prev}
              disabled={activeIndex === 0}
              className="w-8 h-8 rounded-full border border-[#E4E0D8] text-[#0A1B33] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors cursor-pointer"
              aria-label="Previous advantage"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={activeIndex === strengths.length - 1}
              className="w-8 h-8 rounded-full border border-[#E4E0D8] text-[#0A1B33] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none hover:bg-white transition-colors cursor-pointer"
              aria-label="Next advantage"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Swipe Reel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 scroll-smooth"
        >
          {strengths.map((s, idx) => {
            return (
              <div
                key={idx}
                className="w-[84vw] max-w-[320px] shrink-0 snap-center bg-white rounded-2xl border border-[#E4E0D8] p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-[#E4E0D8]/60">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="85vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/60 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 w-9 h-9 rounded-full bg-[#0A1B33] text-[#C9A15E] flex items-center justify-center shadow-md border border-white/20">
                      {renderIcon(s.iconName)}
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0A1B33] mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#5B6B7D] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E4E0D8] flex items-center gap-1.5 text-xs font-semibold text-[#0A1B33]">
                  <span>Core Pillar {idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A15E]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {strengths.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? 'w-6 bg-[#C9A15E]' : 'w-1.5 bg-[#E4E0D8]'
              }`}
              aria-label={`Go to advantage ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW (hidden md:grid) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
        {strengths.map((s, idx) => {
          return (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-[#E4E0D8] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-[#E4E0D8]/60">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-[#0A1B33] text-[#C9A15E] flex items-center justify-center shadow-md border border-white/20">
                    {renderIcon(s.iconName)}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#0A1B33] mb-2 group-hover:text-[#2F6FA8] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4E0D8] flex items-center gap-2 text-xs font-semibold text-[#0A1B33] group-hover:text-[#C9A15E]">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
