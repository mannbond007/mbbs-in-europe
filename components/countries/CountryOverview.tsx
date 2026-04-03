"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function CountryOverview({ overview, whyChoose }: { overview: string[], whyChoose: string }) {
  return (
    <motion.div 
      variants={STAGGER_CONTAINER_VARIANTS()}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      className="space-y-10"
    >
      <motion.div variants={STAGGER_CHILD_VARIANTS} className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-6">Course Overview</h2>
        <div className="space-y-6 text-muted-foreground/90 leading-relaxed font-medium">
          {overview.map((paragraph, idx) => (
            <p key={idx} className="text-lg">{paragraph}</p>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={STAGGER_CHILD_VARIANTS} 
        className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-10 border border-primary/20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <CheckCircle2 className="w-48 h-48 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-foreground">
          <CheckCircle2 className="text-primary w-8 h-8" />
          Why Choose This Country?
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed italic relative z-10 font-medium">
          "{whyChoose}"
        </p>
      </motion.div>
    </motion.div>
  );
}
