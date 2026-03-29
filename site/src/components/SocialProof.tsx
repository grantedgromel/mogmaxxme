export default function SocialProof() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everyone else vs. us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Here&apos;s what you&apos;re getting instead of the truth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What they say */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
              What you hear
            </h3>

            <div className="rounded-xl border border-border p-5">
              <p className="text-sm font-medium text-muted-foreground mb-2">Reddit</p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Looking good bro! Keep it up!&rdquo;
              </p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Solid progress king&rdquo;
              </p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Everyone starts somewhere&rdquo;
              </p>
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="text-sm font-medium text-muted-foreground mb-2">Your gym buddy</p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Nah you look great dude&rdquo;
              </p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;You&apos;re definitely bigger than last month&rdquo;
              </p>
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="text-sm font-medium text-muted-foreground mb-2">The mirror</p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;Looking pretty decent today...&rdquo;
              </p>
              <p className="text-foreground italic leading-relaxed">
                &ldquo;This angle is fire&rdquo;
              </p>
            </div>
          </div>

          {/* What we say */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-6">
              What MogMaxxMe says
            </h3>

            <div className="rounded-xl border-2 border-foreground/10 bg-muted p-6 sm:p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                &ldquo;You&apos;re a C-Tier NPC Normie. Just a regular guy.
                Exists. Eats. Sleeps. Probably works in IT. Has never felt the
                pump and doesn&apos;t know what he&apos;s missing. The human
                equivalent of room temperature water. Meh.&rdquo;
              </p>
              <p className="text-sm font-semibold text-foreground">
                The truth, delivered at full volume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
