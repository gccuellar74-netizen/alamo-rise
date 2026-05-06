import Link from "next/link";
import {
  Hammer,
  Paintbrush,
  Wrench,
  Home,
  DoorOpen,
  Bath,
  CookingPot,
  LayoutGrid,
  Sun,
  ArrowRight,
} from "lucide-react";

type Props = {
  lang: "en" | "es";
};

export default function ServicesGrid({ lang }: Props) {
  const isEnglish = lang === "en";

  const services = [
    {
      title: isEnglish ? "Kitchen Remodeling" : "Remodelación de Cocinas",
      description: isEnglish
        ? "Modern designs that increase your home's value."
        : "Diseños modernos que aumentan el valor de tu hogar.",
      slug: "kitchen-remodeling",
      icon: CookingPot,
    },
    {
      title: isEnglish ? "Bathroom Renovation" : "Renovación de Baños",
      description: isEnglish
        ? "Elegant, durable bathrooms ready in less time."
        : "Baños elegantes y resistentes listos en menos tiempo.",
      slug: "bathroom-renovation",
      icon: Bath,
    },
    {
      title: isEnglish ? "Roofing Services" : "Servicios de Techos",
      description: isEnglish
        ? "Protect your home with expert roofing solutions."
        : "Protege tu hogar con soluciones expertas en techos.",
      slug: "roofing-services",
      icon: Home,
    },
    {
      title: isEnglish ? "Drywall & Painting" : "Drywall y Pintura",
      description: isEnglish
        ? "Professional finishes that refresh your spaces."
        : "Acabados profesionales que renuevan tus espacios.",
      slug: "drywall-painting",
      icon: Paintbrush,
    },
    {
      title: isEnglish ? "Flooring Installation" : "Instalación de Pisos",
      description: isEnglish
        ? "Durable floors for every style and need."
        : "Pisos duraderos y elegantes para cada estilo.",
      slug: "flooring-installation",
      icon: LayoutGrid,
    },
    {
      title: isEnglish ? "Exterior Siding" : "Revestimientos Exteriores",
      description: isEnglish
        ? "Improve your home's protection and appearance."
        : "Mejora la protección y apariencia exterior.",
      slug: "exterior-siding",
      icon: Hammer,
    },
    {
      title: isEnglish ? "Windows & Doors" : "Ventanas y Puertas",
      description: isEnglish
        ? "High-quality installation for better security."
        : "Instalación de alta calidad para mayor seguridad.",
      slug: "windows-doors",
      icon: DoorOpen,
    },
    {
      title: isEnglish ? "Patios & Pergolas" : "Patios y Pérgolas",
      description: isEnglish
        ? "Create outdoor spaces your family will love."
        : "Crea espacios exteriores para disfrutar en familia.",
      slug: "patios-pergolas",
      icon: Sun,
    },
    {
      title: isEnglish ? "General Repairs" : "Reparaciones Generales",
      description: isEnglish
        ? "From small fixes to major improvements."
        : "Desde pequeños arreglos hasta mejoras importantes.",
      slug: "general-repairs",
      icon: Wrench,
    },
  ];

  return (
  <section
    id="services"
    className="bg-gray-50 py-24 scroll-mt-24"
  >
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block mb-4 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
          {isEnglish ? "Professional Services" : "Servicios Profesionales"}
        </span>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
          {isEnglish
            ? "All-in-One Home Solutions"
            : "Soluciones Completas para tu Hogar"}
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          {isEnglish
            ? "Complete remodeling and repair solutions delivered with quality, speed and guaranteed results."
            : "Soluciones completas de remodelación y reparación con calidad, rapidez y garantía."}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.slug}
              href={`/${lang}/services/${service.slug}`}
              className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:scale-110">
                  <Icon size={28} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-heading font-semibold text-primary text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-center text-sm leading-relaxed">
                {service.description}
              </p>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-center gap-2 text-accent font-semibold text-sm">
                {isEnglish ? "View more..." : "Ver más..."}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);
}