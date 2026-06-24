import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, MessageSquare, Phone, Mic, Brain, Shield, Zap, BarChart3, Puzzle, Bot } from 'lucide-react';

const pillars = [
  { icon: Search, title: 'Autonomous Talent Discovery', desc: 'AI scans 750M+ profiles globally to surface active and passive candidates that match your exact criteria.' },
  { icon: MessageSquare, title: 'AI Candidate Engagement', desc: 'Personalized, multi-channel outreach that responds, follows up, and nurtures candidates automatically.' },
  { icon: Phone, title: 'AI Voice, SMS & Email', desc: 'AI places outbound calls, sends texts, and crafts emails — all personalized, all autonomous, all 24/7.' },
  { icon: Mic, title: 'AI Interviews', desc: 'Structured first-round interviews conducted by AI that validate skills, availability, and fit at scale.' },
  { icon: Brain, title: 'Candidate Intelligence', desc: 'Deep-fit analysis reports on every candidate — beyond the resume, down to behavioral and competency signals.' },
  { icon: Shield, title: 'Qualification & Validation', desc: 'Verifies compensation expectations, work authorization, availability, and role-specific requirements.' },
  { icon: Zap, title: 'Workflow Automation', desc: 'End-to-end orchestration from job intake to candidate delivery — no manual steps required.' },
  { icon: BarChart3, title: 'Enterprise Analytics', desc: 'Real-time dashboards tracking pipeline velocity, conversion rates, and hiring efficiency across your org.' },
  { icon: Puzzle, title: 'ATS Integration', desc: 'Native connectors to leading ATS platforms — candidates flow directly into your existing systems.' },
  { icon: Bot, title: 'Recruiting Copilot', desc: 'An AI partner for recruiters to query pipelines, get candidate summaries, and make faster decisions.' },
];

export default function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-4 uppercase tracking-widest">
            The Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            The AI-Powered Hiring
            <br />
            <span className="shimmer-text">Operating System™</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ten integrated capabilities. One unified engine. Zero manual intervention required.
          </p>
        </motion.div>

        {/* Pillar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="pillar-card rounded-2xl p-5 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(0,88,160,0.1) 0%, rgba(48,176,240,0.1) 100%)' }}>
                  <Icon size={20} style={{ color: '#0058A0' }} />
                </div>
                <h3 className="text-sm font-bold text-[#0058A0] mb-2 leading-tight"
                  style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <a href="https://app.joblynk.ai/book-demo"
            className="cta-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold">
            Explore the Full Platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}