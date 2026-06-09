import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'digifact',
    company: 'Digifact',
    role: 'Full Stack Software Engineer',
    startDate: 'Ene 2024',
    description:
      'Desarrollo de soluciones empresariales modernas para facturación electrónica y gestión de documentos fiscales en Guatemala.',
    technologies: ['Next.js', 'TypeScript', 'C#', '.NET', 'SQL Server', 'AWS', 'React'],
    highlights: [
      'Desarrollo de aplicaciones web empresariales con Next.js y .NET',
      'Implementación de arquitecturas Clean Architecture y Domain Driven Design',
      'Integración con servicios AWS (Lambda, S3, CloudFront, Route53)',
      'Optimización de rendimiento y SEO en aplicaciones de alto tráfico',
      'Diseño e implementación de APIs REST escalables',
    ],
  },
  {
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
  },
  {
    id: 'inicio',
    company: 'Formación & Proyectos Personales',
    role: 'Autodidacta — Full Stack',
    startDate: '2020',
    endDate: 'May 2022',
    description:
      'Aprendizaje autodidacta intensivo en desarrollo web moderno, construyendo proyectos reales para dominar el stack completo.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Dominio del stack JavaScript (React, Node.js, Express)',
      'Proyectos personales de frontend y backend',
      'Contribuciones a proyectos open source',
      'Certificaciones y cursos en AWS y desarrollo web',
    ],
  },
]
