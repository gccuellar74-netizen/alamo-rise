interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function TermsPage({ params }: PageProps) {
  const { lang } = await params;
  const isEnglish = lang === "en";

  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold">
            {isEnglish ? "Terms of Service" : "Términos de Servicio"}
          </h1>

          <p className="text-gray-600 text-sm">
            {isEnglish
              ? "Last updated: May 4, 2026"
              : "Última actualización: 4 de mayo de 2026"}
          </p>
        </div>

        {/* 1. Services */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "1. Scope of Services" : "1. Alcance de los Servicios"}
          </h2>
          <p>
            {isEnglish
              ? "Alamo Rise Home Solutions provides residential remodeling and repair services in San Antonio, Texas and surrounding areas. All services are subject to written estimates and agreed project terms."
              : "Alamo Rise Home Solutions ofrece servicios de remodelación y reparación residencial en San Antonio, Texas y áreas circundantes. Todos los servicios están sujetos a cotizaciones por escrito y términos de proyecto acordados."}
          </p>
        </section>

        {/* 2. Estimates & Payments */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "2. Estimates and Payments" : "2. Cotizaciones y Pagos"}
          </h2>
          <p>
            {isEnglish
              ? "All estimates are based on the information available at the time of evaluation. Final pricing may vary depending on project conditions. Payment terms will be outlined in the written agreement."
              : "Todas las cotizaciones se basan en la información disponible al momento de la evaluación. El precio final puede variar dependiendo de las condiciones del proyecto. Los términos de pago se detallarán en el acuerdo por escrito."}
          </p>
        </section>

        {/* 3. Cancellations */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "3. Cancellations" : "3. Cancelaciones"}
          </h2>
          <p>
            {isEnglish
              ? "Project cancellations must be submitted in writing. Cancellation fees may apply depending on project progress and materials purchased."
              : "Las cancelaciones del proyecto deben enviarse por escrito. Pueden aplicarse cargos por cancelación dependiendo del progreso del proyecto y los materiales adquiridos."}
          </p>
        </section>

        {/* 4. Limited Warranty */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "4. Limited Warranty" : "4. Garantía Limitada"}
          </h2>
          <p>
            {isEnglish
              ? "We provide limited workmanship warranties as specified in the written agreement. Manufacturer warranties apply separately to materials used."
              : "Proporcionamos garantías limitadas de mano de obra según lo especificado en el acuerdo por escrito. Las garantías del fabricante aplican por separado a los materiales utilizados."}
          </p>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "5. Limitation of Liability" : "5. Limitación de Responsabilidad"}
          </h2>
          <p>
            {isEnglish
              ? "To the fullest extent permitted by Texas law, Alamo Rise Home Solutions shall not be liable for indirect, incidental, or consequential damages arising from services provided."
              : "En la máxima medida permitida por la ley de Texas, Alamo Rise Home Solutions no será responsable por daños indirectos, incidentales o consecuentes derivados de los servicios prestados."}
          </p>
        </section>

        {/* 6. Intellectual Property */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "6. Intellectual Property" : "6. Propiedad Intelectual"}
          </h2>
          <p>
            {isEnglish
              ? "All website content including logos, text, and images are the property of Alamo Rise Home Solutions and may not be reproduced without permission."
              : "Todo el contenido del sitio web incluyendo logotipos, textos e imágenes son propiedad de Alamo Rise Home Solutions y no pueden reproducirse sin autorización."}
          </p>
        </section>

        {/* 7. Governing Law */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "7. Governing Law" : "7. Ley Aplicable"}
          </h2>
          <p>
            {isEnglish
              ? "These Terms are governed by the laws of the State of Texas, United States. Any disputes shall be resolved in courts located in Bexar County, Texas."
              : "Estos Términos se rigen por las leyes del Estado de Texas, Estados Unidos. Cualquier disputa se resolverá en los tribunales ubicados en el Condado de Bexar, Texas."}
          </p>
        </section>

        {/* 8. Modifications */}
        <section className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "8. Changes to These Terms" : "8. Cambios a Estos Términos"}
          </h2>
          <p>
            {isEnglish
              ? "We reserve the right to update these Terms at any time. Updates will be reflected on this page."
              : "Nos reservamos el derecho de actualizar estos Términos en cualquier momento. Las actualizaciones se reflejarán en esta página."}
          </p>
        </section>

      </div>
    </main>
  );
}