"use client";

import { useTransition } from "react";
import { loginAction } from "@/app/actions";

export default function LoginForm({ hasError }: { hasError: boolean }) {
  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => startTransition(() => loginAction(formData))}
      className="w-full max-w-[360px] rounded-2xl border border-border-card bg-surface-card p-7"
    >
      <h1 className="text-lg font-semibold text-text-primary">Admin sign in</h1>
      <p className="mt-1 text-[13px] text-text-muted">
        For Sumesh only — edits go live immediately.
      </p>

      <label className="mt-6 block text-[13px] font-medium text-text-muted" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        className="mt-1.5 w-full rounded-lg border border-border-card bg-surface-container px-3.5 py-2.5 text-sm text-text-primary outline-none focus:border-primary"
      />

      {hasError && (
        <p className="mt-3 rounded-md bg-danger/10 px-3 py-2 text-[13px] text-danger">
          Incorrect password. Try again.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-5 w-full rounded-full bg-primary py-3 text-sm font-semibold text-on-primary hover:bg-primary-container disabled:opacity-50"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
