import { Building2 } from 'lucide-react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

export default function Enterprise() {
  return (
    <SolutionPageLayout
      badge="Enterprise Talent Acquisition"
      heroTitle="Autonomous Hiring Infrastructure for Enterprise Talent Acquisition"
      heroSub="Reduce time-to-fill, improve candidate quality, and scale hiring operations without increasing recruiting headcount."
      overview="Enterprise hiring teams face increasing pressure to fill critical roles faster while managing growing workloads, fragmented systems, and rising recruiting costs. Joblynk acts as an AI-powered hiring operating system that automates sourcing, outreach, screening, interviewing, qualification, and candidate delivery — allowing your recruiters to focus on hiring decisions instead of administrative work."
      outcomes={[
        'Accelerate hiring across business units',
        'Reduce recruiter workload',
        'Improve candidate quality',
        'Increase hiring velocity',
        'Scale without increasing TA headcount',
        'Integrate with existing ATS and HR systems',
      ]}
      idealFor={[
        'Fortune 500 Companies',
        'Global Enterprises',
        'Healthcare Systems',
        'Financial Institutions',
        'Technology Organizations',
        'Government Agencies',
      ]}
      cta="Transform Your Talent Acquisition Strategy"
      gradient="from-[#0058A0] to-[#1a7cc4]"
      Icon={Building2}
    />
  );
}