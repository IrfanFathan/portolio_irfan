'use client';

import React, { useState, useRef } from 'react';
import { Award, CheckCircle2, Clock, Calendar, ExternalLink } from 'lucide-react';
import { certificationsData, CertificationItem } from '@/data/portfolioData';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function Certifications() {
  const [filter, setFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Planned'>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.bloom-cert-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  const filteredCerts = certificationsData.filter((cert) => {
    if (filter === 'All') return true;
    return cert.status === filter;
  });

  return (
    <section id="certifications" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & BloomFi Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6 text-left">
          <div>
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold block mb-2">
              Professional Credentials
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Certifications & Roadmap
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {(['All', 'Completed', 'In Progress', 'Planned'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === tab
                    ? 'bg-[#18142A] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* BloomFi Floating Credential Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bloom-cert-card bloomfi-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#18142A] text-purple-300 font-extrabold text-sm flex items-center justify-center shadow-md">
                      {cert.logoText}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-lg leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-[11px] font-semibold">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>{cert.credentialId ? `ID: ${cert.credentialId}` : `Status: ${cert.status}`}</span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bloomfi-pill-btn px-4 py-1.5 text-[11px] inline-flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
