"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    id: "01",
    question: "What services do you offer?",
    answer:
      "We specialize in high-end, fully responsive frontend development, including landing pages, e-commerce platforms, startup MVPs, and custom web applications tailored to your business needs.",
  },
  {
    id: "02",
    question: "How long does it take to build a website?",
    answer: "Typically, a standard landing page takes 1-2 weeks, while more complex e-commerce or custom web projects can take 3-6 weeks. We establish a clear timeline during our initial consultation.",
  },
  {
    id: "03",
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Absolutely. Every website we build is inherently responsive, ensuring flawless performance across all mobile devices. Additionally, we use semantic HTML and optimal structures to give you a strong SEO foundation out of the box.",
  },
  {
    id: "04",
    question: "Can I manage and update my own content later?",
    answer: "Yes, we can integrate an easy-to-use Content Management System (CMS) that allows you to easily update text, images, and other site content without writing a single line of code.",
  },
  {
    id: "05",
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, our commitment doesn't end at launch. We offer ongoing support, performance monitoring, and maintenance packages to ensure your digital presence is always secure and up-to-date.",
  },
  {
    id: "06",
    question: "Do you offer branding and UI/UX design services?",
    answer: "Yes, alongside our frontend development services, we can assist with UI/UX design, creating wireframes, and ensuring your brand's digital identity perfectly aligns with your target audience.",
  },
  {
    id: "07",
    question: "What exactly happens after my website goes live?",
    answer: "We ensure a smooth deployment to your preferred hosting platform, optimize for performance, and deliver a comprehensive handover so you are fully equipped to run your new site.",
  },
  {
    id: "08",
    question: "Can you help me fix or redesign my existing website?",
    answer: "Absolutely. We often work with clients who need modern redesigns, performance overhauls, or architecture restructuring for their existing legacy codebases.",
  },
  {
    id: "09",
    question: "What pricing packages do you offer?",
    answer: "We offer tailored packages including 'Website Development', 'E-Commerce Package', and 'Startup MVP Package'. Pricing depends on complexity and timeline. Please contact us for a detailed quote.",
  },
  {
    id: "10",
    question: "Will my website be fast loading?",
    answer: "Yes, performance is a priority. We optimize all assets, employ modern coding frameworks like Next.js, and configure edge-caching to guarantee blazing-fast load speeds for your users.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-zinc-50 dark:bg-black py-16 md:py-24 transition-colors duration-300" id="faqs">
      <div className="w-full max-w-[1400px] px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 flex flex-col gap-2 lg:sticky lg:top-32">
              <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 w-fit transition-colors duration-300">
                SUPPORT & INQUIRIES
              </span>
              <h2
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] leading-[0.85] font-bold text-black dark:text-white uppercase tracking-normal m-0 transition-colors duration-300"
                style={{ fontFamily: "var(--font-bebas-neue)" }}
              >
                FREQUENTLY <br className="hidden lg:block"/> ASKED
              </h2>
              <p className="mt-4 text-black/60 dark:text-white/60 font-mono text-xs sm:text-sm leading-relaxed max-w-sm transition-colors duration-300">
                Find answers to common questions about our services, process, and how we can elevate your digital presence.
              </p>
            </div>

            {/* Right Column: Accordion List */}
            <div className="lg:col-span-8 flex flex-col space-y-0 ">
              {FAQS.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={faq.id}
                    onClick={() => handleToggle(index)}
                    className={cn(
                      "group relative flex items-start pl-6 md:pl-8 gap-4 py-8 md:py-10 text-left transition-all duration-500 border-t border-black/10 dark:border-white/10 first:border-t-0 hover:bg-black/5 dark:hover:bg-white/5",
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                    )}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-white/10 transition-colors duration-300">
                      {isActive && (
                        <motion.div
                          layoutId="faq-active-indicator"
                          className="absolute top-0 left-0 w-full h-full bg-red-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>

                    <span className="font-mono text-sm uppercase mt-1 text-black/40 dark:text-white/40 transition-colors duration-300">
                      {faq.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1 pt-1">
                      <span
                        className={cn(
                          "text-2xl md:text-3xl lg:text-4xl tracking-normal font-bold uppercase transition-all duration-500",
                          isActive ? "text-black dark:text-white" : "group-hover:text-red-500"
                        )}
                        style={{ fontFamily: 'var(--font-bebas-neue)' }}
                      >
                        {faq.question}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-black/60 dark:text-white/60 font-mono text-sm md:text-base leading-relaxed max-w-xl md:max-w-2xl lg:max-w-3xl pt-4 pb-2 transition-colors duration-300">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {/* Plus/Minus Icon */}
                    <div className="mt-2 hidden sm:block">
                      <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-colors group-hover:border-red-500">
                        <span className="text-lg leading-none font-light">
                          {isActive ? "−" : "+"}
                        </span>
                      </div>
                    </div>
                    
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
