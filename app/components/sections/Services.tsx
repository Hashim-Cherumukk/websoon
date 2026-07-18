"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Container from "../ui/Container";
import AnimatedTitle from "../ui/AnimatedTitle";

import WaveDivider from "../illustrations/WaveDivider";
import BackgroundDecor from "../illustrations/BackgroundDecor";

import WebAppSvg from "../illustrations/WebAppSvg";
import WebsiteSvg from "../illustrations/WebsiteSvg";
import UiUxSvg from "../illustrations/UiUxSvg";
import EcommerceSvg from "../illustrations/EcommerceSvg";
import PerformanceSvg from "../illustrations/PerformanceSvg";
import StrategySvg from "../illustrations/StrategySvg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Applications",
    description:
      "Scalable SaaS platforms, dashboards and business systems engineered for long-term growth.",
    svg: WebAppSvg,
  },
  {
    title: "Custom Websites",
    description:
      "Modern marketing websites that combine performance, accessibility and memorable design.",
    svg: WebsiteSvg,
  },
  {
    title: "UI / UX Design",
    description:
      "Interfaces carefully designed around clarity, usability and delightful interactions.",
    svg: UiUxSvg,
  },
  {
    title: "E-Commerce",
    description:
      "Fast online stores with secure checkout experiences and conversion-focused architecture.",
    svg: EcommerceSvg,
  },
  {
    title: "Performance",
    description:
      "Optimized loading, Core Web Vitals improvements and efficient front-end engineering.",
    svg: PerformanceSvg,
  },
  {
    title: "Technical Strategy",
    description:
      "Architecture planning, scalable systems and technical consulting for growing businesses.",
    svg: StrategySvg,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <WaveDivider className="text-[#EEF3FA]" />

      <section
        id="services"
        ref={sectionRef}
        className="relative overflow-hidden bg-[#EEF3FA] pb-24 pt-12 lg:pb-28 lg:pt-16 text-slate-900"
      >
        <BackgroundDecor />

        <Container className="relative z-10">

          <div className="mb-14 text-center">

            <AnimatedTitle text="Services" variant="light" />

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => {
              const Svg = service.svg;

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="
                    service-card
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-brand-dark
                    p-8
                    shadow-[0_10px_30px_rgba(10,15,28,0.15)]
                    hover:shadow-[0_15px_40px_rgba(10,15,28,0.25)]
                    transition-all
                    duration-300
                  "
                >
                  <div className="relative z-10">

                    <Svg active />

                    <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {service.description}
                    </p>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </Container>
      </section>
    </>
  );
}