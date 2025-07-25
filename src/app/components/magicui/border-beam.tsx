// src/app/components/magicui/border‑beam.tsx
"use client";

import { cn } from "../../../lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam = ({
  className,
  size = 100,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--anchor": `${anchor}%`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      } as React.CSSProperties}
      className={cn(
        // wrapper relative & bulat
        "absolute inset-0 rounded-full",

        // border transparent (agar cuma beam-nya yang tampak)
        "[border:var(--border-width)_solid_transparent]",

        // masking supaya border cuma di padding-box
        "[mask:linear-gradient(white,white),linear-gradient(transparent,transparent)]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect]",

        // pseudo-element beam
        "after:absolute after:inset-0",
        "after:rounded-full",
        "after:[offset-path:rect(0_auto_auto_0_round_var(--size))]",
        "after:[offset-anchor:var(--anchor)_50%]",
        "after:animate-border-beam after:[animation-delay:var(--delay)]",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
        className
      )}
    />
  );
};
