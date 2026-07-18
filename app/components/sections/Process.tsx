"use client";

import { useRef } from "react";

import Container from "../ui/Container";
import AnimatedTitle from "../ui/AnimatedTitle";
import ProcessTimeline from "../process/ProcessTimeline";
import ProcessCurveTop from "../illustrations/ProcessCurveTop";

export default function Process() {
  const fillRef  = useRef<SVGPathElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f4ede4] pb-36 pt-0 lg:pb-44"
    >
      {/* ── Dark → Light curved transition ─────────────────────────── */}
      <ProcessCurveTop />

      {/* ── Subtle background treatments ───────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blueprint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0f172a 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Very soft centred glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-100/20 blur-[160px]" />
      </div>

      {/* ── Section header — tight, all content on one screen ──────── */}
      <Container className="relative z-10 pt-20 lg:pt-32">

        <div className="mb-12 flex justify-center">
          <AnimatedTitle text="Our Process" variant="light" size="lg" center={true} />
        </div>

        <ProcessTimeline fillRef={fillRef} cardRefs={cardRefs} />

      </Container>
    </section>
  );
}