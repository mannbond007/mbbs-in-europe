import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Lazy load sections
const Countries = dynamic(() => import("@/components/sections/countries").then(mod => mod.Countries), {
  loading: () => <div className="min-h-[600px] h-full w-full bg-accent/5 animate-pulse rounded-3xl m-8" />,
});

const WhyEurope = dynamic(() => import("@/components/sections/why-europe").then(mod => mod.WhyEurope), {
  loading: () => <div className="min-h-[500px] h-full w-full bg-background animate-pulse" />,
});

const Process = dynamic(() => import("@/components/sections/process").then(mod => mod.Process), {
  loading: () => <div className="min-h-[500px] h-full w-full bg-accent/5 animate-pulse" />,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="min-h-[400px] h-full w-full bg-background animate-pulse" />,
});

const FAQ = dynamic(() => import("@/components/sections/faq").then(mod => mod.FAQ), {
  loading: () => <div className="min-h-[400px] h-full w-full bg-background animate-pulse" />,
});

const LeadForm = dynamic(() => import("@/components/sections/lead-form").then(mod => mod.LeadForm), {
  loading: () => <div className="min-h-[600px] h-full w-full bg-accent/5 animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Countries />
      <WhyEurope />
      <Process />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <section className="py-20 bg-background text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 italic tracking-tight underline-offset-8">"Your medical journey starts with a simple conversation."</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Talk to our senior counselor today and get a personalized roadmap for your MBBS in Europe.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg">Book Free Consultation</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
