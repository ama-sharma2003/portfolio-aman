'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetic?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  magnetic = true,
  ariaLabel,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const ref = useRef<any>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setMagneticOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const handleClick = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);
    onClick?.();
  };

  const baseStyles =
    'relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer';

  const variants = {
    primary:
      'bg-violet/10 text-violet border border-violet/20 hover:bg-violet/20 hover:border-violet/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    secondary:
      'bg-surface text-primary border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06]',
    ghost:
      'text-secondary hover:text-primary hover:bg-white/[0.04]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel}>
        <motion.div
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          animate={{
            x: magneticOffset.x,
            y: magneticOffset.y,
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 15 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {ripple && (
            <motion.span
              className="absolute rounded-full bg-violet/20 pointer-events-none"
              initial={{ width: 0, height: 0, opacity: 0.5 }}
              animate={{ width: 200, height: 200, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                left: ripple.x - 100,
                top: ripple.y - 100,
              }}
            />
          )}
          {children}
        </motion.div>
      </a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 pointer-events-none', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{
        x: magneticOffset.x,
        y: magneticOffset.y,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      aria-label={ariaLabel}
    >
      {ripple && (
        <motion.span
          className="absolute rounded-full bg-violet/20 pointer-events-none"
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            left: ripple.x - 100,
            top: ripple.y - 100,
          }}
        />
      )}
      {children}
    </motion.button>
  );
}
