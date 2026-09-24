export const financingPage = {
  hero: {
    eyebrow: "Project Financing",

    title:
      "Financing Information for Remodeling Projects",

    description:
      "Financing details for Alamo Rise Home Solutions are currently pending verification. This page will only publish financing options after the available programs, providers and terms have been confirmed.",

    primaryCta: "Ask About Your Project",

    secondaryCta: "View Services",
  },

  status: {
    eyebrow: "Current Status",

    title: "Financing Availability Has Not Yet Been Confirmed",

    description:
      "We do not currently have enough verified information to state that Alamo Rise Home Solutions offers financing.",

    secondaryDescription:
      "Rather than advertise unconfirmed monthly payments, promotional rates or approval terms, this page will remain transparent until accurate financing information is available.",

    badge: "Pending Verification",
  },

  futureInformation: {
    eyebrow: "What We Will Publish",

    title:
      "Financing Details Should Be Specific and Verifiable",

    description:
      "If financing becomes available, homeowners should be able to understand the basic terms before relying on it as part of a remodeling decision.",

    items: [
      {
        title: "Financing Provider",
        description:
          "The company or financial institution responsible for the financing program.",
      },
      {
        title: "Eligibility Requirements",
        description:
          "Any applicable credit, project or borrower requirements that can be accurately disclosed.",
      },
      {
        title: "Rates and Terms",
        description:
          "Interest rates, repayment periods and other terms when they are available and appropriate to publish.",
      },
      {
        title: "Promotional Offers",
        description:
          "Any temporary promotions should include their actual conditions and expiration details.",
      },
      {
        title: "Application Process",
        description:
          "Homeowners should understand whether they apply directly with a lender or through another verified process.",
      },
      {
        title: "Important Disclosures",
        description:
          "Required financing disclosures should be presented clearly and not hidden inside marketing copy.",
      },
    ],
  },

  caution: {
    eyebrow: "Before Using Financing",

    title:
      "Compare the Full Cost, Not Just the Monthly Payment",

    description:
      "When financing is available, homeowners should evaluate more than the advertised payment amount. Interest rate, loan term, fees and total repayment cost can materially change the real cost of a remodeling project.",

    points: [
      "Review the interest rate or APR",
      "Understand the repayment term",
      "Check for origination or other fees",
      "Confirm whether promotional rates expire",
      "Compare the total repayment amount",
      "Read lender disclosures before signing",
    ],
  },

  projectPlanning: {
    eyebrow: "Project Planning",

    title:
      "Start by Understanding the Project Before Choosing How to Pay for It",

    description:
      "A financing decision makes more sense after the project scope and expected investment are better understood.",

    steps: [
      {
        number: "01",
        title: "Describe the Project",
        description:
          "Start with the area of the home you want to remodel, repair or improve.",
      },
      {
        number: "02",
        title: "Define the Scope",
        description:
          "Clarify the work being considered so the project requirements are easier to understand.",
      },
      {
        number: "03",
        title: "Discuss Budget",
        description:
          "Consider the available project budget and whether outside financing would even be necessary.",
      },
      {
        number: "04",
        title: "Review Verified Options",
        description:
          "If financing is offered, review the real terms and disclosures before making a decision.",
      },
    ],
  },

  transparency: {
    eyebrow: "No Unverified Financing Claims",

    title:
      "We Will Not Advertise Terms That Have Not Been Confirmed.",

    description:
      "This website will not display invented monthly payments, zero-interest promotions, approval claims or lender relationships without verification.",

    note:
      "Financing offers can materially influence purchasing decisions, so accuracy is especially important.",
  },

  cta: {
    eyebrow: "Planning a Remodeling Project?",

    title:
      "Start With the Project Details.",

    description:
      "Tell us what you want to improve in your home. Financing questions can be discussed separately once verified options are available.",

    primaryCta: "Start Your Project",

    secondaryCta: "Explore Services",
  },

  seo: {
    title:
      "Remodeling Financing Information | Alamo Rise Home Solutions",

    description:
      "View financing information and current availability status for remodeling and home improvement projects with Alamo Rise Home Solutions.",
  },
} as const;

export type EnglishFinancingPageDictionary =
  typeof financingPage;