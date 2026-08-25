'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Printer, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalData, skillsData, certificationsData, experienceData, educationData } from '@/data/portfolioData';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 font-mono">
          <div>
            <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
              <FileText className="w-4 h-4" /> 07 // Curriculum Vitae
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Professional Resume
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              ATS-optimized summary ready for technical recruiter evaluation and direct PDF download.
            </p>
            <div className="w-20 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="/resume"
              className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all"
            >
              Printable Version <Printer className="w-4 h-4" />
            </a>

            <a
              href="/resume"
              className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wider border border-slate-300 dark:border-slate-700 hover:border-cyan-500 transition-all inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-500" /> Download PDF
            </a>
          </div>
        </div>

        {/* ATS Resume Sheet Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 shadow-2xl font-mono text-slate-900 dark:text-slate-100"
        >
          {/* Header */}
          <div className="pb-6 border-b border-slate-200 dark:border-slate-800 mb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-3xl font-extrabold tracking-tight uppercase">{personalData.name}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-bold text-sm mt-1">{personalData.fullTitle}</p>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-right space-y-1 font-sans">
              <p>{personalData.location}</p>
              <p>{personalData.email}</p>
              <p>{personalData.github}</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Professional Summary
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {personalData.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Core Technical Skills
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs font-sans">
              {skillsData.map((cat, i) => (
                <div key={i}>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">{cat.category}: </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {cat.items.map(item => item.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Relevant Technical Experience & Internships
            </h4>
            <div className="space-y-4 text-xs">
              {experienceData.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>{exp.role} — {exp.organization}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 mt-1 space-y-1 font-sans">
                    {exp.responsibilities.slice(0, 2).map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Certifications & Professional Training
            </h4>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 font-sans">
              {certificationsData.map((cert, i) => (
                <li key={i}>
                  <strong className="font-mono">{cert.title}</strong> — {cert.issuer} ({cert.status})
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
              Education
            </h4>
            <div className="flex justify-between text-xs font-sans">
              <div>
                <strong className="font-mono text-slate-900 dark:text-white">{educationData.degree}</strong> ({educationData.field})
                <p className="text-slate-500 dark:text-slate-400">{educationData.institution}</p>
              </div>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{educationData.duration}</span>
            </div>
          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
            <a
              href="/resume"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
            >
              Open Full-Screen ATS Printable Layout <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
