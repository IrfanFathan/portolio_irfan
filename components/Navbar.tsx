'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, Plus } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'home' }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Resume', href: '/resume', id: 'resume' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: navRef });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        ref={navRef}
        className={`bloomfi-nav max-w-6xl mx-auto rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          scrolled ? 'shadow-xl scale-[0.99]' : ''
        }`}
      >
        {/* BloomFi Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group text-slate-900 dark:text-white font-bold tracking-tight text-lg"
        >
          <div className="w-6 h-6 rounded-full bg-[#18142A] dark:bg-purple-500 text-white flex items-center justify-center text-xs">
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>Irfan<span className="text-purple-600 dark:text-purple-400 font-extrabold">Net</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-700 dark:text-slate-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors hover:text-[#18142A] dark:hover:text-white ${
                  isActive ? 'text-[#18142A] dark:text-white font-extrabold' : ''
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right Action Controls: Theme Toggle + Dark Violet Pill CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bloomfi-pill-btn px-5 py-2 text-xs flex items-center gap-1.5 shadow-sm"
          >
            <span>Connect</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 max-w-sm mx-auto rounded-3xl bg-white dark:bg-[#18142A] p-6 shadow-2xl border border-slate-200 dark:border-slate-800 pointer-events-auto"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 border-b border-slate-100 dark:border-slate-800/80"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 flex gap-2">
                <a
                  href="/resume"
                  className="w-full bloomfi-pill-btn py-2.5 text-center text-xs flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Resume PDF
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
