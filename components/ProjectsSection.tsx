import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { Project, SectionIntro } from "@/lib/types";

export default function ProjectsSection({
  intro,
  projects,
  isAdmin,
}: {
  intro: SectionIntro;
  projects: Project[];
  isAdmin: boolean;
}) {
  return (
    <section id="projects" className="mx-auto max-w-[1160px] px-5 py-20 md:px-8 md:py-28">
      <EditableText
        value={intro.kicker}
        path="projectsIntro.kicker"
        isAdmin={isAdmin}
        as="p"
        className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-primary"
      />
      <div className="flex flex-wrap items-end justify-between gap-4">
        <EditableText
          value={intro.heading ?? ""}
          path="projectsIntro.heading"
          isAdmin={isAdmin}
          as="h2"
          className="text-2xl font-semibold text-text-primary sm:text-3xl"
        />
        <EditableText
          value={intro.description ?? ""}
          path="projectsIntro.description"
          isAdmin={isAdmin}
          as="p"
          className="max-w-[44ch] text-sm text-text-muted"
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-border-card bg-surface-card p-6"
          >
            {isAdmin && <RemoveButton path="projects" index={i} />}
            <EditableText
              value={p.category}
              path={`projects.${i}.category`}
              isAdmin={isAdmin}
              as="span"
              className="inline-block rounded-md border border-border-card bg-surface-container px-2.5 py-1 text-[12px] font-medium text-text-muted"
            />
            <EditableText
              value={p.title}
              path={`projects.${i}.title`}
              isAdmin={isAdmin}
              as="h3"
              className="mt-3 text-[1.02rem] font-semibold leading-snug text-text-primary"
            />
            <EditableText
              value={p.description}
              path={`projects.${i}.description`}
              isAdmin={isAdmin}
              as="p"
              className="mt-2 text-[13.5px] leading-relaxed text-text-muted"
            />
          </div>
        ))}
      </div>

      {isAdmin && (
        <div className="mt-4">
          <AddButton
            path="projects"
            label="Add project"
            item={{
              title: "New project",
              category: "Category",
              description: "What you delivered, with whom, and how it was measured.",
            }}
          />
        </div>
      )}
    </section>
  );
}
