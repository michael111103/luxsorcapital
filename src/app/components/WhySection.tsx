// src/app/components/WhySection.tsx
"use client";

import Reveal from "./ui/Reveal";
import { WHY } from "@/lib/data";

export default function WhySection() {
  return (
    <section id="kenapa" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-4xl font-bold tracking-tight mb-14 sm:mb-16">
            {WHY.eyebrow}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative mx-auto mb-12 sm:mb-16 max-w-2xl rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.15)]">
            <img
              src="/why.png"
              alt="Kenapa Luxsor Capital"
              className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="max-w-2xl mx-auto text-center text-lg sm:text-2xl leading-relaxed">
            <span className="font-semibold text-white">{WHY.boldText}</span>{" "}
            <span className="text-white/45">{WHY.restText}</span>
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.24}>
        <div className="mt-16 sm:mt-20 h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </Reveal>
    </section>
  );
}
