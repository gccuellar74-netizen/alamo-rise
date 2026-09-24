import Link from "next/link";
import { ArrowRight, BadgeDollarSign } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type FinancingSectionProps = {
  locale: Locale;
  content: HomeDictionary["financing"];
};

export function FinancingSection({
  locale,
  content,
}: FinancingSectionProps) {
  if (!content.verified) {
    return null;
  }

  const financingUrl =
    locale === "en"
      ? routes.en.financing
      : routes.es.financing;

  return (
    <section
      aria-labelledby="financing-heading"
      className="bg-warm-white"
    >
      <Container className="section-padding">
        <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-charcoal-950 shadow-elevated">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center bg-brand-600 p-10 sm:p-12 lg:p-16">
              <div className="flex size-24 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 sm:size-28">
                <BadgeDollarSign
                  aria-hidden="true"
                  className="size-12 sm:size-14"
                />
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-14 xl:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
                {content.eyebrow}
              </p>

              <h2
                id="financing-heading"
                className="mt-3 max-w-[14ch] text-balance text-white"
              >
                {content.title}
              </h2>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
                {content.description}
              </p>

              <div className="mt-8">
                <Link
                  href={financingUrl}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:bg-charcoal-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 sm:text-base"
                >
                  {content.cta}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4"
                  />
                </Link>
              </div>

              {content.disclaimer ? (
                <p className="mt-5 text-xs leading-5 text-charcoal-400">
                  {content.disclaimer}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}