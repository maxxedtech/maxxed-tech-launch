import { motion } from "framer-motion";
import { Search, Paintbrush, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Consultation",
    description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
  },
  {
    icon: Paintbrush,
    step: "02",
    title: "Design & Development",
    description: "Our team crafts stunning designs and builds robust, scalable solutions using cutting-edge technology.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Testing & Launch",
    description: "Rigorous testing ensures everything works perfectly before we deploy your project live.",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Support & Growth",
    description: "Post-launch support and optimization to help your business continue to grow and succeed.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process designed to deliver exceptional results
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-button">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="text-primary text-sm font-bold mb-2 block">
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
