"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    title: "Full-Stack Software Development",
    description:
      "Custom software applications, IT platforms, scalable web apps, and enterprise solutions engineered from the ground up for any business need.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
  },
  {
    id: "02",
    title: "1-on-1 Tutoring & Vibe Coding",
    description:
      "Personalized mentorship covering vibe coding, modern AI developer tooling (Cursor, Claude, Copilot), Next.js, and shipping real software at 10x speed.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
  },
  {
    id: "03",
    title: "SaaS & MVP Engineering",
    description:
      "Turn startup ideas into production-ready software products in record time with robust database design, user auth, and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200",
  },
  {
    id: "04",
    title: "AI Integration & Automation",
    description:
      "Intelligent LLM integrations, conversational agents, WhatsApp automation, and custom internal tools to modernize business operations.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
  },
  {
    id: "05",
    title: "Backend & IT Infrastructure",
    description:
      "Resilient APIs, microservices, cloud deployments, database schemas, and end-to-end IT architecture built for speed and security.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
];

const AUTO_PLAY_DURATION = 5000;

export default function WhyMe() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  return (
    <section className="w-full bg-zinc-50 dark:bg-black py-12 sm:py-16 md:py-24 transition-colors duration-300" id="why-me">
      <div className="w-full max-w-[1400px] px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start w-full">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 flex flex-col gap-2 lg:sticky lg:top-32">
              <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 w-fit transition-colors duration-300">
                EXPERTISE
              </span>
              <h2
                className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-[8vw] lg:text-[6vw] xl:text-[5vw] leading-[0.85] font-bold text-black dark:text-white uppercase tracking-normal m-0 transition-colors duration-300"
                style={{ fontFamily: "var(--font-bebas-neue)" }}
              >
                SERVICES
              </h2>
              <p className="mt-4 text-black/60 dark:text-white/60 font-mono text-xs sm:text-sm leading-relaxed max-w-sm transition-colors duration-300">
                Custom software development, IT solutions, and hands-on vibe coding mentorship to take your ideas from zero to production.
              </p>
            </div>

            {/* Right Column: Accordion List */}
            <div className="lg:col-span-8 flex flex-col space-y-0 ">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start pl-4 sm:pl-6 md:pl-8 gap-3 sm:gap-4 py-5 sm:py-7 md:py-10 text-left transition-all duration-500 border-t border-black/10 dark:border-white/10 first:border-t-0 hover:bg-black/5 dark:hover:bg-white/5",
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white"
                    )}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-white/10 transition-colors duration-300">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-red-500 origin-top"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="font-mono text-sm uppercase mt-1 text-black/40 dark:text-white/40 transition-colors duration-300">
                      {service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1 pt-1">
                      <span
                        className={cn(
                          "text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-normal font-bold uppercase transition-all duration-500 leading-tight",
                          isActive ? "text-black dark:text-white" : "group-hover:text-red-500"
                        )}
                        style={{ fontFamily: 'var(--font-bebas-neue)' }}
                      >
                        {service.title}
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
                            <p className="text-black/60 dark:text-white/60 font-mono text-sm md:text-base leading-relaxed max-w-xl md:max-w-2xl lg:max-w-3xl pt-2 pb-2 transition-colors duration-300">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
