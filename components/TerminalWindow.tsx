'use client';

import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { Terminal, Copy, Check, Play } from 'lucide-react';
import { prefersReducedMotion } from '@/lib/gsap';

export default function TerminalWindow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasRun, setHasRun] = useState(false);
  const [copied, setCopied] = useState(false);

  const lines = [
    { prompt: '$ ', text: 'whoami', output: 'irfan-fathan [network-engineer]' },
    { prompt: '$ ', text: 'skills --list', output: 'Cisco IOS | OSPF | VLANs | Linux Sysadmin | AWS VPC | Network Security' },
    { prompt: '$ ', text: 'cat /etc/network/status', output: 'UP [Interface eth0: 10.0.0.1/24 - Adjacency FULL]' },
    { prompt: '$ ', text: 'echo $STATUS', output: 'Ready to connect & build high-availability infrastructure.' },
  ];

  const fullTextToCopy = `$ whoami\nirfan-fathan [network-engineer]\n$ skills --list\nCisco IOS | OSPF | VLANs | Linux Sysadmin | AWS VPC | Network Security\n$ cat /etc/network/status\nUP [Interface eth0: 10.0.0.1/24 - Adjacency FULL]\n$ echo $STATUS\nReady to connect & build high-availability infrastructure.`;

  useEffect(() => {
    if (!containerRef.current || hasRun) return;

    if (prefersReducedMotion()) {
      setHasRun(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          setHasRun(true);
          observer.disconnect();
          startTypingAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasRun]);

  const startTypingAnimation = () => {
    // Animate typing each character using Anime.js timeline
    const targets = containerRef.current?.querySelectorAll('.typing-target');
    if (!targets || targets.length === 0) return;

    targets.forEach((target) => {
      const fullContent = target.getAttribute('data-text') || '';
      target.textContent = '';

      const obj = { count: 0 };
      anime({
        targets: obj,
        count: fullContent.length,
        easing: 'linear',
        duration: fullContent.length * 35,
        delay: parseInt(target.getAttribute('data-delay') || '0'),
        update: () => {
          target.textContent = fullContent.substring(0, Math.floor(obj.count));
        },
      });
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTextToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className="my-12 rounded-xl bg-slate-950 border border-cyan-500/40 shadow-2xl overflow-hidden font-mono text-xs max-w-3xl mx-auto"
    >
      {/* Header Bar */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-2 text-slate-400 text-[11px] font-bold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" /> sysadmin@net-core:~
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 text-[11px]"
          title="Copy terminal session"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-5 space-y-4 leading-relaxed text-slate-200">
        {lines.map((line, idx) => {
          const delay = idx * 800;
          return (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <span>{line.prompt}</span>
                {hasRun ? (
                  <span
                    className="typing-target text-slate-100"
                    data-text={line.text}
                    data-delay={delay}
                  >
                    {line.text}
                  </span>
                ) : (
                  <span className="text-slate-100">{line.text}</span>
                )}
              </div>
              <div className="pl-4 text-slate-400 text-[11px] border-l-2 border-slate-800">
                {line.output}
              </div>
            </div>
          );
        })}

        {/* Blinking Cursor */}
        <div className="flex items-center gap-2 pt-2 text-cyan-400 font-bold">
          <span>$ </span>
          <span className="w-2.5 h-4 bg-cyan-400 animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}
