'use client';

import React, { useRef } from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '@/data/portfolioData';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.fromTo(
      timelineLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.exp-timeline-container',
          start: 'top 70%',
          end: 'bottom 75%',
          scrub: 0.4,
        },
      }
    );

    gsap.from('.bloom-exp-item', {
      scrollTrigger: {
        trigger: '.exp-timeline-container',
        start: 'top 75%',
      },
      opacity: 0,
      y: 35,
      stagger: 0.2,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold block mb-2">
            Career Timeline
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & Education
          </h2>
        </div>

        {/* Vertical Network Timeline */}
        <div className="exp-timeline-container relative pl-6 sm:pl-10 max-w-4xl">
          <div
            ref={timelineLineRef}
            className="absolute left-3 sm:left-4 top-4 bottom-4 w-1 bg-[#18142A] dark:bg-purple-500 rounded-full origin-top"
          />

          <div className="space-y-10">
            {experienceData.map((item, idx) => (
              <div key={idx} className="bloom-exp-item relative group">
                <div className="absolute -left-[19px] sm:-left-[23px] top-2 w-6 h-6 rounded-full bg-[#18142A] text-white flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                </div>

                <div className="bloomfi-card p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-[11px] font-semibold">
                        {item.type}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        {item.organization}
                      </h4>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-purple-500" /> {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
