'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { skillCategories } from '@/data/skills';
import {
  Atom,
  Terminal,
  Wind,
  Sparkles,
  Zap,
  Code2,
  FileJson,
  FileCode,
  Paintbrush,
  GitBranch,
  Github,
  Laptop,
  Chrome,
  Triangle,
  Smartphone,
  Globe,
  Accessibility,
  Search,
  Database,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: Atom,
  nextjs: Terminal,
  tailwind: Wind,
  framer: Sparkles,
  postgresql: Database,
  javascript: Code2,
  typescript: FileJson,
  html: FileCode,
  css: Paintbrush,
  c: Terminal,
  git: GitBranch,
  github: Github,
  vscode: Laptop,
  chrome: Chrome,
  vercel: Triangle,
  responsive: Smartphone,
  browser: Globe,
  performance: Zap,
  accessibility: Accessibility,
  seo: Search,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);

  return (
    <section id="skills" className="relative py-12 md:py-16 overflow-hidden bg-background">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute right-10 top-1/4 w-[350px] h-[350px] bg-rose/5 rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="Skills & Toolkit" subtitle="Expertise" />

        {/* Tab selection */}
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-6 border-b border-white/[0.04] pb-6 justify-center sm:justify-start">
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.category
                    ? 'text-violet'
                    : 'text-secondary hover:text-primary hover:bg-white/[0.02]'
                }`}
              >
                {cat.category}
                {activeCategory === cat.category && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-violet/[0.08] border border-violet/20"
                    layoutId="activeCategoryBg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="min-h-[250px]">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {skillCategories
                .find((cat) => cat.category === activeCategory)
                ?.skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="p-6 flex flex-col items-center text-center justify-center h-full hover:bg-white/[0.02] cursor-default border-white/[0.06] hover:border-violet/30 group">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.04] group-hover:bg-violet/10 flex items-center justify-center mb-4 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-secondary group-hover:text-violet transition-colors duration-300" />
                        </div>
                        <span className="text-sm font-medium text-primary tracking-wide">
                          {skill.name}
                        </span>
                      </Card>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
