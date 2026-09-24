import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { ContactPage } from "@/components/contact/ContactPage";
import { routes } from "@/config/routes";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

type ContactoRouteProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: ContactoRouteProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  if (locale === "en") {
    return {};
  }

  const content = await getDictionary(
    "es",
    "contact",
  );

  return {
    title: content.seo.title,
    description: content.seo.description,

    alternates: {
      canonical: routes.es.contact,

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
      url: routes.es.contact,
      locale: "es_US",
      alternateLocale: ["en_US"],
    },
  };
}

export default async function ContactoRoute({
  params,
}: ContactoRouteProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.contact);
  }

  const content = await getDictionary(
    "es",
    "contact",
  );

  return (
    <ContactPage
      locale="es"
      content={content}
    />
  );
}