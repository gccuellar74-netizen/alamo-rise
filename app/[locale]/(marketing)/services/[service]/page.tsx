import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { business } from "@/config/business";
import { routes } from "@/config/routes";
import {
  getServiceBySlug,
  services,
} from "@/data/services";
import { getServiceDetail } from "@/data/service-details";
import { isLocale } from "@/lib/i18n/config";

type ServiceRouteProps = {
  params: Promise<{
    locale: string;
    service: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    locale: "en",
    service: service.en.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const {
    locale,
    service: serviceSlug,
  } = await params;

  if (!isLocale(locale) || locale !== "en") {
    return {};
  }

  const service = getServiceBySlug(
    "en",
    serviceSlug,
  );

  if (!service) {
    return {};
  }

  const detail = getServiceDetail(service.id);

  if (!detail) {
    return {};
  }

  const english = service.en;
  const spanish = service.es;
  const seo = detail.en;

  return {
    title: seo.seoTitle,
    description: seo.seoDescription,

    alternates: {
      canonical: english.href,

      languages: {
        "en-US": english.href,
        "es-US": spanish.href,
        "x-default": english.href,
      },
    },

    openGraph: {
      type: "website",
      title: seo.seoTitle,
      description: seo.seoDescription,
      url: english.href,
      locale: "en_US",
      alternateLocale: ["es_US"],
      siteName: business.businessName,

      images: [
        {
          url: service.image,
          alt: service.imageAlt.en,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.seoTitle,
      description: seo.seoDescription,
      images: [service.image],
    },
  };
}

export default async function EnglishServicePage({
  params,
}: ServiceRouteProps) {
  const {
    locale,
    service: serviceSlug,
  } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === "es") {
    const englishService = getServiceBySlug(
      "en",
      serviceSlug,
    );

    if (englishService) {
      redirect(
        englishService.es.href,
      );
    }

    redirect(routes.es.services);
  }

  const service = getServiceBySlug(
    "en",
    serviceSlug,
  );

  if (!service) {
    notFound();
  }

  const detail = getServiceDetail(service.id);

  if (!detail) {
    notFound();
  }

  return (
    <ServiceDetailPage
      locale="en"
      service={service}
    />
  );
}