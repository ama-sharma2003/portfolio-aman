import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'bangalore-study',
    title: 'Bangalore Study',
    description:
      'A comprehensive education platform helping students discover colleges, courses, and career opportunities across Bangalore.',
    longDescription:
      'Developed and optimized responsive landing pages for a live education platform, ensuring cross-browser compatibility and mobile responsiveness across all devices.',
    techStack: ['React.js', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Responsive landing pages',
      'Cross-browser compatibility',
      'Mobile-first design',
      'Performance optimized',
    ],
    image: '/projects/bangalore-study.png',
    liveDemo: 'https://www.bangalorestudy.com',
    featured: true,
  },
  {
    id: 'kerala-study',
    title: 'Kerala Study',
    description:
      'An education discovery platform for students seeking colleges and courses in Kerala, featuring optimized landing pages.',
    longDescription:
      'Built client-facing landing pages translating business requirements into engaging, high-performance web experiences with optimized page load times.',
    techStack: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Client-facing landing pages',
      'Business-driven UI',
      'High-performance rendering',
      'SEO-optimized pages',
    ],
    image: '/projects/kerala-study.png',
    liveDemo: 'https://www.keralastudy.com',
    featured: true,
  },
  {
    id: 'sundown-clone',
    title: 'Sundown Studio Clone',
    description:
      'A pixel-perfect, responsive clone of the Sundown Studio website featuring modern animations and interactive UI patterns.',
    longDescription:
      'Designed and developed a visually accurate clone implementing modern UI/UX patterns with GSAP animations, optimized layout, and peak page performance.',
    techStack: ['React', 'GSAP', 'JavaScript', 'CSS'],
    features: [
      'Pixel-perfect design',
      'GSAP scroll animations',
      'Modern UI/UX patterns',
      'Optimized performance',
    ],
    image: '/projects/sundown-clone.png',
    github: 'https://github.com/ama-sharma2003',
    featured: true,
  },
  {
    id: 'webcom-institute',
    title: 'Webcom Institute',
    description:
      'A user-friendly website for an educational institute with an integrated To-Do list application featuring local storage persistence.',
    longDescription:
      'Built an accessible and user-friendly institute website along with a responsive To-Do List application using HTML, CSS, and JavaScript with browser Local Storage.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    features: [
      'Institute website',
      'To-Do list app',
      'Local Storage persistence',
      'Responsive design',
    ],
    image: '/projects/webcom-institute.png',
    github: 'https://github.com/ama-sharma2003',
    featured: false,
  },
];
