'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers } from 'lucide-react';

interface ProductImageGalleryProps {
  productName: string;
  genericName: string;
  images: string[];
  partnerCertified?: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  productName,
  genericName,
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || '/images/brand/logo.png');

  return (
    <div>
      {/* Main Studio Viewport (Pure white, seamless, 100% contained) */}
      <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#EAE7E0] mb-3 sm:mb-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)] flex items-center justify-center">
        <Image
          src={selectedImage}
          alt={`${productName} - ${genericName}`}
          fill
          priority
          className="object-contain p-4 sm:p-6 transition-all duration-300 ease-out"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>

      {/* Multi-Angle Gallery Thumbnails (if multiple views available) */}
      {images.length > 1 && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2 text-[11px] font-semibold text-[#5B6B7D]">
            <div className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#2F6FA8]" />
              <span>Available Views ({images.length})</span>
            </div>
            <span className="text-[10px] text-slate-400 font-normal">Click to switch angle</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, idx) => {
              const isSelected = selectedImage === img;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  aria-label={`View packaging angle ${idx + 1}`}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all cursor-pointer bg-white p-1 flex items-center justify-center ${
                    isSelected
                      ? 'border-[#2F6FA8] ring-2 ring-[#2F6FA8]/25 shadow-sm'
                      : 'border-[#EAE7E0] opacity-75 hover:opacity-100 hover:border-slate-400'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${productName} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="90px"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
