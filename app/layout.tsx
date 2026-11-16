import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VJ Tours and Travels | Keralam Cabs & Tour Operator Perumbavoor',
  description:
    'Trusted local tour operator and transport service based in Perumbavoor, Keralam. Direct dispatch from Perumbavoor Hub, 15 mins from Cochin Airport (COK).',
  openGraph: {
    title: 'VJ Tours and Travels | Keralam Cabs & Tour Operator Perumbavoor',
    description:
      'Trusted local tour operator and transport service based in Perumbavoor, Keralam. Direct dispatch from Perumbavoor Hub, 15 mins from Cochin Airport (COK).',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VJ Tours and Travels | Keralam Cabs & Tour Operator Perumbavoor',
    description:
      'Trusted local tour operator and transport service based in Perumbavoor, Keralam. Direct dispatch from Perumbavoor Hub, 15 mins from Cochin Airport (COK).',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakartaSans.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
