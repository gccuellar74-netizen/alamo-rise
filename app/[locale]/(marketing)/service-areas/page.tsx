import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ServiceAreasPage } from "@/components/service-areas/ServiceAreasPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ServiceAreasRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ServiceAreasRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary(
    "en",
    "serviceAreas",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.serviceAreas,

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
      url: routes.en.serviceAreas,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function ServiceAreasRoute({
  params,
}: ServiceAreasRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.serviceAreas);
  }

  const content = await getDictionary(
    "en",
    "serviceAreas",
  );

  return (
    <ServiceAreasPage
      locale="en"
      content={content}
    />
  );
}