"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Globe2,
  Building2,
  Stethoscope,
  Wallet,
} from "lucide-react";
import { STANDARD_TRANSITION, VIEWPORT_CONFIG } from "@/lib/animations";

const benefits = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Global Recognition",
    desc: "Degrees globally valid (WHO, NMC, ECFMG).",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Affordable Fees",
    desc: "Tuition starting from just ₹3 Lakhs/year.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "World-Class Infrastructure",
    desc: "Premium hospitals and excellent tech labs.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "High Clinical Exposure",
    desc: "Hands-on experience from early years.",
  },
];

export function WhyEurope() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={STANDARD_TRANSITION}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Why Study MBBS in{" "}
              <span className="text-primary tracking-tight">Europe?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              European medical universities are renowned globally for their
              advanced infrastructure, practical approach to medicine, and high
              standards of education without the massive financial burden.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ ...STANDARD_TRANSITION, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-accent text-primary w-12 h-12 flex items-center justify-center rounded-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ ...STANDARD_TRANSITION, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />

            <div className="bg-white border text-foreground border-border rounded-3xl p-1 shadow-soft relative z-10 glass overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/college_02.jpg"
                  alt="European Medical University Campus"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-6 md:top-10 left-2 md:left-4
             px-4 py-3 rounded-2xl 
             bg-white/90 backdrop-blur-md
             border border-gray-200
             shadow-xl
             flex items-center gap-3 z-20 
             transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full 
               bg-gradient-to-br from-green-500 to-emerald-600 
               shadow-md"
                >
                  <CheckCircle2 className="text-white w-5 h-5" />
                </div>

                {/* Text */}
                <div className="leading-tight">
                  <p className="font-semibold text-sm text-gray-900">
                    NMC Approved
                  </p>
                  <p className="text-xs text-gray-600">Valid in India</p>
                </div>

                {/* subtle border glow */}
                <div
                  className="absolute inset-0 rounded-2xl 
                  ring-1 ring-black/5 pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
