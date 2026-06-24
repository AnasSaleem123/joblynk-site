import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Users2, Network, TrendingUp, Shield, Rocket, ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import NetworkVisualization from '../components/home/NetworkVisualization';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Talent Acquisition',
    hero: 'Autonomous Hiring Infrastructure for Enterprise',
    desc: 'Reduce time-to-fill, improve candidate quality, and scale hiring operations without increasing recruiting headcount.',
    outcomes: ['Accelerate hiring across business units', 'Reduce recruiter workload', 'Improve candidate quality', 'Increase hiring velocity', 'Scale without increasing TA headcount'],
    cta: 'Transform Your Talent Acquisition',
    href: '/solutions/enterprise',
    gradient: 'from-[#0058A0] to-[#1a7cc4]',
  },
  {
    icon: Users2,
    title: 'Staffing & Recruiting Firms',
    hero: 'Place More Candidates Without Hiring More Recruiters',
    desc: 'Turn every recruiter into a high-performing placement machine with autonomous top-of-funnel operations.',
    outcomes: ['Increase recruiter productivity', 'Submit qualified candidates faster', 'Improve fill rates', 'Expand recruiter capacity', 'Deliver higher-quality pipelines'],
    cta: 'Scale Placements, Not Headcount',
    href: '/solutions/staffing-firms',
    gradient: 'from-[#30B0F0] to-[#0058A0]',
  },
  {
    icon: Network,
    title: 'MSP & VMS Programs',
    hero: 'Deliver Qualified Talent Faster Across Every Requisition',
    desc: 'Built for modern contingent workforce programs that require speed, consistency, compliance, and quality at scale.',
    outcomes: ['Faster candidate submissions', 'Improved submission quality', 'Reduced supplier response times', 'Consistent qualification standards', 'Better candidate-to-placement ratios'],
    cta: 'Modernize Candidate Delivery',
    href: '/solutions/msp-vms',
    gradient: 'from-[#0058A0] to-[#30B0F0]',
  },
  {
    icon: TrendingUp,
    title: 'RPO Providers',
    hero: 'Scale Recruiting Operations Without Scaling Costs',
    desc: 'Become a force multiplier for recruiters, enabling teams to support significantly higher hiring volumes.',
    outcomes: ['Improve recruiter efficiency', 'Lower cost-per-hire', 'Increase client satisfaction', 'Scale hiring programs faster', 'Deliver consistent hiring quality'],
    cta: 'Power the Next Generation of RPO',
    href: '/solutions/rpo',
    gradient: 'from-[#1a7cc4] to-[#30B0F0]',
  },
  {
    icon: Shield,
    title: 'Government & Regulated Industries',
    hero: 'Secure, Compliant, Enterprise-Grade Hiring Infrastructure',
    desc: 'Built for organizations where compliance, security, and auditability matter — without sacrificing speed.',
    outcomes: ['Secure hiring workflows', 'Improve hiring efficiency', 'Maintain compliance requirements', 'Reduce manual processes', 'Increase visibility and accountability'],
    cta: 'Secure the Future of Hiring',
    href: '/solutions/government',
    gradient: 'from-[#003B6E] to-[#0058A0]',
  },
  {
    icon: Rocket,
    title: 'High-Growth Startups',
    hero: 'Build World-Class Teams Without a Large Recruiting Department',
    desc: 'An AI recruiting engine that helps startups compete for talent against much larger organizations.',
    outcomes: ['Hire faster with limited resources', 'Access active and passive talent', 'Reduce dependence on expensive recruiters', 'Build teams without growing recruiting overhead', 'Accelerate company growth'],
    cta: 'Scale Your Startup Hiring',
    href: '/solutions/startups',
    gradient: 'from-[#30B0F0] to-[#0058A0]',
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
          <NetworkVisualization width={1400} height={500} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F8FAFC] to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-6 uppercase tracking-widest">
              Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#0058A0] leading-tight mb-6"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
              Infrastructure For
              <br />
              <span className="shimmer-text">Every Hiring Model</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Joblynk is the autonomous hiring layer that powers enterprise, staffing, MSP, RPO, and government hiring operations — at any scale.
            </p>
            <a href="https://app.joblynk.ai/book-demo"
              className="cta-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold">
              Book a Demo
              <ArrowRight size={18} className="cta-arrow" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Solution cards */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={sol.href}
                  className="group block rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#30B0F0]/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Left: Icon + title */}
                    <div className={`bg-gradient-to-br ${sol.gradient} p-8 flex flex-col justify-between`}>
                      <div>
                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-5">
                          <Icon size={28} className="text-white" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-3"
                          style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.02em' }}>
                          {sol.title}
                        </h2>
                        <p className="text-white/80 text-sm leading-relaxed">{sol.hero}</p>
                      </div>
                      <div className="mt-6">
                        <span className="inline-flex items-center gap-1 text-white font-semibold text-sm group-hover:gap-2 transition-all">
                          {sol.cta} <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>

                    {/* Middle: Description */}
                    <div className="p-8 flex flex-col justify-center">
                      <p className="text-slate-600 text-base leading-relaxed mb-6">{sol.desc}</p>
                      <a href="https://app.joblynk.ai/book-demo"
                        className="cta-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold w-fit"
                        onClick={e => e.stopPropagation()}>
                        Book a Demo
                        <ArrowRight size={14} className="cta-arrow" />
                      </a>
                    </div>

                    {/* Right: Outcomes */}
                    <div className="p-8 bg-[#F8FAFC] border-l border-[#E2E8F0]">
                      <p className="text-xs font-black text-[#30B0F0] uppercase tracking-widest mb-4">Key Outcomes</p>
                      <ul className="space-y-2.5">
                        {sol.outcomes.map((outcome, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <Check size={14} className="text-[#30B0F0] flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            Ready to Deploy Autonomous Hiring?
          </h2>
          <p className="text-slate-600 mb-8">Whatever your hiring model, Joblynk is the infrastructure that powers it.</p>
          <a href="https://app.joblynk.ai/book-demo"
            className="cta-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base">
            Schedule a Demo
            <ArrowRight size={18} className="cta-arrow" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}