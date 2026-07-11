// src/app/components/CommunitySection.tsx
"use client";

import Reveal from "./ui/Reveal";
import TimelineItem from "./ui/TimelineItem";
import { LuxsorMark } from "./icons/BrandIcons";
import { COMMUNITY, ph } from "@/lib/data";

export default function CommunitySection() {
  return (
    <TimelineItem tag={COMMUNITY.number}>
      <Reveal>
        <div className="relative grid grid-cols-2 gap-2.5 sm:gap-4 max-w-xl rounded-2xl overflow-hidden p-2 border border-white/10 bg-white/[0.03] backdrop-blur-md">
          {COMMUNITY.images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden group"
            >
              <img
                src={ph(img.label, 480, 270)}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
            <LuxsorMark className="w-24 h-24" />
          </span>
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
