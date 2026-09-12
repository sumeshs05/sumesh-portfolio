import { TrendingUp, Layers, IndianRupee, Award, CheckCircle2 } from "lucide-react";
import EditableText from "@/components/EditableText";
import TagChip from "@/components/TagChip";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { Milestone, SectionIntro } from "@/lib/types";

const ICONS = [TrendingUp, Layers, IndianRupee, Award];
const ICON_STYLES = [
  { bg: "bg-tertiary/12", text: "text-tertiary" },
  { bg: "bg-primary/12", text: "text-primary" },
];

function TagsRow({
  m,
  path,
  isAdmin,
}: {
  m: Milestone;
  path: string;
  isAdmin: boolean;
}) {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle pt-3">
      <div className="flex flex-wrap gap-1.5">
        {m.tags.map((t, ti) => (
          <TagChip key={ti} tag={t} path={`${path}.tags`} index={ti} isAdmin={isAdmin} />
        ))}
        {isAdmin && <AddButton path={`${path}.tags`} label="Tag" item="New tag" />}
      </div>
      {(m.verified || isAdmin) && (
        <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-tertiary">
          <EditableText value={m.verified} path={`${path}.verified`} isAdmin={isAdmin} as="span" />
          <CheckCircle2 size={13} />
        </span>
      )}
    </div>
  );
}

function FeaturedCard({ m, i, isAdmin }: { m: Milestone; i: number; isAdmin: boolean }) {
  const path = `milestones.${i}`;
  return (
    <div
      className="relative rounded-2xl border border-border-card p-6"
      style={{
        background:
          "linear-gradient(120deg, rgba(52,211,153,0.08), rgba(28,28,36,0.3) 55%, transparent)",
      }}
    >
      {isAdmin && <RemoveButton path="milestones" index={i} />}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-tertiary/40 bg-tertiary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-tertiary">
          <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
          <EditableText value={m.badge} path={`${path}.badge`} isAdmin={isAdmin} as="span" />
        </span>
        <EditableText
          value={m.context}
          path={`${path}.context`}
          isAdmin={isAdmin}
          as="span"
          className="text-[12px] text-text-tertiary"
        />
      </div>
      <EditableText
        value={m.value}
        path={`${path}.value`}
        isAdmin={isAdmin}
        as="div"
        className="mt-4 text-[2.75rem] font-bold leading-none text-tertiary sm:text-[3.25rem]"
      />
      <EditableText
        value={m.label}
        path={`${path}.label`}
        isAdmin={isAdmin}
        as="div"
        className="mt-3 text-[15px] font-semibold text-text-primary"
      />
      <EditableText
        value={m.description}
        path={`${path}.description`}
        isAdmin={isAdmin}
        as="p"
        className="mt-2 text-[13px] leading-relaxed text-text-muted"
      />
      <TagsRow m={m} path={path} isAdmin={isAdmin} />
    </div>
  );
}

function CompactCard({ m, i, isAdmin }: { m: Milestone; i: number; isAdmin: boolean }) {
  const path = `milestones.${i}`;
  const Icon = ICONS[i % ICONS.length];
  const style = ICON_STYLES[i % 2];
  return (
    <div className="relative rounded-2xl border border-border-card bg-surface-card p-5">
      {isAdmin && <RemoveButton path="milestones" index={i} />}
      <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${style.bg}`}>
        <Icon size={17} className={style.text} />
      </div>
      <EditableText
        value={m.value}
        path={`${path}.value`}
        isAdmin={isAdmin}
        as="div"
        className="text-2xl font-bold text-text-primary"
      />
      {(m.unit || isAdmin) && (
        <EditableText
          value={m.unit}
          path={`${path}.unit`}
          isAdmin={isAdmin}
          as="div"
          className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-text-tertiary"
        />
      )}
      <EditableText
        value={m.label}
        path={`${path}.label`}
        isAdmin={isAdmin}
        as="div"
        className="mt-1 text-sm font-medium text-text-primary"
      />
      <EditableText
        value={m.description}
        path={`${path}.description`}
        isAdmin={isAdmin}
        as="p"
        className="mt-2 text-[13px] leading-relaxed text-text-muted"
      />
      <TagsRow m={m} path={path} isAdmin={isAdmin} />
    </div>
  );
}

export default function Milestones({
  intro,
  milestones,
  isAdmin,
}: {
  intro: SectionIntro;
  milestones: Milestone[];
  isAdmin: boolean;
}) {
  const [first, second, ...rest] = milestones;

  return (
    <section id="impact" className="mx-auto max-w-[1160px] px-5 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
      <EditableText
        value={intro.kicker}
        path="milestonesIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-2 inline-block rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-primary"
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

      <div className="mt-8 flex flex-col gap-4">
        {first && (
          <div className={second ? "grid gap-4 lg:grid-cols-[2fr_1fr]" : ""}>
            <FeaturedCard m={first} i={0} isAdmin={isAdmin} />
            {second && <CompactCard m={second} i={1} isAdmin={isAdmin} />}
          </div>
        )}
        {rest.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((m, ri) => (
              <CompactCard key={ri + 2} m={m} i={ri + 2} isAdmin={isAdmin} />
            ))}
          </div>
        )}
      </div>

      {isAdmin && (
        <div className="mt-4">
          <AddButton
            path="milestones"
            label="Add milestone"
            item={{
              value: "New",
              label: "Milestone label",
              description: "What happened and why it mattered.",
              tags: [],
              badge: "",
              context: "",
              verified: "",
              unit: "",
            }}
          />
        </div>
      )}
    </section>
  );
}
