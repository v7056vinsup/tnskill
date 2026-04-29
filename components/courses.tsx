"use client";

import { useState } from "react";

type Category = "it" | "non-it";

interface Course {
  name: string;
  description: string;
  category: Category;
  icon: React.ReactNode;
  gradient: string;
}

const courses: Course[] = [
  {
    name: "Full-Stack Development",
    description: "Master frontend and backend technologies — React, Node.js, databases, and deployment.",
    category: "it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Data Science & AI",
    description: "Learn Python, machine learning, deep learning, and data visualization techniques.",
    category: "it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Cloud Computing",
    description: "AWS, Azure, and GCP — architect scalable cloud solutions and earn certifications.",
    category: "it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33c0 .063.005.126.015.188A4.5 4.5 0 002.25 15z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Cybersecurity",
    description: "Ethical hacking, network security, and threat analysis to protect digital assets.",
    category: "it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.174-2.581-.498-3.792a11.959 11.959 0 01-5.502-1.628z" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native and Flutter.",
    category: "it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Digital Marketing",
    description: "SEO, social media marketing, PPC advertising, and content strategy for business growth.",
    category: "non-it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    gradient: "from-orange-500 to-amber-600",
  },
  {
    name: "Business Management",
    description: "Leadership, project management, strategic planning, and entrepreneurship skills.",
    category: "non-it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.144-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.884.205-1.785.353-2.7.447c-1.796.197-3.624.298-5.475.298s-3.68-.1-5.475-.298a23.34 23.34 0 01-2.7-.447m0 0a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.122 48.122 0 013.413-.387m7.5 0a48.227 48.227 0 00-3.413-.387m0 0a51.836 51.836 0 00-7.5 0M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
    ),
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    name: "Graphic Design",
    description: "UI/UX design, branding, illustration, and motion graphics with industry-standard tools.",
    category: "non-it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.65-.124-.91a2.25 2.25 0 011.924-2.634l.623-.126a2.25 2.25 0 012.634 1.924c.07.372.126.768.126 1.163a4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5c0-.399.078-.65.124-.91" />
      </svg>
    ),
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    name: "Healthcare & Nursing",
    description: "Patient care, medical technology, nursing fundamentals, and health administration.",
    category: "non-it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    gradient: "from-red-500 to-rose-600",
  },
  {
    name: "Hospitality & Tourism",
    description: "Hotel management, travel operations, event planning, and customer experience.",
    category: "non-it",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.003 8.003 0 017.461 4.741M12 3a8.003 8.003 0 00-7.461 4.741m14.922 0a11.946 11.946 0 01-2.578 4.135M4.539 7.741a11.946 11.946 0 002.578 4.135m0 0a11.946 11.946 0 007.766 0m-7.766 0a11.946 11.946 0 002.578 4.135" />
      </svg>
    ),
    gradient: "from-teal-500 to-cyan-600",
  },
];

export default function Courses() {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="courses" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore <span className="gradient-text">Courses</span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            From cutting-edge technology to creative professions — find the course
            that shapes your future.
          </p>
        </div>

        <div className="mb-10 flex justify-center gap-2">
          {(["all", "it", "non-it"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gradient-to-r from-accent to-gradient-end text-white shadow-lg shadow-accent/25"
                  : "border border-border bg-surface/50 text-text-secondary hover:bg-surface-light hover:text-foreground"
              }`}
            >
              {cat === "all" ? "All Courses" : cat === "it" ? "IT Courses" : "Non-IT Courses"}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <div
              key={course.name}
              className="card-hover group rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-sm"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${course.gradient} text-white`}
              >
                {course.icon}
              </div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  {course.name}
                </h3>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase ${
                    course.category === "it"
                      ? "bg-violet-500/15 text-violet-400"
                      : "bg-blue-500/15 text-blue-400"
                  }`}
                >
                  {course.category}
                </span>
              </div>
              <p className="text-sm leading-6 text-text-secondary">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
