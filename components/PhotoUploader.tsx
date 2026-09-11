"use client";

import { useRef, useState, useTransition } from "react";
import { uploadHeroPhotoAction } from "@/app/actions";

export default function PhotoUploader({ hasPhoto }: { hasPhoto: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        await uploadHeroPhotoAction(formData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      }
    });
  };

  return (
    <div className="absolute inset-x-0 bottom-3 flex flex-col items-center gap-1.5">
      <button
        type="button"
        disabled={pending}
        onClick={() => inputRef.current?.click()}
        className="admin-chip rounded-full bg-background/90 px-3.5 py-2 text-text-primary shadow hover:bg-background disabled:opacity-50"
      >
        {pending ? "Uploading…" : hasPhoto ? "Replace photo" : "Upload photo"}
      </button>
      {error && (
        <p className="max-w-[220px] rounded-md bg-danger/10 px-2 py-1 text-center text-xs text-danger">
          {error}
        </p>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
