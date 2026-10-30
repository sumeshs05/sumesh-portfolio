"use client";

import { useTransition } from "react";
import { FileText } from "lucide-react";
import EditableText from "@/components/EditableText";
import { removeListItemAction } from "@/app/actions";

const pill =
  "pill-secondary press inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold";

export default function DocumentLink({
  doc,
  path,
  index,
  isAdmin,
}: {
  doc: { label: string; url: string };
  path: string; // e.g. "caseStudies.5.documents"
  index: number;
  isAdmin: boolean;
}) {
  const [pending, startTransition] = useTransition();

  if (!isAdmin) {
    return (
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className={pill}
      >
        <FileText size={15} />
        <span>{doc.label}</span>
      </a>
    );
  }

  // In edit mode the label is a plain editable pill (so clicking it edits
  // instead of opening the file), with the link and a remove button beside it.
  return (
    <span className="inline-flex flex-col gap-1.5">
      <span className={pill}>
        <FileText size={15} />
        <EditableText value={doc.label} path={`${path}.${index}.label`} isAdmin as="span" />
        <button
          type="button"
          disabled={pending}
          aria-label="Remove document"
          onClick={() => startTransition(() => removeListItemAction(path, index))}
          className="text-text-tertiary hover:text-danger disabled:opacity-50"
        >
          {pending ? "…" : "×"}
        </button>
      </span>
      <span className="px-3 text-[12px] text-text-tertiary">
        File path:{" "}
        <EditableText value={doc.url} path={`${path}.${index}.url`} isAdmin as="span" />
      </span>
    </span>
  );
}
