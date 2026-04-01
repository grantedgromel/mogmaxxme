import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Upload your photo",
    desc: "Gym selfie, mirror pic, beach photo. We don\u2019t judge the setting\u2014just the physique.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "AI analyzes",
    desc: "Our AI scans your physique with zero emotions and maximum honesty. No feelings were considered.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Get your tier + roast",
    desc: "S through F. Your archetype, your roast, your reality check. Share it or cope quietly.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-muted relative scanlines">
      <AnimateOnScroll className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 uppercase">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three steps. No sign-up. Instant results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-card border-2 border-border rounded p-6 sm:p-8 hover:border-primary transition-colors duration-200"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="font-mono text-3xl font-bold text-primary">
                  {step.num}
                </span>
                <div className="text-secondary">
                  {step.icon}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3 uppercase">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
