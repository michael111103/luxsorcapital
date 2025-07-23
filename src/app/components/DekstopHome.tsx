"use client";

import Head from "next/head";
import Image from "next/image";

import { SiteHeader } from "./header";
import Pricing, { Plan } from "./pricing";
import Footer from "./footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen font-inter">
      <Head>
        <title>QUARK - Your AI Assistant</title>
        <meta
          name="description"
          content="QUARK is an AI-powered assistant built for productivity, creativity, and work."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative w-full h-screen px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden bg-black">
        <div className="max-w-xl z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            The AI assistant that <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              adapts to your world
            </span>
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Chat, generate content, analyze documents, and boost productivity
            with QUARK. Built for work, creativity, and everyday tasks.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-white/30 hover:border-white text-white font-semibold text-sm"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="relative mt-10 md:mt-0 md:ml-12 w-full md:w-[650px] z-10">
          <Image
            src="/hero-dashboard.png"
            alt="Quark demo dashboard"
            className="rounded-xl shadow-lg"
            width={650}
            height={400}
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-0" />
      </section>

      {/* Logos Section */}
      <section className="w-full bg-black py-20 px-6 flex flex-col items-center">
        <p className="text-sm text-[#b3b3b3] font-bold mb-8 tracking-wider uppercase">
          POWERED BY
        </p>
        <div className="flex justify-center items-center">
          <Image
            src="/OpenAI-white.png"
            alt="OpenAI logo"
            width={130}
            height={80}
            className="w-auto h-auto"
            priority
          />
        </div>
      </section>

      {/* Pricing (section ketiga) */}
      <Pricing />


      {/* Footer */}
      <Footer />
    </main>
  );
}
