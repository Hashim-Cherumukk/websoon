"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] py-28"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-[36px] bg-[#EEF3FA] p-10 lg:p-16"
        >

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_360px]">

            {/* LEFT */}

            <div className="max-w-xl">

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                Contact
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl">
                Let's build something worth sharing.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you're starting from scratch or improving an
                existing product, we'd love to hear your idea and help
                shape the next step.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button
                  href="https://wa.me/7025788964"
                  size="lg"
                >
                  <MessageCircle
                    size={18}
                    className="mr-2"
                  />

                  WhatsApp
                </Button>

                <Button
                  href="tel:+91 7025788964"
                  variant="secondary"
                  size="lg"
                >
                  <Phone
                    size={18}
                    className="mr-2"
                  />

                  Schedule a Call
                </Button>

              </div>

            </div>

            {/* RIGHT */}

<div className="flex justify-center lg:justify-end">

  <Image
    src="/contact-illustration.png"
    alt="Contact Illustration"
    width={420}
    height={420}
    className="w-full max-w-[340px] lg:max-w-[400px] h-auto select-none"
    priority
  />

</div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}