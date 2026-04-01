import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function CtaFooter() {
  return (
    <>
      {/* Accent band divider - inspired by SaveSnapNow's dark band with highlighted keywords */}
      <div className="bg-foreground py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-center text-lg sm:text-xl font-bold text-background leading-relaxed">
            UPLOAD. <span className="text-primary">GET ROASTED.</span> SHARE YOUR{" "}
            <span className="text-secondary">TIER.</span> BECOME{" "}
            <span className="text-accent">SELF-AWARE.</span>
          </p>
        </div>
      </div>

      <section className="py-24 px-6 bg-muted relative scanlines">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 uppercase">
            Stop dodging the mirror, bro
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            You already know you&apos;re curious. Upload the photo. Find out
            your tier. Deal with it.
          </p>

          <Link
            href="/upload"
            className="btn-glow inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground text-lg font-mono font-bold tracking-wide rounded hover:brightness-110 transition-all duration-200 active:scale-[0.98]"
          >
            Get mogged now
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="font-mono text-sm text-muted-foreground mt-4 uppercase tracking-wide">
            No sign-up required. Instant results.
          </p>
        </AnimateOnScroll>
      </section>

      <footer className="py-8 px-6 border-t-2 border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-mono font-bold text-foreground">MogMaxxMe</span>{" "}
            &copy; 2024
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            Built different. Literally.
          </p>
        </div>
      </footer>
    </>
  );
}
