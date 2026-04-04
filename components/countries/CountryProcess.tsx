"use client";

import { ProcessStep } from "@/lib/countries-data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";
import { CheckCircle2, ChevronRight } from "lucide-react";

export function CountryProcess({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Progress line animation tied to viewport scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="mt-32" ref={containerRef}>
      <div className="mb-20">
        <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground mb-6 flex items-center gap-4">
          <span className="w-10 h-2 bg-primary rounded-full transition-all duration-500" />
          The Admission Journey
        </h2>
        <p className="text-muted-foreground text-lg lg:text-xl font-medium max-w-2xl">
          A seamless, transparent 5-step process designed to get you from application to your dream medical university.
        </p>
      </div>
      
      <div className="relative ml-6 md:ml-12">
        {/* Background inactive line */}
        <div className="absolute left-0 top-8 bottom-8 w-1 bg-border/40 rounded-full" />
        
        {/* Animated active line with glow */}
        <motion.div 
          className="absolute left-0 top-8 w-1 bg-primary origin-top rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
          style={{ height }}
        />

        <motion.div 
          variants={STAGGER_CONTAINER_VARIANTS(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CONFIG}
          className="space-y-16"
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={STAGGER_CHILD_VARIANTS} className="relative pl-12 md:pl-20">
              {/* Timeline Indicator */}
              <div className="absolute -left-4 top-4 h-9 w-9 rounded-2xl bg-white dark:bg-gray-950 border-4 border-primary flex items-center justify-center shadow-xl z-20 group transition-transform duration-500 hover:scale-110">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </div>

              <div className="group bg-white dark:bg-gray-900/40 rounded-[3rem] p-10 border border-border/50 shadow-2xl shadow-black/5 hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-4">
                   <div className="flex items-center gap-4">
                      <span className="text-primary tracking-widest text-xs font-black bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-inner">
                        STEP 0{idx + 1}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-black text-foreground tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {step.title}
                      </h3>
                   </div>
                   <div className="hidden sm:flex w-12 h-12 rounded-full bg-accent/50 items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <ChevronRight className="w-6 h-6" />
                   </div>
                </div>
                
                <p className="text-muted-foreground font-medium text-lg lg:text-xl leading-relaxed max-w-3xl">
                  {step.description}
                </p>

                {/* Subtle side glow */}
                <div className="absolute top-0 right-0 h-full w-1.5 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
