import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{
    lang: "en" | "es";
    slug: string;
  }>;
};

type ServiceContent = {
  title: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  contentTitle: string;
  contentText: string;
  benefits: string[];
};

export default async function ServicePage({ params }: Props) {
  const { lang, slug } = await params;
  const isEnglish = lang === "en";

  const services: Record<string, ServiceContent> = {

    // ✅ 1. KITCHEN
    "kitchen-remodeling": {
      title: isEnglish ? "Kitchen Remodeling" : "Remodelación de Cocinas",
      description: isEnglish
        ? "Modern kitchen designs that increase your home's value and functionality."
        : "Diseños modernos de cocina que aumentan el valor y funcionalidad de tu hogar.",
      heroImage: "/images/kitchen.png",
      secondaryImage: "/images/kitchen-2.png",
      contentTitle: isEnglish
        ? "Transform Your Kitchen Into the Heart of Your Home"
        : "Transforma tu Cocina en el Corazón de tu Hogar",
      contentText: isEnglish
        ? "We design and build modern kitchens tailored to your lifestyle."
        : "Diseñamos cocinas modernas adaptadas a tu estilo de vida.",
      benefits: isEnglish
        ? ["Custom cabinetry", "Premium countertops", "Modern lighting", "High-end finishes"]
        : ["Gabinetes personalizados", "Encimeras premium", "Iluminación moderna", "Acabados de alta calidad"],
    },

    // (✅ TODO TU OBJETO services SE MANTIENE EXACTAMENTE IGUAL)
    // 👇👇👇 NO LO MODIFIQUÉ 👇👇👇

    "bathroom-renovation": {
      title: isEnglish ? "Bathroom Renovation" : "Renovación de Baños",
      description: isEnglish
        ? "Elegant and modern bathrooms designed for comfort."
        : "Baños elegantes y modernos diseñados para comodidad.",
      heroImage: "/images/bathroom.png",
      secondaryImage: "/images/bathroom2.png",
      contentTitle: isEnglish
        ? "Upgrade Your Bathroom With Style"
        : "Renueva tu Baño con Estilo",
      contentText: isEnglish
        ? "We transform outdated bathrooms into spa-like spaces."
        : "Transformamos baños antiguos en espacios modernos tipo spa.",
      benefits: isEnglish
        ? ["Custom showers", "Modern vanities", "Luxury tiles", "Water-efficient fixtures"]
        : ["Duchas personalizadas", "Vanidades modernas", "Azulejos de lujo", "Accesorios eficientes"],
    },

    "roofing-services": {
      title: isEnglish ? "Roofing Services" : "Servicios de Techos",
      description: isEnglish
        ? "Durable roofing solutions that protect your home."
        : "Soluciones de techos duraderas que protegen tu hogar.",
      heroImage: "/images/roofing.png",
      secondaryImage: "/images/roofing2.png",
      contentTitle: isEnglish
        ? "Protect Your Home With Quality Roofing"
        : "Protege tu Hogar con un Techo de Calidad",
      contentText: isEnglish
        ? "We install and repair residential roofing systems."
        : "Instalamos y reparamos sistemas de techos residenciales.",
      benefits: isEnglish
        ? ["Roof installation", "Roof repairs", "Storm damage repair", "Shingle replacement"]
        : ["Instalación de techos", "Reparación de techos", "Daños por tormenta", "Reemplazo de tejas"],
    },

    "drywall-painting": {
      title: isEnglish ? "Drywall & Painting" : "Driwall y Pintura",
      description: isEnglish
        ? "Flawless walls and professional finishes."
        : "Paredes perfectas y acabados profesionales.",
      heroImage: "/images/drywall.png",
      secondaryImage: "/images/drywall2.png",
      contentTitle: isEnglish
        ? "Smooth Finishes That Transform Interiors"
        : "Acabados Perfectos que Transforman Espacios",
      contentText: isEnglish
        ? "We provide expert drywall installation and painting."
        : "Ofrecemos instalación profesional de drywall y pintura.",
      benefits: isEnglish
        ? ["Drywall installation", "Interior painting", "Exterior painting", "Texture finishes"]
        : ["Instalación de drywall", "Pintura interior", "Pintura exterior", "Texturizados"],
    },

    "flooring-installation": {
      title: isEnglish ? "Flooring Installation" : "Instalación de Pisos",
      description: isEnglish
        ? "Premium flooring solutions for every space."
        : "Soluciones premium de pisos para cualquier espacio.",
      heroImage: "/images/flooring.png",
      secondaryImage: "/images/flooring2.png",
      contentTitle: isEnglish
        ? "Beautiful Floors That Last"
        : "Pisos Hermosos y Duraderos",
      contentText: isEnglish
        ? "We install hardwood, tile, vinyl and laminate flooring."
        : "Instalamos pisos de madera, cerámica, vinil y laminado.",
      benefits: isEnglish
        ? ["Hardwood flooring", "Tile installation", "Vinyl flooring", "Laminate floors"]
        : ["Pisos de madera", "Instalación de cerámica", "Pisos de vinil", "Pisos laminados"],
    },

    "exterior-siding": {
      title: isEnglish ? "Exterior Siding" : "Revestimiento Exterior",
      description: isEnglish
        ? "Enhance curb appeal with modern siding."
        : "Mejora la fachada con revestimiento moderno.",
      heroImage: "/images/siding.png",
      secondaryImage: "/images/siding2.png",
      contentTitle: isEnglish
        ? "Upgrade Your Home's Exterior"
        : "Renueva el Exterior de tu Hogar",
      contentText: isEnglish
        ? "We install durable and energy-efficient siding."
        : "Instalamos revestimientos duraderos y eficientes.",
      benefits: isEnglish
        ? ["Vinyl siding", "Fiber cement", "Weather protection", "Energy efficiency"]
        : ["Revestimiento vinil", "Fibrocemento", "Protección climática", "Eficiencia energética"],
    },

    "windows-doors": {
      title: isEnglish ? "Windows & Doors" : "Ventanas y Puertas",
      description: isEnglish
        ? "Energy-efficient windows and secure doors."
        : "Ventanas eficientes y puertas seguras.",
      heroImage: "/images/windows.png",
      secondaryImage: "/images/windows2.png",
      contentTitle: isEnglish
        ? "Improve Comfort & Security"
        : "Mejora Confort y Seguridad",
      contentText: isEnglish
        ? "Professional installation of modern windows and doors."
        : "Instalación profesional de ventanas y puertas modernas.",
      benefits: isEnglish
        ? ["Window replacement", "Door installation", "Energy savings", "Modern designs"]
        : ["Reemplazo de ventanas", "Instalación de puertas", "Ahorro energético", "Diseños modernos"],
    },

    "patios-pergolas": {
      title: isEnglish ? "Patios & Pergolas" : "Patios y Pérgolas",
      description: isEnglish
        ? "Create outdoor spaces for relaxation."
        : "Crea espacios exteriores para relajación.",
      heroImage: "/images/patio.png",
      secondaryImage: "/images/patio2.png",
      contentTitle: isEnglish
        ? "Enjoy Outdoor Living"
        : "Disfruta tu Espacio Exterior",
      contentText: isEnglish
        ? "We design and build custom patios and pergolas."
        : "Diseñamos y construimos patios y pérgolas personalizados.",
      benefits: isEnglish
        ? ["Custom patios", "Wood pergolas", "Outdoor upgrades", "Durable materials"]
        : ["Patios personalizados", "Pérgolas de madera", "Mejoras exteriores", "Materiales duraderos"],
    },

    "general-repairs": {
      title: isEnglish ? "General Repairs" : "Reparaciones Generales",
      description: isEnglish
        ? "Reliable repair services for your home."
        : "Servicios confiables de reparación para tu hogar.",
      heroImage: "/images/repairs.png",
      secondaryImage: "/images/repairs2.png",
      contentTitle: isEnglish
        ? "Fast & Professional Repairs"
        : "Reparaciones Rápidas y Profesionales",
      contentText: isEnglish
        ? "We handle home repairs with efficiency and quality."
        : "Realizamos reparaciones del hogar con eficiencia y calidad.",
      benefits: isEnglish
        ? ["Minor repairs", "Maintenance work", "Home fixes", "Quick service"]
        : ["Reparaciones menores", "Mantenimiento", "Arreglos del hogar", "Servicio rápido"],
    },
  };

  const service = services[slug];
  if (!service) return notFound();

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src={service.heroImage} alt={service.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-5xl px-6 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">
            {service.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {service.description}
          </p>

          <Link
            href={`/${lang}#contact`}
            className="inline-block mt-8 rounded-full bg-accent px-8 py-4 text-white font-semibold shadow-lg transition hover:scale-105"
          >
            {isEnglish ? "Get a Free Quote" : "Solicita una Cotización"}
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {service.contentTitle}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {service.contentText}
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              {service.benefits.map((benefit, index) => (
                <li key={index}>✔ {benefit}</li>
              ))}
            </ul>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={service.secondaryImage}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ✅ NUEVA SECCIÓN CTA FINAL (Conversion Booster) */}
      <section className="py-20 px-6 bg-slate-900 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-bold">
          {isEnglish
            ? "Ready to Start Your Project?"
            : "¿Listo para comenzar tu proyecto?"}
        </h3>

        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          {isEnglish
            ? "Contact us today and get a free estimate from our expert team."
            : "Contáctanos hoy y recibe una cotización gratuita de nuestro equipo experto."}
        </p>

        <Link
          href={`/${lang}#contact`}
          className="inline-block mt-8 rounded-full bg-accent px-8 py-4 text-white font-semibold shadow-lg transition hover:scale-105"
        >
          {isEnglish ? "Request Free Quote" : "Solicitar Cotización"}
        </Link>
      </section>

    </main>
  );
}