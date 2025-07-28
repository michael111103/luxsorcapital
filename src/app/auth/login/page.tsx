// src/app/auth/login/page.tsx
"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [busy, setBusy] = useState(false);

  async function onEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const res = await signIn("credentials", { redirect: false, email, password: pwd });
    setBusy(false);
    if (res?.error) {
      toast.error(res.error);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={onEmail} className="space-y-4 bg-zinc-900 p-8 rounded-xl">
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Input type="password" placeholder="Password" value={pwd} onChange={e => setPwd(e.target.value)} required />
        <Button type="submit" disabled={busy}>{busy ? "Loading..." : "Sign in with Email"}</Button>
      </form>
      <div className="mt-4">
        <Button onClick={() => { setBusy(true); signIn("google", { callbackUrl: "/dashboard" }); }} disabled={busy}>
          <Image src="/google-logo.svg" width={20} height={20} alt="Google" /> Google
        </Button>
      </div>
    </div>
  );
}
