// src/app/components/EducationModules.tsx
"use client";

import Reveal from "./ui/Reveal";
import TimelineItem from "./ui/TimelineItem";
import GradientButton from "./ui/GradientButton";
import CurriculumSection from "./CurriculumSection";
import CommunitySection from "./CommunitySection";
import { EDUCATION_MODULES } from "@/lib/data";

export default function EducationModules() {
  return (
    <section id="kurikulum" className="relative px-5 sm:px-8 py-6 sm:py-10">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-4xl font-bold tracking-tight mb-14 sm:mb-20">
            Edukasi
          </h2>
        </Reveal>

        <div className="flex flex-col gap-14 sm:gap-20">
          <CurriculumSection />
          <CommunitySection />

          {EDUCATION_MODULES.map((mod, i) => (
            <TimelineItem
              key={mod.number}
              tag={mod.number}
              last={i === EDUCATION_MODULES.length - 1}
            >
              <Reveal>
                <div className="rounded-2xl overflow-hidden border border-white/10 max-w-xl">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-5 text-xl sm:text-3xl font-bold tracking-tight">
                  {mod.label}{" "}
                  <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                    {mod.accent}
                  </span>
                </h3>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-3 max-w-xl text-[15px] sm:text-lg leading-relaxed">
                  <span className="font-semibold text-white">{mod.boldText}</span>{" "}
                  <span className="text-white/45">{mod.restText}</span>
                </p>
              </Reveal>
            </TimelineItem>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 sm:mt-20 flex justify-center pl-9 sm:pl-14">
            <GradientButton size="lg">Gabung Sekarang</GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
