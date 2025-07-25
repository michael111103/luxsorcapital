// src/app/components/DesktopHome.tsx
"use client";

import { useState, useEffect, useRef, useId, ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";

import { SiteHeader } from "./header";
import Pricing from "./pricing";
import Footer from "./footer";
import { Download, CheckCircle2, Globe2, Sparkles } from "lucide-react";

// data dan helper sama seperti sebelumnya…
const WORDS = ["adapts", "learns", "evolves", "understands", "accelerates"];
function useWordCycle(words: string[], delay = 3000) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % words.length), delay);
    return () => clearTimeout(t);
  }, [idx, words, delay]);
  return words[idx];
}

type StatItem = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
};
const ICON_CLS = "w-10 h-10 text-[#0EA5E9]";
const statsData: StatItem[] = [
  { id: "users",     value: 50_000_000,    suffix: "+", label: "Users",            icon: <Download     className={ICON_CLS} /> },
  { id: "tasks",     value: 1_000_000_000, suffix: "+", label: "Solved Tasks",     icon: <CheckCircle2 className={ICON_CLS} /> },
  { id: "countries", value: 236,                   label: "Countries Using QUARK",  icon: <Globe2       className={ICON_CLS} /> },
  { id: "reviews",   value: 650_000,       suffix: "+", label: "Top Star Reviews", icon: <Sparkles     className={ICON_CLS} /> },
];
function shortNumber(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(0) + "B";
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(0) + "M";
  if (n >= 1_000)         return (n / 1_000).toFixed(0) + "K";
  return n.toString();
}

// StatCard dengan header‐box yang melebar & ikon slide‐up on hover
function StatCard({ item }: { item: StatItem }) {
  const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: false });
  const id = useId();
  const { start, reset } = useCountUp({
    ref: id,
    start: 0,
    end: item.value,
    duration: 2.5,
    formattingFn: (n) => shortNumber(n) + (item.suffix || ""),
    startOnMount: false,
  });

  useEffect(() => {
    if (inView) {
      reset();
      start();
    }
  }, [inView, reset, start]);

  return (
    <div ref={ref} className="group relative flex flex-col items-center">
      {/* half‐box header, height tinggi saat hover */}
      <div className="absolute inset-x-0 top-0 overflow-hidden">
        <div
          className="
            h-20 group-hover:h-44
            transition-[height] duration-300
            w-full border border-white/20 bg-white/10 rounded-t-lg
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ikon—slide up on hover */}
      <div
        className="
          relative z-10 mt-6 mb-2
          opacity-0 translate-y-4
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
        "
      >
        {item.icon}
      </div>

      {/* angka & label di bawah box */}
      <p id={id} className="text-3xl font-bold leading-none mt-2" />
      <p className="mt-1 text-base text-white/80">{item.label}</p>
    </div>
  );
}

function NumbersSection() {
  return (
    <section className="px-6 md:px-16 py-16 bg-black" id="numbers">
      <h2 className="text-3xl font-bold text-center mb-3 text-white">
        QUARK’s Power in Numbers
      </h2>
      <p className="text-center text-white/60 mb-10">
        What we’ve achieved
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {statsData.map((s) => (
          <StatCard key={s.id} item={s} />
        ))}
      </div>
    </section>
  );
}

export default function DesktopHome() {
  const headlineWord = useWordCycle(WORDS, 3000);

  return (
    <main className="bg-black text-white min-h-screen font-inter">
      <Head>
        <title>QUARK – Your AI Assistant</title>
        <meta name="description" content="QUARK is an AI assistant built for work and creativity." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      {/* HERO */}
      <section className="relative w-full h-screen px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="relative z-20 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The AI assistant that <br />
            <span className="bg-gradient-to-r from-zinc-500 to-zinc-400 bg-clip-text text-transparent">
              {headlineWord}
            </span>{" "}
            to your world
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Chat, generate content, analyze documents, and boost productivity with QUARK.
          </p>
          <div className="flex gap-4">
            <a
              href="#numbers"
              className="inline-block px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm shadow transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="inline-block px-6 py-3 rounded-full border border-white/30 hover:border-white text-white font-semibold text-sm transition-transform hover:scale-105"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 md:ml-12 w-full md:w-[650px]">
          <div className="absolute -top-[200px] -right-[200px] w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none blur-[120px] z-10" />
          <div className="relative z-20">
            <Image
              src="/hero-dashboard.png"
              alt="Quark demo dashboard"
              width={650}
              height={400}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-0" />
      </section>

      <NumbersSection />

      <Pricing />
      <Footer />
    </main>
  );
}
