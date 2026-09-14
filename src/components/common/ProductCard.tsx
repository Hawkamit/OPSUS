import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Pill } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div
      className={`group bg-white rounded-lg sm:rounded-2xl border border-[#E4E0D8] p-2 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#C9A15E]/60 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Category & Dosage Form Chips */}
        <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-3">
          <span className="text-[7.5px] sm:text-[10px] md:text-[11px] uppercase tracking-wider font-semibold px-1 sm:px-2 py-0.5 rounded-full bg-[#FAF8F3] text-[#2F6FA8] border border-[#E4E0D8] truncate max-w-[58px] sm:max-w-none">
            {product.category}
          </span>
          <span className="text-[7.5px] sm:text-[10px] md:text-[11px] font-medium px-1 sm:px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 flex items-center gap-0.5 shrink-0">
            <Pill className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#C9A15E] shrink-0" />
            <span className="truncate max-w-[40px] sm:max-w-none">{product.dosageForm}</span>
          </span>
        </div>

        {/* Product Packaging Image / Thumbnail */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-md sm:rounded-xl overflow-hidden bg-[#FAF8F3] mb-1.5 sm:mb-4 border border-[#E4E0D8]/60 group-hover:border-[#2F6FA8]/30 transition-colors">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

          {/* Sourcing Badge */}
          <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2">
            <span className="inline-flex items-center gap-0.5 text-[6.5px] sm:text-[9.5px] font-medium text-white/95 bg-[#0A1B33]/85 backdrop-blur-sm px-1 py-0.5 rounded">
              <CheckCircle2 className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-[#C9A15E] shrink-0" />
              <span className="truncate">WHO-GMP</span>
            </span>
          </div>
        </div>

        {/* Product Name & Generic Lockup */}
        <h3 className="font-serif text-[11px] sm:text-base md:text-lg font-bold text-[#0A1B33] group-hover:text-[#2F6FA8] transition-colors mb-0.5 line-clamp-1 leading-snug">
          {product.name}
        </h3>
        <p className="font-mono text-[8px] sm:text-xs text-[#2F6FA8] font-medium line-clamp-1 mb-1 sm:mb-2.5">
          {product.composition}
        </p>

        {/* Brief Excerpt (visible on tablet/desktop) */}
        <p className="hidden md:block text-xs text-[#5B6B7D] leading-relaxed line-clamp-2 mb-3">
          {product.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="pt-1.5 sm:pt-3 border-t border-[#E4E0D8]/80 flex items-center justify-between gap-1">
        <span className="text-[7px] sm:text-[10.5px] text-[#5B6B7D] truncate max-w-[45%] sm:max-w-none">
          {product.packaging}
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-0.5 sm:gap-1 text-[7.5px] sm:text-xs font-bold text-[#0A1B33] group-hover:text-[#C9A15E] transition-colors shrink-0"
        >
          <span>Details</span>
          <ArrowRight className="w-2 h-2 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
