import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ProjectsPage } from "@/components/projects/ProjectsPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ProyectosRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProyectosRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "projects",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.projects,

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
      url: routes.es.projects,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function ProyectosRoute({
  params,
}: ProyectosRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.projects);
  }

  const content = await getDictionary(
    "es",
    "projects",
  );

  return (
    <ProjectsPage
      locale="es"
      content={content}
    />
  );
}