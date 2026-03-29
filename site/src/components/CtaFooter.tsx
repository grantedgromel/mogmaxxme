export default function CtaFooter() {
  return (
    <>
      {/* Final CTA */}
      <section className="py-24 px-4 bg-card/30 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-5xl font-bold text-primary mb-6 crt-glow">
            STOP DODGING
            <br />
            THE MIRROR, BRO
          </h2>
          <p className="text-foreground/80 font-sans text-lg mb-10 max-w-lg mx-auto">
            You already know you&apos;re curious. You already know you&apos;re
            scrolling past this trying to pretend you don&apos;t care. Just upload
            the photo. Find out your tier. Deal with it.
          </p>

          <a
            href="#"
            className="inline-block px-12 py-5 bg-primary text-primary-foreground font-mono text-xl font-bold uppercase tracking-wider rounded pulse-glow hover:bg-primary/90 transition-colors mb-4"
          >
            Get Mogged Now
          </a>

          <p className="font-mono text-xs text-muted-foreground mt-4">
            No sign-up required. Instant results. Instant regret.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">MOGMAXXME</span> &copy; 2024
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            Built different. Literally.
          </p>
        </div>
      </footer>
    </>
  );
}
