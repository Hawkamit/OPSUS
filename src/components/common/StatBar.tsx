import React from 'react';
import { Calendar, Package, MapPin, Users, Award, ShieldCheck } from 'lucide-react';

export interface StatItemData {
  value: string;
  label: string;
  sublabel?: string;
  icon?: string;
}

interface StatBarProps {
  stats?: StatItemData[];
  theme?: 'light' | 'dark';
  sideNote?: string;
  className?: string;
}

export const StatBar: React.FC<StatBarProps> = ({
  stats = [
    { value: '2010', label: 'Established', sublabel: 'Ethical Healthcare Marketing', icon: 'Calendar' },
    { value: '33+', label: 'Products', sublabel: 'Quality Formulations', icon: 'Package' },
    { value: '15+', label: 'States Presence', sublabel: 'Regional Distribution', icon: 'MapPin' },
    { value: '150+', label: 'Healthcare Partners', sublabel: 'Doctors & Distributors', icon: 'Users' },
  ],
  theme = 'light',
  sideNote = 'TRUSTED BY HEALTHCARE PARTNERS ACROSS INDIA',
  className = '',
}) => {
  const isDark = theme === 'dark';

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Package':
        return <Package className="w-5 h-5" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <div
      className={`w-full py-8 md:py-10 border-y transition-colors duration-300 ${
        isDark
          ? 'bg-[#0F2545] border-[#1F385C] text-white'
          : 'bg-[#FAF8F3] border-[#E4E0D8] text-[#0A1B33]'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-300/40 dark:lg:divide-white/15">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 ${
                idx === 0 ? 'lg:pr-8' : idx === stats.length - 1 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  isDark
                    ? 'bg-[#C9A15E]/15 text-[#C9A15E]'
                    : 'bg-[#C9A15E]/15 text-[#9A7332]'
                }`}
              >
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
                      isDark ? 'text-white' : 'text-[#0A1B33]'
                    }`}
                  >
                    {stat.value}
                  </span>
                </div>
                <div
                  className={`text-sm font-semibold mt-0.5 ${
                    isDark ? 'text-[#E7CFA1]' : 'text-[#16345F]'
                  }`}
                >
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div
                    className={`text-xs mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-[#5B6B7D]'
                    }`}
                  >
                    {stat.sublabel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {sideNote && (
          <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A15E] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C9A15E]">
                {sideNote}
              </span>
            </div>
            <span
              className={`text-xs ${
                isDark ? 'text-slate-400' : 'text-[#5B6B7D]'
              }`}
            >
              WHO-GMP Sourced Formulations • Strict Regulatory Compliance
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
