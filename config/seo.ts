import { business } from "@/config/business";

export const seo = {
  siteName: business.businessName,

  defaultTitle:
    "Home Remodeling Contractor San Antonio TX | Alamo Rise Home Solutions",

  defaultDescription:
    "Professional home remodeling in San Antonio, TX. Kitchen remodeling, bathroom renovations, flooring, painting, patios and home improvements. Request a free estimate.",

  defaultLocale: "en_US",
  alternateLocale: "es_US",

  localeMap: {
    en: {
      htmlLang: "en",
      hreflang: "en-US",
      openGraphLocale: "en_US",
    },

    es: {
      htmlLang: "es",
      hreflang: "es-US",
      openGraphLocale: "es_US",
    },
  },

  socialImage: business.brand.defaultSocialImage,

  titleTemplate: `%s | ${business.businessName}`,

  robots: {
    index: true,
    follow: true,
  },

  twitter: {
    card: "summary_large_image" as const,
  },

  keywords: [
    "home remodeling San Antonio",
    "kitchen remodeling San Antonio",
    "bathroom remodeling San Antonio",
    "interior remodeling San Antonio",
    "flooring San Antonio",
    "painting contractor San Antonio",
    "patio remodeling San Antonio",
    "home improvements San Antonio",
  ],
} as const;

export type SeoConfig = typeof seo;