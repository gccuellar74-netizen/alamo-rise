import {
  CheckCircle2,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { EstimateForm } from "@/components/forms/EstimateForm";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type EstimateSectionProps = {
  locale: Locale;
  content: HomeDictionary["estimate"];
};

export function EstimateSection({
  locale,
  content,
}: EstimateSectionProps) {
  const isEnglish = locale === "en";

  return (
    <section
      id={isEnglish ? "estimate" : "cotizacion"}
      aria-labelledby="estimate-section-heading"
      className="bg-charcoal-950"
    >
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {content.eyebrow}
            </p>

            <h2
              id="estimate-section-heading"
              className="mt-3 max-w-[12ch] text-balance text-white"
            >
              {content.title}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
                  <MessageSquareText
                    aria-hidden="true"
                    className="size-4"
                  />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {isEnglish
                      ? "Start with a conversation"
                      : "Empieza con una conversación"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-charcoal-400">
                    {content.trustMessage}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-4"
                  />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {isEnglish
                      ? "Simple project details"
                      : "Datos sencillos del proyecto"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-charcoal-400">
                    {isEnglish
                      ? "Tell us what you want to improve, your ZIP Code and a few project details."
                      : "Cuéntanos qué quieres mejorar, tu código postal y algunos detalles del proyecto."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-300">
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-4"
                  />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {isEnglish
                      ? "Your information stays focused on your request"
                      : "Tu información se utiliza para tu solicitud"}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-charcoal-400">
                    {isEnglish
                      ? "We only ask for the information needed to understand and follow up on your project."
                      : "Solo solicitamos la información necesaria para entender tu proyecto y dar seguimiento."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-elevated sm:p-7 lg:p-8">
            <EstimateForm
              locale={locale}
              submitLabel={content.submitCta}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}