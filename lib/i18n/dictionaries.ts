import type { Locale } from "@/lib/i18n/config";

import type { common as EnglishCommon } from "@/content/en/common";
import type { home as EnglishHome } from "@/content/en/home";
import type { aboutPage as EnglishAbout } from "@/content/en/about";
import type { contactPage as EnglishContact } from "@/content/en/contact";
import type { financingPage as EnglishFinancing } from "@/content/en/financing";
import type { projectsPage as EnglishProjects } from "@/content/en/projects";
import type { reviewsPage as EnglishReviews } from "@/content/en/reviews";
import type { serviceAreasPage as EnglishServiceAreas } from "@/content/en/service-areas";
import type { servicesPage as EnglishServices } from "@/content/en/services";

type CommonDictionary = typeof EnglishCommon;
type HomeDictionary = typeof EnglishHome;
type ServicesDictionary = typeof EnglishServices;
type ProjectsDictionary = typeof EnglishProjects;
type ReviewsDictionary = typeof EnglishReviews;
type AboutDictionary = typeof EnglishAbout;
type ServiceAreasDictionary = typeof EnglishServiceAreas;
type FinancingDictionary = typeof EnglishFinancing;
type ContactDictionary = typeof EnglishContact;

type DictionaryMap = {
  common: CommonDictionary;
  home: HomeDictionary;
  services: ServicesDictionary;
  projects: ProjectsDictionary;
  reviews: ReviewsDictionary;
  about: AboutDictionary;
  serviceAreas: ServiceAreasDictionary;
  financing: FinancingDictionary;
  contact: ContactDictionary;
};

const dictionaries = {
  en: {
    common: () =>
      import("@/content/en/common").then(
        (module) => module.common,
      ),

    home: () =>
      import("@/content/en/home").then(
        (module) => module.home,
      ),

    services: () =>
      import("@/content/en/services").then(
        (module) => module.servicesPage,
      ),

    projects: () =>
      import("@/content/en/projects").then(
        (module) => module.projectsPage,
      ),

    reviews: () =>
      import("@/content/en/reviews").then(
        (module) => module.reviewsPage,
      ),

    about: () =>
      import("@/content/en/about").then(
        (module) => module.aboutPage,
      ),

    serviceAreas: () =>
      import("@/content/en/service-areas").then(
        (module) => module.serviceAreasPage,
      ),

    financing: () =>
      import("@/content/en/financing").then(
        (module) => module.financingPage,
      ),

    contact: () =>
      import("@/content/en/contact").then(
        (module) => module.contactPage,
      ),
  },

  es: {
    common: () =>
      import("@/content/es/common").then(
        (module) => module.common,
      ),

    home: () =>
      import("@/content/es/home").then(
        (module) => module.home,
      ),

    services: () =>
      import("@/content/es/services").then(
        (module) => module.servicesPage,
      ),

    projects: () =>
      import("@/content/es/projects").then(
        (module) => module.projectsPage,
      ),

    reviews: () =>
      import("@/content/es/reviews").then(
        (module) => module.reviewsPage,
      ),

    about: () =>
      import("@/content/es/about").then(
        (module) => module.aboutPage,
      ),

    serviceAreas: () =>
      import("@/content/es/service-areas").then(
        (module) => module.serviceAreasPage,
      ),

    financing: () =>
      import("@/content/es/financing").then(
        (module) => module.financingPage,
      ),

    contact: () =>
      import("@/content/es/contact").then(
        (module) => module.contactPage,
      ),
  },
} as const;

export async function getDictionary(
  locale: Locale,
  section: "common",
): Promise<CommonDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "home",
): Promise<HomeDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "services",
): Promise<ServicesDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "projects",
): Promise<ProjectsDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "reviews",
): Promise<ReviewsDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "about",
): Promise<AboutDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "serviceAreas",
): Promise<ServiceAreasDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "financing",
): Promise<FinancingDictionary>;

export async function getDictionary(
  locale: Locale,
  section: "contact",
): Promise<ContactDictionary>;

export async function getDictionary<
  TSection extends keyof DictionaryMap,
>(
  locale: Locale,
  section: TSection,
): Promise<DictionaryMap[TSection]> {
  const loader = dictionaries[locale][section];

  return loader() as Promise<DictionaryMap[TSection]>;
}