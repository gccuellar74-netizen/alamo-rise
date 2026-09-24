export type ReviewSource =
  | "google"
  | "facebook"
  | "website"
  | "other";

export type Review = {
  id: string;

  verified: boolean;

  author: string | null;

  rating: number | null;

  source: ReviewSource | null;

  sourceUrl: string | null;

  date: string | null;

  projectType: string | null;

  en: {
    quote: string;
    projectLabel: string | null;
  };

  es: {
    quote: string;
    projectLabel: string | null;
  };
};

/*
 * IMPORTANT
 * -----------------------------------------------------
 * Do not add fabricated testimonials.
 *
 * A review should only be marked verified: true when:
 *
 * - the review text is real
 * - the author/name is confirmed
 * - the source is known
 * - the rating is known when applicable
 * - the company is allowed to display it
 *
 * Until then, placeholders remain verified: false.
 */

export const reviews: readonly Review[] = [
  {
    id: "placeholder-review-1",

    verified: false,

    author: null,

    rating: null,

    source: null,

    sourceUrl: null,

    date: null,

    projectType: null,

    en: {
      quote:
        "Placeholder for a future verified customer review.",
      projectLabel: null,
    },

    es: {
      quote:
        "Espacio reservado para una futura reseña verificada de un cliente.",
      projectLabel: null,
    },
  },

  {
    id: "placeholder-review-2",

    verified: false,

    author: null,

    rating: null,

    source: null,

    sourceUrl: null,

    date: null,

    projectType: null,

    en: {
      quote:
        "Placeholder for a future verified customer review.",
      projectLabel: null,
    },

    es: {
      quote:
        "Espacio reservado para una futura reseña verificada de un cliente.",
      projectLabel: null,
    },
  },

  {
    id: "placeholder-review-3",

    verified: false,

    author: null,

    rating: null,

    source: null,

    sourceUrl: null,

    date: null,

    projectType: null,

    en: {
      quote:
        "Placeholder for a future verified customer review.",
      projectLabel: null,
    },

    es: {
      quote:
        "Espacio reservado para una futura reseña verificada de un cliente.",
      projectLabel: null,
    },
  },
];

export const verifiedReviews = reviews.filter(
  (review) => review.verified,
);

export function getReviewById(
  id: string,
): Review | undefined {
  return reviews.find(
    (review) => review.id === id,
  );
}

export function getVerifiedReviewsBySource(
  source: ReviewSource,
): Review[] {
  return reviews.filter(
    (review) =>
      review.verified &&
      review.source === source,
  );
}