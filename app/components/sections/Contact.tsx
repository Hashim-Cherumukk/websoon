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
      className="bg-[#F8FAFC] py-20 lg:py-24"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-[24px] bg-[#EEF3FA] p-6 lg:p-10"
        >

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">

            {/* LEFT */}

            <div className="max-w-lg">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Contact
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 lg:text-4xl">
                Let's build something worth sharing.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether you're starting from scratch or improving an
                existing product, we'd love to hear your idea and help
                shape the next step.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">

                <a
                  href="https://wa.me/7025788964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300 px-7 py-3 text-sm lg:text-base bg-[#25D366] text-white hover:bg-[#20ba5a] hover:shadow-lg hover:shadow-green-500/20 active:scale-95 cursor-pointer"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="mr-2 h-4 w-4 lg:h-5 lg:w-5 fill-current"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963-1.862-1.862-4.339-2.887-6.974-2.888-5.438 0-9.863 4.372-9.867 9.8.001 1.977.52 3.905 1.508 5.62l-.99 3.61 3.733-.967zm12.355-6.853c-.334-.167-1.974-.974-2.278-1.084-.303-.11-.524-.167-.745.167-.221.334-.857 1.084-1.05 1.302-.193.218-.386.244-.72.077-.334-.167-1.409-.52-2.684-1.657-1.01-0.9-1.691-2.012-1.889-2.347-.197-.334-.021-.515.146-.681.15-.15.334-.386.5-.58.167-.193.221-.334.334-.556.11-.221.055-.416-.027-.58-.083-.167-.745-1.794-1.02-2.459-.268-.644-.54-.556-.745-.567-.192-.01-.413-.012-.634-.012-.221 0-.58.083-.884.416-.304.334-1.16 1.135-1.16 2.767 0 1.631 1.187 3.206 1.353 3.428.167.221 2.335 3.564 5.657 5.002.789.342 1.406.547 1.887.7.792.25 1.512.215 2.081.13.634-.094 1.974-.806 2.252-1.583.278-.778.278-1.444.195-1.583-.083-.139-.304-.221-.637-.388z" />
                  </svg>
                  WhatsApp
                </a>

                <Button
                  href="tel:+91 7025788964"
                  variant="secondary"
                  size="md"
                >
                  <Phone
                    size={16}
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
    className="w-full max-w-[200px] lg:max-w-[240px] h-auto select-none"
    priority
  />

</div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}