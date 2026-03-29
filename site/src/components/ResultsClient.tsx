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
  const [photo, setPhoto] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const idx = Math.min(
    Math.max(0, parseInt(archetypeIndex ?? "0", 10) || 0),
    archetypes.length - 1
  );
  const archetype = archetypes[idx];

  // Load photo from sessionStorage
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("mogmaxxme-photo");
      if (stored) setPhoto(stored);
    } catch {
      // sessionStorage unavailable
    }
  }, []);

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

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {photo && (
            <div className="mb-8 flex justify-center">
              <img
                src={photo}
                alt="Your photo"
                className="w-32 h-32 object-cover rounded-xl opacity-60"
              />
            </div>
          )}

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
          {/* Left: user photo + archetype portrait */}
          <div className="md:w-80 shrink-0 bg-muted p-6 sm:p-8 flex flex-col items-center justify-center gap-6">
            {photo ? (
              <div className="relative">
                <img
                  src={photo}
                  alt="Your photo"
                  className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-foreground text-background text-xs font-bold px-2 py-1 rounded-lg">
                  {archetype.tier}-Tier
                </div>
              </div>
            ) : (
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl bg-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">No photo</span>
              </div>
            )}

            <div className="w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src={archetype.image}
                alt={archetype.name}
                width={112}
                height={112}
                className="w-full h-full object-contain"
              />
            </div>
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
