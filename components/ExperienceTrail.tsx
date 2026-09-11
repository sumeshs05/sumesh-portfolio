import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { ExperienceItem, SectionIntro } from "@/lib/types";

export default function ExperienceTrail({
  intro,
  experience,
  isAdmin,
}: {
  intro: SectionIntro;
  experience: ExperienceItem[];
  isAdmin: boolean;
}) {
  return (
    <section id="experience" className="mx-auto max-w-[860px] px-5 py-20 md:px-8 md:py-28">
      <EditableText
        value={intro.kicker}
        path="experienceIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary"
      />
      <EditableText
        value={intro.heading ?? ""}
        path="experienceIntro.heading"
        isAdmin={isAdmin}
        as="h2"
        className="text-2xl font-semibold text-text-primary sm:text-3xl"
      />
      <EditableText
        value={intro.description ?? ""}
        path="experienceIntro.description"
        isAdmin={isAdmin}
        as="p"
        className="mt-2 max-w-[56ch] text-text-muted"
      />

      <div className="relative mt-14">
        {/* Continuous fading connector line, shared across every row */}
        <div
          className="pointer-events-none absolute top-2 bottom-2 w-px sm:left-[108px]"
          style={{
            left: "10px",
            background:
              "linear-gradient(to bottom, var(--primary) 0%, var(--border-card) 45%, transparent 100%)",
          }}
        />

        <ol>
          {experience.map((item, i) => (
            <li
              key={item.id}
              className={`relative grid grid-cols-[20px_1fr] gap-x-4 sm:grid-cols-[92px_24px_1fr] sm:gap-x-0 ${
                i === experience.length - 1 ? "" : "pb-10"
              }`}
            >
              {/* Date — hidden as its own column on mobile, folded into the card instead */}
              <div className="hidden pt-1 pr-5 text-right sm:block">
                <span className="text-[12.5px] font-medium tabular-nums text-text-muted">
                  {item.period}
                </span>
              </div>

              {/* Node */}
              <div className="relative col-start-1 row-start-1 flex justify-center pt-1.5 sm:col-start-2">
                <span
                  className={
                    item.current
                      ? "h-[13px] w-[13px] rounded-full bg-primary shadow-[0_0_0_5px_rgba(167,139,250,0.22)]"
                      : "h-[9px] w-[9px] rounded-full border-2 border-border-card bg-background"
                  }
                />
              </div>

              {/* Content */}
              <div className="col-start-2 row-start-1 min-w-0 sm:col-start-3">
                {item.current ? (
                  <div className="relative rounded-2xl border border-primary/50 bg-surface-card p-6">
                    {isAdmin && <RemoveButton path="experience" index={i} />}
                    <span className="mb-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Current role
                    </span>
                    <EditableText
                      value={item.role}
                      path={`experience.${i}.role`}
                      isAdmin={isAdmin}
                      as="div"
                      className="text-[17px] font-semibold text-text-primary"
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
                      className="mt-2 inline-block rounded-full bg-surface-container px-3 py-1 text-[12px] font-medium text-text-muted sm:hidden"
                    />
                    {item.bullets.length > 0 && (
                      <ul className="mt-3.5 list-disc space-y-1.5 pl-4 text-[13.5px] leading-relaxed text-text-muted">
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
                ) : (
                  <div className="relative pt-1">
                    {isAdmin && <RemoveButton path="experience" index={i} />}
                    <EditableText
                      value={item.role}
                      path={`experience.${i}.role`}
                      isAdmin={isAdmin}
                      as="div"
                      className="text-[15px] font-medium text-text-primary"
                    />
                    <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                      <EditableText
                        value={item.company}
                        path={`experience.${i}.company`}
                        isAdmin={isAdmin}
                        as="span"
                        className="text-[13.5px] text-text-muted"
                      />
                      <EditableText
                        value={item.period}
                        path={`experience.${i}.period`}
                        isAdmin={isAdmin}
                        as="span"
                        className="text-[12px] text-text-tertiary sm:hidden"
                      />
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {isAdmin && (
        <div className="mt-6">
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
