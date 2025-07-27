// src/app/auth/register/RegisterForm.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) {
        toast.error(data.error ?? "Registration failed.");
        return;
      }

      toast.success("Check your email for the verification code");
      router.push(`/auth/verify?email=${encodeURIComponent(email)}`);
    } catch (err) {
      setIsLoading(false);
      toast.error("Unexpected error. Please try again.");
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4 max-w-md mx-auto">
      <Input placeholder="Full name" value={name} onChange={e => setName(e.target.value)} disabled={isLoading} required />
      <Input placeholder="Email address" type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} required />
      <Input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} required />
      <Button type="submit" disabled={isLoading || !name || !email || !password}>
        {isLoading ? "Signing up…" : "Sign Up"}
      </Button>
    </form>
  );
}
