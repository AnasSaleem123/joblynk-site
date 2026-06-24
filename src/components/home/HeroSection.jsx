import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import HiringEngineViz from './HiringEngineViz';
import NetworkVisualization from './NetworkVisualization';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white pt-16">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Background network viz */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <NetworkVisualization width={1400} height={800} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#F8FAFC] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Azure accent blur */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(48,176,240,0.08) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#30B0F0]/30 bg-[#30B0F0]/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#30B0F0] pulse-node"></span>
                <span className="text-xs font-semibold text-[#0058A0] tracking-widest uppercase">
                  AI-Powered Hiring Operating System™
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black text-[#0058A0] leading-[0.95] mb-6"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}
            >
              The Operating
              <br />
              <span className="shimmer-text">System</span>
              <br />
              For Hiring.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg"
            >
              From Job Description to Interview-Ready Talent. Joblynk autonomously sources, engages, interviews, qualifies, and delivers candidates directly into your hiring workflow.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a href="https://app.joblynk.ai/book-demo"
                className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold">
                Book a Demo
                <ArrowRight size={18} className="cta-arrow" />
              </a>
              <a href="https://app.joblynk.ai/book-demo"
                className="cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold">
                <Play size={16} />
                Watch Platform Tour
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6"
            >
              {[
                { value: '750M+', label: 'Candidate Profiles' },
                { value: '180+', label: 'Countries' },
                { value: '24/7', label: 'Autonomous Ops' },
              ].map(stat => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-[#0058A0]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>{stat.value}</span>
                  <span className="text-xs text-slate-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Card frame */}
            <div className="relative w-full max-w-sm">
              <div className="azure-glass rounded-2xl p-8 azure-glow float-anim">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-semibold text-[#0058A0] uppercase tracking-widest mb-0.5">Hiring Engine</p>
                    <p className="text-xs text-slate-500">Live autonomous pipeline</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-green-700">Active</span>
                  </div>
                </div>

                <HiringEngineViz />

                {/* Stats bar */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] grid grid-cols-3 gap-3">
                  {[
                    { v: '2.4k', l: 'Discovered' },
                    { v: '847', l: 'Engaged' },
                    { v: '124', l: 'Qualified' },
                  ].map(s => (
                    <div key={s.l} className="text-center">
                      <p className="text-base font-black text-[#0058A0]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>{s.v}</p>
                      <p className="text-xs text-slate-500">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#30B0F0] opacity-20 blur-sm"></div>
              <div className="absolute -bottom-6 -left-4 w-12 h-12 rounded-full bg-[#0058A0] opacity-10 blur-md"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}