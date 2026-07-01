"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Library, Users, Building2, Zap, type LucideIcon } from "lucide-react";

function useCountUp(target: number, inView: boolean, duration = 1.6) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    function step(ts: number) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

function NumberStat({
  target,
  suffix,
  label,
  icon: Icon,
}: {
  target: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useCountUp(target, inView);

  return (
    <div ref={ref} className="glass-panel glass-panel-hover rounded-xl2 p-7 text-center">
      <Icon className="w-5 h-5 text-signal-soft mx-auto mb-4" strokeWidth={2} />
      <div className="font-display font-bold text-4xl sm:text-5xl text-gradient tabular-nums">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-mist">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <NumberStat target={10} suffix="K+" label="Resources" icon={Library} />
          <NumberStat target={15} suffix="K+" label="Students" icon={Users} />
          <NumberStat target={10} suffix="+" label="Universities" icon={Building2} />
          <div className="glass-panel glass-panel-hover rounded-xl2 p-7 text-center flex flex-col items-center justify-center">
            <Zap className="w-5 h-5 text-echo-soft mx-auto mb-4" strokeWidth={2} />
            <div className="font-display font-bold text-2xl sm:text-3xl text-gradient leading-tight">
              Fast &amp; Free
            </div>
            <p className="mt-2 text-sm text-mist">Access, always</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
