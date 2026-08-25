import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogData } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogData.find((b) => b.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} — Irfan Fathan Blog`,
    description: article.summary,
  };
}

export async function generateStaticParams() {
  return blogData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const articleIndex = blogData.findIndex((b) => b.slug === slug);

  if (articleIndex === -1) {
    notFound();
  }

  const article = blogData[articleIndex];
  const prevArticle = articleIndex > 0 ? blogData[articleIndex - 1] : null;
  const nextArticle = articleIndex < blogData.length - 1 ? blogData[articleIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <Navbar activeSection="blog" />

      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <a
          href="/#blog"
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 hover:underline mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </a>

        {/* Article Meta Header */}
        <header className="mb-10 font-mono">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
            <span className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/30">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed">
            {article.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            {article.tags.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                #{t}
              </span>
            ))}
          </div>
        </header>

        {/* Main Markdown / Text Content */}
        <article className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 leading-relaxed font-sans space-y-6 text-sm sm:text-base mb-12 shadow-xl whitespace-pre-line">
          {article.content}
        </article>

        {/* Next / Prev Article Navigation */}
        <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-slate-800 font-mono text-xs">
          {prevArticle ? (
            <a
              href={`/blog/${prevArticle.slug}`}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all block"
            >
              <span className="text-slate-500 block text-[10px] uppercase">← Previous Article</span>
              <span className="font-bold text-slate-200 hover:text-cyan-400">{prevArticle.title}</span>
            </a>
          ) : (
            <div />
          )}

          {nextArticle && (
            <a
              href={`/blog/${nextArticle.slug}`}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all block text-right"
            >
              <span className="text-slate-500 block text-[10px] uppercase">Next Article →</span>
              <span className="font-bold text-slate-200 hover:text-cyan-400">{nextArticle.title}</span>
            </a>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
