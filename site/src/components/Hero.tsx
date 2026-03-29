import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div>
          <p className="text-sm font-medium tracking-wide text-muted-foreground mb-4 uppercase">
            AI Physique Analysis
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            The AI that tells you what your gym bros{" "}
            <em>won&apos;t.</em>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
            Upload your physique. Get sorted into one of 12 archetypes across 6
            tiers. Receive a brutally honest roast with real advice underneath.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tier-list"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Find your tier
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Mascot side */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-muted rounded-2xl -rotate-3" />
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card p-4">
              <Image
                src="/archetypes/S-Tier Gigachad.png"
                alt="S-Tier Gigachad"
                width={384}
                height={384}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-foreground text-background text-sm font-bold px-3 py-1.5 rounded-lg">
              S-Tier
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
