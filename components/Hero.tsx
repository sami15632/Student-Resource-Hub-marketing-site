"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";
import { APP_URL } from "@/lib/constants";
import BrowserMockup from "./BrowserMockup";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useTransform(mvY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mvX, [-0.5, 0.5], [-8, 8]);

  // The constellation is visible on every screen — it spins on its own
  // clock (see HeroScene), it was never waiting for a mouse to move. What
  // changes by device is just render cost: fewer nodes and a lower pixel
  // ratio on phones, full density (plus mouse-tilt) on desktop.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Aurora wash */}
      <div className="absolute inset-0 bg-aurora-1" />
      <div className="absolute inset-0 bg-aurora-2" />
      <div className="absolute inset-0 bg-aurora-3" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-60 bg-grid-lines animate-grid-drift"
        style={{ backgroundSize: "64px 64px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />

      {/* Constellation — full-bleed ambient backdrop on mobile (it auto-
          rotates on its own; no touch needed), anchored to the right at
          full strength on desktop where it pairs with the mockup. */}
      <div
        aria-hidden
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[62%] opacity-40 lg:opacity-100"
      >
        <HeroScene
          nodeCount={isDesktop ? 40 : 22}
          maxDpr={isDesktop ? 1.5 : 1}
          variant={isDesktop ? "desktop" : "mobile"}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow inline-flex items-center gap-2 mb-5"
            >
              <Compass className="w-3.5 h-3.5" strokeWidth={2.2} />
              For students, by students
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-bold tracking-tight text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.04]"
            >
              <span className="text-gradient">Learn.</span>{" "}
              <span className="text-gradient">Share.</span>{" "}
              <span className="text-gradient">Grow.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 text-lg text-mist max-w-lg leading-relaxed"
            >
              Discover study notes, past exams, programming resources, tutorials,
              projects, and educational content shared by students worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px]"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px]"
              >
                Explore Resources
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-12 flex items-center gap-6 text-xs text-haze font-mono"
            >
              <span>10K+ resources</span>
              <span className="w-1 h-1 rounded-full bg-haze" />
              <span>10+ universities</span>
              <span className="w-1 h-1 rounded-full bg-haze" />
              <span>Free, always</span>
            </motion.div>
          </div>

          {/* Floating mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative animate-float"
          >
            <div className="absolute -inset-10 bg-gradient-to-br from-signal/20 to-echo/20 blur-3xl rounded-full" />
            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
