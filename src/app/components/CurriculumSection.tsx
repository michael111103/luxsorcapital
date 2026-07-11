// src/app/components/CurriculumSection.tsx
"use client";

import {
  Layers,
  Waves,
  Newspaper,
  Target,
  LineChart,
  Wallet,
  Brain,
  Landmark,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import Reveal from "./ui/Reveal";
import TimelineItem from "./ui/TimelineItem";
import { CURRICULUM_GRID, CURRICULUM_INTRO } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  layers: Layers,
  waves: Waves,
  newspaper: Newspaper,
  target: Target,
  lineChart: LineChart,
  wallet: Wallet,
  brain: Brain,
  landmark: Landmark,
  shieldCheck: ShieldCheck,
};

export default function CurriculumSection() {
  return (
    <TimelineItem tag={CURRICULUM_INTRO.number}>
      <Reveal>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl">
          {CURRICULUM_GRID.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={i}
                className="group relative aspect-square rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-2.5 sm:p-4 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:-translate-y-1"
              >
                <span className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/[0.06] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-gradient-to-br from-white/15 to-white/0 border border-white/10">
                  <Icon className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-white/85" />
                </span>
                <div>
                  <p className="text-[9px] sm:text-[11px] uppercase tracking-wider text-white/35">
                    {item.category}
                  </p>
                  <p className="text-[10.5px] sm:text-[13px] font-medium text-white/90 leading-tight mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-8 max-w-xl text-base sm:text-xl leading-relaxed">
          <span className="font-semibold text-white">{CURRICULUM_INTRO.boldText}</span>{" "}
          <span className="text-white/45">{CURRICULUM_INTRO.restText}</span>
        </p>
      </Reveal>
    </TimelineItem>
  );
}
