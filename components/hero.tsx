"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const MagicRings = dynamic(() => import("@/components/MagicRings"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#7c3aed"
          colorTwo="#4f46e5"
          ringCount={6}
          speed={0.8}
          attenuation={8}
          lineThickness={1.5}
          baseRadius={0.3}
          radiusStep={0.1}
          scaleRate={0.08}
          opacity={0.6}
          noiseAmount={0.05}
          rotation={15}
          ringGap={1.4}
          followMouse
          mouseInfluence={0.15}
          parallax={0.03}
        />
      </div>

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
