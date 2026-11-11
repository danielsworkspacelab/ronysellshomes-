import React from 'react';
import { Mail, MessageSquare, Instagram, ArrowUpRight, Shield, Home } from 'lucide-react';

interface FooterProps {
  onOpenConnectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConnectModal }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Home Buying Tips', href: '#tips' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#292925] text-[#FAF8F4] pt-20 pb-12 border-t border-[#493B32]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Grid: Brand & CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl tracking-tight text-[#FAF8F4]">
              ronysellshomes
            </h3>
            
            <p className="text-xs font-semibold tracking-widest uppercase text-[#D5C2A5]">
              D.R. Horton New Home Consultant · Florida
            </p>

            <p className="text-sm text-[#FAF8F4]/80 font-light leading-relaxed max-w-md">
              Your Next Chapter Begins at Home. Dedicated to helping you discover new construction opportunities and navigate your Florida home-buying journey with clarity and confidence.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConnectModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#D5C2A5] text-[#292925] hover:bg-[#E9DFD0] transition-colors cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Nav Links (col-span-3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#D5C2A5]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#FAF8F4]/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#D5C2A5]">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[11px] text-[#A99A87] block uppercase tracking-wider">
                  Text or Call
                </span>
                <a
                  href="sms:+14077229956"
                  className="text-[#FAF8F4] hover:text-[#D5C2A5] font-mono transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D5C2A5]" />
                  <span>+1 407-722-9956</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-[#A99A87] block uppercase tracking-wider">
                  Email
                </span>
                <a
                  href="mailto:rsaintaubin@drhorton.com"
                  className="text-[#FAF8F4] hover:text-[#D5C2A5] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D5C2A5]" />
                  <span>rsaintaubin@drhorton.com</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] text-[#A99A87] block uppercase tracking-wider">
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/ronysellshomes?srtk=Nmx3YXZzcnNyc3N4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF8F4] hover:text-[#D5C2A5] transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#D5C2A5]" />
                  <span>@ronysellshomes</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Compliance Disclosures (MANDATORY REQUIREMENT) */}
        <div className="py-8 border-b border-white/10 space-y-4 text-xs text-[#FAF8F4]/60 leading-relaxed font-light">
          
          <div className="flex items-center gap-2 text-[#D5C2A5] font-normal">
            <Home className="w-4 h-4 text-[#D5C2A5] shrink-0" />
            <span className="uppercase tracking-wider font-medium text-xs">Equal Housing Opportunity</span>
          </div>

          <p>
            <strong className="text-[#FAF8F4]/80">Personal Professional Website Disclosure: </strong>
            This website (<span className="text-[#FAF8F4]/90">ronysellshomes</span>) is a personal professional online presence and educational platform representing a D.R. Horton New Home Consultant serving Florida, USA. This website is not the official corporate website of D.R. Horton, Inc., and is neither owned, operated, nor maintained by D.R. Horton corporate headquarters.
          </p>

          <p>
            <strong className="text-[#FAF8F4]/80">Educational & Non-Brokerage Notice: </strong>
            All information provided herein is for general educational, guidance, and informational purposes only. It does not constitute an offer to sell or a solicitation of offers to buy real estate. No independent mortgage lending, legal, appraisal, engineering, financial, or real estate brokerage services are provided. Home and community information, including standard inclusions, plans, school zones, and community guidelines, are subject to change without notice. All prospective purchasers should review formal builder contracts and consult independent licensed financial and legal advisors.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Editable Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F4]/50">
          <div>
            &copy; {currentYear} ronysellshomes. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#D5C2A5]" />
              <span>Florida New Home Sales</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Privacy & Terms Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
