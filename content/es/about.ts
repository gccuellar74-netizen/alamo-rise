export const aboutPage = {
  hero: {
    eyebrow: "Sobre Alamo Rise",

    title:
      "Una Empresa de Mejoras para el Hogar Enfocada en Soluciones Claras y Prácticas.",

    description:
      "Alamo Rise Home Solutions atiende a propietarios en el área de San Antonio con servicios residenciales de remodelación, reparaciones y mejoras para el hogar enfocados en las necesidades de la propiedad y los objetivos del cliente.",

    primaryCta: "Comienza Tu Proyecto",

    secondaryCta: "Ver Servicios",
  },

  intro: {
    eyebrow: "Quiénes Somos",

    title:
      "Las Mejoras del Hogar Deben Comenzar Entendiendo el Problema.",

    description:
      "Cada proyecto de remodelación comienza por una razón diferente. Algunos propietarios necesitan mejorar la funcionalidad, otros quieren actualizar la apariencia, reparar áreas dañadas o aprovechar mejor el espacio existente.",

    secondaryDescription:
      "El primer paso es entender qué necesita cambiar antes de definir qué trabajo tiene sentido para la propiedad.",
  },

  approach: {
    eyebrow: "Nuestro Enfoque",

    title:
      "Alcance Claro. Planeación Práctica. Mejor Comunicación.",

    description:
      "Un proyecto de remodelación es más fácil de manejar cuando el propietario entiende qué trabajo se está considerando, qué decisiones deben tomarse y cuál es el siguiente paso.",

    items: [
      {
        number: "01",
        title: "Entender el Espacio",
        description:
          "Comenzar revisando las condiciones actuales de la vivienda e identificando las áreas que necesitan mejora.",
      },
      {
        number: "02",
        title: "Entender el Objetivo",
        description:
          "Definir qué quiere cambiar, reparar o mejorar el propietario antes de enfocarse en acabados específicos.",
      },
      {
        number: "03",
        title: "Definir el Alcance",
        description:
          "Aclarar el trabajo que se está considerando para que las expectativas y prioridades sean más fáciles de entender.",
      },
      {
        number: "04",
        title: "Comunicar el Siguiente Paso",
        description:
          "Mantener claras las preguntas, decisiones y próximos pasos conforme avanza la conversación del proyecto.",
      },
    ],
  },

  values: {
    eyebrow: "Lo Que Importa",

    title:
      "Una Mejor Experiencia para el Cliente Empieza por lo Básico.",

    description:
      "Los propietarios deben poder entender lo que se está proponiendo sin confusión innecesaria ni promesas exageradas.",

    items: [
      {
        title: "Comunicación Clara",
        description:
          "Explicar consideraciones y siguientes pasos de una manera directa y fácil de seguir.",
      },
      {
        title: "Expectativas Realistas",
        description:
          "Evitar promesas sobre alcance, tiempos o resultados antes de contar con suficiente información del proyecto.",
      },
      {
        title: "Respeto por el Hogar",
        description:
          "Tratar cada proyecto como trabajo realizado dentro del espacio personal de alguien, no simplemente como otra obra.",
      },
      {
        title: "Planeación Específica",
        description:
          "Evaluar las necesidades reales de la propiedad en lugar de asumir que todas las viviendas requieren la misma solución.",
      },
    ],
  },

  services: {
    eyebrow: "En Qué Podemos Ayudar",

    title:
      "Remodelación Residencial y Mejoras para el Hogar",

    description:
      "Alamo Rise Home Solutions está orientada a ayudar a propietarios con distintas necesidades de mejoras interiores y exteriores.",

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

  serviceArea: {
    eyebrow: "Servicio Local",

    title:
      "Atendiendo a Propietarios en el Área de San Antonio",

    description:
      "San Antonio es el mercado principal confirmado para Alamo Rise Home Solutions. Se podrán agregar otras áreas de servicio conforme sean verificadas.",

    cta: "Ver Áreas de Servicio",
  },

  transparency: {
    eyebrow: "Información Correcta y Transparente",

    title:
      "No Vamos a Inventar Credenciales, Historia ni Afirmaciones.",

    description:
      "Este sitio se está construyendo para separar la información empresarial verificada de afirmaciones todavía no confirmadas. Datos como años de operación, seguro, garantías, financiamiento, certificaciones e información del equipo solo se publicarán después de ser confirmados.",

    note:
      "La información precisa genera más confianza a largo plazo que las afirmaciones publicitarias exageradas.",
  },

  cta: {
    eyebrow: "Hablemos de Tu Hogar",

    title:
      "¿Tienes en Mente un Proyecto de Remodelación o Mejora?",

    description:
      "Cuéntanos qué quieres cambiar, reparar o mejorar y comparte algunos detalles de tu propiedad para comenzar la conversación.",

    primaryCta: "Solicita una Cotización Gratis",

    secondaryCta: "Ver Servicios",
  },

  seo: {
    title:
      "Sobre Alamo Rise Home Solutions | Remodelación en San Antonio",

    description:
      "Conoce Alamo Rise Home Solutions y su enfoque para proyectos residenciales de remodelación, reparaciones y mejoras para el hogar en el área de San Antonio, Texas.",
  },
} as const;

export type SpanishAboutPageDictionary =
  typeof aboutPage;