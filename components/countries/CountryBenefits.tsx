"use client";

import { Benefit } from "@/lib/countries-data";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG, STAGGER_CHILD_VARIANTS } from "@/lib/animations";

export function CountryBenefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="mt-24">
      <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-12 flex items-center gap-4">
        <span className="w-8 h-1.5 bg-primary rounded-full" />
        Exclusive Benefits
      </h2>
      
      <motion.div 
        variants={STAGGER_CONTAINER_VARIANTS(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_CONFIG}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {benefits.map((benefit, idx) => {
          const IconComponent = (LucideIcons as any)[benefit.iconName] || LucideIcons.Check;

          return (
            <motion.div 
              key={idx}
              variants={STAGGER_CHILD_VARIANTS}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative bg-white dark:bg-gray-900/40 rounded-[2.5rem] p-10 border border-border/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Progress bar indicator on hover */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-primary/40 w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
