"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience and goals before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Layouts and user experience are carefully planned to keep every interaction simple.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build fast, scalable websites and applications using modern technologies.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing, deployment and optimization, your product goes live with confidence.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-white py-28"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-2xl text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Process
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-slate-900">
            From idea to launch.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A clear process that keeps every project organized, transparent and focused.
          </p>

        </motion.div>

        <div className="relative mt-24">

          {/* Line */}

          <div className="absolute left-0 right-0 top-7 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative text-center lg:text-left"
              >
                {/* Circle */}

                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-sm font-semibold text-blue-600 lg:mx-0">
                  {step.number}
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </Container>

    </section>
  );    
}