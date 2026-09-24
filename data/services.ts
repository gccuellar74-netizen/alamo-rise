import { routes } from "@/config/routes";

export const services = [
  {
    id: "kitchen-remodeling",

    en: {
      name: "Kitchen Remodeling",
      slug: "kitchen-remodeling",
      shortDescription:
        "Improve the layout, function and appearance of your kitchen with a remodeling plan designed around the way you use your home.",
      href: routes.en.service.kitchenRemodeling,
    },

    es: {
      name: "Remodelación de Cocinas",
      slug: "remodelacion-de-cocinas",
      shortDescription:
        "Mejora la distribución, funcionalidad y apariencia de tu cocina con un proyecto pensado para la forma en que utilizas tu hogar.",
      href: routes.es.service.kitchenRemodeling,
    },

    image:
      "/images/services/kitchen-remodeling-san-antonio.webp",

    imageAlt: {
      en: "Kitchen remodeling project in San Antonio, Texas",
      es: "Proyecto de remodelación de cocina en San Antonio, Texas",
    },

    featured: true,
  },

  {
    id: "bathroom-remodeling",

    en: {
      name: "Bathroom Remodeling",
      slug: "bathroom-remodeling",
      shortDescription:
        "Update your bathroom with improved layouts, practical storage, modern finishes and features that better fit your needs.",
      href: routes.en.service.bathroomRemodeling,
    },

    es: {
      name: "Remodelación de Baños",
      slug: "remodelacion-de-banos",
      shortDescription:
        "Renueva tu baño con una mejor distribución, almacenamiento práctico, acabados modernos y soluciones adaptadas a tus necesidades.",
      href: routes.es.service.bathroomRemodeling,
    },

    image:
      "/images/services/bathroom-remodeling-san-antonio.webp",

    imageAlt: {
      en: "Bathroom remodeling project in San Antonio, Texas",
      es: "Proyecto de remodelación de baño en San Antonio, Texas",
    },

    featured: true,
  },

  {
    id: "interior-remodeling",

    en: {
      name: "Interior Remodeling",
      slug: "interior-remodeling",
      shortDescription:
        "Refresh living spaces, bedrooms and other interior areas with coordinated remodeling, repair and finishing work.",
      href: routes.en.service.interiorRemodeling,
    },

    es: {
      name: "Remodelación Interior",
      slug: "remodelacion-interior",
      shortDescription:
        "Renueva salas, recámaras y otros espacios interiores con trabajos coordinados de remodelación, reparación y acabados.",
      href: routes.es.service.interiorRemodeling,
    },

    image:
      "/images/services/interior-remodeling-san-antonio.webp",

    imageAlt: {
      en: "Residential interior remodeling in San Antonio, Texas",
      es: "Remodelación residencial de interiores en San Antonio, Texas",
    },

    featured: true,
  },

  {
    id: "flooring",

    en: {
      name: "Flooring",
      slug: "flooring",
      shortDescription:
        "Replace outdated or damaged flooring and improve the look, durability and comfort of interior spaces.",
      href: routes.en.service.flooring,
    },

    es: {
      name: "Pisos",
      slug: "pisos",
      shortDescription:
        "Reemplaza pisos anticuados o dañados para mejorar la apariencia, durabilidad y comodidad de los espacios interiores.",
      href: routes.es.service.flooring,
    },

    image:
      "/images/services/flooring-san-antonio.webp",

    imageAlt: {
      en: "Residential flooring installation in San Antonio, Texas",
      es: "Instalación de pisos residenciales en San Antonio, Texas",
    },

    featured: false,
  },

  {
    id: "drywall",

    en: {
      name: "Drywall",
      slug: "drywall",
      shortDescription:
        "Repair, replace and finish drywall for renovations, damaged areas and residential improvement projects.",
      href: routes.en.service.drywall,
    },

    es: {
      name: "Drywall",
      slug: "drywall",
      shortDescription:
        "Repara, reemplaza y termina drywall para remodelaciones, áreas dañadas y proyectos de mejora residencial.",
      href: routes.es.service.drywall,
    },

    image:
      "/images/services/drywall-san-antonio.webp",

    imageAlt: {
      en: "Residential drywall installation and repair in San Antonio",
      es: "Instalación y reparación residencial de drywall en San Antonio",
    },

    featured: false,
  },

  {
    id: "painting",

    en: {
      name: "Interior & Exterior Painting",
      slug: "interior-exterior-painting",
      shortDescription:
        "Refresh your home with interior and exterior painting coordinated as part of your improvement project.",
      href: routes.en.service.painting,
    },

    es: {
      name: "Pintura Interior y Exterior",
      slug: "pintura-interior-exterior",
      shortDescription:
        "Renueva la apariencia de tu hogar con pintura interior y exterior coordinada como parte de tu proyecto de mejora.",
      href: routes.es.service.painting,
    },

    image:
      "/images/services/painting-san-antonio.webp",

    imageAlt: {
      en: "Interior and exterior residential painting in San Antonio",
      es: "Pintura residencial interior y exterior en San Antonio",
    },

    featured: false,
  },

  {
    id: "siding",

    en: {
      name: "Siding",
      slug: "siding",
      shortDescription:
        "Improve exterior appearance and help protect your home with properly planned siding replacement or upgrades.",
      href: routes.en.service.siding,
    },

    es: {
      name: "Revestimiento Exterior",
      slug: "revestimiento-exterior",
      shortDescription:
        "Mejora la apariencia exterior y ayuda a proteger tu hogar mediante reemplazos o mejoras de revestimiento correctamente planeadas.",
      href: routes.es.service.siding,
    },

    image:
      "/images/services/siding-san-antonio.webp",

    imageAlt: {
      en: "Residential siding improvement in San Antonio, Texas",
      es: "Mejora de revestimiento residencial en San Antonio, Texas",
    },

    featured: false,
  },

  {
    id: "windows-doors",

    en: {
      name: "Windows & Doors",
      slug: "windows-doors",
      shortDescription:
        "Replace or improve windows and doors to update appearance, function and everyday usability.",
      href: routes.en.service.windowsDoors,
    },

    es: {
      name: "Ventanas y Puertas",
      slug: "ventanas-y-puertas",
      shortDescription:
        "Reemplaza o mejora ventanas y puertas para actualizar la apariencia, funcionalidad y uso diario de tu hogar.",
      href: routes.es.service.windowsDoors,
    },

    image:
      "/images/services/windows-doors-san-antonio.webp",

    imageAlt: {
      en: "Residential window and door improvements in San Antonio",
      es: "Mejoras residenciales de ventanas y puertas en San Antonio",
    },

    featured: false,
  },

  {
    id: "patios",

    en: {
      name: "Patios",
      slug: "patios",
      shortDescription:
        "Create or improve outdoor living areas that make your backyard more comfortable and useful.",
      href: routes.en.service.patios,
    },

    es: {
      name: "Patios",
      slug: "patios",
      shortDescription:
        "Crea o mejora espacios exteriores que hagan tu patio más cómodo, funcional y agradable.",
      href: routes.es.service.patios,
    },

    image:
      "/images/services/patio-construction-san-antonio.webp",

    imageAlt: {
      en: "Residential patio improvement in San Antonio, Texas",
      es: "Mejora de patio residencial en San Antonio, Texas",
    },

    featured: false,
  },

  {
    id: "pergolas",

    en: {
      name: "Pergolas",
      slug: "pergolas",
      shortDescription:
        "Add shade, structure and visual interest to outdoor areas with a pergola designed for your space.",
      href: routes.en.service.pergolas,
    },

    es: {
      name: "Pérgolas",
      slug: "pergolas",
      shortDescription:
        "Agrega sombra, estructura y atractivo visual a tus espacios exteriores con una pérgola diseñada para tu hogar.",
      href: routes.es.service.pergolas,
    },

    image:
      "/images/services/pergola-san-antonio.webp",

    imageAlt: {
      en: "Residential pergola in San Antonio, Texas",
      es: "Pérgola residencial en San Antonio, Texas",
    },

    featured: false,
  },

  {
    id: "home-repairs",

    en: {
      name: "General Home Repairs & Improvements",
      slug: "home-repairs-improvements",
      shortDescription:
        "Handle repairs and practical home improvements with one team coordinating the work.",
      href: routes.en.service.homeRepairs,
    },

    es: {
      name: "Reparaciones y Mejoras del Hogar",
      slug: "reparaciones-y-mejoras-del-hogar",
      shortDescription:
        "Resuelve reparaciones y mejoras prácticas para el hogar con un equipo coordinando el trabajo.",
      href: routes.es.service.homeRepairs,
    },

    image:
      "/images/services/home-repairs-san-antonio.webp",

    imageAlt: {
      en: "Residential home repair and improvement project in San Antonio",
      es: "Proyecto residencial de reparaciones y mejoras en San Antonio",
    },

    featured: false,
  },
] as const;

export type Service = (typeof services)[number];
export type ServiceId = Service["id"];

export function getServiceById(
  id: ServiceId,
): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServiceBySlug(
  locale: "en" | "es",
  slug: string,
): Service | undefined {
  return services.find(
    (service) => service[locale].slug === slug,
  );
}