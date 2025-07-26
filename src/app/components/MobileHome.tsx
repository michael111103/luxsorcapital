/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  useState,
  useEffect,
  useRef,
  useId,
  ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import {
  Menu,
  X,
  ChevronDown,
  Download,
  CheckCircle2,
  Globe2,
  Sparkles,
} from "lucide-react";

import Pricing from "./pricing";
import Footer from "./footer";

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: "What is QUARK?",
    a: `QUARK is an all‑in‑one AI assistant that helps you write, research, analyze documents, and automate repetitive tasks—directly from your device.
It combines state‑of‑the‑art language models with practical tools (PDF/CSV readers, web search, a workflow builder, and more), so you don’t just chat—you actually get work done end to end.`
  },
  {
    q: "Is there a free plan?",
    a: `Yes. You can start for free with daily message and upload limits—no credit card required.
When you need higher limits, faster models, or pro features, you can upgrade anytime with a single click.`
  },
  {
    q: "Which models do you support?",
    a: `We provide access to the latest OpenAI models such as GPT‑4.1 mini, GPT‑4.5, and others—depending on your plan.
QUARK can auto‑select the most efficient model for each task (e.g., quick summaries vs. long‑form writing), or you can choose manually in Settings.`
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: `Absolutely. There’s no lock‑in. You can change or cancel your plan at any moment from the Billing page.
Your subscription stays active until the current period ends and won’t auto‑renew after cancellation. No penalties.`
  },
  {
    q: "Do you provide refunds or exchanges?",
    a: `All sales are final and we do not offer refunds. Please try the free plan and review our docs before purchasing—this helps us keep pricing competitive and continue improving the platform.`
  },
  {
    q: "How do I contact your support team?",
    a: `Head to our website footer and tap “Contact Us”. Fill out the form and submit your request—our team usually replies within 24 hours on business days.`
  },
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
  { id: "users",     value: 50_000_000,    suffix: "+", label: "Users",            icon: <Download     className={ICON_CLS} /> },
  { id: "tasks",     value: 1_000_000_000, suffix: "+", label: "Solved Tasks",     icon: <CheckCircle2 className={ICON_CLS} /> },
  { id: "countries", value: 236,                   label: "Countries Using QUARK",  icon: <Globe2       className={ICON_CLS} /> },
  { id: "reviews",   value: 650_000,       suffix: "+", label: "Top Star Reviews", icon: <Sparkles     className={ICON_CLS} /> },
];

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { msg: "Wow, very impressive indeed. Give it all the ideas and it puts it together so perfectly", user: "AliceW", rating: 5 },
  { msg: "I love how it summarizes my spreadsheets. Super efficient and accurate.", user: "BobSmith", rating: 4.5 },
  { msg: "Its amazing how it can turn anything you need from a text to an email to a report into an amazing world of art that makes you sound educated, eloquent, and smart. Love it", user: "ClaraJ", rating: 5 },
  { msg: "I have asked dozens of questions and have learned a lot by doing so. It's like having a very wise, educated friend give you the straight answer everytime.", user: "DanielParker ", rating: 4 },
  { msg: "This is amazing and helpful.", user: "BagasPrakoso", rating: 4.5 },
];

/* ---------- Helpers ---------- */
function shortNumber(n: number): string {
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(0) + "B";
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(0) + "M";
  if (n >= 1_000)         return (n / 1_000).toFixed(0) + "K";
  return n.toString();
}

/* ---------- Word cycle ---------- */
const WORDS = ["adapts", "learns", "evolves", "understands", "accelerates"];
function useWordCycle(words: string[], delay = 2000) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % words.length), delay);
    return () => clearTimeout(t);
  }, [idx, words, delay]);
  return words[idx];
}

/* ---------- DARK GLOW (hero only) ---------- */
const DarkGlow = () => (
  <div
    aria-hidden="true"
    className="
      pointer-events-none absolute left-1/2 -translate-x-1/2
      top-[-180px] w-[200%] h-[860px]
      blur-[170px] z-0
    "
    style={{
      background:
        "linear-gradient(" +
          "to bottom, " +
          "rgba(0,0,0,0.8) 0%, " +    // hitam pekat di atas
          "rgba(50,50,50,0.5) 30%, " +// abu‑abu gelap
          "rgba(100,100,100,0.3) 60%, " +// abu‑abu sedang
          "rgba(150,150,150,0.1) 78%, " +// abu‑abu terang
          "rgba(200,200,200,0) 95%" +   // transparan di bawah
        ")",
      WebkitMaskImage:
        "linear-gradient(to bottom, #fff 0%, #fff 62%, rgba(255,255,255,0) 96%)",
      maskImage:
        "linear-gradient(to bottom, #fff 0%, #fff 62%, rgba(255,255,255,0) 96%)",
    }}
  />
);



