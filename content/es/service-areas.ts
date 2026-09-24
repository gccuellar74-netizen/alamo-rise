export const serviceAreasPage = {
  hero: {
    eyebrow: "Áreas de Servicio",

    title:
      "Remodelación Residencial y Mejoras para el Hogar en el Área de San Antonio",

    description:
      "Alamo Rise Home Solutions atiende a propietarios en San Antonio, Texas con servicios residenciales de remodelación, reparaciones y mejoras para el hogar.",

    primaryCta: "Comienza Tu Proyecto",

    secondaryCta: "Ver Servicios",
  },

  intro: {
    eyebrow: "Servicio Local",

    title:
      "Enfocados en Atender a Propietarios del Mercado de San Antonio",

    description:
      "San Antonio es actualmente el mercado principal confirmado para Alamo Rise Home Solutions.",

    secondaryDescription:
      "Solo deben agregarse otras ciudades y comunidades después de que la empresa confirme que acepta proyectos activamente en esas ubicaciones.",
  },

  confirmedAreas: {
    eyebrow: "Área de Servicio Confirmada",

    title: "Dónde Atendemos Actualmente",

    description:
      "El siguiente mercado es el que actualmente está confirmado para el sitio web.",

    areas: [
      {
        city: "San Antonio",
        state: "Texas",
        label: "San Antonio, TX",
      },
    ],
  },

  availability: {
    eyebrow: "¿Fuera de San Antonio?",

    title:
      "¿Tienes un Proyecto Cerca de San Antonio? Consulta Disponibilidad.",

    description:
      "Si tu propiedad está fuera de San Antonio, contacta a Alamo Rise antes de asumir que tu ubicación forma parte del área actual de servicio.",

    note:
      "La disponibilidad del servicio puede depender de la ubicación, alcance y programación del proyecto.",
  },

  services: {
    eyebrow: "Servicios Residenciales",

    title:
      "Servicios de Mejoras para el Hogar Disponibles en el Mercado Confirmado",

    description:
      "Los propietarios pueden contactar a Alamo Rise sobre distintas necesidades de remodelación y mejoras residenciales.",

    items: [
      "Remodelación de Cocinas",
      "Remodelación de Baños",
      "Remodelación Interior",
      "Pisos",
      "Drywall",
      "Pintura Interior y Exterior",
      "Siding",
      "Ventanas y Puertas",
      "Patios",
      "Pérgolas",
      "Reparaciones y Mejoras Generales del Hogar",
    ],

    cta: "Explorar Todos los Servicios",
  },

  localSeo: {
    eyebrow: "Remodelación Local",

    title:
      "Servicios de Remodelación para Propietarios en San Antonio",

    description:
      "El sitio está estructurado alrededor de San Antonio como mercado local confirmado, para que la información de servicios, proyectos y señales de búsqueda local se mantengan precisas.",

    points: [
      {
        title: "Información de Ubicación Correcta",
        description:
          "Solo deben publicarse como áreas activas aquellas ubicaciones que la empresa realmente haya confirmado.",
      },
      {
        title: "Contenido Local Relevante",
        description:
          "Las páginas de servicio deben enfocarse en las necesidades reales y la intención de búsqueda de los propietarios del mercado atendido.",
      },
      {
        title: "Sin Páginas Locales Falsas",
        description:
          "No crearemos decenas de páginas de ciudades donde la empresa no haya confirmado que presta servicio.",
      },
    ],
  },

  cta: {
    eyebrow: "Confirma la Ubicación de Tu Proyecto",

    title:
      "¿Planeando una Remodelación en San Antonio o Alrededores?",

    description:
      "Cuéntanos dónde se encuentra tu propiedad y qué quieres mejorar para poder conversar sobre disponibilidad.",

    primaryCta: "Solicita una Cotización Gratis",

    secondaryCta: "Explorar Servicios",
  },

  seo: {
    title:
      "Áreas de Servicio de Remodelación | Alamo Rise San Antonio TX",

    description:
      "Consulta el área de servicio confirmada de Alamo Rise Home Solutions y explora servicios residenciales de remodelación y mejoras para el hogar en San Antonio, Texas.",
  },
} as const;

export type SpanishServiceAreasPageDictionary =
  typeof serviceAreasPage;