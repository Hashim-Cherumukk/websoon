"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function UiUxSvg({ active = false }: Props) {
  return (
    <motion.svg
      viewBox="0 0 220 170"
      className="mx-auto h-40 w-full max-w-[220px]"
      animate={{
        y: active ? [-3, 3, -3] : [0, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* canvas */}

      <rect
        x="38"
        y="28"
        width="145"
        height="102"
        rx="22"
        fill="rgba(255,255,255,.03)"
        stroke="rgba(255,255,255,.13)"
      />

      {/* design frame */}

      <rect
        x="56"
        y="46"
        width="74"
        height="50"
        rx="10"
        fill="none"
        stroke="rgba(255,255,255,.28)"
      />

      {/* floating circle */}

      <motion.circle
        cx="84"
        cy="70"
        r="10"
        stroke="#38bdf8"
        strokeWidth="1.5"
        fill="rgba(56,189,248,.08)"
        animate={{
          r: active ? [10, 13, 10] : [10, 11, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
      />

      {/* square */}

      <motion.rect
        x="145"
        y="54"
        width="20"
        height="20"
        rx="4"
        fill="rgba(255,255,255,.06)"
        stroke="rgba(255,255,255,.25)"
        animate={{
          rotate: active ? [0, 8, -8, 0] : [0, 3, 0],
        }}
        style={{
          originX: "155px",
          originY: "64px",
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      {/* triangle */}

      <motion.path
        d="M148 102L166 120H130Z"
        fill="rgba(56,189,248,.12)"
        stroke="#38bdf8"
        strokeWidth="1.3"
        animate={{
          y: active ? [-2, 3, -2] : [0, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
        }}
      />

      {/* pointer */}

      <motion.g
        animate={{
          x: active ? [0, 8, 0] : [0, 4, 0],
          y: active ? [0, -5, 0] : [0, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <path
          d="M104 114L114 140L120 126L134 130Z"
          fill="#ffffff"
          fillOpacity=".92"
        />
      </motion.g>

      {/* guide line */}

      <motion.line
        x1="55"
        y1="108"
        x2="166"
        y2="108"
        stroke="rgba(255,255,255,.12)"
        strokeWidth="1"
        animate={{
          opacity: [.2, .8, .2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      {/* handles */}

      {[
        [56, 46],
        [130, 46],
        [56, 96],
        [130, 96],
      ].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="2.3"
          fill="#38bdf8"
          animate={{
            scale: active ? [1, 1.6, 1] : [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: i * 0.15,
          }}
        />
      ))}
    </motion.svg>
  );
}