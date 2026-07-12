// src/app/components/CurriculumSection.tsx
"use client";

import Reveal from "./ui/Reveal";
import TimelineItem from "./ui/TimelineItem";
import { CURRICULUM_INTRO } from "@/lib/data";

export default function CurriculumSection() {
  return (
    <TimelineItem tag={CURRICULUM_INTRO.number}>
      <Reveal>
        <div className="rounded-2xl overflow-hidden border border-white/10 max-w-xl">
          <img
            src="/gambar1.png"
            alt={CURRICULUM_INTRO.boldText}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
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
