import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/common/Button';

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  italicAccent?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  theme?: 'dark' | 'light';
  backgroundImage?: string;
  sideImage?: string;
  className?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  eyebrow = 'PARTNERSHIP OPPORTUNITY',
  title,
  italicAccent,
  description,
  primaryCtaText = 'Partner With Us',
  primaryCtaHref = '/pcd-franchise',
  secondaryCtaText,
  secondaryCtaHref,
  theme = 'dark',
  backgroundImage,
  sideImage,
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative py-16 md:py-24 overflow-hidden ${
        isDark ? 'bg-[#0A1B33] text-white' : 'bg-[#FAF8F3] text-[#0A1B33]'
      } ${className}`}
    >
      {/* Background Image with Dark Overlay if supplied */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B33] via-[#0A1B33]/90 to-[#0A1B33]/70" />
        </div>
      )}

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2F6FA8]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-96 h-96 rounded-full bg-[#C9A15E]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className={`${sideImage ? 'lg:col-span-7' : 'lg:col-span-8 lg:col-start-3 text-center'}`}>
            {eyebrow && (
              <div className={`inline-flex items-center gap-2.5 mb-3.5 ${!sideImage ? 'justify-center' : ''}`}>
                <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />
                <span className="eyebrow-text text-[#E7CFA1]">
                  {eyebrow}
                </span>
                {!sideImage && <span className="w-6 h-[2px] rounded-full bg-[#C9A15E]" />}
              </div>
            )}

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.15]">
              {title}{' '}
              {italicAccent && (
                <span className="italic font-serif text-[#C9A15E]">
                  {italicAccent}
                </span>
              )}
            </h2>

            {description && (
              <p
                className={`mt-4 text-base md:text-lg leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-[#5B6B7D]'
                } ${!sideImage ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
              >
                {description}
              </p>
            )}

            <div
              className={`mt-8 flex items-center gap-4 flex-wrap ${
                !sideImage ? 'justify-center' : 'justify-start'
              }`}
            >
              <Button
                href={primaryCtaHref}
                variant={isDark ? 'gold' : 'primary'}
                size="lg"
                showArrow
              >
                {primaryCtaText}
              </Button>

              {secondaryCtaText && secondaryCtaHref && (
                <Button
                  href={secondaryCtaHref}
                  variant={isDark ? 'outline-white' : 'secondary'}
                  size="lg"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>

          {/* Side Image (Optional, e.g. for seedling or handshake) */}
          {sideImage && (
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={sideImage}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1B33]/85 backdrop-blur-md border border-white/10 text-xs">
                  <div className="text-[#E7CFA1] font-serif italic text-sm mb-0.5">
                    &ldquo;Better Quality. Healthier Lives.&rdquo;
                  </div>
                  <div className="text-slate-300">
                    Committed to pan-India therapeutic access through WHO-GMP certified partners.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
