'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HERO_CONTENT, NAV_LINKS, WHATSAPP_LINKS } from '@/lib/vjtours-data';
import SectionLink from './SectionLink';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative md:sticky md:top-0 z-40 border-b border-[#E2DFD7] bg-[#F7F6F2]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <SectionLink
          href="#hero"
          className="font-display text-lg font-semibold tracking-tight text-[#141A17] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6E4E]"
        >
          {HERO_CONTENT.brandHeader}
        </SectionLink>

        {/* Zone 2: 4 Clean Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4E5953] transition-colors duration-150 hover:text-[#141A17] hover:underline hover:underline-offset-8 decoration-[#0D6E4E] decoration-2 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D6E4E]"
            >
              {link.label}
            </SectionLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_LINKS.headerContact}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-sm bg-[#0D6E4E] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#09543B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>Contact Us</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#D8D4CA] bg-white text-[#141A17] transition-colors hover:bg-[#ECEAE3] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D6E4E]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="border-t border-[#E2DFD7] bg-[#F7F6F2] px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <SectionLink
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center border-b border-[#E2DFD7]/70 text-base font-medium text-[#141A17] transition-colors hover:text-[#0D6E4E]"
                >
                  {link.label}
                </SectionLink>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={WHATSAPP_LINKS.headerContact}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-sm bg-[#0D6E4E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#09543B]"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
