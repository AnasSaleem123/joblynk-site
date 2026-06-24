import { Users2 } from 'lucide-react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

export default function StaffingFirms() {
  return (
    <SolutionPageLayout
      badge="Staffing & Recruiting Firms"
      heroTitle="Place More Candidates Without Hiring More Recruiters"
      heroSub="Turn every recruiter into a high-performing placement machine."
      overview="Staffing firms succeed when recruiters can quickly identify, engage, qualify, and submit the best candidates before competitors. Joblynk automates the entire top-of-funnel recruiting process, enabling recruiters to spend less time sourcing and more time building relationships, managing clients, and closing placements."
      outcomes={[
        'Increase recruiter productivity',
        'Submit qualified candidates faster',
        'Improve fill rates',
        'Expand recruiter capacity',
        'Reduce sourcing bottlenecks',
        'Deliver higher-quality candidate pipelines',
      ]}
      workflow={[
        'Job Order Received',
        'Joblynk Sources Candidates',
        'AI Outreach',
        'AI Interviews',
        'Candidate Qualification',
        'Submission-Ready Profiles',
        'Recruiter Review',
        'Client Submission',
      ]}
      cta="Scale Placements, Not Headcount"
      gradient="from-[#30B0F0] to-[#0058A0]"
      Icon={Users2}
    />
  );
}