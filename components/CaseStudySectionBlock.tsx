import EditableText from "@/components/EditableText";
import EditableMultiline from "@/components/EditableMultiline";
import { RemoveButton } from "@/components/ListControls";
import { CaseStudySection } from "@/lib/types";

export default function CaseStudySectionBlock({
  section,
  csIndex,
  sIndex,
  isAdmin,
}: {
  section: CaseStudySection;
  csIndex: number;
  sIndex: number;
  isAdmin: boolean;
}) {
  const base = `caseStudies.${csIndex}.sections.${sIndex}`;

  return (
    <div className="relative mx-auto mb-14 max-w-[680px]">
      {isAdmin && <RemoveButton path={`caseStudies.${csIndex}.sections`} index={sIndex} />}

      <EditableText
        value={section.heading}
        path={`${base}.heading`}
        isAdmin={isAdmin}
        as="h2"
        className="mb-4 text-[1.5rem] font-semibold text-text-primary"
      />

      {(section.body.length > 0 || isAdmin) && (
        <EditableMultiline
          value={section.body}
          path={`${base}.body`}
          isAdmin={isAdmin}
          separator={"\n\n"}
          className="mb-4 text-[1.02rem] leading-relaxed text-text-muted"
        />
      )}

      {section.quote && (
        <EditableText
          value={section.quote}
          path={`${base}.quote`}
          isAdmin={isAdmin}
          as="blockquote"
          className="my-6 border-l-4 border-primary pl-6 text-[1.2rem] font-medium leading-snug text-text-primary"
        />
      )}

      {(section.bullets && (section.bullets.length > 0 || isAdmin)) && (
        <EditableMultiline
          value={section.bullets}
          path={`${base}.bullets`}
          isAdmin={isAdmin}
          separator={"\n"}
          bulleted
          className="text-[1rem] leading-relaxed text-text-muted"
        />
      )}

      {section.stats && section.stats.length > 0 && (
        <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {section.stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-border-card bg-surface-card p-4">
              <EditableText
                value={s.value}
                path={`${base}.stats.${i}.value`}
                isAdmin={isAdmin}
                as="div"
                className="text-xl font-semibold text-primary"
              />
              <EditableText
                value={s.label}
                path={`${base}.stats.${i}.label`}
                isAdmin={isAdmin}
                as="div"
                className="mt-1 text-[12px] text-text-muted"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
