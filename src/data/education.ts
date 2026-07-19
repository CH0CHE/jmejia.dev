import type { Education } from '@/types'

export const education: Education[] = [
  {
    id: 'umg-maestria',
    institution: 'Universidad Mariano Gálvez',
    degree: {
      es: 'Maestría en Redes y Telecomunicaciones',
      en: 'Master’s Degree in Networks and Telecommunications',
    },
    startDate: 'Abril 2024',
    endDate: 'Marzo 2027',
    icon: '/logos/umg.webp',
    current: true,
  },
  {
    id: 'umg-ingenieria',
    institution: 'Universidad Mariano Gálvez',
    degree: {
      es: 'Ingeniería en Sistemas de Información y Ciencias de la Computación',
      en: 'Bachelor’s Degree in Information Systems and Computer Science',
    },
    startDate: 'Enero 2019',
    endDate: 'Noviembre 2023',
    note: {
      es: 'Pensum cerrado',
      en: 'All coursework completed',
    },
    icon: '/logos/umg.webp',
  },
  {
    id: 'autodidacta',
    institution: '',
    degree: {
      es: 'Autodidacta — Full Stack',
      en: 'Self-taught — Full Stack',
    },
    startDate: '2020',
    endDate: 'May 2022',
    description: {
      es: 'Aprendizaje autodidacta intensivo en desarrollo web moderno, construyendo proyectos reales para dominar el stack completo.',
      en: 'Intensive self-directed learning in modern web development, building real projects to master the full stack.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    highlights: [
      {
        es: 'Dominio del stack JavaScript (React, Node.js, Express)',
        en: 'Mastery of the JavaScript stack (React, Node.js, Express)',
      },
      {
        es: 'Proyectos personales de frontend y backend',
        en: 'Personal frontend and backend projects',
      },
      {
        es: 'Contribuciones a proyectos open source',
        en: 'Contributions to open source projects',
      },
      {
        es: 'Certificaciones y cursos en AWS y desarrollo web',
        en: 'Certifications and courses in AWS and web development',
      },
    ],
  },
]
