'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { githubReposData } from '@/data/portfolioData';

export default function GithubSection() {
  return (
    <section id="github" className="py-24 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 font-mono">
          <div className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
            <FaGithub className="w-4 h-4" /> 09 // Open Source & Repositories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            GitHub Code & Topology Repositories
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Selected repositories showcasing Cisco network scripts, Terraform AWS VPC modules, Linux sysadmin automation, and homelab stacks.
          </p>
          <div className="w-20 h-1 bg-cyan-500 rounded mt-3" />
        </div>

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {githubReposData.map((repo, idx) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/90 shadow-sm hover:border-cyan-500/50 hover:shadow-xl transition-all flex flex-col justify-between font-mono"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-cyan-500" />
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      {repo.name}
                    </a>
                  </h3>

                  <span className="flex items-center gap-1 text-xs text-amber-500 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-amber-500" /> {repo.stars}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 text-[10px] mb-6">
                  {repo.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">{repo.language}</span>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
