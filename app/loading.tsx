"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to ensure a smooth, professional feel (1.5 - 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Handle the case where the loading state is finished but we still want the screen to stay for a smooth exit
  // This is a standard Next.js loading.tsx which will be handled by Suspense
  // But for the sake of the "artificial delay" requirement:
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-8"
      >
        {/* Modern Loader Ring */}
        <div className="relative w-16 h-16">
          {/* Static outer ring for depth */}
          <div className="absolute inset-0 rounded-full border-[3px] border-muted/30" />
          
          {/* Animated gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary/40 ring-offset-background"
          />
          
          {/* Central glowing pulse */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 m-auto w-10 h-10 bg-primary/10 rounded-full blur-xl"
          />
        </div>

        {/* Brand Text / Loading Status */}
        <div className="flex flex-col items-center gap-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm font-medium text-foreground tracking-wide"
          >
            MBBS in Europe
          </motion.span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground font-light">
              Preparing your experience...
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Backdrop Blur (Optional - overlay style) */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
