"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { processData } from "./processData";

gsap.registerPlugin(ScrollTrigger);

// ─── Layout constants ──────────────────────────────────────────────────────
const CARD_H          = 170;
const CONTAINER_H     = 320;
const HIGH_TOP        = 8;
const LOW_TOP         = 158;
const HIGH_CY         = HIGH_TOP + CARD_H / 2;   // = 93
const LOW_CY          = LOW_TOP  + CARD_H / 2;   // = 243
const CARD_WIDTH_FRAC = 0.19;                      // 19 % of container
const CARD_CX_FRACS   = [0.125, 0.375, 0.625, 0.875]; // card x-centres

// At what progress each card becomes active
const THRESHOLDS = [0, 0.28, 0.57, 0.86];

function buildPath(w: number): string {
  const [x1, x2, x3, x4] = CARD_CX_FRACS.map((f) => Math.round(f * w));
  const y1 = HIGH_CY, y2 = LOW_CY;
  const cp = Math.round((x2 - x1) / 2);

  return [
    `M ${x1} ${y1}`,
    `C ${x1 + cp} ${y1}, ${x2 - cp} ${y2}, ${x2} ${y2}`,
    `C ${x2 + cp} ${y2}, ${x3 - cp} ${y1}, ${x3} ${y1}`,
    `C ${x3 + cp} ${y1}, ${x4 - cp} ${y2}, ${x4} ${y2}`,
  ].join(" ");
}

// ──────────────────────────────────────────────────────────────────────────

type Props = {
  fillRef:  React.RefObject<SVGPathElement | null>;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

export default function ProcessTimeline({ fillRef, cardRefs }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const mobileFillRef = useRef<SVGPathElement>(null);
  const dotRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const [pathD, setPathD] = useState("");
  const [svgW,  setSvgW]  = useState(0);

  const gsapRef = useRef<{ tween?: gsap.core.Tween; st?: ScrollTrigger } | null>(null);

  // ── Compute path on resize ──────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current) return;

    const calc = () => {
      const w = containerRef.current!.offsetWidth;
      setSvgW(w);
      setPathD(buildPath(w));
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // ── GSAP: Desktop scroll-driven path fill (scrubbed, no pin) ────────────
  useEffect(() => {
    if (!pathD) return;
    if (window.innerWidth < 1024) return;

    const fill    = fillRef.current;
    const section = document.getElementById("process");
    if (!fill || !section) return;

    gsapRef.current?.tween?.kill();
    gsapRef.current?.st?.kill();

    gsap.set(fill, {
      attr:              { pathLength: 1 },
      strokeDasharray:   1,
      strokeDashoffset:  1,
    });

    const tween = gsap.to(fill, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start:  "top 70%",
        end:    "bottom 60%",
        scrub:  1.2,
        onUpdate(self) {
          THRESHOLDS.forEach((threshold, i) => {
            const card = cardRefs.current[i];
            if (!card) return;
            if (self.progress >= threshold) card.classList.add("is-active");
            else card.classList.remove("is-active");
          });
        },
      },
    });

    gsapRef.current = {
      tween,
      st: tween.scrollTrigger as ScrollTrigger | undefined,
    };

    return () => {
      tween.kill();
      (tween.scrollTrigger as ScrollTrigger | undefined)?.kill();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathD]);

  // ── Mobile scroll progress for the continuous curve line ──────────────────
  useEffect(() => {
    const scroller = mobileScrollRef.current;
    const fill = mobileFillRef.current;
    if (!scroller || !fill) return;

    // Set pathLength for mobile line
    gsap.set(fill, {
      attr: { pathLength: 1 },
      strokeDasharray: 1,
      strokeDashoffset: 1,
    });

    const handleScroll = () => {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (maxScroll <= 0) return;
      const progress = scroller.scrollLeft / maxScroll;
      
      // Animate line fill smoothly based on horizontal scroll
      gsap.to(fill, {
        strokeDashoffset: 1 - progress,
        duration: 0.1,
        ease: "power1.out",
      });

      // Update dots and card activations
      THRESHOLDS.forEach((threshold, i) => {
        const dot = dotRefs.current[i];
        if (dot) {
          if (progress >= threshold - 0.05) {
            dot.classList.add("is-active");
          } else {
            dot.classList.remove("is-active");
          }
        }
      });
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();

    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Card CSS positions ──────────────────────────────────────────────────
  const CARD_POSITIONS = CARD_CX_FRACS.map((cx, i) => ({
    left: `${((cx - CARD_WIDTH_FRAC / 2) * 100).toFixed(2)}%`,
    top:  i % 2 === 0 ? `${HIGH_TOP}px` : `${LOW_TOP}px`,
  }));

  return (
    <>
      {/* ── Desktop ──────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-6 hidden lg:block"
        style={{ height: `${CONTAINER_H}px` }}
      >
        {pathD && (
          <svg
            className="pointer-events-none absolute inset-0"
            width={svgW}
            height={CONTAINER_H}
            aria-hidden="true"
            style={{ overflow: "visible" }}
          >
            {/* Ghost track */}
            <path
              d={pathD}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Cyan fill */}
            <path
              ref={fillRef}
              d={pathD}
              fill="none"
              stroke="#2bc0ff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}

        {/* Cards */}
        {processData.map((item, i) => {
          const Svg = item.svg;
          const pos = CARD_POSITIONS[i];

          return (
            <motion.div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="process-card absolute overflow-hidden rounded-2xl border border-slate-200/50 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
              style={{
                left:  pos.left,
                top:   pos.top,
                width: `${CARD_WIDTH_FRAC * 100}%`,
              }}
            >
              <div className="p-6">
                <div className="process-icon mb-5">
                  <Svg />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile: snap-scroll with progressive horizontal curve lining ────────── */}
      <div className="mt-10 lg:hidden">
        {/* Mobile progressive line visualization at the top of cards */}
        <div className="mx-auto mb-6 max-w-[280px] px-6">
          <svg
            viewBox="0 0 240 24"
            className="w-full h-8"
            fill="none"
            aria-hidden="true"
          >
            {/* Ghost base line */}
            <path
              d="M 12 12 Q 60 4 120 12 T 228 12"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Progressive cyan fill line */}
            <path
              ref={mobileFillRef}
              d="M 12 12 Q 60 4 120 12 T 228 12"
              stroke="#2bc0ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Node indicators */}
            <circle cx="12" cy="12" r="3" fill="#ffffff" stroke="#2bc0ff" strokeWidth="1.5" />
            <circle cx="84" cy="9.5" r="3" fill="#ffffff" stroke="#e2e8f0" className="transition-colors duration-300" style={{ stroke: 'currentColor' }} />
            <circle cx="156" cy="14.5" r="3" fill="#ffffff" stroke="#e2e8f0" className="transition-colors duration-300" style={{ stroke: 'currentColor' }} />
            <circle cx="228" cy="12" r="3" fill="#ffffff" stroke="#e2e8f0" className="transition-colors duration-300" style={{ stroke: 'currentColor' }} />
          </svg>
        </div>

        {/* Snap container */}
        <div
          ref={mobileScrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto"
        >
          {processData.map((item, i) => {
            const Svg = item.svg;
            return (
              <div
                key={i}
                data-idx={i}
                className="mobile-process-card min-w-full snap-center px-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="process-card relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.06)] is-active"
                >
                  <div className="process-icon mb-5 flex justify-center">
                    <Svg />
                  </div>
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {processData.map((_, i) => (
            <div
              key={i}
              ref={(el) => { dotRefs.current[i] = el; }}
              className={`process-dot${i === 0 ? " is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}