import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Pill, ShieldAlert, CheckCircle } from 'lucide-react';
import { Product } from '@/types';

import { FormattedProductName } from '@/components/common/FormattedProductName';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div
      className={`group bg-white rounded-xl sm:rounded-2xl border border-[#E4E0D8] p-2 sm:p-3.5 md:p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#C9A15E]/60 flex flex-col justify-between w-full min-w-0 max-w-full overflow-hidden box-border ${className}`}
    >
      <div className="min-w-0 w-full">
        {/* Top Category, Rx & Dosage Form Header Row (Fully Responsive, Multi-chip Wrap) */}
        <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-1.5 mb-2 sm:mb-3 min-w-0 w-full">
          {/* Category Chip */}
          <span className="text-[7.5px] sm:text-[9.5px] md:text-[10.5px] uppercase tracking-wider font-semibold px-1.5 sm:px-2 py-0.5 rounded-full bg-[#FAF8F3] text-[#2F6FA8] border border-[#E4E0D8] truncate max-w-full leading-tight">
            {product.category}
          </span>

          {/* Status & Dosage Badges Group */}
          <div className="flex items-center gap-1 flex-wrap shrink-0 max-w-full">
            {product.prescriptionRequired ? (
              <span className="text-[7px] sm:text-[9px] md:text-[9.5px] font-bold px-1 sm:px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 flex items-center gap-0.5 shrink-0 leading-tight">
                <ShieldAlert className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-600 shrink-0" />
                <span className="truncate">{product.rxSchedule || 'Rx'}</span>
              </span>
            ) : (
              <span className="text-[7px] sm:text-[9px] md:text-[9.5px] font-medium px-1 sm:px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-0.5 shrink-0 leading-tight">
                <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-600 shrink-0" />
                <span className="truncate">OTC</span>
              </span>
            )}
            <span className="text-[7px] sm:text-[9.5px] md:text-[10px] font-medium px-1 sm:px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 flex items-center gap-0.5 shrink-0 leading-tight">
              <Pill className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#C9A15E] shrink-0" />
              <span className="truncate max-w-[50px] sm:max-w-none">{product.dosageForm}</span>
            </span>
          </div>
        </div>

        {/* Clean Neutral Studio Packaging Showcase Container */}
        <div className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden bg-white mb-2 sm:mb-3.5 border border-[#EAE7E0] group-hover:border-[#2F6FA8]/40 transition-all duration-300 shadow-[inset_0_0_12px_rgba(0,0,0,0.02)] flex items-center justify-center">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.genericName}`}
            fill
            className="object-contain p-2 sm:p-3 group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Product Brand & Name Lockup */}
        <div className="min-w-0 w-full mb-1">
          <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#0A1B33] group-hover:text-[#2F6FA8] transition-colors leading-snug break-words">
            <FormattedProductName name={product.name} />
          </h3>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-2 sm:pt-2.5 border-t border-[#E4E0D8]/80 flex flex-wrap items-center justify-between gap-1 min-w-0 w-full">
        <span className="text-[7px] sm:text-[10.5px] text-[#5B6B7D] font-medium truncate min-w-0 max-w-[55%] sm:max-w-none">
          {product.packSize || product.packaging}
        </span>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-0.5 sm:gap-1 text-[7.5px] sm:text-xs font-bold text-[#0A1B33] group-hover:text-[#C9A15E] transition-colors shrink-0 whitespace-nowrap"
        >
          <span>View Details</span>
          <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
        </Link>
      </div>
    </div>
  );
};
