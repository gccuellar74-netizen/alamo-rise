export const contactPage = {
  hero: {
    eyebrow: "Contacta a Alamo Rise",

    title:
      "Cuéntanos Sobre Tu Proyecto de Remodelación o Mejora para el Hogar.",

    description:
      "Comparte algunos detalles sobre tu propiedad, el trabajo que estás considerando y qué te gustaría mejorar.",

    primaryCta: "Solicitar una Cotización",

    secondaryCta: "Ver Servicios",
  },

  intro: {
    eyebrow: "Comienza la Conversación",

    title:
      "Mientras Más Entendamos del Proyecto, Mejor Puede Ser la Primera Conversación.",

    description:
      "No necesitas tener decididos todos los materiales, acabados o detalles de construcción antes de contactarnos.",

    secondaryDescription:
      "Comienza explicando el problema que quieres resolver, el área de la casa involucrada y cualquier consideración de tiempo o presupuesto que ya conozcas.",
  },

  form: {
    eyebrow: "Solicitud de Proyecto",

    title:
      "Solicita una Cotización de Remodelación",

    description:
      "Completa el formulario con toda la información útil que puedas. Los campos obligatorios nos ayudan a entender los aspectos básicos del proyecto antes de dar seguimiento.",

    privacyNote:
      "Tu información debe utilizarse únicamente para responder a tu solicitud de proyecto y comunicaciones relacionadas.",
  },

  contactOptions: {
    eyebrow: "Información de Contacto",

    title:
      "Utiliza el Método de Contacto que Esté Disponible Actualmente",

    description:
      "El teléfono, correo electrónico y horario comercial verificados aparecerán aquí cuando esos datos sean confirmados.",

    phoneUnavailable:
      "Número telefónico pendiente de verificación",

    emailUnavailable:
      "Correo electrónico pendiente de verificación",

    hoursUnavailable:
      "Horario comercial pendiente de verificación",
  },

  projectPreparation: {
    eyebrow: "Antes de Enviar",

    title:
      "Algunos Detalles Pueden Hacer Tu Solicitud Mucho Más Útil.",

    description:
      "Proporcionar información clara ayuda a reducir preguntas innecesarias y hace que la conversación inicial sea más productiva.",

    items: [
      {
        title: "Tipo de Proyecto",
        description:
          "Indica si el proyecto involucra cocina, baño, pisos, pintura, trabajos exteriores u otra necesidad de mejora para el hogar.",
      },
      {
        title: "Ubicación de la Propiedad",
        description:
          "Incluye tu código postal para poder revisar la ubicación del proyecto.",
      },
      {
        title: "Objetivo Principal",
        description:
          "Explica qué quieres reparar, cambiar o mejorar.",
      },
      {
        title: "Tiempo",
        description:
          "Comparte una fecha o periodo aproximado de inicio si ya tienes uno en mente.",
      },
      {
        title: "Presupuesto",
        description:
          "Si tienes un rango de presupuesto estimado, inclúyelo para poder hablar de expectativas desde el inicio.",
      },
      {
        title: "Detalles Útiles",
        description:
          "Menciona daños existentes, problemas de distribución u otras condiciones que puedan afectar el proyecto.",
      },
    ],
  },

  serviceArea: {
    eyebrow: "Ubicación del Proyecto",

    title:
      "San Antonio Es Actualmente el Mercado de Servicio Confirmado",

    description:
      "Si tu propiedad está fuera de San Antonio, todavía puedes enviar la ubicación para consultar disponibilidad.",

    cta: "Ver Áreas de Servicio",
  },

  expectations: {
    eyebrow: "Qué Sucede Después",

    title:
      "Enviar el Formulario Inicia la Conversación.",

    description:
      "Enviar una solicitud no confirma automáticamente aceptación del proyecto, precio, fecha de inicio o financiamiento.",

    items: [
      "La información de tu proyecto puede ser revisada.",
      "Puede ser necesario hacer preguntas adicionales.",
      "La disponibilidad puede depender de la ubicación y alcance del proyecto.",
      "El precio solo debe discutirse después de contar con suficiente información.",
    ],
  },

  cta: {
    eyebrow: "Conoce Más Antes de Contactarnos",

    title:
      "¿Quieres Conocer los Tipos de Proyectos que Atendemos?",

    description:
      "Revisa los servicios actuales de remodelación y mejoras para el hogar antes de enviar tu solicitud.",

    primaryCta: "Explorar Servicios",

    secondaryCta: "Ver Proyectos",
  },

  seo: {
    title:
      "Contacta a Alamo Rise Home Solutions | Remodelación San Antonio TX",

    description:
      "Contacta a Alamo Rise Home Solutions sobre un proyecto residencial de remodelación, reparación o mejora para el hogar en el área de San Antonio, Texas.",
  },
} as const;

export type SpanishContactPageDictionary =
  typeof contactPage;