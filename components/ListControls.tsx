"use client";

import { useTransition } from "react";
import { addListItemAction, removeListItemAction } from "@/app/actions";

export function AddButton({
  path,
  item,
  label,
}: {
  path: string;
  item: unknown;
  label: string;
}) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => startTransition(() => addListItemAction(path, item))}
      className="admin-chip inline-flex items-center gap-1.5 rounded-full border border-dashed border-primary/50 px-3.5 py-2 text-primary hover:bg-primary/10 disabled:opacity-50"
    >
      <span aria-hidden>+</span> {pending ? "Adding…" : label}
    </button>
  );
}

export function RemoveButton({ path, index }: { path: string; index: number }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      aria-label="Remove"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        startTransition(() => removeListItemAction(path, index));
      }}
      className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-border-card bg-surface-container text-text-muted hover:border-danger hover:text-danger disabled:opacity-50"
    >
      {pending ? "…" : "×"}
    </button>
  );
}
