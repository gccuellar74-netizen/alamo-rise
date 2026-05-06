"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import FooterColumn from "./FooterColumn";

interface FooterProps {
  lang?: "en" | "es";
}

export default function Footer({ lang: propLang }: FooterProps) {
  const params = useParams();
  const lang = propLang || ((params?.lang as string) || "en");
  const isEnglish = lang === "en";

  const content = {
    description: isEnglish
      ? "Professional home remodeling and repair services in San Antonio, TX. Quality craftsmanship you can trust."
      : "Servicios profesionales de remodelación y reparación en San Antonio, TX. Calidad y confianza garantizada.",

    servicesTitle: isEnglish ? "Services" : "Servicios",
    companyTitle: isEnglish ? "Company" : "Compañía",
    contactTitle: isEnglish ? "Contact Us" : "Contáctanos",

    home: isEnglish ? "Home" : "Inicio",
    services: isEnglish ? "Services" : "Servicios",
    beforeAfter: isEnglish ? "Before & After" : "Antes y Después",
    testimonials: isEnglish ? "Testimonials" : "Testimonios",
    contact: isEnglish ? "Contact" : "Contacto",

    licensed: isEnglish ? "Licensed & Insured" : "Licenciados y Asegurados",
    guaranteed: isEnglish ? "Fully Guaranteed" : "Totalmente Garantizado",

    readyTitle: isEnglish
      ? "Ready to transform your home?"
      : "¿Listo para transformar tu hogar?",
    readyDesc: isEnglish
      ? "Get a free quote in less than 24 hours."
      : "Obtén una cotización gratis en menos de 24 horas.",
    estimate: isEnglish ? "Get Free Estimate" : "Cotización Gratis",

    freeConsult: isEnglish ? "Free Consultation" : "Consulta Gratis",
    noObligation: isEnglish ? "No Obligation" : "Sin Compromiso",

    privacy: isEnglish ? "Privacy Policy" : "Política de Privacidad",
    terms: isEnglish ? "Terms of Service" : "Términos de Servicio",

    whatsapp: isEnglish ? "Chat on WhatsApp" : "Chatea por WhatsApp",
    hours: isEnglish ? "Mon - Fri: 9AM - 6PM" : "Lun - Vie: 9AM - 6PM",
  };

  return (
    <footer className="relative overflow-hidden bg-[#07131f] text-gray-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.12),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">

          <div className="space-y-6">
            <Link href={`/${lang}`} className="inline-block">
              <Image
                src="/images/logo-footer.png"
                alt="Alamo Rise Home Solutions Logo"
                width={180}
                height={70}
                className="object-contain w-[150px] md:w-[170px] h-auto"
                priority
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              {content.description}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-gray-700 bg-[#0c1b2a] px-4 py-2 text-xs w-fit">
                <ShieldCheck className="h-4 w-4 text-orange-500" />
                {content.licensed}
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-gray-700 bg-[#0c1b2a] px-4 py-2 text-xs w-fit">
                <BadgeCheck className="h-4 w-4 text-orange-500" />
                {content.guaranteed}
              </div>
            </div>
          </div>

          <FooterColumn
            title={content.servicesTitle}
            links={[
              { label: "Roofing", href: `/${lang}/services/roofing-services` },
              { label: "Drywall", href: `/${lang}/services/drywall-painting` },
              { label: "General Repairs", href: `/${lang}/services/general-repairs` },
              { label: "Exterior Siding", href: `/${lang}/services/exterior-siding` },
              { label: "Kitchen Remodeling", href: `/${lang}/services/kitchen-remodeling` },
            ]}
          />

          <FooterColumn
            title={content.companyTitle}
            links={[
              { label: content.home, href: `/${lang}` },
              { label: content.services, href: `/${lang}/#services` },
              { label: content.beforeAfter, href: `/${lang}/#before-after` },
              { label: content.testimonials, href: `/${lang}/#testimonials` },
              { label: content.contact, href: `/${lang}/#contact` },
            ]}
          />

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {content.contactTitle}
            </h3>
            <div className="mt-4 h-1 w-10 rounded bg-orange-500" />

            <ul className="mt-6 space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-orange-500" />
                <div>
                  <a href="tel:+12109012025" className="hover:text-orange-400">
                    (210) 901-2025
                  </a>
                  <p className="text-gray-500 text-xs">
                    {content.hours}
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:info@alamo-rise.com" className="hover:text-orange-400">
                  info@alamo-rise.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-orange-500" />
                <span>
                  San Antonio, TX <br /> United States
                </span>
              </li>
            </ul>

            <a
              href="https://wa.me/12109012025"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/30"
            >
              <MessageCircle size={18} />
              {content.whatsapp}
            </a>
          </div>

          <div className="space-y-6 rounded-2xl bg-[#0c1b2a] p-8 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white">
              {content.readyTitle}
            </h3>

            <p className="text-sm text-gray-400">
              {content.readyDesc}
            </p>

            <Link
              href={`/${lang}/#contact`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/30"
            >
              {content.estimate}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>✓ {content.freeConsult}</li>
              <li>✓ {content.noObligation}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 bg-[#06101a]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026 <span className="text-orange-400 font-medium">Alamo Rise</span>. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href={`/${lang}/privacy`} className="hover:text-orange-400">
              {content.privacy}
            </Link>
            <Link href={`/${lang}/terms`} className="hover:text-orange-400">
              {content.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}