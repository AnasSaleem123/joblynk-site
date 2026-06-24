import { Shield } from 'lucide-react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

export default function Government() {
  return (
    <SolutionPageLayout
      badge="Government & Regulated Industries"
      heroTitle="Secure, Compliant, Enterprise-Grade Hiring Infrastructure"
      heroSub="Built for organizations where compliance, security, and auditability matter."
      overview="Government agencies, defense contractors, healthcare systems, and regulated industries require hiring solutions that combine speed with governance. Joblynk provides autonomous hiring capabilities while maintaining enterprise-grade security, compliance controls, audit trails, and workflow transparency."
      outcomes={[
        'Secure hiring workflows',
        'Improve hiring efficiency',
        'Maintain compliance requirements',
        'Reduce manual processes',
        'Increase visibility and accountability',
        'Accelerate workforce acquisition',
      ]}
      idealFor={[
        'Federal & State Government Agencies',
        'Defense Contractors',
        'Healthcare Systems',
        'Financial Services',
        'Regulated Industries',
      ]}
      cta="Secure The Future Of Hiring"
      gradient="from-[#003B6E] to-[#0058A0]"
      Icon={Shield}
    />
  );
}