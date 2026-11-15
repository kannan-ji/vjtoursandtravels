'use client';

import type { ReactNode } from 'react';
import { scrollToSectionHref } from '@/lib/navigation';

interface SectionLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function SectionLink({ href, className, onClick, children }: SectionLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (scrollToSectionHref(href)) {
      event.preventDefault();
    }
    onClick?.();
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
