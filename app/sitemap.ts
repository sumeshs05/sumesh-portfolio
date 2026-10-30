import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [{ url: SITE_URL, lastModified: now, priority: 1 }];
  try {
    const c = await getContent();
    for (const cs of c.caseStudies) {
      entries.push({ url: `${SITE_URL}/case-studies/${cs.slug}`, lastModified: now, priority: 0.7 });
    }
  } catch {
    /* home page alone is still a valid sitemap */
  }
  return entries;
}
