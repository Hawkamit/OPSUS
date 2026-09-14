import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '', size = 'md' }) => {
  const isDark = variant === 'dark';

  const sizeStyles = {
    sm: {
      imgSize: 32,
      titleSize: 'text-lg',
      subtitleSize: 'text-[9px]',
      tracking: 'tracking-[0.18em]',
    },
    md: {
      imgSize: 42,
      titleSize: 'text-2xl',
      subtitleSize: 'text-[10px]',
      tracking: 'tracking-[0.22em]',
    },
    lg: {
      imgSize: 52,
      titleSize: 'text-3xl',
      subtitleSize: 'text-xs',
      tracking: 'tracking-[0.26em]',
    },
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none select-none ${className}`}
      aria-label="Opsus™ Pharmaceuticals Home"
    >
      {/* Official Opsus Logo Emblem */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${
          isDark ? 'bg-white p-1 shadow-sm' : ''
        }`}
      >
        <Image
          src="/images/brand/logo.png"
          alt="Opsus™ Pharmaceuticals Logo"
          width={sizeStyles.imgSize}
          height={sizeStyles.imgSize}
          className="object-contain"
          priority
        />
      </div>

      {/* Two-line Wordmark Lockup with Trademark Symbol */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-sans font-extrabold tracking-[0.06em] flex items-baseline ${sizeStyles.titleSize} ${
            isDark ? 'text-white' : 'text-[#0A1B33]'
          }`}
        >
          OPSUS
          <span className="text-[0.42em] ml-0.5 font-bold text-[#C9A15E] leading-none select-none">
            ™
          </span>
        </span>
        <span
          className={`font-sans font-semibold uppercase mt-0.5 ${sizeStyles.tracking} ${sizeStyles.subtitleSize} ${
            isDark ? 'text-[#C9A15E]' : 'text-[#2F6FA8]'
          }`}
        >
          PHARMACEUTICALS
        </span>
      </div>
    </Link>
  );
};
