import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'iuris360',
    name: 'Iuris360',
    description:
      'Sitio institucional para firma legal guatemalteca especializada en servicios de divorcio y asesoría jurídica integral.',
    longDescription:
      'Plataforma web moderna con navegación por anclas, integración de WhatsApp con mensajes prefilled, embed de Google Maps y Waze, sección FAQ con accordion, y diseño mobile-first. Desarrollado con Next.js 16, App Router y Tailwind CSS v4. Desplegado en Vercel con analytics habilitado.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'shadcn/ui', 'Vercel'],
    url: 'https://iuris360gt.com/',
    github: 'https://github.com/CH0CHE/iuris360',
    video: '/projects/iuris360.webm',
    year: 2025,
    featured: true,
  },
]
