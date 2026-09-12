import EditableText from "@/components/EditableText";
import { AddButton } from "@/components/ListControls";
import SkillChip from "@/components/SkillChip";
import { SectionIntro } from "@/lib/types";

export default function SkillsChips({
  intro,
  skills,
  aiSkills,
  aiTools,
  isAdmin,
}: {
  intro: SectionIntro;
  skills: string[];
  aiSkills: string[];
  aiTools: string[];
  isAdmin: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1160px] px-5 py-20 md:px-8 md:py-28">
      <EditableText
        value={intro.kicker}
        path="skillsIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-2 inline-block rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-primary"
      />
      <EditableText
        value={intro.heading ?? ""}
        path="skillsIntro.heading"
        isAdmin={isAdmin}
        as="h2"
        className="mb-7 text-2xl font-semibold text-text-primary sm:text-3xl"
      />

      <div className="rounded-2xl border border-border-card bg-surface-card p-6 md:p-8">
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
          Core skills
        </p>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s, i) => (
            <SkillChip key={i} skill={s} index={i} isAdmin={isAdmin} path="skills" />
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <AddButton path="skills" label="Add skill" item="New skill" />
          </div>
        )}

        <p className="mb-3 mt-7 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
          AI &amp; product skills
        </p>
        <div className="flex flex-wrap gap-2.5">
          {aiSkills.map((s, i) => (
            <SkillChip key={i} skill={s} index={i} isAdmin={isAdmin} path="aiSkills" accent />
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <AddButton path="aiSkills" label="Add AI skill" item="New AI skill" />
          </div>
        )}

        <p className="mb-3 mt-7 text-[12px] font-semibold uppercase tracking-wide text-text-tertiary">
          AI tools I use
        </p>
        <div className="flex flex-wrap gap-2.5">
          {aiTools.map((s, i) => (
            <SkillChip key={i} skill={s} index={i} isAdmin={isAdmin} path="aiTools" />
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <AddButton path="aiTools" label="Add tool" item="New tool" />
          </div>
        )}
      </div>
    </section>
  );
}
