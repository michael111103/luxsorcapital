"use client";

import React from "react";

export interface Plan {
  title: string;
  price: string;
  features: string[];
}

const defaultPlans: Plan[] = [
  {
    title: "Free",
    price: "Rp 0",
    features: [
      "Up to 15 chats per day",
      "Access to GPT‑4.1 mini",
      "Limited access to GPT‑4o, OpenAI o4-mini, and deep research",
      "Quick access, no credit card needed",
      "Great for trying out essential tools",
    ],
  },
  {
    title: "Pro",
    price: "$10/month",
    features: [
      "Everything in Free",
      "Extended limits for chats, uploads & content generation",
      "Access to GPT‑4.5 and GPT‑4.1",
      "Create tasks, projects, and use custom workflows",
      "Early access to beta features & updates",
    ],
  },
  {
    title: "Premium",
    price: "$20/month",
    features: [
      "Everything in Pro",
      "Unlimited access to all reasoning models and GPT-4o",
      "Access to OpenAI o3‑pro",
      "Deeper insights with multi-layered analysis",
      "Enhanced customization & workflow automation",
    ],
  },
];

type PricingProps = {
  plans?: Plan[];
  sectionId?: string;
};

export default function Pricing({ plans = defaultPlans, sectionId = "pricing" }: PricingProps) {
  return (
    <section
      id={sectionId}
      className="min-h-screen flex flex-col justify-center bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-400">
            Start free. Upgrade anytime. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-zinc-900 rounded-xl shadow-md p-8 border border-zinc-700 flex flex-col justify-between h-full transition-transform duration-200 hover:scale-105 hover:border-white/60 hover:shadow-[0_0_20px_#ffffff33]"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
                <ul className="space-y-3 text-gray-300">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className="mt-8 block bg-gray-600 hover:bg-gray-700 text-white text-center py-3 rounded-md font-medium"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
