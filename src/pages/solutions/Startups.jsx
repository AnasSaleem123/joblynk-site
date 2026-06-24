import { Rocket } from 'lucide-react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

export default function Startups() {
  return (
    <SolutionPageLayout
      badge="High-Growth Startups"
      heroTitle="Build World-Class Teams Without Building a Large Recruiting Department"
      heroSub="Joblynk acts as an AI recruiting engine that helps startups compete for talent against much larger organizations."
      overview="Early-stage and growth-stage companies need to hire exceptional talent to scale — but they can't afford to build large recruiting teams. Joblynk automates the entire top-of-funnel hiring process, from sourcing to qualification, giving startups the recruiting power of a Fortune 500 company without the overhead."
      outcomes={[
        'Hire faster with limited resources',
        'Access active and passive talent',
        'Reduce dependence on expensive recruiters',
        'Build teams without growing recruiting overhead',
        'Accelerate company growth',
      ]}
      idealFor={[
        'Seed Startups',
        'Series A Companies',
        'Series B Growth Companies',
        'Venture-Backed Startups',
        'Technology Startups',
        'Healthcare Startups',
        'AI Startups',
      ]}
      cta="Scale Your Startup Hiring"
      gradient="from-[#30B0F0] to-[#0058A0]"
      Icon={Rocket}
    />
  );
}