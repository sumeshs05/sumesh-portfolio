import Link from "next/link";
import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { CaseStudy } from "@/lib/types";

const COLOR_STYLES: Record<CaseStudy["color"], { bg: string; text: string; border: string }> = {
  violet: { bg: "rgba(167,139,250,0.12)", text: "#c4b5fd", border: "rgba(167,139,250,0.4)" },
  emerald: { bg: "rgba(52,211,153,0.12)", text: "#6ee7b7", border: "rgba(52,211,153,0.4)" },
  amber: { bg: "rgba(245,158,11,0.12)", text: "#fcd34d", border: "rgba(245,158,11,0.4)" },
  sky: { bg: "rgba(56,189,248,0.12)", text: "#7dd3fc", border: "rgba(56,189,248,0.4)" },
};

export default function CaseStudiesGrid({
  caseStudies,
  isAdmin,
}: {
  caseStudies: CaseStudy[];
  isAdmin: boolean;
}) {
  return (
    <section id="work" className="mx-auto max-w-[1160px] px-5 py-16 md:px-8">
      <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary">
        Independent studies &amp; exploratory notes
      </p>
      <h2 className="max-w-[36ch] text-2xl font-semibold text-text-primary sm:text-3xl">
        Self-directed research I return to on weekends, out of curiosity — not work tasks.
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {caseStudies.map((cs, i) => {
          const c = COLOR_STYLES[cs.color];
          return (
            <div
              key={cs.slug}
              className="relative rounded-[20px] border p-6"
              style={{ borderColor: "var(--border-card)", background: "var(--surface-card)" }}
            >
              {isAdmin && <RemoveButton path="caseStudies" index={i} />}
              <div className="flex items-center justify-between gap-3">
                <span
                  className="rounded-full px-3 py-1 text-[12px] font-semibold"
                  style={{ background: c.bg, color: c.text }}
                >
                  <EditableText value={cs.tag} path={`caseStudies.${i}.tag`} isAdmin={isAdmin} as="span" />
                </span>
              </div>

              <EditableText
                value={cs.title}
                path={`caseStudies.${i}.title`}
                isAdmin={isAdmin}
                as="h3"
                className="mt-4 text-[1.2rem] font-semibold text-text-primary"
              />
              <EditableText
                value={cs.hook}
                path={`caseStudies.${i}.hook`}
                isAdmin={isAdmin}
                as="p"
                className="mt-2 text-[13.5px] leading-relaxed text-text-muted"
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {cs.stats.map((s, si) => (
                  <span
                    key={si}
                    className="rounded-lg bg-surface-container px-3 py-1.5 text-[12px] font-medium text-text-primary"
                  >
                    {s.value} <span className="text-text-tertiary">{s.label}</span>
                  </span>
                ))}
              </div>

              <Link
                href={`/case-studies/${cs.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-primary hover:underline"
              >
                Read the case study <span aria-hidden>→</span>
              </Link>
            </div>
          );
        })}
      </div>

      {isAdmin && (
        <div className="mt-5">
          <AddButton
            path="caseStudies"
            label="Add case study"
            item={{
              slug: `new-study-${Date.now()}`,
              tag: "New category",
              color: "violet",
              title: "New case study",
              hook: "One line on what this explores.",
              stats: [],
              scope: "",
              methods: "",
              output: "",
              note: "Independent, self-directed case study.",
              sections: [],
            }}
          />
        </div>
      )}
    </section>
  );
}
