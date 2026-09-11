"use client";

import { useRef, useState, useTransition } from "react";
import { uploadResumeAction } from "@/app/actions";

export default function ResumeUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setError("Please choose a PDF file.");
      return;
    }
    setError(null);
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        await uploadResumeAction(formData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      }
    });
  };

  return (
    <div className="inline-flex flex-col items-start gap-1.5">
      <button
        type="button"
        disabled={pending}
        onClick={() => inputRef.current?.click()}
        className="admin-chip rounded-full border border-dashed border-primary/50 px-3.5 py-2 text-primary hover:bg-primary/10 disabled:opacity-50"
      >
        {pending ? "Uploading…" : "Replace résumé (PDF)"}
      </button>
      {error && <p className="text-xs text-danger">{error}</p>}
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
