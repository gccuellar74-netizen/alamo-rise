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

type ThankYouPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting Alamo Rise Home Solutions about your remodeling or home improvement project.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ThankYouPage({
  params,
}: ThankYouPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    redirect(routes.en.home);
  }

  if (locale === "es") {
    redirect(routes.es.thankYou);
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
              Request Received
            </p>

            <h1 className="mt-4 text-balance text-charcoal-950">
              Thank You for Telling Us About Your Project.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              Your request has been received. Alamo Rise Home Solutions can
              review the information you provided and follow up using your
              contact details.
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-charcoal-100 bg-white p-6 text-left shadow-soft sm:p-7">
              <h2 className="font-sans text-lg font-bold tracking-normal text-charcoal-950">
                What happens next?
              </h2>

              <ol className="mt-5 space-y-4">
                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    1
                  </span>

                  <p className="pt-1 text-sm leading-6 text-charcoal-600">
                    Your project information is reviewed.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    2
                  </span>

                  <p className="pt-1 text-sm leading-6 text-charcoal-600">
                    Alamo Rise can contact you to discuss your project and
                    answer initial questions.
                  </p>
                </li>

                <li className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                    3
                  </span>

                  <p className="pt-1 text-sm leading-6 text-charcoal-600">
                    If appropriate, the next step can be discussed based on
                    your project requirements.
                  </p>
                </li>
              </ol>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={routes.en.home}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                <Home
                  aria-hidden="true"
                  className="size-4"
                />

                Return Home
              </Link>

              <Link
                href={routes.en.services}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                Explore Services

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