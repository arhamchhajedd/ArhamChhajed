"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";

const brands = [
  { id: 'interjob', name: 'InterJob', src: '/logo1.png' },
  { id: 'WorkRed', name: 'WorkRed', src: '/logo2.png' },
  { id: 'FlightBlock', name: 'FlightBlock', src: '/logo3.png' },
  { id: 'Undesk', name: 'Undesk', src: '/logo4.png' },
];

export default function LogoStrip() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeBrand = brands.find(b => b.id === hoveredId);

  return (
    <section className="w-full flex flex-col items-center px-4 py-8 md:py-12 relative overflow-hidden transition-colors duration-300">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-[1400px] mx-auto">
        
        {/* Left: text */}
        <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-1 w-fit transition-colors duration-300 mx-auto lg:mx-0">
            CLIENTS
          </span>
          <div className="relative mt-2 flex flex-col items-center lg:items-start w-full">
            <h2
              aria-hidden
              className="text-5xl sm:text-6xl lg:text-7xl leading-none font-bold text-black dark:text-white uppercase tracking-tight opacity-0 pointer-events-none select-none transition-colors duration-300 text-center lg:text-left"
              style={{ fontFamily: 'var(--font-bebas-neue)' }}
            >
              TRUSTED BY
            </h2>
            <div className="absolute inset-0 overflow-visible flex items-center justify-center lg:justify-start w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={hoveredId ?? 'default'}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-5xl sm:text-6xl lg:text-7xl leading-none font-bold text-black dark:text-white uppercase tracking-tight whitespace-nowrap text-center lg:text-left w-full"
                  style={{ fontFamily: 'var(--font-bebas-neue)' }}
                >
                  {activeBrand?.name ?? 'TRUSTED BY'}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right: icon grid */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 w-full lg:w-auto mt-1 lg:mt-0">
          {brands.map(({ id, name, src }) => {
            const isActive = hoveredId === id;
            const isDimmed = hoveredId !== null && !isActive;
            return (
              <button
                key={id}
                aria-label={name}
                className={[
                  'flex items-center justify-center p-4 sm:p-5 transition-all duration-300',
                  isActive ? 'scale-105' : '',
                  isDimmed ? 'opacity-20' : 'opacity-70',
                ].join(' ')}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ filter: 'brightness(0) invert(0.5)' }}
              >
                <Image src={src} alt={name} width={120} height={45} className="object-contain" />
              </button>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
