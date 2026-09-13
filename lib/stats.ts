import "server-only";
import { Redis } from "@upstash/redis";
import fs from "fs/promises";
import path from "path";

const COUNTER_KEY = "sumesh-portfolio:resume-downloads";
const LOCAL_PATH = path.join(process.cwd(), ".data", "resume-downloads.json");

const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = hasUpstash ? Redis.fromEnv() : null;

async function readLocalCount(): Promise<number> {
  try {
    const raw = await fs.readFile(LOCAL_PATH, "utf-8");
    return JSON.parse(raw).count ?? 0;
  } catch {
    return 0;
  }
}

async function writeLocalCount(count: number): Promise<void> {
  await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
  await fs.writeFile(LOCAL_PATH, JSON.stringify({ count }));
}

/** Increments and returns the new résumé download count. */
export async function incrementResumeDownloads(): Promise<number> {
  if (redis) {
    return await redis.incr(COUNTER_KEY);
  }
  const next = (await readLocalCount()) + 1;
  await writeLocalCount(next);
  return next;
}

/** Reads the current résumé download count without changing it. */
export async function getResumeDownloadCount(): Promise<number> {
  if (redis) {
    const value = await redis.get<number>(COUNTER_KEY);
    return value ?? 0;
  }
  return readLocalCount();
}
