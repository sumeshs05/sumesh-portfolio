import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { SiteContent, SectionIntro } from "@/lib/types";

export default function Philosophy({
  intro,
  philosophy,
  isAdmin,
}: {
  intro: SectionIntro;
  philosophy: SiteContent["philosophy"];
  isAdmin: boolean;
}) {
  return (
    <section id="about" className="border-y border-border-subtle bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1160px] px-5 md:px-8">
        <div
          className="rounded-[28px] border border-border-card p-8 md:p-12"
          style={{
            background:
              "linear-gradient(120deg, rgba(167,139,250,0.14), rgba(28,28,36,0.4) 45%, rgba(52,211,153,0.10))",
          }}
        >
          <EditableText
            value={intro.kicker}
            path="philosophyIntro.kicker"
            isAdmin={isAdmin}
            as="p"
            className="mb-6 inline-block rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-primary"
          />
          <EditableText
            value={philosophy.quote}
            path="philosophy.quote"
            isAdmin={isAdmin}
            as="blockquote"
            className="max-w-[46ch] text-[1.4rem] font-medium leading-snug text-text-primary"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.principles.map((p, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border-card bg-surface-card p-5"
            >
              {isAdmin && <RemoveButton path="philosophy.principles" index={i} />}
              <span className="mb-2 block font-mono text-[12px] font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <EditableText
                value={p.title}
                path={`philosophy.principles.${i}.title`}
                isAdmin={isAdmin}
                as="div"
                className="text-[15px] font-semibold text-text-primary"
              />
              <EditableText
                value={p.description}
                path={`philosophy.principles.${i}.description`}
                isAdmin={isAdmin}
                as="p"
                className="mt-1.5 text-[13px] leading-relaxed text-text-muted"
              />
            </div>
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <AddButton
              path="philosophy.principles"
              label="Add principle"
              item={{ title: "New principle", description: "What it means in practice." }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
