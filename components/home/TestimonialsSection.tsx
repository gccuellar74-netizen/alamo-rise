import Link from "next/link";
import { ExternalLink, Quote, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { business } from "@/config/business";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type TestimonialsSectionProps = {
  content: HomeDictionary["testimonials"];
  locale: "en" | "es";
};

export function TestimonialsSection({
  content,
  locale,
}: TestimonialsSectionProps) {
  const isEnglish = locale === "en";

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-warm-white"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 text-balance text-charcoal-950"
          >
            {content.title}
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-3">
          {content.reviews.map((review, index) => (
            <article
              key={`${review.customerName}-${index}`}
              className="relative rounded-2xl border border-charcoal-100 bg-white p-6 shadow-soft sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Quote
                    aria-hidden="true"
                    className="size-5"
                  />
                </div>

                {!review.verified ? (
                  <span className="rounded-full bg-charcoal-100 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-charcoal-600">
                    Placeholder
                  </span>
                ) : null}
              </div>

              {review.rating !== null ? (
                <div
                  className="mt-5 flex items-center gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden="true"
                      className={[
                        "size-4",
                        starIndex < (review.rating ?? 0)
                          ? "fill-current text-brand-600"
                          : "text-charcoal-200",
                      ].join(" ")}
                    />
                  ))}
                </div>
              ) : null}

              <blockquote className="mt-5">
                <p className="text-base leading-7 text-charcoal-700">
                  “{review.review}”
                </p>
              </blockquote>

              <div className="mt-6 border-t border-charcoal-100 pt-5">
                <p className="font-semibold text-charcoal-950">
                  {review.customerName}
                </p>

                <p className="mt-1 text-sm text-charcoal-500">
                  {review.location}
                </p>

                <p className="mt-1 text-sm text-charcoal-500">
                  {review.projectType}
                </p>

                {review.source || review.date ? (
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-charcoal-400">
                    {review.source ? (
                      <span>{review.source}</span>
                    ) : null}

                    {review.date ? (
                      <time dateTime={review.date}>
                        {review.date}
                      </time>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {business.googleReviewsUrl ? (
          <div className="mt-10 flex justify-center lg:mt-12">
            <Link
              href={business.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
            >
              {content.cta}

              <ExternalLink
                aria-hidden="true"
                className="size-4"
              />
            </Link>
          </div>
        ) : (
          <p className="mt-8 text-center text-xs leading-5 text-charcoal-500">
            {isEnglish
              ? "Google Reviews link will appear here once the verified business profile URL is added."
              : "El enlace a las reseñas de Google aparecerá aquí cuando agreguemos la URL verificada del perfil del negocio."}
          </p>
        )}
      </Container>
    </section>
  );
}