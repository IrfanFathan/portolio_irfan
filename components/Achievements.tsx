'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Calendar, Award } from 'lucide-react';
import { achievementsData } from '@/data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 font-mono">
          <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
            <Trophy className="w-4 h-4" /> 10 // Key Achievements & Competitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Recognitions & Technical Awards
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded mt-3" />
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/90 shadow-sm hover:border-cyan-500/50 hover:shadow-xl transition-all flex flex-col justify-between font-mono"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-800 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-500" /> {item.year}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed my-4">
                  {item.description}
                </p>
              </div>

              {item.proofUrl && (
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80">
                  <a
                    href={item.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    {item.proofText || 'View Verification Document'} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
