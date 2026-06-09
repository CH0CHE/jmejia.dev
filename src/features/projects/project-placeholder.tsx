'use client'

import { motion } from 'framer-motion'

interface ProjectPlaceholderProps {
  name: string
  technologies: string[]
}

// Deterministic "random" positions based on string hash — stable across renders
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function ProjectPlaceholder({ name, technologies }: ProjectPlaceholderProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3)

  const floatingTechs = technologies.slice(0, 5)

  return (
    <div className="relative h-full w-full overflow-hidden bg-surface">
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,211,238,0.10), transparent)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(34,211,238,0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Beam sweep */}
      <motion.div
        className="absolute inset-y-0 w-16 rotate-12 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)',
        }}
        animate={{ x: ['-10%', '120%'] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: 'linear' }}
      />

      {/* Floating tech pills */}
      {floatingTechs.map((tech, i) => {
        const h = hashCode(name + tech)
        const top = 10 + ((h % 60) + i * 12)
        const left = 5 + (((h * 7) % 70) + i * 8)
        const delay = (h % 20) / 10
        return (
          <motion.span
            key={tech}
            className="absolute rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary/70 backdrop-blur-sm"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay,
              ease: 'easeInOut',
            }}
          >
            {tech}
          </motion.span>
        )
      })}

      {/* Center initials */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-2xl font-bold text-primary"
            aria-hidden
          >
            {initials}
          </div>
          <p className="mt-3 text-sm font-semibold text-foreground/70">{name}</p>
        </div>
      </div>
    </div>
  )
}
