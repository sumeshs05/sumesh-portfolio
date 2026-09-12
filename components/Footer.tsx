import { Mail, ArrowUpRight, Download } from "lucide-react";
import EditableText from "@/components/EditableText";
import ResumeUploader from "@/components/ResumeUploader";
import DownloadLink from "@/components/DownloadLink";
import { SiteContent } from "@/lib/types";

export default function Footer({
  contact,
  roleLabel,
  resumeUrl,
  isAdmin,
}: {
  contact: SiteContent["contact"];
  roleLabel: string;
  resumeUrl: string;
  isAdmin: boolean;
}) {
  return (
    <footer id="contact" className="mt-8 rounded-t-[40px] bg-surface-container-high px-5 pt-24 pb-16 md:px-8 md:pt-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-[560px]">
            <EditableText
              value={contact.heading}
              path="contact.heading"
              isAdmin={isAdmin}
              as="h2"
              className="max-w-[40ch] text-[1.7rem] font-semibold leading-tight text-text-primary sm:text-[2.15rem]"
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
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary hover:bg-primary-container"
              >
                <Mail size={15} /> {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-card px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-container-highest"
              >
                LinkedIn <ArrowUpRight size={15} />
              </a>
              <DownloadLink
                href={resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border-card px-6 py-3.5 text-sm font-semibold text-text-primary hover:bg-surface-container-highest"
              >
                Download résumé <Download size={15} />
              </DownloadLink>
              {isAdmin && <ResumeUploader />}
            </div>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center gap-2 text-sm text-text-muted">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              <EditableText
                value={contact.location}
                path="contact.location"
                isAdmin={isAdmin}
                as="span"
              />
            </div>
            <div className="mt-1 text-[12.5px] text-text-tertiary">{roleLabel}</div>
          </div>
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
