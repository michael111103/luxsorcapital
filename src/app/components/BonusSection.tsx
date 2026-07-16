// src/app/components/BonusSection.tsx
"use client";

import { Eye } from "lucide-react";
import Reveal from "./ui/Reveal";
import ChatBubble from "./ui/ChatBubble";
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
            <div className="relative max-w-xl">
              {/* screenshot sits above and overlaps down into the box,
                  naturally occluding/"piercing" the top border there */}
              <div className="relative z-10 -mb-16 sm:-mb-24 px-6 sm:px-10">
                <img
                  src="/nomer2.png"
                  alt="Real Time Macro Update"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* glowing outline, no card fill — page background shows through */}
              <div className="relative rounded-3xl border border-white/25 shadow-[0_0_25px_rgba(255,255,255,0.15),0_0_60px_-10px_rgba(255,255,255,0.2)] px-6 sm:px-8 pb-6 sm:pb-8 pt-20 sm:pt-28">
                <p className="text-[15px] sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">{BONUS.items[1].boldText}</span>{" "}
                  <span className="text-white/45">{BONUS.items[1].restText}</span>
                </p>
                <img
                  src="/logo.png"
                  alt="Luxsor Capital"
                  className="absolute bottom-4 right-5 w-7 h-7 sm:w-8 sm:h-8 object-contain opacity-60"
                />
              </div>
            </div>
            <p className="mt-6 text-xs sm:text-sm text-white/30">{BONUS.items[1].number}.</p>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight mt-1">
              {BONUS.items[1].title}
            </h3>
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
