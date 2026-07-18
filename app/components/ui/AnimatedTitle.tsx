"use client";

import { motion, Variants } from "framer-motion";

type Props = {
  text: string;
  /** "dark" = white text (for dark backgrounds, e.g. Services).
   *  "light" = slate-900 text (for light backgrounds, e.g. Process).
   *  Defaults to "dark". */
  variant?: "dark" | "light";
  size?: "lg" | "md";
  center?: boolean;
};

export default function AnimatedTitle({ text, variant = "dark", size = "lg", center = false }: Props) {
  const characters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
    },
  };

  const colorClass = variant === "light" ? "text-slate-900" : "text-white";
  const sizeClass = size === "md" 
    ? "text-3xl sm:text-4xl md:text-5xl" 
    : "text-5xl sm:text-6xl md:text-8xl";
  const centerClass = center ? "justify-center" : "";

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`flex flex-wrap overflow-hidden font-bold tracking-tight ${sizeClass} ${colorClass} ${centerClass}`}
      style={{ perspective: "1000px" }}
    >
      {characters.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block origin-bottom"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
}