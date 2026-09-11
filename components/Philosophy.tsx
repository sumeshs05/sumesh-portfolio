import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { SiteContent } from "@/lib/types";

export default function Philosophy({
  philosophy,
  isAdmin,
}: {
  philosophy: SiteContent["philosophy"];
  isAdmin: boolean;
}) {
  return (
    <section id="about" className="border-y border-border-subtle bg-surface py-16">
      <div className="mx-auto max-w-[1160px] px-5 md:px-8">
        <p className="mb-6 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary">
          Philosophy &amp; ethos
        </p>
        <EditableText
          value={philosophy.quote}
          path="philosophy.quote"
          isAdmin={isAdmin}
          as="blockquote"
          className="max-w-[46ch] text-[1.4rem] font-medium leading-snug text-text-primary"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {philosophy.principles.map((p, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border-card bg-surface-card p-5"
            >
              {isAdmin && <RemoveButton path="philosophy.principles" index={i} />}
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
