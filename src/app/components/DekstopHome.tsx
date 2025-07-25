// src/app/components/DesktopHome.tsx
"use client";

import { useState, useEffect, useId, ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";
import { Download, CheckCircle2, Globe2, Sparkles, ChevronDown } from "lucide-react";

import { SiteHeader } from "./header";
import Pricing from "./pricing";
import Footer from "./footer";

//
// Hero word‐cycler
//
const WORDS = ["adapts", "learns", "evolves", "understands", "accelerates"];
function useWordCycle(words: string[], delay = 3000) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % words.length), delay);
    return () => clearTimeout(t);
  }, [idx]);
  return words[idx];
}

//
// Stats data & helper
//
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
  { id: "countries", value: 236,                           label: "Countries Using QUARK",  icon: <Globe2       className={ICON_CLS} /> },
  { id: "reviews",   value: 650_000,       suffix: "+", label: "Top Star Reviews", icon: <Sparkles     className={ICON_CLS} /> },
];
function shortNumber(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(0) + "B";
  if (n >= 1e6) return (n / 1e6).toFixed(0) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return n.toString();
}

//
// Single Stat Card
//
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
  }, [inView]);

  return (
    <div ref={ref} className="group relative flex flex-col items-center">
      {/* top half‐box header */}
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

      {/* logo slides up */}
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

      {/* countup number */}
      {inView && (
        <p id={id} className="text-3xl font-bold leading-none mt-2 text-white" />
      )}
      <p className="mt-1 text-base text-white/80">{item.label}</p>
    </div>
  );
}

//
// Numbers grid
//
function NumbersSection() {
  return (
    <section className="px-6 md:px-16 py-16 bg-black" id="numbers">
      <h2 className="text-3xl font-bold text-center mb-3 text-white">
        QUARK’s Power in Numbers
      </h2>
      <p className="text-center text-white/60 mb-10">What we’ve achieved</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {statsData.map((s) => (
          <StatCard key={s.id} item={s} />
        ))}
      </div>
    </section>
  );
}

//
// Features data
//
const features = [
  {
    title: "Web Search",
    desc: "Scan the web in real time for the latest news, data, and insights—ask anything and get instant, up-to-the-minute answers pulled straight from the internet.",
    img: "/feature-websearch.png",
  },
  {
    title: "DocPilot",
    desc: "Summarize, translate, and explore PDFs, DOCX, TXT, and EPUB files—get instant rewrites, accurate translations, and on‑demand answers to any document question.",
    img: "/feature-docpilot.png",
  },
  {
    title: "Image Generation",
    desc: "Generate high‑quality images, illustrations, and concept art from simple text prompts—watch your ideas take shape with AI‑powered creativity at lightning speed.",
    img: "/feature-image.png",
  },
];

//
// FAQ data + component
//
const faqs = [
  {
    q: "What is QUARK?",
    a: `QUARK is an all‑in‑one AI assistant that helps you write, research, analyze documents, and automate repetitive tasks—directly from your device.
It combines state‑of‑the‑art language models with practical tools (PDF/CSV readers, web search, a workflow builder, and more), so you don’t just chat—you actually get work done end to end.`,
  },
  {
    q: "Is there a free plan?",
    a: `Yes. You can start for free with daily message and upload limits—no credit card required.
When you need higher limits, faster models, or pro features, you can upgrade anytime with a single click.`,
  },
  {
    q: "Which models do you support?",
    a: `We provide access to the latest OpenAI models such as GPT‑4.1 mini, GPT‑4.5, and others—depending on your plan.
QUARK can auto‑select the most efficient model for each task (e.g., quick summaries vs. long‑form writing), or you can choose manually in Settings.`,
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: `Absolutely. There’s no lock‑in. You can change or cancel your plan at any moment from the Billing page.
Your subscription stays active until the current period ends and won’t auto‑renew after cancellation. No penalties.`,
  },
  {
    q: "Do you provide refunds or exchanges?",
    a: `All sales are final and we do not offer refunds. Please try the free plan and review our docs before purchasing—this helps us keep pricing competitive and continue improving the platform.`,
  },
  {
    q: "How do I contact your support team?",
    a: `Head to our website footer and tap “Contact Us”. Fill out the form and submit your request—our team usually replies within 24 hours on business days.`,
  },
];

function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={onToggle}
      >
        <span
          className={`text-[22px] leading-snug font-semibold tracking-tight ${
            open ? "underline decoration-white/70" : "group-hover:underline"
          }`}
        >
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-base text-white/70 leading-relaxed whitespace-pre-line">
          {item.a}
        </p>
      </div>
    </div>
  );
}

//
// Main DesktopHome export
//
export default function DesktopHome() {
  const headlineWord = useWordCycle(WORDS, 3000);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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
              href="#features"
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

      {/* FEATURES */}
      <section className="px-6 md:px-16 py-16 bg-black" id="features">
        <h2 className="text-2xl font-bold text-center mb-10 text-white">
          Explore Quark&apos;s Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-zinc-900/60 rounded-xl p-6 border border-zinc-800 hover:ring-1 hover:ring-white/20 transition"
            >
              <Image
                src={f.img}
                alt={f.title}
                width={400}
                height={240}
                className="rounded-lg w-full h-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {f.title}
              </h3>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NUMBERS */}
      <NumbersSection />

      {/* PRICING */}
      <Pricing />

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-16 py-16 bg-black">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">
          FAQ
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              open={faqOpen === idx}
              onToggle={() => setFaqOpen(faqOpen === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
