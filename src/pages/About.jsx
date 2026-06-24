import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Users, TrendingUp, Cpu } from 'lucide-react';

const principles = [
  { icon: Cpu, title: 'Autonomous by Design', desc: 'Every workflow is built to run without human bottlenecks — from sourcing to shortlist.' },
  { icon: Shield, title: 'Enterprise-Grade Security', desc: 'SOC 2-aligned infrastructure with role-based access, audit logs, and data residency controls.' },
  { icon: Globe, title: 'Global Talent Coverage', desc: 'Reach candidates across 140+ countries through intelligent multi-channel outreach.' },
  { icon: TrendingUp, title: 'Outcome-Driven Intelligence', desc: 'Every decision is backed by structured data, not gut feel or recruiter bias.' },
  { icon: Users, title: 'Built for All Hiring Models', desc: 'Enterprise, staffing, RPO, MSP/VMS, and government agencies — one platform, every model.' },
  { icon: Zap, title: 'Speed as Strategy', desc: 'Top candidates leave the market in 10 days. Joblynk acts in hours, not weeks.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-6 uppercase tracking-widest">
              About Joblynk
            </span>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#0058A0] leading-tight mb-6"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
              The AI-Powered Hiring Operating System™
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Joblynk is autonomous hiring infrastructure built for the next decade of talent acquisition.
              We eliminate human bottlenecks across every stage of the recruitment lifecycle —
              so enterprises, staffing firms, RPO providers, and government agencies can hire faster,
              smarter, and at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-6 uppercase tracking-widest">
              Our Mission
            </span>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-5">
              <p>
                Recruiting was never engineered for scale. It was built for relationships — and then it broke.
                Spreadsheets became applicant tracking systems. ATSs became bottlenecks. The best talent
                stopped waiting for slow, manual sourcing cycles.
              </p>
              <p>
                Joblynk was founded to fix this. We believe that the enterprises winning the next decade
                won't have bigger recruiting teams — they'll have better infrastructure. Our platform acts
                as the operating system for your entire hiring function: ingesting job descriptions,
                autonomously sourcing and screening candidates, coordinating interviews, and delivering
                qualified shortlists — all without manual intervention.
              </p>
              <p>
                We serve Fortune 500 enterprises managing hundreds of open roles simultaneously, staffing
                firms that need to move at the speed of client demand, MSP and VMS organizations requiring
                compliant multi-vendor coordination, RPO providers delivering white-label recruiting at scale,
                and government agencies navigating structured, audit-ready hiring workflows.
              </p>
              <p>
                Joblynk is built and maintained by the team at <strong>Softwise Solutions</strong> — a
                technology company focused on applying AI and automation to high-stakes operational challenges.
                Our engineering team combines deep expertise in machine learning, workflow orchestration, and
                enterprise SaaS to deliver a platform that doesn't just assist recruiters — it replaces the
                manual, repeatable work entirely.
              </p>
              <p>
                With Joblynk, organizations reduce time-to-shortlist by up to 9×, cut cost-per-hire
                significantly, and free their human talent teams to focus on what only humans can do:
                building relationships, making judgment calls, and closing top candidates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-4 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-3xl font-black text-slate-900"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
              What we stand for
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#30B0F0]/40 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
                  <p.icon size={18} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2"
                  style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}