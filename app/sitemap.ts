import type { MetadataRoute } from "next";

import { routes } from "@/config/routes";
import { seo } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seo.siteUrl;

  const mainPaths = [
    routes.en.home,
    routes.en.services,
    routes.en.projects,
    routes.en.reviews,
    routes.en.about,
    routes.en.serviceAreas,
    routes.en.financing,
    routes.en.contact,
    routes.en.privacy,
    routes.en.terms,

    routes.es.home,
    routes.es.services,
    routes.es.projects,
    routes.es.reviews,
    routes.es.about,
    routes.es.serviceAreas,
    routes.es.financing,
    routes.es.contact,
    routes.es.privacy,
    routes.es.terms,
  ];

  const servicePaths = [
    ...Object.values(routes.en.service),
    ...Object.values(routes.es.service),
  ];

  const mainEntries: MetadataRoute.Sitemap = mainPaths.map(
    (path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly",
      priority:
        path === routes.en.home || path === routes.es.home
          ? 1
          : 0.8,
    }),
  );

  const serviceEntries: MetadataRoute.Sitemap =
    servicePaths.map((path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  return [...mainEntries, ...serviceEntries];
}