import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Lightbulb,
  MapPin,
  MessageSquareText,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import type { Service } from "@/data/services";
import { getServiceDetail } from "@/data/service-details";
import type { Locale } from "@/lib/i18n/config";

type ServiceDetailPageProps = {
  locale: Locale;
  service: Service;
};

export function ServiceDetailPage({
  locale,
  service,
}: ServiceDetailPageProps) {
  const isEnglish = locale === "en";

  const localizedService = service[locale];
  const serviceDetail = getServiceDetail(service.id);

  const estimateUrl = isEnglish
    ? `${routes.en.contact}#estimate`
    : `${routes.es.contact}#cotizacion`;

  const allServicesUrl = isEnglish
    ? routes.en.services
    : routes.es.services;

  const projectsUrl = isEnglish
    ? routes.en.projects
    : routes.es.projects;

  if (!serviceDetail) {
    return null;
  }

  const detail = serviceDetail[locale];

  const process = isEnglish
    ? [
        {
          number: "01",
          title: "Tell Us About Your Project",
          description:
            "Explain what you want to change, improve or repair and share the most important details about your home.",
        },
        {
          number: "02",
          title: "Review the Existing Space",
          description:
            "The current conditions, project priorities and relevant details can be reviewed before defining the scope.",
        },
        {
          number: "03",
          title: "Define the Project Scope",
          description:
            "Discuss the proposed work, important considerations and the next appropriate steps for the project.",
        },
        {
          number: "04",
          title: "Move the Project Forward",
          description:
            "Once the scope is agreed upon, the work can move forward with coordination and communication.",
        },
      ]
    : [
        {
          number: "01",
          title: "Cuéntanos Sobre Tu Proyecto",
          description:
            "Explícanos qué quieres cambiar, mejorar o reparar y comparte los detalles más importantes de tu hogar.",
        },
        {
          number: "02",
          title: "Revisamos el Espacio Actual",
          description:
            "Se pueden revisar las condiciones existentes, prioridades y detalles relevantes antes de definir el alcance.",
        },
        {
          number: "03",
          title: "Definimos el Proyecto",
          description:
            "Se conversa sobre el trabajo propuesto, consideraciones importantes y los siguientes pasos adecuados.",
        },
        {
          number: "04",
          title: "Avanzamos con el Proyecto",
          description:
            "Una vez definido el alcance, el trabajo puede avanzar con coordinación y comunicación.",
        },
      ];

  return (
    <main id="main-content">
      {/* =====================================================
          BREADCRUMB
          ===================================================== */}

      <div className="border-b border-charcoal-100 bg-white">
        <Container className="py-4">
          <nav
            aria-label={
              isEnglish
                ? "Breadcrumb"
                : "Ruta de navegación"
            }
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm text-charcoal-500">
              <li>
                <Link
                  href={
                    isEnglish
                      ? routes.en.home
                      : routes.es.home
                  }
                  className="transition-colors hover:text-brand-700"
                >
                  {isEnglish ? "Home" : "Inicio"}
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href={allServicesUrl}
                  className="transition-colors hover:text-brand-700"
                >
                  {isEnglish
                    ? "Services"
                    : "Servicios"}
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li
                aria-current="page"
                className="font-medium text-charcoal-800"
              >
                {localizedService.name}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="bg-warm-white">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                <MapPin
                  aria-hidden="true"
                  className="size-4"
                />

                San Antonio, Texas
              </p>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-charcoal-500">
                {detail.eyebrow}
              </p>

              <h1 className="mt-3 max-w-[13ch] text-balance text-charcoal-950">
                {detail.heading}
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
                {localizedService.shortDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={estimateUrl}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                >
                  {isEnglish
                    ? "Get a Free Estimate"
                    : "Solicita una Cotización Gratis"}

                  <ArrowRight
                    aria-hidden="true"
                    className="size-4"
                  />
                </Link>

                <Link
                  href={projectsUrl}
                  className="inline-flex min-h-14 items-center justify-center rounded-md border border-charcoal-300 bg-white px-6 py-3.5 text-base font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20"
                >
                  {isEnglish
                    ? "View Projects"
                    : "Ver Proyectos"}
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-charcoal-100 shadow-elevated">
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.imageAlt[locale]}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          SERVICE-SPECIFIC OVERVIEW
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {isEnglish
                  ? "About This Service"
                  : "Sobre Este Servicio"}
              </p>

              <h2 className="mt-3 max-w-[14ch] text-balance text-charcoal-950">
                {localizedService.name}
              </h2>
            </div>

            <div className="lg:pt-7">
              <p className="text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
                {detail.overview}
              </p>

              <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600">
                {detail.secondaryOverview}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROJECT EXAMPLES
          ===================================================== */}

      <section className="bg-warm-white">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {isEnglish
                  ? "Possible Project Scope"
                  : "Posible Alcance del Proyecto"}
              </p>

              <h2 className="mt-3 max-w-[14ch] text-balance text-charcoal-950">
                {detail.projectExamplesTitle}
              </h2>

              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-charcoal-600">
                {isEnglish
                  ? "The exact scope depends on the property, existing conditions and the goals of the project."
                  : "El alcance exacto depende de la propiedad, las condiciones existentes y los objetivos del proyecto."}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {detail.projectExamples.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-charcoal-100 bg-white p-4 shadow-soft"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-brand-600"
                  />

                  <span className="text-sm font-medium leading-6 text-charcoal-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONSIDERATIONS
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Lightbulb
                  aria-hidden="true"
                  className="size-6"
                />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                {isEnglish
                  ? "Before You Start"
                  : "Antes de Comenzar"}
              </p>

              <h2 className="mt-3 text-balance text-charcoal-950">
                {detail.considerationsTitle}
              </h2>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {detail.considerations.map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-charcoal-100 bg-warm-white p-5"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm font-medium leading-6 text-charcoal-700">
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PROCESS
          ===================================================== */}

      <section className="bg-charcoal-950 text-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-300">
              {isEnglish
                ? "Project Process"
                : "Proceso del Proyecto"}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {isEnglish
                ? "A Clear Path From the First Conversation Forward"
                : "Un Camino Claro Desde la Primera Conversación"}
            </h2>

            <p className="mt-5 text-pretty text-base leading-7 text-charcoal-300 sm:text-lg sm:leading-8">
              {isEnglish
                ? "Every project is different, but starting with a clear understanding of the space and the requested work helps define the appropriate next steps."
                : "Cada proyecto es diferente, pero comenzar entendiendo claramente el espacio y el trabajo solicitado ayuda a definir los siguientes pasos adecuados."}
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {step.number}
                </span>

                <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal-300">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* =====================================================
          PROJECT CLARITY
          ===================================================== */}

      <section className="bg-white">
        <Container className="section-padding-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-charcoal-100 bg-warm-white p-6">
              <ClipboardCheck
                aria-hidden="true"
                className="size-6 text-brand-700"
              />

              <h3 className="mt-4 font-sans text-lg font-bold tracking-normal text-charcoal-950">
                {isEnglish
                  ? "Define the Scope"
                  : "Define el Alcance"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-charcoal-600">
                {isEnglish
                  ? "Identify the requested work and important project considerations before moving forward."
                  : "Identifica los trabajos solicitados y las consideraciones importantes antes de avanzar."}
              </p>
            </article>

            <article className="rounded-2xl border border-charcoal-100 bg-warm-white p-6">
              <MessageSquareText
                aria-hidden="true"
                className="size-6 text-brand-700"
              />

              <h3 className="mt-4 font-sans text-lg font-bold tracking-normal text-charcoal-950">
                {isEnglish
                  ? "Discuss the Details"
                  : "Habla de los Detalles"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-charcoal-600">
                {isEnglish
                  ? "Questions, priorities and project decisions can be discussed as the scope becomes clearer."
                  : "Las preguntas, prioridades y decisiones pueden analizarse conforme se define mejor el proyecto."}
              </p>
            </article>

            <article className="rounded-2xl border border-charcoal-100 bg-warm-white p-6">
              <CheckCircle2
                aria-hidden="true"
                className="size-6 text-brand-700"
              />

              <h3 className="mt-4 font-sans text-lg font-bold tracking-normal text-charcoal-950">
                {isEnglish
                  ? "Confirm Next Steps"
                  : "Confirma los Siguientes Pasos"}
              </h3>

              <p className="mt-2 text-sm leading-6 text-charcoal-600">
                {isEnglish
                  ? "Once the project requirements are understood, the appropriate next step can be determined."
                  : "Una vez entendidas las necesidades del proyecto, se puede determinar el siguiente paso adecuado."}
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="bg-brand-600">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/75">
              {localizedService.name}
            </p>

            <h2 className="mt-3 text-balance text-white">
              {isEnglish
                ? "Ready to Talk About Your Project?"
                : "¿Listo para Hablar de Tu Proyecto?"}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {isEnglish
                ? "Tell us what you would like to improve and share a few details about your property to start the conversation."
                : "Cuéntanos qué quieres mejorar y comparte algunos detalles sobre tu propiedad para comenzar la conversación."}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={estimateUrl}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-base font-semibold text-charcoal-950 transition-colors hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                {isEnglish
                  ? "Get a Free Estimate"
                  : "Solicita una Cotización Gratis"}

                <ArrowRight
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>

              <Link
                href={allServicesUrl}
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
              >
                {isEnglish
                  ? "View All Services"
                  : "Ver Todos los Servicios"}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}