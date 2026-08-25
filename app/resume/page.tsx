'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, Printer, ArrowLeft, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalData, skillsData, certificationsData, experienceData, educationData, projectsData } from '@/data/portfolioData';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans print:bg-white print:text-black">
      
      {/* Hide Navbar during print */}
      <div className="print:hidden">
        <Navbar activeSection="resume" />
      </div>

      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 print:p-0 print:m-0 print:max-w-none">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 font-mono text-xs print:hidden">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Main Portfolio
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
            >
              <Printer className="w-4 h-4" /> Print / Save as PDF
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Container */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white text-slate-900 border border-slate-300 shadow-2xl font-sans print:shadow-none print:border-none print:p-0 print:rounded-none">
          
          {/* Header */}
          <header className="border-b-2 border-slate-900 pb-6 mb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 font-mono">
                {personalData.name}
              </h1>
              <p className="text-sm font-bold text-slate-700 font-mono mt-1">
                {personalData.fullTitle}
              </p>
            </div>

            <div className="text-xs text-slate-600 font-mono space-y-1 text-center sm:text-right">
              <p className="flex items-center justify-center sm:justify-end gap-1"><MapPin className="w-3.5 h-3.5" /> {personalData.location}</p>
              <p className="flex items-center justify-center sm:justify-end gap-1"><Mail className="w-3.5 h-3.5" /> {personalData.email}</p>
              <p className="flex items-center justify-center sm:justify-end gap-1"><FaGithub className="w-3.5 h-3.5" /> {personalData.github}</p>
              <p className="flex items-center justify-center sm:justify-end gap-1"><FaLinkedin className="w-3.5 h-3.5" /> {personalData.linkedin}</p>
            </div>
          </header>

          {/* 1. Professional Summary */}
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personalData.bio}
            </p>
          </section>

          {/* 2. Technical Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              {skillsData.map((cat, idx) => (
                <div key={idx}>
                  <strong className="font-mono text-slate-900">{cat.category}: </strong>
                  <span className="text-slate-700">
                    {cat.items.map(item => item.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Certifications */}
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications & Roadmap
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 font-sans">
              {certificationsData.map((cert, idx) => (
                <li key={idx}>
                  <strong className="font-mono text-slate-900">{cert.title}</strong> — {cert.issuer} ({cert.status} • {cert.date})
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Experience & Internships */}
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Technical Experience & Leadership
            </h2>
            <div className="space-y-4 text-xs">
              {experienceData.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-slate-900 font-mono">
                    <span>{exp.role} — {exp.organization}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Key Network Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Key Network Engineering Projects
            </h2>
            <div className="space-y-3 text-xs">
              {projectsData.slice(0, 4).map((p, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-bold text-slate-900 font-mono">
                    <span>{p.title}</span>
                    <span className="text-slate-500 font-normal">{p.category}</span>
                  </div>
                  <p className="text-slate-700 mt-0.5">{p.shortDesc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Education */}
          <section>
            <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between text-xs">
              <div>
                <strong className="font-mono text-slate-900">{educationData.degree}</strong> ({educationData.field})
                <p className="text-slate-600">{educationData.institution} — {educationData.university}</p>
              </div>
              <span className="font-mono font-bold text-slate-900">{educationData.duration}</span>
            </div>
          </section>

        </div>

      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
