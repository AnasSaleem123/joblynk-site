import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-8 uppercase tracking-widest">
              About Joblynk
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-8"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
              Building The
              <br />
              <span className="shimmer-text">Future of Hiring</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-left"
          >
            {[
              'Joblynk is building the infrastructure layer that powers the next generation of hiring.',
              'We believe organizations should never have to manually search for talent. Instead, hiring should operate as an intelligent system that continuously identifies, engages, qualifies, and delivers talent automatically.',
              'We are not building recruiting software. We are building autonomous hiring infrastructure.',
            ].map((para, i) => (
              <p key={i} className={`text-${i === 1 ? 'base' : 'sm'} ${i === 0 ? 'text-lg font-semibold text-[#0058A0]' : 'text-slate-600'} leading-relaxed`}>
                {para}
              </p>
            ))}
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
          >
            {[
              { title: 'Autonomous by Design', desc: 'Every capability is built for zero-human-in-the-loop operation.' },
              { title: 'Enterprise-Grade Infrastructure', desc: 'Security, compliance, and auditability at the foundation.' },
              { title: 'Category-Defining', desc: 'Not another ATS. The operating layer for all hiring activity.' },
            ].map((principle, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-[#E2E8F0] text-left">
                <h4 className="font-bold text-[#0058A0] text-sm mb-1.5"
                  style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                  {principle.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}