import Image from "next/image";
import Link from "next/link";

import { business } from "@/config/business";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const isEnglish = locale === "en";

  const homeUrl = isEnglish ? routes.en.home : routes.es.home;

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const estimateLabel = isEnglish
    ? "Get a Free Estimate"
    : "Solicita una Cotización Gratis";

  const phoneHref = business.phone
    ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
    : null;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 lg:min-h-[5.5rem]">
          <Link
            href={homeUrl}
            className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
            aria-label={`${business.businessName} ${
              isEnglish ? "home" : "inicio"
            }`}
          >
            <Image
              src={business.brand.logo}
              alt={`${business.businessName} logo`}
              width={220}
              height={80}
              priority
              className="h-auto w-[150px] object-contain sm:w-[175px] lg:w-[190px]"
            />
          </Link>

          <DesktopNav locale={locale} />

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />

            {phoneHref ? (
              <a
                href={phoneHref}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-charcoal-300 px-4 py-2 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
              >
                {isEnglish ? "Call Now" : "Llámanos"}
              </a>
            ) : null}

            <Link
              href={estimateUrl}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
            >
              {estimateLabel}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} />

            <MobileNav locale={locale} />
          </div>
        </div>
      </Container>
    </header>
  );
}