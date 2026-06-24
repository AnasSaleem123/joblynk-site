import { Network } from 'lucide-react';
import SolutionPageLayout from '../../components/solutions/SolutionPageLayout';

export default function MspVms() {
  return (
    <SolutionPageLayout
      badge="MSP & VMS Programs"
      heroTitle="Deliver Qualified Talent Faster Across Every Requisition"
      heroSub="Built for modern contingent workforce programs."
      overview="MSP and VMS environments require speed, consistency, compliance, and quality at scale. Joblynk automates candidate sourcing, engagement, qualification, and screening while ensuring every candidate submitted meets client requirements before entering the pipeline."
      outcomes={[
        'Faster candidate submissions',
        'Improved submission quality',
        'Reduced supplier response times',
        'Consistent qualification standards',
        'Increased requisition coverage',
        'Better candidate-to-placement ratios',
      ]}
      idealFor={[
        'Managed Service Providers',
        'Workforce Solutions Providers',
        'Vendor Management Programs',
        'Contingent Workforce Teams',
      ]}
      cta="Modernize Candidate Delivery"
      gradient="from-[#0058A0] to-[#30B0F0]"
      Icon={Network}
    />
  );
}