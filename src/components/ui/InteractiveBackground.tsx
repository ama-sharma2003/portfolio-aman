'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position motion values (relative to container)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth lag effect
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 0.6 });

  // Track page scroll for background vertical parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Calculate dimensions and update bounds on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track mouse coordinates relative to this container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial center coordinates
    const rect = container.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      
      mouseX.set(relativeX);
      mouseY.set(relativeY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      // Reset smoothly to center on leave
      const rect = container.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Parallax offsets: maps mouse position to opposite movement (max 20px)
  const parallaxX = useTransform(springX, [0, dimensions.width], [15, -15]);
  const parallaxY = useTransform(springY, [0, dimensions.height], [15, -15]);

  // Scroll translation: shift background upwards as user scrolls down (max 120px)
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Spotlight glow mask following the mouse
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(139, 92, 246, 0.14), transparent 80%)`;

  // Spring opacity for the spotlight (fades out when mouse leaves)
  const spotlightOpacity = useSpring(isHovered ? 1 : 0.4, { stiffness: 100, damping: 20 });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0F]"
      aria-hidden="true"
    >
      {/* Scroll Parallax Wrapper */}
      <motion.div
        className="absolute -inset-x-0 -top-10 -bottom-24 w-full h-[calc(100%+136px)]"
        style={{ y: prefersReduced ? 0 : scrollY }}
      >
        {/* Mouse Parallax Wrapper */}
        <motion.div
          className="relative w-full h-full"
          style={{
            x: prefersReduced ? 0 : parallaxX,
            y: prefersReduced ? 0 : parallaxY,
          }}
        >
          {/* Background Image */}
          <Image
            src="/projects/innerheaderPortfolio.png"
            alt="Futuristic dashboard background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-right md:object-center opacity-45 select-none pointer-events-none transition-opacity duration-700"
          />

          {/* Interactive Spotlight Overlay (reveals image details under cursor) */}
          {!prefersReduced && (
            <motion.div
              className="absolute inset-0 mix-blend-screen pointer-events-none transition-opacity duration-300"
              style={{
                background: spotlightBg,
                opacity: spotlightOpacity,
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Decorative Grid Overlay (merges background with existing grid concept) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Left Gradient Cover (makes text highly readable, fades out on the right where dashboard is) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/85 to-transparent w-full md:w-3/4 pointer-events-none" />

      {/* Radial Center Overlay (adds visual depth) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0A0A0F_95%)] pointer-events-none" />

      {/* Bottom Vignette/Transition Gradient (ensures seamless blend into About section) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </div>
  );
}
