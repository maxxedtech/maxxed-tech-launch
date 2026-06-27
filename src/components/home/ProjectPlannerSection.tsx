import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Palette, Rocket, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const options = [
  {
    id: "website",
    label: "Website",
    icon: Code2,
    timeline: 2,
    summary: "A responsive business website with conversion-focused pages.",
  },
  {
    id: "brand",
    label: "Brand Identity",
    icon: Palette,
    timeline: 1,
    summary: "Logo direction, color system, and launch-ready visual assets.",
  },
  {
    id: "ai",
    label: "AI Automation",
    icon: Bot,
    timeline: 2,
    summary: "A workflow assistant, chatbot, or internal automation layer.",
  },
  {
    id: "support",
    label: "Support",
    icon: Wrench,
    timeline: 1,
    summary: "Maintenance, updates, fixes, and performance improvements.",
  },
];

const selectedClass = "border-primary bg-primary/10 text-foreground shadow-glow";
const idleClass = "border-border/50 bg-card/70 text-muted-foreground hover:border-primary/50 hover:text-foreground";

export function ProjectPlannerSection() {
  const [selected, setSelected] = useState(["website", "brand"]);

  const selectedOptions = useMemo(
    () => options.filter((option) => selected.includes(option.id)),
    [selected],
  );

  const timeline = selectedOptions.reduce((total, option) => total + option.timeline, 1);
  const projectType = selectedOptions.length > 2 ? "full digital launch" : selectedOptions.map((option) => option.label).join(" + ");

  const toggleOption = (id: string) => {
    setSelected((current) => {
      if (current.includes(id)) {
        return current.length === 1 ? current : current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[128px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-primary">
              Project Planner
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Shape Your Next <span className="text-gradient">Digital Move</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Select what you need and get a quick project direction before starting a conversation.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {options.map((option) => {
                const isSelected = selected.includes(option.id);

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleOption(option.id)}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${isSelected ? selectedClass : idleClass}`}
                    aria-pressed={isSelected}
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <option.icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-sm font-semibold">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/50 bg-gradient-card p-6 shadow-card lg:p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary shadow-button">
              <Rocket className="h-7 w-7 text-primary-foreground" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Recommended Direction
            </p>
            <h3 className="mb-4 text-2xl font-bold capitalize text-foreground md:text-3xl">
              {projectType}
            </h3>
            <p className="mb-6 text-muted-foreground">
              Estimated timeline: <span className="font-semibold text-foreground">{timeline}-{timeline + 2} weeks</span>, depending on content readiness and feature depth.
            </p>

            <div className="mb-8 space-y-3">
              {selectedOptions.map((option) => (
                <div key={option.id} className="rounded-xl border border-border/50 bg-card/60 p-4">
                  <h4 className="mb-1 font-semibold text-foreground">{option.label}</h4>
                  <p className="text-sm text-muted-foreground">{option.summary}</p>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button variant="hero" size="lg" className="w-full group">
                Start This Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
