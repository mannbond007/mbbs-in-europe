"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const MotionButton = motion.button;

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {
      const baseStyles =
        "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 will-change-transform transform-gpu";

      const variants = {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-sm",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-foreground",
        ghost: "hover:bg-accent hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      };

      const sizes = {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      };

      return (
        <MotionButton
          ref={ref}
          whileHover={{ scale: 1.015 }}   // ✅ subtle
          whileTap={{ scale: 0.985 }}     // ✅ subtle
          transition={{
            type: "spring",
            stiffness: 200,              // ✅ smoother
            damping: 18,
            mass: 0.5,
          }}
          style={{ transformOrigin: "center" }} // ✅ prevents shift
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...(props as any)}
        />
      );
    }
  )
);

Button.displayName = "Button";

export { Button };