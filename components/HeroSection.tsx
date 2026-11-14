'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import heroMunnarImg from '@/src/assets/images/hero_kerala_munnar_1794648740844.jpg';
import { HERO_CONTENT, KEY_STATS, WHATSAPP_LINKS } from '@/lib/vjtours-data';
import SafeImage from './SafeImage';

export default function HeroSection() {
  return (
    <section id="hero" className="border-b border-[#E2DFD7] bg-[#F7F6F2]">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-12 lg:px-10 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Editorial Copy Column */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="mb-8 h-px w-16 bg-[#B47B2B]" aria-hidden="true" />

              <h1 className="font-display text-[clamp(2.35rem,4.2vw,3.85rem)] font-semibold leading-[1.08] tracking-tight text-[#141A17] [text-wrap:balance]">
                {HERO_CONTENT.headline}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4E5953] sm:text-lg">
                {HERO_CONTENT.subheadline}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_LINKS.heroPlan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-sm bg-[#0D6E4E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#09543B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>{HERO_CONTENT.primaryCta}</span>
              </a>

              <a
                href="#contact-us"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-sm border border-[#141A17] bg-transparent px-6 py-3 text-sm font-semibold text-[#141A17] transition-colors duration-150 hover:bg-[#141A17] hover:text-[#F7F6F2] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141A17]"
              >
                <span>{HERO_CONTENT.secondaryCta}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Atmospheric Landscape Frame */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-[#D8D4CA] bg-[#E8E5DC] lg:col-span-6 lg:aspect-auto lg:min-h-[440px]"
          >
            <SafeImage
              src={heroMunnarImg}
              alt={HERO_CONTENT.imageAlt}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              fallbackTitle={HERO_CONTENT.brandHeader}
            />
          </motion.div>
        </div>

        {/* Full-Width Architectural Stat Ledger */}
        <div className="mt-12 grid grid-cols-2 border-t border-b border-[#D8D4CA] bg-white lg:mt-16 lg:grid-cols-4">
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
    </section>
  );
}
