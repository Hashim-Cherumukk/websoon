"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);

      const sections = ["home", "services", "process", "contact"];

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${id}`);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          width: scrolled ? "min(1100px,calc(100%-32px))" : "100%",
          top: scrolled ? 18 : 0,
          borderRadius: scrolled ? 999 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className={`
fixed
left-1/2
z-50
h-20
w-full
-translate-x-1/2
border
bg-white/90
backdrop-blur-xl
${
  scrolled
    ? "border-gray-200 shadow-xl"
    : "border-transparent shadow-none"
}
`}
      >
        <Container className="flex h-full items-center justify-between">

          {/* Logo */}

          <Link
            href="#home"
            className="group flex items-center"
          >
<Image
  src="/logo.png"
  alt="WebSoon"
  width={180}
  height={48}
  priority
  className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
/>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
relative
text-[15px]
font-medium
transition-colors
${
  active === item.href
    ? "text-blue-600"
    : "text-gray-600 hover:text-black"
}
`}
              >
                {item.label}

                <motion.span
                  layoutId="active-nav"
                  className={`
absolute
left-0
-bottom-2
h-0.5
bg-blue-600
rounded-full
${
  active === item.href
    ? "w-full"
    : "w-0"
}
`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <Button href="#contact">
              Book a Call
            </Button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 transition hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </Container>
                  <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-full w-full border-t border-gray-200 bg-white lg:hidden"
              >
                <Container className="py-6">
                  <nav className="flex flex-col gap-2">
                    {links.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                          active === item.href
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <Button
                      href="#contact"
                      className="mt-4 w-full"
                      onClick={() => setMenuOpen(false)}
                    >
                      Book a Call
                    </Button>
                  </nav>
                </Container>
              </motion.div>
            )}
          </AnimatePresence>
      </motion.header>
    </>
  );
}