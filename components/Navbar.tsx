"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { APP_URL, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-6xl"
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-2.5 transition-all duration-300 ${
            scrolled ? "glass-panel shadow-glass" : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-signal to-echo grid place-items-center overflow-hidden">
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-[13px] font-display font-bold text-white">S</span>
            </span>
            <span className="font-display font-semibold text-[15px] tracking-tight text-ink">
              Student Resource Hub
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-mist hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px]"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.4} />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-ink"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 glass-panel rounded-2xl px-5 py-4 flex flex-col gap-4 overflow-hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-mist hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm"
              >
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.4} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
