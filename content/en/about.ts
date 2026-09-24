export const aboutPage = {
  hero: {
    eyebrow: "About Alamo Rise",

    title: "A Home Improvement Company Focused on Clear, Practical Solutions.",

    description:
      "Alamo Rise Home Solutions serves homeowners in the San Antonio area with residential remodeling, repairs and improvement services designed around the needs of the property and the goals of the homeowner.",

    primaryCta: "Start Your Project",

    secondaryCta: "View Services",
  },

  intro: {
    eyebrow: "Who We Are",

    title: "Home Improvement Should Start With Understanding the Problem.",

    description:
      "Every remodeling project starts with a different reason. Some homeowners need to improve function, others want to update appearance, repair damaged areas or make better use of existing space.",

    secondaryDescription:
      "The first step is understanding what needs to change before defining the work that makes sense for the property.",
  },

  approach: {
    eyebrow: "Our Approach",

    title: "Clear Scope. Practical Planning. Better Communication.",

    description:
      "A remodeling project becomes easier to manage when the homeowner understands what work is being discussed, which decisions need to be made and what the next step is.",

    items: [
      {
        number: "01",
        title: "Understand the Space",
        description:
          "Start by reviewing the existing condition of the home and identifying the areas that need improvement.",
      },
      {
        number: "02",
        title: "Understand the Goal",
        description:
          "Define what the homeowner wants to change, repair or improve before focusing on individual finishes.",
      },
      {
        number: "03",
        title: "Define the Scope",
        description:
          "Clarify the work being considered so expectations and project priorities are easier to understand.",
      },
      {
        number: "04",
        title: "Communicate the Next Step",
        description:
          "Keep project questions, decisions and next steps clear as the conversation moves forward.",
      },
    ],
  },

  values: {
    eyebrow: "What Matters",

    title: "A Better Customer Experience Starts With the Basics.",

    description:
      "Homeowners should be able to understand what is being discussed without unnecessary confusion or exaggerated promises.",

    items: [
      {
        title: "Clear Communication",
        description:
          "Explain project considerations and next steps in a way that is straightforward and easy to follow.",
      },
      {
        title: "Realistic Expectations",
        description:
          "Avoid making promises about scope, timing or results before enough project information is available.",
      },
      {
        title: "Respect for the Home",
        description:
          "Treat each project as work being performed in someone's personal living space, not just another construction site.",
      },
      {
        title: "Project-Specific Planning",
        description:
          "Evaluate the actual needs of the property instead of assuming every home requires the same solution.",
      },
    ],
  },

  services: {
    eyebrow: "What We Help With",

    title: "Residential Remodeling & Home Improvement",

    description:
      "Alamo Rise Home Solutions is positioned to help homeowners with a range of interior and exterior improvement needs.",

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

  serviceArea: {
    eyebrow: "Local Service",

    title: "Serving Homeowners in the San Antonio Area",

    description:
      "San Antonio is the confirmed primary market for Alamo Rise Home Solutions. Additional service areas can be added once they are verified.",

    cta: "View Service Areas",
  },

  transparency: {
    eyebrow: "Built on Accurate Information",

    title: "We Will Not Invent Credentials, History or Claims.",

    description:
      "This website is being built to separate verified business information from unconfirmed claims. Details such as years in business, insurance status, warranties, financing, certifications and team information will only be published after they are confirmed.",

    note:
      "Accurate information builds more long-term trust than exaggerated marketing claims.",
  },

  cta: {
    eyebrow: "Let’s Talk About Your Home",

    title: "Have a Remodeling or Home Improvement Project in Mind?",

    description:
      "Tell us what you want to change, repair or improve and share a few details about your property to start the conversation.",

    primaryCta: "Get a Free Estimate",

    secondaryCta: "View Services",
  },

  seo: {
    title:
      "About Alamo Rise Home Solutions | San Antonio Home Remodeling",

    description:
      "Learn about Alamo Rise Home Solutions and its approach to residential remodeling, repairs and home improvement projects in the San Antonio, Texas area.",
  },
} as const;

export type EnglishAboutPageDictionary =
  typeof aboutPage;