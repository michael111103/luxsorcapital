// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import GradientButton from "./ui/GradientButton";
import Reveal from "./ui/Reveal";
import { HERO } from "@/lib/data";

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

        <Reveal delay={0.22}>
          <div className="relative isolate mt-12 sm:mt-14 mx-auto max-w-3xl">
            {/* thin light-blue glow hugging just the card's edge — reactive
                to the card's own size (not fixed px), so it stays correctly
                sized once hero.png finishes loading */}
            <div className="pointer-events-none absolute -inset-x-3 -inset-y-4 sm:-inset-x-5 sm:-inset-y-6 -z-10 rounded-[2rem] bg-sky-400/[0.22] blur-[36px]" />

            {/* rotating comet beam tracing the outline */}
            <div className="relative rounded-3xl p-[1.5px] overflow-hidden">
              <motion.div
                className="absolute h-[300%] w-[300%] will-change-transform"
                style={{
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                  background:
                    "conic-gradient(from 0deg, transparent 0%, transparent 80%, rgba(255,255,255,0.35) 88%, rgba(255,255,255,0.95) 91%, rgba(255,255,255,0.35) 94%, transparent 100%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-black border border-white/5">
                <img
                  src="/hero.png"
                  alt="Luxsor Capital"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-9 flex justify-center">
            <GradientButton size="lg">Gabung Sekarang</GradientButton>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.36}>
        <div className="mt-16 sm:mt-20 h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </Reveal>
    </section>
  );
}
