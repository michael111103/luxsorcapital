"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setIsLoading(false);
    if (!res.ok) {
      toast.error(data.error || "Sign up failed");
    } else {
      toast.success("Verification code sent!");
      router.push(`/auth/verify?email=${encodeURIComponent(email)}`);
    }
  };

  const handleGoogle = () => {
    setIsLoading(true);
    // kalau mau Google sign up: signIn("google", { callbackUrl: "/dashboard" })
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4">
        <h1 className="text-xl font-bold">REPYST</h1>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <h2 className="text-2xl text-center">Create an account</h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <Input
              placeholder="Email address"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading…" : "Sign up"}
            </Button>
          </form>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="underline text-blue-400">
              Log in
            </a>
          </p>
          <div className="border-t border-gray-700 pt-4 text-center text-sm">
            OR
          </div>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={handleGoogle}
            disabled={isLoading}
          >
            <Image
              src="/google-logo.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            {isLoading ? "Loading…" : "Sign up with Google"}
          </Button>
        </div>
      </main>
    </div>
  );
}


