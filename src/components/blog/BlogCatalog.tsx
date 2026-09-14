'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight, User, BookOpen } from 'lucide-react';
import { BlogPost } from '@/types';
import { blogCategories } from '@/data/blog';

interface BlogCatalogProps {
  initialPosts: BlogPost[];
}

export const BlogCatalog: React.FC<BlogCatalogProps> = ({ initialPosts }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(6);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  return (
    <div>
      {/* Category Tabs & Search Row */}
      <div className="mb-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-8 border-b border-[#E4E0D8]">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setDisplayCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A1B33] text-white shadow-sm'
                    : 'bg-white text-[#5B6B7D] border border-[#E4E0D8] hover:border-[#0A1B33] hover:text-[#0A1B33]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px] sm:min-w-[320px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDisplayCount(6);
            }}
            placeholder="Search articles, keywords, authors..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-[#E4E0D8] text-[#0A1B33] placeholder-slate-400 focus:outline-none focus:border-[#C9A15E] transition-colors"
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

      {/* Grid of Articles */}
      {visiblePosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl border border-[#E4E0D8] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Hero Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F3]">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0A1B33]/85 text-[#E7CFA1] backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-[#5B6B7D] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2F6FA8]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C9A15E]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0A1B33] group-hover:text-[#2F6FA8] transition-colors mb-2.5 leading-snug line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5B6B7D] leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer with Author & Link */}
                <div className="px-6 py-4 bg-[#FAF8F3]/60 border-t border-[#E4E0D8] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#0A1B33]">
                    <User className="w-3.5 h-3.5 text-[#2F6FA8]" />
                    <span className="font-semibold truncate max-w-[130px] sm:max-w-[160px]">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A1B33] group-hover:text-[#C9A15E] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setDisplayCount((prev) => prev + 3)}
                className="px-8 py-3.5 rounded-full bg-[#0A1B33] text-white text-xs sm:text-sm font-semibold hover:bg-[#16345F] transition-all shadow-md cursor-pointer"
              >
                Load More Articles ({filteredPosts.length - displayCount} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-white rounded-2xl border border-dashed border-[#E4E0D8] p-8">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-xl font-bold text-[#0A1B33] mb-2">
            No Insights Found
          </h4>
          <p className="text-xs sm:text-sm text-[#5B6B7D] max-w-md mx-auto mb-6">
            No articles match your query &ldquo;{searchQuery}&rdquo;. Try another topic like &ldquo;Quality&rdquo;, &ldquo;Antibiotic&rdquo;, or &ldquo;PCD Franchise&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 rounded-full bg-[#0A1B33] text-white text-xs font-semibold hover:bg-[#16345F] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
