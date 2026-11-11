import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { Building2, Home, GraduationCap, MapPin, FileCheck2, KeyRound, ArrowRight, X, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConnectModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConnectModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icons to the 6 service items
  const iconMap: Record<string, React.ElementType> = {
    '01': Building2,
    '02': Home,
    '03': GraduationCap,
    '04': MapPin,
    '05': FileCheck2,
    '06': KeyRound,
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#A99A87] mb-3">
            Areas of Consultation
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
            Guidance for Every Step of <br />
            <span className="italic font-light text-[#493B32]">Your Home Journey.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#493B32]/85 font-light leading-relaxed [text-wrap:balance]">
            Explore the ways I can help you learn about new construction homes and navigate your home-buying journey.
          </p>
        </div>

        {/* 6 Services Grid (Editorial layout with hairline dividers, zero-pill) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.number] || Building2;
            return (
              <div
                key={service.id}
                className="group p-8 bg-[#FAF8F4] hover:bg-[#E9DFD0]/40 border border-[#E9DFD0] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-2xl text-[#A99A87] font-light">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 bg-[#E9DFD0]/60 border border-[#D5C2A5] flex items-center justify-center text-[#493B32] group-hover:text-[#292925] group-hover:bg-[#D5C2A5] transition-all">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#292925] mb-3 tracking-tight group-hover:text-[#493B32] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#493B32] leading-relaxed mb-6 font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E9DFD0] flex items-center justify-between">
                  <span className="text-xs text-[#A99A87] font-medium">
                    New Home Guidance
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#493B32] group-hover:text-[#292925] hover:underline cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Compliance & Professional Boundary Callout */}
        <div className="mt-16 p-6 sm:p-8 bg-[#E9DFD0]/30 border border-[#D5C2A5] text-xs text-[#493B32] leading-relaxed">
          <p className="font-medium text-[#292925] mb-1">
            Professional Guidance Notice:
          </p>
          <p>
            Consultation services are provided solely in connection with D.R. Horton new construction homes and educational home-buying guidance in Florida. The consultant does not independently provide mortgage lending, legal, home inspection, financial, appraisal, or real estate brokerage representation. All prospective buyers are encouraged to consult qualified licensed professionals for specific lending or legal matters.
          </p>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-[#FAF8F4] border border-[#D5C2A5] max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 text-[#493B32] hover:text-[#292925] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-semibold tracking-widest uppercase text-[#B69A70] mb-2">
              Service Overview · {selectedService.number}
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#292925] mb-4">
              {selectedService.title}
            </h3>

            <p className="text-base text-[#493B32] leading-relaxed mb-6 font-light">
              {selectedService.shortDescription}
            </p>

            <div className="my-6 pt-6 border-t border-[#E9DFD0]">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#292925] mb-4">
                What We Cover Together:
              </h4>
              <ul className="space-y-3">
                {selectedService.fullDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#493B32]">
                    <CheckCircle2 className="w-4 h-4 text-[#B69A70] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#E9DFD0]/50 border border-[#D5C2A5] text-xs text-[#292925] mb-8">
              <span className="font-semibold block mb-0.5">Key Benefit:</span>
              <span>{selectedService.keyBenefit}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E9DFD0]">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#493B32] hover:bg-[#E9DFD0]/50 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  onOpenConnectModal();
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] transition-colors shadow-xs"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
