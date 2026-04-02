"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  FileText,
  Globe,
  PlaneTakeoff,
  ShieldCheck,
  Home,
} from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Free Counseling",
    desc: "Evaluate your profile and choose the best university & country.",
  },
  {
    icon: FileText,
    title: "Document Submission",
    desc: "Submit marksheets, passport, and NEET scorecard securely.",
  },
  {
    icon: Globe,
    title: "Admission Letter",
    desc: "Receive your university admission letter quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Visa Processing",
    desc: "Complete visa assistance with documentation & approvals.",
  },
  {
    icon: PlaneTakeoff,
    title: "Departure & Forex",
    desc: "Flights, forex setup, and pre-departure briefing.",
  },
  {
    icon: Home,
    title: "Post-Arrival Support",
    desc: "Accommodation, pickup, and onboarding support.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-4">Simple Admission Process</h2>
          <p className="text-muted-foreground text-lg">
            A smooth, step-by-step journey from counseling to settling abroad.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* 🔗 SVG GRID CONNECTIONS */}
          <svg className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Horizontal Lines */}
            <motion.path
              d="M 200 120 H 800"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <motion.path
              d="M 200 360 H 800"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Vertical Connectors */}
            <motion.path
              d="M 200 120 V 360"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <motion.path
              d="M 800 120 V 360"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              const words = step.desc.split(" ");
              const firstLine = words.slice(0, 5).join(" ");
              const secondLine = words.slice(5).join(" ");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl border border-border/60 bg-background/60 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {index + 1}
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-semibold text-foreground mb-3 leading-tight tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <div className="space-y-1 text-[14px] leading-relaxed">
                    <p className="text-muted-foreground">{firstLine}</p>
                    <p className="text-foreground/80 font-medium">
                      {secondLine}
                    </p>
                  </div>

                  {/* 🔥 Smart micro info (NOT repetitive) */}
                  <div className="mt-4 text-xs text-muted-foreground/80">
                    {index === 0 && "Personalized guidance"}
                    {index === 1 && "Secure document handling"}
                    {index === 2 && "Fast processing"}
                    {index === 3 && "Expert assistance"}
                    {index === 4 && "End-to-end support"}
                    {index === 5 && "On-ground help"}
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
