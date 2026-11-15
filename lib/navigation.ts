export function extractSectionId(href: string): string | null {
  if (!href.startsWith('#')) return null;
  const id = href.slice(1).trim();
  return id.length > 0 ? id : null;
}

export function getCleanUrlWithoutHash(pathname: string, search: string): string {
  return `${pathname || '/'}${search || ''}`;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSectionHref(href: string): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }

  const sectionId = extractSectionId(href);
  if (!sectionId) return false;

  const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';

  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, left: 0, behavior });
    return true;
  }

  const target = document.getElementById(sectionId);
  if (!target) return false;

  target.scrollIntoView({ behavior, block: 'start' });
  return true;
}
