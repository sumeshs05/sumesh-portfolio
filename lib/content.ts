import "server-only";
import { Redis } from "@upstash/redis";
import fs from "fs/promises";
import path from "path";
import { SiteContent } from "@/lib/types";
import { seedContent } from "@/content/seed";

const CONTENT_KEY = "sumesh-portfolio:content";
const LOCAL_PATH = path.join(process.cwd(), ".data", "content.json");

const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = hasUpstash ? Redis.fromEnv() : null;

async function readLocal(): Promise<SiteContent> {
  try {
    const raw = await fs.readFile(LOCAL_PATH, "utf-8");
    return JSON.parse(raw) as SiteContent;
  } catch {
    await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
    await fs.writeFile(LOCAL_PATH, JSON.stringify(seedContent, null, 2));
    return seedContent;
  }
}

async function writeLocal(content: SiteContent): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
  await fs.writeFile(LOCAL_PATH, JSON.stringify(content, null, 2));
}

/**
 * Reads the full site content document.
 * Uses Upstash Redis when configured (production), otherwise falls back
 * to a local JSON file under .data/ for local development.
 */
export async function getContent(): Promise<SiteContent> {
  if (redis) {
    const existing = await redis.get<SiteContent>(CONTENT_KEY);
    if (existing) return existing;
    await redis.set(CONTENT_KEY, seedContent);
    return seedContent;
  }
  return readLocal();
}

/** Overwrites the full site content document. */
export async function saveContent(content: SiteContent): Promise<void> {
  if (redis) {
    await redis.set(CONTENT_KEY, content);
    return;
  }
  await writeLocal(content);
}

/** Resets content back to the built-in seed (used by the admin "Reset" action). */
export async function resetContent(): Promise<SiteContent> {
  await saveContent(seedContent);
  return seedContent;
}
