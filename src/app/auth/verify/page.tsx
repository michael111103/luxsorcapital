// src/app/auth/verify/page.tsx
"use client";
// *** WAJIB di baris pertama sebelum import apapun ***
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

export default function VerifyPage() {
  const params = useSearchParams();
  const email = params.get("email") || "";
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  async function handleVerify(e: React.FormEvent) {
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
      toast.error(data.error || "Invalid code");
      return;
    }

    toast.success("Your account has been verified. You can now log in.");
    router.push("/auth/login");
  }

  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Verify Your Email
      </h1>
      <p className="mb-6 text-white/70">
        A code was sent to <strong>{email}</strong>
      </p>
      <form onSubmit={handleVerify} className="space-y-4">
        <Input
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <Button type="submit" disabled={isVerifying}>
          {isVerifying ? "Verifying…" : "Verify"}
        </Button>
      </form>
    </div>
  );
}
