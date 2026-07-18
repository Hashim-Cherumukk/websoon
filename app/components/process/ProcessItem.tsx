"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  Svg: React.ComponentType;
  reverse?: boolean;
};

export default function ProcessItem({
  title,
  description,
  Svg,
  reverse = false,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: .45,
      }}
      transition={{
        duration: .75,
      }}
      className={`
        relative
        grid
        items-center
        gap-16
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      <div className="flex justify-center">

        <Svg />

      </div>

      <div>

        <h3
          className="
          text-4xl
          font-semibold
          tracking-tight
          text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-5
          max-w-md
          leading-8
          text-slate-600
          "
        >
          {description}
        </p>

      </div>
    </motion.div>
  );
}