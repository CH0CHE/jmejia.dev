interface BioSegment {
  text: string
  emphasis?: 'strong' | 'primary'
}

interface Dictionary {
  skipLink: string
  nav: {
    home: string
    about: string
    technologies: string
    projects: string
    experience: string
    education: string
    contact: string
    downloadCV: string
    downloadCVAria: string
    mainNavAria: string
    logoAria: string
    openMenuAria: string
    closeMenuAria: string
  }
  common: {
    present: string
    current: string
    inProgress: string
  }
  hero: {
    sectionAria: string
    availableBadge: string
    role: string
    specializedIn: string
    ctaProjects: string
    ctaContact: string
    location: string
    nextSectionAria: string
    scroll: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
    stats: { label: string }[]
    strengths: { title: string; description: string }[]
    methodologiesLabel: string
    bioParagraphs: BioSegment[][]
  }
  technologies: {
    eyebrow: string
    title: string
    description: string
    filterAria: string
    categories: Record<'all' | 'frontend' | 'backend' | 'cloud' | 'database' | 'devops' | 'tools', string>
    levels: Record<'expert' | 'advanced' | 'intermediate' | 'beginner', string>
  }
  experience: {
    eyebrow: string
    title: string
    description: string
  }
  education: {
    eyebrow: string
    title: string
    description: string
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    otherProjects: string
    moreQuestion: string
    viewGithub: string
    talkAboutProject: string
    featuredBadge: string
    viewLiveSite: string
    viewCode: string
    site: string
    code: string
    viewPreview: string
    viewVideoPreviewAria: string
    closePreviewAria: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    intro: string
    availableFor: string
    availability: string[]
    location: string
    formTitle: string
    formAria: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    sending: string
    send: string
    requiredNote: string
    errors: {
      nameRequired: string
      emailRequired: string
      emailInvalid: string
      messageRequired: string
      messageTooShort: string
    }
    success: {
      title: string
      description: string
      resend: string
    }
  }
  footer: {
    footerAria: string
    footerNavAria: string
    navigationLabel: string
    contactLabel: string
    copyright: string
    builtWith: string
    and: string
  }
  language: {
    switcherAria: string
    es: string
    en: string
  }
}

