export const projectsPage = {
  hero: {
    eyebrow: "Nuestro Trabajo",

    title: "Proyectos de Remodelación Residencial en el Área de San Antonio",

    description:
      "Explora ejemplos de remodelación y mejoras para el hogar de Alamo Rise Home Solutions conforme se agregue información verificada de proyectos reales.",

    primaryCta: "Comienza Tu Proyecto",

    secondaryCta: "Ver Servicios",
  },

  intro: {
    eyebrow: "Galería de Proyectos",

    title: "El Trabajo Real Debe Mostrarse con Información Real",

    description:
      "Estamos preparando esta sección para mostrar proyectos verificados de Alamo Rise con descripciones, ubicaciones y fotografías correctas.",

    secondaryDescription:
      "En lugar de llenar la página con imágenes de stock o ejemplos no verificados, solo se presentarán como trabajos realizados por Alamo Rise aquellos proyectos que hayan sido confirmados.",
  },

  gallery: {
    eyebrow: "Proyectos Destacados",

    title: "Ejemplos de Proyectos",

    description:
      "Los proyectos verificados aparecerán aquí conforme sean agregados al sitio.",

    emptyTitle: "Galería de Proyectos Verificados Próximamente",

    emptyDescription:
      "Actualmente estamos preparando información y fotografías reales para esta sección. Mientras tanto, puedes explorar nuestros servicios de remodelación o contactar a Alamo Rise sobre tu propio proyecto.",

    placeholderLabel: "Proyecto de Ejemplo",

    locationUnavailable:
      "Ubicación del proyecto pendiente de verificación",
  },

  categories: {
    title: "Tipos de Proyectos que Planeamos Mostrar",

    description:
      "Conforme contemos con trabajos verificados, la galería podrá incluir proyectos de diferentes categorías de mejoras residenciales.",

    items: [
      {
        title: "Remodelación de Cocinas",
        description:
          "Actualizaciones de cocina enfocadas en distribución, acabados, almacenamiento y funcionalidad diaria.",
      },
      {
        title: "Remodelación de Baños",
        description:
          "Mejoras de baños relacionadas con acabados, accesorios, almacenamiento y aprovechamiento del espacio.",
      },
      {
        title: "Remodelación Interior",
        description:
          "Mejoras residenciales en salas, recámaras y otras áreas interiores.",
      },
      {
        title: "Pisos y Acabados",
        description:
          "Pisos, pintura y trabajos de acabado coordinados con proyectos de remodelación más amplios.",
      },
      {
        title: "Mejoras Exteriores",
        description:
          "Patios, pérgolas y otras mejoras residenciales para espacios exteriores.",
      },
      {
        title: "Mejoras Generales del Hogar",
        description:
          "Reparaciones y mejoras coordinadas en distintas áreas de la vivienda.",
      },
    ],
  },

  trust: {
    eyebrow: "Por Qué Esto Importa",

    title:
      "Sin Portafolios Falsos. Sin Historial de Proyectos Inventado.",

    description:
      "Las fotografías de proyectos influyen en las decisiones de los propietarios, por lo que deben representar correctamente trabajos realizados por la empresa. Este sitio distinguirá claramente el trabajo verificado de Alamo Rise de cualquier contenido temporal.",
  },

  cta: {
    eyebrow: "Tu Proyecto Puede Ser el Próximo",

    title:
      "¿Estás Planeando una Remodelación o Mejora para Tu Hogar?",

    description:
      "Cuéntanos qué quieres mejorar y comparte algunos detalles sobre tu propiedad para comenzar la conversación.",

    primaryCta: "Solicita una Cotización Gratis",

    secondaryCta: "Explorar Servicios",
  },

  seo: {
    title:
      "Proyectos de Remodelación en San Antonio TX | Alamo Rise Home Solutions",

    description:
      "Explora proyectos residenciales verificados de remodelación y mejoras para el hogar de Alamo Rise Home Solutions en el área de San Antonio, Texas.",
  },
} as const;

export type SpanishProjectsPageDictionary =
  typeof projectsPage;