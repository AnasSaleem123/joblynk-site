import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Calendar, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Calendar,
    title: 'Book a Demo',
    desc: 'See Joblynk in action with a personalized walkthrough of the platform tailored to your hiring model.',
    action: 'Schedule a Demo',
    href: 'https://app.joblynk.ai/book-demo',
    highlight: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    desc: 'Reach our team directly for partnership inquiries, enterprise pricing, or general questions.',
    action: 'hello@joblynk.ai',
    href: 'mailto:hello@joblynk.ai',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    desc: 'Follow Joblynk on LinkedIn for product updates, hiring insights, and company news.',
    action: 'Follow on LinkedIn',
    href: 'https://www.linkedin.com/company/joblynk-ai/',
  },
  {
    icon: MessageSquare,
    title: 'Get Started',
    desc: 'Ready to transform your hiring infrastructure? Create your account and start in minutes.',
    action: 'Start Free',
    href: 'https://app.joblynk.ai/get-started',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 mb-6 uppercase tracking-widest">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#0058A0] leading-tight mb-6"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
              Let's talk hiring infrastructure
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Whether you're an enterprise scaling rapidly, a staffing firm moving at client speed,
              or an RPO provider building for the future — we'd love to show you what autonomous
              hiring looks like in practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactMethods.map((m, i) => (
              <motion.a key={i} href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`group block p-7 rounded-2xl border transition-all hover:-translate-y-1 ${
                  m.highlight
                    ? 'border-[#0058A0] bg-gradient-to-br from-[#0058A0] to-[#1a7cc4] text-white'
                    : 'border-[#E2E8F0] bg-white hover:border-[#30B0F0]/40'
                }`}
                style={m.highlight ? {} : { boxShadow: '0 4px 24px rgba(0,88,160,0.04)' }}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                  m.highlight ? 'bg-white/20' : ''
                }`}
                  style={m.highlight ? {} : { background: 'linear-gradient(135deg, #0058A0, #30B0F0)' }}>
                  <m.icon size={18} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${m.highlight ? 'text-white' : 'text-slate-900'}`}
                  style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                  {m.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${m.highlight ? 'text-white/80' : 'text-slate-500'}`}>
                  {m.desc}
                </p>
                <span className={`text-sm font-semibold inline-flex items-center gap-1 ${
                  m.highlight ? 'text-white' : 'text-[#0058A0] group-hover:text-[#30B0F0]'
                } transition-colors`}>
                  {m.action} →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Office / company info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center">
            <p className="text-sm text-slate-500 leading-relaxed">
              <strong className="text-slate-700">Joblynk.ai</strong> is a product of{' '}
              <strong className="text-slate-700">Softwise Solutions</strong>.<br />
              For enterprise sales and partnerships, email us at{' '}
              <a href="mailto:hello@joblynk.ai" className="text-[#0058A0] hover:text-[#30B0F0] transition-colors font-medium">
                hello@joblynk.ai
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}