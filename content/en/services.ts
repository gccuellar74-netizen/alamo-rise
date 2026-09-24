export const servicesPage = {
  hero: {
    eyebrow: "Home Remodeling Services",

    title: "Practical Remodeling Solutions for Your Home.",

    description:
      "Alamo Rise Home Solutions helps homeowners in the San Antonio area improve kitchens, bathrooms, interiors, flooring, painting, outdoor spaces and other parts of the home.",

    primaryCta: "Get a Free Estimate",

    secondaryCta: "Tell Us About Your Project",
  },

  intro: {
    eyebrow: "What We Do",

    title: "One Team for Multiple Home Improvement Needs",

    description:
      "Instead of coordinating several unrelated contractors, homeowners can work with one remodeling company for a range of residential improvement projects.",

    secondaryDescription:
      "Whether you are updating a single room or planning improvements throughout the home, the goal is to keep communication, project scope and next steps easier to understand.",
  },

  grid: {
    eyebrow: "Our Services",

    title: "Explore Our Remodeling & Home Improvement Services",

    description:
      "Choose a service below to learn more about the types of residential projects Alamo Rise Home Solutions can help with.",

    learnMore: "Learn More",
  },

  planning: {
    eyebrow: "Not Sure Where to Start?",

    title: "Start With the Problem You Want to Solve.",

    description:
      "You do not need to have every material, finish or construction detail decided before contacting us. Start by explaining what is not working in your current space and what you would like to improve.",

    items: [
      {
        title: "Function",
        description:
          "Is the current layout difficult to use, outdated or no longer working for your household?",
      },
      {
        title: "Appearance",
        description:
          "Are you trying to refresh finishes, colors, flooring or other visible parts of the home?",
      },
      {
        title: "Repairs",
        description:
          "Do damaged or worn areas need repair before additional improvements can be made?",
      },
      {
        title: "Outdoor Living",
        description:
          "Would a patio, pergola or other exterior improvement make your outdoor space more useful?",
      },
    ],
  },

  process: {
    eyebrow: "How It Starts",

    title: "A Clear First Step for Your Remodeling Project",

    description:
      "Tell us what you want to change, where the property is located and what you already know about the project. From there, the next appropriate step can be discussed.",

    steps: [
      {
        number: "01",
        title: "Describe the Project",
        description:
          "Tell us which part of your home you want to remodel, repair or improve.",
      },
      {
        number: "02",
        title: "Share the Details",
        description:
          "Provide your ZIP Code, project priorities, desired timing and other useful information.",
      },
      {
        number: "03",
        title: "Discuss the Next Step",
        description:
          "Alamo Rise can review your request and discuss the appropriate next step for the project.",
      },
    ],
  },

  cta: {
    eyebrow: "Start a Conversation",

    title: "Have a Remodeling Project in Mind?",

    description:
      "Tell us what you would like to improve in your home and provide a few project details to get started.",

    primaryCta: "Get a Free Estimate",

    secondaryCta: "View Our Projects",
  },

  seo: {
    title:
      "Home Remodeling Services San Antonio TX | Alamo Rise Home Solutions",

    description:
      "Explore residential remodeling and home improvement services in San Antonio, TX, including kitchens, bathrooms, flooring, painting, patios, pergolas and general home improvements.",
  },
} as const;

export type EnglishServicesPageDictionary =
  typeof servicesPage;