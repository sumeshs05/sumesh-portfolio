"use client";

import { useTransition } from "react";
import EditableText from "@/components/EditableText";
import { removeListItemAction } from "@/app/actions";

export default function SkillChip({
  skill,
  index,
  isAdmin,
}: {
  skill: string;
  index: number;
  isAdmin: boolean;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-card bg-surface-card py-2 pl-4 pr-3.5 text-[13px] font-medium text-text-primary">
      <EditableText value={skill} path={`skills.${index}`} isAdmin={isAdmin} as="span" />
      {isAdmin && (
        <button
          type="button"
          disabled={pending}
          aria-label="Remove skill"
          onClick={() => startTransition(() => removeListItemAction("skills", index))}
          className="text-text-tertiary hover:text-danger disabled:opacity-50"
        >
          {pending ? "…" : "×"}
        </button>
      )}
    </span>
  );
}
