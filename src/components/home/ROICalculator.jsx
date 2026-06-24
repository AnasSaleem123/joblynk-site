import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, Briefcase, TrendingDown, Clock, DollarSign, Zap } from 'lucide-react';

const RECRUITER_SALARY = 75000; // avg annual recruiter salary
const HOURS_PER_HIRE_MANUAL = 40; // hrs
const HOURS_PER_HIRE_AI = 4.5; // hrs
const COST_PER_HIRE_OVERHEAD = 4200; // admin, tools, job boards
const JOBLYNK_SAVINGS_RATE = 0.72; // 72% reduction in cost per hire
const BAD_HIRE_COST_MULTIPLIER = 1.5; // 1.5x annual salary
const BAD_HIRE_RATE_MANUAL = 0.28;
const BAD_HIRE_RATE_AI = 0.06;
const AVG_SALARY_HIRED = 85000;

function AnimatedNumber({ value, prefix = '', suffix = '', duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    const start = prev.current;
    const end = value;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else prev.current = end;
    };
    requestAnimationFrame(tick);
  }, [value]);

  const formatted = display >= 1000000
    ? `${(display / 1000000).toFixed(1)}M`
    : display >= 1000
    ? `${(display / 1000).toFixed(0)}K`
    : display.toLocaleString();

  return <span>{prefix}{formatted}{suffix}</span>;
}

