// src/app/dashboard/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.status === 401) {
          throw new Error("Not authenticated");
        }
        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await res.json();
        setUserEmail(data.email);
      } catch (err) {
        toast.error("Please sign in first");
        router.push("/auth/login");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/auth/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white">Loading dashboard…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </header>

      <section className="max-w-3xl mx-auto bg-zinc-900/80 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
        <p className="mb-2">
          You are signed in as{" "}
          <span className="font-medium">{userEmail}</span>
        </p>
        <p>
          This is your dashboard. Feel free to add your own components and data here.
        </p>
      </section>
    </div>
  );
}
