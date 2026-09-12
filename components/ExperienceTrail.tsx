import { MapPin, Calendar } from "lucide-react";
import EditableText from "@/components/EditableText";
import TagChip from "@/components/TagChip";
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
        className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-primary"
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
          className="pointer-events-none absolute left-[10px] top-2 bottom-2 w-px sm:left-3"
          style={{
            background:
              "linear-gradient(to bottom, var(--primary) 0%, var(--border-card) 45%, transparent 100%)",
          }}
        />

        <ol>
          {experience.map((item, i) => (
            <li
              key={item.id}
              className={`relative grid grid-cols-[20px_1fr] items-start gap-x-4 sm:grid-cols-[24px_1fr] sm:items-center sm:gap-x-0 ${
                i === experience.length - 1 ? "" : "pb-10"
              }`}
            >
              {/* Node */}
              <div className="relative col-start-1 row-start-1 flex justify-center">
                <span
                  className={
                    item.current
                      ? "h-[13px] w-[13px] rounded-full bg-primary shadow-[0_0_0_5px_rgba(167,139,250,0.22)]"
                      : "h-[9px] w-[9px] rounded-full border-2 border-border-card bg-background"
                  }
                />
              </div>

              {/* Content */}
              <div className="col-start-2 row-start-1 min-w-0">
                {item.current ? (
                  <div className="relative rounded-2xl border border-primary/50 bg-surface-card p-6">
                    {isAdmin && <RemoveButton path="experience" index={i} />}

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <EditableText
                          value={item.role}
                          path={`experience.${i}.role`}
                          isAdmin={isAdmin}
                          as="span"
                          className="text-[17px] font-semibold text-text-primary"
                        />
                        <span className="text-text-tertiary">·</span>
                        <EditableText
                          value={item.company}
                          path={`experience.${i}.company`}
                          isAdmin={isAdmin}
                          as="span"
                          className="text-[15px] font-semibold text-primary"
                        />
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-tertiary/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-tertiary">
                          <span className="h-1.5 w-1.5 rounded-full bg-tertiary" /> Current role
                        </span>
                      </div>
                      <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-surface-container px-3 py-1.5 text-[12px] font-medium text-text-muted sm:inline-flex">
                        <Calendar size={12} />
                        <EditableText
                          value={item.period}
                          path={`experience.${i}.period`}
                          isAdmin={isAdmin}
                          as="span"
                        />
                      </span>
                    </div>

                    {item.location && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[13px] text-text-muted">
                        <MapPin size={13} />
                        <EditableText
                          value={item.location}
                          path={`experience.${i}.location`}
                          isAdmin={isAdmin}
                          as="span"
                        />
                      </div>
                    )}

                    <EditableText
                      value={item.period}
                      path={`experience.${i}.period`}
                      isAdmin={isAdmin}
                      as="span"
                      className="mt-2 inline-block rounded-full bg-surface-container px-3 py-1 text-[12px] font-medium text-text-muted sm:hidden"
                    />

                    {item.bullets.length > 0 && (
                      <ul className="mt-3.5 space-y-1.5 text-[13.5px] leading-relaxed text-text-muted">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-2.5">
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-primary" />
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
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border-subtle pt-4">
                      {item.tags.map((t, ti) => (
                        <TagChip key={ti} tag={t} path={`experience.${i}.tags`} index={ti} isAdmin={isAdmin} />
                      ))}
                      {isAdmin && (
                        <AddButton path={`experience.${i}.tags`} label="Tag" item="New tag" />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-2xl border border-border-card bg-surface-card px-5 py-4">
                    {isAdmin && <RemoveButton path="experience" index={i} />}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <EditableText
                        value={item.role}
                        path={`experience.${i}.role`}
                        isAdmin={isAdmin}
                        as="span"
                        className="text-[15px] font-semibold text-text-primary"
                      />
                      <span className="text-text-tertiary">·</span>
                      <EditableText
                        value={item.company}
                        path={`experience.${i}.company`}
                        isAdmin={isAdmin}
                        as="span"
                        className="text-[13.5px] text-text-muted"
                      />
                    </div>
                    <EditableText
                      value={item.period}
                      path={`experience.${i}.period`}
                      isAdmin={isAdmin}
                      as="span"
                      className="text-[12.5px] tabular-nums text-text-tertiary"
                    />
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
              tags: [],
              location: "",
            }}
          />
        </div>
      )}
    </section>
  );
}
