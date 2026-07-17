// src/app/components/BonusSection.tsx
"use client";

import { Eye } from "lucide-react";
import Reveal from "./ui/Reveal";
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
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/25" />
              <p className="shrink-0 text-xl sm:text-3xl font-bold tracking-tight whitespace-nowrap">
                <span className="mr-1.5 align-middle text-sm sm:text-base font-normal text-white/35">
                  {BONUS.items[1].number}.
                </span>
                <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                  {BONUS.items[1].title}
                </span>
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/25" />
            </div>

            <div className="relative max-w-xl">
              {/* bigger image, pulled further down so it sits close to the
                  paragraph text */}
              <div className="relative z-10 -mb-32 sm:-mb-40 px-2 sm:px-4">
                <img
                  src="/nomer2.png"
                  alt="Real Time Macro Update"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* plain thin line, no glow — left side deliberately has no
                  border at all, so the loop reads as broken/interrupted there */}
              <div className="relative rounded-3xl border-t border-r border-b border-white/30 px-6 sm:px-8 pb-12 sm:pb-16 pt-16 sm:pt-20">
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
          </Reveal>

          {/* 03 — Trading & Investment Ideas */}
          <Reveal>
            <div className="relative max-w-xl">
              {/* image, positioned/sized like the reference, overlapping
                  down into the box */}
              <div className="relative z-10 -mb-20 sm:-mb-28 px-2 sm:px-4">
                <img
                  src="/nomer3.png"
                  alt="Trading & Investment Ideas"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>

              {/* plain thin line, no glow — both left AND right sides
                  deliberately have no border, so the loop reads as
                  broken/interrupted on both sides */}
              <div className="relative rounded-3xl border-t border-b border-white/30 px-6 sm:px-8 pb-12 sm:pb-16 pt-28 sm:pt-36">
                <p className="text-xl sm:text-3xl font-bold tracking-tight mb-3">
                  <span className="mr-1.5 align-middle text-sm sm:text-base font-normal text-white/35">
                    {BONUS.items[2].number}.
                  </span>
                  <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                    {BONUS.items[2].title}
                  </span>
                </p>
                <p className="text-[15px] sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">{BONUS.items[2].boldText}</span>{" "}
                  <span className="text-white/45">{BONUS.items[2].restText}</span>
                </p>
                <img
                  src="/logo.png"
                  alt="Luxsor Capital"
                  className="absolute bottom-4 right-5 w-7 h-7 sm:w-8 sm:h-8 object-contain opacity-60"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
