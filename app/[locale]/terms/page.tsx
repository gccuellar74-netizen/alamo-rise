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
      "These Terms of Use explain the conditions for accessing and using the Alamo Rise Home Solutions website.",
    sections: [
      {
        title: "Website Use",
        body:
          "This website is provided to share general information about residential remodeling and home improvement services. You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation, security or accessibility of the site.",
      },
      {
        title: "Estimate Requests and Project Information",
        body:
          "Submitting an estimate request, contact form or other information through this website does not create a construction contract, guarantee pricing, reserve a project date or confirm acceptance of a project. Project scope, pricing, scheduling, materials, payment terms and other conditions must be confirmed separately in writing when applicable.",
      },
      {
        title: "Website Forms and Communications",
        body:
          "When you submit information through this website, you authorize Alamo Rise Home Solutions to use the contact information you provide to respond to your request and communicate with you about the project or service you requested. Submission of a form does not require you to purchase a service.",
      },
      {
        title: "Website Content",
        body:
          "Service descriptions, photographs, project examples, illustrations, pricing references and other website content are provided for general informational purposes. Actual project conditions, materials, appearance, availability and results may vary. Website content may be updated, replaced or removed without prior notice.",
      },
      {
        title: "Analytics, Cookies and Advertising Technologies",
        body:
          "The website may use Google Tag Manager, Google Analytics and related measurement or advertising technologies. Optional analytics and advertising storage is managed according to the cookie preferences selected by the visitor. Additional information about these practices is available in the Privacy Policy.",
      },
      {
        title: "Third-Party Services and Links",
        body:
          "The website may use or link to third-party services for hosting, analytics, advertising measurement, databases, maps, social platforms, financing information or other website functions. Alamo Rise Home Solutions does not control the content, availability, privacy practices or terms of independent third-party services.",
      },
      {
        title: "Financing Information",
        body:
          "Any financing information displayed or linked through the website is provided for informational purposes only unless otherwise stated. Financing availability, approval, rates, terms and eligibility may depend on a third-party provider and are not guaranteed by submitting information through this website.",
      },
      {
        title: "Availability and Technical Issues",
        body:
          "Website access may occasionally be interrupted, delayed or unavailable because of maintenance, technical problems, network conditions, third-party services or circumstances outside the reasonable control of Alamo Rise Home Solutions.",
      },
      {
        title: "Project-Specific Information",
        body:
          "Website content should not be treated as a substitute for a written project agreement, on-site evaluation, professional inspection, engineering review, permit requirements or other project-specific documentation when those are required.",
      },
      {
        title: "Privacy",
        body:
          "Information submitted through the website is handled according to the Privacy Policy. The Privacy Policy also explains the website's use of analytics technologies, cookies and consent preferences.",
      },
      {
        title: "Changes to These Terms",
        body:
          "These Terms of Use may be updated as the website, services, technologies or business practices change. The current version will be published on this page.",
      },
    ],
    backHome: "Return Home",
    contact: "Contact Us",
  },

  es: {
    eyebrow: "Legal",
    title: "Términos de Uso",
    intro:
      "Estos Términos de Uso explican las condiciones para acceder y utilizar el sitio web de Alamo Rise Home Solutions.",
    sections: [
      {
        title: "Uso del Sitio Web",
        body:
          "Este sitio se proporciona para compartir información general sobre servicios de remodelación residencial y mejoras para el hogar. Aceptas utilizar el sitio únicamente para fines legales y de una manera que no interfiera con su funcionamiento, seguridad o accesibilidad.",
      },
      {
        title: "Solicitudes de Cotización e Información del Proyecto",
        body:
          "Enviar una solicitud de cotización, formulario de contacto u otra información a través de este sitio no crea un contrato de construcción, no garantiza precios, no reserva una fecha de proyecto ni confirma la aceptación de un proyecto. El alcance, precio, calendario, materiales, condiciones de pago y demás términos deberán confirmarse por separado y por escrito cuando corresponda.",
      },
      {
        title: "Formularios y Comunicaciones",
        body:
          "Cuando envías información a través de este sitio, autorizas a Alamo Rise Home Solutions a utilizar los datos de contacto proporcionados para responder a tu solicitud y comunicarse contigo sobre el proyecto o servicio solicitado. El envío de un formulario no te obliga a contratar un servicio.",
      },
      {
        title: "Contenido del Sitio",
        body:
          "Las descripciones de servicios, fotografías, ejemplos de proyectos, ilustraciones, referencias de precios y demás contenido del sitio se proporcionan con fines informativos generales. Las condiciones reales del proyecto, materiales, apariencia, disponibilidad y resultados pueden variar. El contenido puede actualizarse, reemplazarse o eliminarse sin previo aviso.",
      },
      {
        title: "Analítica, Cookies y Tecnologías Publicitarias",
        body:
          "El sitio puede utilizar Google Tag Manager, Google Analytics y tecnologías relacionadas de medición o publicidad. El almacenamiento opcional de analítica y publicidad se administra de acuerdo con las preferencias de cookies seleccionadas por el visitante. Puedes encontrar información adicional sobre estas prácticas en la Política de Privacidad.",
      },
      {
        title: "Servicios y Enlaces de Terceros",
        body:
          "El sitio puede utilizar o enlazar servicios de terceros para alojamiento, analítica, medición de publicidad, bases de datos, mapas, plataformas sociales, información de financiamiento u otras funciones del sitio. Alamo Rise Home Solutions no controla el contenido, disponibilidad, prácticas de privacidad o términos de servicios independientes de terceros.",
      },
      {
        title: "Información de Financiamiento",
        body:
          "Cualquier información de financiamiento mostrada o enlazada desde el sitio se proporciona únicamente con fines informativos, salvo que se indique lo contrario. La disponibilidad, aprobación, tasas, términos y elegibilidad pueden depender de un proveedor externo y no están garantizadas por enviar información a través de este sitio.",
      },
      {
        title: "Disponibilidad y Problemas Técnicos",
        body:
          "El acceso al sitio puede interrumpirse, retrasarse o no estar disponible temporalmente debido a mantenimiento, problemas técnicos, condiciones de red, servicios de terceros u otras circunstancias fuera del control razonable de Alamo Rise Home Solutions.",
      },
      {
        title: "Información Específica del Proyecto",
        body:
          "El contenido del sitio no debe considerarse un sustituto de un contrato escrito, evaluación en el lugar, inspección profesional, revisión de ingeniería, requisitos de permisos u otra documentación específica del proyecto cuando sea necesaria.",
      },
      {
        title: "Privacidad",
        body:
          "La información enviada a través del sitio se maneja de acuerdo con la Política de Privacidad. La Política de Privacidad también explica el uso de tecnologías de analítica, cookies y preferencias de consentimiento.",
      },
      {
        title: "Cambios a Estos Términos",
        body:
          "Estos Términos de Uso pueden actualizarse conforme cambien el sitio web, los servicios, las tecnologías o las prácticas del negocio. La versión vigente se publicará en esta página.",
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