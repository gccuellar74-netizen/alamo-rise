import {
  date,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const contactRequests = pgTable(
  "contact_requests",
  {
    /*
     * Existing legacy columns.
     * Do not rename these because the previous
     * Alamo Rise website already uses them.
     */

    id: serial("id").primaryKey(),

    fullName: varchar("full_name", {
      length: 150,
    }).notNull(),

    phone: varchar("phone", {
      length: 50,
    }).notNull(),

    email: varchar("email", {
      length: 150,
    }).notNull(),

    serviceType: text(
      "service_type",
    ).notNull(),

    description: text(
      "description",
    ).notNull(),

createdAt: timestamp(
  "created_at",
  {
    withTimezone: false,
  },
).defaultNow(),

    /*
     * New fields for the new website.
     *
     * They remain nullable/defaulted where appropriate
     * so the previous website can continue inserting
     * records without knowing about these columns.
     */

    zip: varchar("zip", {
      length: 12,
    }),

    budget: varchar("budget", {
      length: 100,
    }),

    desiredStartDate: date(
      "desired_start_date",
      {
        mode: "string",
      },
    ),

    language: varchar("language", {
      length: 5,
    })
      .notNull()
      .default("en"),

    source: varchar("source", {
      length: 80,
    })
      .notNull()
      .default("website"),

    utmSource: varchar("utm_source", {
      length: 255,
    }),

    utmMedium: varchar("utm_medium", {
      length: 255,
    }),

    utmCampaign: varchar("utm_campaign", {
      length: 255,
    }),

    utmContent: varchar("utm_content", {
      length: 255,
    }),

    gclid: varchar("gclid", {
      length: 255,
    }),

    landingPage: text(
      "landing_page",
    ),

    referrer: text(
      "referrer",
    ),

    status: varchar("status", {
      length: 30,
    })
      .notNull()
      .default("new"),

    updatedAt: timestamp(
      "updated_at",
      {
        withTimezone: false,
      },
    )
      .notNull()
      .defaultNow(),
  },

  (table) => [
    index(
      "contact_requests_created_at_idx",
    ).on(table.createdAt),

    index(
      "contact_requests_status_idx",
    ).on(table.status),

    index(
      "contact_requests_email_idx",
    ).on(table.email),

    index(
      "contact_requests_phone_idx",
    ).on(table.phone),

    index(
      "contact_requests_zip_idx",
    ).on(table.zip),
  ],
);

export type ContactRequest =
  typeof contactRequests.$inferSelect;

export type NewContactRequest =
  typeof contactRequests.$inferInsert;