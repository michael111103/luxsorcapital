"use client";

import React, { useState, FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

export default function VerifyClient() {
  const params = useSearchParams();
  const email = params.get("email") || "";
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  async function handleVerify(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsVerifying(true);
    const res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });
    const data = await res.json();
    setIsVerifying(false);

    if (!res.ok) {
      toast.error(data.error || "Invalid or expired code");
    } else {
      toast.success("Verified! You can now log in.");
      router.push("/auth/login");
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4">
        <h1 className="text-xl font-bold">REPYST</h1>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <h2 className="text-2xl text-center">Verify Your Email</h2>
          <p className="text-center text-sm">
            A code was sent to <strong>{email}</strong>
          </p>
          <form onSubmit={handleVerify} className="space-y-4">
            <Input
              placeholder="Enter verification code"
              value={code}
              onChange={e => setCode(e.target.value)}
              disabled={isVerifying}
              required
            />
            <Button type="submit" className="w-full" disabled={isVerifying}>
              {isVerifying ? "Verifying…" : "Verify"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
