"use client";

import { Benefit } from "@/lib/countries-data";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function CountryBenefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-10">Key Benefits</h2>
      <motion.div 
        variants={STAGGER_CONTAINER_VARIANTS()}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_CONFIG}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map((benefit, idx) => {
          const IconComponent = (LucideIcons as any)[benefit.iconName] || LucideIcons.Check;

          return (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
              }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-3xl p-8 border border-border/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 group relative overflow-hidden"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <IconComponent className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
