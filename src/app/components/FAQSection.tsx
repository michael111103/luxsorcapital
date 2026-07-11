// src/app/components/FAQSection.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./ui/Reveal";
import GradientButton from "./ui/GradientButton";
import { FAQS } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p className="text-center text-xs sm:text-sm tracking-[0.2em] uppercase text-white/40 mb-10 sm:mb-12">
            Frequently Asked Question
          </p>
        </Reveal>

        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.03}>
                <div
                  className={`rounded-2xl border backdrop-blur-md transition-colors duration-300 ${
                    isOpen ? "border-white/30 bg-white/[0.06]" : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
                  >
                    <span className="text-[14px] sm:text-base font-medium text-white/90">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-white/50 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 text-[13px] sm:text-[15px] text-white/50 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 sm:mt-12 flex justify-center">
            <GradientButton size="lg">Gabung Sekarang</GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
