"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Arham delivered our platform weeks ahead of schedule. The code quality is immaculate.",
    name: "Rishabh Manwatar",
    role: "Model",
  },
  {
    text: "The most seamless freelancer experience I've had. Fast, responsive, and insanely talented.",
    name: "Jainil Parmar",
    role: "Founder, Paradox",
  },
  {
    text: "He took our messy Figma file and turned it into a high-performance Next.js masterpiece.",
    name: "Naitik",
    role: "Founder, FlightBlock",
  },
  {
    text: "Highly communicative and technically brilliant. Arham is our go-to developer now.",
    name: "Vinit",
    role: "Co-Founder, FlightBlock",
  },
  {
    text: "His attention to web accessibility and performance optimization is genuinely impressive.",
    name: "Arman Inamdar",
    role: "Co-Founder, InterJob",
  },
  {
    text: "Exceptional speed. He built our entire MVP in just two weeks, flawlessly.",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Beautiful animations, perfect responsive design, and completely bug-free. Perfect.",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "A rare developer who actually understands business logic and user conversion.",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "If you need a modern web app built fast and built right, Arham is the guy.",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-50 dark:bg-black w-full py-20 md:py-32 relative transition-colors duration-300">
      <div className="w-full max-w-[1400px] px-4 mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
          
          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col h-full pt-0">
            <div className="flex flex-col gap-6">
              <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 w-fit transition-colors duration-300">
                TESTIMONIALS
              </span>

              <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-[0.85] font-bold text-black dark:text-white uppercase tracking-normal" style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                WHAT OUR CLIENTS SAY
              </h2>
            </div>

            <div className="flex gap-12 sm:gap-16 mt-auto pb-0">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans)' }}>52+</span>
                <span className="text-[10px] sm:text-xs font-mono text-black/40 dark:text-white/40 tracking-widest uppercase font-semibold">TESTIMONIALS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2" style={{ fontFamily: 'var(--font-geist-sans)' }}>2M+</span>
                <span className="text-[10px] sm:text-xs font-mono text-black/40 dark:text-white/40 tracking-widest uppercase font-semibold">REVENUE DRIVEN</span>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Columns */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end gap-4 sm:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px] md:h-[800px] overflow-hidden -mx-4 sm:mx-0 px-4 sm:px-0">
            <TestimonialsColumn testimonials={firstColumn} duration={25} />
            <TestimonialsColumn testimonials={secondColumn} duration={25} className="mt-12 hidden min-[450px]:flex" />
          </div>

        </div>
      </div>
    </section>
  );
}
