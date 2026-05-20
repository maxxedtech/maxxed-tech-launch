import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-aurora hero-aurora--secondary" aria-hidden="true" />

      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] ambient-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[96px] ambient-orb" style={{ animationDelay: "1.2s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Your Digital Transformation Partner</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Building Smart Digital Solutions for <span className="text-gradient">Modern Businesses</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Websites, AI-powered tools, brand systems, and growth-focused support to help your business launch faster and scale smarter.
          </motion.p>

          <motion.ul initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="flex flex-wrap items-center justify-center gap-3 mb-10" aria-label="Why choose Maxxed Tech">
            {["Fast Delivery", "Conversion Focused", "Built to Scale"].map((item) => (
              <li key={item} className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-border/70 bg-card/60 text-muted-foreground">
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact"><Button variant="hero" size="xl" className="group">Get a Free Consultation<ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></Button></Link>
            <Link to="/services"><Button variant="hero-outline" size="xl">Explore Our Services</Button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
