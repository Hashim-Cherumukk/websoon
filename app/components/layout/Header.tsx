"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { navItems, ctaItem } from "../../constants/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScrollAndResize = () => {
      // Only apply the "scrolled" pill effect on desktop (1024px and above)
      if (window.innerWidth >= 1024) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(false);
      }

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

    // Run once on mount
    handleScrollAndResize();

    window.addEventListener("scroll", handleScrollAndResize);
    window.addEventListener("resize", handleScrollAndResize);
    
    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
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
          width: scrolled ? "min(940px, calc(100% - 32px))" : "100%",
          top: scrolled ? 24 : 0,
          borderRadius: scrolled ? 999 : 0,
          height: scrolled ? 68 : 80, // Slightly taller pill to accommodate the larger logo
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1], 
        }}
        className={`
          fixed left-1/2 z-50 -translate-x-1/2 
          bg-white/90 backdrop-blur-xl border
          ${scrolled ? "border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" : "border-transparent shadow-none"}
        `}
      >
        <Container className="relative flex h-full items-center justify-between">
          
          {/* Logo - Locked to h-full to prevent bouncing, size increased */}
          <Link href="#home" className="flex h-full items-center -ml-3">
            <Image
              src="/logo.webp"
              alt="WebSoon"
              width={180}
              height={48}
              priority
              className="h-auto w-[150px] lg:w-[180px] object-contain"
            />
          </Link>

          {/* Desktop Navigation - Absolutely Centered Island */}
          <nav 
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center gap-1 rounded-full border border-slate-100 bg-slate-50/50 p-1.5"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navItems.map((item) => {
              const isActive = active === item.href;
              const isHovered = hoveredLink === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredLink(item.href)}
                  className={`
                    relative px-5 py-2 text-[14px] font-semibold transition-colors duration-300
                    ${isActive || isHovered ? "text-brand-dark" : "text-brand-gray"}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Sliding Pill Background */}
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 z-0 rounded-full bg-white shadow-sm border border-slate-200"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex h-full items-center">
            <Button href={ctaItem.href} size="sm">
              {ctaItem.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full p-2 transition hover:bg-slate-100 lg:hidden text-brand-dark"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </Container>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={`
                absolute left-0 w-full bg-white lg:hidden shadow-xl
                border-t border-slate-200 top-full
              `}
            >
              <Container className="py-6">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        rounded-xl px-4 py-3 text-base font-medium transition
                        ${active === item.href ? "bg-slate-100 text-brand-dark" : "text-brand-gray hover:bg-slate-50"}
                      `}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    href={ctaItem.href}
                    className="mt-4 w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    {ctaItem.label}
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