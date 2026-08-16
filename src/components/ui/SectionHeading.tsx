'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        'mb-8 md:mb-10',
        align === 'center' && 'text-center',
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {subtitle && (
        <span className="inline-block text-violet text-sm font-medium tracking-widest uppercase mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className="font-heading font-bold text-primary"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <motion.div
        className={cn(
          'h-[2px] bg-gradient-to-r from-violet via-rose to-accent mt-6',
          align === 'center' ? 'mx-auto w-24' : 'w-20'
        )}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
      />
    </motion.div>
  );
}
