"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/gallery/7.png",

  "/gallery/2.png",
  
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  
  "/gallery/6.png",
  
  "/gallery/8.png",
  "/gallery/9.png",
  "/gallery/10.png",
  "/gallery/1.png",
  "/gallery/11.png",
  
  "/gallery/12.png",
  "/gallery/13.png",
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-transparent overflow-hidden">
      <div
        ref={gallery}
        className="relative box-border flex h-[250vh] md:h-[150vh] gap-[3vw] md:gap-[2vw] overflow-hidden bg-transparent pt-[10vh] md:p-[2vw] justify-center"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} className="hidden md:flex top-[-45%]" />
        
        <Column images={[
          { src: images[0], className: "md:hidden" },
          { src: images[1], className: "md:hidden" },
          { src: images[2], className: "md:hidden" },
          images[3], images[4], images[5]
        ]} y={y2} className="top-[-20%] md:top-[-95%]" />
        
        <Column images={[
          images[6], images[7], images[8],
          { src: images[9], className: "md:hidden" },
          { src: images[10], className: "md:hidden" },
          { src: images[11], className: "md:hidden" }
        ]} y={y3} className="top-[0%] md:top-[-45%]" />
        
        <Column images={[images[9], images[10], images[11]]} y={y4} className="hidden md:flex top-[-75%]" />
      </div>
    </main>
  );
};

type ImageItem = {
  src: string;
  className?: string;
};

type ColumnProps = {
  images: (string | ImageItem)[];
  y: MotionValue<number>;
  className?: string;
};

const Column = ({ images, y, className = "" }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex h-full w-[45%] md:w-1/4 min-w-[140px] md:min-w-[250px] flex-col gap-[4vw] md:gap-[2vw] ${className}`}
      style={{ y }}
    >
      {images.map((item, i) => {
        const src = typeof item === "string" ? item : item.src;
        const itemClass = typeof item === "string" ? "" : item.className || "";
        return (
          <div key={i} className={`relative h-full w-full overflow-hidden rounded-2xl ${itemClass}`}>
            <Image
              src={src}
              alt="image"
              fill
              className="pointer-events-none object-cover object-top"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export { Skiper30 };
