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

  const solid =
    "text-white bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_-8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_-4px_rgba(255,255,255,0.45)] hover:from-white hover:via-neutral-100 hover:to-white hover:text-black";

  const outline =
    "text-white bg-white/[0.04] backdrop-blur-md border border-white/15 hover:border-white/40 hover:bg-white/10";

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${variant === "solid" ? solid : outline} ${sizeMap[size]} ${className}`}
    >
      {/* subtle shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -z-10 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[120%]" />
      {telegram && <TelegramIcon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </Link>
  );
}
