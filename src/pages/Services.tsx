import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Bot,
  Palette,
  Wrench,
  TrendingUp,
  Check,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Design & Development",
    description: "Custom websites that look stunning and perform exceptionally.",
    features: [
      "Responsive, mobile-first design",
      "Modern frontend frameworks (React, Next.js)",
      "E-commerce solutions",
      "CMS integration",
      "SEO optimization included",
      "Performance optimization",
    ],
    benefits: "Get a website that converts visitors into customers with fast load times, intuitive navigation, and compelling design.",
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    description: "Harness artificial intelligence to streamline operations and boost productivity.",
    features: [
      "Custom AI chatbots",
      "Process automation",
      "Data analysis & insights",
      "Machine learning integration",
      "Workflow optimization",
      "API integrations",
    ],
    benefits: "Reduce manual work, improve efficiency, and make data-driven decisions with intelligent automation.",
  },
  {
    icon: Palette,
    title: "Logo & Brand Identity Design",
    description: "Create a memorable brand that stands out in your industry.",
    features: [
      "Custom logo design",
      "Brand color palette",
      "Typography selection",
      "Brand guidelines document",
      "Social media assets",
      "Stationery design",
    ],
    benefits: "Build trust and recognition with a cohesive brand identity that resonates with your target audience.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description: "Keep your website running smoothly with ongoing technical support.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "Bug fixes & troubleshooting",
      "Backup management",
      "Uptime monitoring",
    ],
    benefits: "Focus on your business while we handle the technical details and keep your site secure and fast.",
  },
  {
    icon: TrendingUp,
    title: "Digital Optimization & Scaling",
    description: "Prepare your digital infrastructure for growth and expansion.",
    features: [
      "Performance audits",
      "Conversion optimization",
      "Load testing & scaling",
      "Analytics setup",
      "A/B testing",
      "Growth strategy consulting",
    ],
    benefits: "Scale your digital presence confidently with infrastructure that grows alongside your business.",
  },
];

type PageProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

const Services = ({ theme, onToggleTheme }: PageProps) => {
  return (
    <Layout theme={theme} onToggleTheme={onToggleTheme}>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Digital Solutions That <span className="text-gradient">Deliver Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch and beyond, we provide comprehensive digital services tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-button">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <p className="text-muted-foreground mb-8">
                    {service.benefits}
                  </p>
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group">
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Features Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="p-8 rounded-2xl bg-gradient-card border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-6">
                      What's Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation and let's discuss your project. We'll help you identify the best solutions for your business goals.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
