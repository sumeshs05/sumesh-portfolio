import Image from "next/image";
import EditableText from "@/components/EditableText";
import PhotoUploader from "@/components/PhotoUploader";
import { SiteContent } from "@/lib/types";

export default function Hero({
  hero,
  stats,
  isAdmin,
}: {
  hero: SiteContent["hero"];
  stats: SiteContent["stats"];
  isAdmin: boolean;
}) {
  return (
    <header className="mx-auto max-w-[1160px] px-5 pb-16 pt-16 md:px-8 md:pt-20">
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
              {hero.ctaPrimaryLabel}
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-border-card px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-container"
            >
              {hero.ctaSecondaryLabel}
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border-subtle pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold text-text-primary">{s.value}</dt>
                <dd className="text-[13px] text-text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[28px] border border-border-card bg-surface-card">
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
        </div>
      </div>
    </header>
  );
}
