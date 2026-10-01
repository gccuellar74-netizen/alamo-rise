import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import { isLocale, type Locale } from "@/lib/i18n/config";

type TermsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  en: {
    eyebrow: "Legal",
    title: "Terms of Use",
    intro:
      "These Terms of Use explain the conditions for using the Alamo Rise Home Solutions website.",
    sections: [
      {
        title: "Website Use",
        body:
          "This website is provided for general information about residential remodeling and home improvement services. You agree to use the website only for lawful purposes.",
      },
      {
        title: "Estimates and Project Information",
        body:
          "Information submitted through the website does not create a construction contract, guarantee pricing or confirm project acceptance. Project scope, pricing, scheduling and other terms must be confirmed separately.",
      },
      {
        title: "Website Content",
        body:
          "Descriptions, images, examples and other content are provided for informational purposes and may be updated or changed without notice.",
      },
      {
        title: "Third-Party Services",
        body:
          "The website may use or link to third-party services such as analytics, advertising, maps, financing providers or social platforms. Those services may have their own terms and privacy policies.",
      },
      {
        title: "Availability",
        body:
          "Website access may occasionally be interrupted, delayed or unavailable because of maintenance, technical issues or circumstances outside the control of Alamo Rise Home Solutions.",
      },
      {
        title: "Limitation of Website Information",
        body:
          "Website content should not be treated as a substitute for a written project agreement, professional inspection, engineering review or other project-specific documentation when those are required.",
      },
      {
        title: "Changes to These Terms",
        body:
          "These Terms of Use may be updated as the website, services or business practices change. The current version will be published on this page.",
      },
    ],
    backHome: "Return Home",
    contact: "Contact Us",
  },

  es: {
    eyebrow: "Legal",
    title: "Términos de Uso",
    intro:
      "Estos Términos de Uso explican las condiciones para utilizar el sitio web de Alamo Rise Home Solutions.",
    sections: [
      {
        title: "Uso del Sitio Web",
        body:
          "Este sitio se proporciona para ofrecer información general sobre servicios de remodelación residencial y mejoras para el hogar. Aceptas utilizar el sitio únicamente para fines legales.",
      },
      {
        title: "Cotizaciones e Información del Proyecto",
        body:
          "La información enviada a través del sitio no crea un contrato de construcción, no garantiza precios ni confirma la aceptación de un proyecto. El alcance, precio, calendario y demás condiciones deben confirmarse por separado.",
      },
      {
        title: "Contenido del Sitio",
        body:
          "Las descripciones, imágenes, ejemplos y demás contenido se proporcionan con fines informativos y pueden actualizarse o modificarse sin previo aviso.",
      },
      {
        title: "Servicios de Terceros",
        body:
          "El sitio puede utilizar o enlazar servicios de terceros como analítica, publicidad, mapas, proveedores de financiamiento o plataformas sociales. Estos servicios pueden tener sus propios términos y políticas de privacidad.",
      },
      {
        title: "Disponibilidad",
        body:
          "El acceso al sitio puede interrumpirse, retrasarse o no estar disponible temporalmente debido a mantenimiento, problemas técnicos u otras circunstancias fuera del control de Alamo Rise Home Solutions.",
      },
      {
        title: "Limitaciones de la Información del Sitio",
        body:
          "El contenido del sitio no debe considerarse un sustituto de un contrato escrito, inspección profesional, revisión de ingeniería u otra documentación específica del proyecto cuando sea necesaria.",
      },
      {
        title: "Cambios a Estos Términos",
        body:
          "Estos Términos de Uso pueden actualizarse conforme cambien el sitio web, los servicios o las prácticas del negocio. La versión vigente se publicará en esta página.",
      },
    ],
    backHome: "Volver al Inicio",
    contact: "Contáctanos",
  },
} satisfies Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: {
      title: string;
      body: string;
    }[];
    backHome: string;
    contact: string;
  }
>;

export default async function TermsPage({
  params,
}: TermsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam;
  const pageContent = content[locale];

  const homeHref =
    locale === "en"
      ? routes.en.home
      : routes.es.home;

  const contactHref =
    locale === "en"
      ? routes.en.contact
      : routes.es.contact;

  return (
    <main id="main-content">
      <section className="bg-warm-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
              {pageContent.eyebrow}
            </p>

            <h1 className="mt-3 text-balance text-charcoal-950">
              {pageContent.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal-600">
              {pageContent.intro}
            </p>

            <div className="mt-12 space-y-10">
              {pageContent.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl text-charcoal-950 sm:text-3xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-base leading-7 text-charcoal-600">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href={homeHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-brand-700 hover:text-white! focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                {pageContent.backHome}
              </Link>

              <Link
                href={contactHref}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-charcoal-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-950 transition-colors hover:border-charcoal-400 hover:bg-charcoal-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/20 sm:text-base"
              >
                {pageContent.contact}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}