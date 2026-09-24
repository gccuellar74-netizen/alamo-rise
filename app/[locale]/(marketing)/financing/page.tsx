import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { FinancingPage } from "@/components/financing/FinancingPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type FinancingRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: FinancingRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary(
    "en",
    "financing",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.financing,

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
      url: routes.en.financing,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function FinancingRoute({
  params,
}: FinancingRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.financing);
  }

  const content = await getDictionary(
    "en",
    "financing",
  );

  return (
    <FinancingPage
      locale="en"
      content={content}
    />
  );
}