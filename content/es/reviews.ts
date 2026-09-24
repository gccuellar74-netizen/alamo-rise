export const reviewsPage = {
  hero: {
    eyebrow: "Reseñas de Clientes",

    title: "La Opinión Real Debe Venir de Clientes Reales.",

    description:
      "Esta página se está preparando para mostrar comentarios verificados de clientes de Alamo Rise Home Solutions conforme haya reseñas auténticas disponibles.",

    primaryCta: "Comienza Tu Proyecto",

    secondaryCta: "Ver Servicios",
  },

  intro: {
    eyebrow: "Opiniones Verificadas",

    title: "No Vamos a Llenar Esta Página con Testimonios Falsos.",

    description:
      "Las reseñas pueden influir mucho en la decisión de un propietario, por lo que los comentarios mostrados aquí deben ser reales, rastreables y representados con precisión.",

    secondaryDescription:
      "Solo las reseñas que puedan verificarse razonablemente mediante su fuente o información de respaldo deben mostrarse como testimonios de clientes.",
  },

  reviews: {
    eyebrow: "Lo Que Dicen los Clientes",

    title: "Reseñas Verificadas de Clientes",

    description:
      "Las reseñas auténticas aparecerán aquí conforme sean verificadas y agregadas al sitio.",

    emptyTitle: "Próximamente: Reseñas Verificadas",

    emptyDescription:
      "Actualmente estamos preparando esta sección con opiniones reales de clientes. Mientras no existan reseñas verificadas, no publicaremos testimonios o calificaciones inventadas.",

    sourceLabel: "Fuente",

    projectLabel: "Proyecto",

    ratingLabel: "Calificación",

    dateLabel: "Fecha",

    readOriginal: "Ver Reseña Original",
  },

  principles: {
    eyebrow: "Nuestro Estándar de Reseñas",

    title: "¿Qué Consideramos una Reseña Verificada?",

    description:
      "Antes de mostrar una reseña como opinión de un cliente, la información disponible debe ser suficientemente consistente para respaldar que proviene de una experiencia real.",

    items: [
      {
        title: "Fuente Identificable",
        description:
          "La reseña debe provenir de una fuente reconocible como Google, Facebook u otro canal identificable.",
      },
      {
        title: "Opinión Real del Cliente",
        description:
          "El testimonio debe reflejar un comentario realmente proporcionado por un cliente y no texto publicitario escrito para el sitio web.",
      },
      {
        title: "Representación Precisa",
        description:
          "El texto, la calificación y el contexto del proyecto no deben modificarse de manera que cambien el significado de la reseña original.",
      },
      {
        title: "Sin Calificaciones Inventadas",
        description:
          "Las estrellas y cantidades de reseñas solo deben mostrarse cuando estén respaldadas por datos reales.",
      },
    ],
  },

  trust: {
    eyebrow: "La Transparencia Importa",

    title: "La Confianza Vale Más que una Página Llena de Reseñas Perfectas.",

    description:
      "Un número menor de reseñas auténticas es más útil que una gran colección de testimonios que no pueden verificarse. Este sitio priorizará opiniones reales sobre cualquier prueba social fabricada.",
  },

  cta: {
    eyebrow: "¿Planeando un Proyecto?",

    title: "Cuéntanos Qué Quieres Mejorar en Tu Hogar.",

    description:
      "Comparte algunos detalles sobre tu proyecto de remodelación o mejora para el hogar y comienza la conversación con Alamo Rise Home Solutions.",

    primaryCta: "Solicita una Cotización Gratis",

    secondaryCta: "Explorar Servicios",
  },

  seo: {
    title:
      "Reseñas de Clientes | Alamo Rise Home Solutions San Antonio TX",

    description:
      "Lee reseñas y opiniones verificadas de clientes de Alamo Rise Home Solutions en el área de San Antonio, Texas.",
  },
} as const;

export type SpanishReviewsPageDictionary =
  typeof reviewsPage;