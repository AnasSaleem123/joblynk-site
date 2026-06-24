import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ArrowRight, TrendingDown, Zap, Globe, Clock } from 'lucide-react';

const beliefs = [
  {
    stat: '72%',
    label: 'of hires fail within 18 months',
    belief: 'Because intuition isn\'t a system.',
    contrast: 'Joblynk replaces guesswork with structured intelligence at every stage.',
  },
  {
    stat: '140hrs',
    label: 'wasted per open role on average',
    belief: 'Because recruiting was never engineered.',
    contrast: 'Every touchpoint — sourcing, screening, scheduling — runs autonomously.',
  },
  {
    stat: '9×',
    label: 'faster time-to-shortlist with AI orchestration',
    belief: 'Because speed is a competitive weapon.',
    contrast: 'Top candidates leave the market in 10 days. Joblynk acts in hours.',
  },
  {
    stat: '60%',
    label: 'of recruiter time is manual, repeatable work',
    belief: 'Because humans shouldn\'t do what machines can.',
    contrast: 'Joblynk automates the pipeline. Your team focuses on decisions.',
  },
];

const manifestoLines = [
  'Recruiting was never built for scale.',
  'It was built for relationships — and then it broke.',
  'Spreadsheets became ATSs. ATSs became bottlenecks.',
  'The best talent doesn\'t wait for a sourcing cycle.',
  'They move in hours, not weeks.',
  'The enterprises that win the next decade',
  'won\'t have bigger recruiting teams.',
  'They\'ll have better infrastructure.',
];

function StatCard({ stat, label, belief, contrast, index, isInView }) {
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (isInView && !counted) {
      setTimeout(() => setCounted(true), index * 150);
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="relative group"
    >
      <div className="h-full p-7 rounded-2xl border border-slate-100 bg-white hover:border-[#30B0F0]/40 transition-all duration-300"
        style={{ boxShadow: '0 4px 24px rgba(0,88,160,0.04)' }}>
        {/* Accent top bar */}
        <div className="absolute top-0 left-7 right-7 h-0.5 rounded-full bg-gradient-to-r from-[#0058A0] to-[#30B0F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="mb-4">
          <span className="block text-5xl font-black tracking-tight leading-none"
            style={{
              fontFamily: 'Inter Tight, Inter, sans-serif',
              background: 'linear-gradient(135deg, #0058A0 0%, #30B0F0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            {stat}
          </span>
          <span className="text-sm text-slate-400 font-medium mt-1 block">{label}</span>
        </div>

        <div className="space-y-3">
          <p className="text-base font-bold text-slate-800 leading-snug"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
            {belief}
          </p>
          <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
            {contrast}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BeliefSection() {
  const ref = useRef(null);
  const manifestoRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const manifestoInView = useInView(manifestoRef, { once: true, margin: '-40px' });

  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── MANIFESTO BLOCK ── */}
      <div ref={manifestoRef} className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>

        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,88,160,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,88,160,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={manifestoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 uppercase tracking-widest">
              Our Belief
            </span>
          </motion.div>

          {/* Manifesto lines — staggered reveal */}
          <div className="space-y-1 mb-14">
            {manifestoLines.map((line, i) => {
              const isHighlight = i === manifestoLines.length - 2 || i === manifestoLines.length - 1;
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  animate={manifestoInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.07 }}
                  className={`leading-tight ${
                    isHighlight
                      ? 'text-3xl md:text-4xl lg:text-5xl font-black text-[#0058A0]'
                      : i < 3
                      ? 'text-xl md:text-2xl font-semibold text-slate-400'
                      : 'text-xl md:text-2xl font-semibold text-slate-600'
                  }`}
                  style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.025em' }}
                >
                  {line}
                </motion.p>
              );
            })}
          </div>

          {/* Conviction statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={manifestoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7 rounded-2xl border-l-4 border-[#30B0F0]"
            style={{ background: 'linear-gradient(135deg, rgba(48,176,240,0.06) 0%, rgba(0,88,160,0.03) 100%)', borderRight: '1px solid rgba(48,176,240,0.15)', borderTop: '1px solid rgba(48,176,240,0.15)', borderBottom: '1px solid rgba(48,176,240,0.15)' }}
          >
            <Zap size={28} className="text-[#30B0F0] flex-shrink-0" />
            <div>
              <p className="text-lg md:text-xl font-black text-[#0058A0] leading-snug"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.02em' }}>
                Joblynk is the operating system for the next decade of hiring —
                infrastructure that discovers, engages, qualifies, and delivers
                talent without human bottlenecks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── DATA BELIEFS GRID ── */}
      <div ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p className="text-xs font-semibold text-[#30B0F0] uppercase tracking-widest mb-2">The Evidence</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
                Data doesn't lie.<br />
                <span className="text-[#0058A0]">Your hiring model is broken.</span>
              </h2>
            </div>
            <a href="https://app.joblynk.ai/book-demo"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0058A0] text-white font-semibold text-sm hover:bg-[#004A87] transition-all group">
              Fix It With Joblynk
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beliefs.map((b, i) => (
              <StatCard key={i} {...b} index={i} isInView={isInView} />
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-lg font-bold text-slate-400 tracking-tight"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
              One job description.{' '}
              <span className="text-[#0058A0]">One autonomous hiring engine.</span>{' '}
              Zero bottlenecks.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}