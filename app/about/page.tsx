import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | India\'s Trusted MBBS in Europe Consultancy',
  description: 'Learn about our mission to provide Indian students with transparent, affordable, and high-quality MBBS admission guidance for Europe.',
};

const values = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Transparency', desc: 'No hidden fees or donation charges. Complete clarity on university costs.' },
  { icon: <Target className="w-6 h-6" />, title: 'Expertise', desc: 'Over 10 years of specialization in European medical admissions.' },
  { icon: <Users className="w-6 h-6" />, title: 'Support', desc: 'On-ground assistance in Europe for accommodation, SIM, and banking.' },
  { icon: <Award className="w-6 h-6" />, title: 'Success', desc: '100% visa success rate and verified admission in NMC-approved universities.' },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-linear-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our Mission: Empowering <br className="hidden md:block" />
            <span className="text-primary italic">Future Doctors</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MBBS in Europe was founded to provide Indian students with a simplified, honest path to world-class medical education without the financial burden.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "10+ Years", val: "Experience" },
              { label: "1000+", val: "Students Placed" },
              { label: "25+", val: "Partner Univs" },
              { label: "100%", val: "Visa Success" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-accent/40 rounded-4xl p-8 lg:p-12 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Based out of New Delhi, we are a team of educationists and medical consultants who understand the challenges of Indian medical aspirants. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just process applications; we map your entire journey—from choosing the right country like Serbia or Romania to helping you settle in your new campus.
              </p>
            </div>
            <div className="space-y-8">
               <h2 className="text-3xl font-bold text-foreground mb-8">Guided by Core Values</h2>
               <div className="grid gap-6">
                  {values.map(val => (
                    <div key={val.title} className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-2xl">
                        {val.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{val.title}</h4>
                        <p className="text-muted-foreground">{val.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-4xl p-12 text-center shadow-hover">
            <h2 className="text-4xl font-bold mb-6 italic tracking-tight underline-offset-8">"Your medical career starts here."</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Ready to talk to an admission expert? Join hundreds of students who fulfilled their dream with us.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book a Free Counseling Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
