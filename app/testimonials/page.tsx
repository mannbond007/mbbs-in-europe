import { Metadata } from 'next';
import { Testimonials } from '@/components/sections/testimonials';

export const metadata: Metadata = {
  title: 'Student Testimonials | MBBS in Europe',
  description: 'Read success stories from Indian students who fulfilled their dream of studying medicine in Europe.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="pt-24 pb-12 text-center container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Student <span className="text-primary">Success Stories</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear directly from our students placed in top universities across Serbia, Romania, Poland, and more.
        </p>
      </div>
      
      {/* Reusing the highly-converting Testimonials section component */}
      <Testimonials />
    </div>
  );
}
