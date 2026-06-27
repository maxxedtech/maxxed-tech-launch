import { motion } from "framer-motion";
import { Clock, Gauge, Globe2, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "2-4 wks",
    label: "Typical launch window",
    detail: "Lean delivery plans for websites, funnels, and MVP builds.",
  },
  {
    icon: Gauge,
    value: "90+",
    label: "Performance target",
    detail: "Speed, accessibility, and SEO are considered from day one.",
  },
  {
    icon: Globe2,
    value: "24/7",
    label: "Digital presence",
    detail: "Websites and automations that keep working after office hours.",
  },
  {
    icon: ShieldCheck,
    value: "30 days",
    label: "Launch support",
    detail: "Post-launch fixes and guidance while your site settles in.",
  },
];

export function ImpactStatsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border/50 bg-gradient-card p-6 shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {stat.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
