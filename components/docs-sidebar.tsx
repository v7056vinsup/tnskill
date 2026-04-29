"use client";

import { useState } from "react";

interface NavItem {
  title: string;
  slug: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
      { title: "Quick Start", slug: "quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Project Structure", slug: "project-structure" },
      { title: "Routing", slug: "routing" },
      { title: "Components", slug: "components" },
      { title: "Styling", slug: "styling" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Endpoints", slug: "endpoints" },
      { title: "Authentication", slug: "authentication" },
      { title: "Middleware", slug: "middleware" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { title: "Vercel", slug: "vercel" },
      { title: "Self-Hosting", slug: "self-hosting" },
      { title: "Docker", slug: "docker" },
    ],
  },
  {
    title: "UI Components",
    items: [
      { title: "Button", slug: "button" },
      { title: "Loader", slug: "loader" },
      { title: "Table", slug: "table" },
      { title: "Breadcrumbs", slug: "breadcrumbs" },
      { title: "Dropdown", slug: "dropdown" },
      { title: "Input", slug: "input" },
      { title: "Card", slug: "card" },
      { title: "Badge", slug: "badge" },
      { title: "Modal", slug: "modal" },
      { title: "Toast", slug: "toast" },
    ],
  },
];

interface DocsSidebarProps {
  activeSlug: string;
  onNavigate: (slug: string) => void;
}

export default function DocsSidebar({ activeSlug, onNavigate }: DocsSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarContent = (
    <nav className="flex flex-col gap-6">
      {navigation.map((section) => (
        <div key={section.title}>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            {section.title}
          </h3>
          <ul className="flex flex-col gap-1">
            {section.items.map((item) => (
              <li key={item.slug}>
                <button
                  onClick={() => {
                    onNavigate(item.slug);
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left rounded-md px-3 py-1.5 text-sm transition-colors ${
                    activeSlug === item.slug
                      ? "bg-zinc-900 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 lg:hidden dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        Menu
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-zinc-200 bg-white p-6 transition-transform lg:hidden dark:border-zinc-800 dark:bg-zinc-950 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Docs
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-md p-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white p-6 lg:block dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-6">
          <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            Docs
          </span>
        </div>
        {sidebarContent}
      </aside>
    </>
  );
}
