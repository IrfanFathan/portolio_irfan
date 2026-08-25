'use client';

import React, { useRef } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Network, Router, Terminal, Cloud, ShieldCheck, Cpu } from 'lucide-react';
import { skillsData, SkillItem } from '@/data/portfolioData';

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.bloom-skill-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Network': return Network;
      case 'Router': return Router;
      case 'Terminal': return Terminal;
      case 'Cloud': return Cloud;
      case 'ShieldCheck': return ShieldCheck;
      default: return Cpu;
    }
  };

  const getLevelPill = (level: SkillItem['level']) => {
    switch (level) {
      case 'Proficient':
        return 'bg-[#18142A] text-white dark:bg-purple-500/20 dark:text-purple-300';
      case 'Intermediate':
        return 'bg-purple-100 text-purple-800 dark:bg-slate-800 dark:text-slate-200';
      default:
        return 'bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-400';
    }
  };

  return (
    <section id="skills" ref={containerRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold block mb-2">
            Skillset Breakdown
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical Capabilities
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
            High-speed routing, Linux administration, AWS cloud VPCs, network security, and lab simulation tools.
          </p>
        </div>

        {/* Categories Grid (BloomFi Floating Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat, idx) => {
            const IconComponent = getIconComponent(cat.icon);
            return (
              <div
                key={idx}
                className="bloom-skill-card bloomfi-card p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-[#18142A] dark:bg-purple-500 text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80"
                      >
                        <span className="text-slate-800 dark:text-slate-200 text-xs font-semibold">
                          {skill.name}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${getLevelPill(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
