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

type AboutPreviewProps = {
  locale: Locale;
  content: HomeDictionary["about"];
};

export function AboutPreview({
  locale,
  content,
}: AboutPreviewProps) {
  const aboutUrl =
    locale === "en"
      ? routes.en.about
      : routes.es.about;

  return (
    <section
      aria-labelledby="about-preview-heading"
      className="bg-white"
    >
      <Container className="section-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.eyebrow}
            </p>

            <h2
              id="about-preview-heading"
              className="mt-3 max-w-[14ch] text-balance text-charcoal-950"
            >
              {content.title}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <p className="mt-4 text-pretty text-base leading-7 text-charcoal-600">
              {content.secondaryDescription}
            </p>

            <div className="mt-8">
              <Link
                href={aboutUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                {content.cta}

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>
            </div>

            {!content.imageVerified ? (
              <p className="mt-5 text-xs leading-5 text-charcoal-500">
                {content.imageNotice}
              </p>
            ) : null}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl bg-charcoal-100 shadow-elevated">
              <div className="relative aspect-[4/3]">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {!content.imageVerified ? (
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  Placeholder
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}