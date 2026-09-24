export const common = {
  locale: "es",

  languageName: "Español",

  actions: {
    getFreeEstimate: "Solicita una Cotización Gratis",
    callNow: "Llámanos",
    learnMore: "Conoce Más",
    viewAllServices: "Ver Todos los Servicios",
    viewProjects: "Ver Proyectos",
    readReviews: "Leer Reseñas",
    readGoogleReviews: "Leer Nuestras Reseñas en Google",
    contactUs: "Contáctanos",
    submit: "Enviar",
    sending: "Enviando...",
    backHome: "Volver al Inicio",
  },

  navigation: {
    home: "Inicio",
    services: "Servicios",
    projects: "Proyectos",
    reviews: "Reseñas",
    about: "Nosotros",
    serviceAreas: "Áreas de Servicio",
    financing: "Financiamiento",
    contact: "Contacto",
  },

  trust: {
    localTeam: "Equipo Local en San Antonio",
    insured: "Asegurados",
    workmanshipWarranty: "Garantía de Mano de Obra",
    financingAvailable: "Financiamiento Disponible",
    freeEstimates: "Cotizaciones Gratis",
  },

  forms: {
    estimateTitle: "Cuéntanos Sobre Tu Proyecto",

    fields: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo Electrónico",
      zipCode: "Código Postal",
      projectType: "Tipo de Proyecto",
      budgetRange: "Rango de Presupuesto",
      desiredStartDate: "Fecha Deseada de Inicio",
      projectDetails: "Detalles del Proyecto",
    },

    placeholders: {
      name: "Tu nombre",
      phone: "(210) 555-1234",
      email: "tu@ejemplo.com",
      zipCode: "78201",
      projectType: "Selecciona un tipo de proyecto",
      budgetRange: "Selecciona un rango de presupuesto",
      desiredStartDate: "Selecciona una fecha preferida",
      projectDetails:
        "Cuéntanos qué te gustaría remodelar o mejorar en tu hogar...",
    },

    projectTypes: {
      kitchen: "Remodelación de Cocinas",
      bathroom: "Remodelación de Baños",
      interior: "Remodelación Interior",
      flooring: "Pisos",
      drywall: "Drywall",
      painting: "Pintura Interior y Exterior",
      siding: "Revestimiento Exterior",
      windowsDoors: "Ventanas y Puertas",
      patios: "Patios",
      pergolas: "Pérgolas",
      generalRepairs: "Reparaciones y Mejoras Generales del Hogar",
      other: "Otro",
    },

    budgets: {
      under10k: "Menos de $10,000",
      from10kTo25k: "$10,000 – $25,000",
      from25kTo50k: "$25,000 – $50,000",
      from50kTo100k: "$50,000 – $100,000",
      over100k: "$100,000+",
      notSure: "Aún no estoy seguro",
    },

    validation: {
      required: "Este campo es obligatorio.",
      invalidEmail: "Ingresa un correo electrónico válido.",
      invalidPhone: "Ingresa un número de teléfono válido.",
      invalidZipCode: "Ingresa un código postal válido.",
    },

    success: {
      title: "Gracias.",
      message:
        "Recibimos la información de tu proyecto. Nos pondremos en contacto contigo utilizando los datos que proporcionaste.",
    },

    error: {
      title: "Ocurrió un problema.",
      message:
        "No pudimos enviar tu solicitud. Inténtalo nuevamente o llámanos directamente.",
    },

    privacy:
      "Al enviar este formulario, aceptas que Alamo Rise Home Solutions pueda contactarte en relación con tu solicitud de proyecto.",
  },

  testimonials: {
    placeholderLabel: "TESTIMONIO DE PRUEBA",
  },

  beforeAfter: {
    before: "Antes",
    after: "Después",
  },

  project: {
    locationLabel: "Ubicación",
    projectTypeLabel: "Tipo de Proyecto",
  },

  contact: {
    phone: "Teléfono",
    email: "Correo Electrónico",
    serviceArea: "Área de Servicio",
    businessHours: "Horario de Atención",
  },

  footer: {
    company: "Empresa",
    services: "Servicios",
    resources: "Recursos",
    copyrightPrefix: "©",
    rightsReserved: "Todos los derechos reservados.",
  },

  accessibility: {
    skipToContent: "Saltar al contenido principal",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación",
    switchToEnglish: "Cambiar a inglés",
    switchToSpanish: "Cambiar a español",
    previousSlide: "Diapositiva anterior",
    nextSlide: "Diapositiva siguiente",
  },
} as const;

export type SpanishCommonDictionary = typeof common;