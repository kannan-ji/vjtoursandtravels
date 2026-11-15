export function getNextSlideIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current + 1) % total;
}

export function getPrevSlideIndex(current: number, total: number): number {
  if (total <= 0) return 0;
  return (current - 1 + total) % total;
}

export function formatSlideCounter(current: number, total: number): string {
  if (total <= 0) return '0/0';
  const safeIndex = Math.max(0, Math.min(current, total - 1));
  return `${safeIndex + 1}/${total}`;
}
