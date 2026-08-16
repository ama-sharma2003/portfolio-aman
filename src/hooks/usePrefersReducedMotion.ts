'use client';

import { useSyncExternalStore } from 'react';

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      media.addEventListener('change', callback);
      return () => media.removeEventListener('change', callback);
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false
  );
}
