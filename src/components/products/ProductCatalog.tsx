'use client';

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, PackageOpen } from 'lucide-react';
import { Product } from '@/types';
import { productCategories } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';

interface ProductCatalogProps {
  initialProducts: Product[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ initialProducts }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.categorySlug === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, activeCategory, searchQuery]);

  return (
    <div>
      {/* Search & Category Filter Controls */}
      <div className="mb-8 sm:mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#E4E0D8]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A1B33] text-white shadow-sm'
                    : 'bg-white text-[#5B6B7D] border border-[#E4E0D8] hover:border-[#0A1B33] hover:text-[#0A1B33]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by brand, generic, or composition..."
            className="w-full pl-11 pr-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm bg-white border border-[#E4E0D8] text-[#0A1B33] placeholder-slate-400 focus:outline-none focus:border-[#C9A15E] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 text-xs text-[#5B6B7D]">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of{' '}
          {initialProducts.length} formulations
        </span>
        {activeCategory !== 'all' && (
          <button
            onClick={() => setActiveCategory('all')}
            className="text-[#2F6FA8] font-semibold hover:underline"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Product Grid - 3 boxes in a single row */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-white rounded-2xl border border-dashed border-[#E4E0D8] p-8">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <PackageOpen className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-xl font-bold text-[#0A1B33] mb-2">
            No Formulations Found
          </h4>
          <p className="text-xs sm:text-sm text-[#5B6B7D] max-w-md mx-auto mb-6">
            We could not find any products matching &ldquo;{searchQuery}&rdquo;. Try another generic name, composition, or reset your category filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 rounded-full bg-[#0A1B33] text-white text-xs font-semibold hover:bg-[#16345F] transition-colors"
          >
            View All Formulations
          </button>
        </div>
      )}
    </div>
  );
};
