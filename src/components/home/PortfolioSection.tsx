import { motion } from "framer-motion";
import { ExternalLink, Code2, Palette, Bot } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce solution with seamless checkout and inventory management.",
    icon: Code2,
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Brand Identity Suite",
    category: "Brand Design",
    description: "Complete visual identity including logo, color system, and brand guidelines.",
    icon: Palette,
    tags: ["Logo Design", "Typography", "Guidelines"],
  },
  {
    title: "AI Chatbot Assistant",
    category: "AI Automation",
    description: "Intelligent customer support bot that handles inquiries 24/7.",
    icon: Bot,
    tags: ["AI/ML", "NLP", "Integration"],
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 lg:py-32 bg-card/30">
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
            Sample Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Concept projects showcasing our capabilities and design approach
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border/50 overflow-hidden card-hover card-animated">
                {/* Sample Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    Sample Project
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Category */}
                <span className="text-primary text-sm font-medium mb-2 block">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