function SliderInput({ label, icon: Icon, value, min, max, step, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={15} className="text-[#30B0F0]" />
          <span className="text-sm font-semibold text-slate-700">{label}</span>
        </div>
        <span className="text-sm font-black text-[#0058A0]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
          {format(value)}
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-slate-100">
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #0058A0, #30B0F0)' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#0058A0] shadow-md pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-400">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [recruiters, setRecruiters] = useState(5);
  const [hiresPerYear, setHiresPerYear] = useState(50);

  // Calculations
  const manualRecruiterCost = recruiters * RECRUITER_SALARY;
  const manualHoursCost = hiresPerYear * HOURS_PER_HIRE_MANUAL * 45; // $45/hr blended
  const manualOverhead = hiresPerYear * COST_PER_HIRE_OVERHEAD;
  const manualBadHireCost = hiresPerYear * BAD_HIRE_RATE_MANUAL * (AVG_SALARY_HIRED * BAD_HIRE_COST_MULTIPLIER);
  const totalManualCost = manualRecruiterCost + manualHoursCost + manualOverhead + manualBadHireCost;

  const aiRecruiterCost = Math.max(1, Math.ceil(recruiters * 0.3)) * RECRUITER_SALARY; // 70% headcount reduction
  const aiHoursCost = hiresPerYear * HOURS_PER_HIRE_AI * 45;
  const aiOverhead = hiresPerYear * COST_PER_HIRE_OVERHEAD * (1 - JOBLYNK_SAVINGS_RATE);
  const aiBadHireCost = hiresPerYear * BAD_HIRE_RATE_AI * (AVG_SALARY_HIRED * BAD_HIRE_COST_MULTIPLIER);
  const totalAICost = aiRecruiterCost + aiHoursCost + aiOverhead + aiBadHireCost;

  const annualSavings = Math.round(totalManualCost - totalAICost);
  const savingsPct = Math.round((annualSavings / totalManualCost) * 100);
  const timeToHireReduction = Math.round(((HOURS_PER_HIRE_MANUAL - HOURS_PER_HIRE_AI) / HOURS_PER_HIRE_MANUAL) * 100);
  const recruitersSaved = recruiters - Math.max(1, Math.ceil(recruiters * 0.3));
  const hoursSaved = hiresPerYear * (HOURS_PER_HIRE_MANUAL - HOURS_PER_HIRE_AI);

  const results = [
    { label: 'Annual Cost Savings', value: annualSavings, prefix: '$', icon: DollarSign, highlight: true },
    { label: 'Time-to-Hire Reduction', value: timeToHireReduction, suffix: '%', icon: Clock, highlight: false },
    { label: 'Recruiter Hours Saved', value: Math.round(hoursSaved), suffix: 'hrs', icon: Zap, highlight: false },
    { label: 'Headcount Freed Up', value: recruitersSaved, suffix: ' FTEs', icon: Users, highlight: false },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,88,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,88,160,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(48,176,240,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#0058A0] bg-[#30B0F0]/10 rounded-full border border-[#30B0F0]/20 uppercase tracking-widest mb-5">
            ROI Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
            What does manual hiring<br />
            <span style={{ background: 'linear-gradient(135deg, #0058A0, #30B0F0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              actually cost you?
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Adjust your current team size and hiring volume to see your real savings with Joblynk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Input panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-slate-200 bg-white"
            style={{ boxShadow: '0 8px 40px rgba(0,88,160,0.06)' }}
          >
            <p className="text-xs font-black text-[#30B0F0] uppercase tracking-widest mb-7">Your Current Setup</p>

            <div className="space-y-10">
              <SliderInput
                label="Recruiting headcount"
                icon={Users}
                value={recruiters}
                min={1}
                max={50}
                step={1}
                onChange={setRecruiters}
                format={v => `${v} recruiters`}
              />
              <SliderInput
                label="Hires per year"
                icon={Briefcase}
                value={hiresPerYear}
                min={10}
                max={500}
                step={10}
                onChange={setHiresPerYear}
                format={v => `${v} hires`}
              />
            </div>

            {/* Current cost breakdown */}
            <div className="mt-10 pt-7 border-t border-slate-100 space-y-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Your Current Annual Cost</p>
              {[
                { label: 'Recruiter salaries', val: manualRecruiterCost },
                { label: 'Time & admin overhead', val: manualHoursCost + manualOverhead },
                { label: 'Bad hire losses', val: manualBadHireCost },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown size={12} className="text-red-400" />
                    <span className="text-sm text-slate-500">{row.label}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-700">
                    ${Math.round(row.val / 1000)}K
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-sm font-black text-slate-800">Total annual spend</span>
                <span className="text-base font-black text-red-500">
                  ${Math.round(totalManualCost / 1000)}K
                </span>
              </div>
            </div>
          </motion.div>

          {/* Results panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Savings headline */}
            <div className="p-8 rounded-2xl text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0058A0 0%, #1a7cc4 100%)' }}>
              <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2 relative">
                Your Estimated Annual Savings
              </p>
              <div className="text-6xl font-black leading-none mb-2 relative"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.04em' }}>
                {isInView && <AnimatedNumber value={annualSavings} prefix="$" />}
              </div>
              <p className="text-white/80 text-sm relative">
                That's <span className="font-bold text-white">{savingsPct}%</span> of your current hiring spend returned.
              </p>
            </div>

            {/* Metric grid */}
            <div className="grid grid-cols-2 gap-4">
              {results.slice(1).map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="p-5 rounded-2xl border border-slate-100 bg-white"
                    style={{ boxShadow: '0 4px 20px rgba(0,88,160,0.05)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(48,176,240,0.1)' }}>
                        <Icon size={14} className="text-[#30B0F0]" />
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{r.label}</span>
                    </div>
                    <div className="text-2xl font-black text-[#0058A0]"
                      style={{ fontFamily: 'Inter Tight, Inter, sans-serif', letterSpacing: '-0.03em' }}>
                      {isInView && <AnimatedNumber value={r.value} suffix={r.suffix || ''} />}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="https://app.joblynk.ai/book-demo"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-between w-full p-5 rounded-2xl border border-[#30B0F0]/30 hover:border-[#30B0F0]/60 transition-all group"
              style={{ background: 'linear-gradient(135deg, rgba(48,176,240,0.05) 0%, rgba(0,88,160,0.03) 100%)' }}
            >
              <div>
                <p className="text-sm font-black text-[#0058A0]"
                  style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                  See your full savings report
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Book a personalized demo with a Joblynk expert</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#0058A0] flex items-center justify-center group-hover:bg-[#30B0F0] transition-colors">
                <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center text-xs text-slate-400 mt-10"
        >
          Estimates based on industry benchmarks: avg. recruiter salary $75K, $45/hr blended rate, 28% bad-hire rate, SHRM cost-per-hire data. Actual results vary.
        </motion.p>
      </div>
    </section>
  );
}