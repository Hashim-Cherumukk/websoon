"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-70px)] items-center overflow-hidden bg-white pt-20 pb-16 lg:min-h-screen lg:pt-24 lg:pb-20"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

        <div
          className="absolute right-20 top-16 h-[500px] w-[500px] opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <Container className="w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[48%_52%]">

          {/* LEFT */}

          <div className="max-w-[580px] lg:translate-y-6">

            <h1 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-gray-900 sm:text-4xl lg:text-[46px]">
              We build the website 
              <br />
              your business deserves.
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-gray-500 sm:text-base">
              Whether you're starting from scratch or replacing an outdated website, we design and build modern digital experiences that help your business make a lasting first impression.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contact">
                Let's Talk
              </Button>

              <Button
                href="#services"
                variant="secondary"
                className="group"
              >
                Our Services

                <ArrowRight
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  size={18}
                />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-blue-600"
                />
                Responsive
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-blue-600"
                />
                SEO Ready
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-blue-600"
                />
                Fast Delivery
              </div>
            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[620px]">

              {/* Soft shadow behind illustration */}

              <div className="absolute inset-8 rounded-full bg-blue-100/30 blur-3xl" />

              <Image
                src="/hero-illustration.png"
                alt="WebSoon Illustration"
                width={680}
                height={680}
                priority
                className="relative z-10 h-auto w-full object-contain select-none"
              />

            </div>
          </div>

        </div>
      </Container>

      {/* Bottom Divider */}

      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="block h-10 w-full lg:h-14"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8FAFC"
            d="M0,64 C220,120 520,0 720,32 C960,70 1180,120 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

    </section>
  );
}