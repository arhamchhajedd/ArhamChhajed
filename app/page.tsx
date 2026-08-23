import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import LogoStrip from "@/components/LogoStrip";
import Projects from "@/components/Projects";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Reveal><LogoStrip /></Reveal>
        <Reveal><AboutIntro /></Reveal>
        <Reveal delay={100}><WhyMe /></Reveal>
        <Reveal delay={100}><Projects /></Reveal>
        <Reveal delay={100}><FAQSection /></Reveal>
        {/* <Reveal delay={100}><Testimonials /></Reveal> */}
        <Reveal delay={100}><Contact /></Reveal>
        <Reveal delay={100}><Footer /></Reveal>
      </main>
    </PageTransition>
  );
}
