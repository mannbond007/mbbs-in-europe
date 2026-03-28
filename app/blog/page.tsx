import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | MBBS in Europe Tips & Guidelines',
  description: 'Latest articles and guidelines for Indian students pursuing MBBS in Europe.',
};

const posts = [
  {
    id: 1,
    title: 'Top 5 Medical Universities in Serbia for Indian Students',
    excerpt: 'Discover why Serbia is becoming the most sought-after destination for Indian medical aspirants in 2026.',
    date: 'March 15, 2026',
    slug: 'top-5-medical-universities-serbia',
  },
  {
    id: 2,
    title: 'NMC Guidelines 2026: What You Need to Know Before Going Abroad',
    excerpt: 'An in-depth explanation of the latest National Medical Commission rules for foreign medical graduates.',
    date: 'February 28, 2026',
    slug: 'nmc-guidelines-2026',
  },
  {
    id: 3,
    title: 'Cost of Living in Romania vs Poland for MBBS Students',
    excerpt: 'Analyzing the monthly expenses, rent, and food costs in two of Europe\'s top medical destinations.',
    date: 'February 10, 2026',
    slug: 'cost-of-living-romania-vs-poland',
  },
];

export default function BlogPage() {
  return (
    <div className="py-24 bg-background min-h-screen px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Latest <span className="text-primary">Articles</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Insights, guidelines, and tips for your medical journey abroad.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white border text-foreground border-border rounded-3xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col h-full">
              <div className="text-sm text-primary font-medium mb-3">{post.date}</div>
              <h2 className="text-xl font-bold mb-3 line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                Read More <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
