"use client";

import Image from "next/image";
import { University } from "@/lib/countries-data";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS, VIEWPORT_CONFIG } from "@/lib/animations";

export function UniversityCards({ universities }: { universities: University[] }) {
  return (
    <div className="mt-24">
      <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground mb-12">Top Medical Universities</h2>
      
      <motion.div 
        variants={STAGGER_CONTAINER_VARIANTS()}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_CONFIG}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {universities.map((uni, idx) => (
          <motion.div 
            key={idx} 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
            }}
            whileHover={{ y: -8 }}
            className="group rounded-[2rem] border border-border/50 bg-background overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] transition-shadow duration-500 flex flex-col relative"
          >
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <img 
                src={uni.image} 
                alt={uni.name}
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
              
              {/* Glass Tag over image */}
              <div className="absolute top-4 right-4 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-tight text-white uppercase">Top Ranked</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md">{uni.name}</h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col grow">
              <p className="text-muted-foreground font-medium text-[15px] leading-relaxed line-clamp-3 mb-8 grow">
                {uni.description}
              </p>
              
              <div className="mt-auto pt-5 border-t border-border/60 flex items-center justify-between text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                View University Details
                <MoveRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
