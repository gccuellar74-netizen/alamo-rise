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

  const content = await getDictionary("es", "projects");

  const description =
    "Conoce los tipos de proyectos de remodelación residencial que Alamo Rise Home Solutions puede ayudar a coordinar en San Antonio, Texas, y consulta la galería conforme se agreguen proyectos verificados.";

  return {
    title: {
      absolute: content.seo.title,
    },

    description,

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
      description,
      url: routes.es.projects,
      locale: "es_US",
      alternateLocale: ["en_US"],
      images: [
        {
          url: "/images/social/alamo-rise-og-image.jpg",
          alt: "Alamo Rise Home Solutions",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description,
      images: ["/images/social/alamo-rise-og-image.jpg"],
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

  const content = await getDictionary("es", "projects");

  return (
    <ProjectsPage
      locale="es"
      content={content}
    />
  );
}