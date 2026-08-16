'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { personalInfo } from '@/data/personal';
import { Card } from '@/components/ui/Card';
import { Sparkles, Terminal, Cpu, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { label: 'Experience', value: '1 years', icon: Terminal, color: 'text-accent' },
    { label: 'Live Projects', value: '4+', icon: Cpu, color: 'text-violet' },
    { label: 'Passion', value: 'UI/UX & Perf', icon: Sparkles, color: 'text-amber' },
    { label: 'Mindset', value: 'Continuous Learning', icon: Heart, color: 'text-rose' },
  ];

  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="About Me" subtitle="My Journey" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Profile Image Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <ScrollReveal variant="scale" delay={0.1}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Outer Glow Ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet/40 via-rose/20 to-accent/10 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />

                {/* Image Container */}
                <div className="relative w-[260px] h-[320px] sm:w-[280px] sm:h-[350px] rounded-2xl overflow-hidden border-2 border-white/[0.1] group-hover:border-violet/40 transition-colors duration-500">
                  {/* Image */}
                  <Image
                    src="/profile.jpg"
                    alt="Aman Sharma - Frontend Developer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 260px, 280px"
                    priority
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Name Tag at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                      <span className="text-xs font-medium text-emerald tracking-wider uppercase">
                        Available
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-primary mt-1">
                      {personalInfo.name}
                    </h3>
                    <span className="text-xs text-secondary/80">
                      {personalInfo.title}
                    </span>
                  </div>
                </div>

                {/* Decorative Accent Dots */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full border-2 border-violet/30 bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-violet" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full border border-rose/20 bg-background" />
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                Designing & Developing Interactive Digital Products
              </h3>
            </ScrollReveal>

            {personalInfo.bio.map((paragraph, index) => (
              <ScrollReveal key={index} variant="fadeUp" delay={0.2 + index * 0.1}>
                <p className="text-secondary leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}

            <ScrollReveal variant="fadeUp" delay={0.5}>
              <div className="pt-4">
                <span className="text-secondary/60 text-sm italic">
                  Currently focusing on building modern web applications with Next.js, Framer Motion, and lightweight interactive design patterns.
                </span>
              </div>
            </ScrollReveal>

            {/* Stats Grid - Now inside bio column */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <ScrollReveal
                    key={stat.label}
                    variant="scale"
                    delay={0.1 * index}
                    className="h-full"
                  >
                    <Card className="p-4 flex flex-col justify-between h-full hover:bg-white/[0.02]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-secondary/60 text-[10px] uppercase tracking-wider font-semibold">
                          {stat.label}
                        </span>
                        <Icon className={`${stat.color} w-4 h-4`} />
                      </div>
                      <div>
                        <span className="text-xl font-bold font-heading text-primary">
                          {stat.value}
                        </span>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
