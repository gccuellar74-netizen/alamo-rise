"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  getLocalizedPath,
} from "@/lib/i18n/localized-paths";
import type { Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({
  locale,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const englishPath = getLocalizedPath(pathname, "en");
  const spanishPath = getLocalizedPath(pathname, "es");

  return (
    <div
      className="inline-flex items-center rounded-md border border-charcoal-200 bg-white p-1"
      aria-label={
        locale === "en"
          ? "Language selector"
          : "Selector de idioma"
      }
    >
      <Link
        href={englishPath}
        lang="en"
        hrefLang="en-US"
        aria-current={locale === "en" ? "page" : undefined}
        aria-label="Switch to English"
        className={[
          "inline-flex min-h-8 min-w-9 items-center justify-center rounded px-2 text-xs font-bold transition-colors",
          locale === "en"
            ? "bg-charcoal-950 text-white"
            : "text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-950",
        ].join(" ")}
      >
        EN
      </Link>

      <span
        aria-hidden="true"
        className="mx-0.5 h-4 w-px bg-charcoal-200"
      />

      <Link
        href={spanishPath}
        lang="es"
        hrefLang="es-US"
        aria-current={locale === "es" ? "page" : undefined}
        aria-label="Cambiar a español"
        className={[
          "inline-flex min-h-8 min-w-9 items-center justify-center rounded px-2 text-xs font-bold transition-colors",
          locale === "es"
            ? "bg-charcoal-950 text-white"
            : "text-charcoal-600 hover:bg-charcoal-50 hover:text-charcoal-950",
        ].join(" ")}
      >
        ES
      </Link>
    </div>
  );
}