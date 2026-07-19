'use client'

import { motion } from 'framer-motion'
import { Cloud, Zap, GitMerge, Layers } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { GradientText } from '@/components/shared/gradient-text'

const stats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '10+', label: 'Proyectos entregados' },
  { value: '20+', label: 'Tecnologías dominadas' },
]

const strengths = [
  {
    icon: Layers,
    title: 'Arquitectura Limpia',
    description:
      'Clean Architecture, Domain Driven Design y patrones SOLID para código mantenible y escalable a largo plazo.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: Cloud,
    title: 'Cloud & Serverless',
    description:
      'Despliegues en AWS con Lambda, S3 y CloudFront. Infraestructura como código con SST y escalabilidad automática.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
  },
  {
    icon: Zap,
    title: 'Alto Rendimiento',
    description:
      'Optimización de bundles, SSR/SSG estratégico, lazy loading e imágenes optimizadas. Lighthouse 95+ como objetivo.',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon: GitMerge,
    title: 'Integración & Automatización',
    description:
      'APIs REST robustas, webhooks, integraciones de IA y automatización de procesos empresariales complejos.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
  },
]

const methodologies = [
  'Clean Architecture',
  'Domain Driven Design',
  'REST APIs',
  'CI/CD',
  'Serverless',
  'Microservices',
  'Code Review',
  'Git Flow',
]

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <Container>
        <SectionHeading
          eyebrow="Sobre mí"
          title="El ingeniero detrás del código"
          description="Construyendo software que importa, con las mejores herramientas del ecosistema moderno."
        />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-20 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              {...fadeInUp(i * 0.1)}
              className="flex flex-col items-center rounded-xl border border-border bg-surface p-5 text-center"
            >
              <span className="text-3xl font-bold tracking-tight gradient-primary sm:text-4xl">
                {value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio + Cards grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Bio */}
          <motion.div {...fadeInUp(0)}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Soy un{' '}
                <span className="font-semibold text-foreground">
                  Full Stack Developer
                </span>{' '}
                con sede en{' '}
                <span className="text-primary">Ciudad de Guatemala</span>, apasionado por
                construir soluciones digitales modernas que combinan diseño elegante con
                ingeniería sólida.
              </p>
              <p>
                Me especializo en el stack completo: desde interfaces de usuario fluidas
                con{' '}
                <span className="font-medium text-foreground">Next.js y React</span>, hasta
                backends robustos con{' '}
                <span className="font-medium text-foreground">.NET y Node.js</span>, y
                despliegues escalables en{' '}
                <span className="font-medium text-foreground">AWS</span>.
              </p>
              <p>
                Creo firmemente en las arquitecturas limpias, el código legible y en
                entregar software que no solo funcione hoy, sino que escale mañana. Cada
                proyecto es una oportunidad de aplicar las mejores prácticas de ingeniería
                y seguir aprendiendo.
              </p>
            </div>

            {/* Methodologies */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Metodologías & Prácticas
              </p>
              <div className="flex flex-wrap gap-2">
                {methodologies.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Code snippet aesthetic */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 rounded-xl border border-border bg-surface p-5 font-mono text-sm"
              aria-hidden
            >
              <div className="mb-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="space-y-1 text-xs leading-relaxed">
                <p>
                  <span className="text-secondary">const</span>{' '}
                  <span className="text-primary">josue</span>{' '}
                  <span className="text-muted-foreground/70">= {'{'}</span>
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">role:</span>{' '}
                  <span className="text-green-400/80">
                    &apos;Full Stack Engineer&apos;
                  </span>
                  <span className="text-muted-foreground/70">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">location:</span>{' '}
                  <span className="text-green-400/80">
                    &apos;Ciudad de Guatemala&apos;
                  </span>
                  <span className="text-muted-foreground/70">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">available:</span>{' '}
                  <span className="text-primary">true</span>
                  <span className="text-muted-foreground/70">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">passion:</span>{' '}
                  <span className="text-green-400/80">
                    &apos;clean code + great UX&apos;
                  </span>
                </p>
                <p>
                  <span className="text-muted-foreground/70">{'}'}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Strength cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {strengths.map(({ icon: Icon, title, description, color, bg, border }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group rounded-xl border ${border} ${bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`mb-3 inline-flex rounded-lg p-2 ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} aria-hidden />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
