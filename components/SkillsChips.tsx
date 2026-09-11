import { AddButton } from "@/components/ListControls";
import SkillChip from "@/components/SkillChip";

export default function SkillsChips({
  skills,
  isAdmin,
}: {
  skills: string[];
  isAdmin: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1160px] px-5 py-16 md:px-8">
      <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary">
        Toolkit
      </p>
      <h2 className="mb-7 text-2xl font-semibold text-text-primary sm:text-3xl">
        What I bring to the table
      </h2>
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
    </section>
  );
}
