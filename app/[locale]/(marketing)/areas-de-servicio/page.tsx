import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ServiceAreasPage } from "@/components/service-areas/ServiceAreasPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type AreasDeServicioRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: AreasDeServicioRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "serviceAreas",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.serviceAreas,

      languages: {
        "en-US": routes.en.serviceAreas,
        "es-US": routes.es.serviceAreas,
        "x-default": routes.en.serviceAreas,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.es.serviceAreas,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function AreasDeServicioRoute({
  params,
}: AreasDeServicioRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.serviceAreas);
  }

  const content = await getDictionary(
    "es",
    "serviceAreas",
  );

  return (
    <ServiceAreasPage
      locale="es"
      content={content}
    />
  );
}