"use client";

import { motion } from "framer-motion";
import { UserCheck, FileText, Globe, PlaneTakeoff, ShieldCheck } from "lucide-react";
import { 
  STAGGER_CHILD_VARIANTS, 
  STAGGER_CONTAINER_VARIANTS, 
  VIEWPORT_CONFIG 
} from "@/lib/animations";

const steps = [
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "1. Free Counseling",
    desc: "Evaluate your profile and help you select the best university and country.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "2. Document Submission",
    desc: "Send us 10th, 12th marksheet, passport, and NEET scorecard.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "3. Admission Letter",
    desc: "Get university admission or invitation letter in a few working days.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "4. Visa Processing",
    desc: "100% assistance in documentation and embassy appointments.",
  },
  {
    icon: <PlaneTakeoff className="w-5 h-5" />,
    title: "5. Pre-Departure & Forex",
    desc: "Seamless flight booking, forex setup, and on-ground arrival support.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">Simple Admission Process</h2>
          <p className="text-muted-foreground text-lg">
            A hassle-free, transparent procedure designed exclusively to handle the complexity of international admissions.
          </p>
        </div>

        <motion.div 
          variants={STAGGER_CONTAINER_VARIANTS(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CONFIG}
          className="max-w-4xl mx-auto relative border-l border-primary/20 md:border-transparent"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={STAGGER_CHILD_VARIANTS}
              className="mb-8 ml-6 md:ml-0 md:flex md:items-center md:justify-between group"
            >
              {/* Desktop alternating layout logic */}
              <div className={`hidden md:block w-5/12 ${index % 2 !== 0 ? 'order-1 text-right' : 'order-3'}`}>
                {index % 2 !== 0 && (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </>
                )}
              </div>
              
              <div className="absolute -left-3 md:relative md:left-0 order-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-accent/50 z-10 group-hover:scale-125 transition-transform duration-300">
                {step.icon}
              </div>

              <div className={`md:w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1 text-right hidden'}`}>
                {index % 2 === 0 && (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </>
                )}
              </div>

              {/* Mobile Content */}
              <div className="md:hidden mt-2 pb-4">
                 <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-primary/20 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
