import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function CtaFooter() {
  return (
    <>
      <section className="py-24 px-6 bg-muted">
        <AnimateOnScroll className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Stop dodging the mirror, bro
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            You already know you&apos;re curious. Upload the photo. Find out
            your tier. Deal with it.
          </p>

          <Link
            href="/upload"
            className="inline-flex items-center justify-center px-10 py-4 bg-foreground text-background text-lg font-semibold rounded-lg hover:opacity-90 transition-all duration-200 active:scale-[0.98]"
          >
            Get mogged now
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No sign-up required. Instant results.
          </p>
        </AnimateOnScroll>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">MogMaxxMe</span>{" "}
            &copy; 2024
          </p>
          <p className="text-sm text-muted-foreground">
            Built different. Literally.
          </p>
        </div>
      </footer>
    </>
  );
}
