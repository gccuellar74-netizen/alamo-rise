import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { routes } from "@/config/routes";
import { isLocale, type Locale } from "@/lib/i18n/config";

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const content = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Alamo Rise Home Solutions may collect, use and protect information submitted through this website.",
    sections: [
      {
        title: "Information We Collect",
        body:
          "When you submit a form, the website may collect information such as your name, phone number, email address, ZIP Code, project type, budget range, desired start date, project details and related website or advertising information.",
      },
      {
        title: "How Information May Be Used",
        body:
          "Information submitted through the website may be used to review your request, contact you about your project, respond to questions, improve website performance and understand how visitors interact with the site.",
      },
      {
        title: "Analytics and Advertising",
        body:
          "The website may use analytics and advertising technologies to measure website activity, campaign performance and interactions such as calls, estimate requests and form submissions.",
      },
      {
        title: "Information Sharing",
        body:
          "Personal information is not intended to be sold. Information may be shared with service providers when reasonably necessary to operate the website, process requests or support business operations.",
      },
      {
        title: "Data Security",
        body:
          "Reasonable measures may be used to protect information submitted through the website. However, no internet transmission or electronic storage method can be guaranteed to be completely secure.",
      },
      {
        title: "Your Choices",
        body:
          "You may contact Alamo Rise Home Solutions to ask questions about information you submitted through the website or to request updates to your contact information.",
      },
      {
        title: "Policy Updates",
        body:
          "This Privacy Policy may be updated as the website, services or business practices change. The current version will be published on this page.",
      },
    ],
    backHome: "Return Home",
    contact: "Contact Us",
  },

  es: {
    eyebrow: "Legal",
    title: "Política de Privacidad",
    intro:
      "Esta Política de Privacidad explica cómo Alamo Rise Home Solutions puede recopilar, utilizar y proteger la información enviada a través de este sitio web.",
    sections: [
      {
        title: "Información que Recopilamos",
        body:
          "Cuando envías un formulario, el sitio puede recopilar información como tu nombre, teléfono, correo electrónico, código postal, tipo de proyecto, rango de presupuesto, fecha deseada de inicio, detalles del proyecto e información relacionada con el sitio web o publicidad.",
      },
      {
        title: "Cómo Puede Utilizarse la Información",
        body:
          "La información enviada a través del sitio puede utilizarse para revisar tu solicitud, contactarte sobre tu proyecto, responder preguntas, mejorar el funcionamiento del sitio y comprender cómo interactúan los visitantes con la página.",
      },
      {
        title: "Analítica y Publicidad",
        body:
          "El sitio puede utilizar tecnologías de analítica y publicidad para medir la actividad del sitio, el rendimiento de campañas y acciones como llamadas, solicitudes de cotización y envíos de formularios.",
      },
      {
        title: "Compartir Información",
        body:
          "La información personal no está destinada a venderse. Puede compartirse con proveedores de servicios cuando sea razonablemente necesario para operar el sitio, procesar solicitudes o apoyar las operaciones del negocio.",
      },
      {
        title: "Seguridad de Datos",
        body:
          "Se pueden utilizar medidas razonables para proteger la información enviada a través del sitio. Sin embargo, ningún método de transmisión por internet o almacenamiento electrónico puede garantizarse como completamente seguro.",
      },
      {
        title: "Tus Opciones",
        body:
          "Puedes contactar a Alamo Rise Home Solutions para hacer preguntas sobre la información que enviaste a través del sitio o solicitar actualizaciones de tus datos de contacto.",
      },
      {
        title: "Actualizaciones de esta Política",
        body:
          "Esta Política de Privacidad puede actualizarse conforme cambien el sitio web, los servicios o las prácticas del negocio. La versión vigente se publicará en esta página.",
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

export default async function PrivacyPage({
  params,
}: PrivacyPageProps) {
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