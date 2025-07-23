"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// If you already have a Pricing component, you can import it and render it near the bottom.
// import Pricing from "./pricing";

/**
 * MobileHome.tsx
 * -----------------------------------------------------
 * Simple mobile-first landing page inspired by chaton.ai layout.
 * Replace every dummy image (png) with your real assets later.
 * All sections stacked vertically, tailored for small screens.
 */

const faqs = [
  {
    q: "What is QUARK?",
    a: "QUARK is your AI assistant that helps you write, research, analyze documents, and more—right from your phone.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. You can start free with limited daily chats and upgrade anytime.",
  },
  {
    q: "Which models do you support?",
    a: "We provide access to leading OpenAI models like GPT‑4.1 mini, GPT‑4.5, and more—depending on your plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. There’s no lock-in—cancel or change plans whenever you like.",
  },
];

const stats = [
  { label: "Messages processed", value: "12M+" },
  { label: "Users", value: "250k+" },
  { label: "Countries", value: "120+" },
  { label: "Avg. response time", value: "<1s" },
];

export default function MobileHome() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <div className="bg-black text-white font-inter">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-14 bg-black/60 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-lg font-bold tracking-wide">QUARK</Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
          className="p-2 text-white"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <nav className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md p-6 flex flex-col gap-6 animate-fade-in">
          {[
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "FAQ", href: "#faq" },
            { name: "Blog", href: "/blog" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-semibold"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <Link
            href="https://app.mrktedge.ai/auth"
            onClick={() => setOpen(false)}
            className="mt-4 w-full text-center py-3 rounded-lg bg-gradient-to-r from-blue-800 to-blue-400 font-semibold"
          >
            Get Started
          </Link>
        </nav>
      )}

      {/* HERO */}
      <section className="px-5 pt-10 pb-16 flex flex-col items-center text-center">
        <h1 className="text-4xl leading-tight font-bold mb-4">
          The AI assistant that
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">adapts to your world</span>
        </h1>
        <p className="text-white/80 text-base mb-8">
          Chat, create, analyze, and automate—all from your phone. Built for productivity and creativity.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
          <Link
            href="#pricing"
            className="py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow text-center"
          >
            Try QUARK Free
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
            src="/mobile-hero.png" // TODO: replace with real screenshot
            alt="App preview"
            width={360}
            height={240}
            className="rounded-xl shadow-lg w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* CHAT BUBBLES / DEMO */}
      <section id="features" className="px-5 py-16 space-y-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Chat that feels natural</h2>
        <div className="space-y-4 max-w-sm mx-auto">
          {/* user bubble */}
          <div className="max-w-[85%] ml-auto bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow">
            Give me a 3-sentence summary of this PDF (uploading now).
          </div>
          {/* ai bubble */}
          <div className="max-w-[85%] mr-auto bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-sm text-white/90 shadow">
            Sure! Here’s the concise summary…
          </div>
          {/* another */}
          <div className="max-w-[85%] ml-auto bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm shadow">
            Generate a marketing plan for an eco-friendly bottle startup.
          </div>
          <div className="max-w-[85%] mr-auto bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-sm text-white/90 shadow">
            Absolutely! Here’s a step-by-step launch plan…
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-5 py-16 bg-zinc-900/20" id="capabilities">
        <h2 className="text-2xl font-bold text-center mb-10">Do more with QUARK</h2>
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
          {[
            {
              title: "Write & create",
              desc: "Blogs, emails, ads, scripts—get quality content in seconds.",
              img: "/feature-write.png", // dummy
            },
            {
              title: "Analyze files",
              desc: "Drop PDFs, spreadsheets, slides—get instant insights.",
              img: "/feature-analyze.png",
            },
            {
              title: "Automate tasks",
              desc: "Turn routines into one-click workflows and save hours.",
              img: "/feature-automate.png",
            },
          ].map((f) => (
            <div key={f.title} className="bg-zinc-900/60 rounded-xl p-5 border border-zinc-800">
              <Image
                src={f.img}
                alt={f.title}
                width={500}
                height={300}
                className="rounded-lg w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POWER IN NUMBERS / STATS */}
      <section className="px-5 py-16" id="numbers">
        <h2 className="text-2xl font-bold text-center mb-8">Power in numbers</h2>
        <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-[11px] uppercase tracking-wide text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="px-5 py-20 bg-zinc-900/20 text-center" id="cta">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-white/70 text-sm mb-6 max-w-xs mx-auto">
          Choose a plan that fits you. Upgrade or cancel anytime.
        </p>
        <Link
          href="#pricing"
          className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold text-sm"
        >
          View Pricing
        </Link>
      </section>

      {/* If you want to render Pricing component here on mobile page */}
      {/* <Pricing /> */}

      {/* FAQ */}
      <section id="faq" className="px-5 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-md mx-auto divide-y divide-zinc-800">
          {faqs.map((item, idx) => {
            const open = faqOpen === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  className="w-full flex items-center justify-between text-left text-sm font-medium"
                  onClick={() => setFaqOpen(open ? null : idx)}
                >
                  {item.q}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {open && (
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer mini (optional, or import your Footer component) */}
      <footer className="px-5 py-12 text-center text-white/60 text-xs">
        © {new Date().getFullYear()} QUARK. All rights reserved.
      </footer>
    </div>
  );
}

// simple fade-in animation utility (optional)
// Add this to globals.css if you haven't:
// .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
// @keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }
