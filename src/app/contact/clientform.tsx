// app/contact/ClientForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function ClientForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // Ambil ?issueType= di URL
  const params = useSearchParams();
  const defaultType = params.get("issueType") || "";
  if (!issueType && defaultType) setIssueType(defaultType);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, issueType, message }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-lg mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="text-white/70 mb-6">
          Have questions, issues, or feature requests? Fill out the form below
          and we’ll reply within one business day.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Issue Type</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
            >
              <option value="">— Select issue type —</option>
              <option value="Account Issues">Account Issues</option>
              <option value="Billing">Billing</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Feature Request">Feature Request</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-2">
              Your message has been sent! 🙌
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
