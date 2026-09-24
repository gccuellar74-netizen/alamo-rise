import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Hammer,
  House,
  Paintbrush,
  PanelsTopLeft,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishServicesPageDictionary } from "@/content/en/services";
import type { SpanishServicesPageDictionary } from "@/content/es/services";

type ServicesDictionary =
  | EnglishServicesPageDictionary
  | SpanishServicesPageDictionary;

type ServicesPageProps = {
  locale: Locale;
  content: ServicesDictionary;
};

const planningIcons = [
  PanelsTopLeft,
  Paintbrush,
  Hammer,
  House,
] as const;

export function ServicesPage({
  locale,
  content,
}: ServicesPageProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const projectsUrl = isEnglish
    ? routes.en.projects
    : routes.es.projects;

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

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
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
                href="#services-list"
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
          ALL SERVICES
          ===================================================== */}

      <section
        id="services-list"
        aria-labelledby="all-services-heading"
        className="scroll-mt-28 bg-warm-white"
      >
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.grid.eyebrow}
            </p>

            <h2
              id="all-services-heading"
              className="mt-3 text-balance text-charcoal-950"
            >
              {content.grid.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.grid.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {services.map((service) => {
              const localizedService = service[locale];

              return (
                <article
                  key={service.id}
                  className="group overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <Link
                    href={localizedService.href}
                    className="block h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                    aria-label={`${localizedService.name} — ${content.grid.learnMore}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                      <Image
                        src={service.image}
                        alt={service.imageAlt[locale]}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                      />
                    </div>

                    <div className="p-6 sm:p-7">
                      <h3 className="text-2xl text-charcoal-950">
                        {localizedService.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-charcoal-600 sm:text-base sm:leading-7">
                        {localizedService.shortDescription}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors group-hover:text-brand-800">
                        {content.grid.learnMore}

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
        </Container>
      </section>

      {/* =====================================================
          PLANNING
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.planning.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.planning.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.planning.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {content.planning.items.map((item, index) => {
              const Icon =
                planningIcons[index] ?? Hammer;

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
          SIMPLE PROCESS
          ===================================================== */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.process.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.process.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.process.description}
            </p>
          </div>

          <ol className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {content.process.steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {step.number}
                </span>

                <h3 className="mt-5 font-sans text-xl font-bold tracking-normal text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal-300 sm:text-base sm:leading-7">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
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
                href={projectsUrl}
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