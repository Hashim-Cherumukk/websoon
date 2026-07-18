"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function PerformanceSvg({ active = false }: Props) {
  return (
    <motion.svg
      viewBox="0 0 220 170"
      className="mx-auto h-40 w-full max-w-[220px]"
      animate={{
        y: active ? [-2, 2, -2] : [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* outer arc — board, stays fixed */}

      <path
        d="M48 112 A62 62 0 0 1 172 112"
        stroke="rgba(255,255,255,.12)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* cyan progress — syncs with needle revving/drawing */}

      <motion.path
        d="M48 112 A62 62 0 0 1 172 112"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        animate={{
          pathLength: active 
            ? [0.111, 0.222, 0.333, 0.444, 0.556, 0.667, 0.778, 0.889, 0.878, 0.894, 0.883, 0.889, 0.778, 0.667, 0.556, 0.444, 0.333, 0.222, 0.111, 0.111, 0.111]
            : [0.25, 0.333, 0.417, 0.5, 0.583, 0.5, 0.417, 0.333, 0.25]
        }}
        strokeDasharray="1"
        strokeDashoffset="0"
        transition={{
          duration: active ? 2.8 : 3.5,
          repeat: Infinity,
          ease: "linear",
          times: active 
            ? [0, 0.034, 0.068, 0.103, 0.137, 0.171, 0.206, 0.24, 0.32, 0.40, 0.48, 0.56, 0.594, 0.628, 0.663, 0.697, 0.731, 0.766, 0.80, 0.90, 1.00]
            : [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1.0],
        }}
      />

      {/* center */}

      <circle
        cx="110"
        cy="112"
        r="7"
        fill="white"
      />

      {/* speed needle */}

      <motion.line
        x1={110}
        y1={112}
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{
          x2: active 
            ? [55.5, 65.6, 81.0, 99.9, 120.1, 139.0, 154.4, 164.5, 163.8, 164.8, 164.1, 164.5, 154.4, 139.0, 120.1, 99.9, 81.0, 65.6, 55.5, 55.5, 55.5]
            : [69.0, 81.0, 95.0, 110.0, 125.0, 110.0, 95.0, 81.0, 69.0],
          y2: active 
            ? [92.2, 74.7, 61.8, 54.9, 54.9, 61.8, 74.7, 92.2, 90.3, 93.1, 91.2, 92.2, 74.7, 61.8, 54.9, 54.9, 61.8, 74.7, 92.2, 92.2, 92.2]
            : [71.0, 61.8, 56.0, 54.0, 56.0, 54.0, 56.0, 61.8, 71.0]
        }}
        transition={{
          duration: active ? 2.8 : 3.5,
          repeat: Infinity,
          ease: "linear",
          times: active 
            ? [0, 0.034, 0.068, 0.103, 0.137, 0.171, 0.206, 0.24, 0.32, 0.40, 0.48, 0.56, 0.594, 0.628, 0.663, 0.697, 0.731, 0.766, 0.80, 0.90, 1.00]
            : [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1.0],
        }}
      />

      {/* floating speed lines */}

      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1={30}
          x2={56}
          y1={64 + i * 14}
          y2={64 + i * 14}
          stroke="rgba(255,255,255,.22)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            x: active ? [0, 16, 0] : [0, 8, 0],
            opacity: [.15, 1, .15],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            delay: i * .18,
          }}
        />
      ))}

      {/* particles */}

      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx={70 + i * 24}
          cy="42"
          r="2.5"
          fill="#38bdf8"
          animate={{
            y: active ? [0, 8, 0] : [0, 4, 0],
            opacity: [.2, 1, .2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * .2,
          }}
        />
      ))}

      {/* floating chip */}

      <motion.rect
        x="148"
        y="26"
        width="38"
        height="20"
        rx="10"
        fill="rgba(255,255,255,.04)"
        stroke="rgba(255,255,255,.14)"
        animate={{
          y: active ? [-4, 4, -4] : [0, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      <motion.line
        x1="158"
        y1="36"
        x2="176"
        y2="36"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          opacity: [.3, 1, .3],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      />
    </motion.svg>
  );
}