// src/app/components/TestimonialCarousel.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Play, Share2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import { TESTIMONIALS, ph } from "@/lib/data";

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    AutoScroll({ speed: 0.6, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <Reveal>
        <h2 className="text-center text-2xl sm:text-4xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Apa Kata Mereka
          </span>
        </h2>
        <p className="text-center text-white/40 text-sm sm:text-base mb-12 sm:mb-14 px-5">
          Cerita nyata dari member Luxsor Capital
        </p>
      </Reveal>

      <div className="overflow-hidden px-5 sm:px-8" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 basis-[85%] sm:basis-[46%] lg:basis-[32%]"
            >
              <div className="group relative rounded-2xl overflow-hidden border border-white/15 aspect-video hover:border-white/40 transition-colors">
                <img
                  src={ph(t.title, 640, 360)}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur text-white">
                  <Share2 className="w-3.5 h-3.5" />
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </span>
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-sm font-semibold leading-tight">{t.title}</p>
                  <p className="text-xs text-white/45 mt-0.5">
                    {t.name} — {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === selected ? "w-6 bg-white" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
