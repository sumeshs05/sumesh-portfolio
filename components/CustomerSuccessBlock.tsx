import { HeartHandshake } from "lucide-react";
import EditableText from "@/components/EditableText";
import EditableMultiline from "@/components/EditableMultiline";
import TagChip from "@/components/TagChip";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { CustomerSuccess } from "@/lib/types";

export default function CustomerSuccessBlock({
  cs,
  isAdmin,
}: {
  cs: CustomerSuccess;
  isAdmin: boolean;
}) {
  return (
    <div className="mt-4 rounded-2xl border border-border-card bg-surface-card p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/12">
          <HeartHandshake size={19} className="text-primary" />
        </div>
        <div className="min-w-0">
          <EditableText
            value={cs.title}
            path="customerSuccess.title"
            isAdmin={isAdmin}
            as="h3"
            className="text-[1.2rem] font-semibold text-text-primary"
          />
          <EditableText
            value={cs.description}
            path="customerSuccess.description"
            isAdmin={isAdmin}
            as="p"
            className="mt-1.5 max-w-[70ch] text-[13.5px] leading-relaxed text-text-muted"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cs.pillars.map((p, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-border-subtle bg-background/40 p-5"
          >
            {isAdmin && <RemoveButton path="customerSuccess.pillars" index={i} />}
            <EditableText
              value={p.title}
              path={`customerSuccess.pillars.${i}.title`}
              isAdmin={isAdmin}
              as="div"
              className="text-[14.5px] font-semibold text-text-primary"
            />
            {isAdmin && (
              <p className="mb-1 mt-2 text-[11px] font-semibold text-primary">One point per line</p>
            )}
            <div className="mt-2.5">
              <EditableMultiline
                value={p.points}
                path={`customerSuccess.pillars.${i}.points`}
                isAdmin={isAdmin}
                separator={"\n"}
                bulleted
                className="text-[13px] leading-relaxed text-text-muted marker:text-primary"
              />
            </div>
          </div>
        ))}
      </div>
      {isAdmin && (
        <div className="mt-4">
          <AddButton
            path="customerSuccess.pillars"
            label="Add pillar"
            item={{ title: "New pillar", points: ["First point"] }}
          />
        </div>
      )}

      <div className="mt-6 border-t border-border-subtle pt-5">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
          How I work
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {cs.strengths.map((s, i) => (
            <div key={i} className="relative rounded-xl bg-surface-container/60 p-4">
              {isAdmin && <RemoveButton path="customerSuccess.strengths" index={i} />}
              <EditableText
                value={s.title}
                path={`customerSuccess.strengths.${i}.title`}
                isAdmin={isAdmin}
                as="div"
                className="text-[13px] font-semibold text-primary"
              />
              <EditableText
                value={s.description}
                path={`customerSuccess.strengths.${i}.description`}
                isAdmin={isAdmin}
                as="p"
                className="mt-1.5 text-[12.5px] leading-relaxed text-text-muted"
              />
            </div>
          ))}
        </div>
        {isAdmin && (
          <div className="mt-3">
            <AddButton
              path="customerSuccess.strengths"
              label="Add strength"
              item={{ title: "New strength", description: "One line on what this means in practice." }}
            />
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
        {cs.tags.map((t, i) => (
          <TagChip key={i} tag={t} path="customerSuccess.tags" index={i} isAdmin={isAdmin} />
        ))}
        {isAdmin && <AddButton path="customerSuccess.tags" label="Tag" item="New tag" />}
      </div>
    </div>
  );
}
