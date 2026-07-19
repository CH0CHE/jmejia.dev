import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Josue Mejia — Full Stack Developer',
    short_name: 'jmejia.dev',
    description:
      'Full Stack Developer especializado en Next.js, React, .NET y AWS. Ciudad de Guatemala.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09101f',
    theme_color: '#09101f',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
