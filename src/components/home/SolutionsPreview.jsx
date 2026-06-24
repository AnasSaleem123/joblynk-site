import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users2, Network, TrendingUp, Shield, Rocket, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Talent Acquisition',
    outcome: 'Scale hiring without growing headcount',
    metrics: '100x productivity',
    href: '/solutions/enterprise',
    color: 'from-[#0058A0] to-[#1a7cc4]',
  },
  {
    icon: Users2,
    title: 'Staffing & Recruiting Firms',
    outcome: 'Place more candidates, faster',
    metrics: 'Higher fill rates',
    href: '/solutions/staffing-firms',
    color: 'from-[#30B0F0] to-[#0058A0]',
  },
  {
    icon: Network,
    title: 'MSP & VMS Programs',
    outcome: 'Consistent quality at every requisition',
    metrics: 'Faster submissions',
    href: '/solutions/msp-vms',
    color: 'from-[#0058A0] to-[#30B0F0]',
  },
  {
    icon: TrendingUp,
    title: 'RPO Providers',
    outcome: 'Scale operations, not costs',
    metrics: 'Lower cost-per-hire',
    href: '/solutions/rpo',
    color: 'from-[#1a7cc4] to-[#30B0F0]',
  },
  {
    icon: Shield,
    title: 'Government & Regulated Industries',
    outcome: 'Secure, compliant, auditable',
    metrics: 'Enterprise-grade security',
    href: '/solutions/government',
    color: 'from-[#003B6E] to-[#0058A0]',
  },
  {
    icon: Rocket,
    title: 'High-Growth Startups',
    outcome: 'Build teams without a large recruiting department',
    metrics: 'Compete for top talent',
    href: '/solutions/startups',
    color: 'from-[#30B0F0] to-[#0058A0]',
  },
];

export default function SolutionsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-4 uppercase tracking-widest">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0058A0] mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            Built For Every
            <br />
            <span className="shimmer-text">Hiring Model</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Whether you're an enterprise, staffing firm, or RPO — Joblynk is the infrastructure layer that powers your entire hiring operation.
          </p>
        </motion.div>

        {/* Solution cards — masonry-inspired */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <Link to={sol.href}
                  className="solution-card block h-full p-6 rounded-2xl border border-[#E2E8F0] bg-white group">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={22} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0058A0] mb-2"
                    style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                    {sol.title}
                  </h3>

                  {/* Outcome */}
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{sol.outcome}</p>

                  {/* Metric badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg tag-badge text-xs font-semibold mb-5">
                    {sol.metrics}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#0058A0] group-hover:text-[#30B0F0] transition-colors">
                    Learn more
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link to="/solutions" className="cta-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
            View All Solutions
            <ArrowRight size={16} className="cta-arrow" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}