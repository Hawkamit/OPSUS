import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  showPlay?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  showPlay = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-5 py-2.5 gap-2 min-h-[40px]',
    md: 'text-sm px-6 py-3.5 gap-2.5 min-h-[46px]',
    lg: 'text-base px-8 py-4 gap-3 min-h-[52px]',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#0A1B33] text-white hover:bg-[#16345F] shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-transparent focus-visible:outline-[#0A1B33]',
    secondary:
      'bg-transparent text-[#0A1B33] border border-[#0A1B33] hover:bg-[#0A1B33] hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-[#0A1B33]',
    gold:
      'bg-[#C9A15E] text-[#0A1B33] hover:bg-[#D8B475] shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-transparent font-bold focus-visible:outline-[#C9A15E]',
    'outline-white':
      'bg-transparent text-white border border-white/60 hover:border-white hover:bg-white/10 shadow-sm hover:-translate-y-0.5 focus-visible:outline-white',
    ghost:
      'bg-transparent text-[#1E4373] hover:text-[#0A1B33] hover:bg-[#FAF8F3] px-3 py-2',
  }[variant];

  const disabledStyles = disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : '';

  const content = (
    <>
      {showPlay && (
        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center -ml-1 transition-transform group-hover:scale-110">
          <Play className="w-2.5 h-2.5 fill-current" />
        </span>
      )}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`}
        target={target}
        rel={rel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${disabledStyles} ${className}`}
    >
      {content}
    </button>
  );
};
