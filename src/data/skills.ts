import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' },
    ],
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
      { name: 'C', icon: 'c' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Chrome DevTools', icon: 'chrome' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    category: 'UI/UX & Design',
    skills: [
      { name: 'Responsive Design', icon: 'responsive' },
      { name: 'Cross-browser', icon: 'browser' },
      { name: 'Performance', icon: 'performance' },
      { name: 'Accessibility', icon: 'accessibility' },
      { name: 'SEO', icon: 'seo' },
    ],
  },
];
