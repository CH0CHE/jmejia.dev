# jmejia.dev

Portfolio personal de **Josue Francisco Mejia Morales** — Full Stack Developer, Ciudad de Guatemala.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, SSG) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 (config via `@theme` en CSS) |
| Animaciones | Framer Motion v12 |
| Componentes | shadcn/ui con Base UI |
| Iconos | Lucide React v1 + SVGs propios para marcas |
| Deploy | Vercel |

## Inicio rápido

```bash
# 1. Instala dependencias
npm install

# 2. Crea tu archivo de entorno
cp .env.example .env.local
# Edita .env.local con tus datos reales

# 3. Corre el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Toda la información de contacto vive en `.env.local` (nunca commiteado al repo). Copia `.env.example` como punto de partida:

| Variable | Descripción | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base del sitio | `https://jmejia.dev` |
| `NEXT_PUBLIC_EMAIL` | Correo de contacto | `tu@email.com` |
| `NEXT_PUBLIC_WHATSAPP` | Número de WhatsApp sin `+` | `50212345678` |
| `NEXT_PUBLIC_GITHUB` | URL del perfil de GitHub | `https://github.com/tu-usuario` |
| `NEXT_PUBLIC_LINKEDIN` | URL del perfil de LinkedIn | `https://linkedin.com/in/tu-perfil` |
| `NEXT_PUBLIC_LOCATION` | Ubicación para mostrar | `Ciudad de Guatemala, Guatemala` |

Todas las variables usan el prefijo `NEXT_PUBLIC_` porque se muestran en el navegador (son datos públicos del portafolio). En Vercel se configuran en **Settings → Environment Variables**.

> El módulo `src/lib/env.ts` centraliza el acceso a estas variables con fallbacks seguros.

## Secciones de la página

| # | Sección | Descripción |
|---|---|---|
| 1 | **Hero** | Presentación, typewriter de especialidades, canvas de partículas, CTAs |
| 2 | **Sobre mí** | Bio, stats (años / proyectos / tecnologías), tarjetas de fortalezas, snippet de código |
| 3 | **Tecnologías** | 23 tecnologías con filtros por categoría, nivel de dominio visual |
| 4 | **Experiencia** | Timeline alternado con 3 entradas (Digifact, Freelance, Formación) |
| 5 | **Proyectos** | Tarjeta destacada (Iuris360) + grid de proyectos |
| 6 | **Contacto** | Métodos de contacto + formulario con validación |

## Personalización

### Agregar o editar proyectos

Edita `src/data/projects.ts`. Coloca screenshots en `public/projects/<slug>.webp` (o `.jpg`, `.png`). Si no hay imagen, el componente genera automáticamente un placeholder con los colores de las tecnologías del proyecto.

### Editar experiencia laboral

Edita `src/data/experience.ts`.

### Editar tecnologías

Edita `src/data/technologies.ts`. Cada entrada tiene `name`, `icon`, `level` (`expert` | `advanced` | `intermediate` | `beginner`), y `category`.

### CV descargable

Coloca el archivo en `public/cv/Josue-Mejia-CV.pdf`. El botón "Descargar CV" en la navbar apunta a esa ruta. El header de Vercel ya está configurado para forzar la descarga (Content-Disposition: attachment).

### Integrar servicio de email en el formulario

Busca el comentario `// TODO: connect to your email service here` en `src/features/contact/contact-section.tsx`. Las opciones recomendadas son **Resend** o **EmailJS**.

## Estructura de carpetas

```
src/
├── app/                  # Rutas, layout, metadata, OG image, sitemap, robots, manifest
├── components/
│   ├── layout/           # Navbar (sticky + activo por IntersectionObserver), Footer
│   ├── shared/           # Container, GradientText, TechBadge, icons SVG, SkipLink…
│   └── ui/               # Primitivos de shadcn/ui (Button, Input, Textarea, Label)
├── data/                 # projects.ts, experience.ts, technologies.ts, navigation.ts
├── features/             # Una carpeta por sección (hero, about, technologies, …)
│   ├── hero/             # ParticleCanvas (canvas API), TypewriterText, HeroSection
│   ├── about/
│   ├── technologies/     # Filtros por categoría, LevelDots, TechCard
│   ├── experience/       # Timeline con animación alternada
│   ├── projects/         # FeaturedProjectCard, ProjectCard, ProjectPlaceholder
│   └── contact/          # Formulario con validación + métodos de contacto
├── hooks/                # useScrollPosition, useActiveSection, useMediaQuery
├── lib/
│   ├── env.ts            # Variables de entorno centralizadas (NEXT_PUBLIC_*)
│   └── utils.ts          # cn() de shadcn/ui
└── types/                # Interfaces TypeScript compartidas
```

## Producción

```bash
npm run build   # build local para verificar
npm run start   # serve el build localmente
```

## Deploy en Vercel

1. Haz push del repo a GitHub.
2. Importa el repositorio en [vercel.com](https://vercel.com).
3. En **Settings → Environment Variables**, agrega las 6 variables de `.env.local`.
4. Vercel detecta Next.js automáticamente. No se requiere configuración adicional.
