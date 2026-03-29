import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Arcade cabinet top chrome */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* INSERT COIN flicker */}
        <p className="font-mono text-sm tracking-[0.3em] text-secondary mb-8 flicker uppercase">
          Insert Coin to Continue
        </p>

        {/* Main title with glitch */}
        <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold text-primary glitch-text mb-6 leading-tight">
          MOGMAXX
          <br />
          <span className="text-foreground">ME</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-sans text-foreground/90 mb-4 max-w-2xl mx-auto">
          The AI that tells you what your gym bros won&apos;t.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground font-sans mb-10">
          Upload your physique. Get your tier. Get roasted. No cap.
        </p>

        {/* Gigachad mascot */}
        <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 mb-10">
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl" />
          <div className="relative arcade-border rounded-lg overflow-hidden bg-card p-2">
            <Image
              src="/archetypes/S-Tier Gigachad.png"
              alt="S-Tier Gigachad"
              width={256}
              height={256}
              className="pixel-art w-full h-full object-contain"
              priority
            />
          </div>
          <p className="font-mono text-tier-s text-sm mt-2 crt-glow">
            S-TIER GIGACHAD
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#tier-list"
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-mono text-lg font-bold uppercase tracking-wider rounded pulse-glow hover:bg-primary/90 transition-colors"
        >
          Find Your Tier
        </a>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
