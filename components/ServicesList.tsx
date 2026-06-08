"use client";

const services = [
  {
    id: "01",
    title: "Landing Pages",
    desc: "High-converting landing pages designed to maximize clicks, leads, and sales",
  },
  {
    id: "02",
    title: "5-Page Website",
    desc: "Fast, mobile-friendly websites built to generate leads and grow your business",
  },
  {
    id: "03",
    title: "Portfolio Website",
    desc: "Showcase your work with stunning animations and bespoke editorial layouts",
  },
  {
    id: "04",
    title: "SaaS Website",
    desc: "Feature-rich marketing sites with pricing tables, demos, and auth UI",
  },
  {
    id: "05",
    title: "MVP Development",
    desc: "Turn your idea into a working product with scalable and clean architecture",
  },
  {
    id: "06",
    title: "Website Redesign",
    desc: "Improve your existing website with better design, speed, and user experience",
  },
  {
    id: "07",
    title: "Shopify Website",
    desc: "Custom Shopify themes with product setup, payments, and shipping config",
  },
  {
    id: "08",
    title: "E-Commerce Website",
    desc: "Build custom stores with smooth checkout, inventory, and payment integration",
  },
  {
    id: "09",
    title: "Error Solving & Bugs",
    desc: "Diagnose and fix codebase issues, performance problems, and dependency upgrades",
  },
  {
    id: "10",
    title: "Maintenance & Support",
    desc: "Ongoing website updates, security patches, backups, and performance monitoring",
  },
];

/* ──────────────────────────────────────────────
   Individual service row
   ────────────────────────────────────────────── */
function ServiceRow({
  service,
}: {
  service: (typeof services)[number];
}) {
  const whatsappNumber = "917410030558";
  const message = `Hi! I am interested in your ${service.title} service.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="service-row block group relative py-8 border-b border-black/10 dark:border-white/20 transition-colors px-4 -mx-4 hover:bg-black/5 dark:hover:bg-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
        {/* Hover background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/[0.03] to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Left Side: Number and Title */}
        <div className="flex items-start md:items-center gap-4 md:gap-6 text-black dark:text-white w-full md:w-1/2 transition-colors duration-300">
          <span className="text-black/40 dark:text-white/40 font-mono text-xs md:text-sm uppercase tracking-widest pt-1 md:pt-0 transition-all duration-300 group-hover:text-red-500 shrink-0 w-6">
            {service.id}
          </span>
          <h3
            className="text-2xl sm:text-3xl md:text-[3vw] font-bold uppercase tracking-tight leading-none transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-1 md:group-hover:translate-x-2"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            {service.title}
          </h3>
        </div>

        {/* Right Side: Description */}
        <div className="flex items-center justify-end md:justify-start gap-4 md:gap-12 mt-2 md:mt-0 w-full md:w-auto">
          <p className="text-black/60 dark:text-white/60 font-mono text-xs uppercase tracking-widest hidden lg:block w-48 truncate transition-colors duration-300">
            {service.desc}
          </p>

          {/* Arrow icon that appears on hover */}
          <span className="text-black/30 dark:text-white/30 group-hover:text-red-500 transition-all duration-300 group-hover:translate-x-1 text-xl hidden md:block">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

/* ──────────────────────────────────────────────
   Main section
   ────────────────────────────────────────────── */
export default function ServicesList() {
  return (
    <section
      id="services"
      className="w-full flex flex-col items-center px-4 py-24 relative overflow-hidden bg-zinc-50 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-16 relative">
          <div className="relative inline-block">
            <h2
              className="text-[6vw] leading-none font-bold text-black dark:text-white uppercase tracking-tight m-0 transition-colors duration-300"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              SERVICES
            </h2>
          </div>

          <div className="hidden md:block text-black/50 dark:text-white/50 font-mono text-xl uppercase tracking-widest transition-colors duration-300">
            05
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-black/10 dark:border-white/20 transition-colors duration-300">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
