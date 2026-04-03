"use client";

import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

interface CountryStatsProps {
  stats: {
    fees: string;
    livingCost: string;
    duration: string;
    recognition: string;
  };
}

export function CountryStats({ stats }: CountryStatsProps) {
  return (
    <motion.div 
      variants={STAGGER_CONTAINER_VARIANTS()}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative z-30 transform -translate-y-6"
    >
      <StatCard title="Tuition Fees" value={stats.fees} sub="per year" delay={0.1} />
      <StatCard title="Living Cost" value={stats.livingCost} sub="approx / month" delay={0.2} />
      <StatCard title="Duration" value={stats.duration} sub="Total course time" delay={0.3} />
      <StatCard title="Recognition" value={stats.recognition} sub="Global validity" delay={0.4} />
    </motion.div>
  );
}

function StatCard({ title, value, sub, delay }: { title: string, value: string, sub: string, delay: number }) {
  return (
    <motion.div 
      variants={STAGGER_CHILD_VARIANTS}
      className="relative bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex flex-col justify-center overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    >
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{title}</h3>
      <p className="text-foreground font-extrabold text-2xl lg:text-3xl mb-1 tracking-tight">{value}</p>
      <p className="text-sm font-medium text-muted-foreground/80">{sub}</p>
    </motion.div>
  );
}
