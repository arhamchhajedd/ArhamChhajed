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
          duration: props.duration || 10,
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
                <div className="p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900/80 shadow-lg shadow-black/5 dark:shadow-white/5 max-w-xs w-full transition-transform hover:-translate-y-1" key={i}>
                  <div className="text-sm text-black/80 dark:text-white/80 leading-relaxed mb-6">"{text}"</div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <div className="font-bold font-mono text-[11px] uppercase tracking-widest text-black dark:text-white truncate">{name}</div>
                      <div className="text-[9px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 truncate">{role}</div>
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
