import Link from "next/link";
import EditableText from "@/components/EditableText";
import DownloadLink from "@/components/DownloadLink";
import MobileMenu from "@/components/MobileMenu";
import { NAV_LINKS } from "@/lib/navLinks";
import { NavBrand } from "@/lib/types";

export default function Nav({
  brand,
  resumeUrl,
  isAdmin,
}: {
  brand: NavBrand;
  resumeUrl: string;
  isAdmin: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1160px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-[15px] font-semibold text-on-primary">
            S
          </span>
          <span className="flex flex-col leading-tight">
            <EditableText
              value={brand.name}
              path="nav.name"
              isAdmin={isAdmin}
              as="span"
              className="text-[15px] font-semibold text-text-primary"
            />
            <EditableText
              value={brand.subtitle}
              path="nav.subtitle"
              isAdmin={isAdmin}
              as="span"
              className="text-[12px] font-semibold uppercase tracking-wide text-text-tertiary"
            />
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm text-text-muted md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 transition-colors hover:bg-surface-container hover:text-text-primary"
            >
              {l.label}
            </Link>
          ))}
          <DownloadLink
            href={resumeUrl}
            className="press ml-2 rounded-full bg-primary px-4 py-2 font-medium text-on-primary hover:bg-primary-container"
          >
            Résumé
          </DownloadLink>
        </nav>
        <MobileMenu links={NAV_LINKS} resumeUrl={resumeUrl} />
      </div>
    </header>
  );
}
