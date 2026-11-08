"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    id: "01",
    question: "What services do you offer?",
    answer:
      "I provide end-to-end custom software and IT development (full-stack web apps, SaaS platforms, backend APIs, databases, and custom business tools), along with personalized 1-on-1 tutoring and vibe coding mentorship.",
  },
  {
    id: "02",
    question: "Do you offer 1-on-1 tutoring and vibe coding mentorship?",
    answer:
      "Yes! I offer practical 1-on-1 mentorship teaching modern 'vibe coding' workflows (leveraging AI developer tools like Cursor, Claude, and Copilot), full-stack web and software development, and foundational problem-solving so you can build and ship software at 10x speed.",
  },
  {
    id: "03",
    question: "Can you build custom IT software and non-web systems?",
    answer:
      "Absolutely. I engineer bespoke IT software across the stack — including internal management tools, WhatsApp automation pipelines, CRM integrations, cloud backends, database modeling, and scalable microservices.",
  },
  {
    id: "04",
    question: "How long does it take to develop a project?",
    answer:
      "A fast prototype, landing platform, or targeted MVP typically takes 1-2 weeks. Complex full-stack applications, SaaS architectures, or custom IT systems take 3-6 weeks with continuous milestone demos.",
  },
  {
    id: "05",
    question: "Will my project be mobile-friendly and SEO-optimized?",
    answer:
      "Every web application is built mobile-first, ensuring responsive layouts across all devices. We implement structured Schema.org JSON-LD data, semantic HTML, meta tags, and edge rendering for top-tier search engine visibility.",
  },
  {
    id: "06",
    question: "Can you help me fix or overhaul an existing codebase?",
    answer:
      "Yes. I frequently help clients refactor legacy codebases, eliminate technical debt, squash stubborn bugs, upgrade outdated dependencies, and optimize performance.",
  },
  {
    id: "07",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes. Post-launch support, monitoring, security updates, feature expansions, and regular maintenance packages are available to ensure your software remains stable and fast.",
  },
  {
    id: "08",
    question: "What pricing packages do you offer?",
    answer:
      "I offer clear, flexible packages for custom software, SaaS MVPs, web applications, and hourly or monthly 1-on-1 tutoring / vibe coding retainers. Reach out via WhatsApp or email for a custom proposal.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-zinc-50 dark:bg-black py-12 sm:py-16 md:py-24 transition-colors duration-300" id="faqs">
      <div className="w-full max-w-[1400px] px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start w-full">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 flex flex-col gap-2 lg:sticky lg:top-32">
              <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 w-fit transition-colors duration-300">
                SUPPORT & INQUIRIES
              </span>
              <h2
                className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-[8vw] lg:text-[6vw] xl:text-[5vw] leading-[0.85] font-bold text-black dark:text-white uppercase tracking-normal m-0 transition-colors duration-300"
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
                      "group relative flex items-start pl-4 sm:pl-6 md:pl-8 gap-3 sm:gap-4 py-5 sm:py-7 md:py-10 text-left transition-all duration-500 border-t border-black/10 dark:border-white/10 first:border-t-0 hover:bg-black/5 dark:hover:bg-white/5",
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
                          "text-xl min-[380px]:text-2xl md:text-3xl lg:text-4xl tracking-normal font-bold uppercase transition-all duration-500 leading-tight",
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
                    <div className="mt-1 flex shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-colors group-hover:border-red-500">
                        <span className="text-base sm:text-lg leading-none font-light">
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
