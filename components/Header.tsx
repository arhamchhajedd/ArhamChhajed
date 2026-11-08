"use client";

import Link from "next/link";
import { ArrowUpRight, Home, User, Briefcase, Wrench, HelpCircle, Star, Mail, X } from "lucide-react";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "motion/react";

export default function Header({ showHero = true }: { showHero?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "", Icon: Home },
    { label: "About", id: "about", Icon: User },
    { label: "Services", id: "why-me", Icon: Wrench },
    { label: "Work", id: "portfolio", Icon: Briefcase },
    { label: "Clients", id: "testimonials", Icon: Star },
    { label: "FAQ", id: "faqs", Icon: HelpCircle },
    { label: "Contact", id: "contact", Icon: Mail }
  ];

  const handleNavClick = (id: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Dynamic Floating Navigation Pill */}
      <div className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-full max-w-[1000px] px-2 sm:px-8 hidden md:block ${
        isScrolled ? "top-4" : "top-8"
      }`}>
        <nav className={`flex justify-between items-center text-[10px] sm:text-sm font-medium uppercase tracking-widest relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-700 mx-auto w-fit gap-1 sm:gap-2 ${
          isScrolled
            ? "bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent border border-transparent"
        }`}>
          <Link href="/" className="group flex items-center justify-center px-1">
            <Image
              src="/apple-touch-icon.png"
              alt="Arham Chhajed Logo"
              width={42}
              height={42}
              priority
              className="rounded-sm transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
          <div className="w-px h-10 bg-black/10 dark:bg-white/10 mx-1 sm:mx-2"></div>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className="group relative flex items-center justify-center gap-1 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors duration-500 py-3 sm:py-1 px-3 sm:px-3 cursor-pointer"
            >
              <span className="relative z-10 hidden sm:inline">{item.label}</span>
              <span className="relative z-10 sm:hidden">
                <item.Icon className="w-4 h-4" strokeWidth={2} />
              </span>
              {item.label === "Contact" && <ArrowUpRight className="w-4 h-4 hidden sm:block relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-500" />}
              
              {/* Premium Glow Hover Effect */}
              <span className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              {/* Animated Underline */}
              <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-red-500 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100"></span>
            </button>
          ))}
          <div className="w-px h-10 bg-black/10 dark:bg-white/10 mx-2 hidden sm:block"></div>
          <ThemeToggle />
        </nav>
      </div>

      {/* Mobile Premium Header */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 md:hidden ${
        isScrolled 
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3" 
          : "bg-gradient-to-b from-zinc-100/80 to-transparent dark:from-black/80 dark:to-transparent backdrop-blur-[2px] py-4"
      }`}>
        <div className="flex justify-between items-center px-4 sm:px-6">
          {/* Creative Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2"
          >
            <Image
              src="/apple-touch-icon.png"
              alt="Arham Chhajed Logo"
              width={98}
              height={98}
              priority
              className="w-10 h-10 min-[400px]:w-12 min-[400px]:h-12 rounded transition-transform duration-500 group-active:scale-90"
            />
            <span
              className="text-2xl min-[380px]:text-[26px] min-[420px]:text-[28px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-600 dark:from-white dark:to-zinc-400 tracking-wider transition-transform duration-500 group-active:scale-95 shrink-0"
              style={{ fontFamily: 'var(--font-bebas-neue)' }}
            >
              ARHAM<span className="text-red-500">.</span>
            </span>
          </button>
          
          {/* Creative Custom Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <ThemeToggle />
            
            <div className="w-[1px] h-5 bg-black/15 dark:bg-white/15 mx-0.5"></div>
            
            {/* Custom Staggered Hamburger Icon */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="group w-10 h-10 flex flex-col items-end justify-center gap-[5px] rounded-full active:scale-90 transition-transform bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 pr-2.5"
              aria-label="Open Menu"
            >
              <span className="w-5 h-[2px] bg-black dark:bg-white rounded-full transition-all duration-300"></span>
              <span className="w-3 h-[2px] bg-black dark:bg-white rounded-full transition-all duration-500 group-hover:w-5"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-zinc-50 dark:bg-black md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-black/50 dark:text-white/50">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/5 active:scale-90 transition-transform"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 text-black dark:text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 py-6 gap-6 sm:gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => handleNavClick(item.id), 300);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-3xl min-[380px]:text-4xl font-bold uppercase tracking-tight text-black dark:text-white hover:text-red-500 transition-colors flex items-center gap-4 text-left cursor-pointer"
                  style={{ fontFamily: 'var(--font-bebas-neue)' }}
                >
                  <item.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-black/30 dark:text-white/30 shrink-0" />
                  {item.label}
                </motion.button>
              ))}
            </div>
            
            <div className="p-6 border-t border-black/10 dark:border-white/10 mt-auto">
              <p className="font-mono text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest text-center">Arham Chhajed &copy; {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showHero && (
        <header className="w-full flex flex-col items-center pt-24 sm:pt-32 pb-6 sm:pb-8 relative z-40">
          <div className="flex flex-col items-center px-4 w-full max-w-[1400px]">

            {/* Top Info Grid */}
            <div className="w-full flex justify-between items-end gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-black/50 dark:text-white/50 mb-8 sm:mb-12 max-w-[1400px]">
              <span className="text-left leading-relaxed">
                Based in<br />
                <span className="text-black/80 dark:text-white/80">India</span>
              </span>
              <span className="text-right leading-relaxed">
                Full Stack Developer<br />
                <span className="text-black/80 dark:text-white/80">& Tech Mentor</span>
              </span>
            </div>

            <div className="relative flex justify-center items-center py-4 w-full cursor-default overflow-hidden group">
              {/* Cinematic Logo Text */}
              <h1
                className="text-[13vw] sm:text-[12vw] leading-[0.85] font-bold text-transparent bg-clip-text bg-gradient-to-b from-black via-zinc-800 to-zinc-400 dark:from-white dark:via-white/90 dark:to-white/40 uppercase m-0 tracking-tight text-center whitespace-nowrap z-10 relative transition-all duration-500"
                style={{ fontFamily: 'var(--font-bebas-neue)' }}
              >
               Arham Chhajed
              </h1>

              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-black/5 dark:bg-white/5 blur-[80px] rounded-full pointer-events-none transition-opacity duration-1000 opacity-50 group-hover:opacity-100"></div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
