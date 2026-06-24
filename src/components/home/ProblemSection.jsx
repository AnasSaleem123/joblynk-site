import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const manualSteps = [
  'Search', 'Screen', 'Email', 'Call', 'Schedule', 'Interview', 'Validate', 'Submit', 'Coordinate', 'Repeat',
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-4 uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            Hiring Was Never
            <br />
            <span className="shimmer-text">Meant to Be Manual</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">The average recruiting cycle involves dozens of manual steps, repeated for every single role.</p>
        </motion.div>

        {/* Manual steps visualization */}
        <div className="relative mb-16">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {manualSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-2"
              >
                <span className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-sm font-medium text-slate-500">
                  {step}
                </span>
                {i < manualSteps.length - 1 && (
                  <ArrowRight size={14} className="text-slate-300" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Then arrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center gap-2 mb-8"
          >
            <ArrowDown size={24} className="text-[#30B0F0]" />
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Then do it again</span>
            <ArrowDown size={24} className="text-[#30B0F0]" />
          </motion.div>

          {/* The solution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-lg mx-auto"
          >
            <div className="p-8 rounded-2xl border-2 border-[#30B0F0] text-center"
              style={{ background: 'linear-gradient(135deg, rgba(48,176,240,0.06) 0%, rgba(0,88,160,0.06) 100%)' }}>
              <p className="text-2xl font-black text-[#0058A0] mb-2"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
                One Job Description.
              </p>
              <p className="text-2xl font-black text-[#30B0F0] mb-4"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
                One Autonomous Hiring Engine.
              </p>
              <p className="text-sm text-slate-500">All those steps become one automated pipeline — running 24/7 without human effort.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}