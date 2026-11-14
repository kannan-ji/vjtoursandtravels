'use client';

import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import pkgMunnarImg from '@/src/assets/images/pkg_munnar_heritage_1794648742192.jpg';
import pkgClassicImg from '@/src/assets/images/pkg_classic_kerala_1794648742886.jpg';
import {
  PACKAGES_SECTION,
  TOUR_PACKAGES,
  WHATSAPP_LINKS,
  type TourPackage,
} from '@/lib/vjtours-data';
import SafeImage from './SafeImage';

const PACKAGE_IMAGES = {
  munnarHeritage: pkgMunnarImg,
  classicKerala: pkgClassicImg,
};

interface PackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  return (
    <section id="tour-packages" className="border-b border-[#E2DFD7] bg-white py-20 lg:py-24">
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
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden bg-[#E8E5DC] lg:col-span-6 lg:aspect-auto lg:min-h-[380px] ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <SafeImage
                    src={PACKAGE_IMAGES[pkg.imageKey]}
                    alt={pkg.imageAlt}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    fallbackTitle={pkg.title}
                  />
                </div>

                <div
                  className={`flex flex-col justify-between p-8 sm:p-10 lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[#4E5953] tabular-nums">
                      <span className="text-[#0D6E4E]">{pkg.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pkg.route}</span>
                    </div>

                    <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-[#141A17] sm:text-3xl [text-wrap:balance]">
                      {pkg.title}
                    </h3>

                    <ul className="mt-6 space-y-3 border-t border-[#E2DFD7] pt-6">
                      {pkg.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[#2D3631] sm:text-base">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0D6E4E]" strokeWidth={2.2} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#E2DFD7] pt-6">
                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-sm bg-[#141A17] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#0D6E4E] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
                    >
                      <span>Request Quote</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
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
            <MessageCircle className="h-4 w-4 shrink-0" />
            <span>{PACKAGES_SECTION.customCalloutCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
