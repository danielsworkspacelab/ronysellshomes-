export interface JourneyStage {
  step: number;
  stageNumber: string;
  title: string;
  tagline: string;
  description: string;
  milestoneActions: string[];
  tipsForSuccess: string;
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: 1,
    stageNumber: '01',
    title: 'Start the Conversation',
    tagline: 'Share your goals, questions, and homeownership interests.',
    description: 'Every great journey begins with an open, friendly conversation. We discuss your ideal timeline, what you envision in your Florida living experience, and address your upfront questions in a relaxed, no-pressure environment.',
    milestoneActions: [
      'Initial introductory consultation by call, text, or meeting',
      'Discussion of location preferences and desired Florida lifestyle',
      'Clarification of initial questions regarding new home construction'
    ],
    tipsForSuccess: 'Make a list of your top three priorities—such as natural light, single-story layout, or proximity to outdoor activities.'
  },
  {
    step: 2,
    stageNumber: '02',
    title: 'Explore Your Options',
    tagline: 'Learn about new construction opportunities and communities.',
    description: 'Dive into what the Sunshine State has to offer. We examine different residential master plans, community amenities, regional Florida locations, and the advantages of newly constructed homes.',
    milestoneActions: [
      'Review of Florida community locations and regional highlights',
      'Comparison of floor plans, architectural elevations, and homesites',
      'Understanding builder inclusions, warranty coverage, and building standards'
    ],
    tipsForSuccess: 'Consider everyday factors like your commute routes, school zones, and access to local amenities and healthcare.'
  },
  {
    step: 3,
    stageNumber: '03',
    title: 'Discover Your Home',
    tagline: 'Explore home designs and possibilities.',
    description: 'Experience the flow of modern Florida home designs. From welcoming open-concept great rooms to sunlit lanais and dedicated home offices, find the floor plan that feels like home from the moment you step inside.',
    milestoneActions: [
      'Touring furnished models and reviewing detailed architectural layouts',
      'Examining natural daylight angles, kitchen configurations, and outdoor living integration',
      'Selecting the home plan and homesite orientation that fits your lifestyle'
    ],
    tipsForSuccess: 'Visualize your daily routines inside the space: morning coffee on the lanai, cooking in the kitchen, and hosting family.'
  },
  {
    step: 4,
    stageNumber: '04',
    title: 'Understand the Process',
    tagline: 'Learn about the stages of purchasing a new construction home.',
    description: 'Demystify the contract and building process. We walk step-by-step through the purchase agreement, understand deposit requirements, lender timelines, and key construction milestones.',
    milestoneActions: [
      'Reviewing the purchase agreement and understanding all milestone timelines',
      'Working closely with lending partners to secure loan pre-approval and rate locks',
      'Receiving periodic updates as construction advances through critical phases'
    ],
    tipsForSuccess: 'Keep financial documents organized and avoid major new credit applications during your loan processing phase.'
  },
  {
    step: 5,
    stageNumber: '05',
    title: 'Prepare for Closing',
    tagline: 'Understand the steps leading toward closing.',
    description: 'As your new home nears completion, we guide you through the preparation phase. From orientation walkthroughs to reviewing closing disclosure details, you will know exactly what to anticipate.',
    milestoneActions: [
      'New Home Celebration & pre-closing orientation walkthrough',
      'Confirming homeowner insurance policy and Florida hazard/flood verifications',
      'Reviewing the Closing Disclosure (CD) and confirming wire instructions'
    ],
    tipsForSuccess: 'Always verify bank wiring instructions directly by phone with the title company prior to sending closing funds.'
  },
  {
    step: 6,
    stageNumber: '06',
    title: 'Your Next Chapter',
    tagline: 'Celebrate the beginning of your next homeownership chapter.',
    description: 'Closing day arrives! Sign your final documents, receive your brand-new keys, and celebrate crossing the threshold into your beautiful Florida home. Your new chapter in the Sunshine State officially begins.',
    milestoneActions: [
      'Executing final closing paperwork with the settlement agent',
      'Receiving your new home keys, garage openers, and smart home guides',
      'Builder warranty onboarding package and welcome home celebration'
    ],
    tipsForSuccess: 'Take time to pause and celebrate this unforgettable milestone with loved ones—you have earned this moment!'
  }
];
