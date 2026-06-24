import { TrendingUp } from 'lucide-react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

export default function Rpo() {
  return (
    <SolutionPageLayout
      badge="RPO Providers"
      heroTitle="Scale Recruiting Operations Without Scaling Costs"
      heroSub="Autonomous hiring infrastructure for Recruitment Process Outsourcing providers."
      overview="RPO providers are expected to deliver enterprise-level hiring outcomes while managing large recruiting teams and complex client environments. Joblynk becomes a force multiplier for recruiters, automating repetitive hiring tasks and enabling teams to support significantly higher hiring volumes."
      outcomes={[
        'Improve recruiter efficiency',
        'Lower cost-per-hire',
        'Increase client satisfaction',
        'Scale hiring programs faster',
        'Improve SLA performance',
        'Deliver consistent hiring quality',
      ]}
      idealFor={[
        'RPO Firms of All Sizes',
        'Enterprise RPO Programs',
        'Hybrid RPO Models',
        'Project-Based RPO',
      ]}
      cta="Power The Next Generation Of RPO"
      gradient="from-[#1a7cc4] to-[#30B0F0]"
      Icon={TrendingUp}
    />
  );
}