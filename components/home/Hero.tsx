import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";

import { business } from "@/config/business";
import { routes } from "@/config/routes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type HeroProps = {
  locale: Locale;
  content: HomeDictionary["hero"];
};

export function Hero({
  locale,
  content,
}: HeroProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const phoneHref = business.phone
    ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
    : null;

  const verifiedTrustItems = Object.values(
    content.trustItems,
  ).filter((item) => item.verified);

  return (
    <section
      aria-labelledby="home-hero-title"
      className="overflow-hidden bg-warm-white"
    >
      <Container className="py-8 sm:py-10 lg:py-14 xl:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-brand-700 sm:text-base">
              {content.eyebrow}
            </p>

            <h1
              id="home-hero-title"
              className="max-w-[11ch] text-balance text-charcoal-950"
            >
              {content.title}
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={estimateUrl}
                variant="primary"
                size="lg"
                className="sm:min-w-[190px]"
              >
                {content.primaryCta}
              </Button>

              {phoneHref ? (
                <Button
                  href={phoneHref}
                  variant="secondary"
                  size="lg"
                  className="sm:min-w-[150px]"
                  aria-label={
                    isEnglish
                      ? "Call Alamo Rise Home Solutions"
                      : "Llamar a Alamo Rise Home Solutions"
                  }
                >
                  <Phone
                    aria-hidden="true"
                    className="size-4"
                  />

                  {content.secondaryCta}
                </Button>
              ) : null}
            </div>

            {verifiedTrustItems.length > 0 ? (
              <ul
                className="mt-8 flex flex-col gap-3 border-t border-charcoal-200 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-6"
                aria-label={
                  isEnglish
                    ? "Business highlights"
                    : "Características del negocio"
                }
              >
                {verifiedTrustItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm font-semibold text-charcoal-700"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="size-4 shrink-0 text-brand-600"
                    />

                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl bg-charcoal-100 shadow-elevated lg:min-h-[560px] xl:min-h-[620px]">
              <div className="relative aspect-[4/3] w-full lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src="/images/hero.jpg"
                  alt={
                    isEnglish
                      ? "Remodeled residential interior in San Antonio, Texas"
                      : "Interior residencial remodelado en San Antonio, Texas"
                  }
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 100vw, 56vw"
                  className="object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
              />

              <div className="absolute bottom-4 left-4 right-4 hidden rounded-xl border border-white/20 bg-white/90 p-4 shadow-soft backdrop-blur-md sm:block lg:left-6 lg:right-auto lg:max-w-[300px]">
                <p className="text-sm font-semibold leading-6 text-charcoal-900">
                  {isEnglish
                    ? "Residential remodeling and home improvement in the San Antonio area."
                    : "Remodelación residencial y mejoras para el hogar en el área de San Antonio."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}