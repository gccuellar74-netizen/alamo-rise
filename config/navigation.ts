import { routes } from "@/config/routes";

export const navigation = {
  en: [
    {
      label: "Home",
      href: routes.en.home,
    },
    {
      label: "Services",
      href: routes.en.services,
    },
    {
      label: "Projects",
      href: routes.en.projects,
    },
    {
      label: "Reviews",
      href: routes.en.reviews,
    },
    {
      label: "About",
      href: routes.en.about,
    },
    {
      label: "Service Areas",
      href: routes.en.serviceAreas,
    },
    {
      label: "Financing",
      href: routes.en.financing,
    },
    {
      label: "Contact",
      href: routes.en.contact,
    },
  ],

  es: [
    {
      label: "Inicio",
      href: routes.es.home,
    },
    {
      label: "Servicios",
      href: routes.es.services,
    },
    {
      label: "Proyectos",
      href: routes.es.projects,
    },
    {
      label: "Reseñas",
      href: routes.es.reviews,
    },
    {
      label: "Nosotros",
      href: routes.es.about,
    },
    {
      label: "Áreas de Servicio",
      href: routes.es.serviceAreas,
    },
    {
      label: "Financiamiento",
      href: routes.es.financing,
    },
    {
      label: "Contacto",
      href: routes.es.contact,
    },
  ],
} as const;

export const footerNavigation = {
  en: {
    company: [
      {
        label: "About",
        href: routes.en.about,
      },
      {
        label: "Projects",
        href: routes.en.projects,
      },
      {
        label: "Reviews",
        href: routes.en.reviews,
      },
      {
        label: "Contact",
        href: routes.en.contact,
      },
    ],

    services: [
      {
        label: "Kitchen Remodeling",
        href: routes.en.service.kitchenRemodeling,
      },
      {
        label: "Bathroom Remodeling",
        href: routes.en.service.bathroomRemodeling,
      },
      {
        label: "Interior Remodeling",
        href: routes.en.service.interiorRemodeling,
      },
      {
        label: "Flooring",
        href: routes.en.service.flooring,
      },
      {
        label: "Painting",
        href: routes.en.service.painting,
      },
      {
        label: "Patios",
        href: routes.en.service.patios,
      },
    ],

    resources: [
      {
        label: "Service Areas",
        href: routes.en.serviceAreas,
      },
      {
        label: "Financing",
        href: routes.en.financing,
      },
      {
        label: "Privacy Policy",
        href: routes.en.privacy,
      },
      {
        label: "Terms of Service",
        href: routes.en.terms,
      },
    ],
  },

  es: {
    company: [
      {
        label: "Nosotros",
        href: routes.es.about,
      },
      {
        label: "Proyectos",
        href: routes.es.projects,
      },
      {
        label: "Reseñas",
        href: routes.es.reviews,
      },
      {
        label: "Contacto",
        href: routes.es.contact,
      },
    ],

    services: [
      {
        label: "Remodelación de Cocinas",
        href: routes.es.service.kitchenRemodeling,
      },
      {
        label: "Remodelación de Baños",
        href: routes.es.service.bathroomRemodeling,
      },
      {
        label: "Remodelación Interior",
        href: routes.es.service.interiorRemodeling,
      },
      {
        label: "Pisos",
        href: routes.es.service.flooring,
      },
      {
        label: "Pintura",
        href: routes.es.service.painting,
      },
      {
        label: "Patios",
        href: routes.es.service.patios,
      },
    ],

    resources: [
      {
        label: "Áreas de Servicio",
        href: routes.es.serviceAreas,
      },
      {
        label: "Financiamiento",
        href: routes.es.financing,
      },
      {
        label: "Política de Privacidad",
        href: routes.es.privacy,
      },
      {
        label: "Términos de Servicio",
        href: routes.es.terms,
      },
    ],
  },
} as const;

export type NavigationLocale = keyof typeof navigation;