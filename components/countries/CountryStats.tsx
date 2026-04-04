"use client";

import { motion } from "framer-motion";
import { Banknote, Wallet, Clock, Award } from "lucide-react";
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
      variants={STAGGER_CONTAINER_VARIANTS(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative z-30 -mt-16"
    >
      <StatCard 
        title="Tuition Fees" 
        value={stats.fees} 
        sub="avg. per academic year" 
        icon={Banknote}
        color="emerald"
      />
      <StatCard 
        title="Living Cost" 
        value={stats.livingCost} 
        sub="approximate / month" 
        icon={Wallet}
        color="blue"
      />
      <StatCard 
        title="Duration" 
        value={stats.duration} 
        sub="total course length" 
        icon={Clock}
        color="amber"
      />
      <StatCard 
        title="Recognition" 
        value={stats.recognition} 
        sub="global degree validity" 
        icon={Award}
        color="purple"
      />
    </motion.div>
  );
}

function StatCard({ 
  title, 
  value, 
  sub, 
  icon: Icon,
  color
}: { 
  title: string, 
  value: string, 
  sub: string, 
  icon: any,
  color: "emerald" | "blue" | "amber" | "purple"
}) {
  const colorMap = {
    emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    blue: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  };

  return (
    <motion.div 
      variants={STAGGER_CHILD_VARIANTS}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group overflow-hidden"
    >
      <div className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-3xl border border-white/50 dark:border-white/10 p-7 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.12)]">
        
        {/* Animated Background Gradient on Hover */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-start">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${colorMap[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
          
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.15em] mb-2">{title}</h3>
          
          <div className="flex flex-col gap-1">
            <p className="text-foreground font-black text-2xl lg:text-3xl tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
              {value}
            </p>
            <p className="text-xs font-semibold text-muted-foreground/60 tracking-normal">
              {sub}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
