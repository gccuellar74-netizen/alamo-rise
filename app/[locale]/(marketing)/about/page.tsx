import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AboutPage } from "@/components/about/AboutPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type AboutRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: AboutRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary(
    "en",
    "about",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.about,

      languages: {
        "en-US": routes.en.about,
        "es-US": routes.es.about,
        "x-default": routes.en.about,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.en.about,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function AboutRoute({
  params,
}: AboutRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.about);
  }

  const content = await getDictionary(
    "en",
    "about",
  );

  return (
    <AboutPage
      locale="en"
      content={content}
    />
  );
}