import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[70vh] items-center bg-warm-white"
    >
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700">
            404
          </p>

          <h1 className="mt-4 text-balance text-charcoal-950">
            Page Not Found
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
            The page you are looking for may have moved, changed its address,
            or no longer exists.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-6 text-charcoal-500">
            La página que buscas pudo haber cambiado de dirección, haber sido
            movida o ya no estar disponible.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/en"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
            >
              <Home
                aria-hidden="true"
                className="size-4"
              />

              English Home
            </Link>

            <Link
              href="/es"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4"
              />

              Inicio en Español
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}