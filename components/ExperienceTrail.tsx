import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { ExperienceItem } from "@/lib/types";

export default function ExperienceTrail({
  experience,
  isAdmin,
}: {
  experience: ExperienceItem[];
  isAdmin: boolean;
}) {
  return (
    <section id="experience" className="mx-auto max-w-[760px] px-5 py-16 md:px-8">
      <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary">
        12 years, one thread
      </p>
      <h2 className="text-2xl font-semibold text-text-primary sm:text-3xl">
        The journey so far
      </h2>

      <div className="relative mt-10 pl-9">
        <div
          className="absolute bottom-2 left-[11px] top-2 w-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, var(--border-card) 0 8px, transparent 8px 16px)",
          }}
        />
        <ol className="space-y-7">
          {experience.map((item, i) => (
            <li key={item.id} className="relative">
              <span
                className={`absolute -left-9 top-1 h-[22px] w-[22px] rounded-full border-[3px] ${
                  item.current
                    ? "border-primary bg-primary shadow-[0_0_0_5px_rgba(167,139,250,0.18)]"
                    : "border-border-card bg-surface-card"
                }`}
              />
              <div
                className={`relative rounded-2xl border p-5 ${
                  item.current
                    ? "border-primary/60 bg-surface-card"
                    : "border-border-card bg-surface-card"
                }`}
              >
                {isAdmin && <RemoveButton path="experience" index={i} />}
                {item.current && (
                  <span className="mb-1.5 inline-block text-[12px] font-semibold text-primary">
                    ● Current
                  </span>
                )}
                <EditableText
                  value={item.role}
                  path={`experience.${i}.role`}
                  isAdmin={isAdmin}
                  as="div"
                  className="font-semibold text-text-primary"
                />
                <EditableText
                  value={item.company}
                  path={`experience.${i}.company`}
                  isAdmin={isAdmin}
                  as="div"
                  className="mt-0.5 text-sm text-text-muted"
                />
                <EditableText
                  value={item.period}
                  path={`experience.${i}.period`}
                  isAdmin={isAdmin}
                  as="span"
                  className="mt-2 inline-block rounded-full bg-surface-container px-3 py-1 text-[12px] font-medium text-text-muted"
                />
                {item.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-text-muted">
                    {item.bullets.map((b, bi) => (
                      <li key={bi}>
                        <EditableText
                          value={b}
                          path={`experience.${i}.bullets.${bi}`}
                          isAdmin={isAdmin}
                          as="span"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {isAdmin && (
        <div className="mt-5 pl-9">
          <AddButton
            path="experience"
            label="Add role"
            item={{
              id: `exp-${Date.now()}`,
              role: "New role",
              company: "Company",
              tag: "Company",
              period: "2024 – Present",
              current: false,
              bullets: [],
            }}
          />
        </div>
      )}
    </section>
  );
}
