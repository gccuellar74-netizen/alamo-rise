import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ReviewsRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ReviewsRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary(
    "en",
    "reviews",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.reviews,

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
      url: routes.en.reviews,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function ReviewsRoute({
  params,
}: ReviewsRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.reviews);
  }

  const content = await getDictionary(
    "en",
    "reviews",
  );

  return (
    <ReviewsPage
      locale="en"
      content={content}
    />
  );
}