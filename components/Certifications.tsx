import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import { Certification, SectionIntro } from "@/lib/types";

export default function Certifications({
  intro,
  certifications,
  isAdmin,
}: {
  intro: SectionIntro;
  certifications: Certification[];
  isAdmin: boolean;
}) {
  return (
    <section className="border-y border-border-subtle bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1160px] px-5 md:px-8">
        <EditableText
          value={intro.kicker}
          path="certificationsIntro.kicker"
          isAdmin={isAdmin}
          as="p"
          className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-text-tertiary"
        />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <EditableText
            value={intro.heading ?? ""}
            path="certificationsIntro.heading"
            isAdmin={isAdmin}
            as="h2"
            className="text-2xl font-semibold text-text-primary sm:text-3xl"
          />
          <EditableText
            value={intro.description ?? ""}
            path="certificationsIntro.description"
            isAdmin={isAdmin}
            as="p"
            className="max-w-[38ch] text-sm text-text-muted"
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <div
              key={c.id}
              className="relative rounded-2xl border border-border-card bg-surface-card p-5"
            >
              {isAdmin && <RemoveButton path="certifications" index={i} />}
              <EditableText
                value={c.meta}
                path={`certifications.${i}.meta`}
                isAdmin={isAdmin}
                as="div"
                className="text-[12px] font-medium text-tertiary"
              />
              <EditableText
                value={c.title}
                path={`certifications.${i}.title`}
                isAdmin={isAdmin}
                as="div"
                className="mt-1.5 text-[15px] font-semibold leading-snug text-text-primary"
              />
              <EditableText
                value={c.org}
                path={`certifications.${i}.org`}
                isAdmin={isAdmin}
                as="div"
                className="mt-1 text-[13px] text-text-muted"
              />
              <EditableText
                value={c.tagline}
                path={`certifications.${i}.tagline`}
                isAdmin={isAdmin}
                as="div"
                className="mt-2 border-t border-border-subtle pt-2 text-[12px] text-text-tertiary"
              />
            </div>
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <AddButton
              path="certifications"
              label="Add credential"
              item={{
                id: `cert-${Date.now()}`,
                title: "New credential",
                org: "Organization",
                meta: "Completed",
                tagline: "",
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
