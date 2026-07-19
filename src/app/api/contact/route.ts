import nodemailer from 'nodemailer'
import { env } from '@/lib/env'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
  turnstileToken: string
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== 'object') return false
  const { name, email, message, turnstileToken } = data as Partial<ContactPayload>
  return (
    typeof name === 'string' &&
    name.trim().length > 0 &&
    typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof message === 'string' &&
    message.trim().length >= 10 &&
    typeof turnstileToken === 'string' &&
    turnstileToken.length > 0
  )
}

async function isCaptchaValid(token: string, remoteIp: string | null) {
  const body = new URLSearchParams({
    secret: process.env.CONTACTO_TURNSTILE_SECRET_KEY ?? '',
    response: token,
  })
  if (remoteIp) body.set('remoteip', remoteIp)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  })
  const result = await res.json().catch(() => null)
  return Boolean(result?.success)
}

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)

  if (!isValidPayload(data)) {
    return Response.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const { name, email, subject, message, turnstileToken } = data

  const remoteIp = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-forwarded-for')
  if (!(await isCaptchaValid(turnstileToken, remoteIp))) {
    return Response.json({ error: 'Captcha verification failed' }, { status: 403 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACTO_GMAIL_USER,
      pass: process.env.CONTACTO_GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.CONTACTO_GMAIL_USER,
      to: env.email,
      replyTo: email,
      subject: subject?.trim() ? subject : `Nuevo mensaje de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return Response.json({ error: message }, { status: 502 })
  }

  return Response.json({ ok: true })
}
