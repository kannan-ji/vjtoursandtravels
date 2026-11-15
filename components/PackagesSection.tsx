'use client';

import { Check, MapPin } from 'lucide-react';
import munnarTeaImg from '@/src/assets/images/cc_munnar_tea.jpg';
import houseboatImg from '@/src/assets/images/cc_houseboat_backwaters.jpg';
import waterfallsImg from '@/src/assets/images/cc_waterfalls_kerala.jpg';
import jatayuImg from '@/src/assets/images/cc_jatayu_kerala.jpg';
import {
  PACKAGES_SECTION,
  TOUR_PACKAGES,
  WHATSAPP_LINKS,
} from '@/lib/vjtours-data';
import SafeImage from './SafeImage';
import WhatsAppIcon from './WhatsAppIcon';

const PACKAGE_PHOTO_MAP = {
  munnarTea: munnarTeaImg,
  houseboat: houseboatImg,
  waterfalls: waterfallsImg,
  jatayu: jatayuImg,
} as const;

export default function PackagesSection() {
  return (
    <section id="tour-packages" className="scroll-mt-20 border-b border-[#E2DFD7] bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col gap-4 border-b border-[#E2DFD7] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-[#0D6E4E] tabular-nums">
              01
            </p>
            <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight text-[#141A17] sm:text-4xl [text-wrap:balance]">
              {PACKAGES_SECTION.title}
            </h2>
          </div>
          <p className="text-sm text-[#4E5953] sm:text-base">{PACKAGES_SECTION.subtitle}</p>
        </div>

        {/* Package Dossiers */}
        <div className="mt-12 space-y-12">
          {TOUR_PACKAGES.map((pkg, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={pkg.id}
                className="grid grid-cols-1 overflow-hidden rounded-sm border border-[#E2DFD7] bg-[#F7F6F2] lg:grid-cols-12 lg:items-stretch"
              >
                {/* 2-Photo Authentic CC Diptych per Package */}
                <div
                  className={`grid grid-cols-2 gap-1 bg-[#E2DFD7] lg:col-span-6 lg:grid-cols-1 lg:grid-rows-2 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {pkg.photos.map((photo, photoIdx) => (
                    <div
                      key={photo.key}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E5DC] lg:aspect-auto lg:min-h-[220px]"
                    >
                      <SafeImage
                        src={PACKAGE_PHOTO_MAP[photo.key]}
                        alt={photo.alt}
                        priority={index === 0 && photoIdx === 0}
                        sizes="(max-width: 1024px) 50vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        fallbackTitle={photo.caption}
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-4 py-3"
                        aria-hidden="true"
                      >
                        <span className="text-xs font-medium tracking-wide text-white/95">
                          {photo.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Package Details */}
                <div
                  className={`flex flex-col justify-between p-8 sm:p-10 lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-[#141A17] tabular-nums">
                      <span className="text-[#0D6E4E]">{pkg.duration}</span>
                      <span aria-hidden="true" className="text-[#9CA59F]">
                        ·
                      </span>
                      <span className="text-[#B47B2B]">{pkg.distanceKm}</span>
                    </div>

                    <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-[#141A17] sm:text-3xl [text-wrap:balance]">
                      {pkg.title}
                    </h3>

                    <p className="mt-4 flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#2D3631]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0D6E4E]" />
                      <span>{pkg.route}</span>
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-[#E2DFD7] pt-6">
                      {pkg.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-[#2D3631] sm:text-base"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#0D6E4E]"
                            strokeWidth={2.2}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-[#E2DFD7] pt-5 text-xs leading-relaxed text-[#4E5953]">
                    {PACKAGES_SECTION.guestNote}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Package Callout Band */}
        <div className="mt-12 flex flex-col justify-between gap-6 rounded-sm bg-[#111C18] p-8 text-white sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl [text-wrap:balance]">
              {PACKAGES_SECTION.customCalloutTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#C7D1CC] sm:text-base">
              {PACKAGES_SECTION.customCalloutBody}
            </p>
          </div>

          <a
            href={WHATSAPP_LINKS.customPackage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#0D6E4E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#118962] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>{PACKAGES_SECTION.customCalloutCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
