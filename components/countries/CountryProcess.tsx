"use client";

import { ProcessStep } from "@/lib/countries-data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function CountryProcess({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Progress line animation tied to viewport scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="mt-24" ref={containerRef}>
      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-16">Step-by-Step Admission Process</h2>
      
      <div className="relative ml-4 md:ml-8">
        {/* Background inactive line */}
        <div className="absolute left-[3px] top-4 bottom-4 w-0.5 bg-border/60" />
        
        {/* Animated active line */}
        <motion.div 
          className="absolute left-[3px] top-4 w-0.5 bg-primary origin-top"
          style={{ height }}
        />

        <motion.div 
          variants={STAGGER_CONTAINER_VARIANTS(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CONFIG}
          className="space-y-12"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={STAGGER_CHILD_VARIANTS} className="relative pl-10 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 h-7 w-7 rounded-full bg-background border-[3px] border-primary flex items-center justify-center shadow-md">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="group bg-accent/30 rounded-3xl p-8 border border-border/50 shadow-xs hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-primary tracking-widest text-sm font-mono bg-primary/10 px-3 py-1 rounded-full w-fit">STEP {idx + 1}</span>
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
