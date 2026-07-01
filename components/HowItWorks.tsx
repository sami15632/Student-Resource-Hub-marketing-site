"use client";

import { motion } from "framer-motion";
import { Compass, MousePointerClick, GraduationCap, Share2 } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Compass,
    title: "Browse Resources",
    desc: "Search or filter by subject, course, or university to find exactly what you need.",
  },
  {
    n: "02",
    icon: MousePointerClick,
    title: "Open Any Resource",
    desc: "Preview notes, exams, code, or projects instantly — no downloads required.",
  },
  {
    n: "03",
    icon: GraduationCap,
    title: "Learn New Skills",
    desc: "Study at your own pace with material written by students who've been there.",
  },
  {
    n: "04",
    icon: Share2,
    title: "Share With Others",
    desc: "Upload your own notes and projects to help the next student in line.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 bg-aurora-3 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-20">
          <span className="eyebrow">The loop</span>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] tracking-tight mt-4 text-ink">
            From browsing to sharing in four steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-white/[0.08]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-px bg-gradient-to-r from-signal via-echo to-signal"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl glass-panel grid place-items-center mb-5">
                  <step.icon className="w-6 h-6 text-signal-soft" strokeWidth={2} />
                </div>
                <span className="font-mono text-xs text-haze">{step.n}</span>
                <h3 className="font-display font-semibold text-lg text-ink mt-1.5 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-mist leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
