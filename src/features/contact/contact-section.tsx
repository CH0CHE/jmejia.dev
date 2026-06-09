'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Briefcase,
  Laptop,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Container } from '@/components/shared/container'
import { SectionWrapper, SectionHeading } from '@/components/shared/section-wrapper'
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/shared/icons'

// ─── Contact info ──────────────────────────────────────────────────────────────

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'josue.mejia@digifact.com',
    href: 'mailto:josue.mejia@digifact.com',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/CH0CHE',
    href: 'https://github.com/CH0CHE',
    color: 'text-foreground',
    bg: 'bg-surface-elevated',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/josue-mejia',
    href: 'https://linkedin.com/in/josue-mejia',
    color: 'text-[#0A66C2]',
    bg: 'bg-[#0A66C2]/10',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '+502 · actualizar número',
    href: 'https://wa.me/50200000000',
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
]

const availability = [
  { icon: Briefcase, label: 'Proyectos freelance' },
  { icon: Laptop, label: 'Posición full-time' },
  { icon: Users, label: 'Consultoría técnica' },
]

// ─── Form types & validation ───────────────────────────────────────────────────

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errs: Partial<Record<keyof FormData, string>> = {}
  if (!data.name.trim()) errs.name = 'El nombre es requerido.'
  if (!data.email.trim()) errs.email = 'El email es requerido.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = 'Ingresa un email válido.'
  if (!data.message.trim()) errs.message = 'El mensaje es requerido.'
  else if (data.message.trim().length < 10)
    errs.message = 'El mensaje debe tener al menos 10 caracteres.'
  return errs
}

const EMPTY: FormData = { name: '', email: '', subject: '', message: '' }

// ─── Form field wrapper ────────────────────────────────────────────────────────

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-destructive"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Contact form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [data, setData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('loading')

    // TODO: connect to your email service here
    // Options: Resend (resend.com), EmailJS, Formspree, or a Next.js API route
    // Example:
    //   const res = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    //   if (!res.ok) { setStatus('error'); return }

    await new Promise((r) => setTimeout(r, 1400))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-5 rounded-xl border border-primary/30 bg-primary/10 px-8 py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
        >
          <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-foreground">¡Mensaje enviado!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Gracias por escribirme. Te responderé a la brevedad.
          </p>
        </div>
        <button
          onClick={() => {
            setStatus('idle')
            setData(EMPTY)
            setErrors({})
          }}
          className={cn(
            buttonVariants({ variant: 'outline', size: 'sm' }),
            'border-primary/30 hover:bg-primary/10 hover:text-primary'
          )}
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulario de contacto">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field id="name" label="Nombre *" error={errors.name}>
          <Input
            id="name"
            value={data.name}
            onChange={set('name')}
            placeholder="Tu nombre"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className="h-11 bg-surface-elevated/50"
          />
        </Field>
        <Field id="email" label="Email *" error={errors.email}>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={set('email')}
            placeholder="tu@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className="h-11 bg-surface-elevated/50"
          />
        </Field>
      </div>

      <Field id="subject" label="Asunto">
        <Input
          id="subject"
          value={data.subject}
          onChange={set('subject')}
          placeholder="¿Sobre qué quieres hablar?"
          className="h-11 bg-surface-elevated/50"
        />
      </Field>

      <Field id="message" label="Mensaje *" error={errors.message}>
        <Textarea
          id="message"
          value={data.message}
          onChange={set('message')}
          placeholder="Cuéntame sobre tu proyecto, idea o propuesta..."
          rows={6}
          aria-invalid={!!errors.message}
          className="resize-none bg-surface-elevated/50 leading-relaxed"
        />
      </Field>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          buttonVariants(),
          'w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary h-11',
          status === 'loading' && 'cursor-not-allowed opacity-75'
        )}
      >
        {status === 'loading' ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
              aria-hidden
            />
            Enviando…
          </>
        ) : (
          <>
            Enviar mensaje
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground/60">
        * Campos requeridos. Tu información no será compartida con terceros.
      </p>
    </form>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <Container size="lg">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="¿Tienes un proyecto en mente o buscas un desarrollador para tu equipo? Estoy disponible."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: info ── */}
          <motion.div {...fadeUp(0)} className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Me apasiona construir productos digitales de calidad. Si tienes una idea,
              un proyecto o simplemente quieres hablar sobre tecnología, escríbeme —
              respondo en menos de 24 horas.
            </p>

            {/* Availability */}
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <p className="text-sm font-semibold text-foreground">
                  Disponible para:
                </p>
              </div>
              <ul className="space-y-2.5" role="list">
                {availability.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact methods */}
            <div className="space-y-3">
              {contactMethods.map(({ icon: Icon, label, value, href, color, bg }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-lg', bg)}>
                    <Icon className={cn('h-5 w-5', color)} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">{value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Location (not a link) */}
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <MapPin className="h-5 w-5 text-secondary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Ubicación
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Ciudad de Guatemala, Guatemala
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div {...fadeUp(0.15)}>
            <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-bold text-foreground">Envíame un mensaje</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
