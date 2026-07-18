"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  Svg: React.ComponentType;
  x: number;
  y: number;
};

export default function ProcessStation({
  title,
  description,
  Svg,
  x,
  y,
}: Props) {
  return (
    <motion.div
      className="absolute w-[320px]"
      style={{
        left: x,
        top: y,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {/* tiny blueprint line */}

      <div className="mb-8 flex items-center gap-3">
        <div className="h-px w-10 bg-sky-500/40" />
        <div className="h-2 w-2 rounded-full bg-sky-500" />
      </div>

      <Svg />

      <h3 className="mt-7 text-[34px] font-semibold tracking-[-0.03em] text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
}