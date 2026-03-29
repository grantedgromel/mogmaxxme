export default function CtaFooter() {
  return (
    <>
      <section className="py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Stop dodging the mirror, bro
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            You already know you&apos;re curious. Upload the photo. Find out
            your tier. Deal with it.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get mogged now
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            No sign-up required. Instant results.
          </p>
        </div>
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
