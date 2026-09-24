import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ProjectsRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectsRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary(
    "en",
    "projects",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.projects,

      languages: {
        "en-US": routes.en.projects,
        "es-US": routes.es.projects,
        "x-default": routes.en.projects,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.en.projects,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function ProjectsRoute({
  params,
}: ProjectsRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.projects);
  }

  const content = await getDictionary(
    "en",
    "projects",
  );

  return (
    <ProjectsPage
      locale="en"
      content={content}
    />
  );
}