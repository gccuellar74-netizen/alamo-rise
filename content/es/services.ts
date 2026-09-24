export const servicesPage = {
  hero: {
    eyebrow: "Servicios de Remodelación",

    title: "Soluciones Prácticas para Remodelar y Mejorar Tu Hogar.",

    description:
      "Alamo Rise Home Solutions ayuda a propietarios en el área de San Antonio a mejorar cocinas, baños, interiores, pisos, pintura, espacios exteriores y otras áreas del hogar.",

    primaryCta: "Solicita una Cotización Gratis",

    secondaryCta: "Cuéntanos Sobre Tu Proyecto",
  },

  intro: {
    eyebrow: "Lo Que Hacemos",

    title: "Un Solo Equipo para Diferentes Necesidades de Tu Hogar",

    description:
      "En lugar de coordinar varios contratistas por separado, los propietarios pueden trabajar con una sola empresa de remodelación para distintos tipos de mejoras residenciales.",

    secondaryDescription:
      "Ya sea que estés renovando una sola habitación o planeando mejoras en varias áreas de la casa, el objetivo es mantener la comunicación, el alcance del proyecto y los siguientes pasos lo más claros posible.",
  },

  grid: {
    eyebrow: "Nuestros Servicios",

    title: "Explora Nuestros Servicios de Remodelación y Mejoras para el Hogar",

    description:
      "Selecciona un servicio para conocer más sobre los tipos de proyectos residenciales en los que Alamo Rise Home Solutions puede ayudarte.",

    learnMore: "Conoce Más",
  },

  planning: {
    eyebrow: "¿No Sabes Por Dónde Empezar?",

    title: "Empieza por el Problema que Quieres Resolver.",

    description:
      "No necesitas tener decididos todos los materiales, acabados o detalles de construcción antes de contactarnos. Puedes comenzar explicando qué no funciona bien en tu espacio actual y qué te gustaría mejorar.",

    items: [
      {
        title: "Funcionalidad",
        description:
          "¿La distribución actual es incómoda, está anticuada o ya no funciona bien para tu familia?",
      },
      {
        title: "Apariencia",
        description:
          "¿Quieres actualizar acabados, colores, pisos u otros elementos visibles de tu hogar?",
      },
      {
        title: "Reparaciones",
        description:
          "¿Hay áreas dañadas o desgastadas que necesitan reparación antes de realizar otras mejoras?",
      },
      {
        title: "Espacios Exteriores",
        description:
          "¿Un patio, una pérgola u otra mejora exterior haría que tu espacio al aire libre fuera más útil y cómodo?",
      },
    ],
  },

  process: {
    eyebrow: "Cómo Comenzamos",

    title: "Un Primer Paso Claro para Tu Proyecto de Remodelación",

    description:
      "Cuéntanos qué quieres cambiar, dónde se encuentra la propiedad y qué información ya tienes sobre el proyecto. A partir de ahí se puede definir cuál es el siguiente paso adecuado.",

    steps: [
      {
        number: "01",
        title: "Describe el Proyecto",
        description:
          "Cuéntanos qué parte de tu hogar quieres remodelar, reparar o mejorar.",
      },
      {
        number: "02",
        title: "Comparte los Detalles",
        description:
          "Proporciona tu código postal, prioridades, fechas aproximadas y cualquier otra información útil.",
      },
      {
        number: "03",
        title: "Define el Siguiente Paso",
        description:
          "Alamo Rise puede revisar tu solicitud y conversar contigo sobre el siguiente paso adecuado para el proyecto.",
      },
    ],
  },

  cta: {
    eyebrow: "Comienza la Conversación",

    title: "¿Tienes un Proyecto de Remodelación en Mente?",

    description:
      "Cuéntanos qué te gustaría mejorar en tu hogar y comparte algunos detalles del proyecto para comenzar.",

    primaryCta: "Solicita una Cotización Gratis",

    secondaryCta: "Ver Nuestros Proyectos",
  },

  seo: {
    title:
      "Servicios de Remodelación en San Antonio TX | Alamo Rise Home Solutions",

    description:
      "Explora servicios residenciales de remodelación y mejoras para el hogar en San Antonio, TX, incluyendo cocinas, baños, pisos, pintura, patios, pérgolas y reparaciones generales.",
  },
} as const;

export type SpanishServicesPageDictionary =
  typeof servicesPage;