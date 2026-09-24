import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ServicesPage } from "@/components/services/ServicesPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ServicesRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ServicesRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary("en", "services");

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.services,

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
      url: routes.en.services,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function ServicesRoute({
  params,
}: ServicesRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.services);
  }

  const content = await getDictionary(
    "en",
    "services",
  );

  return (
    <ServicesPage
      locale="en"
      content={content}
    />
  );
}