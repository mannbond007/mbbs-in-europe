"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { 
  STAGGER_CHILD_VARIANTS, 
  STAGGER_CONTAINER_VARIANTS, 
  VIEWPORT_CONFIG, 
  HOVER_TRANSITION 
} from "@/lib/animations";

const TestimonialCard = React.memo(({ name, country, review }: { name: string; country: string; review: string }) => (
  <motion.div
    variants={STAGGER_CHILD_VARIANTS}
    whileHover={{ y: -5 }}
    transition={HOVER_TRANSITION}
    className="bg-accent/30 rounded-3xl p-8 border border-border shadow-soft h-full flex flex-col"
  >
    <div className="flex text-amber-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
    <p className="text-muted-foreground italic mb-6 grow">"{review}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-foreground text-sm">{name}</div>
        <div className="text-xs text-muted-foreground">Studying in {country}</div>
      </div>
    </div>
  </motion.div>
));
TestimonialCard.displayName = "TestimonialCard";

export function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      country: "Serbia",
      review: "The entire admission process was very smooth. Honest agency.",
    },
    {
      name: "Priya Singh",
      country: "Romania",
      review: "Very clear about fees, no hidden charges. Highly recommended.",
    },
    {
      name: "Amit Patel",
      country: "Poland",
      review: "Helped me settle in Warsaw. The team is very supportive.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          What Our Students Say
        </h2>
        
        <motion.div 
          variants={STAGGER_CONTAINER_VARIANTS(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_CONFIG}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((t) => (
            <TestimonialCard 
              key={t.name}
              name={t.name}
              country={t.country}
              review={t.review}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
