import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";
import FAQSection from "@/components/FAQSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Frequently asked questions about Arham Chhajed's custom software development, IT solutions, and 1-on-1 vibe coding mentorship.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Arham Chhajed",
    description: "Frequently asked questions about Arham Chhajed's custom software development, IT solutions, and 1-on-1 vibe coding mentorship.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Arham Chhajed",
    description: "Frequently asked questions about Arham Chhajed's custom software development, IT solutions, and 1-on-1 vibe coding mentorship.",
  },
};

export default function FAQPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <div className="w-full max-w-[1400px] px-4 mx-auto pt-8 md:pt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white font-mono text-sm uppercase tracking-widest transition-colors duration-300 group">
            <span className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-colors group-hover:border-red-500">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </span>
            Back to Home
          </Link>
        </div>
        <div className="pt-4 md:pt-8">
          <Reveal>
            <FAQSection />
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Footer />
        </Reveal>
      </main>
    </PageTransition>
  );
}
