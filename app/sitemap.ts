import { MetadataRoute } from "next";

const baseUrl = "https://alamorise.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = ["en", "es"];

  const staticRoutes = [
    "",
    "/privacy",
    "/terms",
  ];

  const serviceSlugs = [
    "roofing-services",
    "drywall-painting",
    "general-repairs",
    "exterior-siding",
    "kitchen-remodeling",
  ];

  const urls: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    staticRoutes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
      });
    });

    serviceSlugs.forEach((slug) => {
      urls.push({
        url: `${baseUrl}/${lang}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return urls;
}