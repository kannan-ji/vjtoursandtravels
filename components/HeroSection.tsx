'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import vjHero1 from '@/src/assets/images/vj-hero-1.jpg';
import vjHero2 from '@/src/assets/images/vj-hero-2.jpg';
import vjHero3 from '@/src/assets/images/vj-hero-3.jpg';
import vjHero4 from '@/src/assets/images/vj-hero-4.jpg';
import vjHero5 from '@/src/assets/images/vj-hero-5.jpg';
import { getNextSlideIndex } from '@/lib/carousel';
import { HERO_CONTENT, KEY_STATS, WHATSAPP_LINKS } from '@/lib/vjtours-data';
import SafeImage from './SafeImage';
import SectionLink from './SectionLink';
import WhatsAppIcon from './WhatsAppIcon';

const HERO_SLIDES = [
  {
    id: 'vj-hero-1',
    src: vjHero1,
    alt: 'Keralam scenic destination view 1',
    label: 'Destination 1',
  },
  {
    id: 'vj-hero-2',
    src: vjHero2,
    alt: 'Keralam scenic destination view 2',
    label: 'Destination 2',
  },
  {
    id: 'vj-hero-3',
    src: vjHero3,
    alt: 'Keralam scenic destination view 3',
    label: 'Destination 3',
  },
  {
    id: 'vj-hero-4',
    src: vjHero4,
    alt: 'Keralam scenic destination view 4',
    label: 'Destination 4',
  },
  {
    id: 'vj-hero-5',
    src: vjHero5,
    alt: 'Keralam scenic destination view 5',
    label: 'Destination 5',
  },
] as const;

const SLIDE_INTERVAL_MS = 5500;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => getNextSlideIndex(prev, HERO_SLIDES.length));
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="hero" className="border-b border-[#E2DFD7] bg-[#F7F6F2]">
      <div className="mx-auto max-w-7xl px-0 pt-0 pb-12 lg:px-10 lg:pt-12 lg:pb-16">
        {/* Full-Screen on Mobile/Tablet, Container-Bounded on Desktop */}
        <div
          className="relative overflow-hidden bg-[#111C18] lg:rounded-sm lg:border lg:border-[#D8D4CA]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Keralam travel destinations showcase"
        >
          {/* Layered Background Slides */}
          <div className="absolute inset-0" aria-hidden="true">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === activeSlide;
              return (
                <motion.div
                  key={slide.id}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.02,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                  style={{ pointerEvents: 'none' }}
                >
                  <SafeImage
                    src={slide.src}
                    alt={slide.alt}
                    priority={idx === 0}
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-cover"
                    fallbackTitle={slide.label}
                  />
                </motion.div>
              );
            })}

            {/* Measured Contrast Scrims for WCAG AA Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1410]/75 via-[#0B1410]/50 to-[#0B1410]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1410]/65 via-transparent to-[#0B1410]/15" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-24 lg:min-h-[620px] lg:py-24 lg:px-16">
            <div className="max-w-2xl">
              <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.85rem)] font-semibold leading-[1.08] tracking-tight text-white [text-wrap:balance]">
                {HERO_CONTENT.headline}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#E6E4DC] sm:text-lg">
                {HERO_CONTENT.subheadline}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_LINKS.heroPlan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 rounded-sm bg-[#0D6E4E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#118962] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>{HERO_CONTENT.primaryCta}</span>
                </a>

                <SectionLink
                  href="#contact-us"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border border-white/75 bg-[#0B1410]/35 px-6 py-3 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors duration-150 hover:bg-white hover:text-[#141A17] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{HERO_CONTENT.secondaryCta}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </SectionLink>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Architectural Stat Ledger */}
        <div className="mt-8 px-6 lg:mt-10 lg:px-0">
          <div className="grid grid-cols-2 border-t border-b border-[#D8D4CA] bg-white lg:grid-cols-4">
            {KEY_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-6 py-7 sm:px-8 ${
                  index % 2 === 1 ? 'border-l border-[#E2DFD7]' : ''
                } ${index >= 2 ? 'border-t border-[#E2DFD7] lg:border-t-0' : ''} ${
                  index > 0 ? 'lg:border-l lg:border-[#E2DFD7]' : ''
                }`}
              >
                <div className="font-display text-3xl font-semibold tracking-tight text-[#141A17] tabular-nums sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm font-medium text-[#4E5953]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
