import { ImageResponse } from "next/og";
import { getContent } from "@/lib/content";

export const alt = "Sumesh S — General Manager, Product Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

/** The image renderer ships one font. Any character outside it (emoji, arrows,
 * symbols) makes it fetch extra assets from a CDN, which can fail and break
 * link previews. Keep only plain Latin text and common punctuation. */
function plain(text: string, max: number) {
  const cleaned = text
    .replace(/[^\u0020-\u007E\u00A0-\u024F\u2013\u2014\u2018\u2019\u201C\u201D\u2026]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.length > max ? cleaned.slice(0, max - 1).trimEnd() + "…" : cleaned;
}

export default async function OpenGraphImage() {
  // Pull the live title so the card stays correct after future promotions.
  let title = "General Manager, Product Management";
  let line = "Building products that scale, monetize and move the business.";
  try {
    const c = await getContent();
    const current = c.experience.find((e) => e.current) ?? c.experience[0];
    if (current?.role) title = plain(current.role.replace(/\s*-\s*/, ", "), 80) || title;
    if (c.hero?.headline) line = plain(c.hero.headline, 110) || line;
  } catch {
    /* fall back to the defaults above */
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(167,139,250,0.35), rgba(9,9,11,0) 55%)",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#a78bfa",
              color: "#0a0012",
              fontSize: 32,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>Sumesh S</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {title}
          </div>
          <div style={{ fontSize: 32, color: "#a1a1aa", lineHeight: 1.3, maxWidth: 900 }}>
            {line}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
