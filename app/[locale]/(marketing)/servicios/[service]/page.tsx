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
    locale: "es",
    service: service.es.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const {
    locale,
    service: serviceSlug,
  } = await params;

  if (!isLocale(locale) || locale !== "es") {
    return {};
  }

  const service = getServiceBySlug(
    "es",
    serviceSlug,
  );

  if (!service) {
    return {};
  }

  const detail = getServiceDetail(service.id);

  if (!detail) {
    return {};
  }

  const spanish = service.es;
  const english = service.en;
  const seo = detail.es;

  return {
    title: seo.seoTitle,
    description: seo.seoDescription,

    alternates: {
      canonical: spanish.href,

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
      url: spanish.href,
      locale: "es_US",
      alternateLocale: ["en_US"],
      siteName: business.businessName,

      images: [
        {
          url: service.image,
          alt: service.imageAlt.es,
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

export default async function SpanishServicePage({
  params,
}: ServiceRouteProps) {
  const {
    locale,
    service: serviceSlug,
  } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  if (locale === "en") {
    const spanishService = getServiceBySlug(
      "es",
      serviceSlug,
    );

    if (spanishService) {
      redirect(
        spanishService.en.href,
      );
    }

    redirect(routes.en.services);
  }

  const service = getServiceBySlug(
    "es",
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
      locale="es"
      service={service}
    />
  );
}