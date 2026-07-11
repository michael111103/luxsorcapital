// src/app/components/Footer.tsx
import { Mail, Phone } from "lucide-react";
import { LuxsorMark, LuxsorWordmark } from "./icons/BrandIcons";
import { SITE, FOOTER_DISCLAIMER } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 sm:px-8 py-14 sm:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2.5">
          <LuxsorMark className="w-7 h-7" />
          <LuxsorWordmark className="text-base" />
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-sm text-white/50">
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" /> {SITE.phone}
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5" /> {SITE.email}
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
