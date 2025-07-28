// src/app/auth/register/page.tsx
"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName]           = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setEmailError(null);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setIsLoading(false);

    if (res.status === 409) {
      // Conflict: email sudah terdaftar
      setEmailError("This email is already registered");
      return;
    }
    if (!res.ok) {
      toast.error(data.error || "Registration failed");
      return;
    }

    toast.success("Verification code sent! Please check your email");
    router.push(`/auth/verify?email=${encodeURIComponent(email)}`);
  }

  function handleGoogleSignup() {
    setIsLoading(true);
    // Panggil NextAuth Google provider, redirect ke dashboard
    signIn("google", { callbackUrl: "/dashboard" });
  }

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
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={isLoading}
              required
            />

            <div>
              <Input
                placeholder="Email address"
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setEmailError(null);
                }}
                disabled={isLoading}
                required
              />
              {emailError && (
                <p className="mt-1 text-red-500 text-sm">{emailError}</p>
              )}
            </div>

            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading" : "Sign up"}
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
            onClick={handleGoogleSignup}
            disabled={isLoading}
          >
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            {isLoading ? "Loading" : "Sign up with Google"}
          </Button>
        </div>
      </main>
    </div>
  );
}
