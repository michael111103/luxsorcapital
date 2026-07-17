// src/app/components/QuoteSection.tsx
"use client";

import Reveal from "./ui/Reveal";
import GradientButton from "./ui/GradientButton";
import { QUOTE } from "@/lib/data";

export default function QuoteSection() {
  return (
    <section className="relative px-5 sm:px-8 py-24 sm:py-32 overflow-hidden">
      <img
        src="/nomer5.PNG"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <p className="text-2xl sm:text-4xl font-bold leading-snug tracking-tight">
            &ldquo;{QUOTE.text}&rdquo;
          </p>
          <p className="mt-5 text-white/45 text-sm sm:text-base tracking-widest uppercase">
            {QUOTE.author}
          </p>
          <div className="mt-9 flex justify-center">
            <GradientButton size="lg">Gabung Sekarang</GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
