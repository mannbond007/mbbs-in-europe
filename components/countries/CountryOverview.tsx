"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function CountryOverview({ overview, whyChoose }: { overview: string[], whyChoose: string }) {
  return (
    <motion.div 
      variants={STAGGER_CONTAINER_VARIANTS(0.15)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      className="space-y-12"
    >
      <motion.div variants={STAGGER_CHILD_VARIANTS} className="relative">
        <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-8 flex items-center gap-4">
          <span className="w-8 h-1.5 bg-primary rounded-full" />
          Course Overview
        </h2>
        <div className="space-y-6 text-muted-foreground/90 leading-relaxed font-medium">
          {overview.map((paragraph, idx) => (
            <p key={idx} className="text-lg lg:text-xl selection:bg-primary/20">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={STAGGER_CHILD_VARIANTS} 
        className="relative bg-linear-to-br from-emerald-500/10 via-primary/5 to-transparent rounded-[2.5rem] p-10 md:p-14 border border-primary/20 overflow-hidden group shadow-2xl shadow-primary/5"
      >
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-12">
          <Quote className="w-48 h-48 text-primary" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Expert Recommendation
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-black mb-6 text-foreground leading-tight">
            Why Choose This Country?
          </h3>
          
          <p className="text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed font-medium italic relative pl-8 border-l-4 border-primary/30">
            "{whyChoose}"
          </p>
        </div>

        {/* Decorative inner glow */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </motion.div>
    </motion.div>
  );
}
