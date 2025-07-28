// src/app/dashboard/page.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";
import {
  PlusIcon,
  Search,
  BookOpenIcon,
  ArrowLeftIcon,
  UserCircleIcon,
  ChevronLeftIcon,
} from "lucide-react";

interface ChatMessage {
  id: number;
  author: "user" | "bot";
  text: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  // Scroll ke bawah saat ada pesan baru
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fetch profil
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => {
        if (res.status === 401) throw new Error("Not authenticated");
        return res.json();
      })
      .then((data) => setUserEmail(data.email))
      .catch(() => {
        toast.error("Silakan login terlebih dahulu");
        router.push("/auth/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/auth/login");
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = {
      id: Date.now(),
      author: "user",
      text: input.trim(),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    // Dummy bot reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, author: "bot", text: "Ini balasan AI (dummy)" },
      ]);
    }, 700);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white">Loading…</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`flex flex-col bg-gray-900 transition-all duration-200 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white"
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <ArrowLeftIcon />}
          </button>
        </div>

        <div className="px-4 space-y-2">
          <button className="flex items-center w-full gap-2 px-3 py-2 rounded hover:bg-gray-800">
            <PlusIcon />
            {sidebarOpen && <span>New chat</span>}
          </button>
          <div className="relative">
            <Search className="absolute top-2 left-3 text-gray-500" />
            <Input
              placeholder="Search chats"
              className={`pl-10 pr-3 py-1 bg-gray-800 text-sm ${
                sidebarOpen ? "w-full" : "w-10"
              } transition-all`}
              disabled={!sidebarOpen}
            />
          </div>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-1 overflow-y-auto">
          <div className="text-xs uppercase text-gray-500 px-3 mb-2">
            Library
          </div>
          <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800">
            <BookOpenIcon />
            {sidebarOpen && <span>Docs</span>}
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-800">
            <BookOpenIcon />
            {sidebarOpen && <span>Playground</span>}
          </button>
          {/* tambahkan item lain */}
        </nav>

        <div className="mt-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <UserCircleIcon size={24} />
            {sidebarOpen && <span className="text-sm">{userEmail}</span>}
          </div>
          {sidebarOpen && (
            <button
              onClick={handleLogout}
              className="mt-4 w-full text-left text-sm text-red-500 hover:text-red-400"
            >
              Logout
            </button>
          )}
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex flex-1 flex-col">
        <header className="border-b border-gray-700 px-6 py-4">
          <h1 className="text-2xl font-semibold">AI Chat</h1>
        </header>

        <main className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <p className="mb-2">Ready when you are.</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  disabled
                  placeholder="Ask anything..."
                  className="bg-gray-800 px-4 py-2 rounded-full w-64 text-sm"
                />
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-xl px-4 py-2 rounded-2xl ${
                  msg.author === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "mr-auto bg-gray-800 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
          <div ref={endRef} />
        </main>

        <footer className="border-t border-gray-700 px-6 py-4">
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
