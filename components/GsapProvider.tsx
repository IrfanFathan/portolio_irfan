'use client';

import { useEffect } from 'react';
import '@/lib/gsap';

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Refresh ScrollTrigger after DOM load/layout shifts
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.refresh();
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
