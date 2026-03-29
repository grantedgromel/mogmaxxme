"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { archetypes } from "@/lib/archetypes";
const loadingMessages = [
  "Scanning muscle groups...",
  "Measuring proportions...",
  "Judging your life choices...",
  "Calculating tier...",
];

export default function ResultsClient({
  archetypeIndex,
}: {
  archetypeIndex?: string;
}) {
  const [loading, setLoading] = useState(true);
  const [messageIdx, setMessageIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const idx = Math.min(
    Math.max(0, parseInt(archetypeIndex ?? "0", 10) || 0),
    archetypes.length - 1
  );
  const archetype = archetypes[idx];

  // Loading sequence
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setLoading(false);
      setProgress(100);
      return;
    }

    setProgress(10);
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => { setProgress(30); setMessageIdx(1); }, 600));
    timers.push(setTimeout(() => { setProgress(60); setMessageIdx(2); }, 1200));
    timers.push(setTimeout(() => { setProgress(85); setMessageIdx(3); }, 1800));
    timers.push(setTimeout(() => { setProgress(100); }, 2200));
    timers.push(setTimeout(() => setLoading(false), 2600));

    return () => timers.forEach(clearTimeout);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Gigachad ascends from bottom to top as progress increases
  // At 0% he's at the bottom, at 100% he's at the top
  const ascendY = 100 - progress;

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="w-full max-w-sm flex flex-col items-center">
          {/* Ascending Gigachad */}
          <div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-6 overflow-hidden rounded-xl">
            <img
              src="/gigachad-loading.gif"
              alt="Gigachad ascending"
              className="absolute left-0 w-full object-contain transition-all duration-700 ease-out"
              style={{
                bottom: `${-ascendY}%`,
              }}
            />
          </div>

          <p className="text-foreground font-medium text-center mb-6">
            {loadingMessages[messageIdx]}
          </p>

          {/* Progress bar */}
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-foreground rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col px-6 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to home
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full fade-up">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
          Your results are in
        </h1>
        <p className="text-muted-foreground mb-12 text-center">
          The AI has spoken. No appeals.
        </p>

        {/* Results card */}
        <div className="w-full rounded-xl border border-border bg-card overflow-hidden flex flex-col md:flex-row">
          {/* Left: archetype portrait */}
          <div className="md:w-72 shrink-0 bg-muted flex items-center justify-center p-8">
            <Image
              src={archetype.image}
              alt={archetype.name}
              width={240}
              height={240}
              unoptimized={archetype.image.endsWith(".gif")}
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
            />
          </div>

          {/* Right: info */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-bold px-2.5 py-1 rounded bg-foreground text-background">
                {archetype.tier}-Tier
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                {archetype.name}
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4 text-base sm:text-lg">
              {archetype.description}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
              >
                Try again
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-200 active:scale-[0.98]"
              >
                Back to home
              </Link>
              <button
                onClick={copyLink}
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-all duration-200 active:scale-[0.98]"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
