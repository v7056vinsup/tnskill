interface DocSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: DocSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Welcome to the <strong className="text-zinc-900 dark:text-zinc-100">TNSkill</strong> documentation.
          This guide will help you understand the project architecture, set up your development environment,
          and get started building features.
        </p>
        <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Tip:</strong> Use the sidebar navigation to jump between sections quickly.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "installation",
    title: "Installation",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Clone the repository and install dependencies to get started.
        </p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`git clone <repo-url>
cd tnskill
npm install`}</code>
        </pre>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          Make sure you have <strong className="text-zinc-900 dark:text-zinc-100">Node.js 18+</strong> and
          <strong className="text-zinc-900 dark:text-zinc-100"> npm</strong> installed on your machine.
        </p>
      </>
    ),
  },
  {
    id: "quick-start",
    title: "Quick Start",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Start the development server to see your changes in real time.
        </p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`npm run dev`}</code>
        </pre>
        <p className="leading-7 text-zinc-600 dark:text-zinc-400">
          Open <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">http://localhost:3000</code> in
          your browser. The page auto-updates as you edit files.
        </p>
      </>
    ),
  },
  {
    id: "project-structure",
    title: "Project Structure",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          The project follows the Next.js App Router convention:
        </p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`tnskill/
├── app/              # App Router pages & layouts
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # Reusable UI components
├── public/           # Static assets
├── next.config.ts    # Next.js configuration
└── package.json      # Dependencies & scripts`}</code>
        </pre>
      </>
    ),
  },
  {
    id: "routing",
    title: "Routing",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Next.js uses a file-system based router. Folders inside <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">app/</code> define
          routes. Each route needs a <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">page.tsx</code> file.
        </p>
        <ul className="mb-4 ml-6 list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">app/page.tsx</code> → <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">/</code>
          </li>
          <li>
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">app/docs/page.tsx</code> → <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">/docs</code>
          </li>
          <li>
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">app/about/page.tsx</code> → <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">/about</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "components",
    title: "Components",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Place reusable UI components in the <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">components/</code> directory.
          Use the <strong className="text-zinc-900 dark:text-zinc-100">&quot;use client&quot;</strong> directive for components
          that need interactivity (hooks, event handlers).
        </p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}</code>
        </pre>
      </>
    ),
  },
  {
    id: "styling",
    title: "Styling",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          This project uses <strong className="text-zinc-900 dark:text-zinc-100">Tailwind CSS v4</strong> for styling.
          Utility classes are applied directly in JSX. Custom theme values are defined in
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">globals.css</code> using
          the <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">@theme</code> directive.
        </p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}`}</code>
        </pre>
      </>
    ),
  },
  {
    id: "endpoints",
    title: "Endpoints",
    content: (
      <p className="leading-7 text-zinc-600 dark:text-zinc-400">
        API routes are defined inside <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">app/</code> using
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">route.ts</code> files.
        Export named HTTP method handlers (<code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">GET</code>, <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">POST</code>, etc.)
        to define your API endpoints.
      </p>
    ),
  },
  {
    id: "authentication",
    title: "Authentication",
    content: (
      <p className="leading-7 text-zinc-600 dark:text-zinc-400">
        Authentication can be implemented using Next.js middleware and session management.
        Protect routes by checking for valid session tokens in middleware or server components.
      </p>
    ),
  },
  {
    id: "middleware",
    title: "Middleware",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Next.js middleware runs before a request is completed. Define it in
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">middleware.ts</code> at the project root.
        </p>
        <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: "/docs/:path*",
};`}</code>
        </pre>
      </>
    ),
  },
  {
    id: "vercel",
    title: "Vercel",
    content: (
      <p className="leading-7 text-zinc-600 dark:text-zinc-400">
        Deploy to Vercel by connecting your Git repository. Every push to your main branch
        triggers an automatic deployment. Preview deployments are created for every pull request.
      </p>
    ),
  },
  {
    id: "self-hosting",
    title: "Self-Hosting",
    content: (
      <p className="leading-7 text-zinc-600 dark:text-zinc-400">
        Build the project with <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">npm run build</code> and
        start the server with <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">npm run start</code>.
        The production server runs on port 3000 by default.
      </p>
    ),
  },
  {
    id: "docker",
    title: "Docker",
    content: (
      <>
        <p className="mb-4 leading-7 text-zinc-600 dark:text-zinc-400">
          Create a Dockerfile for containerized deployment:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100 dark:bg-zinc-800">
          <code>{`FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]`}</code>
        </pre>
      </>
    ),
  },
];

interface DocsContentProps {
  activeSlug: string;
  children?: React.ReactNode;
}

const uiSlugs = new Set(["button", "loader", "table", "breadcrumbs", "dropdown", "input", "card", "badge", "modal", "toast"]);

export default function DocsContent({ activeSlug, children }: DocsContentProps) {
  if (uiSlugs.has(activeSlug) && children) {
    return <>{children}</>;
  }

  const section = sections.find((s) => s.id === activeSlug);

  if (!section) {
    return (
      <div className="py-12 text-center text-zinc-400 dark:text-zinc-600">
        Section not found.
      </div>
    );
  }

  return (
    <article className="min-w-0 max-w-none flex-1 px-6 py-10 lg:px-12">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {section.title}
      </h1>
      <div className="prose-custom">{section.content}</div>
    </article>
  );
}
