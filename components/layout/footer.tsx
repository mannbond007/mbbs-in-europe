import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground py-16 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary transition-colors">
              <GraduationCap className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              MBBS in Europe
            </span>
          </Link>
          <p className="text-sm border-l-2 border-primary/50 pl-4 py-1">
            Your trusted partner for pursuing affordable and high-quality medical education in Europe. Serving Indian students with end-to-end admission guidance.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <a href="#" className="hover:text-white transition-colors text-sm font-medium">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm font-medium">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm font-medium">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Top Destinations</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/study-mbbs-in-serbia" className="hover:text-primary transition-colors">MBBS in Serbia</Link></li>
            <li><Link href="/study-mbbs-in-romania" className="hover:text-primary transition-colors">MBBS in Romania</Link></li>
            <li><Link href="/study-mbbs-in-poland" className="hover:text-primary transition-colors">MBBS in Poland</Link></li>
            <li><Link href="/study-mbbs-in-bulgaria" className="hover:text-primary transition-colors">MBBS in Bulgaria</Link></li>
            <li><Link href="/study-mbbs-in-moldova" className="hover:text-primary transition-colors">MBBS in Moldova</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/process" className="hover:text-primary transition-colors">Admission Process</Link></li>
            <li><Link href="/universities" className="hover:text-primary transition-colors">Universities</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: info@mbbsineurope.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Connaught Place, New Delhi, India 110001</li>
          </ul>
          <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-white font-medium mb-2">Ready to apply?</p>
            <p className="text-xs mb-4">Get free counseling from our experts today.</p>
            <Link href="#apply" className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-hover transition-colors">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} MBBS in Europe. All rights reserved.</p>
      </div>
    </footer>
  );
}
