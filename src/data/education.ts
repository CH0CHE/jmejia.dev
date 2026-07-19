import type { Education } from '@/types'

export const education: Education[] = [
  {
    id: 'umg-maestria',
    institution: 'Universidad Mariano Gálvez',
    degree: 'Maestría en Redes y Telecomunicaciones',
    startDate: 'Abril 2024',
    endDate: 'Marzo 2027',
    icon: '/logos/umg.webp',
    current: true,
  },
  {
    id: 'umg-ingenieria',
    institution: 'Universidad Mariano Gálvez',
    degree: 'Ingeniería en Sistemas de Información y Ciencias de la Computación',
    startDate: 'Enero 2019',
    endDate: 'Noviembre 2023',
    note: 'Pensum cerrado',
    icon: '/logos/umg.webp',
  },
  {
    id: 'autodidacta',
    institution: '',
    degree: 'Autodidacta — Full Stack',
    startDate: '2020',
    endDate: 'May 2022',
    description:
      'Aprendizaje autodidacta intensivo en desarrollo web moderno, construyendo proyectos reales para dominar el stack completo.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Dominio del stack JavaScript (React, Node.js, Express)',
      'Proyectos personales de frontend y backend',
      'Contribuciones a proyectos open source',
      'Certificaciones y cursos en AWS y desarrollo web',
    ],
  },
]
