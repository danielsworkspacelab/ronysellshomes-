import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import {
  heroFloridaHome,
  floridaKitchen,
  floridaOutdoorLiving,
  ctaArchitectureEvening,
} from '../assets/images';

export const InstagramSection: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/ronysellshomes?srtk=Nmx3YXZzcnNyc3N4';

  // 4 curated editorial photo previews for the Instagram aesthetic showcase
  const previewShots = [
    {
      id: 'ig-1',
      title: 'Florida Architecture & Palms',
      src: heroFloridaHome,
      tag: 'New Construction'
    },
    {
      id: 'ig-2',
      title: 'Chef Kitchen Details',
      src: floridaKitchen,
      tag: 'Home Design'
    },
    {
      id: 'ig-3',
      title: 'Covered Lanai Living',
      src: floridaOutdoorLiving,
      tag: 'Sunshine Living'
    },
    {
      id: 'ig-4',
      title: 'Twilight Home Illumination',
      src: ctaArchitectureEvening,
      tag: 'Florida Living'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
              Social Connection
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-4 [text-wrap:balance]">
              Follow Along on <br />
              <span className="italic font-light text-[#493B32]">Instagram.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#493B32]/85 font-light leading-relaxed">
              Stay connected for home-buying insights, new-home inspiration, and helpful updates from the Sunshine State.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] transition-all whitespace-nowrap self-start sm:self-auto cursor-pointer shadow-xs"
          >
            <Instagram className="w-4 h-4 text-[#D5C2A5]" />
            <span>Follow @ronysellshomes</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Visual Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {previewShots.map((shot) => (
            <a
              key={shot.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#E9DFD0] border border-[#D5C2A5] block cursor-pointer"
            >
              <img
                src={shot.src}
                alt={shot.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Instagram Hover Badge */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center text-white">
                <Instagram className="w-6 h-6 text-[#D5C2A5] mb-2" />
                <span className="text-xs font-serif text-white tracking-wide">
                  @ronysellshomes
                </span>
                <span className="text-[10px] text-white/80 uppercase tracking-widest mt-1">
                  View On Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Minimal Social Notice */}
        <div className="mt-8 text-center text-xs text-[#A99A87]">
          Connect on Instagram for video walkthroughs, Florida community spotlights, and educational tips.
        </div>

      </div>
    </section>
  );
};
