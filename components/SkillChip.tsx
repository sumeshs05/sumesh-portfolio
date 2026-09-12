"use client";

import { useTransition } from "react";
import EditableText from "@/components/EditableText";
import { removeListItemAction } from "@/app/actions";

export default function SkillChip({
  skill,
  index,
  isAdmin,
  path = "skills",
  accent = false,
}: {
  skill: string;
  index: number;
  isAdmin: boolean;
  path?: string;
  accent?: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border py-2 pl-4 pr-3.5 text-[13px] font-medium ${
        accent
          ? "border-primary/35 bg-primary/8 text-text-primary"
          : "border-border-card bg-surface-card text-text-primary"
      }`}
    >
      <EditableText value={skill} path={`${path}.${index}`} isAdmin={isAdmin} as="span" />
      {isAdmin && (
        <button
          type="button"
          disabled={pending}
          aria-label="Remove"
          onClick={() => startTransition(() => removeListItemAction(path, index))}
          className="text-text-tertiary hover:text-danger disabled:opacity-50"
        >
          {pending ? "…" : "×"}
        </button>
      )}
    </span>
  );
}
