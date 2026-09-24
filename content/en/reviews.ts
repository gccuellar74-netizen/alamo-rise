export const reviewsPage = {
  hero: {
    eyebrow: "Customer Reviews",

    title: "Real Feedback Should Come From Real Customers.",

    description:
      "This page is being prepared to feature verified customer feedback for Alamo Rise Home Solutions as authentic reviews become available.",

    primaryCta: "Start Your Project",

    secondaryCta: "View Services",
  },

  intro: {
    eyebrow: "Verified Feedback",

    title: "We Will Not Fill This Page With Fake Testimonials.",

    description:
      "Customer reviews can strongly influence a homeowner's decision, so the feedback shown here should be real, traceable and accurately represented.",

    secondaryDescription:
      "Only reviews that can be reasonably verified through their source or supporting information should be presented as customer testimonials.",
  },

  reviews: {
    eyebrow: "What Customers Say",

    title: "Verified Customer Reviews",

    description:
      "Authentic reviews will appear here as they are verified and added to the site.",

    emptyTitle: "Verified Reviews Coming Soon",

    emptyDescription:
      "We are currently preparing this section with real customer feedback. Until verified reviews are available, we will not publish fabricated testimonials or ratings.",

    sourceLabel: "Source",

    projectLabel: "Project",

    ratingLabel: "Rating",

    dateLabel: "Date",

    readOriginal: "View Original Review",
  },

  principles: {
    eyebrow: "Our Review Standard",

    title: "What Counts as a Verified Review?",

    description:
      "Before a review is presented as customer feedback, the available information should be consistent enough to support that it came from a real customer experience.",

    items: [
      {
        title: "Known Source",
        description:
          "The review should come from a recognizable source such as Google, Facebook or another identifiable channel.",
      },
      {
        title: "Real Customer Feedback",
        description:
          "The testimonial should reflect feedback that was actually provided by a customer rather than marketing copy written for the website.",
      },
      {
        title: "Accurate Representation",
        description:
          "The wording, rating and project context should not be altered in a way that changes the meaning of the original review.",
      },
      {
        title: "No Invented Ratings",
        description:
          "Star ratings and review counts should only be displayed when they are supported by real review data.",
      },
    ],
  },

  trust: {
    eyebrow: "Transparency Matters",

    title: "Trust Is More Valuable Than a Page Full of Perfect Reviews.",

    description:
      "A smaller number of authentic reviews is more useful than a large collection of testimonials that cannot be verified. This site will prioritize real customer feedback over manufactured social proof.",
  },

  cta: {
    eyebrow: "Planning a Project?",

    title: "Tell Us What You Want to Improve in Your Home.",

    description:
      "Share a few details about your remodeling or home improvement project and start the conversation with Alamo Rise Home Solutions.",

    primaryCta: "Get a Free Estimate",

    secondaryCta: "Explore Services",
  },

  seo: {
    title:
      "Customer Reviews | Alamo Rise Home Solutions San Antonio TX",

    description:
      "Read verified customer reviews and feedback for Alamo Rise Home Solutions serving homeowners in the San Antonio, Texas area.",
  },
} as const;

export type EnglishReviewsPageDictionary =
  typeof reviewsPage;