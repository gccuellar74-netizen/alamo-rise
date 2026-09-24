import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AboutPage } from "@/components/about/AboutPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type NosotrosRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: NosotrosRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "about",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.about,

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
      url: routes.es.about,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function NosotrosRoute({
  params,
}: NosotrosRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.about);
  }

  const content = await getDictionary(
    "es",
    "about",
  );

  return (
    <AboutPage
      locale="es"
      content={content}
    />
  );
}