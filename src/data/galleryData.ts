import {
  heroFloridaHome,
  floridaKitchen,
  floridaOutdoorLiving,
  ctaArchitectureEvening,
} from '../assets/images';

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Exterior' | 'Interior' | 'Outdoor Living' | 'Architecture';
  description: string;
  src: string;
  alt: string;
}

export const LIFESTYLE_GALLERY: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Modern Florida Residence & Palm Landscaping',
    category: 'Exterior',
    description: 'Clean architectural lines paired with lush Florida tropical landscaping and natural stone accents.',
    src: heroFloridaHome,
    alt: 'Modern Florida home exterior with palm trees and limestone facade'
  },
  {
    id: 'gal-2',
    title: 'Sunlit Chef-Inspired Kitchen',
    category: 'Interior',
    description: 'Expansive quartz island, custom cabinetry, warm natural wood stools, and abundant natural Florida daylight.',
    src: floridaKitchen,
    alt: 'Bright modern open concept residential kitchen'
  },
  {
    id: 'gal-3',
    title: 'Covered Lanai & Resort Outdoor Living',
    category: 'Outdoor Living',
    description: 'Seamless indoor-outdoor living with covered lanai seating, limestone pavers, and palm tree canopy.',
    src: floridaOutdoorLiving,
    alt: 'Florida covered patio and resort style outdoor living space'
  },
  {
    id: 'gal-4',
    title: 'Warm Twilight Architectural Illumination',
    category: 'Architecture',
    description: 'Welcoming evening illumination through expansive floor-to-ceiling windows and landscaped stone pathway.',
    src: ctaArchitectureEvening,
    alt: 'Modern residential home illuminated at golden hour dusk'
  },
  {
    id: 'gal-5',
    title: 'Welcoming Florida Residential Entrance',
    category: 'Exterior',
    description: 'Thoughtfully framed grand entryway featuring natural wood front door, tropical foliage, and modern paver driveway.',
    src: heroFloridaHome,
    alt: 'Welcoming front entrance of contemporary Florida residence'
  },
  {
    id: 'gal-6',
    title: 'Open Great Room & Gathering Spaces',
    category: 'Interior',
    description: 'High ceilings, airy floor plans, and versatile living rooms designed for effortless everyday comfort and entertaining.',
    src: floridaKitchen,
    alt: 'Expansive contemporary living room and open concept entertaining area'
  }
];
