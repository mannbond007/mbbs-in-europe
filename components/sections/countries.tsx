"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { 
  STAGGER_CHILD_VARIANTS, 
  STAGGER_CONTAINER_VARIANTS, 
  VIEWPORT_CONFIG, 
  HOVER_TRANSITION 
} from "@/lib/animations";

const countries = [
  { name: "Serbia", desc: "Low living costs, high acceptance rate.", slug: "serbia" },
  { name: "Romania", desc: "Affordable tuition with top clinical exposure.", slug: "romania" },
  { name: "Poland", desc: "Premium infrastructure, world-class teaching.", slug: "poland" },
  { name: "Bulgaria", desc: "Easy admission, low fees, high tech.", slug: "bulgaria" },
  { name: "Moldova", desc: "Very low cost, growing IT capabilities.", slug: "moldova" },
  { name: "Macedonia", desc: "Great medical facilities, calm environment.", slug: "macedonia" },
  { name: "Cyprus", desc: "European standard, ideal climate, high safety.", slug: "cyprus" },
  { name: "Bosnia", desc: "Emerging destination, low tuition fees.", slug: "bosnia" },
  { name: "Hungary", desc: "Globally recognized degrees, beautiful life.", slug: "hungary" },
  { name: "Austria", desc: "Top tier education, premium universities.", slug: "austria" },
];

export function Countries() {
  return (
    <section id="countries" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">Top Destinations in Europe</h2>
          <p className="text-muted-foreground text-lg">
            Choose from the finest NMC recognized universities across Europe, customized for Indian students.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={STAGGER_CONTAINER_VARIANTS(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CONFIG}
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={STAGGER_CHILD_VARIANTS}
            >
              <Link href={`/study-mbbs-in-${country.slug}`}>
                <div className="group bg-white rounded-3xl p-6 border border-border shadow-soft hover:shadow-hover transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    transition={HOVER_TRANSITION}
                    className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" 
                  />
                  
                  <div className="relative z-10 flex flex-col">
                    <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                      <MapPin className="stroke-2" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {country.desc}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-8 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Explore More</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
