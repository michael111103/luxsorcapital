// src/app/login/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Login dengan credentials
  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (res?.error) {
      toast.error("Login gagal", { description: res.error });
    } else {
      toast.success("Berhasil login!");
      router.push("/dashboard");
    }
  };

  // Login dengan Google
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Login</h1>
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white mb-1">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign in with Email"}
          </Button>
        </form>

        <div className="relative my-6">
          <span className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-700" />
          </span>
          <p className="relative text-xs text-center text-white/70 bg-black inline-block px-2">
            Or continue with
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          <img src="/google-logo.svg" alt="Google" className="w-5 h-5 mr-2" />
          {isLoading ? "Loading..." : "Sign in with Google"}
        </Button>
      </div>
    </div>
  );
}
