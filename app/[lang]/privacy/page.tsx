interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  const isEnglish = lang === "en";

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold">
            {isEnglish ? "Privacy Policy" : "Política de Privacidad"}
          </h1>

          <p className="text-gray-600 text-sm">
            {isEnglish
              ? "Last updated: May 4, 2026"
              : "Última actualización: 4 de mayo de 2026"}
          </p>
        </div>

        {/* 1. Information Collected */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "1. Information We Collect" : "1. Información que Recopilamos"}
          </h2>
          <p>
            {isEnglish
              ? "We collect personal information that you voluntarily provide through our website, including your name, phone number, email address, and project details."
              : "Recopilamos información personal que usted proporciona voluntariamente a través de nuestro sitio web, incluyendo nombre, número de teléfono, correo electrónico y detalles del proyecto."}
          </p>
        </section>

        {/* 2. How We Use */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "2. How We Use Your Information" : "2. Cómo Utilizamos su Información"}
          </h2>
          <p>
            {isEnglish
              ? "We use your information to respond to inquiries, provide estimates, schedule services, improve our website, and communicate regarding your project."
              : "Utilizamos su información para responder consultas, proporcionar cotizaciones, programar servicios, mejorar nuestro sitio web y comunicarnos respecto a su proyecto."}
          </p>
        </section>

        {/* 3. Sharing */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "3. Information Sharing" : "3. Compartición de Información"}
          </h2>
          <p>
            {isEnglish
              ? "We do not sell your personal information. We may share information with trusted service providers solely for business operations such as hosting, email communication, or analytics."
              : "No vendemos su información personal. Podemos compartir información con proveedores de servicios de confianza únicamente para operaciones comerciales como alojamiento web, comunicación por correo electrónico o análisis."}
          </p>
        </section>

        {/* 4. Cookies */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "4. Cookies & Analytics" : "4. Cookies y Analítica"}
          </h2>
          <p>
            {isEnglish
              ? "Our website may use cookies or analytics tools to improve user experience and measure website performance."
              : "Nuestro sitio web puede utilizar cookies o herramientas de análisis para mejorar la experiencia del usuario y medir el rendimiento del sitio."}
          </p>
        </section>

        {/* 5. Data Security */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "5. Data Security" : "5. Seguridad de los Datos"}
          </h2>
          <p>
            {isEnglish
              ? "We implement reasonable administrative, technical, and physical safeguards to protect your information."
              : "Implementamos medidas administrativas, técnicas y físicas razonables para proteger su información."}
          </p>
        </section>

        {/* 6. Texas Jurisdiction */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "6. Jurisdiction" : "6. Jurisdicción"}
          </h2>
          <p>
            {isEnglish
              ? "This Privacy Policy is governed by the laws of the State of Texas, United States."
              : "Esta Política de Privacidad se rige por las leyes del Estado de Texas, Estados Unidos."}
          </p>
        </section>

        {/* 7. Contact */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "7. Contact Us" : "7. Contáctenos"}
          </h2>
          <p>
            {isEnglish
              ? "If you have any questions regarding this Privacy Policy, please contact us through our website."
              : "Si tiene alguna pregunta sobre esta Política de Privacidad, comuníquese con nosotros a través de nuestro sitio web."}
          </p>
        </section>

      </div>
    </main>
  );
}