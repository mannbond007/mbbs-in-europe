"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Menu, Stethoscope, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Countries", href: "/#countries" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const NavLink = ({
  href,
  name,
  onClick,
}: {
  href: string;
  name: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="hover:text-primary transition-colors py-2"
    onClick={onClick}
  >
    {name}
  </Link>
);

const Logo = () => (
  <Link href="/" className="flex items-center gap-3 group">
    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-md transition-transform duration-300 group-hover:scale-110">
      <Stethoscope className="w-5 h-5 text-white" />
    </div>

    <div className="flex flex-col leading-tight">
      <span className="text-[18px] font-bold text-gray-900">MBBS</span>
      <span className="text-[16px] font-semibold">
        <span className="text-gray-400 mr-1">In</span>
        <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          Europe
        </span>
      </span>
    </div>
  </Link>
);

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();

  // ✅ smoother scroll
  const smoothScroll = useSpring(scrollY, {
    stiffness: 60,
    damping: 20,
    mass: 0.6,
  });

  // ✅ animated background only
  const backgroundColor = useTransform(
    smoothScroll,
    [0, 80],
    ["rgba(255,255,255,0.6)", "rgba(255,255,255,0.95)"]
  );

  const borderColor = useTransform(
    smoothScroll,
    [0, 80],
    ["rgba(228,228,231,0)", "rgba(228,228,231,1)"]
  );

  const shadow = useTransform(
    smoothScroll,
    [0, 80],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 8px 30px rgba(0,0,0,0.08)"]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* 🔥 ONLY THIS LAYER ANIMATES */}
      <motion.div
        style={{
          backgroundColor,
          borderBottomColor: borderColor,
          boxShadow: shadow,
        }}
        className="absolute inset-0 backdrop-blur-2xl border-b"
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl -z-10" />

      {/* CONTENT (STATIC = NO JERK) */}
      <div className="relative container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink href={link.href} name={link.name} />
              </li>
            ))}
          </ul>

          {/* 🔥 button isolated */}
          <div className="flex items-center gap-4 relative z-10">
            <Link href="/contact" className="hidden lg:inline-flex">
              <Button variant="ghost">Contact Us</Button>
            </Link>

            <Link href="/#apply">
              <Button>Apply Now</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 left-0 w-full 
                       bg-white/90 backdrop-blur-xl 
                       border-b shadow-xl pb-6 px-4"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    href={link.href}
                    name={link.name}
                    onClick={() => setIsOpen(false)}
                  />
                </li>
              ))}

              <li className="pt-4 border-t flex flex-col gap-3">
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>

                <Link href="/#apply" className="w-full">
                  <Button className="w-full">Apply Now</Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}