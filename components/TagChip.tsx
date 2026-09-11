"use client";

import { useTransition } from "react";
import EditableText from "@/components/EditableText";
import { removeListItemAction } from "@/app/actions";

export default function TagChip({
  tag,
  path,
  index,
  isAdmin,
}: {
  tag: string;
  path: string; // e.g. "milestones.0.tags"
  index: number;
  isAdmin: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border-card bg-surface-container px-2.5 py-1 text-[11px] font-medium text-text-muted">
      <EditableText value={tag} path={`${path}.${index}`} isAdmin={isAdmin} as="span" />
      {isAdmin && (
        <button
          type="button"
          disabled={pending}
          aria-label="Remove tag"
          onClick={() => startTransition(() => removeListItemAction(path, index))}
          className="text-text-tertiary hover:text-danger disabled:opacity-50"
        >
          {pending ? "…" : "×"}
        </button>
      )}
    </span>
  );
}
