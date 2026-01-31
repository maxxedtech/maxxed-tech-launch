import { motion } from "framer-motion";
import { Check, Zap, Shield, Users, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Custom-Built Solutions",
    description: "No generic templates. Every project is uniquely crafted to match your brand and goals.",
  },
  {
    icon: Shield,
    title: "Scalable Technology",
    description: "Future-ready solutions that grow with your business without costly rebuilds.",
  },
  {
    icon: Users,
    title: "Startup-Friendly Packages",
    description: "Affordable pricing designed for startups and SMEs without compromising quality.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Continuous support to ensure your success.",
  },
];

const features = [
  "Modern, responsive designs",
  "SEO optimization included",
  "Fast page load speeds",
  "Security best practices",
  "Dedicated project manager",
  "30-day post-launch support",
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Partner with a Team That <span className="text-gradient">Delivers</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine technical expertise with creative innovation to build solutions that not only look great but perform exceptionally.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
