import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 text-xs sm:text-sm font-medium ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={`flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-slate-400 hover:text-white' : 'text-[#5B6B7D] hover:text-[#0A1B33]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}
              />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-[#5B6B7D] hover:text-[#0A1B33]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`truncate max-w-[220px] sm:max-w-md font-semibold ${
                    isDark ? 'text-[#E7CFA1]' : 'text-[#0A1B33]'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
