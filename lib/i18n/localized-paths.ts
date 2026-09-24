import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";

type LocalizedPathPair = {
  en: string;
  es: string;
};

const localizedPathPairs: LocalizedPathPair[] = [
  {
    en: routes.en.home,
    es: routes.es.home,
  },
  {
    en: routes.en.services,
    es: routes.es.services,
  },
  {
    en: routes.en.projects,
    es: routes.es.projects,
  },
  {
    en: routes.en.reviews,
    es: routes.es.reviews,
  },
  {
    en: routes.en.about,
    es: routes.es.about,
  },
  {
    en: routes.en.serviceAreas,
    es: routes.es.serviceAreas,
  },
  {
    en: routes.en.financing,
    es: routes.es.financing,
  },
  {
    en: routes.en.contact,
    es: routes.es.contact,
  },
  {
    en: routes.en.privacy,
    es: routes.es.privacy,
  },
  {
    en: routes.en.terms,
    es: routes.es.terms,
  },
  {
    en: routes.en.thankYou,
    es: routes.es.thankYou,
  },

  {
    en: routes.en.service.kitchenRemodeling,
    es: routes.es.service.kitchenRemodeling,
  },
  {
    en: routes.en.service.bathroomRemodeling,
    es: routes.es.service.bathroomRemodeling,
  },
  {
    en: routes.en.service.interiorRemodeling,
    es: routes.es.service.interiorRemodeling,
  },
  {
    en: routes.en.service.flooring,
    es: routes.es.service.flooring,
  },
  {
    en: routes.en.service.drywall,
    es: routes.es.service.drywall,
  },
  {
    en: routes.en.service.painting,
    es: routes.es.service.painting,
  },
  {
    en: routes.en.service.siding,
    es: routes.es.service.siding,
  },
  {
    en: routes.en.service.windowsDoors,
    es: routes.es.service.windowsDoors,
  },
  {
    en: routes.en.service.patios,
    es: routes.es.service.patios,
  },
  {
    en: routes.en.service.pergolas,
    es: routes.es.service.pergolas,
  },
  {
    en: routes.en.service.homeRepairs,
    es: routes.es.service.homeRepairs,
  },
];

const pathLookup = new Map<string, LocalizedPathPair>();

for (const pair of localizedPathPairs) {
  pathLookup.set(pair.en, pair);
  pathLookup.set(pair.es, pair);
}

export function getLocalizedPath(
  pathname: string,
  targetLocale: Locale,
): string {
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  const pair = pathLookup.get(normalizedPath);

  if (pair) {
    return pair[targetLocale];
  }

  const segments = normalizedPath.split("/").filter(Boolean);

  if (segments.length === 0) {
    return targetLocale === "en" ? routes.en.home : routes.es.home;
  }

  const [, ...rest] = segments;

  if (rest.length === 0) {
    return targetLocale === "en" ? routes.en.home : routes.es.home;
  }

  return `/${targetLocale}/${rest.join("/")}`;
}

export function getAlternatePaths(
  pathname: string,
): LocalizedPathPair {
  return {
    en: getLocalizedPath(pathname, "en"),
    es: getLocalizedPath(pathname, "es"),
  };
}