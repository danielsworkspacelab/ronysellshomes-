import React, { useState } from 'react';
import { Camera, Mail, MessageSquare, ShieldCheck, Check, Upload } from 'lucide-react';
import { aboutPortrait } from '../assets/images';

interface AboutMeProps {
  onOpenConnectModal: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenConnectModal }) => {
  // Allow the consultant or user to upload their own portrait photo, or toggle placeholder mode
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [showSamplePhoto, setShowSamplePhoto] = useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomPhoto(event.target?.result as string);
        setShowSamplePhoto(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E9DFD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Tasteful, Editable Portrait Area (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative framing */}
              <div className="p-3 bg-[#E9DFD0]/60 border border-[#D5C2A5] shadow-sm">
                <div className="relative aspect-[3/4] bg-[#FAF8F4] border border-[#D5C2A5]/60 overflow-hidden flex flex-col items-center justify-center text-center">
                  
                  {/* Photo Display: Custom Upload, Sample Photo, or Editorial Silhouette Placeholder */}
                  {customPhoto ? (
                    <img
                      src={customPhoto}
                      alt="Consultant portrait"
                      className="w-full h-full object-cover"
                    />
                  ) : showSamplePhoto ? (
                    <div className="relative w-full h-full">
                      <img
                        src={aboutPortrait}
                        alt="Editorial placeholder portrait"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] py-1 px-2.5 text-center">
                        Editorial Portrait Placeholder
                      </div>
                    </div>
                  ) : (
                    /* Default Tasteful Editorial Silhouette / Monogram Frame */
                    <div className="w-full h-full p-8 flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF8F4] to-[#E9DFD0]/40">
                      <div className="w-24 h-24 rounded-full border-2 border-[#D5C2A5] flex items-center justify-center mb-6 bg-[#FAF8F4] text-[#493B32] shadow-xs">
                        <span className="font-serif text-3xl font-semibold tracking-wider">RH</span>
                      </div>
                      
                      <h4 className="font-serif text-2xl text-[#292925] mb-2 tracking-tight">
                        ronysellshomes
                      </h4>
                      
                      <div className="text-xs font-semibold tracking-widest uppercase text-[#B69A70] mb-4">
                        D.R. Horton Consultant
                      </div>
                      
                      <p className="text-xs text-[#A99A87] max-w-xs leading-relaxed mb-6">
                        Editable Portrait Space: Click below to upload your verified professional photo or preview sample framing.
                      </p>

                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#493B32] px-3 py-1 bg-[#FAF8F4] border border-[#D5C2A5]">
                        <Camera className="w-3.5 h-3.5 text-[#B69A70]" />
                        <span>Ready for Consultant Photo</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Photo Switcher / Uploader Controls (Subtle, professional) */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#493B32]">
                <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E9DFD0]/80 hover:bg-[#E9DFD0] border border-[#D5C2A5] cursor-pointer transition-colors font-medium">
                  <Upload className="w-3.5 h-3.5 text-[#493B32]" />
                  <span>Upload Your Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="sr-only"
                  />
                </label>

                {customPhoto ? (
                  <button
                    type="button"
                    onClick={() => setCustomPhoto(null)}
                    className="text-[#A99A87] hover:text-[#493B32] underline text-xs cursor-pointer"
                  >
                    Reset to Placeholder
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSamplePhoto(!showSamplePhoto)}
                    className="text-[#493B32] hover:text-[#292925] text-xs underline cursor-pointer"
                  >
                    {showSamplePhoto ? 'Show Minimal Placeholder' : 'Preview Sample Photo'}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Professional Introduction (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small professional identity label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#B69A70] uppercase mb-4">
              <ShieldCheck className="w-4 h-4 text-[#B69A70]" />
              <span>D.R. Horton New Home Consultant | Florida</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-serif text-[#292925] tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Helping You Feel at Home, <br />
              <span className="italic font-light text-[#493B32]">From the Very Beginning.</span>
            </h2>

            {/* Official Introduction Text */}
            <div className="space-y-4 text-base sm:text-lg text-[#493B32]/90 font-light leading-relaxed mb-8">
              <p className="font-medium text-[#292925]">
                Welcome to ronysellshomes.
              </p>
              <p>
                I&apos;m a D.R. Horton New Home Consultant serving Florida, and this space is dedicated to sharing helpful home-buying information, new-home inspiration, and guidance for people exploring the possibility of homeownership.
              </p>
              <p>
                Whether you&apos;re beginning your first home search or simply exploring what&apos;s possible, I invite you to connect, ask questions, and take the next step toward your homeownership journey.
              </p>
            </div>

            {/* What to expect: Clean unboxed points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 pb-8 border-t border-b border-[#E9DFD0]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-none bg-[#E9DFD0] flex items-center justify-center shrink-0 mt-0.5 text-[#493B32]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#292925]">No-Pressure Guidance</h4>
                  <p className="text-xs text-[#A99A87] mt-0.5">Explore Florida options at your own pace with honest advice.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-none bg-[#E9DFD0] flex items-center justify-center shrink-0 mt-0.5 text-[#493B32]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#292925]">Florida Insights</h4>
                  <p className="text-xs text-[#A99A87] mt-0.5">Clear information on communities, warranties, and construction stages.</p>
                </div>
              </div>
            </div>

            {/* Contact quick actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenConnectModal}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                Let&apos;s Connect
              </button>

              <a
                href="sms:+14077229956"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#E9DFD0] text-[#292925] hover:bg-[#D5C2A5] transition-all whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#493B32]" />
                <span>Text: 407-722-9956</span>
              </a>

              <a
                href="mailto:rsaintaubin@drhorton.com"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-wider uppercase border border-[#D5C2A5] text-[#493B32] hover:bg-[#E9DFD0]/40 transition-all whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Consultant</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
