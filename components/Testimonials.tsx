"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Had a good experience working with Arham on my portfolio website. He understood what I was looking for and made the website look clean and professional. He was easy to communicate with and made changes based on my feedback. Happy with how it turned out.",
    name: "Rishabh Manwatkar",
    role: "Model Portfolio Website",
  },
  {
    text: "Worked with Arham on our SaaS product and it was a good experience. He understood the idea and helped us bring it to life. We discussed things along the way, made changes whenever needed, and he was always open to feedback. Would definitely consider working with him again.",
    name: "Arman Inamdar",
    role: "SaaS Product Development",
  },
  {
    text: "Arham developed my website for my legal practice. I wanted something professional and simple where people could easily understand my services. He understood my requirements and built the website accordingly. Overall, had a smooth experience working with him.",
    name: "Praveen Shinde",
    role: "Lawyer Website Development",
  },
  {
    text: "Hi Arham, Thank you for your sessions on Vibe coding, it was truly helpful and i got good knowledge. It was clear explanation and with tips on how to get the best out of it. I will surely be in touch with you for a few more sessions. Thank you! :)",
    name: "Shuyeb Mohammed",
    role: "Founder • Vibe Coding Mentorship",
  },
];

const firstColumn = [testimonials[0], testimonials[1], testimonials[0], testimonials[1]];
const secondColumn = [testimonials[2], testimonials[3], testimonials[2], testimonials[3]];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-50 dark:bg-black w-full py-16 sm:py-20 md:py-32 relative transition-colors duration-300">
      <div className="w-full max-w-[1400px] px-4 mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 w-full">
          
          {/* Left Side: Title & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-0">
            <div className="flex flex-col gap-6">
              <span className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/20 pb-2 w-fit transition-colors duration-300">
                TESTIMONIALS
              </span>

              <h2
                className="text-4xl min-[380px]:text-5xl sm:text-6xl md:text-[8vw] lg:text-[7vw] leading-[0.85] font-bold text-black dark:text-white uppercase tracking-normal"
                style={{ fontFamily: 'var(--font-bebas-neue)' }}
              >
                WHAT OUR CLIENTS SAY
              </h2>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10 lg:mt-auto pb-0 pt-8 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col">
                <span
                  className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  20+
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-black/40 dark:text-white/40 tracking-widest uppercase font-semibold">
                  CLIENTS
                </span>
              </div>

              <div className="flex flex-col">
                <span
                  className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
                  style={{ fontFamily: 'var(--font-geist-sans)' }}
                >
                  4+
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-black/40 dark:text-white/40 tracking-widest uppercase font-semibold">
                  MENTORSHIPS DONE (VIBE CODING)
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Columns */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end gap-3 sm:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[520px] sm:h-[600px] md:h-[750px] overflow-hidden -mx-4 sm:mx-0 px-2 sm:px-0">
            <TestimonialsColumn testimonials={firstColumn} duration={20} className="w-full max-w-[340px] flex justify-center" />
            <TestimonialsColumn testimonials={secondColumn} duration={24} className="mt-12 hidden min-[500px]:flex w-full max-w-[340px] justify-center" />
          </div>

        </div>
      </div>
    </section>
  );
}
