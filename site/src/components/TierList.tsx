"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { archetypes, tiers } from "@/lib/archetypes";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The tier list
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            12 archetypes. 6 tiers. Click any character to read their roast.
          </p>
        </div>

        <div className="space-y-1.5">
          {tiers.map((tier) => {
            const members = archetypes.filter((a) => a.tier === tier);
            return (
              <div
                key={tier}
                className="flex items-stretch rounded-lg overflow-hidden bg-muted"
              >
                <div className="flex items-center justify-center w-14 sm:w-16 bg-foreground shrink-0">
                  <span className="text-background text-xl sm:text-2xl font-bold">
                    {tier}
                  </span>
                </div>

                <div className="flex gap-2 sm:gap-3 p-3 flex-wrap">
                  {members.map((archetype) => (
                    <button
                      key={archetype.name}
                      onClick={() => setSelected(archetype)}
                      className="group flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                    >
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-foreground/20 transition-colors duration-200 bg-card">
                        <Image
                          src={archetype.image}
                          alt={archetype.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain p-0.5"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs mt-1.5 text-muted-foreground text-center leading-tight max-w-[3.5rem] sm:max-w-[5rem]">
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

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-card shadow-lg scale-up flex flex-col sm:flex-row">
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

            {/* Portrait - left side, full height */}
            <div className="sm:w-64 md:w-72 shrink-0 bg-muted flex items-center justify-center p-8 sm:p-6">
              <Image
                src={selected.image}
                alt={selected.name}
                width={280}
                height={280}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain"
              />
            </div>

            {/* Info - right side */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold px-2.5 py-1 rounded bg-foreground text-background">
                  {selected.tier}-Tier
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">
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
