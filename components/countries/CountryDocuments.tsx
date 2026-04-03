"use client";

import { FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function CountryDocuments({ documents, eligibility }: { documents: string[], eligibility: string[] }) {
  return (
    <motion.div 
      variants={STAGGER_CONTAINER_VARIANTS()}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      className="mt-24 grid md:grid-cols-2 gap-8"
    >
      {/* Eligibility Card */}
      <motion.div 
        variants={STAGGER_CHILD_VARIANTS}
        className="bg-primary/5 rounded-[2rem] p-8 md:p-10 border border-primary/10 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110">
          <FileCheck2 className="w-64 h-64 text-primary" />
        </div>
        <h3 className="text-3xl font-extrabold text-foreground mb-8">Eligibility Criteria</h3>
        <ul className="space-y-5 relative z-10">
          {eligibility.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="shrink-0 mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <span className="text-muted-foreground font-medium text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Documents Card */}
      <motion.div 
        variants={STAGGER_CHILD_VARIANTS}
        className="bg-background rounded-[2rem] p-8 md:p-10 border border-border/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
      >
        <h3 className="text-3xl font-extrabold text-foreground mb-8 flex items-center gap-4">
          <FileCheck2 className="text-secondary w-8 h-8" />
          Documents Required
        </h3>
        <ul className="space-y-4">
          {documents.map((doc, idx) => (
            <li key={idx} className="flex items-center gap-4 text-muted-foreground border-b border-border/40 pb-4 last:border-0 last:pb-0">
              <span className="text-secondary font-bold text-2xl leading-none">&middot;</span>
              <span className="font-medium">{doc}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
