"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const StickyCTA = React.memo(function StickyCTA() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [200, 300], [100, 0]);
  const opacity = useTransform(scrollY, [200, 300], [0, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-t border-border p-4 md:hidden flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
    >
      <Link href="/contact" className="flex-1">
        <Button variant="outline" className="w-full h-12 rounded-xl text-foreground font-semibold">
          Free Advice
        </Button>
      </Link>
      <Link href="/#apply" className="flex-1">
        <Button className="w-full h-12 rounded-xl bg-primary text-white font-bold shadow-soft">
          Apply Now
        </Button>
      </Link>
    </motion.div>
  );
});
