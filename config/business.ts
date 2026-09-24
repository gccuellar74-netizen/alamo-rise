/**
 * Alamo Rise Home Solutions
 * Central business configuration.
 *
 * IMPORTANT:
 * - Do not add unverified business information.
 * - Values marked as TODO / VERIFY must be confirmed before production.
 * - Components and structured data must ignore null values.
 */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const business = {
  /**
   * Basic identity
   */
  businessName: "Alamo Rise Home Solutions",

  // TODO: VERIFY official legal business name, if different.
  legalName: null as string | null,

  siteUrl,

  /**
   * Contact
   */

  // TODO: VERIFY before publishing.
  phone: null as string | null,

  // TODO: VERIFY before publishing.
  email: null as string | null,

  /**
   * Location / NAP
   *
   * The project brief confirms San Antonio, Texas as the primary market.
   *
   * Do not invent a street address.
   * If Alamo Rise operates as a service-area business without a public
   * storefront, we should not publish a residential/private address.
   */
  address: {
    streetAddress: null as string | null,
    city: "San Antonio",
    state: "TX",
    zipCode: null as string | null,
    country: "US",
  },

  /**
   * Main service market
   *
   * Additional cities will only be added after confirming
   * that Alamo Rise actually serves those locations.
   */
  primaryMarket: {
    city: "San Antonio",
    state: "TX",
    country: "US",
  },

  serviceAreas: [
    {
      name: "San Antonio",
      state: "TX",
      country: "US",
    },
  ],

  /**
   * Business claims
   *
   * null = not yet verified.
   *
   * We will NOT display these claims until they are confirmed.
   */

  // VERIFY: "20+ Years Experience"
  yearsExperience: null as number | null,

  // VERIFY: company insurance status.
  isInsured: null as boolean | null,

  // VERIFY: workmanship warranty availability/details.
  workmanshipWarranty: null as boolean | null,

  // VERIFY: financing availability and provider.
  financingAvailable: null as boolean | null,

  /**
   * Google Business Profile
   */

  // TODO: Add real GBP URL.
  googleBusinessProfileUrl: null as string | null,

  // TODO: Add real Google Maps business URL.
  googleMapsUrl: null as string | null,

  // TODO: Add real Google Reviews URL.
  googleReviewsUrl: null as string | null,

  /**
   * Social networks
   */

  // TODO: VERIFY official Facebook URL.
  facebookUrl: null as string | null,

  // TODO: VERIFY official Instagram URL.
  instagramUrl: null as string | null,

  // TODO: VERIFY official YouTube URL.
  youtubeUrl: null as string | null,

  // TODO: VERIFY official TikTok URL if one exists.
  tiktokUrl: null as string | null,

  /**
   * Business hours
   *
   * Do not publish hours until confirmed.
   *
   * Later this structure can be transformed directly into
   * schema.org OpeningHoursSpecification.
   */
  openingHours: [] as Array<{
    days: string[];
    opens: string;
    closes: string;
  }>,

  /**
   * Brand assets
   *
   * These are internal application paths.
   * We will prepare the actual optimized files later.
   */
  brand: {
    logo: "/images/brand/alamo-rise-logo.webp",
    logoDark: "/images/brand/alamo-rise-logo-dark.webp",
    mark: "/images/brand/alamo-rise-mark.webp",
    defaultSocialImage: "/images/social/alamo-rise-og-image.jpg",
  },

  /**
   * SEO / Schema classification
   *
   * HomeAndConstructionBusiness accurately describes the
   * services in the current project brief without asserting
   * an unverified professional license.
   */
  schema: {
    type: "HomeAndConstructionBusiness",

    // TODO: VERIFY if "GeneralContractor" should also be used.
    additionalType: null as string | null,

    // TODO: VERIFY appropriate price range before publishing.
    priceRange: null as string | null,
  },

  /**
   * Supported languages
   */
  languages: ["en", "es"] as const,

  /**
   * Primary locale / market
   */
  defaultLocale: "en" as const,
  alternateLocale: "es" as const,

  localeCodes: {
    en: "en-US",
    es: "es-US",
  },
} as const;

export type BusinessConfig = typeof business;