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

/** Backfills missing fields onto each item of a list without ever
 * overwriting anything already customized on the item.
 * - Lists whose items have a stable id (idKey) are matched to the seed item
 *   with the same id, so removing/reordering items can never shift content
 *   onto the wrong item.
 * - Lists without ids are matched by position, but only while the list still
 *   has the same number of items as the seed (otherwise position is unreliable
 *   and only the generic fallback is applied). */
function withItemDefaults<T extends object>(
  items: T[] | undefined,
  seedItems: T[],
  fallback: Partial<T>,
  idKey?: keyof T
): T[] {
  const base = items ?? seedItems;
  const sameShape = base.length === seedItems.length;
  return base.map((item, i) => {
    let seedMatch: T | undefined;
    if (idKey) {
      seedMatch = seedItems.find((s) => s[idKey] === item[idKey]);
    } else if (sameShape) {
      seedMatch = seedItems[i];
    }
    return { ...fallback, ...(seedMatch ?? {}), ...item };
  });
}

/**
 * Reads the full site content document.
 * Uses Upstash Redis when configured (production), otherwise falls back
 * to a local JSON file under .data/ for local development.
 */
function withDefaults(content: SiteContent): SiteContent {
  // Backfills any newly-added fields (including newly-added fields *within*
  // an object or list item that already existed) without ever overwriting
  // anything already customized.
  return {
    ...content,
    nav: { ...seedContent.nav, ...content.nav },
    hero: { ...seedContent.hero, ...content.hero },
    contact: { ...seedContent.contact, ...content.contact },
    milestonesIntro: { ...seedContent.milestonesIntro, ...content.milestonesIntro },
    milestones: withItemDefaults(content.milestones, seedContent.milestones, {
      tags: [] as string[],
      badge: "",
      context: "",
      verified: "",
      unit: "",
    }),
    operatingAreasIntro: { ...seedContent.operatingAreasIntro, ...content.operatingAreasIntro },
    operatingAreas: withItemDefaults(content.operatingAreas, seedContent.operatingAreas, {
      tags: [] as string[],
    }),
    philosophyIntro: { ...seedContent.philosophyIntro, ...content.philosophyIntro },
    experienceIntro: { ...seedContent.experienceIntro, ...content.experienceIntro },
    experience: withItemDefaults(
      content.experience,
      seedContent.experience,
      { tags: [] as string[], location: "" },
      "id"
    ),
    certificationsIntro: { ...seedContent.certificationsIntro, ...content.certificationsIntro },
    certifications: withItemDefaults(
      content.certifications,
      seedContent.certifications,
      { tagline: "" },
      "id"
    ),
    caseStudiesIntro: { ...seedContent.caseStudiesIntro, ...content.caseStudiesIntro },
    caseStudies: withItemDefaults(
      content.caseStudies,
      seedContent.caseStudies,
      { domain: "" },
      "slug"
    ),
    skillsIntro: { ...seedContent.skillsIntro, ...content.skillsIntro },
    aiSkills: content.aiSkills ?? seedContent.aiSkills,
    aiTools: content.aiTools ?? seedContent.aiTools,
  };
}

export async function getContent(): Promise<SiteContent> {
  if (redis) {
    const existing = await redis.get<SiteContent>(CONTENT_KEY);
    if (existing) return withDefaults(existing);
    await redis.set(CONTENT_KEY, seedContent);
    return seedContent;
  }
  return withDefaults(await readLocal());
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
