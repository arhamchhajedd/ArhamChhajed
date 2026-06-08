"use client";

import { motion } from "framer-motion";
import { Check, Rocket, LayoutTemplate, Briefcase, Cloud, CodeXml, RefreshCcw, Wrench, ShoppingBag, ShoppingCart, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const PACKAGES = [
  {
    id: "01",
    title: "Landing Pages",
    icon: <Rocket className="w-6 h-6" />,
    description: "High-conversion single pages designed to turn your visitors into customers.",
    price: "From ₹2,000",
    features: [
      "High-Conversion Layout",
      "Copywriting Assistance",
      "Lead Generation Forms",
      "Blazing Fast Load Times"
    ],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "02",
    title: "5-Page Website",
    icon: <LayoutTemplate className="w-6 h-6" />,
    description: "A complete professional presence for your small business or agency.",
    price: "From ₹5,000",
    features: [
      "Up to 5 Custom Pages",
      "SEO-Ready Structure",
      "CMS Integration",
      "Contact & Analytics Setup"
    ],
    highlight: true,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "03",
    title: "Portfolio",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Showcase your work with stunning, smooth-scrolling animations.",
    price: "From ₹5,000",
    features: [
      "Custom Animations using Framer Motion",
      "Project Case Study Layouts",
      "Bespoke Typography & Grid",
      "Mobile-First Responsive Design"
    ],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "04",
    title: "SaaS Website",
    icon: <Cloud className="w-6 h-6" />,
    description: "A digital storefront to sell your software, complete with pricing and feature showcases.",
    price: "Based on Scope",
    features: [
      "Interactive Pricing Tables",
      "Feature Tooltips & Demos",
      "Authentication Page UI",
      "Robust Performance Metrics"
    ],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    id: "05",
    title: "MVP Website",
    icon: <CodeXml className="w-6 h-6" />,
    description: "Launch your big startup idea faster with a fully functional Minimum Viable Product.",
    price: "Based on Scope",
    features: [
      "Custom Web Application Logic",
      "User Authentication & Payment Gateways",
      "Database Setup & Architecture",
      "Scalable Serverless Infrastructure"
    ],
    highlight: true,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "06",
    title: "Website Redesign",
    icon: <RefreshCcw className="w-6 h-6" />,
    description: "Modernize your outdated site with a massive UI/UX & performance overhaul.",
    price: "From ₹2,000",
    features: [
      "Complete Visual Overhaul",
      "Seamless Content Migration",
      "Core Web Vitals Improvement",
      "Modern Tech Stack Upgrade"
    ],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    id: "07",
    title: "Error Solving & Bugs",
    icon: <Wrench className="w-6 h-6" />,
    description: "Got bugs? Need performance tuning? We diagnose and fix codebase issues.",
    price: "Based on Complexity",
    features: [
      "Architecture Consulting",
      "Performance Optimization",
      "Dependency Upgrades",
      "Emergency Bug Squashing"
    ],
    highlight: false,
    colSpan: "md:col-span-2 lg:col-span-1",
  },
  {
    id: "08",
    title: "Shopify Website",
    icon: <ShoppingBag className="w-6 h-6" />,
    description: "Launch your online store on Shopify with a custom theme and seamless checkout.",
    price: "From \u20b95,000",
    features: [
      "Custom Shopify Theme",
      "Product & Collection Setup",
      "Payment & Shipping Config",
      "Mobile-Optimized Storefront"
    ],
    highlight: false,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "09",
    title: "E-Commerce Website",
    icon: <ShoppingCart className="w-6 h-6" />,
    description: "A fully custom e-commerce platform with inventory management and payment integration.",
    price: "From \u20b95,000",
    features: [
      "Custom Storefront Design",
      "Inventory & Order Management",
      "Secure Payment Gateways",
      "Advanced SEO & Analytics"
    ],
    highlight: true,
    colSpan: "md:col-span-1 lg:col-span-1",
  }
];

export default function PackagesSection() {
  return (
    <section className="w-full bg-zinc-50 dark:bg-black py-16 md:py-24 transition-colors duration-300 relative overflow-hidden" id="packages">
      
      {/* Cool Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-500/10 dark:bg-red-900/20 blur-[150px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-zinc-400/20 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="w-full max-w-[1400px] px-4 mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24">
          <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 w-fit transition-colors duration-300">
            PRICING & PLANS
          </span>
          <h2
            className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] leading-[0.85] font-bold text-black dark:text-white uppercase tracking-normal m-0 transition-colors duration-300"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            NICHE <br className="hidden md:block"/> PACKAGES
          </h2>
          <p className="mt-4 text-black/60 dark:text-white/60 font-mono text-sm leading-relaxed max-w-xl transition-colors duration-300">
            Specialized solutions tailored specifically to the type of product you need. Select the perfect package and let&apos;s build it.
          </p>
        </div>

        {/* Bento Grid Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={cn(
                "relative group flex flex-col p-6 md:p-8 rounded-[24px] overflow-hidden backdrop-blur-xl transition-all duration-500",
                pkg.colSpan,
                pkg.highlight 
                  ? "bg-black/90 dark:bg-zinc-900/90 border border-black dark:border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]" 
                  : "bg-white/60 dark:bg-zinc-900/20 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 shadow-sm hover:shadow-xl"
              )}
            >
              {pkg.highlight && (
                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-red-600 to-red-400" />
              )}
              
              {/* Card Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />

              <div className="flex flex-col gap-4 mb-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-mono text-[10px] tracking-widest px-3 py-1 rounded-full border",
                    pkg.highlight ? "text-white/70 border-white/20 bg-white/5" : "text-black/60 dark:text-white/60 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
                  )}>
                    PKG {pkg.id}
                  </span>
                  <div className={cn(
                    "p-2 rounded-full",
                    pkg.highlight ? "bg-white/10 text-white" : "bg-black/5 dark:bg-white/5 text-black dark:text-white"
                  )}>
                    {pkg.icon}
                  </div>
                </div>

                <h3 
                  className={cn(
                    "text-2xl md:text-3xl tracking-normal uppercase mt-2", 
                    pkg.highlight ? "text-white" : "text-black dark:text-white"
                  )}
                  style={{ fontFamily: 'var(--font-bebas-neue)' }}
                >
                  {pkg.title}
                </h3>
                <p className={cn(
                  "text-sm leading-relaxed",
                  pkg.highlight ? "text-white/60" : "text-black/60 dark:text-white/60"
                )}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8 relative z-10">
                <span className={cn(
                  "text-2xl font-bold tracking-tight",
                  pkg.highlight ? "text-white" : "text-black dark:text-white"
                )}>
                  {pkg.price}
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8 relative z-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className={cn(
                      "w-4 h-4 shrink-0 mt-0.5", 
                      pkg.highlight ? "text-red-400" : "text-red-500"
                    )} />
                    <span className={cn(
                      "text-xs md:text-sm font-medium",
                      pkg.highlight ? "text-white/80" : "text-black/80 dark:text-white/80"
                    )}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-auto pt-4 border-t border-black/5 dark:border-white/5 group-hover:border-transparent transition-colors">
                <a
                  href={`https://wa.me/917410030558?text=${encodeURIComponent(`Hi! I am interested in the ${pkg.title} package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-[12px] flex items-center justify-center gap-2",
                    pkg.highlight 
                      ? "bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-500/20" 
                      : "bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  )}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}

          {/* Full-Width CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-3 relative group rounded-[24px] overflow-hidden backdrop-blur-xl border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-r from-red-500/10 via-transparent to-red-500/10 dark:from-red-900/20 dark:via-transparent dark:to-red-900/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
              <div className="flex flex-col gap-3 text-center md:text-left">
                <h3
                  className="text-3xl md:text-4xl lg:text-5xl tracking-normal uppercase text-black dark:text-white"
                  style={{ fontFamily: 'var(--font-bebas-neue)' }}
                >
                  Want any other service?
                </h3>
                <p className="text-black/60 dark:text-white/60 text-sm md:text-base max-w-lg">
                  Don&apos;t see exactly what you need? We build custom solutions for every kind of project. Let&apos;s talk about yours.
                </p>
              </div>
              <a
                href={`https://wa.me/917410030558?text=${encodeURIComponent('Hi! I need a custom service. Can we discuss?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-8 py-4 bg-red-500 text-white text-sm font-bold tracking-widest uppercase rounded-[12px] hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Message Us
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
