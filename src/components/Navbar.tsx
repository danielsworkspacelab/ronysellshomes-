import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Home Buying Tips', href: '#tips' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E9DFD0] shadow-sm py-4'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className={`text-2xl sm:text-3xl font-serif tracking-tight whitespace-nowrap shrink-0 transition-colors ${
            isScrolled ? 'text-[#292925] hover:text-[#493B32]' : 'text-white hover:text-[#E9DFD0]'
          }`}
          aria-label="ronysellshomes home"
        >
          ronysellshomes
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                isScrolled
                  ? 'text-[#493B32] hover:text-[#292925] after:bg-[#493B32]'
                  : 'text-white/90 hover:text-white after:bg-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenConnectModal}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
              isScrolled
                ? 'bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] shadow-xs active:scale-[0.98]'
                : 'bg-[#D5C2A5] text-[#292925] hover:bg-[#E9DFD0] shadow-sm active:scale-[0.98]'
            }`}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {/* Accessible Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5C2A5] ${
              isScrolled ? 'text-[#292925] hover:text-[#493B32]' : 'text-white hover:text-[#E9DFD0]'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F4] border-b border-[#E9DFD0] shadow-lg px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#A99A87] pb-2 border-b border-[#E9DFD0]">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif text-[#292925] hover:text-[#B69A70] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#E9DFD0] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConnectModal();
                }}
                className="w-full text-center px-5 py-3 text-xs font-semibold tracking-wider uppercase bg-[#493B32] text-[#FAF8F4] hover:bg-[#292925] transition-colors"
              >
                Let&apos;s Connect
              </button>
              <div className="flex items-center justify-between text-xs text-[#A99A87] pt-1">
                <a href="sms:+14077229956" className="hover:text-[#493B32]">
                  Text: +1 407-722-9956
                </a>
                <a href="mailto:rsaintaubin@drhorton.com" className="hover:text-[#493B32]">
                  Email Consultant
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
