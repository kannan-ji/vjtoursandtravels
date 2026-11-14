export interface TourPackage {
  id: string;
  duration: string;
  route: string;
  title: string;
  highlights: string[];
  imageAlt: string;
  imageKey: 'munnarHeritage' | 'classicKerala';
}

export interface FleetVehicle {
  id: string;
  segment: string;
  name: string;
  passengers: string;
  luggage: string;
  features: string[];
  imageKey: 'wagonr' | 'dzire' | 'ertiga';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  city: string;
  tripType: string;
  stars: number;
}

export const WHATSAPP_NUMBER = '917025304620';

export const WHATSAPP_LINKS = {
  headerContact:
    'https://wa.me/917025304620?text=Hello%20VJ%20Tours%2C%20I%20would%20like%20to%20book%20a%20Chauffeur%20or%20Itinerary',
  heroPlan:
    'https://wa.me/917025304620?text=Hello%20VJ%20Tours%2C%20I%20would%20like%20to%20plan%20my%20Kerala%20trip%20and%20request%20a%20chauffeur%20quote',
  customPackage:
    'https://wa.me/917025304620?text=Hello%20VJ%20Tours%2C%20I%20would%20like%20to%20customize%20my%20Kerala%20trip%20itinerary',
  customVehicle:
    'https://wa.me/917025304620?text=Hello%20VJ%20Tours%2C%20I%20would%20like%20to%20inquire%20about%20vehicle%20availability%20and%20rates',
} as const;

export const NAV_LINKS = [
  { label: 'Packages', href: '#tour-packages' },
  { label: 'Vehicles', href: '#our-fleet' },
  { label: 'Testimonials', href: '#why-choose-us' },
  { label: 'Contacts', href: '#contact-us' },
] as const;

export const HERO_CONTENT = {
  brandHeader: 'VJ TOURS & TRAVELS',
  headline: 'Your Trusted Keralam Travel & Holiday Partner',
  subheadline:
    'Direct Dispatch from Perumbavoor Hub • 15 Mins from Cochin Airport (COK) • Zero Middlemen • 100% Owned Fleet & Hill-Certified Chauffeurs',
  primaryCta: 'Contact Us on WhatsApp',
  secondaryCta: 'Connect with Us',
  imageAlt: 'Kerala VJ Tours and Travels',
} as const;

export const KEY_STATS = [
  { value: '3', label: 'Own vehicles' },
  { value: '15 min', label: 'From Cochin Airport' },
  { value: '24/7', label: 'Support' },
  { value: '10+', label: 'Years on the road' },
] as const;

export const PACKAGES_SECTION = {
  title: 'Kerala Packages',
  subtitle: 'Rates vary by season. Message us for a quote.',
  customCalloutTitle: 'Want something different? Tell us your dates and interests.',
  customCalloutBody:
    'We craft fully customizable day-wise plans for families, honeymooners, and corporate teams.',
  customCalloutCta: 'Contact Us on WhatsApp',
} as const;

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'munnar-tea-valley',
    duration: '3N / 4D',
    route: 'COCHIN → MUNNAR → COCHIN',
    title: 'Munnar Tea Valley & Cochin Heritage',
    highlights: [
      'Private AC chauffeur vehicle for entire tour',
      'Munnar tea plantation & Mattupetty sightseeing',
      'Cheeyappara & Valara waterfalls stops',
      'Cochin Fort Kochi & colonial heritage tour',
      'All toll gates, parking fees & driver allowances',
    ],
    imageAlt: 'Munnar Tea Valley & Cochin Heritage',
    imageKey: 'munnarHeritage',
  },
  {
    id: 'classic-kerala-circuit',
    duration: '4N / 5D',
    route: 'COCHIN → MUNNAR → THEKKADY → ALLEPPEY',
    title: 'Classic Kerala Circuit',
    highlights: [
      'Private AC vehicle & experienced hill chauffeur',
      'Munnar hill views & tea museum visit',
      'Thekkady spice plantation & Periyar sanctuary transit',
      'Alleppey backwater cruise / houseboat coordination',
      'Zero hidden charges with transparent airport transfers',
    ],
    imageAlt: 'Classic Kerala Circuit',
    imageKey: 'classicKerala',
  },
];

