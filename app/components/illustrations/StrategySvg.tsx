"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function StrategySvg({ active = false }: Props) {
  return (
    <motion.svg
      viewBox="0 0 220 170"
      className="mx-auto h-40 w-full max-w-55"
      animate={{
        y: active ? [-2, 2, -2] : [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* connection lines */}

      <path
        d="M62 48L110 84L158 48"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M62 122L110 84L158 122"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M62 48L62 122"
        stroke="rgba(255,255,255,.12)"
        strokeWidth="1.2"
      />

      <path
        d="M158 48L158 122"
        stroke="rgba(255,255,255,.12)"
        strokeWidth="1.2"
      />

      {/* animated flow */}

      <motion.circle
        r="3"
        fill="#38bdf8"
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: active ? 2.8 : 5,
          ease: "linear",
        }}
        style={{
          offsetPath: 'path("M62 48L110 84L158 122")',
        }}
      />

      <motion.circle
        r="3"
        fill="#38bdf8"
        animate={{
          offsetDistance: ["100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: active ? 3.2 : 6,
          ease: "linear",
        }}
        style={{
          offsetPath: 'path("M158 48L110 84L62 122")',
        }}
      />

      {/* nodes */}

      {[
        [62, 48],
        [158, 48],
        [110, 84],
        [62, 122],
        [158, 122],
      ].map(([x, y], i) => (
        <motion.g
          key={i}
          animate={{
            scale: active ? [1, 1.15, 1] : [1, 1.06, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.2,
          }}
        >
          <circle
            cx={x}
            cy={y}
            r="8"
            fill="rgba(255,255,255,.04)"
            stroke="rgba(255,255,255,.18)"
          />

          <circle
            cx={x}
            cy={y}
            r="2.6"
            fill="#38bdf8"
          />
        </motion.g>
      ))}

      {/* center panel */}

      <motion.rect
        x="88"
        y="64"
        width="44"
        height="40"
        rx="10"
        fill="rgba(255,255,255,.04)"
        stroke="rgba(255,255,255,.14)"
        animate={{
          scale: active ? [1, 1.04, 1] : [1, 1.02, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="98"
          x2="122"
          y1={76 + i * 8}
          y2={76 + i * 8}
          stroke="rgba(255,255,255,.32)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: [.25, 1, .25],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            delay: i * .18,
          }}
        />
      ))}

      {/* orbit */}

      <motion.circle
        cx="182"
        cy="32"
        r="3"
        fill="#38bdf8"
        animate={{
          y: active ? [-5, 5, -5] : [-2, 2, -2],
          opacity: [.3, 1, .3],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      <motion.circle
        cx="38"
        cy="138"
        r="2.5"
        fill="white"
        fillOpacity=".45"
        animate={{
          opacity: [.2, .8, .2],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
      />
    </motion.svg>
  );
}