// src/app/components/BonusSection.tsx
"use client";

import { Eye, Radio } from "lucide-react";
import Reveal from "./ui/Reveal";
import ChatBubble from "./ui/ChatBubble";
import { LuxsorMark } from "./icons/BrandIcons";
import { BONUS } from "@/lib/data";

export default function BonusSection() {
  return (
    <section id="bonus" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-center text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 max-w-md mx-auto mb-16 sm:mb-20">
            {BONUS.eyebrow}
          </p>
        </Reveal>

        <div className="flex flex-col gap-16 sm:gap-24">
          {/* 01 — Monthly Live Market Update */}
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-white/10 max-w-2xl relative">
              <img
                src="/live.png"
                alt={BONUS.items[0].title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Live
              </span>
              <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[11px] text-white/80">
                <Eye className="w-3 h-3" /> 2.3K Watching
              </span>
            </div>
            <p className="mt-6 text-xs sm:text-sm text-white/30">{BONUS.items[0].number}.</p>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight mt-1">
              {BONUS.items[0].title}
            </h3>
            <p className="mt-3 max-w-xl text-[15px] sm:text-lg leading-relaxed">
              <span className="font-semibold text-white">{BONUS.items[0].boldText}</span>{" "}
              <span className="text-white/45">{BONUS.items[0].restText}</span>
            </p>
          </Reveal>

          {/* 02 — Real Time Macro Update */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-6 max-w-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <LuxsorMark className="w-5 h-5" />
                <span className="text-sm font-semibold">Luxsor Capital</span>
                <span className="text-white/30 text-xs ml-auto flex items-center gap-1">
                  <Radio className="w-3 h-3" /> Market Update
                </span>
              </div>
              <ChatBubble
                name={BONUS.items[1].chat!.name}
                time={BONUS.items[1].chat!.time}
                lines={BONUS.items[1].chat!.lines}
              />
            </div>
            <p className="mt-6 text-xs sm:text-sm text-white/30">{BONUS.items[1].number}.</p>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight mt-1">
              {BONUS.items[1].title}
            </h3>
            <p className="mt-3 max-w-xl text-[15px] sm:text-lg leading-relaxed">
              <span className="font-semibold text-white">{BONUS.items[1].boldText}</span>{" "}
              <span className="text-white/45">{BONUS.items[1].restText}</span>
            </p>
          </Reveal>

          {/* 03 — Trading & Investment Ideas */}
          <Reveal>
            <div className="max-w-xl">
              <ChatBubble
                name={BONUS.items[2].chat!.name}
                time={BONUS.items[2].chat!.time}
                lines={BONUS.items[2].chat!.lines}
                chart
              />
            </div>
            <p className="mt-6 text-xs sm:text-sm text-white/30">{BONUS.items[2].number}.</p>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight mt-1">
              {BONUS.items[2].title}
            </h3>
            <p className="mt-3 max-w-xl text-[15px] sm:text-lg leading-relaxed">
              <span className="font-semibold text-white">{BONUS.items[2].boldText}</span>{" "}
              <span className="text-white/45">{BONUS.items[2].restText}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
