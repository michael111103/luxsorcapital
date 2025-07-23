/* src/app/components/MobileHome.tsx */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import {
  Menu,
  X,
  ChevronDown,
  Download,
  CheckCircle2,
  Globe2,
  Sparkles,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

import Pricing from "./pricing";
import Footer from "./footer";

/* ---------- FAQ ---------- */
const faqs = [
  { q: "What is QUARK?", a: "QUARK is your AI assistant that helps you write, research, analyze documents, and more—right from your phone." },
  { q: "Is there a free plan?", a: "Yes. You can start free with limited daily chats and upgrade anytime." },
  { q: "Which models do you support?", a: "We provide access to leading OpenAI models like GPT‑4.1 mini, GPT‑4.5, and more—depending on your plan." },
  { q: "Can I cancel anytime?", a: "Absolutely. There’s no lock-in—cancel or change plans whenever you like." },
];

/* ---------- STATS ---------- */
type StatItem = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
};

const ICON_CLS = "w-10 h-10 text-[#0EA5E9]";

const statsData: StatItem[] = [
  { id: "users",     value: 50_000_000,    suffix: "+", label: "Users",               icon: <Download     className={ICON_CLS} /> },
  { id: "tasks",     value: 1_000_000_000, suffix: "+", label: "Solved Tasks",        icon: <CheckCircle2 className={ICON_CLS} /> },
  { id: "countries", value: 236,                   label: "Countries Using QUARK",    icon: <Globe2       className={ICON_CLS} /> },
  { id: "reviews",   value: 650_000,       suffix: "+", label: "Top Star Reviews",    icon: <Sparkles     className={ICON_CLS} /> },
];

/* ---------- Helpers ---------- */
function shortNumber(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(0) + "B";
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(0) + "M";
  if (n >= 1_000)         return (n / 1_000).toFixed(0) + "K";
  return n.toString();
}

/* ---------- Word cycle (ganti tiap 3 detik) ---------- */
const WORDS = ["adapts", "learns", "evolves", "understands", "accelerates"];
function useWordCycle(words: string[], delay = 3000) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % words.length), delay);
    return () => clearTimeout(t);
  }, [idx, words, delay]);
  return words[idx];
}

/* ---------- hook: replay on each re-enter viewport ---------- */
function useReplayOnView(threshold = 0.35, rootMargin = "0px 0px -20% 0px") {
  const { ref, inView } = useInView({ threshold, rootMargin, triggerOnce: false });
  const wasInView = useRef(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView && !wasInView.current) {
      // baru masuk -> mainkan
      setKey((k) => k + 1);
      wasInView.current = true;
    } else if (!inView && wasInView.current) {
      // keluar viewport -> siap2 replay lagi
      wasInView.current = false;
    }
  }, [inView]);

  return { ref, playKey: key };
}

