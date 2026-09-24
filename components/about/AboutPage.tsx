import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishAboutPageDictionary } from "@/content/en/about";
import type { SpanishAboutPageDictionary } from "@/content/es/about";

type AboutDictionary =
  | EnglishAboutPageDictionary
  | SpanishAboutPageDictionary;

type AboutPageProps = {
  locale: Locale;
  content: AboutDictionary;
};

const valueIcons = [
  MessageSquareText,
  Target,
  ShieldCheck,
  CheckCircle2,
] as const;

export function AboutPage({
  locale,
  content,
}: AboutPageProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const servicesUrl = isEnglish
    ? routes.en.services
    : routes.es.services;

  const serviceAreasUrl = isEnglish
    ? routes.en.serviceAreas
    : routes.es.serviceAreas;

  return (
    <main id="main-content">
      {/* =====================================================
          HERO
          ===================================================== */}

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

      {/* =====================================================
          INTRO
          ===================================================== */}

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

      {/* =====================================================
          APPROACH
          ===================================================== */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.approach.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.approach.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.approach.description}
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.approach.items.map((item) => (
              <li
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.number}
                </span>

                <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal-300">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* =====================================================
          VALUES
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.values.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.values.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.values.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {content.values.items.map((item, index) => {
              const Icon =
                valueIcons[index] ?? CheckCircle2;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-charcoal-100 bg-warm-white p-6 shadow-soft"
                >
                  <div className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                    />
                  </div>

                  <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-charcoal-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-charcoal-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =====================================================
          SERVICES
          ===================================================== */}

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

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-charcoal-600">
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
                  className="flex items-center gap-3 rounded-xl border border-charcoal-100 bg-white p-4 shadow-soft"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-5 shrink-0 text-brand-600"
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

      {/* =====================================================
          SERVICE AREA
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl rounded-3xl border border-charcoal-100 bg-warm-white p-8 text-center shadow-soft sm:p-10 lg:p-12">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <MapPin
                aria-hidden="true"
                className="size-6"
              />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.serviceArea.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.serviceArea.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.serviceArea.description}
            </p>

            <Link
              href={serviceAreasUrl}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
            >
              {content.serviceArea.cta}

              <ArrowRight
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TRANSPARENCY
          ===================================================== */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl text-center">
            <ShieldCheck
              aria-hidden="true"
              className="mx-auto size-8 text-brand-300"
            />

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.transparency.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.transparency.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.transparency.description}
            </p>

            <p className="mx-auto mt-6 max-w-2xl border-t border-white/10 pt-6 text-sm font-medium leading-6 text-charcoal-400">
              {content.transparency.note}
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

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