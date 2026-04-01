import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-24 overflow-hidden scanlines">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text side */}
        <div>
          <p className="font-mono text-sm font-bold tracking-widest text-primary mb-4 uppercase">
            // AI Physique Analysis
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6 glitch-text">
            The AI that tells you what your gym bros{" "}
            <span className="text-primary crt-glow">won&apos;t.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
            Upload your physique. Get sorted into one of 12 archetypes across 6
            tiers. Receive a brutally honest roast with real advice underneath.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/upload"
              className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-mono font-bold tracking-wide rounded transition-all duration-200 active:scale-[0.98] hover:brightness-110"
            >
              Find your tier
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#tier-list"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-secondary text-secondary font-mono font-bold tracking-wide rounded hover:bg-secondary hover:text-secondary-foreground transition-all duration-200 active:scale-[0.98]"
            >
              View tier list
            </a>
          </div>
        </div>

        {/* Mascot side */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 bg-primary/10 rounded -rotate-3 border-2 border-primary/20" />
            <div className="relative rounded overflow-hidden border-2 border-border bg-card">
              <Image
                src="/gigachad-hero.gif"
                alt="Gigachad"
                width={420}
                height={420}
                unoptimized
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Tier badge overlay */}
            <div className="absolute -bottom-3 -right-3 bg-tier-s text-background font-mono font-bold text-lg px-4 py-2 rounded border-2 border-background">
              S-TIER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
