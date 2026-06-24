import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JoblynkLogo = ({ invert }) =>
<img
  src="https://media.base44.com/images/public/6a29b75e34e7f549acbcb0f9/fd4bb2194_JobLynk-logo-0111.svg"
  alt="Joblynk"
  className={`h-9 w-auto object-contain transition-all duration-300 ${invert ? 'brightness-0 invert' : ''}`} />;



const solutions = [
{ label: 'Enterprise', href: '/solutions/enterprise' },
{ label: 'Staffing Firms', href: '/solutions/staffing-firms' },
{ label: 'MSP & VMS', href: '/solutions/msp-vms' },
{ label: 'RPO Providers', href: '/solutions/rpo' },
{ label: 'Government', href: '/solutions/government' },
{ label: 'High-Growth Startups', href: '/solutions/startups' }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  // Solution pages have dark hero backgrounds — use white nav text when transparent
  const isDarkHero = location.pathname.startsWith('/solutions');
  const useLightText = isDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'command-bar shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 opacity-100">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <JoblynkLogo invert={useLightText} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${useLightText ? 'text-white hover:text-white/80' : 'text-[#0058A0] hover:text-[#30B0F0]'}`}>Platform</Link>

            {/* Solutions dropdown */}
            <div className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}>
              
              <button className={`text-sm font-medium flex items-center gap-1 transition-colors ${useLightText ? 'text-white hover:text-white/80' : 'text-[#0058A0] hover:text-[#30B0F0]'}`}>
                Solutions <ChevronDown size={14} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {solutionsOpen &&
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 azure-glass rounded-xl overflow-hidden">
                  
                    {solutions.map((s) =>
                  <Link key={s.href} to={s.href}
                  className="block px-4 py-2.5 text-sm text-[#0058A0] hover:bg-[#30B0F0]/10 transition-colors font-medium">
                    {s.label}</Link>
                  )}
                  </motion.div>
                }
              </AnimatePresence>
            </div>

            <a href="#how-it-works" className={`text-sm font-medium transition-colors ${useLightText ? 'text-white hover:text-white/80' : 'text-[#0058A0] hover:text-[#30B0F0]'}`}>How It Works</a>
            <a href="#about" className={`text-sm font-medium transition-colors ${useLightText ? 'text-white hover:text-white/80' : 'text-[#0058A0] hover:text-[#30B0F0]'}`}>About</a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.joblynk.ai/login"
            className={`text-sm font-medium transition-colors px-3 py-1.5 ${useLightText ? 'text-white hover:text-white/80' : 'text-[#0058A0] hover:text-[#30B0F0]'}`}>
              Login
            </a>
            <a href="https://app.joblynk.ai/get-started"
            className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-all ${useLightText ? 'text-white border border-white/50 hover:bg-white/10' : 'text-[#0058A0] border border-[#0058A0] hover:bg-[#0058A0]/5'}`}>
              Get Started
            </a>
            <a href="https://app.joblynk.ai/book-demo"
            className="cta-primary text-sm font-semibold px-4 py-1.5 rounded-lg inline-flex items-center gap-1.5">
              Book a Demo
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${useLightText ? 'text-white' : 'text-[#0058A0]'}`}>
            
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden command-bar border-t border-[#E2E8F0] overflow-hidden">
          
            <div className="px-6 py-4 space-y-3">
              <Link to="/" className="block text-sm font-medium text-[#0058A0] py-2">Platform</Link>
              <div>
                <p className="text-xs font-semibold text-[#30B0F0] uppercase tracking-wider mb-2">Solutions</p>
                {solutions.map((s) =>
              <Link key={s.href} to={s.href}
              className="block text-sm font-medium text-[#0058A0] py-1.5 pl-3">
                {s.label}</Link>
              )}
              </div>
              <a href="#how-it-works" className="block text-sm font-medium text-[#0058A0] py-2">How It Works</a>
              <a href="#about" className="block text-sm font-medium text-[#0058A0] py-2">About</a>
              <div className="flex flex-col gap-2 pt-2 border-t border-[#E2E8F0]">
                <a href="https://app.joblynk.ai/login" className="text-sm font-medium text-[#0058A0] py-2">Login</a>
                <a href="https://app.joblynk.ai/get-started" className="text-sm font-semibold text-[#0058A0] border border-[#0058A0] px-4 py-2 rounded-lg text-center">Get Started</a>
                <a href="https://app.joblynk.ai/book-demo" className="cta-primary text-sm font-semibold px-4 py-2 rounded-lg text-center">Book a Demo</a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}