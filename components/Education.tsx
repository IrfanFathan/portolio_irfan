'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 font-mono">
          <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
            <GraduationCap className="w-4 h-4" /> 06 // Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Academic Foundation
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded mt-3" />
        </div>

        {/* Education Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/90 shadow-lg hover:border-cyan-500/50 transition-all font-mono"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Degree & Inst Summary */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs border border-cyan-500/30">
                Engineering Undergraduate
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {educationData.degree}
              </h3>
              <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400">
                {educationData.field}
              </p>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-sans">
                <p className="font-semibold text-slate-900 dark:text-slate-100 font-mono text-sm">
                  {educationData.institution}
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-mono">
                  Affiliated with {educationData.university}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold">
                    <Calendar className="w-4 h-4 text-cyan-500" /> {educationData.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4" /> {educationData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Coursework & Activities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-500" /> Relevant Engineering Coursework:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-sans">
                  {educationData.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-500" /> Academic & Technical Activities:
                </h4>
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
                  {educationData.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
