const competitors = [
  {
    name: "Reddit",
    lines: [
      '"Looking good bro! Keep it up!"',
      '"Solid progress king"',
      '"Everyone starts somewhere"',
    ],
    verdict: "Lies. All of it.",
  },
  {
    name: "Your Gym Buddy",
    lines: [
      '"Nah you look great dude"',
      '"You\'re definitely bigger than last month"',
      '"Your arms look way bigger in that lighting"',
    ],
    verdict: "He\'s lying too.",
  },
  {
    name: "The Mirror",
    lines: [
      '"Looking pretty decent today..."',
      '"Must be the pump"',
      '"This angle is fire"',
    ],
    verdict: "You\'re lying to yourself.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-center mb-4 text-accent crt-glow">
          EVERYONE ELSE
        </h2>
        <p className="font-mono text-2xl sm:text-4xl font-bold text-center mb-12 text-primary vs-pulse">
          VS
        </p>

        {/* Versus grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {competitors.map((comp) => (
            <div
              key={comp.name}
              className="arcade-border rounded-lg p-5 bg-card/50 border-destructive/30"
            >
              <h3 className="font-mono text-base font-bold text-destructive mb-4 text-center">
                {comp.name}
              </h3>
              <ul className="space-y-2 mb-4">
                {comp.lines.map((line, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground font-sans text-sm italic"
                  >
                    {line}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-destructive/80 text-center">
                {comp.verdict}
              </p>
            </div>
          ))}
        </div>

        {/* MogMaxxMe card */}
        <div className="arcade-border rounded-lg p-8 bg-card border-primary text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-mono text-2xl font-bold text-primary mb-4">
              MOGMAXXME
            </h3>
            <div className="space-y-2 mb-6">
              <p className="text-foreground font-sans text-base italic">
                &ldquo;You&apos;re a C-Tier NPC Normie. Just a regular guy. Exists. Eats.
                Sleeps. Probably works in IT. The human equivalent of room
                temperature water.&rdquo;
              </p>
            </div>
            <div className="inline-block bg-primary/20 border border-primary rounded px-4 py-2">
              <p className="font-mono text-sm text-primary font-bold">
                THE TRUTH. DELIVERED AT 100% VOLUME.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
