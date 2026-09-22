'use client';

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, PackageOpen, Filter, ArrowUpDown, X } from 'lucide-react';
import { Product } from '@/types';
import { productCategories } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';

interface ProductCatalogProps {
  initialProducts: Product[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ initialProducts }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDosageForm, setActiveDosageForm] = useState('all');
  const [activeRxFilter, setActiveRxFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'category'>('name-asc');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique dosage forms available in catalog
  const dosageForms = useMemo(() => {
    const set = new Set<string>();
    initialProducts.forEach((p) => {
      if (p.dosageForm) set.add(p.dosageForm);
    });
    return Array.from(set).sort();
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        // Category filter
        const matchesCategory =
          activeCategory === 'all' ||
          product.categorySlug === activeCategory ||
          product.secondaryCategories?.some(
            (c) => c.toLowerCase() === activeCategory.toLowerCase()
          );

        // Dosage Form filter
        const matchesDosageForm =
          activeDosageForm === 'all' || product.dosageForm === activeDosageForm;

        // Rx filter
        const matchesRx =
          activeRxFilter === 'all' ||
          (activeRxFilter === 'rx' && product.prescriptionRequired) ||
          (activeRxFilter === 'otc' && !product.prescriptionRequired);

        // Search query across brand, generic, composition, active ingredients, tags, strengths
        if (searchQuery.trim() === '') {
          return matchesCategory && matchesDosageForm && matchesRx;
        }

        const q = searchQuery.toLowerCase().trim();
        const matchesBrand = product.name.toLowerCase().includes(q) || (product.brandName?.toLowerCase().includes(q) ?? false);
        const matchesGeneric = product.genericName.toLowerCase().includes(q);
        const matchesComposition = product.composition.toLowerCase().includes(q);
        const matchesCategoryName = product.category.toLowerCase().includes(q);
        const matchesTags = product.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        const matchesIngredients = product.activeIngredients?.some(
          (ing) => ing.name.toLowerCase().includes(q) || ing.strength.toLowerCase().includes(q)
        ) ?? false;
        const matchesDosage = product.dosageForm.toLowerCase().includes(q);

        const matchesSearch =
          matchesBrand ||
          matchesGeneric ||
          matchesComposition ||
          matchesCategoryName ||
          matchesTags ||
          matchesIngredients ||
          matchesDosage;

        return matchesCategory && matchesDosageForm && matchesRx && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        }
        if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
        return 0;
      });
  }, [initialProducts, activeCategory, activeDosageForm, activeRxFilter, searchQuery, sortBy]);

  const resetAllFilters = () => {
    setActiveCategory('all');
    setActiveDosageForm('all');
    setActiveRxFilter('all');
    setSearchQuery('');
    setSortBy('name-asc');
  };

  const hasActiveFilters =
    activeCategory !== 'all' ||
    activeDosageForm !== 'all' ||
    activeRxFilter !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div>
      {/* Search & Category Filter Controls */}
      <div className="mb-6 sm:mb-8 space-y-4 pb-6 sm:pb-8 border-b border-[#E4E0D8]">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
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

        {/* Secondary Filter Row: Search, Dosage Form, Rx Status & Sort */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 w-full min-w-0">
          {/* Search Box */}
          <div className="relative flex-1 min-w-0 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, generic, salt, strength (e.g. 100 mg)..."
              className="w-full pl-10 pr-9 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm bg-white border border-[#E4E0D8] text-[#0A1B33] placeholder-slate-400 focus:outline-none focus:border-[#C9A15E] transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns Row */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar w-full md:w-auto pb-1 sm:pb-0">
            {/* Dosage Form Selector */}
            <div className="flex items-center gap-1 bg-white border border-[#E4E0D8] rounded-xl sm:rounded-full px-2.5 sm:px-3 py-1.5 text-xs text-[#0A1B33] shrink-0">
              <span className="text-[#5B6B7D] text-[10.5px] sm:text-[11px] font-medium">Form:</span>
              <select
                value={activeDosageForm}
                onChange={(e) => setActiveDosageForm(e.target.value)}
                aria-label="Filter by dosage form"
                className="bg-transparent font-semibold text-xs focus:outline-none cursor-pointer max-w-[110px] sm:max-w-none truncate"
              >
                <option value="all">All Forms</option>
                {dosageForms.map((df) => (
                  <option key={df} value={df}>
                    {df}
                  </option>
                ))}
              </select>
            </div>

            {/* Rx Filter Selector */}
            <div className="flex items-center gap-1 bg-white border border-[#E4E0D8] rounded-xl sm:rounded-full px-2.5 sm:px-3 py-1.5 text-xs text-[#0A1B33] shrink-0">
              <span className="text-[#5B6B7D] text-[10.5px] sm:text-[11px] font-medium">Status:</span>
              <select
                value={activeRxFilter}
                onChange={(e) => setActiveRxFilter(e.target.value)}
                aria-label="Filter by prescription status"
                className="bg-transparent font-semibold text-xs focus:outline-none cursor-pointer max-w-[100px] sm:max-w-none truncate"
              >
                <option value="all">All Status</option>
                <option value="rx">Rx Only</option>
                <option value="otc">Non-Rx / OTC</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1 bg-white border border-[#E4E0D8] rounded-xl sm:rounded-full px-2.5 sm:px-3 py-1.5 text-xs text-[#0A1B33] shrink-0">
              <ArrowUpDown className="w-3 h-3 text-[#C9A15E]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="bg-transparent font-semibold text-xs focus:outline-none cursor-pointer max-w-[105px] sm:max-w-none truncate"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 text-xs text-[#5B6B7D]">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of{' '}
          {initialProducts.length} verified formulations
        </span>
        {hasActiveFilters && (
          <button
            onClick={resetAllFilters}
            className="text-[#2F6FA8] font-semibold hover:underline flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            <span>Reset all filters</span>
          </button>
        )}
      </div>

      {/* Product Grid - 3 cards per row responsive */}
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
            We could not find any products matching your current filters or query &ldquo;{searchQuery}&rdquo;. Try another generic name, active salt, or reset your filters.
          </p>
          <button
            type="button"
            onClick={resetAllFilters}
            className="px-6 py-2.5 rounded-full bg-[#0A1B33] text-white text-xs font-semibold hover:bg-[#16345F] transition-colors"
          >
            View Complete Catalogue
          </button>
        </div>
      )}
    </div>
  );
};
