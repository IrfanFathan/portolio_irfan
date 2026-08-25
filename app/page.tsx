'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import ResumeSection from '@/components/ResumeSection';
import BlogSection from '@/components/BlogSection';
import GithubSection from '@/components/GithubSection';
import Achievements from '@/components/Achievements';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'experience', 'education', 'resume', 'blog', 'github', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />

      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Education />
      <ResumeSection />
      <BlogSection />
      <GithubSection />
      <Achievements />
      <ContactForm />
      <Footer />
    </main>
  );
}
