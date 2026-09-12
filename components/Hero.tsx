import Image from "next/image";
import EditableText from "@/components/EditableText";
import PhotoUploader from "@/components/PhotoUploader";
import TagChip from "@/components/TagChip";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { SiteContent } from "@/lib/types";

const STAT_COLORS = ["text-text-primary", "text-primary", "text-tertiary"];

export default function Hero({
  hero,
  stats,
  resumeUrl,
  isAdmin,
}: {
  hero: SiteContent["hero"];
  stats: SiteContent["stats"];
  resumeUrl: string;
  isAdmin: boolean;
}) {
  return (
    <header className="mx-auto max-w-[1160px] px-5 pb-8 pt-16 md:px-8 md:pb-10 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-card bg-surface-card px-3.5 py-1.5 text-[13px] font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
            <EditableText
              value={hero.eyebrow}
              path="hero.eyebrow"
              isAdmin={isAdmin}
              as="span"
            />
          </span>

          <EditableText
            value={hero.headline}
            path="hero.headline"
            isAdmin={isAdmin}
            as="h1"
            className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-text-primary sm:text-[3rem] lg:text-[3.4rem]"
          />

          <EditableText
            value={hero.intro}
            path="hero.intro"
            isAdmin={isAdmin}
            as="p"
            className="mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed text-text-muted"
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#work"
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary hover:bg-primary-container"
            >
              <EditableText
                value={hero.ctaPrimaryLabel}
                path="hero.ctaPrimaryLabel"
                isAdmin={isAdmin}
                as="span"
              />
            </a>
            <a
              href={resumeUrl}
              download
              className="rounded-full border border-border-card px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-container"
            >
              <EditableText
                value={hero.ctaSecondaryLabel}
                path="hero.ctaSecondaryLabel"
                isAdmin={isAdmin}
                as="span"
              />
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border-subtle pt-8">
            {stats.map((s, i) => (
              <div key={i} className="relative">
                {isAdmin && <RemoveButton path="stats" index={i} />}
                <EditableText
                  value={s.value}
                  path={`stats.${i}.value`}
                  isAdmin={isAdmin}
                  as="div"
                  className={`text-2xl font-semibold ${STAT_COLORS[i % STAT_COLORS.length]}`}
                />
                <EditableText
                  value={s.label}
                  path={`stats.${i}.label`}
                  isAdmin={isAdmin}
                  as="div"
                  className="text-[13px] text-text-muted"
                />
              </div>
            ))}
          </dl>
          {isAdmin && (
            <div className="mt-3">
              <AddButton
                path="stats"
                label="Add stat"
                item={{ value: "New", label: "Stat label" }}
              />
            </div>
          )}
        </div>

        <div>
          <div className="relative mx-auto w-full max-w-[340px]">
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -inset-8 -z-20 rounded-full blur-[28px]"
              style={{ background: "radial-gradient(circle, rgba(167,139,250,0.35), transparent 70%)" }}
              aria-hidden
            />
            {/* Rotating light ring */}
            <div
              className="spin-slow pointer-events-none absolute -inset-1 -z-10 rounded-[32px] opacity-90 blur-[8px]"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--primary), transparent 25%, transparent 55%, var(--primary) 75%, transparent 100%)",
              }}
              aria-hidden
            />
            {/* Outer frame — photo sits inset inside with a visible gap */}
            <div className="relative rounded-[34px] border border-primary/25 bg-surface-container-high/60 p-2.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px] border border-border-card bg-surface-card">
              {hero.photoUrl ? (
                <Image
                  src={hero.photoUrl}
                  alt="Sumesh S"
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-container-high to-surface">
                  <span
                    className="flex h-28 w-28 items-center justify-center rounded-full text-4xl font-semibold text-on-primary"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, var(--primary), var(--primary-container))",
                    }}
                  >
                    S
                  </span>
                </div>
              )}
              {isAdmin && <PhotoUploader hasPhoto={!!hero.photoUrl} />}

              {/* Caption bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-background/80 px-3.5 py-2.5 backdrop-blur-sm">
                <EditableText
                  value={hero.captionLine}
                  path="hero.captionLine"
                  isAdmin={isAdmin}
                  as="span"
                  className="text-[11px] font-medium text-text-muted"
                />
                <EditableText
                  value={hero.captionBadge}
                  path="hero.captionBadge"
                  isAdmin={isAdmin}
                  as="span"
                  className="shrink-0 whitespace-nowrap rounded-full bg-tertiary/15 px-2 py-0.5 text-[10.5px] font-semibold text-tertiary"
                />
              </div>
            </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {hero.tags.map((t, i) => (
              <TagChip key={i} tag={t} path="hero.tags" index={i} isAdmin={isAdmin} />
            ))}
            {isAdmin && <AddButton path="hero.tags" label="Add tag" item="New tag" />}
          </div>
        </div>
      </div>
    </header>
  );
}
