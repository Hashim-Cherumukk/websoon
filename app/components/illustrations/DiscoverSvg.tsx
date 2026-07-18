"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function DiscoverSvg({ active = false }: Props) {
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
      {/* outer circle */}

      <circle
        cx="90"
        cy="90"
        r="54"
        stroke="rgba(15,23,42,.14)"
        strokeWidth="2"
        fill="none"
      />

      {/* orbit */}

      <motion.circle
        cx="90"
        cy="90"
        r="54"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: .18 }}
        animate={{
          pathLength: active ? [.18,.65,.18] : [.18,.35,.18],
        }}
        transition={{
          duration:2.8,
          repeat:Infinity
        }}
      />

      {/* center */}

      <motion.circle
        cx="90"
        cy="90"
        r="12"
        fill="#2563eb"
        animate={{
          scale: active ? [1,1.12,1] : [1,1.05,1]
        }}
        transition={{
          duration:2,
          repeat:Infinity
        }}
      />

      {/* floating nodes */}

      {[0,1,2].map((i)=>(
        <motion.circle
          key={i}
          cx={90}
          cy={36}
          r="4"
          fill="white"
          stroke="#2563eb"
          strokeWidth="1.5"
          animate={{
            rotate:[0,360]
          }}
          style={{
            originX:"90px",
            originY:"90px",
          }}
          transition={{
            duration:active?6:12,
            repeat:Infinity,
            ease:"linear",
            delay:i*.7
          }}
        />
      ))}
    </motion.svg>
  );
}