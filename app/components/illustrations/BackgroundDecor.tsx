"use client";

import { motion } from "framer-motion";

export default function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Top Left Orb */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]"
      />

      {/* Bottom Right Orb */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[180px]"
      />

      {/* Tiny Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* Decorative Curved Stroke */}
      <svg
        className="absolute left-0 top-32 h-[500px] w-[500px] opacity-[0.06]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M40 430C90 260 250 120 460 80"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative Circle */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-24 top-40"
      >
        <svg width="180" height="180">
          <circle
            cx="90"
            cy="90"
            r="78"
            fill="none"
            stroke="rgba(255,255,255,.06)"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
        </svg>
      </motion.div>

    </div>
  );
}