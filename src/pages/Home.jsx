import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import BeliefSection from '../components/home/BeliefSection';
import ProblemSection from '../components/home/ProblemSection';
import PlatformSection from '../components/home/PlatformSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import MetricsSection from '../components/home/MetricsSection';
import SolutionsPreview from '../components/home/SolutionsPreview';
import ComparisonSection from '../components/home/ComparisonSection';
import AboutSection from '../components/home/AboutSection';
import ROICalculator from '../components/home/ROICalculator';
import FinalCTASection from '../components/home/FinalCTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BeliefSection />
      <ProblemSection />
      <PlatformSection />
      <HowItWorksSection />
      <MetricsSection />
      <SolutionsPreview />
      <ComparisonSection />
      <ROICalculator />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}