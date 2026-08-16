'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, Download } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { Button } from '@/components/ui/Button';
import { InteractiveBackground } from '@/components/ui/InteractiveBackground';

const HeroScene = dynamic(
  () => import('@/components/3d/HeroScene').then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] py-20 items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Interactive Dashboard Background Image */}
      <InteractiveBackground />

      {/* 3D Scene */}
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/[0.06] px-4 py-1.5 text-xs font-medium text-violet">
            <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          className="font-heading font-bold text-primary mb-4"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="bg-gradient-to-r from-violet via-rose to-accent bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[1]}
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-3 max-w-xl text-lg text-secondary md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0 }}
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          className="mx-auto mb-8 max-w-lg text-secondary/70"
          style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            ariaLabel="View my projects"
          >
            View Projects
            <ArrowRight size={16} />
          </Button>

          <a
            href="/Aman_Sharma_Resume.pdf"
            download="Aman_Sharma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              size="lg"
              ariaLabel="Download Resume PDF"
            >
              <FileText size={16} className="text-rose" />
              Download CV
              <Download size={14} />
            </Button>
          </a>

          <Button
            variant="secondary"
            size="lg"
            href="#contact"
            ariaLabel="Contact me"
          >
            <Mail size={16} />
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <motion.div
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-1.5 w-1 rounded-full bg-violet" />
        </motion.div>
      </motion.div>
    </section>
  );
}
