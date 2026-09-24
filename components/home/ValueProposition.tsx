import {
  CheckCircle2,
  ClipboardCheck,
  MessageCircleMore,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type ValuePropositionProps = {
  content: HomeDictionary["valueProposition"];
};

const iconMap = {
  communication: MessageCircleMore,
  organization: ClipboardCheck,
  quality: ShieldCheck,
  clarity: CheckCircle2,
  "follow-up": Waypoints,
} as const;

export function ValueProposition({
  content,
}: ValuePropositionProps) {
  return (
    <section
      aria-labelledby="value-proposition-heading"
      className="bg-warm-white"
    >
      <Container className="section-padding">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.eyebrow}
            </p>

            <h2
              id="value-proposition-heading"
              className="mt-3 max-w-[13ch] text-balance text-charcoal-950"
            >
              {content.title}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.benefits.map((benefit, index) => {
              const Icon =
                iconMap[
                  benefit.key as keyof typeof iconMap
                ] ?? CheckCircle2;

              const isLastOddCard =
                content.benefits.length % 2 !== 0 &&
                index === content.benefits.length - 1;

              return (
                <article
                  key={benefit.key}
                  className={[
                    "rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft sm:p-7",
                    isLastOddCard ? "sm:col-span-2" : "",
                  ].join(" ")}
                >
                  <div className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Icon
                      aria-hidden="true"
                      className="size-5"
                    />
                  </div>

                  <h3 className="mt-5 font-sans text-lg font-bold leading-6 tracking-normal text-charcoal-950 sm:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-charcoal-600 sm:text-base sm:leading-7">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}