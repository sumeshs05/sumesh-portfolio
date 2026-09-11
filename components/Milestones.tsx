import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { Milestone, SectionIntro } from "@/lib/types";

export default function Milestones({
  intro,
  milestones,
  isAdmin,
}: {
  intro: SectionIntro;
  milestones: Milestone[];
  isAdmin: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1160px] px-5 py-16 md:px-8">
      <EditableText
        value={intro.kicker}
        path="milestonesIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-8 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-border-card bg-surface-card p-5"
          >
            {isAdmin && <RemoveButton path="milestones" index={i} />}
            <EditableText
              value={m.value}
              path={`milestones.${i}.value`}
              isAdmin={isAdmin}
              as="div"
              className="text-2xl font-semibold text-primary"
            />
            <EditableText
              value={m.label}
              path={`milestones.${i}.label`}
              isAdmin={isAdmin}
              as="div"
              className="mt-1 text-sm font-medium text-text-primary"
            />
            <EditableText
              value={m.description}
              path={`milestones.${i}.description`}
              isAdmin={isAdmin}
              as="p"
              className="mt-2 text-[13px] leading-relaxed text-text-muted"
            />
          </div>
        ))}
      </div>
      {isAdmin && (
        <div className="mt-4">
          <AddButton
            path="milestones"
            label="Add milestone"
            item={{ value: "New", label: "Milestone label", description: "What happened and why it mattered." }}
          />
        </div>
      )}
    </section>
  );
}
