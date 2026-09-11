import EditableText from "@/components/EditableText";
import { AddButton } from "@/components/ListControls";
import SkillChip from "@/components/SkillChip";
import { SectionIntro } from "@/lib/types";

export default function SkillsChips({
  intro,
  skills,
  isAdmin,
}: {
  intro: SectionIntro;
  skills: string[];
  isAdmin: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1160px] px-5 pt-10 pb-20 md:px-8 md:pt-14 md:pb-28">
      <EditableText
        value={intro.kicker}
        path="skillsIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary"
      />
      <EditableText
        value={intro.heading ?? ""}
        path="skillsIntro.heading"
        isAdmin={isAdmin}
        as="h2"
        className="mb-7 text-2xl font-semibold text-text-primary sm:text-3xl"
      />
      <div className="rounded-2xl border border-border-card bg-surface-card p-6 md:p-8">
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s, i) => (
            <SkillChip key={i} skill={s} index={i} isAdmin={isAdmin} />
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <AddButton path="skills" label="Add skill" item="New skill" />
          </div>
        )}
      </div>
    </section>
  );
}
