"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  STAGGER_CHILD_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  VIEWPORT_CONFIG,
} from "@/lib/animations";

type Country = {
  name: string;
  desc: string;
  slug: string;
  fees: string;
  duration: string;
};

const countries: Country[] = [
  {
    name: "Serbia",
    desc: "Low living costs, high acceptance rate.",
    slug: "serbia",
    fees: "₹3–5L",
    duration: "6 yrs",
  },
  {
    name: "Romania",
    desc: "Affordable tuition with top clinical exposure.",
    slug: "romania",
    fees: "₹4–6L",
    duration: "6 yrs",
  },
  {
    name: "Poland",
    desc: "Premium infrastructure, world-class teaching.",
    slug: "poland",
    fees: "₹6–8L",
    duration: "6 yrs",
  },
  {
    name: "Bulgaria",
    desc: "Easy admission, low fees, high tech.",
    slug: "bulgaria",
    fees: "₹3–5L",
    duration: "6 yrs",
  },
  {
    name: "Moldova",
    desc: "Very low cost, growing IT capabilities.",
    slug: "moldova",
    fees: "₹2–4L",
    duration: "6 yrs",
  },
  {
    name: "Cyprus",
    desc: "European standard, ideal climate, high safety.",
    slug: "cyprus",
    fees: "₹6–9L",
    duration: "6 yrs",
  },
  {
    name: "Bosnia",
    desc: "Emerging destination, low tuition fees.",
    slug: "bosnia",
    fees: "₹3–5L",
    duration: "6 yrs",
  },
  {
    name: "Hungary",
    desc: "Globally recognized degrees, beautiful life.",
    slug: "hungary",
    fees: "₹7–10L",
    duration: "6 yrs",
  },
  {
    name: "Austria",
    desc: "Top tier education, premium universities.",
    slug: "austria",
    fees: "₹8–12L",
    duration: "6 yrs",
  },
  {
    name: "Germany",
    desc: "Low or no tuition, globally respected education.",
    slug: "germany",
    fees: "Low/Free",
    duration: "6 yrs",
  },
  {
    name: "Italy",
    desc: "IMAT-based admission with top-ranked universities.",
    slug: "italy",
    fees: "₹3–6L",
    duration: "6 yrs",
  },
  {
    name: "Georgia",
    desc: "Most popular for Indian students, affordable & easy.",
    slug: "georgia",
    fees: "₹3–5L",
    duration: "6 yrs",
  },
];

export function Countries() {
  return (
    <section id="countries" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Top Destinations in Europe
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from the finest NMC recognized universities across Europe.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={STAGGER_CONTAINER_VARIANTS(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CONFIG}
        >
          {countries.map((country) => (
            <motion.div key={country.slug} variants={STAGGER_CHILD_VARIANTS}>
              <Link
                href={`/countries/${country.slug}`}
                className="block h-full"
              >
                <div className="group relative h-full overflow-hidden rounded-[28px] border border-border/50 bg-background/60 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                  </div>

                  {/* ✅ FIXED IMAGE (NO BUG) */}
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={`/countries/${country.slug}.jpg`}
                      alt={country.name}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Floating Info */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between rounded-xl bg-black/40 backdrop-blur-md px-3 py-2 border border-white/10">
                        {/* ✅ BIGGER FLAG */}
                        <div className="flex items-center gap-3">
                          {/* 🔥 FLAG (HIGH VISIBILITY) */}
                          <div className="relative w-11 h-7 overflow-hidden rounded-md border border-white/10 shadow-lg bg-white/10">
                            <Image
                              src={`/flags/${country.slug}.jpg`}
                              alt={`${country.name} flag`}
                              fill
                              className="object-cover"
                            />

                            {/* subtle inner highlight */}
                            <div className="absolute inset-0 ring-1 ring-black/10 rounded-md" />
                          </div>

                          {/* 🔥 COUNTRY NAME (MORE READABLE) */}
                          <span className="text-sm text-white font-semibold tracking-tight">
                            {country.name}
                          </span>
                        </div>

                        <span className="text-[11px] text-white/80">
                          NMC Approved
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                        Study in {country.name}
                      </h3>

                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {country.desc}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Fees: {country.fees}
                      </span>
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-accent text-muted-foreground border border-border">
                        {country.duration}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm font-medium text-foreground">
                        View Details
                      </span>

                      <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
