import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Home,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import { isLocale } from "@/lib/i18n/config";

type GraciasPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: "Gracias",
  description:
    "Gracias por contactar a Alamo Rise Home Solutions sobre tu proyecto de remodelación o mejoras para el hogar.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function GraciasPage({
  params,
}: GraciasPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.es.home);
  }

  if (locale === "en") {
    redirect(routes.en.thankYou);
  }

  return (
    <main id="main-content">
      <section className="flex min-h-[70vh] items-center bg-warm-white">
        <Container className="py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-brand-50 text-brand-700 sm:size-24">
              <CheckCircle2
                aria-hidden="true"
                className="size-10 sm:size-12"
              />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
              Solicitud Recibida
            </p>

            <h1 className="mt-4 text-balance text-charcoal-950">
              Gracias por Contarnos Sobre Tu Proyecto.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              Recibimos la información de tu proyecto. Alamo Rise Home
              Solutions podrá revisar los datos que proporcionaste y
              contactarte utilizando tu información de contacto.
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-charcoal-100 bg-white p-6 text-left shadow-soft sm:p-7">
              <h2 className="font-sans text-lg font-bold tracking-normal text-charcoal-950">
                ¿Qué sigue?
              </h2>

              <ol className="mt-5 space-y-4">
                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    1
                  </span>

                  <p className="pt-1 text-sm leading-6 text-charcoal-600">
                    Se revisará la información de tu proyecto.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    2
                  </span>

                  <p className="pt-1 text-sm leading-6 text-charcoal-600">
                    Alamo Rise podrá contactarte para hablar sobre el proyecto
                    y responder preguntas iniciales.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    3
                  </span>

                  <p className="pt-1 text-sm leading-6 text-charcoal-600">
                    Si corresponde, podrán definir contigo el siguiente paso
                    según las necesidades del proyecto.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={routes.es.home}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                <Home
                  aria-hidden="true"
                  className="size-4"
                />

                Volver al Inicio
              </Link>

              <Link
                href={routes.es.services}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                Ver Servicios

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}