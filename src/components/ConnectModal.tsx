import React from 'react';
import { X, MessageSquare, Mail, Phone, Instagram, ArrowDown } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToContact: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose, onScrollToContact }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF8F4] border border-[#D5C2A5] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#493B32] hover:text-[#292925] cursor-pointer"
          aria-label="Close connect modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-semibold tracking-widest uppercase text-[#B69A70] mb-2">
          Direct Line · Florida
        </div>

        <h3 className="text-2xl font-serif text-[#292925] mb-2">
          Let&apos;s Connect
        </h3>

        <p className="text-sm text-[#493B32] font-light leading-relaxed mb-6">
          Reach out directly via your preferred channel for questions, guidance, or scheduling a conversation about new construction homes in Florida.
        </p>

        {/* Action channels */}
        <div className="space-y-3 mb-6">
          
          {/* SMS Button */}
          <a
            href="sms:+14077229956"
            className="flex items-center justify-between p-4 bg-[#E9DFD0]/60 hover:bg-[#E9DFD0] border border-[#D5C2A5] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#292925] block">
                  Send a Text Message
                </span>
                <span className="text-xs text-[#A99A87] font-mono">+1 407-722-9956</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#493B32] group-hover:translate-x-1 transition-transform">
              SMS →
            </span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:rsaintaubin@drhorton.com"
            className="flex items-center justify-between p-4 bg-[#FAF8F4] hover:bg-[#E9DFD0]/40 border border-[#D5C2A5] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#292925] block">
                  Send an Email
                </span>
                <span className="text-xs text-[#A99A87]">rsaintaubin@drhorton.com</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#493B32] group-hover:translate-x-1 transition-transform">
              Email →
            </span>
          </a>

          {/* Phone Call */}
          <a
            href="tel:+14077229956"
            className="flex items-center justify-between p-4 bg-[#FAF8F4] hover:bg-[#E9DFD0]/40 border border-[#D5C2A5] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#292925] block">
                  Call Direct
                </span>
                <span className="text-xs text-[#A99A87] font-mono">+1 407-722-9956</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#493B32] group-hover:translate-x-1 transition-transform">
              Call →
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ronysellshomes?srtk=Nmx3YXZzcnNyc3N4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#FAF8F4] hover:bg-[#E9DFD0]/40 border border-[#D5C2A5] transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#FAF8F4] border border-[#D5C2A5] flex items-center justify-center text-[#493B32]">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#292925] block">
                  Instagram
                </span>
                <span className="text-xs text-[#A99A87]">@ronysellshomes</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#493B32] group-hover:translate-x-1 transition-transform">
              Visit →
            </span>
          </a>

        </div>

        {/* Jump to Form option */}
        <div className="pt-4 border-t border-[#E9DFD0] text-center">
          <button
            type="button"
            onClick={() => {
              onClose();
              onScrollToContact();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#493B32] hover:text-[#292925] cursor-pointer"
          >
            <span>Or Complete Full Consultation Form</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
