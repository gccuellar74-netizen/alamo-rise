import {
  NextRequest,
  NextResponse,
} from "next/server";

import { db } from "@/db";
import { contactRequests } from "@/db/schema";
import {
  checkRateLimit,
  isRateLimitEnabled,
} from "@/lib/security/rate-limit";
import { leadSchema } from "@/lib/validations/lead";

export const runtime = "nodejs";

function getClientIdentifier(
  request: NextRequest,
) {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for",
    );

  if (forwardedFor) {
    return (
      forwardedFor
        .split(",")[0]
        ?.trim() ?? "unknown"
    );
  }

  const realIp =
    request.headers.get(
      "x-real-ip",
    );

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

export async function POST(
  request: NextRequest,
) {
  try {
    /*
     * --------------------------------------------------
     * 1. Rate limiting
     * --------------------------------------------------
     */

    if (isRateLimitEnabled()) {
      const clientIdentifier =
        getClientIdentifier(request);

      const rateLimit =
        checkRateLimit(
          `lead:${clientIdentifier}`,
        );

      if (!rateLimit.success) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "Too many requests. Please try again later.",
          },
          {
            status: 429,
            headers: {
              "Retry-After":
                rateLimit.retryAfterSeconds.toString(),

              "X-RateLimit-Limit":
                rateLimit.limit.toString(),

              "X-RateLimit-Remaining":
                rateLimit.remaining.toString(),
            },
          },
        );
      }
    }

    /*
     * --------------------------------------------------
     * 2. Read JSON body
     * --------------------------------------------------
     */

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid JSON body.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * --------------------------------------------------
     * 3. Validate input
     * --------------------------------------------------
     */

    const validation =
      leadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          ok: false,

          error:
            "The submitted form contains invalid information.",

          issues:
            validation.error.flatten()
              .fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const data = validation.data;

    /*
     * --------------------------------------------------
     * 4. Honeypot
     * --------------------------------------------------
     */

    if (data.website) {
      return NextResponse.json(
        {
          ok: true,
        },
        {
          status: 200,
        },
      );
    }

    /*
     * --------------------------------------------------
     * 5. Insert into legacy-compatible table
     * --------------------------------------------------
     *
     * Existing website fields:
     *
     * name        -> full_name
     * projectType -> service_type
     * details     -> description
     *
     * New website fields are stored in the
     * additional nullable/defaulted columns.
     */

    const inserted = await db
      .insert(contactRequests)
      .values({
        fullName: data.name,

        phone: data.phone,

        email: data.email,

        serviceType:
          data.projectType,

        description:
          data.details ??
          (
            data.language === "es"
              ? "Sin detalles adicionales."
              : "No additional details provided."
          ),

        zip: data.zip,

        budget: data.budget,

        desiredStartDate:
          data.desiredStartDate,

        language: data.language,

        source: data.source,

        utmSource:
          data.utmSource,

        utmMedium:
          data.utmMedium,

        utmCampaign:
          data.utmCampaign,

        utmContent:
          data.utmContent,

        gclid: data.gclid,

        landingPage:
          data.landingPage,

        referrer:
          data.referrer,

        status: "new",
      })
      .returning({
        id: contactRequests.id,
      });

    const lead = inserted[0];

    if (!lead) {
      throw new Error(
        "Contact request insert returned no record.",
      );
    }

    /*
     * --------------------------------------------------
     * 6. Success response
     * --------------------------------------------------
     */

    return NextResponse.json(
      {
        ok: true,
        id: lead.id,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    /*
     * Do not expose database details to the browser.
     */

    console.error(
      "Lead submission failed:",
      error,
    );

    return NextResponse.json(
      {
        ok: false,
        error:
          "Unable to submit the request at this time.",
      },
      {
        status: 500,
      },
    );
  }
}