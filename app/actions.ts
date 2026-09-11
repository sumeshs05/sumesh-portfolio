"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { checkPassword, createAdminSession, destroyAdminSession, isAdmin } from "@/lib/auth";
import { getContent, saveContent, resetContent } from "@/lib/content";
import { setByPath, pushByPath, removeByPath } from "@/lib/pathUtils";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    redirect("/admin/login?error=1");
  }
  await createAdminSession();
  redirect("/");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/");
}

async function requireAdmin() {
  if (!(await isAdmin())) {
    throw new Error("Not authorized");
  }
}

/** Updates a single field in the content tree. Path e.g. "hero.headline". Value can be a string or an array (for multi-paragraph fields). */
export async function updateFieldAction(path: string, value: unknown) {
  await requireAdmin();
  const content = await getContent();
  const next = setByPath(content, path, value);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Appends a new item to a list at the given path. */
export async function addListItemAction(path: string, item: unknown) {
  await requireAdmin();
  const content = await getContent();
  const next = pushByPath(content, path, item);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Removes the item at `index` from the list at the given path. */
export async function removeListItemAction(path: string, index: number) {
  await requireAdmin();
  const content = await getContent();
  const next = removeByPath(content, path, index);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Uploads a replacement hero photo to Vercel Blob and wires it into content. */
export async function uploadHeroPhotoAction(formData: FormData) {
  await requireAdmin();
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) return;

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      "Image uploads need Vercel Blob configured — add the BLOB_READ_WRITE_TOKEN env var."
    );
  }

  const blob = await put(`hero/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  const content = await getContent();
  const next = setByPath(content, "hero.photoUrl", blob.url);
  await saveContent(next);
  revalidatePath("/");
}

/** Resets all content back to the built-in seed data. */
export async function resetContentAction() {
  await requireAdmin();
  await resetContent();
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}
"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob";
import { checkPassword, createAdminSession, destroyAdminSession, isAdmin } from "@/lib/auth";
import { getContent, saveContent, resetContent } from "@/lib/content";
import { setByPath, pushByPath, removeByPath } from "@/lib/pathUtils";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!checkPassword(password)) {
    redirect("/admin/login?error=1");
  }
  await createAdminSession();
  redirect("/");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/");
}

async function requireAdmin() {
  if (!(await isAdmin())) {
    throw new Error("Not authorized");
  }
}

/** Updates a single field in the content tree. Path e.g. "hero.headline". Value can be a string or an array (for multi-paragraph fields). */
export async function updateFieldAction(path: string, value: unknown) {
  await requireAdmin();
  const content = await getContent();
  const next = setByPath(content, path, value);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Appends a new item to a list at the given path. */
export async function addListItemAction(path: string, item: unknown) {
  await requireAdmin();
  const content = await getContent();
  const next = pushByPath(content, path, item);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Removes the item at `index` from the list at the given path. */
export async function removeListItemAction(path: string, index: number) {
  await requireAdmin();
  const content = await getContent();
  const next = removeByPath(content, path, index);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Uploads a replacement hero photo to Vercel Blob and wires it into content. */
export async function uploadHeroPhotoAction(formData: FormData) {
  await requireAdmin();
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) return;

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      "Image uploads need Vercel Blob configured — add the BLOB_READ_WRITE_TOKEN env var."
    );
  }

  const blob = await put(`hero/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  const content = await getContent();
  const next = setByPath(content, "hero.photoUrl", blob.url);
  await saveContent(next);
  revalidatePath("/");
}

/** Uploads a replacement résumé PDF to Vercel Blob and wires it into content. */
export async function uploadResumeAction(formData: FormData) {
  await requireAdmin();
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) return;

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      "Résumé uploads need Vercel Blob configured — add the BLOB_READ_WRITE_TOKEN env var."
    );
  }

  const blob = await put(`resume/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  const content = await getContent();
  const next = setByPath(content, "resumeUrl", blob.url);
  await saveContent(next);
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}

/** Resets all content back to the built-in seed data. */
export async function resetContentAction() {
  await requireAdmin();
  await resetContent();
  revalidatePath("/");
  revalidatePath("/case-studies/[slug]", "page");
}
