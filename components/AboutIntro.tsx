"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";

/* ── Founder data ── */
const founders = [
  {
    name: "Arham Chhajed",
    role: "Web Developer & Freelancer",
    image: "/arham.png",
    imagePosition: "center center",
    linkedin: "https://www.linkedin.com/in/arhamchhajed",
    github: "https://github.com/ArhamChhajedd",
  },
];

/* ── Lightbox for full-size image ── */
function ImageLightbox({
  src,
  alt,
  objectPosition,
  onClose,
}: {
  src: string;
  alt: string;
  objectPosition: string;
  onClose: () => void;
}) {
  // Disable body scroll when lightbox is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
        aria-label="Close"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="2" x2="16" y2="16" />
          <line x1="16" y1="2" x2="2" y2="16" />
        </svg>
      </button>

      {/* Image — constrained to fit fully within viewport */}
      <motion.div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        style={{ maxHeight: "calc(100vh - 6rem)", aspectRatio: "3/4" }}
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 250 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 85vw, 384px"
          priority
        />

        {/* Name tag */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-5 pb-5 pt-12">
          <p className="text-white font-bold font-mono text-sm uppercase tracking-widest">{alt}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

/* ── Founder Card ── */
function FounderCard({
  founder,
}: {
  founder: (typeof founders)[number];
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <div className="flex items-center gap-4 group cursor-pointer">
        {/* Avatar with expand arrow */}
        <div className="relative shrink-0" onClick={openLightbox}>
          <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-black/10 dark:border-white/20 overflow-hidden bg-zinc-200 dark:bg-zinc-800 transition-all duration-500 group-hover:border-black dark:group-hover:border-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
              style={{ objectPosition: founder.imagePosition }}
              sizes="64px"
            />
          </div>

          {/* Small expand arrow overlay */}
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-black dark:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-md">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white dark:text-black"
            >
              <path d="M1 9L9 1" />
              <path d="M3 1H9V7" />
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1 min-w-0">
          <h4 className="text-black dark:text-white font-bold font-mono text-xs sm:text-sm uppercase tracking-widest transition-colors duration-300 group-hover:text-red-500 truncate">
            {founder.name}
          </h4>
          <p className="text-black/50 dark:text-white/50 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest mb-1 transition-colors duration-300 truncate">
            {founder.role}
          </p>
          <div className="flex gap-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 transition-colors duration-300">
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative hover:text-black dark:hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-black dark:after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left px-1"
            >
              LinkedIn
            </a>
            {founder.github && (
              <>
                <span>|</span>
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative hover:text-black dark:hover:text-white transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-black dark:after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left px-1"
                >
                  GitHub
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Full-size image lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <ImageLightbox
            src={founder.image}
            alt={founder.name}
            objectPosition={founder.imagePosition}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Main Section ── */
export default function AboutIntro() {
  const detailsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="w-full flex-col items-center px-4 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 relative z-10">

        {/* Left Side: Large Text */}
        <div className="md:col-span-8 relative">
          <ScrollRevealText />
        </div>

        {/* Right Side: Details */}
        <div className="md:col-span-4 flex flex-col justify-between pt-4 sm:pt-8 md:pt-4 relative" ref={detailsRef}>
          <div className="text-black/70 dark:text-white/70 text-sm md:text-base leading-relaxed mb-8 sm:mb-12 transition-colors duration-300">
            <VariableProximity
              label="I'm Arham Chhajed. I build software and I'm currently focused on Undesk, a CRM built entirely for Indian businesses and freelancers. I designed it with WhatsApp-first workflows because that's how client conversations actually happen here, instead of forcing tools built for US sales teams."
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={detailsRef}
              radius={100}
              falloff="linear"
              className="mb-8 block"
            /><br /><br />
            <VariableProximity
              label="I also founded InterJob to help Indian freelancers who lose too much of their earnings to unfair commission structures. I'm currently doing a diploma in AI alongside this work, and I'm always happy to chat about startups, marketplace economics, or building tech for India."
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={detailsRef}
              radius={100}
              falloff="linear"
              className="block"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-black dark:text-white font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 transition-colors duration-300">
              About Me
            </h3>

            <div className="flex flex-col gap-6 pt-2">
              {founders.map((founder) => (
                <FounderCard key={founder.name} founder={founder} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import VariableProximity from "@/components/ui/VariableProximity";

/* ── Scroll Reveal Text Components ── */
function ScrollRevealText() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "center center"],
  });

  const textToReveal = "I build fast, modern websites and web apps for startups, businesses, and founders who want real results.";
  const words = textToReveal.split(" ");

  return (
    <div ref={container} className="mb-8 md:mb-0">
      <h2
        className="text-[10vw] sm:text-[8vw] md:text-[5vw] xl:text-[4vw] leading-[1] md:leading-[1.1] font-bold uppercase tracking-normal flex flex-wrap"
        style={{ fontFamily: "var(--font-bebas-neue)", columnGap: "0.25em" }}
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
        })}
      </h2>
    </div>
  );
}

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const letters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / word.length;

  return (
    <span className="inline-flex">
      {letters.map((char, i) => {
        const start = range[0] + step * i;
        const end = range[0] + step * (i + 1);
        return <Letter key={i} char={char} progress={progress} range={[start, end]} />;
      })}
    </span>
  );
}

function Letter({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  // Use opacity for perfectly smooth off-white to pure white transition (blending with dark bg)
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="text-black dark:text-white transition-colors duration-300">
      {char}
    </motion.span>
  );
}