/* ---------- MAIN ---------- */
export default function MobileHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const headlineWord = useWordCycle(WORDS, 3000);

  // Embla carousel for looping reviews
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="bg-black text-white font-inter relative overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-start px-4 h-14 bg-black/60 backdrop-blur-md border-b border-white/10 space-x-4">
        <Link href="/" className="text-lg font-bold tracking-wide">
          QUARK
        </Link>
        <Link
          href="https://app.mrktedge.ai/auth"
          onClick={() => setMenuOpen(false)}
          className="py-2 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm"
        >
          Get Started
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="p-2 text-white ml-auto"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* MENU OVERLAY */}
      {menuOpen && (
        <nav className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-md animate-fade-in flex flex-col">
          <div className="flex items-center justify-between px-4 h-14 border-b border-white/10">
            <Link
              href="/"
              className="text-lg font-bold tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              QUARK
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
            {[
              { name: "Features", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* spacer header */}
      <div className="pt-14" />

      {/* HERO */}
      <section className="relative px-5 pt-10 pb-16 flex flex-col items-center text-center overflow-visible">
        <DarkGlow />

        <h1 className="relative z-10 text-4xl leading-tight font-bold mb-4">
          <span className="block">The AI assistant that</span>

          <span className="block min-h-[1.1em]">
            <span
              key={headlineWord}
              className="inline-block bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent transition-opacity duration-300"
            >
              {headlineWord}
            </span>
          </span>

          <span className="block">to your world</span>
        </h1>

        <p className="relative z-10 text-white/80 text-base mb-8">
          Chat, create, analyze, and automate all from your device. Built for productivity and creativity.
        </p>

        <div className="relative z-10 flex flex-col gap-3 w-full max-w-xs mx-auto">
          <Link
            href="#pricing"
            className="py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm shadow text-center"
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

        <div className="relative z-10 mt-10 w-full max-w-sm mx-auto">
          <Image
            src="/hero-dashboard.png"
            alt="App preview"
            width={360}
            height={240}
            className="rounded-xl shadow-lg w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-16 bg-zinc-900/20" id="features">
        <h2 className="text-2xl font-bold text-center mb-10">Explore Quark&apos;s Features</h2>
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
          {[
            { title: "Web Search", desc: "Scan the web in real time for the latest news, data, and insights—ask anything and get instant, up to the minute answers pulled straight from the internet.", img: "/feature-websearch.png" },
            { title: "DocPilot",  desc: "Summarize, translate, and explore PDFs, DOCX, TXT, and EPUB files—get instant rewrites, accurate translations, and on‑demand answers to any document question.",       img: "/feature-docpilot.png" },
            { title: "Image Generation", desc: "Generate high‑quality images, illustrations, and concept art from simple text prompts—watch your ideas take shape with AI‑powered creativity at lightning speed.",      img: "/feature-image.png" },
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

      {/* Reviews */}
      <section id="reviews" className="px-5 py-16">
        <h2 className="text-2xl font-bold text-center mb-2">Reviews</h2>
        <p className="text-center text-white/60 mb-6">What our users are saying</p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-4 px-5">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full max-w-sm">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 h-full flex flex-col justify-between">
                  <p className="text-sm text-white/70 mb-4">{t.msg}</p>
                  <div className="flex items-center mb-2">
                    {Array(5).fill(0).map((_, idx) => {
                      const filled = idx < Math.floor(t.rating);
                      const half = !filled && idx < t.rating;
                      return (
                        <span key={idx} className={`text-yellow-400 ${half ? "opacity-75" : ""}`}>
                          ★
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-xs text-white/50">— {t.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <section id="faq" className="px-5 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="max-w-md mx-auto">
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

      {/* Contact Us */}
      <section id="contact" className="px-5 py-16">
        <div className="max-w-md mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
          <p className="text-white/70 mb-4">
            Have questions or want to learn more? Our support team is here to help.
            Click below to get in touch and we'll respond within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------- FAQ Item Component ---------- */
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


/* ---------- Numbers Section ---------- */
function NumbersSection() {
  return (
    <section className="px-5 py-16" id="numbers">
      <h2 className="text-3xl font-bold text-center mb-3">{"QUARK's Power in Numbers"}</h2>
      <p className="text-center text-white/60 mb-10 text-base">What we’ve achieved</p>

      <div className="flex flex-col gap-6 max-w-md mx-auto">
        {statsData.map((s) => (
          <StatCard key={s.id} item={s} />
        ))}
      </div>
    </section>
  );
}

/* ---------- StatCard (CountUp logic tetap) ---------- */
function StatCard({ item }: { item: StatItem }) {
  const { ref, inView } = useInView({
    threshold: 0.6,
    rootMargin: "0px 0px -20% 0px",
    triggerOnce: false,
  });

  const started = useRef(false);

  const id = useId();
  const { start, reset } = useCountUp({
    ref: id,
    start: 0,
    end: item.value,
    duration: 3.2,
    startOnMount: false,
    formattingFn: (n) => shortNumber(n) + (item.suffix || ""),
  });

  useEffect(() => {
    if (inView && !started.current) {
      reset();
      start();
      started.current = true;
    } else if (!inView && started.current) {
      started.current = false;
    }
  }, [inView, reset, start]);

  return (
    <div
      ref={ref}
      className="rounded-3xl bg-zinc-900/80 border border-zinc-800 px-6 py-8 flex items-center justify-between shadow-sm"
    >
      <div>
        <p className="text-5xl font-extrabold leading-none">
          <span id={id} />
        </p>
        <p className="mt-3 text-lg text-white/70">{item.label}</p>
      </div>
      {item.icon}
    </div>
  );
}
