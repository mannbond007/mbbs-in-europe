"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const FloatingWhatsApp = React.memo(function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      
      {/* Tooltip */}
      <div className="relative mr-4 px-4 py-2 rounded-xl
                      bg-white/70 backdrop-blur-xl 
                      border border-white/40 
                      shadow-lg
                      text-xs font-medium text-gray-800
                      whitespace-nowrap
                      opacity-0 translate-x-3 scale-95
                      group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                      transition-all duration-300 ease-out">

        {/* Glow layer */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-100/40 to-emerald-100/30 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

        {/* Text */}
        <span className="relative z-10 tracking-tight">
          Chat on WhatsApp
        </span>

        {/* Arrow */}
        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 
                        w-2.5 h-2.5 bg-white/70 backdrop-blur-xl 
                        border-r border-b border-white/40 
                        rotate-[-45deg]" />
      </div>

      {/* Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full 
                   shadow-lg hover:shadow-xl 
                   flex items-center justify-center 
                   hover:bg-[#1ebe57] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* subtle pulse glow */}
        <div className="absolute inset-0 rounded-full bg-green-400/30 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 relative z-10"
        >
          <path
            fillRule="evenodd"
            d="M12.015 2.016c5.518 0 9.99 4.472 9.99 9.99 0 1.948-.568 3.77-1.542 5.318l1.458 4.676-4.786-1.258A9.957 9.957 0 0112.015 22c-5.518 0-9.99-4.472-9.99-9.99 0-5.518 4.472-9.99 9.99-9.99zm0 1.638a8.352 8.352 0 00-8.352 8.352c0 1.636.467 3.167 1.282 4.462l.244.387-1.026 3.29 3.374-.886.4.238a8.351 8.351 0 004.078 1.055c4.604 0 8.352-3.748 8.352-8.352 0-4.604-3.748-8.352-8.352-8.352zm4.332 11.217c-.237.585-1.373 1.15-1.921 1.246-.496.087-1.125.13-3.056-.67-2.31-1.01-3.793-3.411-3.907-3.562-.115-.15-1.002-1.334-1.002-2.54 0-1.205.626-1.801.85-2.036.223-.235.485-.295.642-.295.156 0 .312 0 .445.006.14.008.318-.052.496.376.182.438.625 1.528.681 1.64.056.113.111.238.026.406-.084.17-.123.28-.242.417-.118.136-.25.303-.356.402-.113.106-.232.222-.102.447.13.226.58 1.011 1.255 1.611.87.773 1.613 1.014 1.84.113.226.112.35.031.472-.11.122-.142.531-.618.675-.832.143-.214.286-.178.496-.102.21.076 1.332.628 1.56.741.229.112.381.168.437.262.056.094.056.544-.181 1.129z"
            clipRule="evenodd"
          />
        </svg>
      </motion.a>
    </div>
  );
});