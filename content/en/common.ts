export const common = {
  locale: "en",

  languageName: "English",

  actions: {
    getFreeEstimate: "Get a Free Estimate",
    callNow: "Call Now",
    learnMore: "Learn More",
    viewAllServices: "View All Services",
    viewProjects: "View Projects",
    readReviews: "Read Reviews",
    readGoogleReviews: "Read Our Google Reviews",
    contactUs: "Contact Us",
    submit: "Submit",
    sending: "Sending...",
    backHome: "Back to Home",
  },

  navigation: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    reviews: "Reviews",
    about: "About",
    serviceAreas: "Service Areas",
    financing: "Financing",
    contact: "Contact",
  },

  trust: {
    localTeam: "Local San Antonio Team",
    insured: "Insured",
    workmanshipWarranty: "Workmanship Warranty",
    financingAvailable: "Financing Available",
    freeEstimates: "Free Estimates",
  },

  forms: {
    estimateTitle: "Tell Us About Your Project",

    fields: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      zipCode: "ZIP Code",
      projectType: "Project Type",
      budgetRange: "Budget Range",
      desiredStartDate: "Desired Start Date",
      projectDetails: "Project Details",
    },

    placeholders: {
      name: "Your name",
      phone: "(210) 555-1234",
      email: "you@example.com",
      zipCode: "78201",
      projectType: "Select a project type",
      budgetRange: "Select a budget range",
      desiredStartDate: "Select a preferred date",
      projectDetails:
        "Tell us what you would like to remodel or improve...",
    },

    projectTypes: {
      kitchen: "Kitchen Remodeling",
      bathroom: "Bathroom Remodeling",
      interior: "Interior Remodeling",
      flooring: "Flooring",
      drywall: "Drywall",
      painting: "Interior & Exterior Painting",
      siding: "Siding",
      windowsDoors: "Windows & Doors",
      patios: "Patios",
      pergolas: "Pergolas",
      generalRepairs: "General Home Repairs & Improvements",
      other: "Other",
    },

    budgets: {
      under10k: "Under $10,000",
      from10kTo25k: "$10,000 – $25,000",
      from25kTo50k: "$25,000 – $50,000",
      from50kTo100k: "$50,000 – $100,000",
      over100k: "$100,000+",
      notSure: "Not sure yet",
    },

    validation: {
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      invalidPhone: "Enter a valid phone number.",
      invalidZipCode: "Enter a valid ZIP Code.",
    },

    success: {
      title: "Thank you.",
      message:
        "Your project request has been received. We will follow up using the contact information you provided.",
    },

    error: {
      title: "Something went wrong.",
      message:
        "We could not send your request. Please try again or call us directly.",
    },

    privacy:
      "By submitting this form, you agree that Alamo Rise Home Solutions may contact you regarding your project request.",
  },

  testimonials: {
    placeholderLabel: "TESTIMONIAL PLACEHOLDER",
  },

  beforeAfter: {
    before: "Before",
    after: "After",
  },

  project: {
    locationLabel: "Location",
    projectTypeLabel: "Project Type",
  },

  contact: {
    phone: "Phone",
    email: "Email",
    serviceArea: "Service Area",
    businessHours: "Business Hours",
  },

  footer: {
    company: "Company",
    services: "Services",
    resources: "Resources",
    copyrightPrefix: "©",
    rightsReserved: "All rights reserved.",
  },

  accessibility: {
    skipToContent: "Skip to main content",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchToEnglish: "Switch to English",
    switchToSpanish: "Switch to Spanish",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
  },
} as const;

export type EnglishCommonDictionary = typeof common;