"use client";

import Image from "next/image";
import { University } from "@/lib/countries-data";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG, STAGGER_CHILD_VARIANTS } from "@/lib/animations";

export function UniversityCards({ universities }: { universities: University[] }) {
  return (
    <div className="mt-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-foreground mb-4 flex items-center gap-4">
            <span className="w-8 h-1.5 bg-primary rounded-full" />
            Top Medical Universities
          </h2>
          <p className="text-muted-foreground text-lg font-medium max-w-xl">
            Choose from the most prestigious medical institutions recognized by WHO and NMC.
          </p>
        </div>
      </div>
      
      <motion.div 
        variants={STAGGER_CONTAINER_VARIANTS(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_CONFIG}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {universities.map((uni, idx) => (
          <motion.div 
            key={idx} 
            variants={STAGGER_CHILD_VARIANTS}
            className="group relative flex flex-col h-full rounded-[3rem] bg-white dark:bg-gray-900/60 border border-border/50 overflow-hidden shadow-2xl shadow-black/5 hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative h-72 w-full overflow-hidden">
              <img 
                src={uni.image} 
                alt={uni.name}
                className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />
              
              {/* Premium Rankings Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-black tracking-widest text-white uppercase">World Ranked</span>
                </div>
              </div>

              {/* Icon Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-black text-white leading-[1.2] drop-shadow-xl group-hover:text-emerald-300 transition-colors duration-300">
                  {uni.name}
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 flex flex-col grow relative">
              <p className="text-muted-foreground font-medium text-lg leading-relaxed line-clamp-3 mb-8 grow">
                {uni.description}
              </p>
              
              <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-tight group-hover:gap-3 transition-all duration-300">
                  University Details
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                
                {/* Subtle Interactive Element */}
                <div className="w-8 h-8 rounded-full bg-accent/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
              </div>
            </div>

            {/* Subtle card glow on hover */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 rounded-[3rem] transition-colors duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
