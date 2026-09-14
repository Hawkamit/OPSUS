import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
  headingTag?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicAccent,
  description,
  align = 'left',
  theme = 'light',
  className = '',
  headingTag: HeadingTag = 'h2',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  const headingSize = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.12]',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.18]',
    h3: 'text-xl sm:text-2xl md:text-3xl leading-[1.25]',
  }[HeadingTag];

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {/* Eyebrow Label + Rule Pattern */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-3 mb-3.5 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span
            className={`w-7 h-[2px] rounded-full ${
              isDark ? 'bg-[#C9A15E]' : 'bg-[#2F6FA8]'
            }`}
          />
          <span
            className={`eyebrow-text ${
              isDark ? 'text-[#E7CFA1]' : 'text-[#2F6FA8]'
            }`}
          >
            {eyebrow}
          </span>
          {isCenter && (
            <span
              className={`w-7 h-[2px] rounded-full ${
                isDark ? 'bg-[#C9A15E]' : 'bg-[#2F6FA8]'
              }`}
            />
          )}
        </div>
      )}

      {/* Serif Headline with Italic Accent */}
      <HeadingTag
        className={`font-serif tracking-tight font-normal ${headingSize} ${
          isDark ? 'text-white' : 'text-[#0A1B33]'
        }`}
      >
        {title}{' '}
        {italicAccent && (
          <span className="italic font-serif text-[#C9A15E] font-normal">
            {italicAccent}
          </span>
        )}
      </HeadingTag>

      {/* Supporting Paragraph */}
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-[#5B6B7D]'
          } ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
