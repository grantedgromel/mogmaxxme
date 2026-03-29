export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three steps. No sign-up. Instant results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10">
          <div>
            <span className="text-sm font-semibold text-primary mb-3 block">
              01
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Upload your photo
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Gym selfie, mirror pic, beach photo. We don&apos;t judge the
              setting&mdash;just the physique.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-primary mb-3 block">
              02
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              AI analyzes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our AI scans your physique with zero emotions and maximum
              honesty. No feelings were considered.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-primary mb-3 block">
              03
            </span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Get your tier + roast
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              S through F. Your archetype, your roast, your reality check.
              Share it or cope quietly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
