"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { STANDARD_TRANSITION, PRECISE_TRANSITION } from "@/lib/animations";
import { CheckCircle, TrendingUp, University, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32">
      {/* Background gradients for Stripe-like SaaS look */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 blur-[120px] opacity-40 z-0 pointer-events-none"
      >
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 blur-[120px] opacity-40 z-0 pointer-events-none"
      >
        <div className="w-[500px] h-[500px] bg-secondary/20 rounded-full" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={PRECISE_TRANSITION}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-8 border border-primary/20"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          Admissions Open for 2026 Batch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...STANDARD_TRANSITION, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          Study MBBS in Europe <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            At Affordable Cost
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...STANDARD_TRANSITION, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          Your trusted guidance for Indian students. Get NMC approved
          universities, low tuition fees, and complete admission support from
          day one to graduation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...STANDARD_TRANSITION, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto text-lg group">
            Apply Now
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-lg"
          >
            Book Free Counseling
          </Button>
        </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 pt-10 border-t border-border/60"
>
  {[
    { label: "NMC Approved", value: "100%", icon: CheckCircle },
    { label: "Success Rate", value: "98%", icon: TrendingUp },
    { label: "Partner Universities", value: "25+", icon: University },
    { label: "Students Placed", value: "1000+", icon: Users },
  ].map((stat, i) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08, duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 backdrop-blur-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Subtle Glow Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Icon */}
      <div className="mb-3 flex justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
          <stat.icon className="h-5 w-5" />
        </div>
      </div>

      {/* Value */}
      <div className="text-3xl font-bold tracking-tight text-foreground mb-1 transition-all duration-300 group-hover:scale-[1.03]">
        {stat.value}
      </div>

      {/* Label */}
      <div className="text-xs font-medium text-muted-foreground/80 tracking-wide">
        {stat.label}
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}
