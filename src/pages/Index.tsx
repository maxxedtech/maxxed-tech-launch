import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ImpactStatsSection } from "@/components/home/ImpactStatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProjectPlannerSection } from "@/components/home/ProjectPlannerSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ImpactStatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectPlannerSection />
      <HowItWorksSection />
      <PortfolioSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
