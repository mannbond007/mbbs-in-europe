"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, Globe2 } from "lucide-react";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, STANDARD_TRANSITION } from "@/lib/animations";

interface CountryHeroProps {
  name: string;
  title: string;
  description: string;
  imagePath: string;
}

export function CountryHero({ name, title, description, imagePath }: CountryHeroProps) {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-[700px] flex items-center justify-center">
      {/* Background Image Setup */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={imagePath}
          alt={`Study MBBS in ${name}`}
          className="object-cover w-full h-full absolute inset-0"
        />
        {/* Modern dark gradient overlay with deep radial fade */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-950/90 via-gray-950/60 to-background/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-950/40 to-gray-950/90 z-10" />
      </motion.div>

      {/* Floating Trust Badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-4 md:left-12 lg:left-24 z-30 hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2.5 shadow-2xl"
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="leading-tight text-left">
          <p className="text-sm font-semibold text-white tracking-tight">NMC Approved</p>
          <p className="text-xs text-gray-400">Recognized Globally</p>
        </div>
      </motion.div>

      {/* Floating Trust Badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-4 md:right-12 lg:right-24 z-30 hidden lg:flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2.5 shadow-2xl"
      >
         <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 text-blue-400">
          <Globe2 className="w-5 h-5" />
        </div>
        <div className="leading-tight text-left">
          <p className="text-sm font-semibold text-white tracking-tight">English Medium</p>
          <p className="text-xs text-gray-400">Top Universities</p>
        </div>
      </motion.div>

      <motion.div 
        className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white"
        variants={STAGGER_CONTAINER_VARIANTS(0.1)}
        initial="hidden"
        animate="show"
      >
        
        {/* Animated Badge */}
        <motion.div variants={STAGGER_CHILD_VARIANTS} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white mb-8 shadow-lg">
          <span className="relative flex size-2.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
          </span>
          Admissions Open for 2026
        </motion.div>

        {/* Hero Typography */}
        <motion.h1 variants={STAGGER_CHILD_VARIANTS} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl leading-[1.1]">
          {title.split(name)[0]}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-emerald-400 to-primary drop-shadow-sm">
            {name}
          </span>
          {title.split(name)[1]}
        </motion.h1>
        
        <motion.p variants={STAGGER_CHILD_VARIANTS} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {description}
        </motion.p>

        {/* Dual Actions */}
        <motion.div variants={STAGGER_CHILD_VARIANTS} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Link href="/#apply" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_-15px_rgba(34,197,94,0.6)] hover:scale-[1.02] transition-all duration-300">
              Apply Now 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-white/5 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md">
              <Download className="mr-2 w-5 h-5" />
              Download Brochure
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Decorative Bottom Blurs */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-96 bg-primary/20 rounded-full blur-[140px] mix-blend-screen opacity-50 z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-80 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-30 z-10 pointer-events-none" />
    </section>
  );
}
