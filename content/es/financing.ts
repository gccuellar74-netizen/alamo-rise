export const financingPage = {
  hero: {
    eyebrow: "Financiamiento de Proyectos",

    title:
      "Información de Financiamiento para Proyectos de Remodelación",

    description:
      "Los detalles de financiamiento de Alamo Rise Home Solutions están pendientes de verificación. Esta página solo publicará opciones de financiamiento después de confirmar los programas, proveedores y condiciones disponibles.",

    primaryCta: "Consulta Sobre Tu Proyecto",

    secondaryCta: "Ver Servicios",
  },

  status: {
    eyebrow: "Estado Actual",

    title:
      "La Disponibilidad de Financiamiento Aún No Está Confirmada",

    description:
      "Actualmente no contamos con suficiente información verificada para afirmar que Alamo Rise Home Solutions ofrece financiamiento.",

    secondaryDescription:
      "En lugar de anunciar pagos mensuales, tasas promocionales o condiciones de aprobación no confirmadas, esta página permanecerá transparente hasta contar con información correcta.",

    badge: "Pendiente de Verificación",
  },

  futureInformation: {
    eyebrow: "Qué Publicaremos",

    title:
      "Los Detalles de Financiamiento Deben Ser Específicos y Verificables",

    description:
      "Si el financiamiento llega a estar disponible, los propietarios deben poder entender las condiciones básicas antes de considerarlo como parte de una decisión de remodelación.",

    items: [
      {
        title: "Proveedor de Financiamiento",
        description:
          "La empresa o institución financiera responsable del programa de financiamiento.",
      },
      {
        title: "Requisitos de Elegibilidad",
        description:
          "Cualquier requisito aplicable de crédito, proyecto o solicitante que pueda divulgarse correctamente.",
      },
      {
        title: "Tasas y Plazos",
        description:
          "Tasas de interés, periodos de pago y otras condiciones cuando estén disponibles y sea apropiado publicarlas.",
      },
      {
        title: "Ofertas Promocionales",
        description:
          "Cualquier promoción temporal debe incluir sus condiciones reales y fechas de vencimiento.",
      },
      {
        title: "Proceso de Solicitud",
        description:
          "Los propietarios deben entender si solicitan directamente con un prestamista o mediante otro proceso verificado.",
      },
      {
        title: "Divulgaciones Importantes",
        description:
          "Las divulgaciones requeridas deben presentarse claramente y no ocultarse dentro de texto publicitario.",
      },
    ],
  },

  caution: {
    eyebrow: "Antes de Utilizar Financiamiento",

    title:
      "Compara el Costo Total, No Solo el Pago Mensual",

    description:
      "Cuando exista financiamiento, los propietarios deben evaluar más que el monto anunciado del pago mensual. La tasa de interés, el plazo, las comisiones y el costo total de pago pueden cambiar considerablemente el costo real de una remodelación.",

    points: [
      "Revisa la tasa de interés o APR",
      "Comprende el plazo de pago",
      "Revisa comisiones de apertura u otros cargos",
      "Confirma si las tasas promocionales tienen vencimiento",
      "Compara el monto total a pagar",
      "Lee las divulgaciones del prestamista antes de firmar",
    ],
  },

  projectPlanning: {
    eyebrow: "Planeación del Proyecto",

    title:
      "Primero Entiende el Proyecto Antes de Decidir Cómo Pagarlo",

    description:
      "Una decisión de financiamiento tiene más sentido después de entender mejor el alcance del proyecto y la inversión esperada.",

    steps: [
      {
        number: "01",
        title: "Describe el Proyecto",
        description:
          "Comienza indicando qué área de la casa quieres remodelar, reparar o mejorar.",
      },
      {
        number: "02",
        title: "Define el Alcance",
        description:
          "Aclara los trabajos considerados para entender mejor las necesidades del proyecto.",
      },
      {
        number: "03",
        title: "Habla del Presupuesto",
        description:
          "Considera el presupuesto disponible y si realmente sería necesario utilizar financiamiento externo.",
      },
      {
        number: "04",
        title: "Revisa Opciones Verificadas",
        description:
          "Si existe financiamiento, revisa las condiciones reales y divulgaciones antes de tomar una decisión.",
      },
    ],
  },

  transparency: {
    eyebrow: "Sin Afirmaciones de Financiamiento No Verificadas",

    title:
      "No Publicaremos Condiciones que No Hayan Sido Confirmadas.",

    description:
      "Este sitio no mostrará pagos mensuales inventados, promociones de cero interés, afirmaciones de aprobación o relaciones con prestamistas sin verificación.",

    note:
      "Las ofertas de financiamiento pueden influir considerablemente en una decisión de compra, por lo que la precisión es especialmente importante.",
  },

  cta: {
    eyebrow: "¿Planeando una Remodelación?",

    title:
      "Comienza con los Detalles del Proyecto.",

    description:
      "Cuéntanos qué quieres mejorar en tu hogar. Las preguntas sobre financiamiento podrán analizarse por separado cuando existan opciones verificadas.",

    primaryCta: "Comienza Tu Proyecto",

    secondaryCta: "Explorar Servicios",
  },

  seo: {
    title:
      "Información de Financiamiento para Remodelación | Alamo Rise",

    description:
      "Consulta información de financiamiento y el estado actual de disponibilidad para proyectos de remodelación y mejoras con Alamo Rise Home Solutions.",
  },
} as const;

export type SpanishFinancingPageDictionary =
  typeof financingPage;