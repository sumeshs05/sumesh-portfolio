import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { isAdmin as checkIsAdmin } from "@/lib/auth";
import Nav from "@/components/Nav";
import AdminBar from "@/components/AdminBar";
import Footer from "@/components/Footer";
import EditableText from "@/components/EditableText";
import { AddButton, RemoveButton } from "@/components/ListControls";
import CaseStudySectionBlock from "@/components/CaseStudySectionBlock";

export const dynamic = "force-dynamic";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [content, admin] = await Promise.all([getContent(), checkIsAdmin()]);

  const index = content.caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const cs = content.caseStudies[index];

  const next = content.caseStudies[(index + 1) % content.caseStudies.length];
  const base = `caseStudies.${index}`;

  return (
    <div id="top">
      {admin && <AdminBar />}
      <Nav resumeUrl={content.resumeUrl} />

      <header className="mx-auto max-w-[760px] px-5 pb-10 pt-14 md:px-8">
        <Link href="/#work" className="mb-7 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary">
          ← Back to all work
        </Link>

        <span className="mb-5 inline-block rounded-full bg-primary/12 px-3.5 py-1.5 text-[13px] font-semibold text-primary">
          <EditableText value={cs.tag} path={`${base}.tag`} isAdmin={admin} as="span" />
        </span>

        <EditableText
          value={cs.title}
          path={`${base}.title`}
          isAdmin={admin}
          as="h1"
          className="text-[2rem] font-semibold leading-tight text-text-primary sm:text-[2.6rem]"
        />
        <EditableText
          value={cs.hook}
          path={`${base}.hook`}
          isAdmin={admin}
          as="p"
          className="mt-4 max-w-[62ch] text-[1.1rem] leading-relaxed text-text-muted"
        />

        <div className="mt-9 grid grid-cols-1 gap-5 border-t border-border-subtle pt-7 sm:grid-cols-3">
          <div>
            <div className="mb-1 text-[12px] font-semibold text-text-tertiary">Scope</div>
            <EditableText value={cs.scope} path={`${base}.scope`} isAdmin={admin} as="div" className="text-sm text-text-primary" />
          </div>
          <div>
            <div className="mb-1 text-[12px] font-semibold text-text-tertiary">Methods</div>
            <EditableText value={cs.methods} path={`${base}.methods`} isAdmin={admin} as="div" className="text-sm text-text-primary" />
          </div>
          <div>
            <div className="mb-1 text-[12px] font-semibold text-text-tertiary">Output</div>
            <EditableText value={cs.output} path={`${base}.output`} isAdmin={admin} as="div" className="text-sm text-text-primary" />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border-card bg-surface-card p-4 text-[13.5px] text-text-muted">
          <EditableText value={cs.note} path={`${base}.note`} isAdmin={admin} as="span" />
        </div>
      </header>

      <main className="px-5 py-6 md:px-8">
        {cs.sections.map((section, sIndex) => (
          <CaseStudySectionBlock
            key={section.id}
            section={section}
            csIndex={index}
            sIndex={sIndex}
            isAdmin={admin}
          />
        ))}

        {admin && (
          <div className="mx-auto mb-14 max-w-[680px]">
            <AddButton
              path={`caseStudies.${index}.sections`}
              label="Add section"
              item={{
                id: `section-${Date.now()}`,
                heading: "New section",
                body: ["Write the section content here."],
                bullets: [],
              }}
            />
          </div>
        )}
      </main>

      <section className="border-y border-border-subtle bg-surface-container-high py-12">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-5 px-5 md:px-8">
          <div>
            <div className="mb-1.5 text-[12px] font-semibold text-text-tertiary">Next case study</div>
            <div className="text-lg font-semibold text-text-primary">{next.title}</div>
          </div>
          <Link
            href={`/case-studies/${next.slug}`}
            className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary hover:bg-primary-container"
          >
            Read it →
          </Link>
        </div>
      </section>

      <Footer contact={content.contact} resumeUrl={content.resumeUrl} isAdmin={admin} />
    </div>
  );
}
