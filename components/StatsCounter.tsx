'use client';

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { Network, Server, Award, Cpu } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/gsap';

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { label: 'Engineering Projects', value: 6, suffix: '+', icon: Network },
    { label: 'Hands-on Labs Built', value: 14, suffix: '+', icon: Server },
    { label: 'Certifications & Credentials', value: 4, suffix: '', icon: Award },
    { label: 'Core Technologies', value: 18, suffix: '+', icon: Cpu },
  ];

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    if (prefersReducedMotion()) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = containerRef.current?.querySelectorAll('.stat-number');
    if (!targets) return;

    targets.forEach((target) => {
      const finalVal = parseInt(target.getAttribute('data-value') || '0', 10);
      const counterObj = { val: 0 };

      anime({
        targets: counterObj,
        val: finalVal,
        round: 1,
        easing: 'easeOutExpo',
        duration: 1800,
        update: () => {
          target.textContent = counterObj.val.toString();
        },
      });
    });
  };

  return (
    <section ref={containerRef} className="py-12 bg-slate-900/60 border-y border-slate-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-center flex flex-col items-center justify-center space-y-2 shadow-lg hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center">
                  <span className="stat-number" data-value={stat.value}>
                    {hasAnimated ? stat.value : 0}
                  </span>
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>

                <p className="text-xs text-slate-400 font-semibold tracking-tight uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
