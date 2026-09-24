export const projectsPage = {
  hero: {
    eyebrow: "Our Work",

    title: "Residential Remodeling Projects in the San Antonio Area",

    description:
      "Explore examples of remodeling and home improvement work from Alamo Rise Home Solutions as verified project information becomes available.",

    primaryCta: "Start Your Project",

    secondaryCta: "View Services",
  },

  intro: {
    eyebrow: "Project Gallery",

    title: "Real Work Should Be Shown With Real Project Details",

    description:
      "We are preparing this section to feature verified Alamo Rise projects with accurate descriptions, locations and photography.",

    secondaryDescription:
      "Rather than filling the page with stock images or unverified examples, only confirmed projects will be presented as completed Alamo Rise work.",
  },

  gallery: {
    eyebrow: "Featured Projects",

    title: "Project Examples",

    description:
      "Verified projects will appear here as they are added to the site.",

    emptyTitle: "Verified Project Gallery Coming Soon",

    emptyDescription:
      "We are currently preparing real project information and photography for this section. In the meantime, you can explore our remodeling services or contact Alamo Rise about your own project.",

    placeholderLabel: "Project Placeholder",

    locationUnavailable: "Project location pending verification",
  },

  categories: {
    title: "Types of Projects We Plan to Feature",

    description:
      "As verified work becomes available, the gallery can include projects across several residential improvement categories.",

    items: [
      {
        title: "Kitchen Remodeling",
        description:
          "Kitchen updates focused on layout, finishes, storage and everyday functionality.",
      },
      {
        title: "Bathroom Remodeling",
        description:
          "Bathroom improvements involving finishes, fixtures, storage and space planning.",
      },
      {
        title: "Interior Remodeling",
        description:
          "Residential interior improvements across living areas, bedrooms and other spaces.",
      },
      {
        title: "Flooring & Finishes",
        description:
          "Flooring, painting and finish work coordinated with broader remodeling projects.",
      },
      {
        title: "Outdoor Improvements",
        description:
          "Patios, pergolas and other residential exterior improvements.",
      },
      {
        title: "General Home Improvements",
        description:
          "Repairs and coordinated improvements throughout the home.",
      },
    ],
  },

  trust: {
    eyebrow: "Why This Matters",

    title: "No Fake Portfolio. No Made-Up Project History.",

    description:
      "Project photos influence homeowner decisions, so they should accurately represent work completed by the company. This site will distinguish verified Alamo Rise work from temporary placeholders.",
  },

  cta: {
    eyebrow: "Your Project Could Be Next",

    title: "Planning a Remodeling or Home Improvement Project?",

    description:
      "Tell us what you want to improve and share a few details about your property to start the conversation.",

    primaryCta: "Get a Free Estimate",

    secondaryCta: "Explore Services",
  },

  seo: {
    title:
      "Home Remodeling Projects San Antonio TX | Alamo Rise Home Solutions",

    description:
      "Explore verified residential remodeling and home improvement projects from Alamo Rise Home Solutions in the San Antonio, Texas area.",
  },
} as const;

export type EnglishProjectsPageDictionary =
  typeof projectsPage;