import Link from "next/link";
import { Phone } from "lucide-react";

import { business } from "@/config/business";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";

type MobileStickyCTAProps = {
  locale: Locale;
};

export function MobileStickyCTA({
  locale,
}: MobileStickyCTAProps) {
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const phoneHref = business.phone
    ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
    : null;

  return (
    <div className="safe-area-bottom fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-200 bg-white/95 px-3 py-2 shadow-[0_-8px_24px_rgba(24,24,24,0.08)] backdrop-blur-md lg:hidden">
      <div
        className={[
          "mx-auto grid w-full max-w-xl gap-2",
          phoneHref ? "grid-cols-2" : "grid-cols-1",
        ].join(" ")}
      >
        {phoneHref ? (
          <a
            href={phoneHref}
            aria-label={
              isEnglish
                ? "Call Alamo Rise Home Solutions"
                : "Llamar a Alamo Rise Home Solutions"
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-3 py-2 text-sm font-semibold text-charcoal-950 transition-colors hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
          >
            <Phone
              aria-hidden="true"
              className="size-4 shrink-0"
            />

            <span>
              {isEnglish ? "Call Now" : "Llámanos"}
            </span>
          </a>
        ) : null}

        <Link
          href={estimateUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
        >
          {isEnglish
            ? "Free Estimate"
            : "Cotización Gratis"}
        </Link>
      </div>
    </div>
  );
}