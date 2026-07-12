// src/app/components/CommunitySection.tsx
"use client";

import Reveal from "./ui/Reveal";
import TimelineItem from "./ui/TimelineItem";
import { COMMUNITY } from "@/lib/data";

export default function CommunitySection() {
  return (
    <TimelineItem tag={COMMUNITY.number}>
      <Reveal>
        <div className="rounded-2xl overflow-hidden border border-white/10 max-w-xl">
          <img
            src="/gambar2.png"
            alt={COMMUNITY.boldText}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-8 max-w-xl text-base sm:text-xl leading-relaxed">
          <span className="font-semibold text-white">{COMMUNITY.boldText}</span>{" "}
          <span className="text-white/45">{COMMUNITY.restText}</span>
        </p>
      </Reveal>
    </TimelineItem>
  );
}
