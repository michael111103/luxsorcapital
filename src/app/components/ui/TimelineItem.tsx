// src/app/components/ui/TimelineItem.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { ReactNode, useRef } from "react";

export default function TimelineItem({
  children,
  tag,
  last = false,
}: {
  children: ReactNode;
  tag?: string;
  last?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative pl-9 sm:pl-14">
      {/* vertical line */}
      {!last && (
        <span className="absolute left-[7px] sm:left-[11px] top-6 bottom-[-2.5rem] w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent" />
      )}
      {/* dot / checkmark */}
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className={`absolute left-0 top-1 flex h-[15px] w-[15px] sm:h-[23px] sm:w-[23px] items-center justify-center rounded-full border transition-colors duration-500 ${
          inView
            ? "border-white bg-white text-black"
            : "border-white/25 bg-black text-transparent"
        }`}
      >
        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" strokeWidth={3} />
      </motion.span>

      {tag && (
        <span className="mb-4 inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-mono tracking-wider text-white/70 backdrop-blur">
          #{tag}
        </span>
      )}
      {children}
    </div>
  );
}
