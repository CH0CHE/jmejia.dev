import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'comprosmart',
    name: 'ComproSmart.com',
    description: {
      es: 'Tienda eCommerce B2C para Guatemala enfocada en tecnología, oficina e impresión, con interfaz en español y precios en GTQ.',
      en: 'B2C eCommerce store for Guatemala focused on technology, office supplies, and printing, with a Spanish interface and prices in GTQ.',
    },
    longDescription: {
      es: 'MVP de eCommerce construido sobre EverShop v2.1 con customizaciones profundas: homepage con carrusel hero de productos destacados, botones de categoría y tres carruseles horizontales por sección. Incluye feature de "Apartados" (wishlist persistente en localStorage) con ícono en el header y página dedicada, similar a otras tiendas en linea guatemaltecas. Catálogo de 31 productos en 15 categorías con imágenes via Unsplash. Proyecto completo en español, moneda GTQ. Stack: EverShop + PostgreSQL 16 + Docker, con GraphQL personalizado para alimentar las secciones de la homepage.',
      en: 'eCommerce MVP built on EverShop v2.1 with deep customizations: a homepage with a featured-products hero carousel, category buttons, and three horizontal carousels per section. Includes an "Apartados" (layaway/wishlist) feature persisted in localStorage with a header icon and dedicated page, similar to other Guatemalan online stores. Catalog of 31 products across 15 categories with images via Unsplash. Fully in Spanish, GTQ currency. Stack: EverShop + PostgreSQL 16 + Docker, with a custom GraphQL layer powering the homepage sections.',
    },
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
    description: {
      es: 'Sitio institucional para firma legal guatemalteca especializada en servicios de divorcio y asesoría jurídica integral.',
      en: 'Institutional website for a Guatemalan law firm specialized in divorce services and comprehensive legal counsel.',
    },
    longDescription: {
      es: 'Plataforma web moderna con navegación por anclas, integración de WhatsApp con mensajes prefilled, embed de Google Maps y Waze, sección FAQ con accordion, y diseño mobile-first. Desarrollado con Next.js 16, App Router y Tailwind CSS v4. Desplegado en Vercel con analytics habilitado.',
      en: 'Modern web platform with anchor-based navigation, WhatsApp integration with prefilled messages, embedded Google Maps and Waze, an accordion FAQ section, and mobile-first design. Built with Next.js 16, App Router, and Tailwind CSS v4. Deployed on Vercel with analytics enabled.',
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'shadcn/ui', 'Vercel'],
    url: 'https://iuris360gt.com/',
    github: 'https://github.com/CH0CHE/iuris360',
    video: '/projects/iuris360.webm',
    image: '/logos/iuris360.webp',
    year: 2025,
    featured: true,
  },
]
