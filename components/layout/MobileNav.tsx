"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navigation } from "@/config/navigation";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";

type MobileNavProps = {
  locale: Locale;
};

export function MobileNav({ locale }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const items = navigation[locale];
  const isEnglish = locale === "en";

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={
          isOpen
            ? isEnglish
              ? "Close navigation menu"
              : "Cerrar menú de navegación"
            : isEnglish
              ? "Open navigation menu"
              : "Abrir menú de navegación"
        }
        className="inline-flex size-11 items-center justify-center rounded-md border border-charcoal-200 bg-white text-charcoal-950 transition-colors hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label={
              isEnglish
                ? "Close navigation menu"
                : "Cerrar menú de navegación"
            }
            onClick={closeMenu}
            className="fixed inset-0 top-[4.5rem] z-40 bg-black/30 backdrop-blur-[2px]"
          />

          <nav
            id="mobile-navigation"
            aria-label={
              isEnglish
                ? "Mobile navigation"
                : "Navegación móvil"
            }
            className="fixed inset-x-0 top-[4.5rem] z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-charcoal-100 bg-white shadow-elevated"
          >
            <div className="mx-auto w-full max-w-[80rem] px-5 py-5 sm:px-8">
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li
                    key={item.href}
                    className="border-b border-charcoal-100 last:border-b-0"
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex min-h-14 items-center py-3 text-base font-semibold text-charcoal-900 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={estimateUrl}
                  onClick={closeMenu}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                >
                  {isEnglish
                    ? "Get a Free Estimate"
                    : "Solicita una Cotización Gratis"}
                </Link>
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}