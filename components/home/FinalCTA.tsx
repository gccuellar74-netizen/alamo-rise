import { Phone } from "lucide-react";

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

type FinalCTAProps = {
  locale: Locale;
  content: HomeDictionary["finalCta"];
};

export function FinalCTA({
  locale,
  content,
}: FinalCTAProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const phoneHref = business.phone
    ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
    : null;

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-brand-600"
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="final-cta-heading"
            className="text-balance text-white"
          >
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={estimateUrl}
              variant="secondary"
              size="lg"
              className="border-white bg-white text-charcoal-950 hover:bg-charcoal-50 sm:min-w-[190px]"
            >
              {content.primaryCta}
            </Button>

            {phoneHref ? (
              <Button
                href={phoneHref}
                variant="ghost"
                size="lg"
                className="border border-white/40 text-white hover:bg-white/10 hover:text-white sm:min-w-[150px]"
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
        </div>
      </Container>
    </section>
  );
}