"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, CheckCircle2, Globe2, Sparkles } from "lucide-react";
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/lib/animations";
import { useRef } from "react";

interface CountryHeroProps {
  name: string;
  title: string;
  description: string;
  imagePath: string;
}

export function CountryHero({ name, title, description, imagePath }: CountryHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section 
      ref={containerRef}
      className="relative pt-44 pb-36 overflow-hidden min-h-[750px] flex items-center justify-center bg-gray-950"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src={imagePath}
          alt={`Study MBBS in ${name}`}
          className="object-cover w-full h-full absolute inset-0 scale-105"
        />
        {/* Advanced Multi-layered Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-gray-950/95 via-gray-950/50 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-gray-950)_100%)] z-10 opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/40 via-transparent to-gray-950/40 z-10" />
      </motion.div>

      {/* Floating Premium Trust Badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 left-4 md:left-12 lg:left-24 z-30 hidden md:flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-5 py-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="leading-tight text-left">
          <p className="text-sm font-bold text-white tracking-tight">NMC Approved</p>
          <p className="text-xs text-emerald-400/80 font-medium tracking-wide uppercase">Recognized Globally</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-48 right-4 md:right-12 lg:right-24 z-30 hidden lg:flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-5 py-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
      >
         <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/20">
          <Globe2 className="w-6 h-6" />
        </div>
        <div className="leading-tight text-left">
          <p className="text-sm font-bold text-white tracking-tight">English Medium</p>
          <p className="text-xs text-blue-400/80 font-medium tracking-wide uppercase">Top Universities</p>
        </div>
      </motion.div>

      <motion.div 
        className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white"
        variants={STAGGER_CONTAINER_VARIANTS(0.12)}
        initial="hidden"
        animate="show"
      >
        
        {/* Animated Badge */}
        <motion.div variants={STAGGER_CHILD_VARIANTS} className="group cursor-default inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2 text-[13px] font-semibold text-white/90 mb-10 shadow-2xl hover:border-emerald-500/30 transition-colors duration-300">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          Admissions Open for Academic Year 2026
          <span className="ml-1 inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
        </motion.div>

        {/* Hero Typography */}
        <motion.h1 variants={STAGGER_CHILD_VARIANTS} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 max-w-5xl leading-[1.05] drop-shadow-2xl">
          {title.split(name)[0]}
          <span className="relative inline-block">
            <span className="absolute -inset-1 blur-2xl bg-emerald-500 opacity-20" />
            <span className="relative bg-clip-text text-transparent bg-linear-to-r from-emerald-300 via-primary to-emerald-400">
              {name}
            </span>
          </span>
          {title.split(name)[1]}
        </motion.h1>
        
        <motion.p variants={STAGGER_CHILD_VARIANTS} className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium tracking-normal">
          {description}
        </motion.p>

        {/* Dual Actions with Premium Styling */}
        <motion.div variants={STAGGER_CHILD_VARIANTS} className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
          <Link href="/#apply" className="w-full sm:w-auto">
            <Button size="lg" className="group w-full sm:w-auto h-16 px-10 text-lg font-bold rounded-2xl bg-primary hover:bg-primary-hover shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.7)] hover:scale-[1.03] transition-all duration-300">
              Apply Now 
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg font-bold rounded-2xl bg-white/10 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-xl">
              <Download className="mr-2 w-5 h-5 opacity-80" />
              Download Brochure
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Decorative Bottom Blurs and Textures */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-10" />
      <div className="absolute -bottom-24 left-1/4 w-[800px] h-96 bg-emerald-500/10 rounded-full blur-[160px] mix-blend-screen opacity-40 z-10 pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[600px] h-80 bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen opacity-30 z-10 pointer-events-none" />
      
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />
    </section>
  );
}
