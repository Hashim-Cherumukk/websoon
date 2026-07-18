"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function WebAppSvg({ active = false }: Props) {
  const reduce = useReducedMotion();

  const animate = reduce
    ? {}
    : active
    ? {
        y: [-2, 2, -2],
      }
    : {
        y: [0, -4, 0],
      };

  return (
    <motion.svg
      width="180"
      height="140"
      viewBox="0 0 180 140"
      fill="none"
      animate={animate}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mx-auto overflow-visible"
    >
      {/* Floating code chip */}
      <motion.g
        animate={{
          y: [0, -6, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <rect
          x="8"
          y="20"
          width="32"
          height="18"
          rx="9"
          fill="rgba(56,189,248,.12)"
          stroke="rgba(56,189,248,.35)"
        />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontSize="10"
          fill="#38bdf8"
          fontFamily="monospace"
        >
          {"</>"}
        </text>
      </motion.g>

      {/* Browser */}
      <motion.g
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <rect
          x="30"
          y="28"
          width="120"
          height="82"
          rx="18"
          fill="rgba(255,255,255,.04)"
          stroke="rgba(255,255,255,.14)"
        />

        {/* Header */}
        <rect
          x="30"
          y="28"
          width="120"
          height="18"
          rx="18"
          fill="rgba(255,255,255,.05)"
        />

        {/* Traffic lights */}
        <circle cx="42" cy="37" r="2" fill="#38bdf8" />
        <circle cx="50" cy="37" r="2" fill="rgba(255,255,255,.4)" />
        <circle cx="58" cy="37" r="2" fill="rgba(255,255,255,.4)" />

        {/* Code lines */}
        <motion.rect
          animate={{
            width: [42, 60, 42],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          x="44"
          y="58"
          height="5"
          rx="2.5"
          fill="rgba(56,189,248,.9)"
        />

        <motion.rect
          animate={{
            width: [60, 45, 60],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          x="44"
          y="70"
          height="5"
          rx="2.5"
          fill="rgba(255,255,255,.25)"
        />

        <motion.rect
          animate={{
            width: [28, 54, 28],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
          x="44"
          y="82"
          height="5"
          rx="2.5"
          fill="rgba(255,255,255,.18)"
        />

        {/* Cursor */}
        <motion.rect
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          x="98"
          y="81"
          width="2"
          height="8"
          rx="1"
          fill="#38bdf8"
        />
      </motion.g>

      {/* Floating window */}
      <motion.g
        animate={{
          y: [0, 5, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <rect
          x="132"
          y="78"
          width="28"
          height="20"
          rx="8"
          fill="rgba(255,255,255,.05)"
          stroke="rgba(255,255,255,.12)"
        />

        <motion.rect
          animate={{
            width: [10, 18, 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          x="138"
          y="88"
          height="3"
          rx="2"
          fill="#38bdf8"
        />
      </motion.g>
    </motion.svg>
  );
}