const steps = [
  {
    number: "01",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        {/* Camera/upload icon */}
        <rect x="6" y="12" width="36" height="28" rx="2" />
        <circle cx="24" cy="26" r="8" />
        <circle cx="24" cy="26" r="4" />
        <rect x="18" y="8" width="12" height="4" rx="1" />
      </svg>
    ),
    title: "Upload Your Photo",
    description:
      "Take a gym selfie. Mirror pic. Beach photo. We don't judge the setting -- just the physique.",
  },
  {
    number: "02",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        {/* Brain/AI scan icon */}
        <circle cx="24" cy="24" r="18" />
        <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M12 24h4M32 24h4" />
        <path d="M24 12v4M24 32v4" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
      </svg>
    ),
    title: "AI Analyzes",
    description:
      "Our AI scans your physique with zero emotions and maximum honesty. No feelings were considered.",
  },
  {
    number: "03",
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        {/* Trophy/tier icon */}
        <path d="M16 8h16v12c0 4.4-3.6 8-8 8s-8-3.6-8-8V8z" />
        <path d="M16 14H8c0 4 2 7 8 8" />
        <path d="M32 14h8c0 4-2 7-8 8" />
        <path d="M20 36h8" />
        <path d="M24 28v8" />
        <rect x="18" y="36" width="12" height="4" rx="1" />
      </svg>
    ),
    title: "Get Your Tier + Roast",
    description:
      "S through F. Your archetype, your roast, your reality check. Share it or cry about it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-3xl sm:text-5xl font-bold text-center mb-4 text-secondary crt-glow">
          HOW IT WORKS
        </h2>
        <p className="text-center text-muted-foreground mb-16 font-sans text-lg">
          Three steps. Zero sugarcoating.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative arcade-border rounded-lg p-6 bg-card text-center group hover:border-primary transition-colors"
            >
              {/* Step number */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-mono text-sm bg-primary text-primary-foreground px-3 py-1 rounded">
                STEP {step.number}
              </span>

              {/* Icon */}
              <div className="text-secondary mt-4 mb-4 flex justify-center group-hover:text-primary transition-colors">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-mono text-lg font-bold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting arrows for desktop */}
        <div className="hidden md:flex justify-center items-center mt-8 gap-4">
          <div className="w-24 h-0.5 bg-border" />
          <span className="font-mono text-primary text-xl">&gt;&gt;&gt;</span>
          <div className="w-24 h-0.5 bg-border" />
          <span className="font-mono text-primary text-xl">&gt;&gt;&gt;</span>
          <div className="w-24 h-0.5 bg-border" />
        </div>
      </div>
    </section>
  );
}
