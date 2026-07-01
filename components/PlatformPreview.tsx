"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, RefreshCcw } from "lucide-react";
import BrowserMockup from "./BrowserMockup";

export default function PlatformPreview() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="preview" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="eyebrow">Platform preview</span>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] tracking-tight mt-4 text-ink">
            One hub for everything you study
          </h2>
          <p className="mt-4 text-mist leading-relaxed">
            A single, searchable space for notes, exams, code, and projects — built
            to feel as fast as it looks.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute -inset-16 bg-gradient-to-br from-signal/15 via-echo/10 to-transparent blur-3xl rounded-full" />

          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className="relative animate-float-slow"
          >
            <BrowserMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex absolute -left-10 top-10 glass-panel rounded-xl px-3.5 py-2.5 items-center gap-2 shadow-glass"
          >
            <Sparkles className="w-3.5 h-3.5 text-echo-soft" strokeWidth={2} />
            <span className="text-xs font-medium text-ink">Auto-tagged by subject</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="hidden md:flex absolute -right-8 bottom-6 glass-panel rounded-xl px-3.5 py-2.5 items-center gap-2 shadow-glass"
          >
            <RefreshCcw className="w-3.5 h-3.5 text-signal-soft" strokeWidth={2} />
            <span className="text-xs font-medium text-ink">Synced across devices</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
