"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import DocsSidebar from "@/components/docs-sidebar";
import DocsContent from "@/components/docs-content";
import UIComponentsPage from "@/app/docs/ui/page";

const uiSlugs = new Set(["button", "loader", "table", "breadcrumbs", "dropdown", "input", "card", "badge", "modal", "toast"]);

export default function DocsPage() {
  const [activeSlug, setActiveSlug] = useState("introduction");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/docs/ui" && !uiSlugs.has(activeSlug)) {
      setActiveSlug("button");
    }
  }, [pathname]);

  const handleNavigate = (slug: string) => {
    setActiveSlug(slug);
    if (uiSlugs.has(slug)) {
      router.push(`/docs/ui#${slug}`);
    } else {
      router.push("/docs");
    }
  };

  return (
    <div className="flex flex-1">
      <DocsSidebar activeSlug={activeSlug} onNavigate={handleNavigate} />
      <DocsContent activeSlug={activeSlug}>
        {uiSlugs.has(activeSlug) ? <UIComponentsPage /> : null}
      </DocsContent>
    </div>
  );
}
