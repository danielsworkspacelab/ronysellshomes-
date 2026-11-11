import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { ctaArchitectureEvening } from '../assets/images';

export const MainCTA: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaArchitectureEvening}
          alt="Florida modern home architecture at evening twilight"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-[#493B32]/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-white">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#D5C2A5] uppercase mb-4">
          <span className="w-6 h-[1px] bg-[#D5C2A5]/70" />
          <span>Begin Your Next Chapter</span>
          <span className="w-6 h-[1px] bg-[#D5C2A5]/70" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#FAF8F4] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
          Your Dream of Homeownership <br />
          <span className="italic font-light text-[#E9DFD0]">Deserves a Beautiful Beginning.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#FAF8F4]/90 font-light leading-relaxed max-w-2xl mx-auto mb-10 [text-wrap:balance]">
          Have questions or ready to explore your next step? Let&apos;s connect and start the conversation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="sms:+14077229956"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#D5C2A5] text-[#292925] hover:bg-[#E9DFD0] active:scale-[0.98] transition-all shadow-md whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-[#493B32]" />
            <span>Send Me a Text</span>
          </a>

          <a
            href="mailto:rsaintaubin@drhorton.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] border border-[#D5C2A5]/40 active:scale-[0.98] transition-all shadow-md whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-[#D5C2A5]" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Direct Phone Marker */}
        <div className="mt-8 text-xs text-[#FAF8F4]/75 tracking-wider">
          Direct Line: <a href="tel:+14077229956" className="text-[#D5C2A5] hover:underline font-mono">+1 407-722-9956</a> · <a href="mailto:rsaintaubin@drhorton.com" className="text-[#D5C2A5] hover:underline">rsaintaubin@drhorton.com</a>
        </div>
      </div>
    </section>
  );
};
