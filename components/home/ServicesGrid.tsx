import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type ServicesGridProps = {
  locale: Locale;
  content: HomeDictionary["services"];
};

const serviceRoutes = {
  en: {
    "kitchen-remodeling": routes.en.service.kitchenRemodeling,
    "bathroom-remodeling": routes.en.service.bathroomRemodeling,
    "interior-remodeling": routes.en.service.interiorRemodeling,
    "exterior-improvements": routes.en.services,
    "general-repairs": routes.en.service.homeRepairs,
  },

  es: {
    "kitchen-remodeling": routes.es.service.kitchenRemodeling,
    "bathroom-remodeling": routes.es.service.bathroomRemodeling,
    "interior-remodeling": routes.es.service.interiorRemodeling,
    "exterior-improvements": routes.es.services,
    "general-repairs": routes.es.service.homeRepairs,
  },
} as const;

export function ServicesGrid({
  locale,
  content,
}: ServicesGridProps) {
  const allServicesUrl =
    locale === "en"
      ? routes.en.services
      : routes.es.services;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="services-heading"
            className="mt-3 text-balance text-charcoal-950"
          >
            {content.title}
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {content.cards.map((service, index) => {
            const href =
              serviceRoutes[locale][
                service.key as keyof (typeof serviceRoutes)[typeof locale]
              ] ?? allServicesUrl;

            const featured =
              index === 0 || index === 1;

            return (
              <article
                key={service.key}
                className={[
                  "group overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated",
                  featured ? "lg:col-span-1" : "",
                ].join(" ")}
              >
                <Link
                  href={href}
                  className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                  aria-label={`${service.title} — ${
                    locale === "en"
                      ? "Learn more"
                      : "Conoce más"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                    <Image
                      src={service.image}
                      alt={
                        locale === "en"
                          ? `${service.title} in San Antonio, Texas`
                          : `${service.title} en San Antonio, Texas`
                      }
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-2xl text-charcoal-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-charcoal-600 sm:text-base sm:leading-7">
                      {service.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors group-hover:text-brand-800">
                      {locale === "en"
                        ? "Learn More"
                        : "Conoce Más"}

                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Link
            href={allServicesUrl}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
          >
            {content.viewAllCta}

            <ArrowRight
              aria-hidden="true"
              className="size-4"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}