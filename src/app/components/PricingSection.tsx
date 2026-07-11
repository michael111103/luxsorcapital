// src/app/components/PricingSection.tsx
"use client";

import { useState } from "react";
import { CheckCircle2, Ticket } from "lucide-react";
import Reveal from "./ui/Reveal";
import GradientButton from "./ui/GradientButton";
import { LuxsorMark, LuxsorWordmark } from "./icons/BrandIcons";
import { PRICING } from "@/lib/data";

export default function PricingSection() {
  const [promoOpen, setPromoOpen] = useState(false);

  return (
    <section id="harga" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-lg mx-auto text-center">
        <Reveal>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 mb-3">
            {PRICING.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-10 sm:mb-12">
            {PRICING.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8 text-left shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/[0.06] blur-[100px]" />

            <div className="flex items-center gap-2.5">
              <LuxsorMark className="w-7 h-7" />
              <LuxsorWordmark className="text-base" />
            </div>

            <p className="mt-6 text-xs sm:text-sm tracking-widest uppercase text-white/40">
              {PRICING.planTitle}
            </p>
            <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              {PRICING.price}
              <span className="text-white/40 text-base font-normal ml-1.5">
                {PRICING.priceNote}
              </span>
            </p>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-white/20">✦</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <ul className="space-y-4">
              {PRICING.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <p className="text-[13px] sm:text-[15px] text-white/70 leading-relaxed flex-1">
                    {b}
                  </p>
                  <CheckCircle2 className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3">
              <GradientButton size="lg" className="w-full">
                {PRICING.cta}
              </GradientButton>
              <button
                onClick={() => setPromoOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/45 hover:text-white transition-colors"
              >
                <Ticket className="w-3.5 h-3.5" />
                {PRICING.promo}
              </button>
              {promoOpen && (
                <input
                  autoFocus
                  placeholder="Masukkan kode promo"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/40"
                />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
