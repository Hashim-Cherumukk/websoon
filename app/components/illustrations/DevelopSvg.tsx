"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function DevelopSvg({ active = false }: Props) {
  return (
    <motion.svg
      viewBox="0 0 180 180"
      className="h-28 w-28"
      animate={{
        y: active ? [-2, 2, -2] : [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* outer frame */}

      <rect
        x="38"
        y="38"
        width="104"
        height="104"
        rx="22"
        fill="none"
        stroke="rgba(15,23,42,.14)"
        strokeWidth="2"
      />

      {/* center block */}

      <motion.rect
        x="76"
        y="76"
        width="28"
        height="28"
        rx="8"
        fill="#2563eb"
        animate={{
          scale: active ? [1, 1.08, 1] : [1, 1.04, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* assembling blocks */}

      {[
        { x: 58, y: 58 },
        { x: 104, y: 58 },
        { x: 58, y: 104 },
        { x: 104, y: 104 },
      ].map((block, i) => (
        <motion.rect
          key={i}
          x={block.x}
          y={block.y}
          width="12"
          height="12"
          rx="3"
          fill="white"
          stroke="#2563eb"
          strokeWidth="1.5"
          animate={{
            x: active
              ? [block.x, 76 + (i % 2) * 16, block.x]
              : [block.x, block.x + 3, block.x],
            y: active
              ? [block.y, 76 + Math.floor(i / 2) * 16, block.y]
              : [block.y, block.y + 3, block.y],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* guide lines */}

      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="66"
          x2="114"
          y1={154 + i * 0}
          y2={154 + i * 0}
          stroke="rgba(15,23,42,.18)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: [.15, .7, .15],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * .15,
          }}
        />
      ))}
    </motion.svg>
  );
}