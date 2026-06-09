# jmejia.dev

Portfolio personal de **Josue Francisco Mejia Morales** — Full Stack Software Engineer, Ciudad de Guatemala.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion v12 |
| Componentes | shadcn/ui (Base UI) |
| Iconos | Lucide React v1 |
| Deploy | Vercel |

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Variables de entorno

No se requieren variables de entorno para el sitio base. Si integras un servicio de email en el formulario de contacto, agrega:

```env
# Ejemplo para Resend
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Personalización

### Agregar o editar proyectos

Edita `src/data/projects.ts` y coloca screenshots en `public/projects/<slug>.webp`.

### Actualizar experiencia

Edita `src/data/experience.ts`.

### Cambiar número de WhatsApp

Busca `wa.me/` en `src/data/navigation.ts` y `src/features/contact/contact-section.tsx` y reemplaza el número.

### CV descargable

Coloca el archivo en `public/cv/Josue-Mejia-CV.pdf`. El botón en la navbar apunta a esa ruta.

## Estructura

```
src/
├── app/             # Routes, layout, metadata, OG image
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── shared/      # Container, GradientText, TechBadge, etc.
│   └── ui/          # shadcn/ui primitives
├── data/            # Projects, experience, technologies, navigation
├── features/        # One folder per section (hero, about, …)
├── hooks/           # useScrollPosition, useActiveSection, useMediaQuery
└── types/           # Shared TypeScript interfaces
```

## Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Importa el repositorio en Vercel.
2. Vercel detecta Next.js automáticamente.
3. Sin configuración adicional necesaria.
