'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectPlaceholderProps {
  name: string
  technologies: string[]
  image?: string
  logoBackground?: 'light'
}

// Deterministic "random" positions based on string hash — stable across renders
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function ProjectPlaceholder({
  name,
  technologies,
  image,
  logoBackground,
}: ProjectPlaceholderProps) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3)

  const floatingTechs = technologies.slice(0, 4)

  // Fixed corner anchors (with small per-tech jitter) so pills never drift
  // outside the box or collide with the centered logo, at any breakpoint.
  const slots = [
    { top: 10, left: 6 },
    { top: 12, left: 60 },
    { top: 76, left: 6 },
    { top: 74, left: 58 },
  ]

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
        const jitter = (h % 7) - 3
        const slot = slots[i]
        const top = Math.min(84, Math.max(6, slot.top + jitter))
        const left = Math.min(62, Math.max(4, slot.left + jitter))
        const delay = (h % 20) / 10
        return (
          <motion.span
            key={tech}
            className="absolute max-w-[7rem] truncate rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary/70 backdrop-blur-sm sm:max-w-[9rem]"
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
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center">
          <div
            className={cn(
              'mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl text-2xl font-bold',
              logoBackground === 'light'
                ? 'border border-white bg-white text-primary'
                : 'border border-primary/30 bg-primary/15 text-primary'
            )}
            aria-hidden
          >
            {image ? (
              <Image src={image} alt="" width={64} height={64} className="h-full w-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <p className="mx-auto mt-3 max-w-[14rem] text-sm font-semibold leading-snug text-foreground/70 sm:max-w-[18rem]">
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}
