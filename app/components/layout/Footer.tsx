"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { SiWhatsapp, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>

        <div className="grid gap-16 py-20 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Left */}

          <div>

            <Image
              src="/logo.png"
              alt="WebSoon"
              width={150}
              height={42}
              className="h-10 w-auto"
            />

            <p className="mt-6 max-w-sm leading-8 text-slate-600">
              We build modern websites and web applications that help
              businesses grow with clarity, performance and simplicity.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="#home" className="text-slate-600 transition hover:text-blue-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="text-slate-600 transition hover:text-blue-600">
                  Services
                </a>
              </li>

              <li>
                <a href="#process" className="text-slate-600 transition hover:text-blue-600">
                  Process
                </a>
              </li>

              <li>
                <a href="#contact" className="text-slate-600 transition hover:text-blue-600">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              <a
                href="mailto:hello@websoon.com"
                className="block text-slate-600 transition hover:text-blue-600"
              >
                hello@websoon.com
              </a>

              <a
                href="tel:+919999999999"
                className="block text-slate-600 transition hover:text-blue-600"
              >
                +91 99999 99999
              </a>

              <div className="flex items-center gap-4 pt-2">

                {/* WhatsApp */}

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="transition hover:scale-110"
                >
    <SiWhatsapp className="text-[22px]" />

                </a>

                {/* Instagram */}

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className="transition hover:scale-110"
                >
 <SiInstagram className="text-[22px]" />
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © 2026 WebSoon. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}