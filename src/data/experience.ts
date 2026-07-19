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
