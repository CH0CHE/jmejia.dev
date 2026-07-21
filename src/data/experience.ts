import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'digifact',
    company: 'Digifact',
    role: 'Full Stack Developer',
    startDate: 'Junio 2024',
    icon: '/logos/digifact.webp',
    description: {
      es: 'Desarrollo de soluciones empresariales modernas para facturación electrónica y gestión de documentos fiscales en Guatemala.',
      en: 'Development of modern enterprise solutions for electronic invoicing and tax document management in Guatemala.',
    },
    technologies: ['Next.js', 'TypeScript', 'C#', '.NET', 'SQL Server', 'AWS', 'React'],
    highlights: [
      {
        es: 'Desarrollo de aplicaciones web empresariales con Next.js y .NET',
        en: 'Development of enterprise web applications with Next.js and .NET',
      },
      {
        es: 'Implementación de arquitecturas Clean Architecture y Domain Driven Design',
        en: 'Implementation of Clean Architecture and Domain Driven Design',
      },
      {
        es: 'Integración con servicios AWS (Lambda, S3, CloudFront, Route53)',
        en: 'Integration with AWS services (Lambda, S3, CloudFront, Route53)',
      },
      {
        es: 'Optimización de rendimiento y SEO en aplicaciones de alto tráfico',
        en: 'Performance and SEO optimization for high-traffic applications',
      },
      {
        es: 'Diseño e implementación de APIs REST escalables',
        en: 'Design and implementation of scalable REST APIs',
      },
    ],
  },
  {
    id: 'smart-office-solutions',
    company: 'Smart Office Solutions',
    role: 'Especialista en Ventas de Soluciones Digitales',
    startDate: 'Octubre 2023',
    endDate: 'Mayo 2024',
    icon: '/logos/SOS.webp',
    description: {
      es: 'Asesoré a una cartera de más de 30 clientes en la selección e implementación de soluciones digitales.',
      en: 'Advised a portfolio of more than 30 clients on the selection and implementation of digital solutions.',
    },
    technologies: [
      'Ventas B2B',
      'Consultoría Digital',
      'CRM',
      'Atención al Cliente',
      'Negociación',
      'Presentaciones Comerciales',
    ],
    highlights: [
      {
        es: 'Gestión y fidelización de una cartera activa de más de 30 clientes',
        en: 'Management and retention of an active portfolio of more than 30 clients',
      },
      {
        es: 'Levantamiento de necesidades y recomendación de soluciones digitales a medida',
        en: 'Needs assessment and recommendation of tailored digital solutions',
      },
      {
        es: 'Seguimiento post-venta para asegurar la correcta implementación y adopción',
        en: 'Post-sale follow-up to ensure proper implementation and adoption',
      },
    ],
  },
  {
    id: 'conduent',
    company: 'Conduent',
    role: 'Agente de Atención Telefónica (Billing/Customer Service, cuenta UPS)',
    startDate: 'Febrero 2023',
    endDate: 'Mayo 2023',
    icon: '/logos/Conduent.webp',
    description: {
      es: 'Atendí entre 70-100 llamadas diarias en inglés, alcanzando 4.3/5 en satisfacción de servicio.',
      en: 'Handled 70-100 calls daily in English, achieving a 4.3/5 service satisfaction score.',
    },
    technologies: [
      'Atención al Cliente',
      'Inglés Avanzado',
      'Facturación',
      'Soporte Telefónico',
      'Resolución de Conflictos',
      'CRM',
    ],
    highlights: [
      {
        es: 'Atención de 70-100 llamadas diarias en inglés para la cuenta UPS',
        en: 'Handled 70-100 calls daily in English for the UPS account',
      },
      {
        es: 'Alcancé 4.3/5 en satisfacción de servicio al cliente',
        en: 'Achieved a 4.3/5 customer satisfaction score',
      },
      {
        es: 'Resolución de consultas de facturación y soporte general de cuenta',
        en: 'Resolution of billing inquiries and general account support',
      },
    ],
  },
  /*{
    id: 'freelance',
    company: 'Desarrollo Freelance',
    role: 'Full Stack Developer',
    startDate: 'Jun 2022',
    endDate: 'Dic 2023',
    description:
      'Desarrollo de proyectos independientes para clientes locales e internacionales, desde MVPs hasta plataformas en producción.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'SST', 'Serverless'],
    highlights: [
      'Iuris360: Plataforma legal completa para gestión de casos jurídicos',
      'Arquitecturas serverless con AWS Lambda y SST framework',
      'Integración de APIs de terceros y automatización de procesos',
      'Despliegue y administración de infraestructura en AWS',
    ],
  },*/
]
