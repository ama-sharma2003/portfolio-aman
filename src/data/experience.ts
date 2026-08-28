import type { Experience, Education, Certification } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'ambros-tech',
    company: 'Ambros Tech Solutions',
    role: 'Frontend Developer',
    duration: 'Aug 2025 — Jul 2026',
    location: 'Jagadhri, Haryana, India',
    description: [
      'Worked on live production projects including bangalorestudy.com and keralastudy.com, serving thousands of daily users.',
      'Developed and optimized responsive landing pages using HTML, CSS, JavaScript, and React.js with a focus on performance.',
      'Ensured cross-browser compatibility and mobile responsiveness across all major browsers and devices.',
      'Spearheaded the design and development of client-facing landing pages, translating business requirements into engaging, high-performance web experiences.',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Responsive Design',
      'Cross-browser Compatibility',
    ],
  },
];

export const education: Education[] = [
  {
    institution:
      'Jai Parkash Mukand Lal Innovative Engineering & Technology Institute',
    degree: 'B.Tech — Computer Science & Engineering',
    duration: 'Sep 2020 — Jun 2024',
    location: 'Radaur, Haryana, India',
  },
  {
    institution: 'Govt. Sr. Sec. School, Chamrori',
    degree: '12th — HBSE (Haryana Board)',
    duration: 'March 2020',
    location: 'Chamrori, Haryana, India',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Webcom Institute Certified Frontend Developer',
    date: 'March 2025',
  },
  {
    title: 'Certified in C Programming',
    date: 'September 2021',
  },
];
