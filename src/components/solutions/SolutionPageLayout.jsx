import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export default function SolutionPageLayout({
  badge,
  heroTitle,
  heroSub,
  overview,
  outcomes,
  idealFor,
  workflow,
  cta,
  gradient = 'from-[#0058A0] to-[#1a7cc4]',
  Icon
}) {
  const HeroIcon = Icon;
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className={`relative pt-28 pb-20 overflow-hidden bg-gradient-to-br opacity-100 ${gradient}`}>
        <div className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-white border border-white/40 rounded-full mb-6 uppercase tracking-widest bg-white/10">
              {badge}
            </span>

            <div className="flex items-start gap-6 mb-6">
              {HeroIcon &&
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center hidden sm:flex">
                  <HeroIcon size={32} className="text-white" />
                </div>
              }
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight"
              style={{ 
                fontFamily: 'Inter Tight, Inter, sans-serif', 
                letterSpacing: '-0.03em',
                textShadow: '0 2px 12px rgba(0,0,0,0.3)',
                fontWeight: 900
              }}>
                {heroTitle}
              </h1>
            </div>

            <p className="text-xl text-white max-w-2xl leading-relaxed mb-8" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}>{heroSub}</p>

            <div className="flex flex-wrap gap-4">
              <a href="https://app.joblynk.ai/book-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0058A0] font-bold text-sm hover:bg-white/90 transition-all">
                {cta}
                <ArrowRight size={16} />
              </a>
              <a href="https://app.joblynk.ai/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Overview text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              
              <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-5 uppercase tracking-widest">
                Overview
              </span>
              <p className="text-lg text-slate-700 leading-relaxed">{overview}</p>
            </motion.div>

            {/* Key outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-7 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              
              <p className="text-xs font-black text-[#30B0F0] uppercase tracking-widest mb-5">Key Outcomes</p>
              <ul className="space-y-3">
                {outcomes.map((outcome, i) =>
                <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{outcome}</span>
                  </li>
                )}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal For or Workflow */}
      {(idealFor || workflow) &&
      <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {idealFor &&
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-5 uppercase tracking-widest">
                    Ideal For
                  </span>
                  <ul className="space-y-3">
                    {idealFor.map((item, i) =>
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                        <div className="w-2 h-2 rounded-full bg-[#30B0F0] flex-shrink-0" />
                        <span className="text-sm font-medium text-[#0058A0]">{item}</span>
                      </li>
                )}
                  </ul>
                </motion.div>
            }

              {workflow &&
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-5 uppercase tracking-widest">
                    Workflow
                  </span>
                  <div className="space-y-2">
                    {workflow.map((step, i) =>
                <div key={i} className="flex items-start gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)', flexShrink: 0 }}>
                            {i + 1}
                          </div>
                          {i < workflow.length - 1 &&
                    <div className="w-px h-4 bg-gradient-to-b from-[#30B0F0] to-[#0058A0] opacity-30" />
                    }
                        </div>
                        <div className={`pb-1 ${i < workflow.length - 1 ? 'mb-1' : ''}`}>
                          <span className="text-sm font-medium text-slate-700">{step}</span>
                        </div>
                      </div>
                )}
                  </div>
                </motion.div>
            }
            </div>
          </div>
        </section>
      }

      {/* CTA section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
              {cta}
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              See how Joblynk transforms your hiring operation into an autonomous, scalable system.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://app.joblynk.ai/book-demo"
              className="cta-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
                Book a Demo
                <ArrowRight size={18} className="cta-arrow" />
              </a>
              <a href="https://app.joblynk.ai/get-started"
              className="cta-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

}