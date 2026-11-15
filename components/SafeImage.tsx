'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Car } from 'lucide-react';

interface SafeImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fallbackTitle?: string;
}

export default function SafeImage({
  src,
  alt,
  className = 'object-cover',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
  fallbackTitle,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#ECEAE3] to-[#DFDDD4] p-6 text-center text-[#141A17]"
        role="img"
        aria-label={alt}
      >
        <Car className="mb-2 h-8 w-8 text-[#0D6E4E]" strokeWidth={1.5} />
        <p className="font-display text-base font-medium">{fallbackTitle || alt}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      loading={priority ? undefined : 'eager'}
      sizes={sizes}
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
