"use client";

import { useRef, useState, useTransition, createElement } from "react";
import { updateFieldAction } from "@/app/actions";

type Tag = "span" | "div" | "p" | "h1" | "h2" | "h3" | "blockquote";

type Props = {
  value: string;
  path: string;
  isAdmin: boolean;
  as?: Tag;
  className?: string;
};

export default function EditableText({
  value,
  path,
  isAdmin,
  as = "span",
  className = "",
}: Props) {
  const [saving, setSaving] = useState(false);
  const [, startTransition] = useTransition();
  const original = useRef(value);

  if (!isAdmin) {
    return createElement(as, { className }, value);
  }

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    const next = (e.currentTarget.textContent ?? "").trim();
    if (next === original.current) return;
    original.current = next;
    setSaving(true);
    startTransition(async () => {
      await updateFieldAction(path, next);
      setSaving(false);
    });
  };

  return createElement(
    as,
    {
      className: `editable ${className}`,
      contentEditable: true,
      suppressContentEditableWarning: true,
      onBlur: handleBlur,
      "data-saving": saving || undefined,
    },
    value
  );
}