const es: Dictionary = {
  skipLink: 'Ir al contenido principal',
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    technologies: 'Tecnologías',
    projects: 'Proyectos',
    experience: 'Experiencia',
    education: 'Educación',
    contact: 'Contacto',
    downloadCV: 'Descargar CV',
    downloadCVAria: 'Descargar curriculum vitae',
    mainNavAria: 'Navegación principal',
    logoAria: 'Josue Mejia — Inicio',
    openMenuAria: 'Abrir menú',
    closeMenuAria: 'Cerrar menú',
  },
  common: {
    present: 'Presente',
    current: 'Actual',
    inProgress: 'En curso',
  },
  hero: {
    sectionAria: 'Presentación principal',
    availableBadge: 'Disponible para proyectos',
    role: 'Full Stack Developer',
    specializedIn: 'Especializado en',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Hablemos',
    location: '📍 Ciudad de Guatemala, Guatemala',
    nextSectionAria: 'Ir a la siguiente sección',
    scroll: 'scroll',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'El ingeniero detrás del código',
    description:
      'Construyendo software que importa, con las mejores herramientas del ecosistema moderno.',
    stats: [
      { label: 'Años de experiencia' },
      { label: 'Proyectos entregados' },
      { label: 'Tecnologías dominadas' },
    ],
    strengths: [
      {
        title: 'Arquitectura Limpia',
        description:
          'Clean Architecture, Domain Driven Design y patrones SOLID para código mantenible y escalable a largo plazo.',
      },
      {
        title: 'Cloud & Serverless',
        description:
          'Despliegues en AWS con Lambda, S3 y CloudFront. Infraestructura como código con SST y escalabilidad automática.',
      },
      {
        title: 'Alto Rendimiento',
        description:
          'Optimización de bundles, SSR/SSG estratégico, lazy loading e imágenes optimizadas. Lighthouse 95+ como objetivo.',
      },
      {
        title: 'Integración & Automatización',
        description:
          'APIs REST robustas, webhooks, integraciones de IA y automatización de procesos empresariales complejos.',
      },
    ],
    methodologiesLabel: 'Metodologías & Prácticas',
    bioParagraphs: [
      [
        { text: 'Soy un ' },
        { text: 'Full Stack Developer', emphasis: 'strong' },
        { text: ' con sede en ' },
        { text: 'Ciudad de Guatemala', emphasis: 'primary' },
        {
          text: ', apasionado por construir soluciones digitales modernas que combinan diseño elegante con ingeniería sólida.',
        },
      ],
      [
        { text: 'Me especializo en el stack completo: desde interfaces de usuario fluidas con ' },
        { text: 'Next.js y React', emphasis: 'strong' },
        { text: ', hasta backends robustos con ' },
        { text: '.NET y Node.js', emphasis: 'strong' },
        { text: ', y despliegues escalables en ' },
        { text: 'AWS', emphasis: 'strong' },
        { text: '.' },
      ],
      [
        {
          text: 'Creo firmemente en las arquitecturas limpias, el código legible y en entregar software que no solo funcione hoy, sino que escale mañana. Cada proyecto es una oportunidad de aplicar las mejores prácticas de ingeniería y seguir aprendiendo.',
        },
      ],
    ],
  },
  technologies: {
    eyebrow: 'Stack tecnológico',
    title: 'Tecnologías que domino',
    description:
      'Herramientas con las que construyo software moderno, escalable y de alto rendimiento.',
    filterAria: 'Filtrar por categoría',
    categories: {
      all: 'Todas',
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud',
      database: 'Bases de datos',
      devops: 'DevOps',
      tools: 'Herramientas',
    },
    levels: {
      expert: 'Experto',
      advanced: 'Avanzado',
      intermediate: 'Intermedio',
      beginner: 'Básico',
    },
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia profesional',
    description: 'años construyendo software real en producción.',
  },
  education: {
    eyebrow: 'Formación',
    title: 'Educación',
    description: 'Formación académica en sistemas de información y telecomunicaciones.',
  },
  projects: {
    eyebrow: 'Portafolio',
    title: 'Proyectos que construí',
    description: 'Software real, en producción, resolviendo problemas reales.',
    otherProjects: 'Otros proyectos',
    moreQuestion: '¿Quieres ver más proyectos y contribuciones?',
    viewGithub: 'Ver GitHub',
    talkAboutProject: 'Hablemos de tu proyecto',
    featuredBadge: 'Proyecto Destacado',
    viewLiveSite: 'Ver sitio en vivo',
    viewCode: 'Ver código',
    site: 'Sitio',
    code: 'Código',
    viewPreview: 'Ver preview',
    viewVideoPreviewAria: 'Ver preview en video',
    closePreviewAria: 'Cerrar preview',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    description:
      '¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo? Estoy disponible.',
    intro:
      'Me apasiona construir productos digitales de calidad. Si tienes una idea, un proyecto o simplemente quieres hablar sobre tecnología, escríbeme — respondo en menos de 24 horas.',
    availableFor: 'Disponible para:',
    availability: ['Proyectos freelance', 'Posición full-time', 'Consultoría técnica'],
    location: 'Ubicación',
    formTitle: 'Envíame un mensaje',
    formAria: 'Formulario de contacto',
    nameLabel: 'Nombre *',
    namePlaceholder: 'Tu nombre',
    emailLabel: 'Email *',
    emailPlaceholder: 'tu@email.com',
    subjectLabel: 'Asunto',
    subjectPlaceholder: '¿Sobre qué quieres hablar?',
    messageLabel: 'Mensaje *',
    messagePlaceholder: 'Cuéntame sobre tu proyecto, idea o propuesta...',
    sending: 'Enviando…',
    send: 'Enviar mensaje',
    requiredNote: '* Campos requeridos. Tu información no será compartida con terceros.',
    errors: {
      nameRequired: 'El nombre es requerido.',
      emailRequired: 'El email es requerido.',
      emailInvalid: 'Ingresa un email válido.',
      messageRequired: 'El mensaje es requerido.',
      messageTooShort: 'El mensaje debe tener al menos 10 caracteres.',
    },
    success: {
      title: '¡Mensaje enviado!',
      description: 'Gracias por escribirme. Te responderé a la brevedad.',
      resend: 'Enviar otro mensaje',
    },
  },
  footer: {
    footerAria: 'Pie de página',
    footerNavAria: 'Navegación del footer',
    navigationLabel: 'Navegación',
    contactLabel: 'Contacto',
    copyright: '© 2026 Josue Francisco Mejia Morales. Todos los derechos reservados.',
    builtWith: 'Construido con',
    and: 'y',
  },
  language: {
    switcherAria: 'Cambiar idioma',
    es: 'Español',
    en: 'English',
  },
}

