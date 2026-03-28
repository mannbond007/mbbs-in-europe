"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone is required"),
  neetScore: z.string().optional(),
  countryPreference: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function LeadForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // Lead capture success logic
    console.log("Lead captured:", data);
    alert("Thanks for registering! We will contact you soon.");
  };

  return (
    <section id="apply" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white text-foreground rounded-[2.5rem] p-8 md:p-16 max-w-5xl mx-auto shadow-hover relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Get Expert Guidance</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Fill out this form and our admission counselors will map the best European medical university for your budget and profile.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" />
                No hidden charges
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" />
                100% Visa assistance
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Guaranteed admission in top universities
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 bg-accent/30 p-8 rounded-3xl border border-border/50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  {...register("name")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Full Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register("phone")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="WhatsApp Number"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  {...register("neetScore")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="NEET Score"
                />
                <select
                  {...register("countryPreference")}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-white outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  defaultValue=""
                >
                  <option value="" disabled>Preference</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Romania">Romania</option>
                  <option value="Poland">Poland</option>
                  <option value="Any">Any European Country</option>
                </select>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" className="w-full mt-2 h-12 text-base">
                  Submit Application
                </Button>
              </motion.div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
