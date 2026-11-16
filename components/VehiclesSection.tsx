'use client';

import { Briefcase, Users } from 'lucide-react';
import wagonrImg from '@/src/assets/images/vehicle_wagonr_1794648743783.jpg';
import ertigaImg from '@/src/assets/images/vehicle_ertiga_1794648743809.jpg';
import {
  FLEET_VEHICLES,
  VEHICLES_SECTION,
  WHATSAPP_LINKS,
} from '@/lib/vjtours-data';
import SafeImage from './SafeImage';
import WhatsAppIcon from './WhatsAppIcon';

const VEHICLE_IMAGES = {
  wagonr: wagonrImg,
  ertiga: ertigaImg,
};

export default function VehiclesSection() {
  return (
    <section id="our-fleet" className="scroll-mt-20 border-b border-[#E2DFD7] bg-[#F7F6F2] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col gap-4 border-b border-[#D8D4CA] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-[#0D6E4E] tabular-nums">
              02
            </p>
            <h2 className="font-display mt-1 text-3xl font-semibold tracking-tight text-[#141A17] sm:text-4xl [text-wrap:balance]">
              {VEHICLES_SECTION.title}
            </h2>
          </div>
        </div>

        {/* 2 Owned Vehicles Ledger Grid (WagonR & Ertiga) */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {FLEET_VEHICLES.map((vehicle) => (
            <article
              key={vehicle.id}
              className="flex flex-col overflow-hidden rounded-sm border border-[#E2DFD7] bg-white"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#E2DFD7] bg-[#ECEAE3]">
                <SafeImage
                  src={VEHICLE_IMAGES[vehicle.imageKey]}
                  alt={vehicle.name}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  fallbackTitle={vehicle.name}
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wide text-[#B47B2B]">
                  {vehicle.segment}
                </p>
                <h3 className="font-display mt-1.5 text-2xl font-semibold tracking-tight text-[#141A17]">
                  {vehicle.name}
                </h3>

                {/* Specification Ledger */}
                <dl className="mt-5 space-y-2.5 border-t border-[#E2DFD7] pt-5 text-sm text-[#2D3631]">
                  <div className="flex items-center gap-2.5">
                    <Users className="h-4 w-4 shrink-0 text-[#0D6E4E]" />
                    <dt className="sr-only">Passenger capacity</dt>
                    <dd className="tabular-nums font-medium">{vehicle.passengers}</dd>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="h-4 w-4 shrink-0 text-[#0D6E4E]" />
                    <dt className="sr-only">Luggage capacity</dt>
                    <dd className="tabular-nums">{vehicle.luggage}</dd>
                  </div>
                </dl>

                {/* Clean Unboxed Feature Line (Zero Pills) */}
                <p className="mt-5 border-t border-[#E2DFD7] pt-4 text-xs font-medium leading-relaxed text-[#4E5953]">
                  {vehicle.features.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Vehicle & Group Arrangement Callout */}
        <div className="mt-12 flex flex-col justify-between gap-6 rounded-sm border border-[#D8D4CA] bg-white p-8 sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-semibold tracking-tight text-[#141A17] sm:text-2xl [text-wrap:balance]">
              {VEHICLES_SECTION.customCalloutTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4E5953] sm:text-base">
              {VEHICLES_SECTION.customCalloutBody}
            </p>
          </div>

          <a
            href={WHATSAPP_LINKS.customVehicle}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#0D6E4E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#09543B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>{VEHICLES_SECTION.customCalloutCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
