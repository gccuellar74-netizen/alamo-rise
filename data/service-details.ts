import type { ServiceId } from "@/data/services";

type LocalizedServiceDetail = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  heading: string;
  overview: string;
  secondaryOverview: string;
  projectExamplesTitle: string;
  projectExamples: readonly string[];
  considerationsTitle: string;
  considerations: readonly string[];
};

export type ServiceDetailContent = {
  id: ServiceId;
  en: LocalizedServiceDetail;
  es: LocalizedServiceDetail;
};

export const serviceDetails = [
  {
    id: "kitchen-remodeling",

    en: {
      seoTitle:
        "Kitchen Remodeling San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Kitchen remodeling in San Antonio, TX for homeowners looking to improve layout, storage, finishes and everyday functionality.",

      eyebrow: "Kitchen Remodeling",

      heading:
        "Create a Kitchen That Works Better for Everyday Life",

      overview:
        "A kitchen remodel can address more than appearance. Layout, storage, lighting, work surfaces and the relationship between cooking, dining and living areas all affect how comfortably the space works.",

      secondaryOverview:
        "The project should begin by identifying what is limiting the current kitchen and which improvements matter most to the homeowner before finishes and other visual decisions are finalized.",

      projectExamplesTitle:
        "Kitchen Projects May Include",

      projectExamples: [
        "Cabinet and storage updates",
        "Countertop and backsplash improvements",
        "Flooring and painting",
        "Lighting and fixture updates",
        "Layout-related improvements",
        "Drywall and finish repairs",
      ],

      considerationsTitle:
        "Things to Consider Before Remodeling",

      considerations: [
        "How the kitchen is used each day",
        "Storage and workspace priorities",
        "Existing layout limitations",
        "Desired finishes and overall style",
      ],
    },

    es: {
      seoTitle:
        "Remodelación de Cocinas en San Antonio TX | Alamo Rise",

      seoDescription:
        "Remodelación de cocinas en San Antonio, TX para propietarios que buscan mejorar distribución, almacenamiento, acabados y funcionalidad.",

      eyebrow: "Remodelación de Cocinas",

      heading:
        "Crea una Cocina que Funcione Mejor para Tu Vida Diaria",

      overview:
        "La remodelación de una cocina puede resolver mucho más que la apariencia. La distribución, almacenamiento, iluminación, superficies de trabajo y relación con otras áreas influyen directamente en la funcionalidad del espacio.",

      secondaryOverview:
        "El proyecto debe comenzar identificando qué limita actualmente la cocina y cuáles son las mejoras más importantes antes de definir todos los acabados y decisiones visuales.",

      projectExamplesTitle:
        "El Proyecto Puede Incluir",

      projectExamples: [
        "Actualización de gabinetes y almacenamiento",
        "Mejoras de cubiertas y backsplash",
        "Pisos y pintura",
        "Iluminación y accesorios",
        "Mejoras relacionadas con la distribución",
        "Reparaciones de drywall y acabados",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Cómo utilizas diariamente la cocina",
        "Necesidades de almacenamiento y superficies",
        "Limitaciones de la distribución actual",
        "Acabados y estilo deseado",
      ],
    },
  },

  {
    id: "bathroom-remodeling",

    en: {
      seoTitle:
        "Bathroom Remodeling San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Bathroom remodeling in San Antonio, TX focused on improving functionality, finishes, storage and the overall use of the space.",

      eyebrow: "Bathroom Remodeling",

      heading:
        "Improve Comfort, Function and Appearance in Your Bathroom",

      overview:
        "Bathrooms have to combine durability, everyday function and visual appeal within a relatively compact space. A remodel can help address worn finishes, inefficient layouts, limited storage or an outdated appearance.",

      secondaryOverview:
        "Planning should consider how the bathroom is used, which existing elements will remain and which areas require the greatest improvement.",

      projectExamplesTitle:
        "Bathroom Projects May Include",

      projectExamples: [
        "Vanity and storage updates",
        "Tile and flooring improvements",
        "Painting and drywall repairs",
        "Fixture replacement",
        "Shower or tub-area improvements",
        "Lighting updates",
      ],

      considerationsTitle:
        "Things to Consider Before Remodeling",

      considerations: [
        "Daily bathroom use",
        "Storage requirements",
        "Existing moisture or surface damage",
        "Desired finishes and fixtures",
      ],
    },

    es: {
      seoTitle:
        "Remodelación de Baños en San Antonio TX | Alamo Rise",

      seoDescription:
        "Remodelación de baños en San Antonio, TX enfocada en mejorar funcionalidad, acabados, almacenamiento y uso del espacio.",

      eyebrow: "Remodelación de Baños",

      heading:
        "Mejora la Comodidad, Funcionalidad y Apariencia de Tu Baño",

      overview:
        "Los baños deben combinar durabilidad, funcionalidad diaria y buena apariencia dentro de un espacio relativamente compacto. Una remodelación puede corregir acabados desgastados, distribución poco práctica, almacenamiento insuficiente o una apariencia anticuada.",

      secondaryOverview:
        "La planeación debe considerar cómo utilizas el baño, qué elementos existentes permanecerán y cuáles son las áreas que necesitan mayor atención.",

      projectExamplesTitle:
        "El Proyecto Puede Incluir",

      projectExamples: [
        "Actualización de vanity y almacenamiento",
        "Mejoras de azulejo y pisos",
        "Pintura y reparación de drywall",
        "Reemplazo de accesorios",
        "Mejoras en áreas de regadera o tina",
        "Actualización de iluminación",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Uso diario del baño",
        "Necesidades de almacenamiento",
        "Daños existentes por humedad o desgaste",
        "Acabados y accesorios deseados",
      ],
    },
  },

  {
    id: "interior-remodeling",

    en: {
      seoTitle:
        "Interior Remodeling San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Interior remodeling services in San Antonio, TX for living rooms, bedrooms and other residential spaces that need functional or visual improvements.",

      eyebrow: "Interior Remodeling",

      heading:
        "Make Interior Spaces Feel More Useful and More Cohesive",

      overview:
        "Interior remodeling can help connect rooms visually, repair worn areas and update spaces that no longer fit the way the household uses the home.",

      secondaryOverview:
        "Projects can range from focused improvements in one room to coordinated updates across several interior spaces.",

      projectExamplesTitle:
        "Interior Projects May Include",

      projectExamples: [
        "Living room improvements",
        "Bedroom updates",
        "Drywall repairs",
        "Interior painting",
        "Flooring replacement",
        "Finish and trim improvements",
      ],

      considerationsTitle:
        "Things to Consider Before Remodeling",

      considerations: [
        "Which rooms need the most improvement",
        "How spaces connect visually",
        "Existing damage or repairs",
        "Priority areas and desired finishes",
      ],
    },

    es: {
      seoTitle:
        "Remodelación Interior en San Antonio TX | Alamo Rise",

      seoDescription:
        "Servicios de remodelación interior en San Antonio, TX para salas, recámaras y otros espacios residenciales.",

      eyebrow: "Remodelación Interior",

      heading:
        "Haz que los Espacios Interiores Sean Más Útiles y Coherentes",

      overview:
        "La remodelación interior puede ayudar a conectar visualmente diferentes habitaciones, reparar áreas desgastadas y actualizar espacios que ya no funcionan para las necesidades actuales del hogar.",

      secondaryOverview:
        "Los proyectos pueden ir desde mejoras específicas en una habitación hasta renovaciones coordinadas en varias áreas interiores.",

      projectExamplesTitle:
        "Los Proyectos Pueden Incluir",

      projectExamples: [
        "Mejoras en salas",
        "Actualización de recámaras",
        "Reparación de drywall",
        "Pintura interior",
        "Reemplazo de pisos",
        "Mejoras de molduras y acabados",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Qué habitaciones necesitan mayor atención",
        "Cómo se relacionan visualmente los espacios",
        "Daños o reparaciones existentes",
        "Áreas prioritarias y acabados deseados",
      ],
    },
  },

  {
    id: "flooring",

    en: {
      seoTitle:
        "Flooring Installation San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Residential flooring improvements in San Antonio, TX for homeowners replacing worn, damaged or outdated floors.",

      eyebrow: "Residential Flooring",

      heading:
        "Update the Foundation of Your Interior Design",

      overview:
        "Flooring has a major impact on how a home looks, feels and performs under everyday use. Replacing worn or outdated surfaces can significantly change an interior without requiring a full renovation.",

      secondaryOverview:
        "Selection should consider appearance, traffic, maintenance, room conditions and how the new flooring will transition into surrounding spaces.",

      projectExamplesTitle:
        "Flooring Projects May Include",

      projectExamples: [
        "Removal of existing flooring",
        "Flooring replacement",
        "Transitions between rooms",
        "Baseboard-related finishing",
        "Repairs associated with flooring work",
        "Coordinated interior updates",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Traffic and daily use",
        "Maintenance preferences",
        "Existing floor condition",
        "Transitions between rooms",
      ],
    },

    es: {
      seoTitle:
        "Instalación y Mejoras de Pisos en San Antonio TX | Alamo Rise",

      seoDescription:
        "Mejoras de pisos residenciales en San Antonio, TX para reemplazar superficies desgastadas, dañadas o anticuadas.",

      eyebrow: "Pisos Residenciales",

      heading:
        "Renueva una de las Bases Visuales Más Importantes de Tu Hogar",

      overview:
        "Los pisos tienen un impacto importante en la apariencia, sensación y funcionamiento diario de una casa. Reemplazar superficies dañadas o anticuadas puede transformar considerablemente un interior.",

      secondaryOverview:
        "La elección debe considerar apariencia, tráfico, mantenimiento, condiciones actuales y la transición hacia otras habitaciones.",

      projectExamplesTitle:
        "El Proyecto Puede Incluir",

      projectExamples: [
        "Retiro del piso existente",
        "Reemplazo de pisos",
        "Transiciones entre habitaciones",
        "Acabados relacionados con zoclos",
        "Reparaciones asociadas al trabajo",
        "Mejoras interiores coordinadas",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Tráfico y uso diario",
        "Preferencias de mantenimiento",
        "Condición del piso existente",
        "Transiciones entre habitaciones",
      ],
    },
  },

  {
    id: "drywall",

    en: {
      seoTitle:
        "Drywall Repair San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Residential drywall repair and improvement services in San Antonio, TX for damaged walls, renovations and interior updates.",

      eyebrow: "Drywall Services",

      heading:
        "Repair Damaged Walls and Prepare Interiors for Better Finishes",

      overview:
        "Drywall damage can affect the finished appearance of an entire room. Repairs may be needed because of previous construction work, impact damage, surface deterioration or other interior improvements.",

      secondaryOverview:
        "Proper preparation matters because imperfections can remain visible after painting if damaged areas are not addressed first.",

      projectExamplesTitle:
        "Drywall Work May Include",

      projectExamples: [
        "Wall repairs",
        "Ceiling repairs",
        "Patching damaged areas",
        "Finishing and surface preparation",
        "Drywall related to remodeling work",
        "Preparation before painting",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Location and extent of damage",
        "Condition of surrounding surfaces",
        "Associated remodeling work",
        "Required finish before painting",
      ],
    },

    es: {
      seoTitle:
        "Reparación de Drywall en San Antonio TX | Alamo Rise",

      seoDescription:
        "Reparación y mejoras de drywall residencial en San Antonio, TX para paredes dañadas, remodelaciones y renovaciones interiores.",

      eyebrow: "Servicios de Drywall",

      heading:
        "Repara Superficies Dañadas y Prepara Mejor Tus Interiores",

      overview:
        "Los daños en drywall pueden afectar la apariencia final de una habitación completa. Las reparaciones pueden ser necesarias por trabajos anteriores, golpes, deterioro o como parte de una remodelación.",

      secondaryOverview:
        "La preparación correcta es importante porque las imperfecciones pueden continuar siendo visibles después de pintar si no se corrigen adecuadamente.",

      projectExamplesTitle:
        "Los Trabajos Pueden Incluir",

      projectExamples: [
        "Reparación de paredes",
        "Reparación de plafones",
        "Parches en áreas dañadas",
        "Preparación y acabado de superficies",
        "Drywall relacionado con remodelaciones",
        "Preparación antes de pintura",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Ubicación y tamaño del daño",
        "Condición de superficies cercanas",
        "Trabajos de remodelación relacionados",
        "Acabado requerido antes de pintar",
      ],
    },
  },

  {
    id: "painting",

    en: {
      seoTitle:
        "Interior & Exterior Painting San Antonio TX | Alamo Rise",

      seoDescription:
        "Residential interior and exterior painting in San Antonio, TX as part of home remodeling, repairs and improvement projects.",

      eyebrow: "Residential Painting",

      heading:
        "Refresh Interior and Exterior Spaces with a Cleaner Finish",

      overview:
        "Painting can dramatically change the appearance of a home, but the finished result depends heavily on the condition and preparation of the underlying surfaces.",

      secondaryOverview:
        "Painting work can be coordinated with drywall repairs, remodeling and other home improvements so finishes are completed in the proper sequence.",

      projectExamplesTitle:
        "Painting Projects May Include",

      projectExamples: [
        "Interior walls",
        "Interior ceilings",
        "Trim and selected finishes",
        "Exterior surfaces",
        "Preparation and patching",
        "Painting related to remodeling projects",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Condition of existing surfaces",
        "Interior or exterior application",
        "Color and finish preferences",
        "Other repairs needed before painting",
      ],
    },

    es: {
      seoTitle:
        "Pintura Interior y Exterior en San Antonio TX | Alamo Rise",

      seoDescription:
        "Pintura residencial interior y exterior en San Antonio, TX como parte de remodelaciones, reparaciones y mejoras para el hogar.",

      eyebrow: "Pintura Residencial",

      heading:
        "Renueva Espacios Interiores y Exteriores con un Mejor Acabado",

      overview:
        "La pintura puede cambiar considerablemente la apariencia de una casa, pero el resultado final depende en gran medida de la condición y preparación de las superficies.",

      secondaryOverview:
        "Los trabajos de pintura pueden coordinarse con reparaciones de drywall, remodelaciones y otras mejoras para completar los acabados en el orden adecuado.",

      projectExamplesTitle:
        "Los Trabajos Pueden Incluir",

      projectExamples: [
        "Paredes interiores",
        "Plafones interiores",
        "Molduras y acabados seleccionados",
        "Superficies exteriores",
        "Preparación y reparación",
        "Pintura relacionada con remodelaciones",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Condición de las superficies",
        "Aplicación interior o exterior",
        "Preferencias de color y acabado",
        "Reparaciones necesarias antes de pintar",
      ],
    },
  },

  {
    id: "siding",

    en: {
      seoTitle:
        "Residential Siding San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Residential siding improvements in San Antonio, TX for homeowners updating damaged, worn or outdated exterior surfaces.",

      eyebrow: "Siding Improvements",

      heading:
        "Improve the Appearance and Condition of Your Home Exterior",

      overview:
        "Exterior siding contributes to the overall appearance of a home and helps form part of the building envelope. Damaged or deteriorated areas should be evaluated before cosmetic improvements are made.",

      secondaryOverview:
        "A siding project should account for existing conditions, the extent of replacement required and how new exterior finishes will coordinate with surrounding elements.",

      projectExamplesTitle:
        "Siding Projects May Include",

      projectExamples: [
        "Replacement of selected siding areas",
        "Exterior surface improvements",
        "Repairs connected to remodeling work",
        "Trim-related improvements",
        "Preparation for exterior finishes",
        "Coordination with other exterior work",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Existing exterior condition",
        "Extent of visible damage",
        "Areas requiring replacement",
        "Coordination with surrounding finishes",
      ],
    },

    es: {
      seoTitle:
        "Revestimiento Exterior Siding en San Antonio TX | Alamo Rise",

      seoDescription:
        "Mejoras de siding residencial en San Antonio, TX para actualizar superficies exteriores dañadas, desgastadas o anticuadas.",

      eyebrow: "Mejoras de Siding",

      heading:
        "Mejora la Apariencia y Condición Exterior de Tu Hogar",

      overview:
        "El siding forma parte importante de la apariencia exterior de una casa y del sistema que protege su envolvente. Las áreas deterioradas deben evaluarse antes de realizar mejoras únicamente cosméticas.",

      secondaryOverview:
        "El proyecto debe considerar las condiciones existentes, cuánto material requiere reemplazo y cómo los nuevos acabados se relacionarán con los elementos cercanos.",

      projectExamplesTitle:
        "El Proyecto Puede Incluir",

      projectExamples: [
        "Reemplazo de áreas seleccionadas de siding",
        "Mejoras de superficies exteriores",
        "Reparaciones asociadas con remodelaciones",
        "Mejoras de molduras",
        "Preparación para acabados exteriores",
        "Coordinación con otros trabajos exteriores",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Condición exterior existente",
        "Extensión del daño visible",
        "Áreas que requieren reemplazo",
        "Coordinación con acabados cercanos",
      ],
    },
  },

  {
    id: "windows-doors",

    en: {
      seoTitle:
        "Windows & Doors San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Residential window and door improvements in San Antonio, TX for homeowners updating appearance, operation and everyday usability.",

      eyebrow: "Windows & Doors",

      heading:
        "Improve Key Openings Throughout Your Home",

      overview:
        "Windows and doors have a direct impact on appearance, circulation and everyday use. Worn or outdated units can also make an otherwise updated room feel unfinished.",

      secondaryOverview:
        "Planning should consider the existing opening, surrounding finishes and whether additional repair work is needed around the installation area.",

      projectExamplesTitle:
        "Projects May Include",

      projectExamples: [
        "Exterior door improvements",
        "Interior door replacement",
        "Window-related improvements",
        "Trim repairs",
        "Finish work around openings",
        "Coordination with interior or exterior remodeling",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Existing opening dimensions",
        "Condition of surrounding finishes",
        "Door or window operation",
        "Related interior or exterior work",
      ],
    },

    es: {
      seoTitle:
        "Ventanas y Puertas en San Antonio TX | Alamo Rise",

      seoDescription:
        "Mejoras residenciales de ventanas y puertas en San Antonio, TX para actualizar apariencia, funcionamiento y uso cotidiano.",

      eyebrow: "Ventanas y Puertas",

      heading:
        "Mejora Elementos Clave en Diferentes Áreas de Tu Hogar",

      overview:
        "Las ventanas y puertas influyen directamente en la apariencia, circulación y uso cotidiano de una casa. Elementos desgastados o anticuados también pueden hacer que un espacio renovado se sienta incompleto.",

      secondaryOverview:
        "La planeación debe considerar la abertura existente, acabados cercanos y cualquier reparación adicional necesaria alrededor del área de instalación.",

      projectExamplesTitle:
        "Los Proyectos Pueden Incluir",

      projectExamples: [
        "Mejoras de puertas exteriores",
        "Reemplazo de puertas interiores",
        "Mejoras relacionadas con ventanas",
        "Reparación de molduras",
        "Acabados alrededor de aberturas",
        "Coordinación con remodelaciones interiores o exteriores",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Dimensiones de las aberturas existentes",
        "Condición de acabados cercanos",
        "Funcionamiento de puertas o ventanas",
        "Trabajos interiores o exteriores relacionados",
      ],
    },
  },

  {
    id: "patios",

    en: {
      seoTitle:
        "Patio Improvements San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Residential patio improvements in San Antonio, TX designed to make outdoor living areas more useful, comfortable and visually connected to the home.",

      eyebrow: "Patio Improvements",

      heading:
        "Create a More Useful Outdoor Living Area",

      overview:
        "A well-planned patio can extend the usable living space of a home into the backyard and create a better setting for relaxing, dining or spending time outdoors.",

      secondaryOverview:
        "The design should respond to the available space, how the area will be used and how the patio connects with the home and surrounding yard.",

      projectExamplesTitle:
        "Patio Projects May Include",

      projectExamples: [
        "Patio-area improvements",
        "Outdoor finish updates",
        "Repairs to existing outdoor spaces",
        "Connections to adjacent areas",
        "Painting and finish work",
        "Coordination with pergola projects",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Available outdoor space",
        "How the patio will be used",
        "Relationship to doors and walkways",
        "Desired level of shade and openness",
      ],
    },

    es: {
      seoTitle:
        "Mejoras de Patios en San Antonio TX | Alamo Rise",

      seoDescription:
        "Mejoras residenciales de patios en San Antonio, TX para crear áreas exteriores más útiles, cómodas y conectadas con el hogar.",

      eyebrow: "Mejoras de Patios",

      heading:
        "Crea un Espacio Exterior Más Útil para Tu Hogar",

      overview:
        "Un patio bien planeado puede extender el espacio útil de una casa hacia el exterior y crear un mejor lugar para descansar, comer o convivir al aire libre.",

      secondaryOverview:
        "El diseño debe considerar el espacio disponible, la manera en que será utilizado y su conexión con la casa y las demás áreas exteriores.",

      projectExamplesTitle:
        "Los Proyectos Pueden Incluir",

      projectExamples: [
        "Mejoras de áreas de patio",
        "Actualización de acabados exteriores",
        "Reparación de espacios existentes",
        "Conexión con áreas cercanas",
        "Pintura y trabajos de acabado",
        "Coordinación con proyectos de pérgola",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Espacio exterior disponible",
        "Forma en que utilizarás el patio",
        "Relación con puertas y accesos",
        "Nivel deseado de sombra y apertura",
      ],
    },
  },

  {
    id: "pergolas",

    en: {
      seoTitle:
        "Pergolas San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Residential pergola projects in San Antonio, TX for homeowners looking to add structure, visual interest and usable shade to outdoor areas.",

      eyebrow: "Pergolas",

      heading:
        "Add Structure and Definition to Your Outdoor Space",

      overview:
        "A pergola can help define an outdoor living area and provide partial shade while maintaining an open-air feeling.",

      secondaryOverview:
        "Its size, position and relationship to the home should be considered carefully so the structure fits naturally into the available outdoor space.",

      projectExamplesTitle:
        "Pergola Projects May Include",

      projectExamples: [
        "Freestanding pergola concepts",
        "Pergolas associated with patios",
        "Outdoor structure improvements",
        "Finish and painting work",
        "Integration with existing outdoor spaces",
        "Repairs related to surrounding areas",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Available space",
        "Desired shade",
        "Relationship to the home",
        "How the outdoor area will be used",
      ],
    },

    es: {
      seoTitle:
        "Pérgolas en San Antonio TX | Alamo Rise Home Solutions",

      seoDescription:
        "Proyectos residenciales de pérgolas en San Antonio, TX para agregar estructura, atractivo visual y sombra a espacios exteriores.",

      eyebrow: "Pérgolas",

      heading:
        "Agrega Estructura y Definición a Tu Espacio Exterior",

      overview:
        "Una pérgola puede ayudar a definir un área exterior y proporcionar sombra parcial sin perder completamente la sensación de espacio abierto.",

      secondaryOverview:
        "Su tamaño, posición y relación con la casa deben considerarse cuidadosamente para que la estructura se integre naturalmente con el espacio disponible.",

      projectExamplesTitle:
        "Los Proyectos Pueden Incluir",

      projectExamples: [
        "Conceptos de pérgolas independientes",
        "Pérgolas asociadas con patios",
        "Mejoras de estructuras exteriores",
        "Trabajos de acabado y pintura",
        "Integración con espacios existentes",
        "Reparaciones de áreas relacionadas",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Espacio disponible",
        "Cantidad de sombra deseada",
        "Relación con la vivienda",
        "Cómo se utilizará el espacio exterior",
      ],
    },
  },

  {
    id: "home-repairs",

    en: {
      seoTitle:
        "Home Repairs & Improvements San Antonio TX | Alamo Rise",

      seoDescription:
        "Residential home repairs and improvement services in San Antonio, TX for homeowners addressing worn, damaged or outdated areas.",

      eyebrow: "Home Repairs & Improvements",

      heading:
        "Take Care of Repairs and Practical Improvements Around Your Home",

      overview:
        "Not every home project requires a complete remodel. Smaller repairs and coordinated improvements can resolve damaged, worn or unfinished areas before they become larger concerns.",

      secondaryOverview:
        "Grouping related repairs together can also make it easier to coordinate finishes and address several areas within one improvement project.",

      projectExamplesTitle:
        "Projects May Include",

      projectExamples: [
        "Interior repairs",
        "Exterior repairs",
        "Drywall and finish repairs",
        "Painting-related improvements",
        "Minor remodeling updates",
        "Coordination of multiple improvement items",
      ],

      considerationsTitle:
        "Things to Consider",

      considerations: [
        "Which repairs are most urgent",
        "Whether damage affects nearby areas",
        "Which improvements can be grouped together",
        "Desired finished appearance",
      ],
    },

    es: {
      seoTitle:
        "Reparaciones y Mejoras del Hogar en San Antonio TX | Alamo Rise",

      seoDescription:
        "Servicios residenciales de reparaciones y mejoras en San Antonio, TX para áreas desgastadas, dañadas o anticuadas.",

      eyebrow: "Reparaciones y Mejoras",

      heading:
        "Resuelve Reparaciones y Mejoras Prácticas en Tu Hogar",

      overview:
        "No todos los proyectos requieren una remodelación completa. Reparaciones y mejoras específicas pueden resolver áreas dañadas, desgastadas o incompletas antes de que se conviertan en problemas mayores.",

      secondaryOverview:
        "Agrupar trabajos relacionados también puede facilitar la coordinación de acabados y resolver varias necesidades dentro de un mismo proyecto.",

      projectExamplesTitle:
        "Los Proyectos Pueden Incluir",

      projectExamples: [
        "Reparaciones interiores",
        "Reparaciones exteriores",
        "Reparación de drywall y acabados",
        "Mejoras relacionadas con pintura",
        "Actualizaciones menores de remodelación",
        "Coordinación de varias mejoras",
      ],

      considerationsTitle:
        "Aspectos a Considerar",

      considerations: [
        "Qué reparaciones son prioritarias",
        "Si el daño afecta áreas cercanas",
        "Qué mejoras pueden agruparse",
        "Apariencia final deseada",
      ],
    },
  },
] as const satisfies readonly ServiceDetailContent[];

export function getServiceDetail(
  id: ServiceId,
): ServiceDetailContent | undefined {
  return serviceDetails.find(
    (service) => service.id === id,
  );
}