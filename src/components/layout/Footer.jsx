import { Link } from 'react-router-dom';

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg, #003B6E 0%, #0058A0 100%)' }} className="relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span style={{ fontSize: '320px', fontWeight: 900, color: 'white', opacity: 0.04, letterSpacing: '-0.05em', fontFamily: 'Inter Tight, Inter, sans-serif', lineHeight: 1, userSelect: 'none' }}>
          ∞
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://media.base44.com/images/public/6a29b75e34e7f549acbcb0f9/fd4bb2194_JobLynk-logo-0111.svg"
                alt="Joblynk"
                className="h-9 w-auto object-contain invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              AI-Powered Hiring Operating System™
              <br />
              Autonomous hiring infrastructure for the enterprise.
            </p>
            <a href="https://www.linkedin.com/company/joblynk-ai/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 bg-white/10 hover:bg-[#30B0F0]/30 text-white rounded-lg transition-colors">
              <LinkedInIcon />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'The Hiring OS', href: '/' },
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Platform Tour', href: '/' },
                { label: 'Integrations', href: '#' }
              ].map(item => (
                <li key={item.label}>
                  {item.href.startsWith('/') ? (
                    <Link to={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: 'Enterprise', href: '/solutions/enterprise' },
                { label: 'Staffing Firms', href: '/solutions/staffing-firms' },
                { label: 'MSP & VMS', href: '/solutions/msp-vms' },
                { label: 'RPO Providers', href: '/solutions/rpo' },
                { label: 'Government', href: '/solutions/government' },
              ].map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/60 hover:text-white text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Security', href: '#' },
                { label: 'Privacy', href: '#' },
                { label: 'Terms', href: '#' },
              ].map(item => (
                <li key={item.label}>
                  {item.href.startsWith('/') 
                    ? <Link to={item.href} className="text-white/60 hover:text-white text-sm transition-colors">{item.label}</Link>
                    : <a href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">{item.label}</a>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            Joblynk.ai — AI-Powered Hiring Operating System™ | Powered by Softwise Solutions
          </p>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Joblynk.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}