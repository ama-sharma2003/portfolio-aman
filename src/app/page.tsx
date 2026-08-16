import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Visual Accent Top Bar */}
      <div className="h-[4px] bg-gradient-to-r from-violet via-rose via-amber via-emerald to-accent w-full" />

      {/* Sections Wrapper */}
      <div className="w-full flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
