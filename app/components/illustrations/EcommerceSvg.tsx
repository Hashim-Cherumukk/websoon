"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function EcommerceSvg({ active = false }: Props) {
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
      {/* Bag */}

      <path
        d="M75 62H145L139 132H81L75 62Z"
        fill="rgba(255,255,255,.03)"
        stroke="rgba(255,255,255,.14)"
        strokeWidth="1.5"
      />

      {/* Handle */}

      <path
        d="M90 62C90 48 98 40 110 40C122 40 130 48 130 62"
        stroke="rgba(255,255,255,.25)"
        strokeWidth="1.6"
        fill="none"
      />

      {/* Payment Card */}

      <motion.rect
        x="132"
        y="86"
        width="46"
        height="28"
        rx="8"
        fill="rgba(255,255,255,.04)"
        stroke="rgba(255,255,255,.16)"
        animate={{
          y: active ? [-3, 3, -3] : [0, -1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.line
        x1="142"
        y1="98"
        x2="166"
        y2="98"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          opacity: [.3, 1, .3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Product */}

      <motion.rect
        x="42"
        y="86"
        width="36"
        height="42"
        rx="8"
        fill="rgba(255,255,255,.03)"
        stroke="rgba(255,255,255,.14)"
        animate={{
          rotate: active ? [0, -4, 4, 0] : [0, -2, 0],
        }}
        style={{
          originX: "60px",
          originY: "107px",
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <path
        d="M50 98H70"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M50 106H64"
        stroke="rgba(255,255,255,.22)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Orbit */}

      <motion.path
        d="M34 136C58 154 160 154 186 136"
        stroke="rgba(255,255,255,.08)"
        strokeWidth="1.2"
        fill="none"
        animate={{
          pathLength: [0, 1, 0],
        }}
        transition={{
          duration: active ? 2.5 : 5,
          repeat: Infinity,
        }}
      />

      {/* Floating dots */}

      {[0,1,2,3].map((i)=>(
        <motion.circle
          key={i}
          cx={55+i*34}
          cy={28+(i%2)*8}
          r="2.5"
          fill="#38bdf8"
          animate={{
            y:[0,-6,0],
            opacity:[.2,1,.2]
          }}
          transition={{
            duration:2.5,
            repeat:Infinity,
            delay:i*.25
          }}
        />
      ))}

      {/* Spark */}

      <motion.path
        d="M170 42L173 48L179 51L173 54L170 60L167 54L161 51L167 48Z"
        fill="white"
        animate={{
          rotate:[0,180,360],
          scale:[1,1.2,1]
        }}
        style={{
          originX:"170px",
          originY:"51px"
        }}
        transition={{
          duration:4,
          repeat:Infinity
        }}
      />
    </motion.svg>
  );
}