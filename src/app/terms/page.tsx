// src/app/terms/page.tsx
"use client";

import Link from "next/link";
import Footer from "../components/footer";
import { ChevronRight } from "lucide-react";

// daftar section untuk Table of Contents
const sections = [
  { id: "intro",      title: "Introduction" },
  { id: "use",        title: "Use of the Service" },
  { id: "account",    title: "Your Account" },
  { id: "billing",    title: "Subscriptions & Billing" },
  { id: "prohibited", title: "Prohibited Conduct" },
  { id: "ip",         title: "Intellectual Property" },
  { id: "disclaimer", title: "Disclaimers" },
  { id: "liability",  title: "Limitation of Liability" },
  { id: "indemnify",  title: "Indemnification" },
  { id: "law",        title: "Governing Law (Indonesia)" },
  { id: "changes",    title: "Changes to These Terms" },
  { id: "contact",    title: "Contact Us" },
];

export default function TermsPage() {
  const updatedAt = new Date().toLocaleDateString("en-GB", {
    day:   "2-digit",
    month: "2-digit",
    year:  "numeric",
  });

  return (
    <div className="bg-black text-white font-inter min-h-screen flex flex-col">

      {/* Hero + TOC */}
      <section className="px-6 md:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
          <p className="text-white/60 text-sm mb-8">Last updated: {updatedAt}</p>
        </div>

        <nav className="mx-auto max-w-2xl border border-white/10 rounded-xl p-6 bg-zinc-900/40">
          <h2 className="text-sm uppercase tracking-widest text-white/60 mb-4">On this page</h2>
          <ul className="space-y-3">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-2 text-base md:text-lg text-white/80 hover:text-white"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="underline-offset-4 group-hover:underline">{s.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Content */}
      <main className="flex-1 px-6 md:px-8 pb-24">
        <article className="prose prose-invert prose-headings:font-semibold prose-p:text-white/80 prose-li:text-white/80 max-w-2xl mx-auto">
          <Section id="intro" title="Introduction">
            <p>
              Welcome to QUARK (“we”, “us”, “our”). These Terms of Service (“Terms”) govern your
              access to and use of our website, mobile web experience, and AI assistant products
              (collectively, the “Services”). By using the Services, you agree to these Terms.
              If you do not agree, please do not use the Services.
            </p>
          </Section>

          <Section id="use" title="Use of the Service">
            <p>
              You may use the Services only in compliance with these Terms and all applicable laws,
              including Indonesian regulations (e.g., UU ITE, UU PDP). You agree not to:
            </p>
            <ul>
              <li>Reverse‑engineer, copy or reproduce any part of the Services;</li>
              <li>Upload illegal, infringing, or harmful content;</li>
              <li>Interfere with security mechanisms or other users’ access;</li>
              <li>Use the Services to send unsolicited communications (spam).</li>
            </ul>
          </Section>

          <Section id="account" title="Your Account">
            <p>
              If you create an account, you must provide accurate information and keep it secure.
              You are responsible for all activity under your account. Immediately notify us if you
              suspect unauthorized use.
            </p>
          </Section>

          <Section id="billing" title="Subscriptions & Billing">
            <p>
              Some features require a paid subscription. Billing occurs in advance on a periodic
              basis (e.g., monthly). All payments are non‑refundable except as required by law.
              You may cancel anytime; access continues until your billing period ends.
            </p>
          </Section>

          <Section id="prohibited" title="Prohibited Conduct">
            <p>
              You agree not to:</p>
            <ul>
              <li>Use the Services for illegal purposes;</li>
              <li>Harass, threaten, or abuse others;</li>
              <li>Collect or store personal data of other users without consent;</li>
              <li>Distribute malware or engage in phishing activities.</li>
            </ul>
          </Section>

          <Section id="ip" title="Intellectual Property">
            <p>
              All intellectual property rights in the Services and content are owned by us or our
              licensors. You receive no rights except the limited license to use the Services as
              permitted by these Terms.
            </p>
          </Section>

          <Section id="disclaimer" title="Disclaimers">
            <p>
              THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.
            </p>
          </Section>

          <Section id="liability" title="Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED UNDER INDONESIAN LAW, WE WILL NOT BE LIABLE FOR ANY
              INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF
              THE SERVICES. OUR TOTAL AGGREGATE LIABILITY WILL NOT EXCEED THE AMOUNTS YOU PAID
              US IN THE PRIOR 12 MONTHS.
            </p>
          </Section>

          <Section id="indemnify" title="Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless QUARK and its affiliates from any
              claims, liabilities, or expenses arising from your breach of these Terms or your use
              of the Services.
            </p>
          </Section>

          <Section id="law" title="Governing Law (Indonesia)">
            <p>
              These Terms are governed by the laws of the Republic of Indonesia, without regard to
              conflict of law principles. Any dispute will be resolved in the courts located in
              Surabaya, Indonesia.
            </p>
          </Section>

          <Section id="changes" title="Changes to These Terms">
            <p>
              We may modify these Terms at any time. We will post the updated date at the top. If
              material changes occur, we may notify you by email or in-app notice. Continued
              use after changes constitutes acceptance.
            </p>
          </Section>

          <Section id="contact" title="Contact Us">
            <p>
              Questions? Email us at{" "}
              <Link href="mailto:support@quark.ai" className="underline">
                support@quark.ai
              </Link>{" "}
              or mail to:
            </p>
            <p className="mt-2">
              <strong>QUARK</strong><br />
              Surabaya, East Java, Indonesia
            </p>
          </Section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

// helper component
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}
