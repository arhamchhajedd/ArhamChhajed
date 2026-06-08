"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const serviceOptions = [
  { value: "Web Development", label: "Web Development" },
  { value: "Landing Page", label: "Landing Page" },
  { value: "Ecommerce Development", label: "Ecommerce Development" },
  { value: "Startup MVP", label: "Startup MVP" },
  { value: "Other", label: "Other" },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      formRef.current.reset();
      setSelected("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const selectedLabel = serviceOptions.find((o) => o.value === selected)?.label;

  return (
    <section id="contact" className="w-full bg-zinc-50 dark:bg-black transition-colors duration-300 p-4 md:p-[25px]">
      {/* Inner Container with 5px gap from viewport edges implicitly via section padding */}
      <div className="w-full relative h-auto md:min-h-[800px] md:h-[850px] rounded-[18px] overflow-hidden bg-transparent md:bg-zinc-200 md:dark:bg-zinc-900 md:border md:border-black/10 md:dark:border-white/10 transition-colors duration-300">

        {/* Full Section Background Image (Desktop Only) */}
        <div className="hidden md:block absolute inset-0 w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1713007573900-78aa9ca29201?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Glass Panel Form */}
        <div className="relative md:absolute md:top-[280px] right-0 bottom-0 w-full md:w-[480px] lg:w-[35%] bg-zinc-100 dark:bg-[#1a1a1a] md:bg-white/40 md:dark:bg-[#32322d]/40 md:backdrop-blur-[24px] border border-black/10 dark:border-white/10 md:border-t md:border-l md:border-b-0 md:border-r-0 shadow-lg md:shadow-[-10px_-10px_30px_rgba(0,0,0,0.1)] md:dark:shadow-[-10px_-10px_30px_rgba(0,0,0,0.2)] p-6 md:p-[40px] flex flex-col justify-center rounded-[18px] md:rounded-l-[18px] md:rounded-tr-none md:rounded-br-[18px] z-10 transition-all duration-500 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 md:hover:bg-white/60 md:dark:hover:bg-[#32322d]/30">

          <h2 className="text-black dark:text-white font-bold uppercase tracking-[1px] m-0 mb-[10px] text-3xl md:text-[32px] leading-tight transition-colors duration-300"
              style={{ fontFamily: 'var(--font-bebas-neue)' }}>
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="text-black/60 dark:text-[#aaa] text-sm mb-[30px] transition-colors duration-300">
            Drop me an email at <a href="mailto:arhamchhajed@gmail.com" className="text-black dark:text-white hover:underline transition-colors">arhamchhajed@gmail.com</a> or leave a message below.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col grow justify-center text-sm">

            <div className="flex flex-col gap-[24px]">

              <div className="relative group/input">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name*"
                  required
                  className="w-full bg-transparent border-b border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/50 dark:placeholder-[#aaa] py-[12px] focus:outline-none focus:border-black/50 dark:focus:border-white/50 transition-colors"
                />
              </div>

              <div className="relative group/input">
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email*"
                  required
                  className="w-full bg-transparent border-b border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/50 dark:placeholder-[#aaa] py-[12px] focus:outline-none focus:border-black/50 dark:focus:border-white/50 transition-colors"
                />
              </div>

              <div className="relative" ref={dropdownRef}>
                <input type="hidden" name="service" value={selected} required />
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between bg-transparent border-b border-black/20 dark:border-white/20 py-[12px] focus:outline-none focus:border-black/50 dark:focus:border-white/50 transition-colors cursor-pointer"
                >
                  <span className={selected ? "text-black dark:text-white" : "text-black/50 dark:text-[#aaa]"}>
                    {selectedLabel || "Select Service"}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-black/50 dark:text-[#aaa] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {open && (
                  <div className="absolute z-50 top-full left-0 right-0 mt-1 rounded-lg border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 shadow-xl overflow-hidden">
                    {serviceOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setSelected(option.value);
                          setOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${
                          selected === option.value
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative group/input">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/50 dark:placeholder-[#aaa] py-[12px] h-[100px] focus:outline-none focus:border-black/50 dark:focus:border-white/50 transition-colors resize-none"
                ></textarea>
              </div>

            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full h-[52px] mt-[28px] bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest text-[14px] rounded-[6px] hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "SENDING..." : status === "sent" ? "SENT SUCCESSFULLY!" : status === "error" ? "FAILED TO SEND" : "SUBMIT →"}
            </button>

            {status === "sent" && (
              <p className="text-green-600 dark:text-green-400 text-xs text-center mt-3">Your message has been sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-xs text-center mt-3">Something went wrong. Please try again.</p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}
