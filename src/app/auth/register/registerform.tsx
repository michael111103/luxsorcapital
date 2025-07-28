// src/app/auth/register/RegisterForm.tsx
"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password: pwd }),
    });
    const j = await res.json();
    setBusy(false);
    if (!res.ok) {
      toast.error(j.error || "Registration failed");
      return;
    }
    toast.success("Registered! Check email.");
    router.push(`/auth/verify?email=${encodeURIComponent(email)}`);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <Input placeholder="Password" type="password" value={pwd} onChange={e => setPwd(e.target.value)} required />
      <Button type="submit" disabled={busy}>{busy ? "Loading..." : "Sign Up"}</Button>
    </form>
  );
}
