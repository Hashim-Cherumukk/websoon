"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function LaunchSvg({ active = false }: Props) {
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
      {/* trajectory */}

      <path
        d="M48 132C78 108 98 82 132 48"
        stroke="rgba(15,23,42,.16)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* animated trail */}

      <motion.path
        d="M48 132C78 108 98 82 132 48"
        stroke="#2563eb"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: .15 }}
        animate={{
          pathLength: active ? [.15,.9,.15] : [.15,.45,.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* launch point */}

      <circle
        cx="48"
        cy="132"
        r="6"
        fill="white"
        stroke="#2563eb"
        strokeWidth="2"
      />

      {/* destination */}

      <motion.circle
        cx="132"
        cy="48"
        r="8"
        fill="#2563eb"
        animate={{
          scale: active ? [1,1.25,1] : [1,1.08,1],
        }}
        transition={{
          duration:2,
          repeat:Infinity
        }}
      />

      {/* flying object */}

      <motion.g
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration: active ? 2.5 : 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          offsetPath: 'path("M48 132C78 108 98 82 132 48")',
        }}
      >
        <circle
          r="4"
          fill="white"
          stroke="#2563eb"
          strokeWidth="2"
        />
      </motion.g>

      {/* spark */}

      {[0,1,2].map((i)=>(
        <motion.circle
          key={i}
          cx={144+i*6}
          cy={38-i*4}
          r="2"
          fill="#2563eb"
          animate={{
            opacity:[.2,1,.2],
            scale:[1,1.6,1]
          }}
          transition={{
            duration:2,
            repeat:Infinity,
            delay:i*.2
          }}
        />
      ))}
    </motion.svg>
  );
}