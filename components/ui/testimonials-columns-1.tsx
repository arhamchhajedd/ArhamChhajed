"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 sm:gap-6 pb-4 sm:pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="p-5 sm:p-6 md:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-zinc-900/90 shadow-lg shadow-black/5 dark:shadow-white/5 w-full max-w-[320px] sm:max-w-[360px] transition-transform hover:-translate-y-1"
                  key={i}
                >
                  <div className="text-xs sm:text-sm text-black/80 dark:text-white/80 leading-relaxed mb-5 sm:mb-6 font-sans">
                    &ldquo;{text}&rdquo;
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <div className="font-bold font-mono text-xs uppercase tracking-widest text-black dark:text-white">
                        {name}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 mt-1">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
