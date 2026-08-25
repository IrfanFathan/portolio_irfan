'use client';

import React, { useState, useRef } from 'react';
import { FolderGit2, ExternalLink, Terminal, CheckCircle2, ChevronRight, Copy, Check, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData, ProjectItem } from '@/data/portfolioData';
import TopologyViewer from './TopologyViewer';
import Image from 'next/image';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projectsData[0]);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Network Engineering', 'WAN & Routing', 'Home Lab & Linux', 'Cloud Networking', 'Network Security'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from('.bloom-project-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  const handleCopyCode = (code: string, slug: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* BloomFi Section Layout: Left Sticky Header, Right Floating Cards */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Header & Category Filter Pills */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 text-left">
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest font-semibold block">
              Portfolio In Action
            </span>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Featured Projects
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Irfan Fathan offers hands-on implementations for enterprise networks, multi-site WANs, Linux security labs, and cloud VPC architectures.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#18142A] text-white shadow-md'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-500'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Floating BloomFi Cards */}
          <div className="lg:col-span-8 space-y-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.slug}
                className="bloom-project-card bloomfi-card p-8 sm:p-10 relative overflow-hidden group"
              >
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    0{idx + 1} // ENGINEERING SPEC
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Objectives */}
                <div className="space-y-2 mb-6">
                  {project.objectives.map((obj, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive CLI Code Snippet Box */}
                <div className="rounded-2xl bg-[#18142A] p-5 border border-slate-800 text-slate-200 font-mono text-xs mb-6 shadow-lg">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                    <span className="text-purple-400 font-bold text-[11px] flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5" /> CLI CONFIGURATION
                    </span>
                    <button
                      onClick={() => handleCopyCode(project.configurationSnippet, project.slug)}
                      className="text-slate-400 hover:text-purple-400 text-[10px] flex items-center gap-1"
                    >
                      {copiedSlug === project.slug ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSlug === project.slug ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-cyan-300 overflow-x-auto text-[11px] leading-relaxed max-h-44">
                    <code>{project.configurationSnippet}</code>
                  </pre>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bloomfi-pill-btn px-5 py-2.5 text-xs inline-flex items-center gap-2"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Documentation</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
