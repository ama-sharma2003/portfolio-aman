'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const timer = setTimeout(() => {
      setIsTouchDevice(isTouch);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    if (isTouchDevice) return;

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computed = window.getComputedStyle(target);
      setIsPointer(computed.cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', checkPointer);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', checkPointer);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, [isTouchDevice, handleMouseMove]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full bg-violet mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 48 : isPointer ? 32 : 10,
          height: isHovering ? 48 : isPointer ? 32 : 10,
          opacity: isHovering ? 0.15 : isPointer ? 0.2 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full border border-violet/40"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 56 : isPointer ? 40 : 28,
          height: isHovering ? 56 : isPointer ? 40 : 28,
          opacity: isHovering ? 0.4 : isPointer ? 0.3 : 0.2,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />
    </>
  );
}
