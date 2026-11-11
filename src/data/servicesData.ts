export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDetails: string[];
  keyBenefit: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'new-construction',
    number: '01',
    title: 'New Construction Home Guidance',
    shortDescription: 'Explore the new construction home-buying process and learn about the opportunities available to you.',
    fullDetails: [
      'Understand how new construction homes differ from resale properties, including modern energy-efficient building standards, brand-new warranties, and updated floor plan designs.',
      'Learn about construction timelines, architectural milestones from foundation to framing, and what to expect during each building phase.',
      'Explore available modern finishes, layout options, and technological integrations available in modern Florida homes.',
      'Receive transparent explanations of builder policies, earnest deposits, and new home contracts.'
    ],
    keyBenefit: 'Clarity on how newly built homes provide peace of mind and long-term value.'
  },
  {
    id: 'first-time-homebuyer',
    number: '02',
    title: 'First-Time Homebuyer Guidance',
    shortDescription: 'Helpful information and direction for people preparing to purchase their first home.',
    fullDetails: [
      'Step-by-step breakdown of what first-time purchasers encounter when embarking on homeownership.',
      'Guidance on organizing essential paperwork, understanding earnest money, and budgeting for down payment and closing expenses.',
      'Learn the vocabulary of home buying without overwhelming jargon or high-pressure sales tactics.',
      'Resources on first-time homebuyer educational programs and readiness checklists.'
    ],
    keyBenefit: 'Empowerment and confidence for the biggest milestone of your financial journey.'
  },
  {
    id: 'home-buying-education',
    number: '03',
    title: 'Home Buying Tips & Education',
    shortDescription: 'Learn more about important home-buying topics through practical educational insights.',
    fullDetails: [
      'Practical guides on navigating current housing market conditions in Florida with confidence.',
      'How to evaluate total cost of homeownership including insurance, HOA guidelines, and property taxes in Florida.',
      'Checklists for model home tours and what specific architectural details to observe during walkthroughs.',
      'Answers to common buyer questions gathered from real consultations across the Sunshine State.'
    ],
    keyBenefit: 'Actionable knowledge that helps you make informed, comfortable decisions.'
  },
  {
    id: 'community-exploration',
    number: '04',
    title: 'Community Exploration',
    shortDescription: 'Explore residential community options and discover what to consider when choosing where to call home.',
    fullDetails: [
      'Insights into residential neighborhood designs, amenity centers, community parks, and Florida outdoor lifestyles.',
      'Key considerations for school districts, commute times, proximity to Florida waterways, beaches, and employment hubs.',
      'Understanding master-planned communities, common area upkeep, and CDD/HOA structures.',
      'Finding the residential environment that aligns with your lifestyle, whether quiet retreat or active social enclave.'
    ],
    keyBenefit: 'A holistic perspective on choosing both the right home and the right neighborhood.'
  },
  {
    id: 'purchase-process',
    number: '05',
    title: 'Purchase Process Guidance',
    shortDescription: 'Understand the different stages involved in purchasing a new construction home.',
    fullDetails: [
      'Detailed overview of the new construction purchase agreement and standard paperwork phases.',
      'How earnest money deposits are handled and what contingency milestones look like.',
      'Understanding lender pre-qualification, loan application timing, and builder incentive structures.',
      'Clear communication protocols between consultant, builder construction team, and buyer.'
    ],
    keyBenefit: 'A seamless, transparent roadmap from initial reservation to final approval.'
  },
  {
    id: 'closing-process',
    number: '06',
    title: 'Closing Process Guidance',
    shortDescription: 'Learn about the closing journey and the important steps leading up to receiving your new home.',
    fullDetails: [
      'What happens during the pre-closing orientation and the New Home Celebration walkthrough.',
      'Reviewing the Closing Disclosure (CD) document and understanding wiring instructions and final cash-to-close.',
      'Final walkthrough expectations and punch-list verification procedures.',
      'Receiving your new home keys, builder warranty handover package, and settling into Florida homeownership.'
    ],
    keyBenefit: 'Stress-free preparation so your closing day is a moment of pure celebration.'
  }
];
