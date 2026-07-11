// src/app/components/FloatingTelegramButton.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TelegramIcon } from "./icons/BrandIcons";
import { SITE } from "@/lib/data";

export default function FloatingTelegramButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40"
    >
      <Link
        href={SITE.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via Telegram"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white via-neutral-200 to-neutral-400 text-black shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)] transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
        <TelegramIcon className="relative w-6 h-6" />
      </Link>
    </motion.div>
  );
}
