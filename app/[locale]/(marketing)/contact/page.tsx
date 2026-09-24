import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ContactPage } from "@/components/contact/ContactPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ContactRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "es") {
    return {};
  }

  const content = await getDictionary(
    "en",
    "contact",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.en.contact,

      languages: {
        "en-US": routes.en.contact,
        "es-US": routes.es.contact,
        "x-default": routes.en.contact,
      },
    },

    openGraph: {
      type: "website",
      title: content.seo.title,
      description: content.seo.description,
      url: routes.en.contact,
      locale: "en_US",
      alternateLocale: ["es_US"],
    },
  };
}

export default async function ContactRoute({
  params,
}: ContactRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.contact);
  }

  const content = await getDictionary(
    "en",
    "contact",
  );

  return (
    <ContactPage
      locale="en"
      content={content}
    />
  );
}