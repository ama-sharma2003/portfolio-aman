import type { PersonalInfo, NavLink, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Aman Sharma',
  title: 'Frontend Developer',
  tagline: 'Crafting immersive, performant digital experiences.',
  email: 'amansharmaradauri@gmail.com',
  phone: '+91 8168282601',
  location: 'Yamuna Nagar, Haryana, India',
  linkedin: 'https://www.linkedin.com/in/amansharma2003dev',
  github: 'https://github.com/ama-sharma2003',
  bio: [
    "I'm a technically driven Frontend Developer with a passion for building user-centric web experiences that are fast, accessible, and visually compelling.",
    "With hands-on experience shipping production applications using React, Next.js, and modern CSS, I focus on translating business requirements into engaging, high-performance interfaces.",
    "Currently working at Ambros Tech Solutions, I've contributed to live projects serving thousands of users — optimizing responsive layouts, cross-browser compatibility, and page performance.",
  ],
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/ama-sharma2003',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/amansharma2003dev',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:amansharmaradauri@gmail.com',
    icon: 'mail',
  },
];
