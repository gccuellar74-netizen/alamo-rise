import Image from "next/image";
import Link from "next/link";

import { business } from "@/config/business";
import { footerNavigation } from "@/config/navigation";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/Container";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const isEnglish = locale === "en";
  const navigation = footerNavigation[locale];

  const phoneHref = business.phone
    ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
    : null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-200 bg-charcoal-950 text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Link
              href={locale === "en" ? "/en" : "/es"}
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              aria-label={`${business.businessName} ${
                isEnglish ? "home" : "inicio"
              }`}
            >
              <Image
                src={business.brand.logoDark}
                alt={`${business.businessName} logo`}
                width={240}
                height={88}
                className="h-auto w-[180px] object-contain sm:w-[200px]"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-charcoal-300">
              {isEnglish
                ? "Residential remodeling and home improvement services for homeowners in the San Antonio area."
                : "Servicios residenciales de remodelación y mejoras para el hogar para propietarios en el área de San Antonio."}
            </p>

            <div className="mt-7 space-y-3 text-sm text-charcoal-300">
              <p>
                <span className="font-semibold text-white">
                  {isEnglish ? "Service Area:" : "Área de Servicio:"}
                </span>{" "}
                San Antonio, TX
              </p>

              {phoneHref ? (
                <p>
                  <span className="font-semibold text-white">
                    {isEnglish ? "Phone:" : "Teléfono:"}
                  </span>{" "}
                  <a
                    href={phoneHref}
                    className="transition-colors hover:text-white"
                  >
                    {business.phone}
                  </a>
                </p>
              ) : null}

              {business.email ? (
                <p>
                  <span className="font-semibold text-white">
                    {isEnglish ? "Email:" : "Correo:"}
                  </span>{" "}
                  <a
                    href={`mailto:${business.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {business.email}
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-white">
                {isEnglish ? "Company" : "Empresa"}
              </h2>

              <ul className="mt-5 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-charcoal-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-white">
                {isEnglish ? "Services" : "Servicios"}
              </h2>

              <ul className="mt-5 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-charcoal-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-white">
                {isEnglish ? "Resources" : "Recursos"}
              </h2>

              <ul className="mt-5 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-charcoal-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs leading-6 text-charcoal-400 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {business.businessName}.{" "}
              {isEnglish
                ? "All rights reserved."
                : "Todos los derechos reservados."}
            </p>

            <p>
              {isEnglish
                ? "Serving homeowners in the San Antonio, Texas area."
                : "Atendiendo a propietarios en el área de San Antonio, Texas."}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}