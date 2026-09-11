import { TrendingUp, Layers, IndianRupee, Award } from "lucide-react";
import EditableText from "@/components/EditableText";
import TagChip from "@/components/TagChip";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { Milestone, SectionIntro } from "@/lib/types";

const ICONS = [TrendingUp, Layers, IndianRupee, Award];

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
    <section id="impact" className="mx-auto max-w-[1160px] px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
      <EditableText
        value={intro.kicker}
        path="milestonesIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary"
      />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <EditableText
          value={intro.heading ?? ""}
          path="milestonesIntro.heading"
          isAdmin={isAdmin}
          as="h2"
          className="text-2xl font-semibold text-text-primary sm:text-3xl"
        />
        <EditableText
          value={intro.description ?? ""}
          path="milestonesIntro.description"
          isAdmin={isAdmin}
          as="p"
          className="max-w-[38ch] text-sm text-text-muted"
        />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((m, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div
              key={i}
              className="relative rounded-2xl border border-border-card bg-surface-card p-5"
            >
              {isAdmin && <RemoveButton path="milestones" index={i} />}
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12">
                <Icon size={17} className="text-primary" />
              </div>
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
              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border-subtle pt-3">
                {m.tags.map((t, ti) => (
                  <TagChip key={ti} tag={t} path={`milestones.${i}.tags`} index={ti} isAdmin={isAdmin} />
                ))}
                {isAdmin && (
                  <AddButton path={`milestones.${i}.tags`} label="Tag" item="New tag" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {isAdmin && (
        <div className="mt-4">
          <AddButton
            path="milestones"
            label="Add milestone"
            item={{ value: "New", label: "Milestone label", description: "What happened and why it mattered.", tags: [] }}
          />
        </div>
      )}
    </section>
  );
}
