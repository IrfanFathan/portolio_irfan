'use client';

import React from 'react';
import { Network, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalData } from '@/data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '/resume' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded bg-cyan-500 text-slate-950 flex items-center justify-center font-bold">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white uppercase tracking-wider block text-sm">
              {personalData.name}
            </span>
            <span className="text-[11px] text-cyan-400 block">{personalData.fullTitle}</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors uppercase tracking-wider text-[11px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-1.5 rounded bg-slate-900 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-[11px] text-slate-500 text-center sm:text-right">
            &copy; {currentYear} {personalData.name}. Designed and developed by Irfan Fathan.
          </p>
        </div>

      </div>
    </footer>
  );
}
