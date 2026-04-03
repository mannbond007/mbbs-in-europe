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
      <section className="relative -mt-10 z-30 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <CountryStats stats={country.stats} />

          <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start mt-10">
            {/* Main Content Column */}
            <div>
              <CountryOverview overview={country.overview} whyChoose={country.whyChoose} />
              <CountryBenefits benefits={country.benefits} />
            </div>

            {/* Sidebar Sticky Area */}
            <div className="sticky top-28 hidden lg:block bg-accent/20 rounded-3xl p-6 border border-border">
              <h3 className="font-bold text-xl mb-4 text-foreground">Need Guidance?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Our experts specialize in admissions for {country.name}. Get a free profile evaluation today.
              </p>
              <LeadForm />
            </div>
          </div>

          <UniversityCards universities={country.universities} />
          <CountryProcess steps={country.admissionProcess} />
          <CountryDocuments documents={country.documentsRequired} eligibility={country.eligibility} />

        </div>
      </section>

      <FAQ />

      {/* Main Footer Lead Form */}
      <section className="bg-primary/5 py-12">
        <LeadForm />
      </section>
    </>
  );
}
