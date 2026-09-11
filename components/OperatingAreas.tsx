import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { OperatingArea, SectionIntro } from "@/lib/types";

export default function OperatingAreas({
  intro,
  areas,
  isAdmin,
}: {
  intro: SectionIntro;
  areas: OperatingArea[];
  isAdmin: boolean;
}) {
  return (
    <section className="border-y border-border-subtle bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1160px] px-5 md:px-8">
        <EditableText
          value={intro.kicker}
          path="operatingAreasIntro.kicker"
          isAdmin={isAdmin}
          as="p"
          className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary"
        />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <EditableText
            value={intro.heading ?? ""}
            path="operatingAreasIntro.heading"
            isAdmin={isAdmin}
            as="h2"
            className="text-2xl font-semibold text-text-primary sm:text-3xl"
          />
          <EditableText
            value={intro.description ?? ""}
            path="operatingAreasIntro.description"
            isAdmin={isAdmin}
            as="p"
            className="max-w-[38ch] text-sm text-text-muted"
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {areas.map((a, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-border-card bg-surface-card p-6"
            >
              {isAdmin && <RemoveButton path="operatingAreas" index={i} />}
              <EditableText
                value={a.title}
                path={`operatingAreas.${i}.title`}
                isAdmin={isAdmin}
                as="div"
                className="text-[15px] font-semibold text-text-primary"
              />
              <EditableText
                value={a.description}
                path={`operatingAreas.${i}.description`}
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
              path="operatingAreas"
              label="Add focus area"
              item={{ title: "New focus area", description: "What this means in practice." }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
