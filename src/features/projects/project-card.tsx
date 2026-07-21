'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/language-provider'
import { ProjectPlaceholder } from './project-placeholder'

export function ProjectMedia({
  video,
  image,
  technologies,
  name,
  logoBackground,
}: {
  video?: string
  image?: string
  technologies: string[]
  name: string
  logoBackground?: 'light'
}) {
  const [showVideo, setShowVideo] = useState(false)
  const { t } = useLanguage()

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        {showVideo && video ? (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
            <button
              onClick={() => setShowVideo(false)}
              aria-label={t.projects.closePreviewAria}
              className="absolute right-3 top-3 z-10 flex items-center justify-center rounded-full border border-white/20 bg-black/60 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <ProjectPlaceholder
              name={name}
              technologies={technologies}
              image={image}
              logoBackground={logoBackground}
            />
            {video && (
              <button
                onClick={() => setShowVideo(true)}
                aria-label={t.projects.viewVideoPreviewAria}
                className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm transition-all duration-200 hover:border-primary/70 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
              >
                <Play className="h-3 w-3 fill-current" aria-hidden />
                {t.projects.viewPreview}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
