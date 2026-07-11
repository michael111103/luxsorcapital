// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GradientButton from "./ui/GradientButton";
import Reveal from "./ui/Reveal";
import { HERO, ph } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-44 pb-20 sm:pb-28 px-5 sm:px-8 overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm text-white/70 tracking-wide">
            {HERO.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 text-[2.1rem] leading-[1.15] sm:text-6xl sm:leading-[1.1] font-bold tracking-tight">
            {HERO.headline.map((part, i) =>
              part.accent ? (
                <span
                  key={i}
                  className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent"
                >
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 text-white/55 text-base sm:text-lg max-w-2xl mx-auto">
            {HERO.sub}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex justify-center">
            <GradientButton size="lg">Gabung Sekarang</GradientButton>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="relative mt-14 sm:mt-16 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-2 sm:p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src={ph("Luxsor Capital — Intro", 1200, 675)}
                alt={HERO.videoTitle}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />
              <div className="absolute left-4 sm:left-6 top-4 sm:top-6 text-left">
                <p className="font-semibold text-sm sm:text-base">{HERO.videoTitle}</p>
                <p className="text-white/50 text-xs sm:text-sm">{HERO.videoSubtitle}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform hover:scale-110">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-black ml-0.5" />
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
