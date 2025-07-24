// app/contact/ClientContactForm.tsx
"use client";

import { useState, FormEvent } from 'react';

interface Props {
  defaultIssueType: string;
}

export default function ClientContactForm({ defaultIssueType }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState(defaultIssueType);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, issueType, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6">
      <div>
        <label className="block text-sm mb-1">Your Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Issue Type</label>
        <select
          value={issueType}
          onChange={e => setIssueType(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md"
        >
          <option value="">— select issue type —</option>
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
          onChange={e => setMessage(e.target.value)}
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
        <p className="text-green-400 text-center mt-2">Message sent! 🙌</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
