import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import { verifiedProjects } from "@/data/projects";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishProjectsPageDictionary } from "@/content/en/projects";
import type { SpanishProjectsPageDictionary } from "@/content/es/projects";

type ProjectsDictionary =
  | EnglishProjectsPageDictionary
  | SpanishProjectsPageDictionary;

type ProjectsPageProps = {
  locale: Locale;
  content: ProjectsDictionary;
};

export function ProjectsPage({
  locale,
  content,
}: ProjectsPageProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const servicesUrl = isEnglish
    ? routes.en.services
    : routes.es.services;

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
          VERIFIED PROJECTS / EMPTY STATE
          ===================================================== */}

      <section className="bg-warm-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.gallery.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-charcoal-950">
              {content.gallery.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.gallery.description}
            </p>
          </div>

          {verifiedProjects.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {verifiedProjects.map((project) => {
                const localizedProject = project[locale];

                return (
                  <article
                    key={project.id}
                    className="overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-soft"
                  >
                    <div className="flex aspect-[4/3] items-center justify-center bg-charcoal-100">
                      <ImageIcon
                        aria-hidden="true"
                        className="size-10 text-charcoal-400"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                        {localizedProject.categoryLabel}
                      </p>

                      <h3 className="mt-2 text-2xl text-charcoal-950">
                        {localizedProject.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-charcoal-600">
                        {localizedProject.summary}
                      </p>

                      <p className="mt-4 text-xs font-medium text-charcoal-500">
                        {project.location.city &&
                        project.location.state
                          ? `${project.location.city}, ${project.location.state}`
                          : content.gallery.locationUnavailable}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-charcoal-100 bg-white p-8 text-center shadow-soft sm:p-10 lg:p-12">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <ImageIcon
                  aria-hidden="true"
                  className="size-7"
                />
              </div>

              <h3 className="mt-6 text-2xl text-charcoal-950 sm:text-3xl">
                {content.gallery.emptyTitle}
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-7 text-charcoal-600">
                {content.gallery.emptyDescription}
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href={servicesUrl}
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
                >
                  {isEnglish
                    ? "Explore Services"
                    : "Explorar Servicios"}
                </Link>

                <Link
                  href={estimateUrl}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
                >
                  {isEnglish
                    ? "Start Your Project"
                    : "Comienza Tu Proyecto"}
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* =====================================================
          PROJECT CATEGORIES
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <Hammer
                aria-hidden="true"
                className="size-6"
              />
            </div>

            <h2 className="mt-5 text-balance text-charcoal-950">
              {content.categories.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.categories.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {content.categories.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-charcoal-100 bg-warm-white p-6"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="size-5 text-brand-700"
                />

                <h3 className="mt-4 font-sans text-lg font-bold tracking-normal text-charcoal-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          TRUST MESSAGE
          ===================================================== */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-white/10 text-brand-300">
              <ShieldCheck
                aria-hidden="true"
                className="size-6"
              />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.trust.eyebrow}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {content.trust.title}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.trust.description}
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