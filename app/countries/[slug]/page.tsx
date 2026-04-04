import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { countriesData } from '@/lib/countries-data';

// Component Imports
import { CountryHero } from '@/components/countries/CountryHero';
import { CountryStats } from '@/components/countries/CountryStats';
import { CountryOverview } from '@/components/countries/CountryOverview';
import { CountryBenefits } from '@/components/countries/CountryBenefits';
import { UniversityCards } from '@/components/countries/UniversityCards';
import { CountryProcess } from '@/components/countries/CountryProcess';
import { CountryDocuments } from '@/components/countries/CountryDocuments';
import { FAQ } from '@/components/sections/faq';
import { LeadForm } from '@/components/sections/lead-form';

type Props = {
  params: Promise<{ slug: string }>;
};

// Next.js static generation
export async function generateStaticParams() {
  return Object.keys(countriesData).map((slug) => ({
    slug,
  }));
}

// Next.js dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = countriesData[slug];
  
  if (!data) {
    return { title: 'Country Not Found | MBBS in Europe' };
  }

  return {
    title: `${data.title} | Fees, Admission, Universities`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
      images: [{ url: data.imagePath }]
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countriesData[slug];

  if (!country) {
    notFound();
  }

  return (
    <>
      <CountryHero 
        name={country.name} 
        title={country.title}
        description={country.description} 
        imagePath={country.imagePath} 
      />
      
      {/* Immersed Content Area */}
      <section className="relative -mt-20 z-30 pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          <CountryStats stats={country.stats} />

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start mt-16">
            {/* Main Content Column */}
            <div className="space-y-24">
              <CountryOverview overview={country.overview} whyChoose={country.whyChoose} />
              <CountryBenefits benefits={country.benefits} />
            </div>

            {/* Sidebar Sticky Area - Premium Glass Card */}
            <div className="sticky top-32 hidden lg:block">
              <div className="bg-white dark:bg-gray-950 rounded-[2.5rem] p-10 border border-border/50 shadow-2xl shadow-black/5 relative overflow-hidden group">
                {/* Decorative background glow */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors duration-1000" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-500/20">
                    Admission Support
                  </div>
                  <h3 className="font-black text-3xl mb-4 text-foreground leading-tight italic">Expert Guidance</h3>
                  <p className="text-muted-foreground text-base mb-10 font-medium leading-relaxed">
                    Our senior counselors specialize in {country.name} admissions. Get your free profile evaluation today.
                  </p>
                  
                  <div className="text-left bg-accent/30 rounded-3xl p-2 border border-border/40 hover:border-primary/20 transition-colors duration-500">
                    <LeadForm />
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available Now
                  </div>
                </div>
              </div>
            </div>
          </div>

          <UniversityCards universities={country.universities} />
          <CountryProcess steps={country.admissionProcess} />
          <CountryDocuments documents={country.documentsRequired} eligibility={country.eligibility} />

        </div>
      </section>

      <FAQ />

      {/* Main Footer Lead Form - Premium Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg font-medium max-w-2xl mx-auto">
            Our experts are here to help you every step of the way. Fill out the form below for a free consultation.
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-950 rounded-[3rem] p-8 md:p-12 border border-border/50 shadow-2xl shadow-black/5 relative">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
