import React, { useState } from 'react';
import { JOURNEY_STAGES } from '../data/journeyData';
import { Check, Lightbulb } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStage = JOURNEY_STAGES.find((s) => s.step === activeStep) || JOURNEY_STAGES[0];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
            The Roadmap
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
            Your Home Journey, <br />
            <span className="italic font-light text-[#493B32]">Step by Step.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#493B32]/85 font-light leading-relaxed [text-wrap:balance]">
            From your very first curiosity to receiving your brand-new keys, here is a transparent look at what your path to Florida homeownership looks like.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Navigation (Hidden on small mobile) */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-[#E9DFD0] -z-0" />
            <div
              className="absolute top-6 left-0 h-[2px] bg-[#493B32] transition-all duration-500 -z-0"
              style={{ width: `${((activeStep - 1) / (JOURNEY_STAGES.length - 1)) * 100}%` }}
            />

            {/* Steps Row */}
            <div className="grid grid-cols-6 gap-2 relative z-10">
              {JOURNEY_STAGES.map((stage) => {
                const isActive = stage.step === activeStep;
                const isPassed = stage.step < activeStep;

                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStep(stage.step)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Indicator */}
                    <div
                      className={`w-12 h-12 flex items-center justify-center font-serif text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-[#493B32] text-[#FAF8F4] ring-4 ring-[#D5C2A5]/50 scale-110 shadow-md'
                          : isPassed
                          ? 'bg-[#D5C2A5] text-[#292925]'
                          : 'bg-[#FAF8F4] text-[#A99A87] border border-[#D5C2A5] group-hover:border-[#493B32]'
                      }`}
                    >
                      {stage.stageNumber}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`mt-4 text-xs font-semibold tracking-wider transition-colors max-w-[140px] ${
                        isActive ? 'text-[#292925]' : 'text-[#A99A87] group-hover:text-[#493B32]'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper Selector */}
        <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 mb-8 no-scrollbar">
          {JOURNEY_STAGES.map((stage) => {
            const isActive = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors border ${
                  isActive
                    ? 'bg-[#493B32] text-[#FAF8F4] border-[#493B32]'
                    : 'bg-[#FAF8F4] text-[#493B32] border-[#D5C2A5]'
                }`}
              >
                {stage.stageNumber}. {stage.title}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Editorial Showcase */}
        <div className="bg-[#FAF8F4] border border-[#D5C2A5] p-8 sm:p-12 shadow-sm animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left overview */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-[#B69A70] mb-3">
                <span>Stage {currentStage.stageNumber} of 06</span>
                <span className="text-[#D5C2A5]">/</span>
                <span>{currentStage.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif text-[#292925] tracking-tight mb-4">
                {currentStage.title}
              </h3>

              <p className="text-base sm:text-lg text-[#493B32] font-light leading-relaxed mb-8">
                {currentStage.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider uppercase text-[#292925]">
                  Milestone Focus:
                </h4>
                {currentStage.milestoneActions.map((action, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#493B32]">
                    <div className="w-5 h-5 bg-[#E9DFD0] flex items-center justify-center shrink-0 mt-0.5 text-[#292925]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right tips card */}
            <div className="lg:col-span-5 bg-[#E9DFD0]/40 border border-[#D5C2A5] p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#493B32] mb-3">
                <Lightbulb className="w-4 h-4 text-[#B69A70]" />
                <span>Consultant Pro Tip</span>
              </div>
              <p className="text-sm text-[#292925] leading-relaxed italic mb-6">
                &ldquo;{currentStage.tipsForSuccess}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#D5C2A5] flex items-center justify-between text-xs text-[#A99A87]">
                <span>Stage {currentStage.step} of 6</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="px-3 py-1 bg-[#FAF8F4] border border-[#D5C2A5] disabled:opacity-40 hover:bg-[#E9DFD0] transition-colors cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === JOURNEY_STAGES.length}
                    onClick={() => setActiveStep((prev) => Math.min(JOURNEY_STAGES.length, prev + 1))}
                    className="px-3 py-1 bg-[#493B32] text-[#FAF8F4] disabled:opacity-40 hover:bg-[#292925] transition-colors cursor-pointer"
                  >
                    Next Stage
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
