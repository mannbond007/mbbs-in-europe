"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactData) => {
    console.log("Contact form submitted:", data);
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in <span className="text-primary italic">Touch</span></h1>
          <p className="text-xl text-muted-foreground">Have questions about MBBS in Europe? Our experts are ready to answer all your queries and guide you through the process.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-2xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <p className="text-muted-foreground">info@mbbsineurope.in</p>
                <p className="text-muted-foreground">admissions@mbbsineurope.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-2xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">Mon - Sat, 10 AM - 7 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-2xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                <p className="text-muted-foreground">Connaught Place, New Delhi</p>
                <p className="text-muted-foreground">India 110001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-border rounded-4xl p-8 md:p-12 shadow-soft">
            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground ml-1">Full Name</label>
                <input
                  {...register("name")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground ml-1">Email Address</label>
                <input
                  {...register("email")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-foreground ml-1">Phone Number</label>
                <input
                  {...register("phone")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-foreground ml-1">Your Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <div className="md:col-span-2 pt-2">
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg items-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
