import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/sections/lead-form';

const blogPosts = {
  'top-5-medical-universities-serbia': {
    title: 'Top 5 Medical Universities in Serbia for Indian Students',
    date: 'March 15, 2026',
    content: `
      <p>Serbia has emerged as a premier destination for Indian students seeking quality medical education at an affordable cost. With NMC-approved universities and globally recognized degrees, it's no wonder the numbers are growing.</p>
      <h2>1. University of Belgrade</h2>
      <p>The oldest and largest university in Serbia, offering world-class facilities and a rich history of medical excellence.</p>
      <h2>2. University of Nis</h2>
      <p>Known for its focus on practical clinical training and modern research laboratories.</p>
      <h2>3. University of Novi Sad</h2>
      <p>Offers a highly respected English-taught medical program with state-of-the-art hospitals.</p>
      <h2>4. University of Kragujevac</h2>
      <p>Focuses on individual student attention and high-quality faculty mentorship.</p>
      <h2>5. Military Medical Academy</h2>
      <p>A prestigious institution for those seeking rigorous clinical exposure and specialty training.</p>
    `,
  },
  'nmc-guidelines-2026': {
    title: 'NMC Guidelines 2026: What You Need to Know Before Going Abroad',
    date: 'February 28, 2026',
    content: `
      <p>The National Medical Commission (NMC) has updated its guidelines for foreign medical graduates. Staying compliant is crucial for your future practice in India.</p>
      <h2>Key Requirements</h2>
      <ul>
        <li>Course duration must be at least 54 months.</li>
        <li>Instruction must be in English.</li>
        <li>One year of clinical internship is mandatory in the same country.</li>
      </ul>
      <p>All our partner universities in Europe are fully compliant with these 2026 guidelines, ensuring a smooth path to your medical career back home.</p>
    `,
  },
  'cost-of-living-romania-vs-poland': {
    title: 'Cost of Living in Romania vs Poland for MBBS Students',
    date: 'February 10, 2026',
    content: `
      <p>Choosing between Romania and Poland? Understanding the financial aspect is key to your decision-making process.</p>
      <h2>Romania: The Budget-Friendly Option</h2>
      <p>Monthly living costs including shared housing and food average around ₹15,000 - ₹20,000.</p>
      <h2>Poland: The Premium Standard</h2>
      <p>Expect to spend around ₹25,000 - ₹35,000 monthly, reflecting the higher infrastructure and urban quality of life in cities like Warsaw or Krakow.</p>
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  if (!post) return { title: 'Post Not Found' };
  return { title: post.title + ' | MBBS in Europe Blog' };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) notFound();

  return (
    <>
      <article className="pt-32 pb-20 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/blog" className="text-primary font-medium hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>
          <header className="mb-12">
            <div className="text-sm text-muted-foreground mb-4">{post.date} • 5 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              {post.title}
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </header>
          
          <div 
            className="prose prose-lg prose-emerald mx-auto text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 p-8 bg-accent rounded-3xl border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to start your journey?</h3>
            <p className="text-muted-foreground mb-6">Our experts are here to help you choose the right university and handle your application from start to finish.</p>
            <Button size="lg">Get Free Consultation</Button>
          </div>
        </div>
      </article>
      <LeadForm />
    </>
  );
}
