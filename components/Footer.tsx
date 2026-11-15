import { FOOTER_CONTENT, NAV_LINKS } from '@/lib/vjtours-data';
import SectionLink from './SectionLink';

export default function Footer() {
  return (
    <footer className="border-t border-[#E2DFD7] bg-[#F7F6F2] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-md">
            <SectionLink
              href="#hero"
              className="font-display text-lg font-semibold tracking-tight text-[#141A17]"
            >
              {FOOTER_CONTENT.brand}
            </SectionLink>
            <p className="mt-2 text-sm leading-relaxed text-[#4E5953]">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6">
            {NAV_LINKS.map((link) => (
              <SectionLink
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4E5953] transition-colors hover:text-[#141A17] hover:underline hover:underline-offset-4 whitespace-nowrap"
              >
                {link.label}
              </SectionLink>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-[#E2DFD7] pt-6">
          <p className="text-xs leading-relaxed text-[#5F6B64]">{FOOTER_CONTENT.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
