"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".reveal-text", {
      y: "100%",
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.18,
      delay: 0.15,
    })
    .from(".reveal-sub", {
      y: 15,
      opacity: 0,
      duration: 0.8,
    }, "-=0.8")
    .from(".reveal-btn", {
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
    }, "-=0.6");

    // Mouse parallax for the floating depth shapes
    const shapes = document.querySelectorAll(".floating-shape");
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(shapes, {
        x: xPos,
        y: yPos,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, { scope: heroRef });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex h-[68vh] min-h-[550px] items-center justify-center overflow-hidden bg-white pt-20"
    >
      {/* Dynamic Back-Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute -right-[5%] top-[5%] h-[450px] w-[450px] rounded-full bg-brand-cyan/15 blur-[90px]" />
        <div className="floating-shape absolute -left-[5%] top-[15%] h-[400px] w-[400px] rounded-full bg-brand-blue/10 blur-[100px]" />
        
        {/* Abstract structural grid line instead of noisy AI dots */}
        <div className="absolute left-1/4 top-0 h-full w-px bg-slate-100/60" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-slate-100/60" />
      </div>

      <Container className="relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Crisp Bold Typography */}
        <h1 className="heading max-w-[950px] text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-brand-dark sm:text-5xl md:text-6xl lg:text-[70px]">
          <div className="overflow-hidden pb-1">
            <div className="reveal-text inline-block w-full">We build the website</div>
          </div>
          <div className="overflow-hidden pb-1">
            <div className="reveal-text inline-block w-full">
              your business <span className="text-gradient">deserves.</span>
            </div>
          </div>
        </h1>

        {/* Dense Subtitle */}
        <p className="reveal-sub mx-auto mt-6 max-w-[580px] text-sm leading-relaxed text-brand-gray sm:text-base">
          Whether you're starting from scratch or replacing an outdated website, we design and build modern digital experiences that help your business make a lasting first impression.
        </p>

        {/* Minimal Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="reveal-btn">
            <Button href="#contact" size="md">
              Let's Talk
            </Button>
          </div>
          
          <div className="reveal-btn">
            <Button
              href="#services"
              variant="secondary"
              size="md"
              className="group"
            >
              Our Services
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={16}
              />
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}