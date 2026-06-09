import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'iuris360',
    name: 'Iuris360',
    description:
      'Plataforma legal digital para la gestión de casos jurídicos en Guatemala.',
    longDescription:
      'Sistema integral de gestión legal que permite a bufetes de abogados administrar sus casos, clientes y documentación de forma eficiente y segura.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    url: 'https://iuris360gt.com/',
    github: 'https://github.com/CH0CHE/iuris360',
    image: '/projects/iuris360.png',
    year: 2024,
    featured: true,
  },
]
