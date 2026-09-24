import { Container } from "@/components/ui/Container";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type ProcessProps = {
  content: HomeDictionary["process"];
};

export function Process({ content }: ProcessProps) {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-charcoal-950 text-white"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
            {content.eyebrow}
          </p>

          <h2
            id="process-heading"
            className="mt-3 text-balance text-white"
          >
            {content.title}
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-0">
            {content.steps.map((step, index) => (
              <li
                key={step.number}
                className="relative"
              >
                {index < content.steps.length - 1 ? (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute left-6 top-14 bottom-[-2rem] w-px bg-white/15 lg:hidden"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute left-[calc(50%+2rem)] right-[-2rem] top-6 hidden h-px bg-white/15 lg:block"
                    />
                  </>
                ) : null}

                <div className="relative flex gap-5 lg:flex-col lg:items-center lg:px-4 lg:text-center">
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-brand-600 text-sm font-bold text-white shadow-soft">
                    {step.number}
                  </div>

                  <div className="pt-1 lg:pt-0">
                    <h3 className="font-sans text-lg font-bold leading-6 tracking-normal text-white sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-charcoal-300 lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}