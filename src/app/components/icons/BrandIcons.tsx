// src/app/components/icons/BrandIcons.tsx
// Custom, hand-drawn SVG icons for the brand (not stock/lucide) so the
// wordmark and Telegram glyph match Luxsor Capital's own identity.

export function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M21.05 3.16 2.63 10.36c-1.2.48-1.19 1.15-.22 1.45l4.73 1.48 1.83 5.6c.22.6.36.83.75.83.31 0 .45-.14.62-.3l1.9-1.85 4.7 3.47c.86.48 1.48.23 1.7-.8l3.08-14.5c.32-1.26-.48-1.83-1.67-1.58Zm-12.3 10.9-.4 3.75-.9-4.72 9.16-8.28c.32-.28-.06-.42-.47-.16L8.03 12.9l-4.6-1.44 17.3-6.67-3.98 19.27-4.9-3.62-2.1 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LuxsorMark({ className = "w-8 h-8" }: { className?: string }) {
  // Abstract ascending peak / "L" made of two strokes that also reads as
  // a rising price chart - the brand's signature shape.
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="luxsorGrad" x1="2" y1="34" x2="38" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4b4b4f" />
          <stop offset="0.55" stopColor="#e8e8ea" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d="M6 34V10" stroke="url(#luxsorGrad)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M6 34H30" stroke="url(#luxsorGrad)" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M6 24 16 15 22.5 20.5 35 7"
        stroke="url(#luxsorGrad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 7h8v8" stroke="url(#luxsorGrad)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LuxsorWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-baseline gap-1.5 leading-none tracking-tight ${className}`}>
      <span className="font-bold text-white">LUXSOR</span>
      <span className="font-normal text-white/55">CAPITAL</span>
    </span>
  );
}
