import {
  ClipboardList,
  House,
  MessageSquareText,
  UserRoundCheck,
  CheckCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type WhyChooseUsProps = {
  content: HomeDictionary["whyChooseUs"];
};

const iconMap = {
  "clear-estimates": ClipboardList,
  "one-contact": UserRoundCheck,
  "respect-home": House,
  communication: MessageSquareText,
  "final-walkthrough": CheckCheck,
} as const;

export function WhyChooseUs({
  content,
}: WhyChooseUsProps) {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="bg-white"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="why-choose-us-heading"
            className="mt-3 text-balance text-charcoal-950"
          >
            {content.title}
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
          {content.items.map((item) => {
            const Icon =
              iconMap[
                item.key as keyof typeof iconMap
              ];

            return (
              <article
                key={item.key}
                className="rounded-2xl border border-charcoal-100 bg-warm-white p-6 shadow-soft"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                  />
                </div>

                <h3 className="mt-5 font-sans text-lg font-bold leading-6 tracking-normal text-charcoal-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}