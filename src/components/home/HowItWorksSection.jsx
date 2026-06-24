import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Telescope, MessageCircle, Mic, CheckSquare, Users } from 'lucide-react';

const steps = [
  { icon: Upload, step: '01', title: 'Upload Job Description', desc: 'Drop in your JD. Joblynk instantly parses requirements, extracts criteria, and activates the autonomous hiring engine.' },
  { icon: Telescope, step: '02', title: 'AI Discovers Talent', desc: 'The system searches 750M+ global profiles — active and passive — applying deep matching logic across skills, experience, and fit.' },
  { icon: MessageCircle, step: '03', title: 'AI Engages Candidates', desc: 'Personalized outreach via email, SMS, and AI voice calls begins immediately. No human required to initiate the conversation.' },
  { icon: Mic, step: '04', title: 'AI Conducts Interviews', desc: 'Structured first-round interviews happen at scale. AI asks, listens, probes, and evaluates — 24/7 without fatigue.' },
  { icon: CheckSquare, step: '05', title: 'AI Validates Requirements', desc: 'Compensation, availability, work authorization, and role-specific requirements are all confirmed before a candidate advances.' },
  { icon: Users, step: '06', title: 'Qualified Candidates Delivered', desc: 'Interview-ready candidates with full intelligence reports arrive directly in your ATS or workflow — ready for your decision.' },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-4 uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            From Job Description
            <br />
            <span className="shimmer-text">To Qualified Pipeline</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">Six autonomous steps. Zero manual work. Interview-ready talent delivered.</p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#30B0F0] via-[#0058A0] to-[#30B0F0] opacity-20 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 lg:gap-12 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Step card */}
                  <div className={`flex-1 ${!isLeft ? 'lg:text-right' : ''}`}>
                    <div className={`workflow-step rounded-2xl p-6 max-w-md ${!isLeft ? 'lg:ml-auto' : ''}`}>
                      <div className={`flex items-start gap-4 ${!isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-[#30B0F0] mb-1 tracking-widest">STEP {step.step}</div>
                          <h3 className="text-base font-bold text-[#0058A0] mb-2"
                            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#30B0F0] bg-white flex items-center justify-center z-10 hidden lg:flex">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0058A0] to-[#30B0F0]" />
                  </div>

                  {/* Empty right side for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#30B0F0]/30"
            style={{ background: 'linear-gradient(135deg, rgba(48,176,240,0.05) 0%, rgba(0,88,160,0.05) 100%)' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
              <Users size={28} className="text-white" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0058A0]"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.02em' }}>
                Interview-Ready Talent Delivered.
              </p>
              <p className="text-slate-500 mt-1 text-sm">Your team focuses on hiring decisions, not hiring logistics.</p>
            </div>
            <a href="https://app.joblynk.ai/book-demo"
              className="cta-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              Start Hiring Autonomously
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}