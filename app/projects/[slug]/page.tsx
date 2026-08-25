import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopologyViewer from '@/components/TopologyViewer';
import { Network, Terminal, CheckCircle2, ArrowLeft, ExternalLink, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Irfan Fathan Network Portfolio`,
    description: project.shortDesc,
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar activeSection="projects" />

      <main className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 hover:underline mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Portfolio Projects
        </a>

        {/* Header Block */}
        <div className="mb-10 font-mono">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
            <span className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/30">
              {project.category}
            </span>
            <span className="text-slate-400">Technical Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {project.shortDesc}
          </p>
        </div>

        {/* Dynamic Topology Viewer */}
        <div className="mb-12">
          <TopologyViewer type={project.topologyType} title={`${project.title} Architecture Topology`} />
        </div>

        {/* Technical Case Study Sections */}
        <div className="space-y-12 text-slate-300 leading-relaxed font-sans text-sm">
          
          {/* 1. Problem Statement */}
          <section className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-lg font-bold font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" /> 1. Problem Statement
            </h2>
            <p className="text-slate-300">{project.problem}</p>
          </section>

          {/* 2. Requirements & Objectives */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h2 className="text-base font-bold font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Requirements
              </h2>
              <ul className="space-y-2 text-xs font-mono">
                {project.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h2 className="text-base font-bold font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Objectives
              </h2>
              <ul className="space-y-2 text-xs font-mono">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Detailed Configuration */}
          <section>
            <div className="flex justify-between items-center mb-3 font-mono">
              <h2 className="text-lg font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-5 h-5" /> CLI Configuration Details
              </h2>
              <span className="text-xs text-slate-400">Cisco IOS / Linux Netplan</span>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-cyan-500/30 font-mono text-xs text-cyan-300 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
              {project.configurationSnippet}
            </div>
          </section>

          {/* 4. Troubleshooting & Testing */}
          <section className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-5 h-5" /> Troubleshooting & Verification Steps
            </h2>
            <ul className="space-y-2 font-mono text-xs text-slate-300">
              {project.troubleshootingSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Results & Lessons Learned */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h2 className="text-base font-bold font-mono text-emerald-400 uppercase tracking-wider mb-3">
                Results & Metrics
              </h2>
              <ul className="space-y-2 text-xs font-mono">
                {project.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">→</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h2 className="text-base font-bold font-mono text-cyan-400 uppercase tracking-wider mb-3">
                Lessons Learned
              </h2>
              <ul className="space-y-2 text-xs font-mono">
                {project.lessonsLearned.map((les, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">!</span>
                    <span>{les}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
