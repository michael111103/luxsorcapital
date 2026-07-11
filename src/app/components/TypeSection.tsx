// src/app/components/TypeSection.tsx
"use client";

import Reveal from "./ui/Reveal";
import GradientButton from "./ui/GradientButton";
import { TYPE_SECTION, ph } from "@/lib/data";

export default function TypeSection() {
  return (
    <section className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 mb-3">
            {TYPE_SECTION.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-12 sm:mb-16">
            {TYPE_SECTION.title}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="group relative rounded-3xl overflow-hidden border border-white/15 aspect-[4/3] sm:aspect-[16/8]">
              <img
                src={ph(TYPE_SECTION.cardA.img, 1000, 560)}
                alt={TYPE_SECTION.cardA.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 text-left">
                <p className="text-xl sm:text-3xl font-bold leading-tight">
                  {TYPE_SECTION.cardA.label}
                  <br />
                  <span className="underline decoration-white/40 underline-offset-4">
                    {TYPE_SECTION.cardA.highlight}
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-[16/8] opacity-80">
              <img
                src={ph(TYPE_SECTION.cardB.img, 1000, 560)}
                alt={TYPE_SECTION.cardB.img}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 text-left">
                <p className="text-xl sm:text-3xl font-bold leading-tight text-white/70">
                  {TYPE_SECTION.cardB.label}
                  <br />
                  <span className="text-white">{TYPE_SECTION.cardB.highlight}</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 sm:mt-12 flex justify-center">
            <GradientButton size="lg" telegram={false}>
              {TYPE_SECTION.cta}
            </GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
