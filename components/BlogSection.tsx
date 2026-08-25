'use client';

import React, { useState, useRef } from 'react';
import { BookOpen, Search, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogData, BlogItem } from '@/data/portfolioData';
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap';

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Networking', 'Cisco', 'Linux', 'Cloud'];

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });

    tl.from('.blog-label', { opacity: 0, y: 15, duration: 0.4 })
      .from('.blog-title', { opacity: 0, y: 25, duration: 0.5 }, '-=0.2')
      .from(underlineRef.current, { scaleX: 0, transformOrigin: 'left', duration: 0.6, ease: 'power3.out' }, '-=0.3');

    gsap.from('.blog-card', {
      scrollTrigger: {
        trigger: '.blog-grid',
        start: 'top 80%',
      },
      opacity: 0,
      y: 35,
      stagger: 0.12,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  const filteredArticles = blogData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" ref={sectionRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 font-mono">
          <div className="blog-label inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
            <BookOpen className="w-4 h-4" /> 06 // Technical Writing & Lab Notes
          </div>
          <h2 className="blog-title text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Network Engineering Blog
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Documenting practical lab experiments, Cisco CLI guides, Linux sysadmin techniques, and AWS cloud networking tutorials.
          </p>
          <div ref={underlineRef} className="w-20 h-1 bg-cyan-500 rounded mt-3" />
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 font-mono text-xs">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, commands, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-slate-950 font-bold border-cyan-500 shadow'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-cyan-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-grid grid md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="blog-card group p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/90 shadow-sm hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/30">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  <a href={`/blog/${article.slug}`}>
                    {article.title}
                  </a>
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-sans">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] mb-4">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                >
                  Read Technical Guide <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
