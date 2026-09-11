import EditableText from "@/components/EditableText";
import ResumeUploader from "@/components/ResumeUploader";
import { SiteContent } from "@/lib/types";

export default function Footer({
  contact,
  resumeUrl,
  isAdmin,
}: {
  contact: SiteContent["contact"];
  resumeUrl: string;
  isAdmin: boolean;
}) {
  return (
    <footer className="mt-8 rounded-t-[40px] bg-surface-container-high px-5 pt-24 pb-16 md:px-8 md:pt-28">
      <div className="mx-auto max-w-[1160px]">
        <EditableText
          value={contact.heading}
          path="contact.heading"
          isAdmin={isAdmin}
          as="h2"
          className="max-w-[16ch] text-[2rem] font-semibold leading-tight text-text-primary sm:text-[2.6rem]"
        />
        <EditableText
          value={contact.body}
          path="contact.body"
          isAdmin={isAdmin}
          as="p"
          className="mt-4 max-w-[48ch] text-[1.05rem] text-text-muted"
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary hover:bg-primary-container"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-card px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-container-highest"
          >
            LinkedIn ↗
          </a>
          <a
            href={resumeUrl}
            download
            className="rounded-full border border-border-card px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-container-highest"
          >
            Download résumé
          </a>
          {isAdmin && <ResumeUploader />}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-6 text-[13px] text-text-tertiary">
          <span>© {new Date().getFullYear()} Sumesh S.</span>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-text-primary">
              Back to top ↑
            </a>
            <a href="/admin/login" className="hover:text-text-primary">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
