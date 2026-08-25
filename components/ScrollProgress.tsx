'use client';

import React, { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    });
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-slate-800/20 pointer-events-none"
    >
      <div
        ref={progressBarRef}
        className="w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 origin-left scale-x-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
      />
    </div>
  );
}
