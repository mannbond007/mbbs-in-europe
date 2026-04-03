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

type Step = {
  icon: React.ElementType;
  title: string;
  desc: string;
  meta: string;
};

const steps: Step[] = [
  {
    icon: UserCheck,
    title: "Free Counseling",
    desc: "Evaluate your profile and choose the best university and country.",
    meta: "Personalized guidance",
  },
  {
    icon: FileText,
    title: "Document Submission",
    desc: "Submit marksheets, passport, and NEET scorecard securely.",
    meta: "Secure document handling",
  },
  {
    icon: Globe,
    title: "Admission Letter",
    desc: "Receive your university admission letter quickly.",
    meta: "Fast processing",
  },
  {
    icon: ShieldCheck,
    title: "Visa Processing",
    desc: "Complete visa assistance with documentation and approvals.",
    meta: "Expert assistance",
  },
  {
    icon: PlaneTakeoff,
    title: "Departure & Forex",
    desc: "Flights, forex setup, and pre-departure briefing.",
    meta: "End-to-end support",
  },
  {
    icon: Home,
    title: "Post-Arrival Support",
    desc: "Accommodation, pickup, and onboarding support.",
    meta: "On-ground help",
  },
];

// 🔥 Reusable animation configs
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

export function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple Admission Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A smooth, step-by-step journey from counseling to settling abroad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {index + 1}
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>

                {/* Meta Info */}
               <div className="mt-4">
  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur-md px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-background">
    
    {/* Pulse Indicator */}
    <div className="relative flex size-3 items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
      <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
    </div>

    {/* Meta Text */}
    <span className="font-medium tracking-tight">
      {step.meta}
    </span>
  </div>
</div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}