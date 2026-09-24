export const contactPage = {
  hero: {
    eyebrow: "Contact Alamo Rise",

    title:
      "Tell Us About Your Remodeling or Home Improvement Project.",

    description:
      "Share a few details about your property, the work you are considering and what you would like to improve.",

    primaryCta: "Request an Estimate",

    secondaryCta: "View Services",
  },

  intro: {
    eyebrow: "Start the Conversation",

    title:
      "The More We Understand About the Project, the Better the First Conversation Can Be.",

    description:
      "You do not need to have every material, finish or construction detail decided before reaching out.",

    secondaryDescription:
      "Start with the problem you want to solve, the area of the home involved and any timing or budget considerations you already know.",
  },

  form: {
    eyebrow: "Project Request",

    title:
      "Request a Remodeling Estimate",

    description:
      "Complete the form with as much useful information as you can. Required fields help us understand the basic project request before follow-up.",

    privacyNote:
      "Your information should only be used to respond to your project inquiry and related communication.",
  },

  contactOptions: {
    eyebrow: "Contact Information",

    title:
      "Use the Contact Method That Is Currently Available",

    description:
      "Verified phone, email and business-hour information will be displayed here when those details are confirmed.",

    phoneUnavailable:
      "Phone number pending verification",

    emailUnavailable:
      "Email address pending verification",

    hoursUnavailable:
      "Business hours pending verification",
  },

  projectPreparation: {
    eyebrow: "Before You Submit",

    title:
      "A Few Details Can Make Your Request More Useful.",

    description:
      "Providing clear project information helps reduce unnecessary back-and-forth and makes the initial conversation more productive.",

    items: [
      {
        title: "Project Type",
        description:
          "Tell us whether the project involves a kitchen, bathroom, flooring, painting, exterior work or another home improvement need.",
      },
      {
        title: "Property Location",
        description:
          "Include your ZIP Code so the project location can be reviewed.",
      },
      {
        title: "Main Goal",
        description:
          "Explain what you want to repair, change or improve.",
      },
      {
        title: "Timing",
        description:
          "Share any preferred start period if you already have one in mind.",
      },
      {
        title: "Budget",
        description:
          "If you have a working budget range, include it so expectations can be discussed earlier.",
      },
      {
        title: "Helpful Details",
        description:
          "Mention existing damage, layout concerns or other conditions that may affect the project.",
      },
    ],
  },

  serviceArea: {
    eyebrow: "Project Location",

    title:
      "San Antonio Is the Current Confirmed Service Market",

    description:
      "If your property is outside San Antonio, you can still submit the project location so availability can be discussed.",

    cta: "View Service Areas",
  },

  expectations: {
    eyebrow: "What Happens Next",

    title:
      "Submitting the Form Starts the Conversation.",

    description:
      "A submitted request does not automatically confirm project acceptance, pricing, scheduling or financing.",

    items: [
      "Your project information can be reviewed.",
      "Additional questions may be needed.",
      "Project availability can depend on location and scope.",
      "Pricing should only be discussed after enough project information is available.",
    ],
  },

  cta: {
    eyebrow: "Explore Before You Contact Us",

    title:
      "Want to Learn More About the Types of Projects We Cover?",

    description:
      "Review the current remodeling and home improvement services before submitting your request.",

    primaryCta: "Explore Services",

    secondaryCta: "View Projects",
  },

  seo: {
    title:
      "Contact Alamo Rise Home Solutions | Remodeling San Antonio TX",

    description:
      "Contact Alamo Rise Home Solutions about a residential remodeling, repair or home improvement project in the San Antonio, Texas area.",
  },
} as const;

export type EnglishContactPageDictionary =
  typeof contactPage;