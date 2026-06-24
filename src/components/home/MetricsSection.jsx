import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

const metrics = [
  { value: 750, suffix: 'M+', prefix: '', label: 'Global Candidate Profiles', desc: 'The most comprehensive talent database on the planet' },
  { value: 180, suffix: '+', prefix: '', label: 'Countries Covered', desc: 'Autonomous hiring infrastructure across every major market' },
  { value: '24', suffix: '/7', prefix: '', label: 'Autonomous Operations', desc: 'Your hiring engine never sleeps, never takes a break', isText: true },
  { value: 100, suffix: 'x', prefix: '', label: 'Recruiter Productivity Potential', desc: 'Infrastructure that scales without increasing headcount' },
];

export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #003B6E 0%, #0058A0 60%, #1a7cc4 100%)' }}>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(48,176,240,0.2) 0%, transparent 60%)' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(48,176,240,0.15) 0%, transparent 60%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-white/70 border border-white/20 rounded-full mb-4 uppercase tracking-widest">
            Built For Enterprise Hiring
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            The Scale of
            <br />
            Autonomous Infrastructure
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
            >
              <div className="mb-3">
                {metric.isText ? (
                  <span className="text-4xl md:text-5xl font-black"
                    style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #FFFFFF, #30B0F0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {metric.value}{metric.suffix}
                  </span>
                ) : (
                  <span className="text-4xl md:text-5xl font-black"
                    style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.04em', background: 'linear-gradient(135deg, #FFFFFF, #30B0F0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {isInView ? <AnimatedCounter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} /> : `${metric.prefix}0${metric.suffix}`}
                  </span>
                )}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{metric.label}</p>
              <p className="text-white/50 text-xs leading-relaxed">{metric.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 text-sm">
            Plus <span className="text-white font-semibold">thousands of hours saved</span> per team, per year.
          </p>
        </motion.div>
      </div>
    </section>
  );
}