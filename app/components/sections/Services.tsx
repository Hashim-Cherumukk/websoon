"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  PenTool,
} from "lucide-react";

import Container from "../ui/Container";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern websites built for performance, SEO and lasting first impressions.",
    active: true,
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description:
      "Custom business software, dashboards and portals that scale with you.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    description:
      "Simple, intuitive interfaces designed around real people and real goals.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-28"
    >
      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-2xl text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Services
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-slate-900">
            What we build.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Digital products designed to help businesses grow with confidence.
          </p>

        </motion.div>

        {/* Services */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

                  {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className={`
                relative rounded-[26px]
                border
                bg-white
                px-8
                py-10
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                ${
                  service.active
                    ? "border-blue-200 shadow-lg"
                    : "border-slate-200 shadow-sm"
                }
              `}
            >
              {/* Top Accent */}

              {service.active && (
                <div className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-full bg-blue-600" />
              )}

              {/* Icon */}

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <Icon
                  size={30}
                  strokeWidth={1.8}
                  className="text-blue-600"
                />
              </div>

              {/* Title */}

              <h3 className="mt-8 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

    </Container>
  </section>
);
}