const en: Dictionary = {
  skipLink: 'Skip to main content',
  nav: {
    home: 'Home',
    about: 'About',
    technologies: 'Technologies',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
    downloadCV: 'Download CV',
    downloadCVAria: 'Download resume',
    mainNavAria: 'Main navigation',
    logoAria: 'Josue Mejia — Home',
    openMenuAria: 'Open menu',
    closeMenuAria: 'Close menu',
  },
  common: {
    present: 'Present',
    current: 'Current',
    inProgress: 'In progress',
  },
  hero: {
    sectionAria: 'Main introduction',
    availableBadge: 'Available for projects',
    role: 'Full Stack Developer',
    specializedIn: 'Specialized in',
    ctaProjects: 'View projects',
    ctaContact: "Let's talk",
    location: '📍 Guatemala City, Guatemala',
    nextSectionAria: 'Go to next section',
    scroll: 'scroll',
  },
  about: {
    eyebrow: 'About me',
    title: 'The engineer behind the code',
    description:
      'Building software that matters, with the best tools in the modern ecosystem.',
    stats: [
      { label: 'Years of experience' },
      { label: 'Projects delivered' },
      { label: 'Technologies mastered' },
    ],
    strengths: [
      {
        title: 'Clean Architecture',
        description:
          'Clean Architecture, Domain Driven Design, and SOLID patterns for maintainable code that scales long-term.',
      },
      {
        title: 'Cloud & Serverless',
        description:
          'AWS deployments with Lambda, S3, and CloudFront. Infrastructure as code with SST and automatic scalability.',
      },
      {
        title: 'High Performance',
        description:
          'Bundle optimization, strategic SSR/SSG, lazy loading, and optimized images. Targeting Lighthouse scores of 95+.',
      },
      {
        title: 'Integration & Automation',
        description:
          'Robust REST APIs, webhooks, AI integrations, and automation of complex business processes.',
      },
    ],
    methodologiesLabel: 'Methodologies & Practices',
    bioParagraphs: [
      [
        { text: "I'm a " },
        { text: 'Full Stack Developer', emphasis: 'strong' },
        { text: ' based in ' },
        { text: 'Guatemala City', emphasis: 'primary' },
        {
          text: ', passionate about building modern digital solutions that combine elegant design with solid engineering.',
        },
      ],
      [
        { text: 'I specialize in the full stack: from fluid user interfaces with ' },
        { text: 'Next.js and React', emphasis: 'strong' },
        { text: ', to robust backends with ' },
        { text: '.NET and Node.js', emphasis: 'strong' },
        { text: ', and scalable deployments on ' },
        { text: 'AWS', emphasis: 'strong' },
        { text: '.' },
      ],
      [
        {
          text: 'I firmly believe in clean architectures, readable code, and delivering software that not only works today but scales tomorrow. Every project is an opportunity to apply engineering best practices and keep learning.',
        },
      ],
    ],
  },
  technologies: {
    eyebrow: 'Tech stack',
    title: 'Technologies I master',
    description: 'Tools I use to build modern, scalable, high-performance software.',
    filterAria: 'Filter by category',
    categories: {
      all: 'All',
      frontend: 'Frontend',
      backend: 'Backend',
      cloud: 'Cloud',
      database: 'Databases',
      devops: 'DevOps',
      tools: 'Tools',
    },
    levels: {
      expert: 'Expert',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      beginner: 'Basic',
    },
  },
  experience: {
    eyebrow: 'Career path',
    title: 'Professional experience',
    description: 'years building real software in production.',
  },
  education: {
    eyebrow: 'Academic background',
    title: 'Education',
    description: 'Academic background in information systems and telecommunications.',
  },
  projects: {
    eyebrow: 'Portfolio',
    title: "Projects I've built",
    description: 'Real software, in production, solving real problems.',
    otherProjects: 'Other projects',
    moreQuestion: 'Want to see more projects and contributions?',
    viewGithub: 'View GitHub',
    talkAboutProject: "Let's talk about your project",
    featuredBadge: 'Featured Project',
    viewLiveSite: 'View live site',
    viewCode: 'View code',
    site: 'Site',
    code: 'Code',
    viewPreview: 'View preview',
    viewVideoPreviewAria: 'View video preview',
    closePreviewAria: 'Close preview',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk",
    description: 'Do you have a project in mind or need a developer for your team? I’m available.',
    intro:
      "I'm passionate about building quality digital products. If you have an idea, a project, or just want to talk tech, reach out — I respond within 24 hours.",
    availableFor: 'Available for:',
    availability: ['Freelance projects', 'Full-time position', 'Technical consulting'],
    location: 'Location',
    formTitle: 'Send me a message',
    formAria: 'Contact form',
    nameLabel: 'Name *',
    namePlaceholder: 'Your name',
    emailLabel: 'Email *',
    emailPlaceholder: 'your@email.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'What do you want to talk about?',
    messageLabel: 'Message *',
    messagePlaceholder: 'Tell me about your project, idea, or proposal...',
    sending: 'Sending…',
    send: 'Send message',
    requiredNote: '* Required fields. Your information will not be shared with third parties.',
    errors: {
      nameRequired: 'Name is required.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Enter a valid email.',
      messageRequired: 'Message is required.',
      messageTooShort: 'Message must be at least 10 characters.',
    },
    success: {
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you shortly.",
      resend: 'Send another message',
    },
  },
  footer: {
    footerAria: 'Footer',
    footerNavAria: 'Footer navigation',
    navigationLabel: 'Navigation',
    contactLabel: 'Contact',
    copyright: '© 2026 Josue Francisco Mejia Morales. All rights reserved.',
    builtWith: 'Built with',
    and: 'and',
  },
  language: {
    switcherAria: 'Change language',
    es: 'Español',
    en: 'English',
  },
}

export const dictionaries = { es, en }

export type { Dictionary, BioSegment }
