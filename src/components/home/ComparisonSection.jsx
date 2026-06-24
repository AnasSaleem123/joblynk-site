import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Zap } from 'lucide-react';

const comparisons = [
  { traditional: 'Recruiters search for talent', joblynk: 'AI discovers talent globally' },
  { traditional: 'Recruiters send emails', joblynk: 'AI engages candidates autonomously' },
  { traditional: 'Recruiters screen candidates', joblynk: 'AI interviews candidates at scale' },
  { traditional: 'Recruiters schedule interviews', joblynk: 'AI validates qualifications instantly' },
  { traditional: 'Recruiters create submissions', joblynk: 'AI generates intelligence reports' },
  { traditional: 'Recruiters manage workflows', joblynk: 'AI delivers qualified talent' },
];

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-4 uppercase tracking-widest">
            The Shift
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            Traditional Recruiting
            <br />
            <span className="shimmer-text">vs Autonomous Hiring</span>
          </h2>
          <p className="text-slate-500">The old way was built for a world that no longer exists.</p>
        </motion.div>

        {/* Table */}
        <div className="grid grid-cols-1 gap-3">
          {/* Header row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 mb-2"
          >
            <div className="px-6 py-3 rounded-xl bg-slate-100 text-center">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Traditional</span>
            </div>
            <div className="px-6 py-3 rounded-xl text-center"
              style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
              <span className="text-xs font-black text-white uppercase tracking-widest">Joblynk</span>
            </div>
          </motion.div>

          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Traditional */}
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white border border-slate-200">
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <X size={10} className="text-slate-400" />
                </div>
                <span className="text-sm text-slate-500">{row.traditional}</span>
              </div>

              {/* Joblynk */}
              <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white border border-[#30B0F0]/30"
                style={{ boxShadow: '0 2px 12px rgba(48,176,240,0.08)' }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
                  <Zap size={10} className="text-white" />
                </div>
                <span className="text-sm font-medium text-[#0058A0]">{row.joblynk}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 p-8 rounded-2xl border border-[#30B0F0]/20 bg-white"
        >
          <p className="text-xl font-black text-[#0058A0] mb-2"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.02em' }}>
            You Don't Need More Recruiters.
          </p>
          <p className="text-slate-500 mb-5 text-sm">You Need Autonomous Hiring Infrastructure.</p>
          <a href="https://app.joblynk.ai/book-demo"
            className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
            Schedule a Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}