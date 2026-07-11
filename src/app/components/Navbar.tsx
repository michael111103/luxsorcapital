// src/app/components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LuxsorWordmark, TelegramIcon } from "./icons/BrandIcons";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.8)]"
            : "bg-black/10 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16 sm:h-[72px]">
          <Link href="#top" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Luxsor Capital"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
              priority
            />
            <LuxsorWordmark className="text-[15px] sm:text-lg" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-white/65 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2 text-sm text-white/85 hover:border-white/40 hover:bg-white/10 transition-all"
            >
              <TelegramIcon className="w-4 h-4" />
              Join Telegram
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/80 backdrop-blur-2xl border-b border-white/10 px-5 py-5 flex flex-col gap-4"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-[15px]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-200 text-white px-5 py-3 text-sm font-semibold"
          >
            <TelegramIcon className="w-4 h-4" />
            Join Telegram
          </Link>
        </motion.div>
      )}
    </header>
  );
}
