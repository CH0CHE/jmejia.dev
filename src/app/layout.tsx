import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#09101f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'Josue Mejia — Full Stack Software Engineer',
    template: '%s | Josue Mejia',
  },
  description:
    'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS. Construyendo software moderno, escalable y de alto rendimiento desde Ciudad de Guatemala.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    '.NET',
    'C#',
    'AWS',
    'Node.js',
    'Guatemala',
    'Josue Mejia',
    'Josue Francisco Mejia Morales',
  ],
  authors: [{ name: 'Josue Francisco Mejia Morales', url: 'https://jmejia.dev' }],
  creator: 'Josue Francisco Mejia Morales',
  metadataBase: new URL('https://jmejia.dev'),
  alternates: {
    canonical: 'https://jmejia.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'es_GT',
    url: 'https://jmejia.dev',
    title: 'Josue Mejia — Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS.',
    siteName: 'Josue Mejia',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Josue Mejia — Full Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Mejia — Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer especializado en Next.js, React, .NET y arquitecturas cloud en AWS.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
