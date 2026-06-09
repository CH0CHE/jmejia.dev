import { ImageResponse } from 'next/og'

export const alt = 'Josue Mejia — Full Stack Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const CYAN = '#22d3ee'
const VIOLET = '#a78bfa'
const BG = '#09101f'
const SURFACE = '#111827'
const TEXT = '#f1f5f9'
const MUTED = '#64748b'

const TECHS = ['Next.js', 'React', 'TypeScript', 'C# / .NET', 'AWS']

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: BG,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 88px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '700px',
            height: '500px',
            background: `radial-gradient(ellipse at 30% 40%, ${CYAN}22, transparent 60%)`,
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '600px',
            height: '500px',
            background: `radial-gradient(ellipse at 70% 60%, ${VIOLET}18, transparent 60%)`,
            borderRadius: '50%',
          }}
        />

        {/* Top bar: domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: CYAN,
              boxShadow: `0 0 16px ${CYAN}80`,
            }}
          />
          <span
            style={{
              color: CYAN,
              fontSize: '26px',
              fontWeight: '700',
              letterSpacing: '-0.5px',
            }}
          >
            jmejia.dev
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: '800',
            letterSpacing: '-3px',
            lineHeight: '1',
            color: TEXT,
            marginBottom: '18px',
          }}
        >
          Josue Mejia
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: '30px',
            fontWeight: '400',
            color: MUTED,
            marginBottom: '52px',
            letterSpacing: '-0.5px',
          }}
        >
          Full Stack Software Engineer
        </div>

        {/* Tech pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {TECHS.map((tech) => (
            <div
              key={tech}
              style={{
                border: `1px solid ${CYAN}40`,
                borderRadius: '999px',
                padding: '10px 20px',
                fontSize: '20px',
                fontWeight: '500',
                color: CYAN,
                background: `${CYAN}12`,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom-right: location */}
        <div
          style={{
            position: 'absolute',
            bottom: '72px',
            right: '88px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '18px', color: MUTED }}>
            Ciudad de Guatemala 🇬🇹
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: `${CYAN}18`,
              border: `1px solid ${CYAN}30`,
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: CYAN,
              }}
            />
            <span style={{ fontSize: '16px', fontWeight: '600', color: CYAN }}>
              Disponible
            </span>
          </div>
        </div>

        {/* Dot grid (subtle) */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            backgroundImage: `radial-gradient(circle, ${CYAN}20 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            opacity: '0.15',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
