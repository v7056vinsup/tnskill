import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-surface-light to-surface p-12 text-center sm:p-16">
          <div className="hero-glow left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Find Your{" "}
              <span className="gradient-text">Career Path</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-text-secondary">
              Join thousands of students who have already discovered their perfect
              career with TNSkill. Start your journey today — it&apos;s free.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#courses"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-gradient-end px-8 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-opacity hover:opacity-90"
              >
                Start Exploring
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/docs"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface/50 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-surface-light"
              >
                Read the Docs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
