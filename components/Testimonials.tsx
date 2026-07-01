"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  color: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Liya M.",
    role: "Computer Science, AAU",
    quote: "Found a full past-exam archive for my data structures course the night before finals. Genuinely saved my semester.",
    color: "from-signal/40 to-signal/10",
  },
  {
    name: "Daniel K.",
    role: "Mechanical Engineering, Bahir Dar Univ.",
    quote: "I uploaded my thermodynamics notes mostly for fun, and now they're one of the most-saved resources in my course tag.",
    color: "from-echo/40 to-echo/10",
  },
  {
    name: "Priya N.",
    role: "Web Development, NUS",
    quote: "The programming resources section is better organized than most paid courses I've tried. Clean, searchable, no clutter.",
    color: "from-signal/40 to-echo/10",
  },
  {
    name: "Tomás R.",
    role: "Statistics, Univ. of Toronto",
    quote: "I use it mostly to browse other students' final projects before starting my own — it's like a free mentor.",
    color: "from-echo/40 to-signal/10",
  },
  {
    name: "Amara O.",
    role: "Biochemistry, Univ. of Lagos",
    quote: "Past exams from universities I'd never even heard of, sorted by course code. It's an underrated way to practice.",
    color: "from-signal/30 to-echo/20",
  },
  {
    name: "Noah B.",
    role: "Software Engineering, TU Munich",
    quote: "Favoriting resources as I go has basically become my personal study library. I check it more than my own notes app.",
    color: "from-echo/30 to-signal/20",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass-panel rounded-xl2 p-6 w-[320px] shrink-0 flex flex-col gap-4">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-signal-soft text-signal-soft" strokeWidth={0} />
        ))}
      </div>
      <p className="text-sm text-ink/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-2">
        <span
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} grid place-items-center font-display font-semibold text-sm text-ink shrink-0`}
        >
          {t.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-medium text-ink">{t.name}</p>
          <p className="text-xs text-mist">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Loved by students</span>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] tracking-tight mt-4 text-ink">
            Real notes. Real students. Real results.
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent z-10" />

        <div className="flex gap-5 w-max animate-scroll-x hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
