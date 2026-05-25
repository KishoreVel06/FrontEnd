"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function MetricCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [count, inView, value]);

  return (
    <div ref={ref} className="glass rounded-3xl p-6 text-center shadow-gold">
      <motion.p className="font-serif text-4xl font-bold text-forest">{rounded}</motion.p>
      <p className="mt-2 text-sm uppercase tracking-[.22em] text-emeraldDeep/65">{label}</p>
    </div>
  );
}