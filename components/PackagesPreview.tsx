"use client";

import { motion } from "framer-motion";
import { Check, LayoutTemplate, ShoppingCart } from "lucide-react";
import Link from "next/link";

const PREVIEW_PACKAGES = [
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
  },
  {
    id: "09",
    title: "E-Commerce Website",
    icon: <ShoppingCart className="w-6 h-6" />,
    description: "A fully custom e-commerce platform with inventory management and payment integration.",
    price: "From ₹5,000",
    features: [
      "Custom Storefront Design",
      "Inventory & Order Management",
      "Secure Payment Gateways",
      "Advanced SEO & Analytics"
    ],
  },
];

export default function PackagesPreview() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-24 relative overflow-hidden bg-zinc-50 dark:bg-black transition-colors duration-300" id="packages">
      <div className="max-w-[1400px] w-full mx-auto">

        {/* Header — left-aligned like portfolio */}
        <div className="flex justify-between items-end mb-16 relative">
          <div className="relative inline-block">
            <h2 className="text-[6vw] leading-none font-bold text-black dark:text-white uppercase tracking-tight m-0 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-bebas-neue)' }}>
              PACKAGES
            </h2>
          </div>
          <div className="hidden md:block text-black/50 dark:text-white/50 font-mono text-xl uppercase tracking-widest transition-colors duration-300">
            07
          </div>
        </div>

        {/* Grid: 2 package cards + 1 CTA card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {PREVIEW_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group flex flex-col p-6 md:p-8 rounded-2xl overflow-hidden transition-all duration-500 bg-white/60 dark:bg-zinc-900/20 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 shadow-sm hover:shadow-xl md:col-span-4 h-auto"
            >
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest px-3 py-1 rounded-full border text-black/60 dark:text-white/60 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
                    PKG {pkg.id}
                  </span>
                  <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white">
                    {pkg.icon}
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl tracking-normal uppercase mt-2 text-black dark:text-white"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {pkg.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-2xl font-bold tracking-tight text-black dark:text-white">
                  {pkg.price}
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1 mb-8">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                    <span className="text-xs md:text-sm font-medium text-black/80 dark:text-white/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 group-hover:border-transparent transition-colors">
                <a
                  href={`https://wa.me/917410030558?text=${encodeURIComponent(`Hi! I am interested in the ${pkg.title} package.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-center text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-[12px] flex items-center justify-center gap-2 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}

          {/* View All Packages — matching portfolio "View All" card */}
          <Link href="/packages" className="relative h-[60vh] md:h-auto group cursor-pointer overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 md:col-span-4 flex items-center justify-center border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-500">
            <div className="flex flex-col items-center justify-center z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-black dark:text-white group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-black dark:text-white uppercase tracking-tight transition-colors duration-300 group-hover:text-red-500"
                  style={{ fontFamily: 'var(--font-bebas-neue)' }}>
                View All
              </h3>
              <p className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest mt-3 transition-colors duration-300">
                9+ Packages Available
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Corner Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-black/20 dark:border-white/20 transition-colors duration-300" />
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-black/20 dark:border-white/20 transition-colors duration-300" />
          </Link>

        </div>
      </div>
    </section>
  );
}
