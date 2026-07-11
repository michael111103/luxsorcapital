// src/app/components/WhySection.tsx
"use client";

import Reveal from "./ui/Reveal";
import ChatBubble from "./ui/ChatBubble";
import { WHY } from "@/lib/data";

export default function WhySection() {
  return (
    <section id="kenapa" className="relative px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-center text-2xl sm:text-4xl font-bold tracking-tight mb-14 sm:mb-16">
            {WHY.eyebrow}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="sm:mt-8 sm:-mr-8 relative z-0">
              <ChatBubble
                name={WHY.bubbles[0].name}
                role={WHY.bubbles[0].role}
                time={WHY.bubbles[0].time}
                lines={[WHY.bubbles[0].text]}
              />
            </div>
            <div className="sm:-ml-8 relative z-10">
              <ChatBubble
                name={WHY.bubbles[1].name}
                role={WHY.bubbles[1].role}
                time={WHY.bubbles[1].time}
                lines={[WHY.bubbles[1].text]}
                source={WHY.bubbles[1].source}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="max-w-2xl mx-auto text-center text-lg sm:text-2xl leading-relaxed">
            <span className="font-semibold text-white">{WHY.boldText}</span>{" "}
            <span className="text-white/45">{WHY.restText}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
