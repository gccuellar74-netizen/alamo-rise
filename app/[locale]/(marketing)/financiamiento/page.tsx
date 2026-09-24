import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { FinancingPage } from "@/components/financing/FinancingPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type FinanciamientoRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: FinanciamientoRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "financing",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.financing,

      languages: {
        "en-US": routes.en.financing,
        "es-US": routes.es.financing,
        "x-default": routes.en.financing,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.es.financing,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function FinanciamientoRoute({
  params,
}: FinanciamientoRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.financing);
  }

  const content = await getDictionary(
    "es",
    "financing",
  );

  return (
    <FinancingPage
      locale="es"
      content={content}
    />
  );
}