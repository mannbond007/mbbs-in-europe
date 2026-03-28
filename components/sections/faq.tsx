"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { STANDARD_TRANSITION } from "@/lib/animations";

const faqs = [
  {
    question: "Is the degree recognized by the NMC?",
    answer: "Yes, all the universities we partner with are recognized by the National Medical Commission (NMC) and the World Health Organization (WHO).",
  },
  {
    question: "What is the medium of instruction?",
    answer: "The entire MBBS course is taught in English for international students.",
  },
  {
    question: "Do I need to clear NEET?",
    answer: "Yes, qualifying NEET is mandatory for Indian students to study MBBS abroad and practice in India later.",
  },
  {
    question: "What about the FMGE/NEXT exam?",
    answer: "Our partner universities provide coaching and guidance for the FMGE/NEXT exam to help students clear it on their first attempt.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-lg text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={STANDARD_TRANSITION}
                  >
                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
