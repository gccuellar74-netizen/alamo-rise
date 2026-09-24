import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { EstimateForm } from "@/components/forms/EstimateForm";
import { business } from "@/config/business";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishContactPageDictionary } from "@/content/en/contact";
import type { SpanishContactPageDictionary } from "@/content/es/contact";

type ContactDictionary =
  | EnglishContactPageDictionary
  | SpanishContactPageDictionary;

type ContactPageProps = {
  locale: Locale;
  content: ContactDictionary;
};

export function ContactPage({
  locale,
  content,
}: ContactPageProps) {
  const isEnglish = locale === "en";

  const servicesUrl = isEnglish
    ? routes.en.services
    : routes.es.services;

  const projectsUrl = isEnglish
    ? routes.en.projects
    : routes.es.projects;

  const serviceAreasUrl = isEnglish
    ? routes.en.serviceAreas
    : routes.es.serviceAreas;

  const estimateAnchor = isEnglish
    ? "#estimate"
    : "#cotizacion";

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
                href={estimateAnchor}
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

      {/* FORM + CONTACT INFO */}

      <section
        id={isEnglish ? "estimate" : "cotizacion"}
        className="scroll-mt-28 bg-charcoal-950 text-white"
      >
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
                {content.form.eyebrow}
              </p>

              <h2 className="mt-3 text-balance text-white">
                {content.form.title}
              </h2>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
                {content.form.description}
              </p>

              <div className="mt-8 rounded-3xl bg-white p-5 text-charcoal-950 shadow-elevated sm:p-7">
                <EstimateForm locale={locale} />
              </div>

              <p className="mt-4 text-sm leading-6 text-charcoal-400">
                {content.form.privacyNote}
              </p>
            </div>

            <aside className="lg:pt-8">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
                  {content.contactOptions.eyebrow}
                </p>

                <h2 className="mt-3 font-sans text-2xl font-bold tracking-normal text-white">
                  {content.contactOptions.title}
                </h2>

                <p className="mt-4 text-sm leading-6 text-charcoal-300">
                  {content.contactOptions.description}
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Phone
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand-300"
                    />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {isEnglish ? "Phone" : "Teléfono"}
                      </p>

                      {business.phone ? (
                        <a
                          href={`tel:${business.phone}`}
                          className="mt-1 block text-sm text-charcoal-300 transition-colors hover:text-white"
                        >
                          {business.phone}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-charcoal-400">
                          {content.contactOptions.phoneUnavailable}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Mail
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand-300"
                    />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Email
                      </p>

                      {business.email ? (
                        <a
                          href={`mailto:${business.email}`}
                          className="mt-1 block break-all text-sm text-charcoal-300 transition-colors hover:text-white"
                        >
                          {business.email}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-charcoal-400">
                          {content.contactOptions.emailUnavailable}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Clock3
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-brand-300"
                    />

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {isEnglish
                          ? "Business Hours"
                          : "Horario"}
                      </p>

                      {business.openingHours.length > 0 ? (
                        <ul className="mt-1 space-y-1">
                          {business.openingHours.map((hours) => {
                            const days = hours.days.join(", ");

                            return (
                              <li
                                key={`${days}-${hours.opens}-${hours.closes}`}
                                className="text-sm text-charcoal-300"
                              >
                                <span className="font-medium text-white">
                                  {days}:
                                </span>{" "}
                                {hours.opens}–{hours.closes}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="mt-1 text-sm text-charcoal-400">
                          {content.contactOptions.hoursUnavailable}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* PROJECT PREPARATION */}

      <section className="bg-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.projectPreparation.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.projectPreparation.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.projectPreparation.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {content.projectPreparation.items.map(
              (item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-charcoal-100 bg-warm-white p-6"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-charcoal-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-charcoal-600">
                    {item.description}
                  </p>
                </article>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* SERVICE AREA */}

      <section className="bg-warm-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl rounded-3xl border border-charcoal-100 bg-white p-8 text-center shadow-soft sm:p-10 lg:p-12">
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

      {/* EXPECTATIONS */}

      <section className="bg-white">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {content.expectations.eyebrow}
              </p>

              <h2 className="mt-3 max-w-[14ch] text-balance text-charcoal-950">
                {content.expectations.title}
              </h2>

              <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600">
                {content.expectations.description}
              </p>
            </div>

            <ul className="space-y-3">
              {content.expectations.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-charcoal-100 bg-warm-white p-4"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-brand-600"
                  />

                  <span className="text-sm font-medium leading-6 text-charcoal-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
                href={servicesUrl}
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