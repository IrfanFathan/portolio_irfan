'use client';

import React, { useRef } from 'react';
import { Network, Server, Shield, Cloud, Terminal, ArrowUpRight, Cpu } from 'lucide-react';
import { personalData } from '@/data/portfolioData';
import Image from 'next/image';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.from('.bloom-about-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.bloom-about-card', { opacity: 0, y: 35, stagger: 0.15, duration: 0.7, ease: 'power3.out' }, '-=0.3');
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: BloomFi Split Layout */}
        <div className="bloom-about-header grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              What is Network Infrastructure?
            </h2>
            <div className="mt-4">
              <a
                href="#projects"
                className="bloomfi-pill-btn px-6 py-2.5 text-xs inline-flex items-center gap-2"
              >
                <span>Explore Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 text-left lg:text-right">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl lg:ml-auto">
              Network infrastructure is the high-performance backbone of modern digital operations—integrating OSPF routing, VLAN segmentation, Linux administration, and multi-AZ AWS cloud security.
            </p>
          </div>
        </div>

        {/* BloomFi 3-Card Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Soft Lavender Big Feature Card (Left Spanning 7 Cols) */}
          <div className="bloom-about-card lg:col-span-7 bloomfi-card-lavender p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden min-h-[380px] shadow-sm">
            <div className="relative z-10 max-w-md">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                Core Foundation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                Infrastructure That Scales
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Designing subnets, configuring Cisco 2911/3560 hardware, and establishing zero-downtime routing topologies.
              </p>
            </div>

            {/* 3D Server Temple Graphic Asset */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 sm:w-80 sm:h-80 opacity-90 hover:scale-105 transition-transform duration-500">
              <Image
                src="/server_cloud_3d.png"
                alt="3D Cloud Server Infrastructure"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>

          {/* Right Column: 2 Solid Deep Violet Stacked Cards (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Card 2: Solid Deep Violet Pill Card */}
            <div className="bloom-about-card bloomfi-card-dark p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 text-purple-300 flex items-center justify-center mb-4">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Always resilient, always online
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Single-area OSPF routing, EtherChannel link aggregation (LACP), and sub-second failover protocols for mission-critical uptime.
                </p>
              </div>
            </div>

            {/* Card 3: Solid Deep Violet Pill Card */}
            <div className="bloom-about-card bloomfi-card-dark p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 text-cyan-300 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  100% Segmented Security
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Strict 802.1Q VLAN separation, Port Security sticky MAC enforcement, stateful Linux UFW firewalls, and AWS Security Group policies.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Technology Marquee Strip at Bottom of Section */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Supported Enterprise Technologies & Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-mono text-sm font-semibold">
            <span className="hover:text-purple-600 transition-colors">CISCO IOS</span>
            <span>•</span>
            <span className="hover:text-purple-600 transition-colors">AWS VPC</span>
            <span>•</span>
            <span className="hover:text-purple-600 transition-colors">RED HAT RHEL</span>
            <span>•</span>
            <span className="hover:text-purple-600 transition-colors">UBUNTU SERVER</span>
            <span>•</span>
            <span className="hover:text-purple-600 transition-colors">WIRESHARK</span>
            <span>•</span>
            <span className="hover:text-purple-600 transition-colors">GNS3</span>
            <span>•</span>
            <span className="hover:text-purple-600 transition-colors">DOCKER</span>
          </div>
        </div>

      </div>
    </section>
  );
}
