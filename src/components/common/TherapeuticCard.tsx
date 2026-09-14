import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bone, ShieldAlert, Activity, HeartHandshake, Flame, Wind, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { TherapeuticArea } from '@/types';

interface TherapeuticCardProps {
  area: TherapeuticArea;
  className?: string;
  variant?: 'dark' | 'light';
}

export const TherapeuticCard: React.FC<TherapeuticCardProps> = ({
  area,
  className = '',
  variant = 'dark',
}) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Bone':
        return <Bone {...iconProps} />;
      case 'ShieldAlert':
        return <ShieldAlert {...iconProps} />;
      case 'Activity':
        return <Activity {...iconProps} />;
      case 'HeartHandshake':
        return <HeartHandshake {...iconProps} />;
      case 'Flame':
        return <Flame {...iconProps} />;
      case 'Wind':
        return <Wind {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      default:
        return <ShieldCheck {...iconProps} />;
    }
  };

  if (variant === 'light') {
    return (
      <div
        className={`group bg-white rounded-2xl border border-[#E4E0D8] p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#C9A15E] flex flex-col justify-between ${className}`}
      >
        <div>
          <div
            className="w-13 h-13 rounded-full flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-sm"
            style={{ backgroundColor: `${area.colorAccent}15`, color: area.colorAccent }}
          >
            {getIcon(area.iconName)}
          </div>
          <h3 className="font-serif text-xl font-bold text-[#0A1B33] group-hover:text-[#2F6FA8] transition-colors mb-2">
            {area.title}
          </h3>
          <p className="text-xs sm:text-[13px] text-[#5B6B7D] leading-relaxed line-clamp-3 mb-6">
            {area.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E4E0D8] flex items-center justify-between">
          <span className="text-xs font-semibold text-[#2F6FA8]">
            {area.productsCount} Formulations
          </span>
          <Link
            href={`/therapeutic-areas/${area.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1B33] group-hover:text-[#C9A15E] transition-colors"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  }

  // Dark Image Card (Source of truth in reference §6.4)
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden min-h-[340px] flex flex-col justify-between p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-white/10 ${className}`}
    >
      {/* Background Image with Deep Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={area.heroImage}
          alt={area.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B33] via-[#0A1B33]/85 to-[#0A1B33]/60 group-hover:via-[#0A1B33]/75 transition-colors duration-500" />
      </div>

      {/* Top Header with Colored Roundel Icon & Count */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg"
          style={{ backgroundColor: area.colorAccent, color: '#FFFFFF' }}
        >
          {getIcon(area.iconName)}
        </div>
        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#E7CFA1] border border-white/10">
          {area.productsCount} Products
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 pt-8">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E7CFA1] transition-colors mb-2 leading-snug">
          {area.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-5">
          {area.shortDescription}
        </p>

        <Link
          href={`/therapeutic-areas/${area.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#C9A15E] group-hover:text-white transition-colors"
        >
          <span>Explore Therapeutic Segment</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
};
