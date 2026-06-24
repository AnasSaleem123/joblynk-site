import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import NetworkVisualization from './NetworkVisualization';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #EDF4FB 100%)' }}>

      {/* Background viz */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <NetworkVisualization width={1400} height={600} />
      </div>

      {/* Azure glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(48,176,240,0.08) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-8 uppercase tracking-widest">
            Get Started
          </span>

          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black text-[#0058A0] leading-[0.95] mb-6"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            You Don't Need
            <br />
            <span className="shimmer-text">More Recruiters.</span>
          </h2>

          <p className="text-2xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.02em' }}>
            You Need Autonomous Hiring Infrastructure.
          </p>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            See how Joblynk transforms hiring from a manual process into a scalable operating system — delivering interview-ready talent on demand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://app.joblynk.ai/book-demo"
              className="cta-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
              Schedule Demo
              <ArrowRight size={18} className="cta-arrow" />
            </a>
            <a href="https://app.joblynk.ai/get-started"
              className="cta-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold">
              Get Started Free
            </a>
          </div>

          <p className="text-slate-400 text-xs mt-6">
            No credit card required · Enterprise-ready · Deploy in 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}