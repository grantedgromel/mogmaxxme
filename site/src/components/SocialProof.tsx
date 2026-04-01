import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function SocialProof() {
  return (
    <section className="py-24 px-6">
      <AnimateOnScroll className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 uppercase">
            Everyone else vs. us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here&apos;s what you&apos;re getting instead of the truth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 lg:gap-0 items-stretch">
          {/* What they say */}
          <div className="bg-card border-2 border-border rounded-t lg:rounded-l lg:rounded-tr-none p-6 sm:p-8">
            <h3 className="font-mono text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
              What you hear
            </h3>

            <div className="space-y-4">
              <div className="border-l-2 border-border pl-4 py-1">
                <p className="text-xs font-mono text-muted-foreground mb-1 uppercase">Reddit</p>
                <p className="text-foreground italic leading-relaxed">
                  &ldquo;Looking good bro! Keep it up!&rdquo;
                </p>
                <p className="text-foreground italic leading-relaxed">
                  &ldquo;Solid progress king&rdquo;
                </p>
              </div>

              <div className="border-l-2 border-border pl-4 py-1">
                <p className="text-xs font-mono text-muted-foreground mb-1 uppercase">Your gym buddy</p>
                <p className="text-foreground italic leading-relaxed">
                  &ldquo;Nah you look great dude&rdquo;
                </p>
              </div>

              <div className="border-l-2 border-border pl-4 py-1">
                <p className="text-xs font-mono text-muted-foreground mb-1 uppercase">The mirror</p>
                <p className="text-foreground italic leading-relaxed">
                  &ldquo;This angle is fire&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* VS divider */}
          <div className="flex items-center justify-center bg-primary px-6 py-3 lg:py-0 lg:px-4 z-10">
            <span className="font-mono text-2xl font-bold text-primary-foreground tracking-widest">
              VS
            </span>
          </div>

          {/* What we say */}
          <div className="bg-card border-2 border-primary rounded-b lg:rounded-r lg:rounded-bl-none p-6 sm:p-8">
            <h3 className="font-mono text-sm font-bold text-primary uppercase tracking-widest mb-6">
              What MogMaxxMe says
            </h3>

            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                &ldquo;You&apos;re a <span className="font-mono font-bold text-tier-c">C-Tier</span> NPC Normie. Just a regular guy.
                Exists. Eats. Sleeps. Probably works in IT. Has never felt the
                pump and doesn&apos;t know what he&apos;s missing. The human
                equivalent of room temperature water. <span className="font-bold text-primary">Meh.</span>&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t-2 border-border">
                <p className="font-mono text-sm font-bold text-accent uppercase tracking-wide">
                  The truth, delivered at full volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
