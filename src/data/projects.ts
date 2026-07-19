import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'comprosmart',
    name: 'ComproSmart.com',
    description:
      'Tienda eCommerce B2C para Guatemala enfocada en tecnología, oficina e impresión, con interfaz en español y precios en GTQ.',
    longDescription:
      'MVP de eCommerce construido sobre EverShop v2.1 con customizaciones profundas: homepage con carrusel hero de productos destacados, botones de categoría y tres carruseles horizontales por sección. Incluye feature de "Apartados" (wishlist persistente en localStorage) con ícono en el header y página dedicada, similar a otras tiendas en linea guatemaltecas. Catálogo de 31 productos en 15 categorías con imágenes via Unsplash. Proyecto completo en español, moneda GTQ. Stack: EverShop + PostgreSQL 16 + Docker, con GraphQL personalizado para alimentar las secciones de la homepage.',
    technologies: ['EverShop', 'React', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Node.js'],
    url: 'https://comprosmart.com',
    video: '/projects/comprosmart.webm',
    image: '/logos/comprosmart.webp',
    year: 2026,
    featured: true,
  },
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
    image: '/logos/iuris360.webp',
    year: 2025,
    featured: true,
  },
]
