/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { AboutMe } from './components/AboutMe';
import { ServicesSection } from './components/ServicesSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { LifestyleGallery } from './components/LifestyleGallery';
import { BlogSection } from './components/BlogSection';
import { MainCTA } from './components/MainCTA';
import { ContactSection } from './components/ContactSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { ConnectModal } from './components/ConnectModal';

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  const handleOpenConnect = () => {
    setConnectModalOpen(true);
  };

  const handleCloseConnect = () => {
    setConnectModalOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#292925] selection:bg-[#D5C2A5]/40 selection:text-[#292925]">
      {/* SECTION 1: Navigation Bar */}
      <Navbar onOpenConnectModal={handleOpenConnect} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* SECTION 2: Homepage Hero */}
        <Hero
          onOpenConnectModal={handleOpenConnect}
          onExploreServices={() => handleScrollToSection('services')}
        />

        {/* SECTION 3: Brand Introduction */}
        <BrandIntro />

        {/* SECTION 4: About Me */}
        <AboutMe onOpenConnectModal={handleOpenConnect} />

        {/* SECTION 5: Services */}
        <ServicesSection onOpenConnectModal={handleOpenConnect} />

        {/* SECTION 6: The Home-Buying Journey */}
        <JourneyTimeline />

        {/* SECTION 7: Florida Lifestyle Gallery */}
        <LifestyleGallery />

        {/* SECTION 8: Home Buying Tips & Blog */}
        <BlogSection onOpenConnectModal={handleOpenConnect} />

        {/* SECTION 9: Main Call-to-Action */}
        <MainCTA />

        {/* SECTION 10: Contact Section */}
        <ContactSection />

        {/* SECTION 11: Instagram Section */}
        <InstagramSection />
      </main>

      {/* SECTION 12: Footer */}
      <Footer onOpenConnectModal={handleOpenConnect} />

      {/* Quick Connect Action Modal */}
      <ConnectModal
        isOpen={connectModalOpen}
        onClose={handleCloseConnect}
        onScrollToContact={() => handleScrollToSection('contact')}
      />
    </div>
  );
}
