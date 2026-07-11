// src/app/components/ui/ChatBubble.tsx
import { LineChart } from "lucide-react";
import { LuxsorMark } from "../icons/BrandIcons";
import { ph } from "@/lib/data";

interface ChatBubbleProps {
  name: string;
  time: string;
  lines: string[];
  role?: string;
  source?: string;
  chart?: boolean;
  className?: string;
}

export default function ChatBubble({
  name,
  time,
  lines,
  role,
  source,
  chart,
  className = "",
}: ChatBubbleProps) {
  return (
    <div
      className={`w-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/10 shrink-0">
          <LuxsorMark className="w-4 h-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-white">
            {name} {role && <span className="text-white/40 font-normal">· {role}</span>}
          </p>
          <p className="text-[11px] text-white/35">{time}</p>
        </div>
      </div>

      <div className="space-y-2 text-[13px] sm:text-sm text-white/75 leading-relaxed">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>

      {source && <p className="mt-3 text-[11px] text-white/30 italic">{source}</p>}

      {chart && (
        <div className="mt-3 rounded-xl overflow-hidden border border-white/10 relative">
          <img
            src={ph("XAUUSD 4H Chart", 500, 260)}
            alt="Chart"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] text-white/60 bg-black/60 rounded-full px-2 py-1">
            <LineChart className="w-3 h-3" /> TradingView
          </span>
        </div>
      )}

      <p className="mt-3 text-[10px] text-white/25">*Disclaimer: bukan saran keuangan.</p>
    </div>
  );
}
