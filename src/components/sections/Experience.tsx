'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { experiences, education, certifications } from '@/data/experience';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, FileText, Download, ExternalLink } from 'lucide-react';

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-12 md:py-16 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="Experience & Education" subtitle="My Timeline" />

        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Work Experience Vertical Timeline */}
          <div className="lg:col-span-7 relative">
            <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
              <Briefcase className="text-violet w-5 h-5" />
              Work History
            </h3>

            {/* Timeline Vertical Progress Line */}
            <div className="absolute left-[21px] top-12 bottom-6 w-[2px] bg-white/[0.04]">
              <motion.div
                className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-violet to-violet/20"
                style={{ scaleY, height: '100%' }}
              />
            </div>

            <div className="space-y-6 md:space-y-8 pl-12 relative">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Circle Indicator */}
                  <div className="absolute -left-[43px] top-1.5 w-6 h-6 rounded-full border-2 border-violet bg-[#0A0A0F] flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-violet animate-pulse" />
                  </div>

                  <ScrollReveal variant="fadeUp" delay={index * 0.1}>
                    <Card className="p-6 md:p-8 bg-surface/50 border-white/[0.06] hover:bg-white/[0.01]">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-primary">{exp.role}</h4>
                          <span className="text-rose text-sm font-medium">{exp.company}</span>
                        </div>
                        <div className="flex flex-col md:items-end gap-1.5 text-xs text-secondary/60">
                          <span className="flex items-center gap-1.5 font-medium">
                            <Calendar size={12} className="text-amber" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-sm text-secondary/80 leading-relaxed flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose/40 mt-2 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-secondary/80 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <GraduationCap className="text-rose w-5 h-5" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <ScrollReveal key={edu.degree} variant="fadeUp" delay={index * 0.1}>
                    <Card className="p-6 bg-surface/50 border-white/[0.06] hover:bg-white/[0.01]">
                      <span className="text-violet text-xs font-semibold uppercase tracking-wider block mb-2">
                        {edu.duration}
                      </span>
                      <h4 className="text-base font-bold text-primary mb-1">{edu.degree}</h4>
                      <p className="text-sm text-secondary mb-3">{edu.institution}</p>
                      <span className="text-xs text-secondary/50 flex items-center gap-1.5">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 flex items-center gap-3">
                <Award className="text-amber w-5 h-5" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <ScrollReveal key={cert.title} variant="fadeUp" delay={index * 0.1}>
                    <Card className="p-5 bg-surface/50 border-white/[0.06] hover:bg-white/[0.01] flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber/5 flex items-center justify-center text-amber shrink-0">
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-0.5">{cert.title}</h4>
                        <span className="text-xs text-secondary/50">{cert.date}</span>
                      </div>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Curriculum Vitae / Resume Download Banner */}
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <Card className="p-6 bg-gradient-to-br from-violet/10 via-surface to-surface border-violet/20 hover:border-violet/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center text-violet shrink-0">
                    <FileText size={24} />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-violet block mb-1">
                      Official Curriculum Vitae
                    </span>
                    <h4 className="text-base font-bold text-primary mb-1">
                      Aman Sharma &mdash; Resume
                    </h4>
                    <p className="text-xs text-secondary/70 mb-4 leading-relaxed">
                      Download the complete PDF resume containing technical skillsets, project details, and experience.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="/Aman_Sharma_Resume.pdf"
                        download="Aman_Sharma_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-violet px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-violet/90 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                      >
                        <Download size={14} />
                        Download PDF
                      </a>
                      <a
                        href="/Aman_Sharma_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-medium text-primary transition-all hover:bg-white/[0.08]"
                      >
                        <ExternalLink size={12} className="text-violet" />
                        View PDF
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
