import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type ServiceAreasProps = {
  locale: Locale;
  content: HomeDictionary["serviceAreas"];
};

export function ServiceAreas({
  locale,
  content,
}: ServiceAreasProps) {
  const serviceAreasUrl =
    locale === "en"
      ? routes.en.serviceAreas
      : routes.es.serviceAreas;

  const allAreas = [
    content.primaryArea,
    ...content.additionalAreas,
  ];

  return (
    <section
      aria-labelledby="service-areas-heading"
      className="bg-white"
    >
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {content.eyebrow}
            </p>

            <h2
              id="service-areas-heading"
              className="mt-3 max-w-[14ch] text-balance text-charcoal-950"
            >
              {content.title}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-8">
              <Link
                href={serviceAreasUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                {content.cta}

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal-100 bg-warm-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <MapPin
                  aria-hidden="true"
                  className="size-5"
                />
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-charcoal-500">
                  {locale === "en"
                    ? "Current Service Area"
                    : "Área de Servicio Actual"}
                </p>

                <p className="mt-1 text-lg font-bold text-charcoal-950">
                  {content.primaryArea}
                </p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {allAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-charcoal-100 bg-white px-4 py-3 text-sm font-semibold text-charcoal-800"
                >
                  <MapPin
                    aria-hidden="true"
                    className="size-4 shrink-0 text-brand-600"
                  />

                  <span>{area}</span>
                </li>
              ))}
            </ul>

            {content.additionalAreas.length === 0 ? (
              <p className="mt-5 text-xs leading-5 text-charcoal-500">
                {locale === "en"
                  ? "Additional cities will be added only after confirming that Alamo Rise actually serves those locations."
                  : "Solo agregaremos ciudades adicionales después de confirmar que Alamo Rise realmente presta servicio en esas ubicaciones."}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}