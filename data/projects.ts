export type ProjectCategory =
  | "kitchen-remodeling"
  | "bathroom-remodeling"
  | "interior-remodeling"
  | "flooring"
  | "painting"
  | "exterior-improvements"
  | "patios-pergolas"
  | "general-improvements";

export type Project = {
  id: string;
  verified: boolean;
  category: ProjectCategory;

  location: {
    city: string | null;
    state: string | null;
  };

  en: {
    title: string;
    summary: string;
    categoryLabel: string;
  };

  es: {
    title: string;
    summary: string;
    categoryLabel: string;
  };

  images: {
    cover: string;
    coverAlt: {
      en: string;
      es: string;
    };
  };
};

/*
 * IMPORTANT:
 *
 * These entries are placeholders only.
 *
 * They must NOT be presented publicly as completed Alamo Rise
 * projects until real project information and photographs
 * have been verified.
 */

export const projects: readonly Project[] = [
  {
    id: "placeholder-kitchen-remodel",

    verified: false,

    category: "kitchen-remodeling",

    location: {
      city: null,
      state: null,
    },

    en: {
      title: "Kitchen Remodeling",
      summary:
        "Placeholder for a future verified Alamo Rise kitchen remodeling project.",
      categoryLabel: "Kitchen Remodeling",
    },

    es: {
      title: "Remodelación de Cocina",
      summary:
        "Espacio reservado para un futuro proyecto verificado de remodelación de cocina de Alamo Rise.",
      categoryLabel: "Remodelación de Cocina",
    },

    images: {
      cover:
        "/images/projects/placeholder-kitchen-remodel.webp",

      coverAlt: {
        en: "Placeholder for a future kitchen remodeling project",
        es: "Espacio reservado para un futuro proyecto de remodelación de cocina",
      },
    },
  },

  {
    id: "placeholder-bathroom-remodel",

    verified: false,

    category: "bathroom-remodeling",

    location: {
      city: null,
      state: null,
    },

    en: {
      title: "Bathroom Remodeling",
      summary:
        "Placeholder for a future verified Alamo Rise bathroom remodeling project.",
      categoryLabel: "Bathroom Remodeling",
    },

    es: {
      title: "Remodelación de Baño",
      summary:
        "Espacio reservado para un futuro proyecto verificado de remodelación de baño de Alamo Rise.",
      categoryLabel: "Remodelación de Baño",
    },

    images: {
      cover:
        "/images/projects/placeholder-bathroom-remodel.webp",

      coverAlt: {
        en: "Placeholder for a future bathroom remodeling project",
        es: "Espacio reservado para un futuro proyecto de remodelación de baño",
      },
    },
  },

  {
    id: "placeholder-interior-remodel",

    verified: false,

    category: "interior-remodeling",

    location: {
      city: null,
      state: null,
    },

    en: {
      title: "Interior Remodeling",
      summary:
        "Placeholder for a future verified Alamo Rise interior remodeling project.",
      categoryLabel: "Interior Remodeling",
    },

    es: {
      title: "Remodelación Interior",
      summary:
        "Espacio reservado para un futuro proyecto verificado de remodelación interior de Alamo Rise.",
      categoryLabel: "Remodelación Interior",
    },

    images: {
      cover:
        "/images/projects/placeholder-interior-remodel.webp",

      coverAlt: {
        en: "Placeholder for a future interior remodeling project",
        es: "Espacio reservado para un futuro proyecto de remodelación interior",
      },
    },
  },
];

export const verifiedProjects = projects.filter(
  (project) => project.verified,
);

export function getProjectById(
  id: string,
): Project | undefined {
  return projects.find(
    (project) => project.id === id,
  );
}

export function getVerifiedProjectsByCategory(
  category: ProjectCategory,
): Project[] {
  return projects.filter(
    (project) =>
      project.verified &&
      project.category === category,
  );
}