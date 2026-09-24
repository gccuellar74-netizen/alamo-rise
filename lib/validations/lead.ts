import { z } from "zod";

const optionalText = (
  maxLength: number,
) =>
  z
    .string()
    .trim()
    .max(maxLength)
    .optional()
    .nullable()
    .transform((value) => {
      if (!value) {
        return null;
      }

      return value;
    });

const optionalDate = z
  .string()
  .trim()
  .optional()
  .nullable()
  .transform((value) => {
    if (!value) {
      return null;
    }

    return value;
  })
  .refine(
    (value) => {
      if (value === null) {
        return true;
      }

      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(
          value,
        )
      ) {
        return false;
      }

      const [
        year,
        month,
        day,
      ] = value
        .split("-")
        .map(Number);

      const date = new Date(
        Date.UTC(
          year,
          month - 1,
          day,
        ),
      );

      return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() ===
          month - 1 &&
        date.getUTCDate() === day
      );
    },
    {
      message:
        "Enter a valid date.",
    },
  );

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(
      2,
      "Name must contain at least 2 characters.",
    )
    .max(
      120,
      "Name is too long.",
    ),

  phone: z
    .string()
    .trim()
    .min(
      7,
      "Phone number is too short.",
    )
    .max(
      40,
      "Phone number is too long.",
    )
    .regex(
      /^[0-9+().\-\s]+$/,
      "Phone number contains invalid characters.",
    ),

  email: z
    .string()
    .trim()
    .email(
      "Enter a valid email address.",
    )
    .max(
      150,
      "Email address is too long.",
    )
    .transform((value) =>
      value.toLowerCase(),
    ),

  zip: z
    .string()
    .trim()
    .regex(
      /^\d{5}(?:-\d{4})?$/,
      "Enter a valid U.S. ZIP Code.",
    ),

  projectType: z
    .string()
    .trim()
    .min(
      1,
      "Project type is required.",
    )
    .max(
      100,
      "Project type is too long.",
    ),

  budget: optionalText(100),

  desiredStartDate: optionalDate,

  details: optionalText(5000),

  language: z.enum([
    "en",
    "es",
  ]),

  source: z
    .string()
    .trim()
    .min(1)
    .max(80)
    .default("website"),

  utmSource: optionalText(255),

  utmMedium: optionalText(255),

  utmCampaign: optionalText(255),

  utmContent: optionalText(255),

  gclid: optionalText(255),

  landingPage: optionalText(2000),

  referrer: optionalText(2000),

  /*
   * Honeypot anti-spam.
   *
   * A real user should never fill this field.
   */
  website: z
    .string()
    .trim()
    .max(255)
    .optional()
    .default(""),
});

export type LeadInput =
  z.infer<typeof leadSchema>;