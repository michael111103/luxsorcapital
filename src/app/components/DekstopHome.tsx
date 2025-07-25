// src/app/components/DesktopHome.tsx
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { SiteHeader } from "./header";
import Pricing from "./pricing";
import Footer from "./footer";

const WORDS = ["adapts", "learns", "evolves", "understands", "accelerates"];
function useWordCycle(words: string[], delay = 3000) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % words.length), delay);
    return () => clearTimeout(t);
  }, [idx, words, delay]);
  return words[idx];
}

export default function DesktopHome() {
  const headlineWord = useWordCycle(WORDS, 2000);

  return (
    <main className="bg-black text-white min-h-screen font-inter">
      <Head>
        <title>QUARK – Your AI Assistant</title>
        <meta
          name="description"
          content="QUARK is an AI assistant built for work and creativity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <section className="relative w-full h-screen px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* HERO TEXT */}
        <div className="relative z-30 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
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
              href="#"
              className="
                relative z-30 inline-block
                px-6 py-3 rounded-full
                bg-zinc-900 hover:bg-zinc-900
                text-white font-semibold text-sm
                transition-transform transform hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-white
                shadow-md hover:shadow-white/40
              "
            >
              Get Started
            </a>
            <a
              href="#"
              className="
                relative z-30 inline-block
                px-6 py-3 rounded-full
                border border-white/30 hover:border-white
                text-white font-semibold text-sm
                transition-transform transform hover:scale-105
              "
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* HERO IMAGE WITH SPOTLIGHT */}
        <div className="relative mt-10 md:mt-0 md:ml-12 w-full md:w-[650px] h-auto">
          {/*  Spotlight di belakang gambar */}
          <div
            className="
              absolute top-[-150px] right-[-150px]
              w-[700px] h-[700px]
              bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),rgba(255,255,255,0)_70%)]
              pointer-events-none
              blur-[120px]
              z-10
            "
          />

          {/*  Gambar di atas glow */}
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

        {/* GRADIENT BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-0" />
      </section>

      <Pricing />
      <Footer />
    </main>
  );
}
