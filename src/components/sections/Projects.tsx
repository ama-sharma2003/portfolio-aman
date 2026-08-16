'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { Github, ExternalLink, ShieldCheck } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading title="Selected Projects" subtitle="My Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              variant="fadeUp"
              delay={index * 0.1}
              className="h-full"
            >
              <Card className="flex flex-col h-full hover:shadow-[0_20px_50px_rgba(139,92,246,0.07)] border-white/[0.06] bg-surface/50 group">
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/[0.08]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-rose text-xs font-semibold uppercase tracking-wider mb-2">
                    Case Study
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-primary group-hover:text-violet transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider block mb-3">
                      Key Highlights
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-secondary/80">
                          <ShieldCheck size={14} className="text-emerald shrink-0" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-secondary text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
                    {project.github && (
                      <Button
                        variant="secondary"
                        size="sm"
                        href={project.github}
                        ariaLabel={`GitHub repo for ${project.title}`}
                      >
                        <Github size={14} />
                        Code
                      </Button>
                    )}
                    {project.liveDemo && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.liveDemo}
                        ariaLabel={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
