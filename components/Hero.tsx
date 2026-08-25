'use client';

import React, { useRef, useState } from 'react';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';
import { Network, ArrowRight, FileText, Plus, CheckCircle2, ShieldCheck, Terminal as TerminalIcon } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalData } from '@/data/portfolioData';
import Image from 'next/image';
import TopologyViewer from './TopologyViewer';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLiveTopology, setShowLiveTopology] = useState(false);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.bloom-plus', { scale: 0, duration: 0.4 })
      .from('.bloom-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.1')
      .from('.bloom-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.bloom-cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.bloom-hero-card', { y: 40, opacity: 0, scale: 0.96, duration: 0.8 }, '-=0.4');
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
        
        {/* Top Plus Icon & Category Pill */}
        <div className="bloom-plus inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#18142A] dark:bg-purple-500 text-white flex items-center justify-center shadow-md">
            <Plus className="w-4 h-4 stroke-[3]" />
          </div>
        </div>

        {/* BloomFi Style Main Title */}
        <h1 className="bloom-title text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          Where Infrastructure Thrives
        </h1>

        {/* Subtitle */}
        <p className="bloom-subtitle text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          A high-performance, enterprise-grade engineering portfolio designed for native Cisco routing, Linux system administration, and AWS cloud VPC security.
        </p>

        {/* Primary CTA Buttons */}
        <div className="bloom-cta flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="bloomfi-pill-btn px-8 py-3.5 text-sm flex items-center gap-2.5 shadow-lg shadow-[#18142A]/10"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setShowLiveTopology(!showLiveTopology)}
            className="px-6 py-3.5 rounded-full bg-white dark:bg-[#18142A] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-sm font-semibold hover:border-purple-500 transition-colors flex items-center gap-2 shadow-sm"
          >
            <Network className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>{showLiveTopology ? 'Show 3D Render' : 'Interactive Topology'}</span>
          </button>

          <a
            href="/resume"
            className="px-6 py-3.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Resume PDF
          </a>
        </div>

        {/* Centerpiece Floating Visual Showcase Card (BloomFi 3D Style) */}
        <div className="bloom-hero-card max-w-5xl mx-auto bloomfi-card overflow-hidden p-3 sm:p-4 bg-white/80 dark:bg-[#18142A]/80 backdrop-blur-md relative border border-slate-200/80 dark:border-slate-800 shadow-2xl">
          <div className="rounded-[28px] sm:rounded-[36px] overflow-hidden relative aspect-[16/9] min-h-[340px] sm:min-h-[440px] bg-slate-950 flex items-center justify-center">
            
            {!showLiveTopology ? (
              <>
                <Image
                  src="/hero_network_3d.png"
                  alt="3D Surreal Network Topology Render"
                  fill
                  priority
                  className="object-cover object-center"
                />
                
                {/* Floating Micro Badge Overlays */}
                <div className="absolute top-6 left-6 p-3 sm:p-4 rounded-2xl bg-[#18142A]/85 backdrop-blur-md border border-white/10 text-white text-left font-mono text-xs hidden sm:block shadow-xl">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
                    <TerminalIcon className="w-4 h-4" /> CORE_ROUTER_01
                  </div>
                  <span className="text-[11px] text-slate-300">OSPF AREA 0 // VLAN 10,20</span>
                </div>

                <div className="absolute bottom-6 right-6 p-3 sm:p-4 rounded-2xl bg-[#18142A]/85 backdrop-blur-md border border-white/10 text-white text-right font-mono text-xs hidden sm:block shadow-xl">
                  <div className="flex items-center gap-2 justify-end text-emerald-400 font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" /> 100% UPTIME
                  </div>
                  <span className="text-[11px] text-slate-300">SYSTEM STATUS: OPERATIONAL</span>
                </div>
              </>
            ) : (
              <div className="w-full h-full p-4">
                <TopologyViewer type="enterprise" title="Live Enterprise Topology Preview" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Quick Feature Pill Strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs font-mono text-slate-600 dark:text-slate-400">
          {personalData.careerFocus.map((focus, i) => (
            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              {focus}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
