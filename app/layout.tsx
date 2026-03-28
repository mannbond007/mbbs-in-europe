import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { StickyCTA } from "@/components/ui/sticky-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study MBBS in Europe 2026 | Affordable Top Universities for Indian Students",
  description: "Trusted guidance for Indian students to study MBBS in Europe. Affordable tuition fees, NMC approved universities, low living costs, and 100% admission support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth h-full antialiased"
      suppressHydrationWarning
    >
      <body 
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col pt-20 relative`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <StickyCTA />
      </body>
    </html>
  );
}
