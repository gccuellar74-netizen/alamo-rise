import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ResenasRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ResenasRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "reviews",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.reviews,

      languages: {
        "en-US": routes.en.reviews,
        "es-US": routes.es.reviews,
        "x-default": routes.en.reviews,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.es.reviews,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function ResenasRoute({
  params,
}: ResenasRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.reviews);
  }

  const content = await getDictionary(
    "es",
    "reviews",
  );

  return (
    <ReviewsPage
      locale="es"
      content={content}
    />
  );
}