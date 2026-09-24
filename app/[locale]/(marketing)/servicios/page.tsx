import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ServicesPage } from "@/components/services/ServicesPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ServiciosRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ServiciosRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "services",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.services,

      languages: {
        "en-US": routes.en.services,
        "es-US": routes.es.services,
        "x-default": routes.en.services,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.es.services,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function ServiciosRoute({
  params,
}: ServiciosRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.services);
  }

  const content = await getDictionary(
    "es",
    "services",
  );

  return (
    <ServicesPage
      locale="es"
      content={content}
    />
  );
}