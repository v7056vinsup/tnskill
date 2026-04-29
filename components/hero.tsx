import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <div className="hero-glow left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-text-secondary backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Career guidance for everyone
        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Find Your{" "}
          <span className="gradient-text">Perfect Career</span>
          <br />
          Path with TNSkill
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
          Expert guidance for IT and Non-IT courses. Discover the skills that
          match your passion and build a successful future — whether you code or create.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#courses"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-accent to-gradient-end px-8 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-opacity hover:opacity-90"
          >
            Explore Courses
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-surface/50 px-8 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-surface-light"
          >
            Why TNSkill?
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-text-secondary">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">50+</div>
            <div className="mt-1 text-sm">Courses</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">10K+</div>
            <div className="mt-1 text-sm">Students Guided</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground">95%</div>
            <div className="mt-1 text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
