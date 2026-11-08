"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      <div className="max-w-[1400px] w-full px-6 sm:px-10 mx-auto pt-16 md:pt-24 pb-8">

        {/* ── Top Section: Links + Email ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24">

          {/* Left: Two columns of links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-x-12 gap-y-4">
            {/* Column 1 — Site */}
            <div className="flex flex-col gap-3">
              {[
                { label: "WORK", href: "#portfolio" },
                { label: "CLIENTS", href: "/#testimonials" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-red-500 text-sm sm:text-base font-bold uppercase tracking-[0.12em] transition-all duration-300 w-fit hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Column 2 — Social */}
            <div className="flex flex-col gap-3">
              {[
                { label: "GITHUB", href: "https://github.com/ArhamChhajedd" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/in/arhamchhajed" },
                { label: "INSTAGRAM", href: "https://www.instagram.com/v5arham" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-500 text-sm sm:text-base font-bold uppercase tracking-[0.12em] transition-all duration-300 w-fit hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Reach out + Email */}
          <div className="md:col-span-7 flex flex-col items-start md:items-end justify-center gap-4">
            <span className="text-white/40 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em]">
              Reach out anytime
            </span>
            <a
              href="mailto:arham@undesk.in"
              className="text-white text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight hover:text-red-500 transition-colors duration-500 break-all md:break-normal"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              arham@undesk.in
            </a>
          </div>
        </div>

        {/* ── Bottom Section: Big Name + Categories ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">

          {/* Left: Giant Red Name */}
          <div className="md:col-span-7">
            <h2
              className="text-5xl min-[380px]:text-6xl sm:text-7xl md:text-[10vw] lg:text-[9vw] leading-[0.85] font-bold text-red-500 uppercase tracking-tight m-0 select-none break-words"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              ARHAM CHHAJED.
            </h2>
          </div>

          {/* Right: Service categories in italic serif */}
          <div className="md:col-span-5 flex flex-col items-start md:items-end gap-1 md:pb-4">
            {["Software Engineering", "Vibe Coding & Tutoring", "Custom IT Solutions"].map((service) => (
              <span
                key={service}
                className="text-white/50 text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl italic tracking-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* ── Copyright Bar ── */}
        <div className="w-full pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10">
          <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Arham Chhajed. All rights reserved.
          </p>
          <p className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
            Available for work
          </p>
        </div>

      </div>
    </footer>
  );
}
