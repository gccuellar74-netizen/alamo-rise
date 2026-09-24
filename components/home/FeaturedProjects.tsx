import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type FeaturedProjectsProps = {
  locale: Locale;
  content: HomeDictionary["featuredProjects"];
};

export function FeaturedProjects({
  locale,
  content,
}: FeaturedProjectsProps) {
  const projectsUrl =
    locale === "en"
      ? routes.en.projects
      : routes.es.projects;

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="bg-warm-white"
    >
      <Container className="section-padding">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.eyebrow}
            </p>

            <h2
              id="featured-projects-heading"
              className="mt-3 text-balance text-charcoal-950"
            >
              {content.title}
            </h2>

            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </div>

          <Link
            href={projectsUrl}
            className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
          >
            {content.cta}

            <ArrowRight
              aria-hidden="true"
              className="size-4"
            />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {content.projects.map((project) => (
            <article
              key={project.key}
              className="group overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.location}`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {!project.verified ? (
                  <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    Placeholder
                  </div>
                ) : null}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                  <MapPin
                    aria-hidden="true"
                    className="size-4 shrink-0"
                  />

                  <span>{project.location}</span>
                </div>

                <h3 className="mt-3 text-2xl text-charcoal-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal-600 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <Link
                  href={projectsUrl}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                  aria-label={`${project.title} — ${
                    locale === "en"
                      ? "View project"
                      : "Ver proyecto"
                  }`}
                >
                  {locale === "en"
                    ? "View Project"
                    : "Ver Proyecto"}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {content.placeholderNotice ? (
          <p className="mt-6 text-center text-xs leading-5 text-charcoal-500">
            {content.placeholderNotice}
          </p>
        ) : null}
      </Container>
    </section>
  );
}