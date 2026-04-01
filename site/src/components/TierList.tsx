"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { archetypes, tiers } from "@/lib/archetypes";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const tierColors: Record<string, string> = {
  S: "bg-tier-s",
  A: "bg-tier-a",
  B: "bg-tier-b",
  C: "bg-tier-c",
  D: "bg-tier-d",
  F: "bg-tier-f",
};

const tierBorderColors: Record<string, string> = {
  S: "border-tier-s",
  A: "border-tier-a",
  B: "border-tier-b",
  C: "border-tier-c",
  D: "border-tier-d",
  F: "border-tier-f",
};

export default function TierList() {
  const [selected, setSelected] = useState<(typeof archetypes)[number] | null>(
    null
  );

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected, close]);

  return (
    <section id="tier-list" className="py-24 px-6">
      <AnimateOnScroll className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            THE TIER LIST
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            12 archetypes. 6 tiers. Click any character to read their roast.
          </p>
        </div>

        <div className="space-y-2">
          {tiers.map((tier) => {
            const members = archetypes.filter((a) => a.tier === tier);
            return (
              <div
                key={tier}
                className={`flex items-stretch rounded overflow-hidden border-l-4 ${tierBorderColors[tier]} bg-card`}
              >
                <div className={`flex items-center justify-center w-16 sm:w-20 ${tierColors[tier]} shrink-0`}>
                  <span className="text-background text-2xl sm:text-3xl font-mono font-bold drop-shadow-sm">
                    {tier}
                  </span>
                </div>

                <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 flex-wrap items-center">
                  {members.map((archetype) => (
                    <button
                      key={archetype.name}
                      onClick={() => setSelected(archetype)}
                      className="group flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                    >
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded overflow-hidden border-2 border-transparent group-hover:${tierBorderColors[archetype.tier]} transition-colors duration-200 bg-muted`}>
                        <Image
                          src={archetype.image}
                          alt={archetype.name}
                          width={80}
                          height={80}
                          unoptimized={archetype.image.endsWith(".gif")}
                          className="w-full h-full object-contain p-0.5"
                        />
                      </div>
                      <span className="font-mono text-[9px] sm:text-[11px] mt-1.5 text-muted-foreground text-center leading-tight max-w-[4rem] sm:max-w-[5rem] uppercase tracking-wide">
                        {archetype.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </AnimateOnScroll>

      {/* Modal overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          <div className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded border-2 ${tierBorderColors[selected.tier]} bg-card shadow-lg scale-up flex flex-col sm:flex-row`}>
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {/* Portrait - left side */}
            <div className="sm:w-64 md:w-72 shrink-0 bg-muted flex items-center justify-center p-8 sm:p-6">
              <Image
                src={selected.image}
                alt={selected.name}
                width={280}
                height={280}
                unoptimized={selected.image.endsWith(".gif")}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
              />
            </div>

            {/* Info - right side */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`font-mono text-sm font-bold px-3 py-1.5 rounded ${tierColors[selected.tier]} text-background`}>
                  {selected.tier}-TIER
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground uppercase">
                  {selected.name}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
