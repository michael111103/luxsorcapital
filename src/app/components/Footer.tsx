// src/app/components/Footer.tsx
import Image from "next/image";
import { LuxsorWordmark } from "./icons/BrandIcons";
import { SITE, FOOTER_DISCLAIMER } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 sm:px-8 py-14 sm:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2.5">
          <Image src="/logo.png" alt="Luxsor Capital" width={32} height={32} className="w-7 h-7 object-contain" />
          <LuxsorWordmark className="text-base" />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/50">
          <a
            href="https://t.me/luxoradmin"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 hover:text-white transition-colors"
          >
            @luxoradmin
          </a>
          <span className="text-white/20">|</span>
          <a
            href="https://t.me/LuxorCapital"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 hover:text-white transition-colors"
          >
            Komunitas Trading LuxorCapital
          </a>
        </div>

        <p className="mt-4 text-xs text-white/30">
          Copyright © {SITE.year} {SITE.name} {SITE.nameSuffix}. All rights reserved.
        </p>

        <p className="mt-6 max-w-xl mx-auto text-[11px] leading-relaxed text-white/25">
          {FOOTER_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}
