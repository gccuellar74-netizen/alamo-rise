export const routes = {
  en: {
    home: "/en",
    services: "/en/services",
    projects: "/en/projects",
    reviews: "/en/reviews",
    about: "/en/about",
    serviceAreas: "/en/service-areas",
    financing: "/en/financing",
    contact: "/en/contact",
    privacy: "/en/privacy",
    terms: "/en/terms",
    thankYou: "/en/thank-you",

    service: {
      kitchenRemodeling: "/en/services/kitchen-remodeling",
      bathroomRemodeling: "/en/services/bathroom-remodeling",
      interiorRemodeling: "/en/services/interior-remodeling",
      flooring: "/en/services/flooring",
      drywall: "/en/services/drywall",
      painting: "/en/services/interior-exterior-painting",
      siding: "/en/services/siding",
      windowsDoors: "/en/services/windows-doors",
      patios: "/en/services/patios",
      pergolas: "/en/services/pergolas",
      homeRepairs: "/en/services/home-repairs-improvements",
    },
  },

  es: {
    home: "/es",
    services: "/es/servicios",
    projects: "/es/proyectos",
    reviews: "/es/resenas",
    about: "/es/nosotros",
    serviceAreas: "/es/areas-de-servicio",
    financing: "/es/financiamiento",
    contact: "/es/contacto",
    privacy: "/es/privacidad",
    terms: "/es/terminos",
    thankYou: "/es/gracias",

    service: {
      kitchenRemodeling: "/es/servicios/remodelacion-de-cocinas",
      bathroomRemodeling: "/es/servicios/remodelacion-de-banos",
      interiorRemodeling: "/es/servicios/remodelacion-interior",
      flooring: "/es/servicios/pisos",
      drywall: "/es/servicios/drywall",
      painting: "/es/servicios/pintura-interior-exterior",
      siding: "/es/servicios/revestimiento-exterior",
      windowsDoors: "/es/servicios/ventanas-y-puertas",
      patios: "/es/servicios/patios",
      pergolas: "/es/servicios/pergolas",
      homeRepairs: "/es/servicios/reparaciones-y-mejoras-del-hogar",
    },
  },
} as const;

export type SupportedLocale = keyof typeof routes;