"use client";

import { useRef, useState, useTransition } from "react";
import { updateFieldAction } from "@/app/actions";

type Props = {
  value: string[];
  path: string;
  isAdmin: boolean;
  separator?: "\n\n" | "\n";
  className?: string;
  placeholder?: string;
  bulleted?: boolean;
};

/**
 * Edits an array field (paragraphs or bullet lines) as one contentEditable
 * block. On blur, splits the text back into an array on the given separator.
 */
export default function EditableMultiline({
  value,
  path,
  isAdmin,
  separator = "\n\n",
  className = "",
  placeholder = "Add text…",
  bulleted = false,
}: Props) {
  const [saving, setSaving] = useState(false);
  const [, startTransition] = useTransition();
  const original = useRef(value.join(separator));

  if (!isAdmin) {
    if (value.length === 0) return null;
    if (bulleted) {
      return (
        <ul className={`list-disc space-y-1.5 pl-4 ${className}`}>
          {value.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      );
    }
    return (
      <>
        {value.map((line, i) => (
          <p key={i} className={className}>
            {line}
          </p>
        ))}
      </>
    );
  }

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const raw = e.currentTarget.innerText;
    if (raw === original.current) return;
    original.current = raw;
    const next = raw
      .split(separator === "\n\n" ? /\n{2,}/ : /\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    setSaving(true);
    startTransition(async () => {
      await updateFieldAction(path, next);
      setSaving(false);
    });
  };

  return (
    <div
      className={`editable whitespace-pre-wrap ${className}`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      data-saving={saving || undefined}
      data-placeholder={placeholder}
    >
      {value.join(separator) || placeholder}
    </div>
  );
}
