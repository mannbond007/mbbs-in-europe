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
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ ...STANDARD_TRANSITION, duration: 0.7 }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 blur-3xl rounded-[2rem]" />

            {/* Grid Layout */}
            <div className="relative z-10 grid grid-cols-6 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
              {/* 🔹 Main Image */}
              <div className="col-span-6 md:col-span-4 row-span-2 relative rounded-3xl overflow-hidden group">
                <Image
                  src="/college_02.jpg"
                  alt="European Medical University"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 z-20">
                  <div
                    className="
      relative flex items-center gap-2 px-3.5 py-1.5 rounded-full
      bg-black/40 backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_25px_rgba(0,0,0,0.25)]
      text-white
      overflow-hidden
    "
                  >
                    {/* Subtle glass shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Status dot */}
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>

                    {/* Text */}
                    <span className="relative text-xs font-semibold tracking-tight">
                      Top Ranked University
                    </span>
                  </div>
                </div>
              </div>

              {/* 🔹 Image 2 */}
              <div className="col-span-3 md:col-span-2 relative rounded-2xl overflow-hidden group">
                <Image
                  src="/college_01.jpg"
                  alt="Advanced Library"
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 z-20">
                  <div
                    className="
      relative flex items-center gap-2 px-3 py-1.5 rounded-full
      bg-black/40 backdrop-blur-xl
      border border-white/20
      shadow-[0_6px_20px_rgba(0,0,0,0.25)]
      text-white
      overflow-hidden
    "
                  >
                    {/* Glass shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Small indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />

                    {/* Text */}
                    <span className="relative text-[11px] font-medium tracking-tight">
                      Advanced Library
                    </span>
                  </div>
                </div>
              </div>

              {/* 🔹 Image 3 */}
              <div className="col-span-3 md:col-span-2 relative rounded-2xl overflow-hidden group">
                <Image
                  src="/01.jpg"
                  alt="Clinical Training"
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 z-20">
                  <div
                    className="
      relative flex items-center gap-2 px-3 py-1.5 rounded-full
      bg-black/40 backdrop-blur-xl
      border border-white/20
      shadow-[0_6px_20px_rgba(0,0,0,0.25)]
      text-white
      overflow-hidden
    "
                  >
                    {/* Glass shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />

                    {/* Text */}
                    <span className="relative text-[11px] font-medium tracking-tight">
                      Clinical Training
                    </span>
                  </div>
                </div>
              </div>

              {/* 🔹 Image 4 */}
              <div className="col-span-3 relative rounded-2xl overflow-hidden group">
                <Image
                  src="/02.jpg"
                  alt="Modern Hostel"
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 z-20">
                  <div
                    className="
      relative flex items-center gap-2 px-3 py-1.5 rounded-full
      bg-black/40 backdrop-blur-xl
      border border-white/20
      shadow-[0_6px_20px_rgba(0,0,0,0.25)]
      text-white
      overflow-hidden
    "
                  >
                    {/* Glass shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Small indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />

                    {/* Text */}
                    <span className="relative text-[11px] font-medium tracking-tight">
                      Modern Hostel
                    </span>
                  </div>
                </div>
              </div>

              {/* 🔹 Image 5 */}
              <div className="col-span-3 relative rounded-2xl overflow-hidden group">
                <Image
                  src="/03.jpg"
                  alt="Student Life"
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-3 left-3 z-20">
                  <div
                    className="
      relative flex items-center gap-2 px-3 py-1.5 rounded-full
      bg-black/40 backdrop-blur-xl
      border border-white/20
      shadow-[0_6px_20px_rgba(0,0,0,0.25)]
      text-white
      overflow-hidden
    "
                  >
                    {/* Glass shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />

                    {/* Text */}
                    <span className="relative text-[11px] font-medium tracking-tight">
                      Student Life
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 left-2 z-30 flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-xl px-4 py-2.5 shadow-xl"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  NMC Approved
                </p>
                <p className="text-xs text-muted-foreground">
                  Recognized Globally
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
