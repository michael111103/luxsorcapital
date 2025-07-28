// src/app/dashboard/page.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { UserCircle } from "lucide-react";

interface ChatMessage {
  id: number;
  author: "user" | "bot";
  text: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // scroll otomatis ke bawah setiap pesan baru
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // fetch profil
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.status === 401) throw new Error("Not authenticated");
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setUserEmail(data.email);
      } catch {
        toast.error("Silakan login terlebih dahulu");
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

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = {
      id: Date.now(),
      author: "user",
      text: input.trim(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    // TODO: panggil OpenAI API di sini, kemudian push balasan:
    const botMsg: ChatMessage = {
      id: Date.now() + 1,
      author: "bot",
      text: "Ini balasan AI (dummy)",
    };
    setTimeout(() => {
      setMessages((m) => [...m, botMsg]);
    }, 800);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white">Loading dashboard…</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-zinc-900 transition-width duration-200 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 m-2 text-white hover:bg-zinc-800 rounded"
        >
          {sidebarOpen ? "←" : "→"}
        </button>
        {sidebarOpen && (
          <div className="flex flex-col items-center mt-4 space-y-2">
            <UserCircle size={48} />
            <p className="text-sm">{userEmail}</p>
          </div>
        )}
        {/* menu kosong placeholder */}
        <nav className="mt-8 flex-1">
          {/* ... */}
        </nav>
        <div className="p-4">
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </aside>

      {/* Chat area */}
      <div className="flex flex-col flex-1">
        <header className="p-4 border-b border-zinc-700">
          <h1 className="text-2xl font-bold">AI Chat</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-800/50">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-zinc-400">
              Mulai percakapan dengan mengirim pesan…
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-md px-4 py-2 rounded-xl ${
                  msg.author === "user"
                    ? "self-end bg-blue-600 text-white"
                    : "self-start bg-zinc-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
          <div ref={endRef} />
        </main>

        <footer className="p-4 border-t border-zinc-700">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
