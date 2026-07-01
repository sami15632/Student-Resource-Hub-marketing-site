"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { APP_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-panel rounded-xl3 px-8 sm:px-16 py-16 sm:py-20 text-center overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-gradient-to-br from-signal/40 to-echo/40 blur-[100px] rounded-full animate-pulse-glow" />

          <div className="relative">
            <span className="eyebrow">Join the hub</span>
            <h2 className="font-display font-bold text-[clamp(2.1rem,4.5vw,3.5rem)] tracking-tight mt-5 text-ink leading-[1.08]">
              Start Learning Smarter Today
            </h2>
            <p className="mt-5 text-mist max-w-md mx-auto leading-relaxed">
              Join thousands of students already learning, sharing, and growing
              together on Student Resource Hub.
            </p>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base"
            >
              Open Student Resource Hub
              <ArrowUpRight className="w-4.5 h-4.5" strokeWidth={2.4} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
