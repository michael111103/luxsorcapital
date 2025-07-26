"use client";

import Link from "next/link";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export function SiteHeader({ onNavigate }: { onNavigate?: (href: string) => void }) {
  return (
    <header className="fixed z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-white">
          REPYST
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-6 font-bold">
          {navigation.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white hover:text-gray-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate(item.href);
                  else document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white hover:text-violet-400 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* ICONS + CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="https://app.mrktedge.ai/auth"
            className="px-5 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-zinc-900 to-gray-900 hover:brightness-110 shadow-md transition-all"
          >
            Log In
          </Link>
          <Link
            href="https://app.mrktedge.ai/auth"
            className="px-5 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-zinc-900 to-zinc-900 hover:brightness-110 shadow-md transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
