import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishFinancingPageDictionary } from "@/content/en/financing";
import type { SpanishFinancingPageDictionary } from "@/content/es/financing";

type FinancingDictionary =
  | EnglishFinancingPageDictionary
  | SpanishFinancingPageDictionary;

type FinancingPageProps = {
  locale: Locale;
  content: FinancingDictionary;
};

const informationIcons = [
  BadgeDollarSign,
  FileCheck2,
  CircleDollarSign,
  BadgeDollarSign,
  FileCheck2,
  ShieldCheck,
] as const;

export function FinancingPage({
  locale,
  content,
}: FinancingPageProps) {
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

      {/* CURRENT STATUS */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center shadow-soft sm:p-10 lg:p-12">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <AlertTriangle
                aria-hidden="true"
                className="size-7"
              />
            </div>

            <span className="mt-6 inline-flex rounded-full border border-amber-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
              {content.status.badge}
            </span>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.status.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.status.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-charcoal-700 sm:text-lg sm:leading-8">
              {content.status.description}
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-6 text-charcoal-600 sm:text-base sm:leading-7">
              {content.status.secondaryDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* FUTURE VERIFIED INFORMATION */}

      <section className="bg-warm-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.futureInformation.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.futureInformation.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.futureInformation.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {content.futureInformation.items.map(
              (item, index) => {
                const Icon =
                  informationIcons[index] ??
                  FileCheck2;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft"
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
              },
            )}
          </div>
        </Container>
      </section>

      {/* FINANCING CAUTION */}

      <section className="bg-white">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {content.caution.eyebrow}
              </p>

              <h2 className="mt-3 max-w-[14ch] text-balance text-charcoal-950">
                {content.caution.title}
              </h2>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
                {content.caution.description}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {content.caution.points.map(
                (point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-charcoal-100 bg-warm-white p-4"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand-600"
                    />

                    <span className="text-sm font-medium leading-6 text-charcoal-800">
                      {point}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Container>
      </section>

      {/* PROJECT PLANNING */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.projectPlanning.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.projectPlanning.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.projectPlanning.description}
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.projectPlanning.steps.map(
              (step) => (
                <li
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {step.number}
                  </span>

                  <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-charcoal-300">
                    {step.description}
                  </p>
                </li>
              ),
            )}
          </ol>
        </Container>
      </section>

      {/* TRANSPARENCY */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <ShieldCheck
                aria-hidden="true"
                className="size-6"
              />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.transparency.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.transparency.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.transparency.description}
            </p>

            <p className="mx-auto mt-6 max-w-2xl border-t border-charcoal-100 pt-6 text-sm font-medium leading-6 text-charcoal-500">
              {content.transparency.note}
            </p>
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