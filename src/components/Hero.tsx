import React from 'react';
import { ArrowDown, MessageSquare, Compass } from 'lucide-react';

interface HeroProps {
  onOpenConnectModal: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConnectModal, onExploreServices }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Architectural Image with Fallback */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_florida_modern_home_1794401674044.jpg"
          alt="Modern Florida luxury home with contemporary architectural lines and palm trees"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in zoom-in-95 duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-[#493B32]/20 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20 sm:pt-36 sm:pb-24 flex flex-col items-center">
        {/* Small introductory label (unboxed text, no pills) */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E9DFD0] uppercase mb-4 sm:mb-6 animate-in fade-in duration-700">
          <span className="w-8 h-[1px] bg-[#D5C2A5]/70" />
          <span>Florida New Home Consultant</span>
          <span className="w-8 h-[1px] bg-[#D5C2A5]/70" />
        </div>

        {/* Main headline with text-wrap: balance */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-[#FAF8F4] tracking-tight leading-[1.1] mb-6 max-w-4xl [text-wrap:balance]">
          Find Your Place in the <span className="italic font-light text-[#E9DFD0]">Sunshine State.</span>
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-xl text-[#FAF8F4]/90 font-light leading-relaxed max-w-2xl mb-10 [text-wrap:balance]">
          Discover the possibilities of new homeownership with helpful guidance, home-buying insights, and a more confident approach to your journey.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenConnectModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#D5C2A5] text-[#292925] hover:bg-[#E9DFD0] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#493B32]" />
            <span>Let&apos;s Connect</span>
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/10 hover:bg-white/20 text-[#FAF8F4] border border-white/30 backdrop-blur-xs active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-4 h-4 text-[#D5C2A5]" />
            <span>Explore My Services</span>
          </button>
        </div>

        {/* Trust marker row (quiet unboxed metadata) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#FAF8F4]/75 tracking-wider uppercase">
          <span>D.R. Horton Consultant</span>
          <span className="text-[#D5C2A5]" aria-hidden="true">·</span>
          <span>Florida Service Area</span>
          <span className="text-[#D5C2A5]" aria-hidden="true">·</span>
          <span>New Construction Guidance</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#brand-intro"
        aria-label="Scroll down to brand introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
