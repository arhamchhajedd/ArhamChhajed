"use client";

import Image from "next/image";
import { projects } from "@/lib/projects";
import LazyVideo from "@/components/LazyVideo";
import { useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return (
    <section 
      id="portfolio" 
      className={`w-full flex flex-col items-center px-4 py-16 sm:py-24 relative overflow-hidden bg-zinc-50 dark:bg-black transition-colors duration-300 ${isHovered ? "md:!cursor-none" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        cursorX.set(e.clientX - 40);
        cursorY.set(e.clientY - 40);
      }}
    >
      {/* Custom Cursor (Portaled to body to escape overflow: hidden, desktop only) */}
      {mounted && createPortal(
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="hidden md:flex fixed top-0 left-0 w-[80px] h-[80px] rounded-full items-center justify-center pointer-events-none z-[99999] backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black dark:text-white drop-shadow-md"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      <div className="max-w-[1400px] w-full mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-10 sm:mb-16 relative">
          <div className="relative inline-block">
            <h2 className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-[6vw] leading-none font-bold text-black dark:text-white uppercase tracking-tight m-0 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-bebas-neue)' }}>
              SELECTED WORK
            </h2>
          </div>
          
          <div className="hidden md:block text-black/50 dark:text-white/50 font-mono text-xl uppercase tracking-widest transition-colors duration-300">
            05
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project) => {
            const cardClasses = `relative h-[52vh] min-h-[380px] sm:h-[60vh] md:h-[70vh] group overflow-hidden rounded-2xl transition-colors ${project.cols} ${!project.bgColor ? "bg-zinc-200 dark:bg-zinc-900" : ""} ${isHovered ? "md:!cursor-none" : ""}`;

            const cardContent = (
              <>
                {project.video ? (
                  <LazyVideo
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-60 md:transition-all md:duration-700 md:group-hover:scale-105 md:group-hover:opacity-100"
                  />
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 md:opacity-60 md:transition-all md:duration-700 md:group-hover:scale-105 md:group-hover:opacity-100"
                  />
                ) : null}

                {project.centerLogo ? (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 md:transition-transform md:duration-700 md:group-hover:scale-105">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.centerLogo} alt={`${project.title} Logo`} className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" />
                  </div>
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 md:opacity-90 md:group-hover:opacity-100 md:transition-opacity md:duration-500 z-10" />

                <div className="absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 w-full flex justify-between items-end gap-3 translate-y-0 opacity-100 md:translate-y-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:transition-all md:duration-700 md:ease-out z-20">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-5xl font-bold text-white uppercase tracking-tight md:transition-colors md:duration-300 md:group-hover:text-red-500"
                        style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                      {project.title}
                    </h3>
                    <p className="text-red-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1 md:mt-2 font-bold mb-2 md:mb-4">
                      {project.category}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                      {project.description}
                    </p>
                  </div>

                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex shrink-0 items-center justify-center">
                    {project.link ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    ) : (
                      <span className="text-black text-xl font-bold leading-none">+</span>
                    )}
                  </div>
                </div>
              </>
            );

            if (project.link) {
              return (
                <a 
                  key={project.id} 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                  style={project.bgColor ? { backgroundColor: project.bgColor } : undefined}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div 
                key={project.id} 
                className={cardClasses}
                style={project.bgColor ? { backgroundColor: project.bgColor } : undefined}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
