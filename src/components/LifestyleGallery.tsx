import React, { useState } from 'react';
import { LIFESTYLE_GALLERY, GalleryImage } from '../data/galleryData';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const LifestyleGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Exterior', 'Interior', 'Outdoor Living', 'Architecture'];

  const filteredImages = filter === 'All'
    ? LIFESTYLE_GALLERY
    : LIFESTYLE_GALLERY.filter((img) => img.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredImages.length);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
              Lifestyle & Architectural Inspiration
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-4 [text-wrap:balance]">
              Life Looks Beautiful in the <br />
              <span className="italic font-light text-[#493B32]">Sunshine State.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#493B32]/85 font-light leading-relaxed">
              Explore the beauty of Florida living through inspiring residential architecture, welcoming interiors, and the lifestyle possibilities of a new home.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Buttons, not static pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#E9DFD0]/50 border border-[#D5C2A5] self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-[#493B32] text-[#FAF8F4] shadow-xs'
                    : 'text-[#493B32] hover:text-[#292925] hover:bg-[#FAF8F4]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative cursor-pointer overflow-hidden bg-[#E9DFD0] border border-[#D5C2A5] transition-all duration-300 hover:shadow-md aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#D5C2A5] mb-1">
                  {image.category}
                </span>
                <h4 className="text-lg font-serif text-white tracking-tight mb-1">
                  {image.title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-2 font-light">
                  {image.description}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#D5C2A5]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Required Mandatory Gallery Disclaimer */}
        <div className="mt-12 flex items-start sm:items-center gap-3 p-4 bg-[#E9DFD0]/30 border border-[#D5C2A5] text-xs text-[#493B32]">
          <Info className="w-4 h-4 text-[#B69A70] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <span className="font-semibold text-[#292925]">Architectural & Design Notice: </span>
            The imagery above illustrates Florida residential architecture, interior flow, and coastal lifestyle concepts. These photographs are presented for educational and inspirational purposes and do not represent specific community inventory, guaranteed finishes, or current available homes for sale.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredImages[activeImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#292925] border border-[#493B32] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Top Bar with Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-white">
              <span className="text-xs uppercase tracking-widest text-[#D5C2A5]">
                {filteredImages[activeImageIndex].category} · {activeImageIndex + 1} of {filteredImages.length}
              </span>
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="p-1.5 text-white/70 hover:text-white cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Frame */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-6 bg-[#292925] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-serif text-[#FAF8F4]">
                  {filteredImages[activeImageIndex].title}
                </h3>
                <p className="text-xs text-[#FAF8F4]/70 mt-1 max-w-2xl">
                  {filteredImages[activeImageIndex].description}
                </p>
              </div>
              <span className="text-[11px] text-[#A99A87] shrink-0 font-mono">
                Florida Living Series
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
