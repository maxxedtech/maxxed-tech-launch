import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { CTASection } from "@/components/home/CTASection";

type PageProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const Index = ({ theme, onToggleTheme }: PageProps) => {
  return (
    <Layout theme={theme} onToggleTheme={onToggleTheme}>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <PortfolioSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
