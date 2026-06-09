'use client'

import { useEffect, useRef } from 'react'

// rgba equivalent of oklch(0.78 0.155 201) — electric cyan
const CYAN = 'rgba(34, 211, 238,'
const COUNT = 75
const MAX_DIST = 155
const BASE_SPEED = 0.35

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  opacity: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef({
    particles: [] as Particle[],
    animId: 0,
    w: 0,
    h: 0,
    mouse: { x: -9999, y: -9999 },
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const state = stateRef.current

    const init = (w: number, h: number) => {
      state.w = w
      state.h = h
      state.particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * BASE_SPEED * 2,
        vy: (Math.random() - 0.5) * BASE_SPEED * 2,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
      }))
    }

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      init(w, h)
    }

    const tick = () => {
      const { w, h, particles, mouse } = state
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 120 && d > 0) {
          const f = ((120 - d) / 120) * 0.06
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
          const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
          if (sp > BASE_SPEED * 4) {
            p.vx = (p.vx / sp) * BASE_SPEED * 4
            p.vy = (p.vy / sp) * BASE_SPEED * 4
          }
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.22
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `${CYAN} ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${CYAN} ${p.opacity})`
        ctx.fill()
      }

      state.animId = requestAnimationFrame(tick)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      state.mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => {
      state.mouse = { x: -9999, y: -9999 }
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setup()
    window.addEventListener('resize', setup)
    window.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    if (!prefersReduced) tick()

    return () => {
      window.removeEventListener('resize', setup)
      window.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(state.animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-50"
      aria-hidden="true"
    />
  )
}
