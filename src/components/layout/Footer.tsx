'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { socialLinks, personalInfo } from '@/data/personal';

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-secondary transition-all hover:border-violet/30 hover:text-violet hover:bg-violet/[0.06]"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {Icon && <Icon size={18} />}
                </motion.a>
              );
            })}
          </div>

          <motion.p
            className="text-sm text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()}{' '}
            <span className="text-primary">{personalInfo.name}</span>. Built
            with passion.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-secondary transition-all hover:border-violet/30 hover:text-violet hover:bg-violet/[0.06]"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
