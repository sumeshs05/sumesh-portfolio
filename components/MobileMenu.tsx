"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import DownloadLink from "@/components/DownloadLink";

export default function MobileMenu({
  links,
  resumeUrl,
}: {
  links: readonly { label: string; href: string }[];
  resumeUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Escape or a tap outside closes the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="press flex h-11 w-11 items-center justify-center rounded-full bg-surface-container text-text-primary"
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        data-open={open}
        inert={!open}
        className="menu-panel absolute right-0 top-[calc(100%+10px)] z-50 w-64 rounded-2xl border border-border-card bg-surface-card p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-[15px] font-medium text-text-primary transition-colors hover:bg-surface-container"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <DownloadLink
          href={resumeUrl}
          className="press mt-1 flex items-center justify-center rounded-full bg-primary px-4 py-3 text-[15px] font-semibold text-on-primary"
        >
          Résumé
        </DownloadLink>
      </nav>
    </div>
  );
}
