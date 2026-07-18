"use client";

import { motion } from "framer-motion";

type Props = {
  active?: boolean;
};

export default function WebsiteSvg({ active = false }: Props) {
  const animate = active
    ? {
        y: [-3, 3, -3],
      }
    : {
        y: [0, -2, 0],
      };

  return (
    <motion.svg
      viewBox="0 0 220 170"
      className="mx-auto h-40 w-full max-w-[220px]"
      animate={animate}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* orbit */}
      <motion.circle
        cx="170"
        cy="34"
        r="5"
        fill="#38bdf8"
        animate={{
          y: active ? [-4, 4, -4] : [0, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
        }}
      />

      {/* main card */}
      <rect
        x="30"
        y="38"
        width="150"
        height="95"
        rx="22"
        fill="rgba(255,255,255,.03)"
        stroke="rgba(255,255,255,.13)"
      />

      {/* globe */}

      <circle
        cx="105"
        cy="86"
        r="26"
        stroke="white"
        strokeOpacity=".35"
        strokeWidth="1.4"
        fill="none"
      />

      <motion.ellipse
        cx="105"
        cy="86"
        rx="11"
        ry="26"
        stroke="#38bdf8"
        strokeWidth="1.4"
        fill="none"
        animate={{
          rotate: 360,
        }}
        style={{
          originX: "105px",
          originY: "86px",
        }}
        transition={{
          repeat: Infinity,
          duration: active ? 4 : 10,
          ease: "linear",
        }}
      />

      <motion.ellipse
        cx="105"
        cy="86"
        rx="26"
        ry="11"
        stroke="white"
        strokeOpacity=".3"
        strokeWidth="1.2"
        fill="none"
        animate={{
          scaleX: active ? [1, 1.08, 1] : [1, 1.03, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      {/* browser line */}

      <motion.line
        x1="50"
        y1="56"
        x2="160"
        y2="56"
        stroke="rgba(255,255,255,.15)"
        strokeWidth="1"
      />

      {/* url */}

      <motion.rect
        x="66"
        y="49"
        height="5"
        rx="2.5"
        fill="#38bdf8"
        animate={{
          width: active ? [28, 70, 28] : [28, 45, 28],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      {/* stars */}

      <motion.circle
        cx="55"
        cy="120"
        r="2.3"
        fill="#38bdf8"
        animate={{
          opacity: [1, .2, 1],
          scale: [1, 1.8, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      />

      <motion.circle
        cx="165"
        cy="108"
        r="2"
        fill="white"
        fillOpacity=".45"
        animate={{
          opacity: [.3, 1, .3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
      />

      {/* floating corner element */}

      <motion.rect
        x="15"
        y="25"
        width="20"
        height="20"
        rx="7"
        fill="rgba(56,189,248,.08)"
        stroke="rgba(56,189,248,.4)"
        animate={{
          rotate: active ? [0, 8, -8, 0] : [0, 3, 0],
        }}
        style={{
          originX: "25px",
          originY: "35px",
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
        }}
      />
    </motion.svg>
  );
}