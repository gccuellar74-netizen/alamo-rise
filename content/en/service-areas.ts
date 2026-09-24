export const serviceAreasPage = {
  hero: {
    eyebrow: "Service Areas",

    title:
      "Residential Remodeling & Home Improvement in the San Antonio Area",

    description:
      "Alamo Rise Home Solutions serves homeowners in San Antonio, Texas with residential remodeling, repairs and home improvement services.",

    primaryCta: "Start Your Project",

    secondaryCta: "View Services",
  },

  intro: {
    eyebrow: "Local Service",

    title:
      "Focused on Serving Homeowners in the San Antonio Market",

    description:
      "San Antonio is the confirmed primary service market for Alamo Rise Home Solutions.",

    secondaryDescription:
      "Additional cities and communities should only be added to this page after the company confirms that projects are actively accepted in those locations.",
  },

  confirmedAreas: {
    eyebrow: "Confirmed Service Area",

    title: "Where We Currently Serve",

    description:
      "The following market is currently confirmed for the website.",

    areas: [
      {
        city: "San Antonio",
        state: "Texas",
        label: "San Antonio, TX",
      },
    ],
  },

  availability: {
    eyebrow: "Outside San Antonio?",

    title:
      "Have a Project Near San Antonio? Ask About Availability.",

    description:
      "If your property is outside San Antonio, contact Alamo Rise before assuming your location is within the current service area.",

    note:
      "Service availability may depend on project location, scope and scheduling.",
  },

  services: {
    eyebrow: "Residential Services",

    title:
      "Home Improvement Services Available in the Confirmed Market",

    description:
      "Homeowners can contact Alamo Rise about a range of residential remodeling and improvement needs.",

    items: [
      "Kitchen Remodeling",
      "Bathroom Remodeling",
      "Interior Remodeling",
      "Flooring",
      "Drywall",
      "Interior & Exterior Painting",
      "Siding",
      "Windows & Doors",
      "Patios",
      "Pergolas",
      "General Home Repairs & Improvements",
    ],

    cta: "Explore All Services",
  },

  localSeo: {
    eyebrow: "Local Remodeling",

    title:
      "Home Remodeling Services for San Antonio Homeowners",

    description:
      "The website is structured around San Antonio as the confirmed local market so service information, project content and local search signals remain accurate.",

    points: [
      {
        title: "Accurate Location Information",
        description:
          "Only confirmed service areas should be published as locations where the company actively works.",
      },
      {
        title: "Relevant Local Content",
        description:
          "Service pages should remain focused on the actual needs and search intent of homeowners in the market being served.",
      },
      {
        title: "No Fake Location Pages",
        description:
          "We will not create dozens of city pages for locations the company has not confirmed as active service areas.",
      },
    ],
  },

  cta: {
    eyebrow: "Check Your Project Location",

    title:
      "Planning a Remodeling Project in or Around San Antonio?",

    description:
      "Tell us where your property is located and what you want to improve so availability can be discussed.",

    primaryCta: "Get a Free Estimate",

    secondaryCta: "Explore Services",
  },

  seo: {
    title:
      "Home Remodeling Service Areas | Alamo Rise San Antonio TX",

    description:
      "View the confirmed service area for Alamo Rise Home Solutions and explore residential remodeling and home improvement services in San Antonio, Texas.",
  },
} as const;

export type EnglishServiceAreasPageDictionary =
  typeof serviceAreasPage;