export const VEHICLES_SECTION = {
  title: 'Our Vehicles',
  subtitle: 'Our own clean vehicles, driven by experienced local drivers.',
  customCalloutTitle: 'Need a different vehicle or a larger group?',
  customCalloutBody:
    "We'll arrange it for you — outstation vans, tempo travellers, or customized group transport.",
  customCalloutCta: 'Contact Us on WhatsApp',
} as const;

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'wagonr',
    segment: 'Couples & Solo Travelers',
    name: 'WagonR',
    passengers: '3-4 passengers',
    luggage: '2 small bags',
    features: ['AC', 'Compact Hatchback', 'Easy Ghats Transit'],
    imageKey: 'wagonr',
  },
  {
    id: 'dzire',
    segment: 'Small Families & Couples',
    name: 'Dzire',
    passengers: '4 passengers',
    luggage: '2 large + 1 small suitcase',
    features: ['AC', 'Comfortable Sedan', 'Generous Boot Space'],
    imageKey: 'dzire',
  },
  {
    id: 'ertiga',
    segment: 'Families & Groups',
    name: 'Ertiga',
    passengers: '5-6 passengers',
    luggage: '3-4 large suitcases',
    features: ['Dual AC', 'Spacious 7-Seater', 'Reclining Comfort Seats'],
    imageKey: 'ertiga',
  },
];

export const TESTIMONIALS_SECTION = {
  ratingLabel: 'Rated 4.9 on Google',
  title: 'What Travellers Say',
} as const;

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rahul-s',
    quote:
      '“The driver was waiting at Kochi airport right on time. Calm and safe driving on the Munnar hill roads, and he pointed out great tea spots and viewpoints along the way.”',
    author: 'Rahul S.',
    city: 'Bengaluru',
    tripType: 'Family Vacation',
    stars: 5,
  },
  {
    id: 'priya-amit',
    quote:
      '“Booked an Ertiga for 5 days. Spotless car, very chill driver, and the price quoted on WhatsApp was exact with no extra surprise costs at the end.”',
    author: 'Priya & Amit M.',
    city: 'Mumbai',
    tripType: 'Honeymoon & Leisure',
    stars: 5,
  },
  {
    id: 'george-k',
    quote:
      '“Traveled with my elderly parents and kids. Our driver was genuinely kind, patient with stops, and made sure everyone was comfortable throughout.”',
    author: 'George K.',
    city: 'Chennai',
    tripType: 'Family Trip',
    stars: 5,
  },
];

export const CONTACT_INFO = {
  heading: 'Plan your Kerala trip with us',
  subheading:
    'Reach us directly or drop an enquiry. We operate round-the-clock from our Perumbavoor hub.',
  businessName: 'VJ Tours and Travels',
  address: 'Main Central Road (MC Road), Perumbavoor, Ernakulam District, Kerala – 683542',
  airportNote: '15 minutes from Cochin International Airport (COK)',
  emailLabel: 'EMAIL US',
  email: 'vjtoursperumbavoor@gmail.com',
  socialLabel: 'Connect on Social Media',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
  ],
  callLabel: 'Call us',
  phones: [
    { label: 'Call +91 70253 04620', href: 'tel:+917025304620', display: '+91 70253 04620' },
    { label: 'Call +91 98470 54620', href: 'tel:+919847054620', display: '+91 98470 54620' },
  ],
  formTitle: 'Enquiry',
  fields: {
    nameLabel: 'Your Name',
    namePlaceholder: 'e.g. Ramesh Kumar',
    whatsappLabel: 'WhatsApp Number',
    whatsappPlaceholder: '+91 98765 43210',
    messageLabel: 'Message',
    messagePlaceholder: 'e.g. Munnar, Alleppey, Thekkady or custom tour enquiry',
    submitLabel: 'Send on WhatsApp',
  },
} as const;

export const FOOTER_CONTENT = {
  brand: 'VJ TOURS AND TRAVELS',
  description:
    'Trusted local tour operator and chauffeur service based in Perumbavoor, Kerala.',
  copyright:
    '© 2025 VJ Tours and Travels Perumbavoor. All rights reserved. Government of Kerala approved transport partner.',
} as const;
