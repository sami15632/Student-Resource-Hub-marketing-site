"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is Student Resource Hub free?",
    a: "Yes — completely free. Every note, exam, and project on the platform is free to browse, open, and download, with no hidden tiers.",
  },
  {
    q: "Do I need an account?",
    a: "You can browse most resources without one. Creating a free account lets you save favorites and upload your own resources to share.",
  },
  {
    q: "What resources are available?",
    a: "Study notes, past exams, programming cheat sheets and code snippets, student projects, and tutorials — contributed by students from universities worldwide.",
  },
  {
    q: "Can I share my own resources?",
    a: "Absolutely. Uploading your notes, past papers, or projects takes a couple of minutes, and it's one of the best ways to give back to the community.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-14">
          <span className="eyebrow">Good to know</span>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] tracking-tight mt-4 text-ink">
            Frequently asked questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass-panel rounded-xl2 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-ink text-[15px]">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-7 h-7 rounded-full bg-white/[0.06] grid place-items-center"
                  >
                    <Plus className="w-3.5 h-3.5 text-mist" strokeWidth={2.2} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-mist leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
