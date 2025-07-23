"use client";

import Link from "next/link";
import { ReactNode } from "react";

type FooterLink = { label: string; href: string; external?: boolean };

const platform: FooterLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Demo", href: "/demo" },
  { label: "Docs", href: "/docs" },
];

const company: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const follow: FooterLink[] = [
  { label: "Twitter", href: "https://x.com/MRKT_AI", external: true },
  { label: "Instagram", href: "https://instagram.com/mrkt_ai", external: true },
  // { label: "LinkedIn", href: "https://linkedin.com/..." , external:true},
];

function SmartLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  const isHash = href.startsWith("#");

  if (isHash) {
    return (
      <a
        href={href}
        className="text-gray-400 hover:text-white"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="text-gray-400 hover:text-white">
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-6">QUARK</h3>
            <p className="text-gray-400">
              Your all-in-one AI assistant for writing, chatting, summarizing, and learning.
              Powered by OpenAI.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              {platform.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <SmartLink href={item.href}>{item.label}</SmartLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Follow
            </h4>
            <div className="flex space-x-6">
              {follow.map((item) => (
                <SmartLink key={item.label} href={item.href} external={item.external}>
                  {item.label}
                </SmartLink>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {year} QUARK. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <SmartLink href="/privacy">Privacy Policy</SmartLink>
            <SmartLink href="/terms">Terms of Service</SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
