import { ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  className?: string;
}

export default function Breadcrumbs({
  items,
  separator,
  className = "",
}: BreadcrumbsProps) {
  const defaultSeparator = (
    <svg className="h-4 w-4 text-zinc-400 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-sm ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (separator || defaultSeparator)}
          {item.href ? (
            <a
              href={item.href}
              className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {item.label}
            </a>
          ) : (
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
