"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { BookOpen, ClipboardList, Code2, FolderKanban, Users, Star, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    icon: BookOpen,
    title: "Study Notes",
    desc: "Clean, organized notes across hundreds of subjects — contributed and peer-reviewed by real students.",
  },
  {
    icon: ClipboardList,
    title: "Past Exams",
    desc: "Practice with real past papers from universities around the world, sorted by course and year.",
  },
  {
    icon: Code2,
    title: "Programming Resources",
    desc: "Cheat sheets, code snippets, and walkthroughs for the languages and frameworks you're learning.",
  },
  {
    icon: FolderKanban,
    title: "Student Projects",
    desc: "Browse finished projects for inspiration, or share your own to build a portfolio that gets noticed.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Ask questions, swap notes, and connect with students studying the same things — anywhere in the world.",
  },
  {
    icon: Star,
    title: "Save Favorites",
    desc: "Bookmark resources as you go and come back to your own personal, ever-growing library.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6 }}
      className="glass-panel glass-panel-hover rounded-xl2 p-6 sm:p-7 group cursor-default"
    >
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-signal/20 to-echo/15 border border-white/[0.08] grid place-items-center mb-5 group-hover:from-signal/30 group-hover:to-echo/25 transition-colors">
        <Icon className="w-5 h-5 text-signal-soft" strokeWidth={2} />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink mb-2">{feature.title}</h3>
      <p className="text-sm text-mist leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <span className="eyebrow">What you'll find</span>
          <h2 className="font-display font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] tracking-tight mt-4 text-ink">
            Everything you need, in one shared library
          </h2>
          <p className="mt-4 text-mist text-base leading-relaxed">
            Every resource is contributed by a student just like you — and curated
            so the next one is easy to find.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
