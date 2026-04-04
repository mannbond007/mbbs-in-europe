"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  User,
  GraduationCap,
} from "lucide-react";

export default function ContactPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="relative min-h-screen py-16 md:py-28 px-4 bg-gradient-to-b from-green-50 via-white to-white">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">

          {/* ICON HEADING */}
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-green-600 mb-2 md:mb-3">
            <GraduationCap className="w-5 h-5 text-green-600/80" />
            <span>2026 Admissions Open</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Study MBBS Abroad with{" "}
            <span className="text-green-600">Expert Guidance</span>
          </h1>

          <p className="mt-3 md:mt-6 text-sm sm:text-base md:text-lg text-gray-500">
            Get admission help, fee details & counseling — free.
          </p>
        </div>

        {/* ================= MOBILE FORM ================= */}
        <div className="lg:hidden mb-10">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">

            {/* PHONE ICON HEADING */}
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium text-xs mb-4">
              <Phone className="w-4 h-4 text-green-600/80" />
              <span>Get Callback in 10 Minutes</span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* NAME */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-sm"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  {...register("phone")}
                  placeholder="Phone Number"
                  className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none text-sm"
                />
              </div>

              {/* CTA */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="h-12 rounded-xl bg-green-600 text-white font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                Get Free Counseling
                <Send className="w-4 h-4" />
              </motion.button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-3">
              ✔ No spam • 100% Free • Instant response
            </p>
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">

          {/* LEFT INFO */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {[
              {
                icon: Mail,
                title: "Email",
                content: ["info@mbbsineurope.in"],
              },
              {
                icon: Phone,
                title: "Call",
                content: ["+91 98765 43210"],
              },
              {
                icon: MapPin,
                title: "Location",
                content: ["New Delhi, India"],
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-3"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h4>
                    {item.content.map((line, idx) => (
                      <p key={idx} className="text-gray-500 text-xs">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP FORM */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-xl p-10 shadow-xl">

              {/* ICON HEADING */}
              <div className="flex items-center justify-center gap-2 text-green-600 font-medium text-sm mb-6">
                <Phone className="w-4 h-4 text-green-600/80" />
                <span>Get a Call from MBBS Expert within 10 Minutes</span>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* NAME */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register("name")}
                    placeholder="Full Name"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
                  />
                </div>

                {/* PHONE */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none"
                  />
                </div>

                {/* EMAIL */}
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className="h-12 px-4 rounded-xl border border-gray-200 md:col-span-2"
                />

                {/* CTA */}
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full h-14 bg-green-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    Book Free Counseling Call
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>

              {/* TRUST */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                No spam • Your data is सुरक्षित • 100% Free Guidance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}