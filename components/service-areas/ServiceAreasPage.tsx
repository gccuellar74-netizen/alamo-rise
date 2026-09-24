import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  SearchCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishServiceAreasPageDictionary } from "@/content/en/service-areas";
import type { SpanishServiceAreasPageDictionary } from "@/content/es/service-areas";

type ServiceAreasDictionary =
  | EnglishServiceAreasPageDictionary
  | SpanishServiceAreasPageDictionary;

type ServiceAreasPageProps = {
  locale: Locale;
  content: ServiceAreasDictionary;
};

export function ServiceAreasPage({
  locale,
  content,
}: ServiceAreasPageProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const servicesUrl = isEnglish
    ? routes.en.services
    : routes.es.services;

  return (
    <main id="main-content">
      {/* HERO */}

      <section className="bg-warm-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.hero.eyebrow}
            </p>

            <h1 className="mt-4 text-balance text-charcoal-950">
              {content.hero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.hero.description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={estimateUrl}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
              >
                {content.hero.primaryCta}

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>

              <Link
                href={servicesUrl}
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-charcoal-300 bg-white px-6 py-3.5 text-base font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
              >
                {content.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRO */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {content.intro.eyebrow}
              </p>

              <h2 className="mt-3 max-w-[15ch] text-balance text-charcoal-950">
                {content.intro.title}
              </h2>
            </div>

            <div className="lg:pt-7">
              <p className="text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
                {content.intro.description}
              </p>

              <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600">
                {content.intro.secondaryDescription}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CONFIRMED AREAS */}

      <section className="bg-warm-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <MapPin
                aria-hidden="true"
                className="size-6"
              />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.confirmedAreas.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.confirmedAreas.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.confirmedAreas.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            {content.confirmedAreas.areas.map(
              (area) => (
                <article
                  key={area.label}
                  className="flex items-center gap-4 rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft sm:p-7"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <MapPin
                      aria-hidden="true"
                      className="size-6"
                    />
                  </div>

                  <div>
                    <h3 className="font-sans text-xl font-bold tracking-normal text-charcoal-950">
                      {area.label}
                    </h3>

                    <p className="mt-1 text-sm text-charcoal-500">
                      {isEnglish
                        ? "Confirmed service market"
                        : "Mercado de servicio confirmado"}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* OUTSIDE SAN ANTONIO */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl rounded-3xl border border-charcoal-100 bg-warm-white p-8 text-center shadow-soft sm:p-10 lg:p-12">
            <SearchCheck
              aria-hidden="true"
              className="mx-auto size-8 text-brand-700"
            />

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.availability.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.availability.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.availability.description}
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-charcoal-500">
              {content.availability.note}
            </p>

            <Link
              href={estimateUrl}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
            >
              {isEnglish
                ? "Ask About Your Location"
                : "Consulta Tu Ubicación"}

              <ArrowRight
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </div>
        </Container>
      </section>

      {/* SERVICES */}

      <section className="bg-warm-white">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {content.services.eyebrow}
              </p>

              <h2 className="mt-3 max-w-[14ch] text-balance text-charcoal-950">
                {content.services.title}
              </h2>

              <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600">
                {content.services.description}
              </p>

              <Link
                href={servicesUrl}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                {content.services.cta}

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {content.services.items.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-charcoal-100 bg-white p-4 shadow-soft"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-brand-600"
                  />

                  <span className="text-sm font-semibold leading-6 text-charcoal-800">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* LOCAL SEO / TRANSPARENCY */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.localSeo.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.localSeo.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.localSeo.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
            {content.localSeo.points.map(
              (point, index) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-white">
                    {point.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-charcoal-300">
                    {point.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}

      <section className="bg-brand-600">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">
              {content.cta.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {content.cta.description}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={estimateUrl}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-base font-semibold text-charcoal-950 transition-colors hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                {content.cta.primaryCta}

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>

              <Link
                href={servicesUrl}
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                {content.cta.secondaryCta}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}