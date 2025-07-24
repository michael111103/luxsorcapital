// src/app/privacy/page.tsx
"use client";

import Link from "next/link";
import { SiteHeader } from "../components/header";
import Footer from "../components/footer";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "intro",     title: "Introduction" },
  { id: "collect",   title: "Information We Collect" },
  { id: "use",       title: "How We Use Your Information" },
  { id: "legal",     title: "Legal Basis & Compliance (Indonesia)" },
  { id: "share",     title: "How We Share Information" },
  { id: "retention", title: "Data Retention" },
  { id: "security",  title: "Security" },
  { id: "rights",    title: "Your Rights & Choices" },
  { id: "children",  title: "Children’s Privacy" },
  { id: "intl",      title: "International Transfers" },
  { id: "changes",   title: "Changes to This Policy" },
  { id: "contact",   title: "Contact Us" },
];

export default function PrivacyPage() {
  const updatedAt = new Date().toLocaleDateString("en-GB", {
    day:   "2-digit",
    month: "2-digit",
    year:  "numeric",
  });

  return (
    <div className="bg-black text-white font-inter min-h-screen flex flex-col">


      {/* HERO & TOC */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
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

      {/* CONTENT */}
      <main className="flex-1 px-4 md:px-8 pb-24">
        <article className="prose prose-invert prose-headings:font-semibold prose-p:text-white/80 prose-li:text-white/80 max-w-2xl mx-auto">
          {/* Intro */}
          <Section id="intro" title="Introduction">
            <p>
              Welcome to QUARK (“we”, “us”, “our”), operated from Surabaya, Indonesia. This Privacy
              Policy explains how we collect, use, disclose, and protect your personal data when you
              use our website, mobile web experience, and AI assistant products (collectively, the
              “Services”). By accessing or using the Services, you agree to this Policy. If you do
              not agree, please discontinue use.
            </p>
          </Section>

          {/* Information We Collect */}
          <Section id="collect" title="Information We Collect">
            <p>We collect information in three primary ways:</p>
            <ul>
              <li>
                <strong>Information you provide directly:</strong> name, email, password, billing
                details (processed by trusted payment partners), documents/files you upload (PDF,
                CSV, etc.), prompts/chats, and feedback.
              </li>
              <li>
                <strong>Information collected automatically:</strong> device & browser info, OS,
                IP address, approximate location, pages visited, feature usage, and crash/diagnostic
                logs.
              </li>
              <li>
                <strong>Information from third parties:</strong> if you connect external services
                (e.g., cloud storage), we receive only the data required to enable that integration,
                according to permissions you grant.
              </li>
            </ul>
          </Section>

          {/* How We Use Your Information */}
          <Section id="use" title="How We Use Your Information">
            <ul>
              <li>Operate, maintain, and improve the Services and user experience.</li>
              <li>Process your prompts/files and return AI‑generated results.</li>
              <li>Personalize content and remember preferences.</li>
              <li>Send service updates, security alerts, and respond to support requests.</li>
              <li>Analyze usage trends to build new features and ensure reliability.</li>
              <li>Comply with Indonesian laws and enforce our Terms of Service.</li>
            </ul>
          </Section>

          {/* Legal Basis & Compliance (Indonesia) */}
          <Section id="legal" title="Legal Basis & Compliance (Indonesia)">
            <p>
              We process personal data in accordance with Indonesian regulations, including but not
              limited to:
            </p>
            <ul>
              <li>
                <strong>Law No. 27 of 2022 on Personal Data Protection (UU PDP).</strong>
              </li>
              <li>
                <strong>Law No. 11 of 2008 on Electronic Information and Transactions (UU ITE)</strong> and its amendments,
                and <strong>Government Regulation No. 71 of 2019 (PP 71/2019)</strong>.
              </li>
            </ul>
            <p>Our legal bases include:</p>
            <ul>
              <li><strong>Consent:</strong> When you sign up, upload data, or enable integrations, you consent to processing for those purposes.</li>
              <li><strong>Contractual necessity:</strong> Processing needed to provide and maintain the Services you request.</li>
              <li><strong>Legitimate interests:</strong> Improving security, preventing fraud, and enhancing features—balanced with your rights.</li>
              <li><strong>Legal obligations:</strong> Fulfilling duties required by Indonesian law.</li>
            </ul>
          </Section>

          {/* How We Share Information */}
          <Section id="share" title="How We Share Information">
            <ul>
              <li><strong>Service providers:</strong> hosting, analytics, payment, and support partners who may access data solely to perform services for us.</li>
              <li><strong>AI/model providers:</strong> Your prompts/files may be sent to model APIs to generate responses. Where possible, we opt out of model training using your data.</li>
              <li><strong>Legal & safety:</strong> We may disclose information if required by law or to protect rights, property, or safety of QUARK, users, or the public.</li>
              <li><strong>Business transfers:</strong> In a merger or acquisition, your data may be transferred as part of the transaction.</li>
            </ul>
          </Section>

          {/* Data Retention */}
          <Section id="retention" title="Data Retention">
            <p>
              We keep personal data only as long as necessary to provide the Services, meet legal
              obligations, resolve disputes, and enforce agreements. You can request deletion; we
              will comply unless retention is required by law or legitimate business purposes.
            </p>
          </Section>

          {/* Security */}
          <Section id="security" title="Security">
            <p>
              We implement administrative, technical, and physical safeguards to protect your data.
              However, no method of transmission or storage is fully secure; we cannot guarantee
              absolute security.
            </p>
          </Section>

          {/* Your Rights & Choices */}
          <Section id="rights" title="Your Rights & Choices">
            <p>
              Under UU PDP and related Indonesian laws, you may have the right to:
            </p>
            <ul>
              <li>Access and obtain a copy of your personal data.</li>
              <li>Correct or update inaccurate data.</li>
              <li>Delete or anonymize data in certain circumstances.</li>
              <li>Withdraw consent for processing based on consent.</li>
              <li>Delay or restrict specific processing activities.</li>
              <li>Complain to the Indonesian data protection authority once formally established.</li>
            </ul>
            <p>
              To exercise these rights, contact us via the email below. We may verify your identity
              before fulfilling requests.
            </p>
          </Section>

          {/* Children’s Privacy */}
          <Section id="children" title="Children’s Privacy">
            <p>
              Our Services are not intended for individuals under 13 years old (or under 18 without
              parental/guardian consent). We do not knowingly collect data from children. If we
              discover such data, we will delete it.
            </p>
          </Section>

          {/* International Transfers */}
          <Section id="intl" title="International Transfers">
            <p>
              Your data may be stored or processed outside Indonesia. By using the Services, you
              acknowledge and consent to these transfers. We take reasonable steps to ensure your
              data receives adequate protection in line with Indonesian law and industry standards.
            </p>
          </Section>

          {/* Changes to This Policy */}
          <Section id="changes" title="Changes to This Policy">
            <p>
              We may update this Policy from time to time. We will revise the “Last updated” date
              and, if changes are material, notify you via email or in‑app notice.
            </p>
          </Section>

          {/* Contact Us */}
          <Section id="contact" title="Contact Us">
            <p>
              Questions or requests? Email us at{" "}
              <Link href="mailto:support@quark.ai" className="underline">
                support@quark.ai
              </Link>{" "}
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
