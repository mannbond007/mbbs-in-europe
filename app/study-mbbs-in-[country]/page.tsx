import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/sections/lead-form';
import { FAQ } from '@/components/sections/faq';

// Dummy data source for static generation and content
const countryData = {
  serbia: {
    name: 'Serbia',
    title: 'Study MBBS in Serbia for Indian Students 2026',
    description: 'Affordable MBBS in Serbia with low fees, high-quality European education, and seamless NMC approved universities.',
    fees: '₹3,50,000 to ₹4,50,000 per year',
    livingCost: '₹15,000 per month',
    universities: ['University of Nis', 'University of Belgrade', 'University of Novi Sad'],
  },
  romania: {
    name: 'Romania',
    title: 'Study MBBS in Romania for Indian Students 2026',
    description: 'Top medical universities in Romania offering low tuition fees, European standard curriculum, and high clinical exposure.',
    fees: '₹4,000,000 to ₹5,50,000 per year',
    livingCost: '₹20,000 per month',
    universities: ['Carol Davila University', 'Victor Babes University', 'Grigore T. Popa'],
  },
  poland: {
    name: 'Poland',
    title: 'Study MBBS in Poland for Indian Students 2026',
    description: 'Premium medical education in Poland. High FMGE passing rate, excellent infrastructure, and English taught programs.',
    fees: '₹8,00,000 to ₹12,00,000 per year',
    livingCost: '₹30,000 per month',
    universities: ['Medical University of Warsaw', 'Jagiellonian University', 'Medical University of Lodz'],
  },
  bulgaria: {
    name: 'Bulgaria',
    title: 'Study MBBS in Bulgaria for Indian Students 2026',
    description: 'NMC approved universities in Bulgaria with easy admission process and great safety for international students.',
    fees: '₹6,00,000 to ₹8,00,000 per year',
    livingCost: '₹22,000 per month',
    universities: ['Sofia Medical University', 'Plovdiv Medical University', 'Varna Medical University'],
  },
  // Add others to match the grid...
  moldova: { 
    name: 'Moldova', 
    title: 'Study MBBS in Moldova for Indian Students 2026', 
    description: 'High-quality medical education in Moldova at an affordable cost. NMC and WHO recognized degrees with English medium instruction.', 
    fees: '₹3,50,000 to ₹5,00,000 per year', 
    livingCost: '₹15,000 per month', 
    universities: ['Nicolae Testemitanu State University of Medicine and Pharmacy'] 
  },
  macedonia: { 
    name: 'Macedonia', 
    title: 'Study MBBS in North Macedonia for Indian Students 2026', 
    description: 'Explore medical studies in North Macedonia. Modern hospitals, European living standards, and globally recognized medical degrees.', 
    fees: '₹4,00,000 to ₹6,00,00,000 per year', 
    livingCost: '₹18,000 per month', 
    universities: ['Sts. Cyril and Methodius University', 'University of Goce Delcev'] 
  },
  cyprus: { 
    name: 'Cyprus', 
    title: 'Study MBBS in Cyprus for International Students 2026', 
    description: 'Premium medical education in Cyprus. Mediterranean lifestyle combined with world-class healthcare training and facilities.', 
    fees: '₹12,00,000 to ₹18,00,000 per year', 
    livingCost: '₹40,000 per month', 
    universities: ['University of Nicosia Medical School', 'European University Cyprus'] 
  },
  bosnia: { 
    name: 'Bosnia', 
    title: 'Study MBBS in Bosnia and Herzegovina 2026', 
    description: 'Affordable and high-standard medical education in Bosnia. English taught programs with focus on practical clinical skills.', 
    fees: '₹3,80,000 to ₹5,00,000 per year', 
    livingCost: '₹18,000 per month', 
    universities: ['University of Sarajevo', 'University of Banja Luka', 'University of Tuzla'] 
  },
  hungary: { 
    name: 'Hungary', 
    title: 'Study MBBS in Hungary for Indian Students 2026', 
    description: 'Join thousands of international students in Hungary. Prestigious medical universities with centuries of tradition in excellence.', 
    fees: '₹10,00,000 to ₹15,00,000 per year', 
    livingCost: '₹30,000 per month', 
    universities: ['Semmelweis University', 'University of Debrecen', 'University of Szeged'] 
  },
  austria: { 
    name: 'Austria', 
    title: 'Study MBBS in Austria: Complete Guide 2026', 
    description: 'Pursue medical excellence in Austria. Top-tier clinical research, advanced hospital networks, and premium European degrees.', 
    fees: 'Starting from ₹15,00,000 (Private) or Low Tuition (Public/German)', 
    livingCost: '₹50,000 per month', 
    universities: ['Medical University of Vienna', 'Medical University of Graz', 'Paracelsus Medical University'] 
  },
};

type Props = {
  params: Promise<{ country: string }>;
};

// Next.js static generation
export async function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({
    country,
  }));
}

// Next.js dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = countryData[country as keyof typeof countryData];
  
  if (!data) {
    return { title: 'Country Not Found' };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'website',
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const data = countryData[country as keyof typeof countryData];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Country Hero Header */}
      <section className="pt-32 pb-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center text-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Study MBBS in <span className="text-primary">{data.name}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.description}
          </p>
          <Button size="lg">Get Free Consultation</Button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-8">Overview of MBBS in {data.name}</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border text-foreground border-border p-6 rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold mb-2">Tuition Fees</h3>
                <p className="text-primary font-semibold text-2xl">{data.fees}</p>
                <p className="text-sm text-muted-foreground mt-2">per academic year</p>
              </div>
              <div className="bg-white border text-foreground border-border p-6 rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold mb-2">Living Cost</h3>
                <p className="text-secondary font-semibold text-2xl">{data.livingCost || 'Approx ₹20,000/mo'}</p>
                <p className="text-sm text-muted-foreground mt-2">including accommodation & food</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Top Medical Universities</h2>
            <ul className="list-disc pl-6 mb-12 space-y-2">
              {data.universities.length > 0 ? data.universities.map(uni => (
                <li key={uni} className="text-lg">{uni}</li>
              )) : (
                <li className="text-lg">Various highly-ranked, NMC-approved universities.</li>
              )}
            </ul>

            <h2 className="text-3xl font-bold mb-6">Eligibility Criteria</h2>
            <ul className="list-disc pl-6 mb-12 space-y-2">
              <li>50% aggregate in 12th PCB (Physics, Chemistry, Biology)</li>
              <li>Minimum 17 years of age</li>
              <li>NEET qualified (mandatory for Indian students)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Reused Lead Form block at bottom for conversions */}
      <LeadForm />
    </>
  );
}
