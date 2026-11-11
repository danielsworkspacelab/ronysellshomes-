import React from 'react';
import { Compass, Sparkles, BookOpen } from 'lucide-react';

export const BrandIntro: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Personalized Guidance',
      description: 'Helpful direction and support as you explore your new-home journey.',
      icon: Compass,
      detail: 'Tailored recommendations aligned with your family lifestyle, spatial needs, and Florida timeline.'
    },
    {
      number: '02',
      title: 'New Home Opportunities',
      description: 'Discover the possibilities of new construction homeownership.',
      icon: Sparkles,
      detail: 'Explore modern architectural layouts, newly engineered energy efficiencies, and comprehensive builder warranties.'
    },
    {
      number: '03',
      title: 'Home-Buying Education',
      description: 'Access helpful insights and information to better understand the home-buying process.',
      icon: BookOpen,
      detail: 'Empowering knowledge from pre-qualification to the closing table so every step feels approachable.'
    }
  ];

  return (
    <section id="brand-intro" className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header editorial block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
            Philosophy & Approach
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
            More Than a House. <br />
            <span className="italic font-light text-[#493B32]">A Place to Call Home.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#493B32]/85 font-light leading-relaxed [text-wrap:balance]">
            Buying a home is an important milestone. My goal is to help make the journey feel more informed, approachable, and exciting, from your first questions to your next chapter.
          </p>
        </div>

        {/* 3 Elegant Editorial Pillars (Editorial layout, hairline dividers, generous whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-6 border-t border-[#E9DFD0]">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group flex flex-col justify-between p-8 bg-[#E9DFD0]/30 hover:bg-[#E9DFD0]/50 border border-[#E9DFD0] transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-2xl text-[#A99A87] font-light">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32] group-hover:text-[#B69A70] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#292925] mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-[#493B32] text-sm sm:text-base leading-relaxed mb-4 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D5C2A5]/50 text-xs text-[#A99A87] leading-relaxed">
                  {pillar.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary supportive quote strip */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-[#E9DFD0]/40 border border-[#D5C2A5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#A99A87] block mb-1">
              Guiding Principle
            </span>
            <p className="text-base sm:text-lg font-serif italic text-[#292925]">
              &ldquo;Your Next Chapter Begins at Home. Helping You Find Your Place in the Sunshine State.&rdquo;
            </p>
          </div>
          <a
            href="#about"
            className="text-xs font-semibold uppercase tracking-wider text-[#493B32] hover:text-[#292925] flex items-center gap-2 group whitespace-nowrap"
          >
            <span>Learn About My Background</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
