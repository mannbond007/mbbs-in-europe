"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the MBBS degree valid in India?",
    answer:
      "Yes, the degree is valid if the university is approved by the NMC. Students must clear the FMGE/NEXT exam to practice in India.",
  },
  {
    question: "Do I need to qualify NEET?",
    answer:
      "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad.",
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer:
      "The total cost ranges between ₹20–₹50 lakhs depending on the country and university.",
  },
  {
    question: "Is the medium of instruction English?",
    answer:
      "Yes, all programs are taught in English for international students.",
  },
  {
    question: "Is there any entrance exam?",
    answer: "No additional entrance exams are required apart from NEET.",
  },
  {
    question: "What about FMGE/NEXT preparation?",
    answer:
      "Universities provide guidance and support for FMGE/NEXT preparation.",
  },
  {
    question: "Are hostel facilities available?",
    answer:
      "Yes, students get safe and comfortable hostel facilities with Indian food options.",
  },
  {
    question: "Is it safe for Indian students?",
    answer:
      "Yes, countries are student-friendly with strong Indian communities.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const mid = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, mid), faqs.slice(mid)];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Everything you need to know about MBBS abroad — eligibility, cost,
            and process.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {columns.map((column, i) => (
            <div key={i} className="space-y-4">
              {column.map((faq, index) => {
                const actualIndex = i * (faqs.length / 2) + index;
                const isOpen = openIndex === actualIndex;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-green-300 transition-all"
                  >
                    {/* Button */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : actualIndex)
                      }
                      className="w-full cursor-pointer flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-base font-semibold text-gray-800">
                        {faq.question}
                      </span>

                      {/* ICON */}
                      <div className="flex-none w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                        <motion.svg
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 5v14" />
                          <path d="M5 12h14" />
                        </motion.svg>
                      </div>
                    </button>

                    {/* ANSWER */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <div className="px-5 pb-5 border-t border-gray-100">
                            <p className="pt-3 text-sm text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}