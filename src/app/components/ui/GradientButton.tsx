// src/app/components/ui/GradientButton.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { TelegramIcon } from "../icons/BrandIcons";
import { SITE } from "@/lib/data";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  telegram?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "solid" | "outline";
}

const sizeMap = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-base",
};

export default function GradientButton({
  children,
  href = SITE.telegram,
  telegram = true,
  size = "md",
  className = "",
  variant = "solid",
}: GradientButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold isolate overflow-hidden transition-all duration-300 ease-out active:scale-[0.97]";

  // Liquid-glass: translucent, heavily blurred surface with an inner top
  // sheen (blended for a realistic glossy light) and a soft outer glow that
  // intensifies on hover — no more flat gradient fill.
  const solid =
    "text-white bg-white/[0.08] backdrop-blur-2xl border border-white/25 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-12px_20px_-14px_rgba(255,255,255,0.08)] hover:bg-white/[0.14] hover:border-white/45 hover:shadow-[0_8px_40px_-6px_rgba(255,255,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.5)]";

  const outline =
    "text-white bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-white/40 hover:bg-white/10";

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${variant === "solid" ? solid : outline} ${sizeMap[size]} ${className}`}
    >
      {variant === "solid" && (
        <>
          {/* glass sheen — brightest along the top edge, blended into the
              surface underneath like light passing through glass */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/50 via-white/10 to-transparent opacity-80 mix-blend-overlay" />
          {/* faint ambient glow behind the glass */}
          <span className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-white/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </>
      )}
      {/* subtle shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -z-10 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[120%]" />
      {telegram && <TelegramIcon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </Link>
  );
}
