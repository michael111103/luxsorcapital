"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      toast.error("Login failed", { description: res.error });
    } else {
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    }
  };

  const handleGoogle = () => {
    setIsLoading(true);
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4">
        <h1 className="text-xl font-bold">REPYST</h1>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <h2 className="text-2xl text-center">Welcome back</h2>
          <form onSubmit={handleEmailSignIn} className="space-y-4">
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
              {isLoading ? "Loading…" : "Login"}
            </Button>
          </form>
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/auth/register" className="underline text-blue-400">
              Sign up
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
            {isLoading ? "Loading…" : "Login with Google"}
          </Button>
        </div>
      </main>
    </div>
  );
}
