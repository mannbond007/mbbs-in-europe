import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export function Footer() {
  return (
    <footer className="bg-foreground text-muted-foreground py-16 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/50 p-2 rounded-[4px] group-hover:bg-primary transition-colors">
              <GraduationCap className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              MBBS in Europe
            </span>
          </Link>
          <p className="text-sm border-l-4 border-primary text-white/80 pl-4 py-1">
            Your trusted partner for pursuing affordable and high-quality
            medical education in Europe. Serving Indian students with end-to-end
            admission guidance.
          </p>

          <div className="flex items-center gap-4 pt-4">
            {/* Instagram */}
            <a
              href="#"
              className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/30 border border-white/10 hover:border-emerald-400/40 transition"
            >
              <FaInstagram className="w-6 h-6 text-[#E1306C] group-hover:text-emerald-400 transition" />

              {/* glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-emerald-400/10 blur-md transition" />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/30 border border-white/10 hover:border-emerald-400/40 transition"
            >
              <FaTwitter className="w-6 h-6 text-[#1DA1F2] group-hover:text-emerald-400 transition" />

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-emerald-400/10 blur-md transition" />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-white/30 border border-white/10 hover:border-emerald-400/40 transition"
            >
              <FaLinkedin className="w-6 h-6 text-[#0A66C2] group-hover:text-emerald-400 transition" />

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-emerald-400/10 blur-md transition" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Top Destinations</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/countries/serbia"
                className="hover:text-primary transition-colors"
              >
                MBBS in Serbia
              </Link>
            </li>
            <li>
              <Link
                href="/countries/romania"
                className="hover:text-primary transition-colors"
              >
                MBBS in Romania
              </Link>
            </li>
            <li>
              <Link
                href="/countries/poland"
                className="hover:text-primary transition-colors"
              >
                MBBS in Poland
              </Link>
            </li>
            <li>
              <Link
                href="/countries/bulgaria"
                className="hover:text-primary transition-colors"
              >
                MBBS in Bulgaria
              </Link>
            </li>
            <li>
              <Link
                href="/countries/moldova"
                className="hover:text-primary transition-colors"
              >
                MBBS in Moldova
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/process"
                className="hover:text-primary transition-colors"
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link
                href="/universities"
                className="hover:text-primary transition-colors"
              >
                Universities
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
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
            <p className="text-xs mb-4">
              Get free counseling from our experts today.
            </p>
            <Link
              href="#apply"
              className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-hover transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
      <footer className="relative mt-24 border-t border-white/10 bg-[#060b16] overflow-hidden">
        {/* Subtle green glow (premium effect) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand Section */}
            <div className="text-center md:text-left space-y-2 max-w-md">
              <p className="text-sm text-white font-semibold tracking-tight">
                © {new Date().getFullYear()} MBBS in Europe
              </p>

              <p className="text-xs text-white/60 leading-relaxed">
                Empowering students to pursue world-class medical education
                across Europe with trusted guidance and transparent processes.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <a
                href="/privacy"
                className="relative text-white/70 hover:text-emerald-400 transition"
              >
                Privacy Policy
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-emerald-400 transition-all group-hover:w-full"></span>
              </a>

              <a
                href="/terms"
                className="relative text-white/70 hover:text-emerald-400 transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}