/* ---------- MAIN ---------- */
export default function MobileHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const headlineWord = useWordCycle(WORDS, 3000);

  return (
    <div className="bg-black text-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-14 bg-black/60 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-lg font-bold tracking-wide">QUARK</Link>
        <button aria-label="Toggle menu" onClick={() => setMenuOpen((p) => !p)} className="p-2 text-white">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Fullscreen menu */}
      {menuOpen && (
        <nav className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md p-6 flex flex-col gap-6 animate-fade-in">
          {[
            { name: "Features", href: "#features" },
            { name: "Pricing",  href: "#pricing"  },
            { name: "FAQ",      href: "#faq"      },
            { name: "Blog",     href: "/blog"     },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Link
            href="https://app.mrktedge.ai/auth"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full text-center py-3 rounded-lg bg-gradient-to-r from-blue-800 to-blue-400 font-semibold"
          >
            Get Started
          </Link>
        </nav>
      )}

      {/* HERO */}
      <section className="relative px-5 pt-10 pb-16 flex flex-col items-center text-center overflow-visible">
        {/* big glow */}
        <div
          className="pointer-events-none absolute -top-56 right-[-200px]
                     w-[1000px] h-[1000px] rounded-full bg-sky-400/25 blur-[220px] -z-10" />
        <div
          className="pointer-events-none absolute top-1/3 right-[-120px]
                     w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[180px] -z-10" />

        <div className="relative z-10 w-full">
          <h1 className="text-4xl leading-tight font-bold mb-4">
            <span className="block">The AI assistant that</span>

            <span className="block min-h-[1.1em]">
              <span
                key={headlineWord}
                className="inline-block bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent transition-opacity duration-300"
              >
                {headlineWord}
              </span>
            </span>

            <span className="block">to your world</span>
          </h1>

          <p className="text-white/80 text-base mb-8">
            Chat, create, analyze, and automate—all from your device. Built for productivity and creativity.
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <Link
              href="#pricing"
              className="py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm shadow text-center"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="py-3 rounded-full border border-white/30 hover:border-white text-white font-semibold text-sm text-center"
            >
              Explore Features
            </a>
          </div>

          <div className="relative mt-10 w-full max-w-sm mx-auto">
            <Image
              src="/hero-dashboard.png"
              alt="App preview"
              width={360}
              height={240}
              className="rounded-xl shadow-lg w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="w-full bg-black py-20 px-6 flex flex-col items-center">
        <p className="text-sm text-[#b3b3b3] font-bold mb-8 tracking-wider uppercase">POWERED BY</p>
        <div className="flex justify-center items-center">
          <Image src="/OpenAI-white.png" alt="OpenAI logo" width={130} height={80} className="w-auto h-auto" priority />
        </div>
      </section>

      {/* Feature cards */}
      <section className="px-5 py-16 bg-zinc-900/20" id="capabilities">
        <h2 className="text-2xl font-bold text-center mb-10">Explore Quark&apos;s Features</h2>
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
          {[
            { title: "Write & create", desc: "Blogs, emails, ads, scripts—get quality content in seconds.", img: "/feature-write.png" },
            { title: "Analyze files",  desc: "Drop PDFs, spreadsheets, slides—get instant insights.",       img: "/feature-analyze.png" },
            { title: "Automate tasks", desc: "Turn routines into one-click workflows and save hours.",      img: "/feature-automate.png" },
          ].map((f) => (
            <div key={f.title} className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800">
              <Image src={f.img} alt={f.title} width={500} height={300} className="rounded-lg w-full h-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers */}
      <NumbersSection />

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <section id="faq" className="px-5 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-md mx-auto divide-y divide-zinc-800">
          {faqs.map((item, idx) => {
            const opened = faqOpen === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  className="w-full flex items-center justify-between text-left text-sm font-medium"
                  onClick={() => setFaqOpen(opened ? null : idx)}
                >
                  {item.q}
                  <ChevronDown className={`w-4 h-4 transition-transform ${opened ? "rotate-180" : "rotate-0"}`} />
                </button>
                {opened && (
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ---------- Numbers Section ---------- */
function NumbersSection() {
  const { ref, playKey } = useReplayOnView(); // key untuk replay setiap masuk lagi

  return (
    <section ref={ref} className="px-5 py-16" id="numbers">
      <h2 className="text-3xl font-bold text-center mb-3">{"QUARK's Power in Numbers"}</h2>
      <p className="text-center text-white/60 mb-10 text-base">What we’ve achieved</p>

      <div className="flex flex-col gap-6 max-w-md mx-auto">
        {statsData.map((s) => (
          <StatCard key={s.id} item={s} playKey={playKey} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ item, playKey }: { item: StatItem; playKey: number }) {
  return (
    <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 px-6 py-8 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-5xl font-extrabold leading-none countup">
          <CountUp
            key={`${item.id}-${playKey}`} // restart hanya saat playKey berubah
            start={0}
            end={item.value}
            duration={8}
            formattingFn={(n) => shortNumber(n) + (item.suffix || "")}
          />
        </p>
        <p className="mt-3 text-lg text-white/70">{item.label}</p>
      </div>
      {item.icon}
    </div>
  );
}
