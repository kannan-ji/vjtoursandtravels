'use client';

import { useEffect } from 'react';
import { getCleanUrlWithoutHash } from '@/lib/navigation';
import ContactSection from './ContactSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import PackagesSection from './PackagesSection';
import TestimonialsSection from './TestimonialsSection';
import VehiclesSection from './VehiclesSection';

export default function VJHomeExperience() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        getCleanUrlWithoutHash(window.location.pathname, window.location.search),
      );
    }

    let userInteracted = false;
    const markUserInteracted = () => {
      userInteracted = true;
    };

    const resetToTop = () => {
      if (!userInteracted) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('wheel', markUserInteracted, { passive: true, once: true });
    window.addEventListener('touchstart', markUserInteracted, { passive: true, once: true });
    window.addEventListener('keydown', markUserInteracted, { once: true });

    resetToTop();
    const rafId = window.requestAnimationFrame(resetToTop);

    const handleLoad = () => {
      resetToTop();
    };
    if (document.readyState !== 'complete') {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', markUserInteracted);
      window.removeEventListener('touchstart', markUserInteracted);
      window.removeEventListener('keydown', markUserInteracted);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#141A17]">
      <Navbar />
      <main>
        <HeroSection />
        <PackagesSection />
        <VehiclesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

