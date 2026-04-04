"use client";

import { FileCheck2, UserCheck, ClipboardList, Info } from "lucide-react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function CountryDocuments({ documents, eligibility }: { documents: string[], eligibility: string[] }) {
  return (
    <motion.div 
      variants={STAGGER_CONTAINER_VARIANTS(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      className="mt-32 grid md:grid-cols-2 gap-10"
    >
      {/* Eligibility Card */}
      <motion.div 
        variants={STAGGER_CHILD_VARIANTS}
        className="group bg-linear-to-br from-emerald-500/10 via-primary/5 to-transparent rounded-[3rem] p-10 lg:p-14 border border-primary/20 relative overflow-hidden shadow-2xl shadow-primary/5"
      >
        <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6">
          <UserCheck className="w-64 h-64 text-primary" />
        </div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/20">
             <UserCheck className="w-7 h-7 text-primary" />
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-10 tracking-tight">
            Eligibility Criteria
          </h3>
          
          <ul className="space-y-6">
            {eligibility.map((item, idx) => (
              <li key={idx} className="flex items-start gap-5 group/item">
                <div className="shrink-0 mt-1.5 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-muted-foreground font-semibold text-lg lg:text-xl leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Documents Card */}
      <motion.div 
        variants={STAGGER_CHILD_VARIANTS}
        className="group bg-white dark:bg-gray-900/40 rounded-[3rem] p-10 lg:p-14 border border-border/50 shadow-2xl shadow-black/5 hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-6">
           <ClipboardList className="w-64 h-64 text-foreground" />
        </div>

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-8 border border-border/50">
             <FileCheck2 className="w-7 h-7 text-secondary" />
          </div>

          <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-10 tracking-tight flex items-center gap-4">
            Documents Required
          </h3>
          
          <ul className="space-y-5">
            {documents.map((doc, idx) => (
              <li key={idx} className="flex items-center gap-5 text-muted-foreground/90 border-b border-border/40 pb-5 last:border-0 last:pb-0 group/doc">
                <div className="w-2 h-2 rounded-full bg-secondary opacity-40 group-hover/doc:opacity-100 group-hover/doc:scale-150 transition-all duration-300" />
                <span className="font-bold text-lg lg:text-xl tracking-tight">{doc}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 rounded-[2rem] bg-accent/50 border border-border/50 flex items-start gap-4">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
              Our team provides complete assistance in document translation, apostille, and verification services.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
